import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDivider, MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import { UpdateComponent } from './components/smart/pizaa/update/update.component';
import { CreateComponent } from './components/smart/pizaa/create/create.component';
import { ViewComponent } from './components/smart/pizaa/view/view.component';
import { IndexComponent } from './components/smart/pizaa/index/index.component';
import {MatList, MatListItem} from "@angular/material/list";
import { DumbIndexComponent } from './components/dumb/pizaa/dumb-index/dumb-index.component';
import { DumbCreateComponent } from './components/dumb/pizaa/dumb-create/dumb-create.component';
import { DumbUpdateComponent } from './components/dumb/pizaa/dumb-update/dumb-update.component';
import { DumbViewComponent } from './components/dumb/pizaa/dumb-view/dumb-view.component';
import { DumbLoginComponent } from './components/dumb/login/dumb-login/dumb-login.component';
import { SmartLoginComponent } from './components/smart/login/smart-login/smart-login.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    CreateComponent,
    ViewComponent,
    IndexComponent,
    DumbIndexComponent,
    DumbCreateComponent,
    DumbUpdateComponent,
    DumbViewComponent,
    DumbLoginComponent,
    SmartLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatList,
    MatListItem,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
