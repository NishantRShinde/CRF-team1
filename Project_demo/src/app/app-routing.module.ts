import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { InternalDataSelectorComponent } from './internal-data-selector/internal-data-selector.component';
import { LastDataSelectorComponent } from './last-data-selector/last-data-selector.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'second', component: DataSelectorComponent },
  { path: 'third', component: InternalDataSelectorComponent }
];



@NgModule({
  
})
export class AppRoutingModule { }
