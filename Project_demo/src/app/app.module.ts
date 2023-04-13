import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { InternalDataSelectorComponent } from './internal-data-selector/internal-data-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSelectorComponent,
    InternalDataSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }