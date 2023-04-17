import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { InternalDataSelectorComponent } from './internal-data-selector/internal-data-selector.component';
import { LastDataSelectorComponent } from './last-data-selector/last-data-selector.component';
import { FormsModule } from '@angular/forms'; // <-- import the FormsModule

@NgModule({
  
  declarations: [
    AppComponent,
    DataSelectorComponent,
    InternalDataSelectorComponent,
    LastDataSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }