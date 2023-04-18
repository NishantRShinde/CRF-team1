import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms'; // <-- import the FormsModule
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  
  declarations: [
    AppComponent,
    DataSelectorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    FormsModule ,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"app-data-selector",
        component:DataSelectorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }