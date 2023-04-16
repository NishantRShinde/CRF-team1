import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UntitledReportComponent } from './untitled-report/untitled-report.component';

@NgModule({
  declarations: [
    AppComponent,
    UntitledReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
