import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UntitledReportComponent } from './untitled-report/untitled-report.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrandbarComponent } from './brandbar/brandbar.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { ReportPageFooterComponent } from './untitled-report/report-page-footer/report-page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandbarComponent,
    UntitledReportComponent,
    DataSummaryComponent,
    DataSelectorComponent,
    ReportPageFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/buildAtable', pathMatch: 'full' },
      { path: 'buildATable', component: AppComponent },
      { path: 'home', component: AppComponent },
      { path: 'monitorMyBusiness', component: AppComponent },
      { path: 'chooseATemplate', component: AppComponent },
      { path: 'findMyStuff', component: AppComponent },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
