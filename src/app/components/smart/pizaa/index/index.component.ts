import {Component} from '@angular/core';
import {PizzasService} from "../../../../services/pizzas.service";
import {Pizza} from "../../../../models/pizza";
import {map, Observable} from "rxjs";
import {Helper} from "../../../../helpers/helper";
import {MemoryService} from "../../../../utils/memory.service";
import {MatDialog} from "@angular/material/dialog";
import {SmartLoginComponent} from "../../login/smart-login/smart-login.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CreateComponent} from "../create/create.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  public arrPizzas: any;
  public arrPizzasCard: any;
  public total: number = 0;
  public estado: any;

  constructor(private pizzaService: PizzasService, private memoryService: MemoryService,
              public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.arrPizzasCard = [];
    this.index();
    this.listar();
    this.logueado();
  }

  public async logueado() {
    let r = await this.usuariologueado();
    this.estado = (r != null);
  }

  public async logout() {
    await this.pizzaService.logout();
    this.logueado();
  }

  public login() {
    let dialogRef = this.dialog.open(SmartLoginComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loginMailAndPassword(result);
    });
  }

  public createPizza() {
    let dialogRef = this.dialog.open(CreateComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      let pizza: Pizza = new Pizza();
      pizza.key = Helper.uuidv4();
      pizza.description = result.description;
      pizza.precio = result.precio;
      pizza.title = result.title;
      pizza.img = Helper.getRandomNumber().toString();
      this.pizzaService.create(pizza).then(() => {
        console.log('Created new item successfully!');
      });
    });
  }


  public async loginMailAndPassword(data: any) {
    let ux: any = await this.pizzaService.login(data.username, data.password);
    if (ux == null) {
      this.snackBar.open('Nombre de usuario y/o contraseña inválidos.', 'OK');
    } else {
      this.snackBar.open('Bienvenido al sistema de administración de productos.', 'OK');
      this.logueado();
    }
  }

  public index(): void {
    this.pizzaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(data => {
      this.arrPizzas = data;
    });
  }

  public async listar() {
    try {
      this.arrPizzasCard = [];
      this.memoryService.key = "CARD";
      let data = await this.memoryService.getMemory();
      const groupedAndCounted = JSON.parse(data).reduce((acc: any, curr: any) => {
        const key = curr.key;
        const existingItem = acc.find((item: any): boolean => item.key === key);
        if (existingItem) {
          existingItem.count++;
        } else {
          acc.push({...curr, count: 1});
        }
        return acc;
      }, []);
      let total: any = 0;
      for (let r of groupedAndCounted) {
        total += (r.count * r.precio);
      }
      this.total = total;
      this.arrPizzasCard = groupedAndCounted;
    } catch (e) {
    }
  }

  public async quitar(piza: Pizza) {
    this.memoryService.key = "CARD";
    let data = await this.memoryService.getMemory();
    let pizzas = JSON.parse(data).filter((pizza: any) => pizza.key !== piza.key);
    this.memoryService.value = JSON.stringify(pizzas);
    await this.memoryService.setMemory();
    this.listar();
  }

  public async onDumbEvent(pizza: Pizza): Promise<void> {
    let storedKey: string = "CARD";
    let card: any[] = [];
    this.memoryService.key = storedKey;
    try {
      const storedData = await this.memoryService.getMemory();
      if (storedData) {
        card = JSON.parse(storedData);
      }
    } catch (error) {
      console.error("Error while parsing stored data:", error);
    }
    card.push(pizza);
    const updatedData: string = JSON.stringify(card);
    this.memoryService.value = updatedData;
    try {
      await this.memoryService.setMemory();
    } catch (error) {
      console.error("Error while storing updated data:", error);
    }
    this.listar();
  }

  public usuariologueado() {
    return new Promise((resolve, reject) => {
      this.pizzaService.logueado().subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  public pedido() {
    let html = 'Por favor, desearía realizar el siguiente pedido:';
    for (let pizza of this.arrPizzasCard) {
      html += `(${pizza.count}) *${pizza.title}* `;
    }
    window.open('https://wa.me/59168087202/?text=' + html);
  }
}
