import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import {map} from "rxjs";

export class Tutorial {
  key?: string | null;
  title?: string;
  description?: string;
  published?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tienda3';
  private dbPath = '/tutorials';
  public tutorialsRef: AngularFireList<Tutorial>;

  constructor(public dialog: MatDialog, private auth: AngularFireAuth, private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public create(): any {
    let tutorial = {
      key: "1",
      title: "Miguel",
      description: "Angel",
      published: false,
    }
    return this.tutorialsRef.push(tutorial);
  }

  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }

  public getAllx() {
    this.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(data => {
      console.log(data)
    });
  }

  public async cerrar() {
    return await this.auth.signOut()
  }

  /************/
  public async loginWithGoogle() {
    try {
      return await this.auth.signInWithEmailAndPassword("miguel@gmil.com", "6957636");
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async registrar() {
    try {
      return await this.auth.createUserWithEmailAndPassword("miguelANgel@gmil.com", "6957636");
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public async listar() {
    try {
      return null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }


}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {
}
