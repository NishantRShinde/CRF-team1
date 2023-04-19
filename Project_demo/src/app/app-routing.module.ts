import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataSelectorComponent } from './data-selector/data-selector.component';

const routes: Routes = [
  {path:'data-summary', component: DataSelectorComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }