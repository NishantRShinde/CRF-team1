import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSummaryComponent } from './data-summary/data-summary.component';

const routes: Routes = [
  {path:'data-summary', component: DataSummaryComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
