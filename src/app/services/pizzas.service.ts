import {Injectable} from '@angular/core';
import {Pizza} from "../models/pizza";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  private dbPath = '/pizzas';
  public pizzas: AngularFireList<Pizza>;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.pizzas = this.db.list(this.dbPath);
  }

  getAll(): AngularFireList<Pizza> {
    return this.pizzas;
  }

  create(dt: Pizza): any {
    return this.pizzas.push(dt);
  }

  update(key: string, value: any): Promise<void> {
    return this.pizzas.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.pizzas.remove(key);
  }

  public logueado() {
    return this.auth.authState;
  }

  public async logout() {
    return await this.auth.signOut()
  }

  public async login(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      return null;
    }

  }

}
