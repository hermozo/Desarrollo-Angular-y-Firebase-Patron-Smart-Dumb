import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from "./components/smart/pizaa/create/create.component";
import {CommonModule} from "@angular/common";
import {IndexComponent} from "./components/smart/pizaa/index/index.component";
import {ViewComponent} from "./components/smart/pizaa/view/view.component";

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'index', component: IndexComponent},

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
