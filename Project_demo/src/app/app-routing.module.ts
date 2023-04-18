import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataSummaryComponent } from './data-summary/data-summary.component';

const routes: Routes = [
  {path:'data-summary', component: DataSummaryComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }