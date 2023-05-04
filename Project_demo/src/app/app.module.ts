import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ReportPageComponent } from './report-page/report-page.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrandbarComponent } from './brandbar/brandbar.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { ReportPageFooterComponent } from './report-page/report-page-footer/report-page-footer.component';
import { FormsModule } from '@angular/forms';
import { CardDesignComponent } from './card-design/card-design.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandbarComponent,
    ReportPageComponent,
    DataSummaryComponent,
    DataSelectorComponent,
    ReportPageFooterComponent,
    CardDesignComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'monitorMyBusiness', component: AppComponent },
      { path: 'chooseATemplate', component: AppComponent },
      { path: 'buildATable', component: AppComponent },
      { path: 'findMyStuff', component: AppComponent },
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
