import { Component } from '@angular/core';
import { ShimmerEffectService } from 'src/app/services/shimmer-effect.service';

@Component({
  selector: 'app-report-page-footer',
  templateUrl: './report-page-footer.component.html',
  styleUrls: ['./report-page-footer.component.scss']
})
export class ReportPageFooterComponent {
  isDatasetSelector:boolean = false;
  dataSourcelist:string[] = ['Retail Measurement','SYNDICATED US','97210-RB_RULE'] ;

  constructor(public shimmerService:ShimmerEffectService){}

  OpenDatasetSelector(){
    this.isDatasetSelector = true;
  }

}
