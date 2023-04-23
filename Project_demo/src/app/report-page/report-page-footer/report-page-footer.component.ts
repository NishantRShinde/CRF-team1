import { Component } from '@angular/core';
import { DatasetSelectorService } from 'src/app/services/open-dataset-selector/open-dataset-selector.service';
import { ShimmerEffectService } from 'src/app/services/shimmer-effect/shimmer-effect.service';

@Component({
  selector: 'app-report-page-footer',
  templateUrl: './report-page-footer.component.html',
  styleUrls: ['./report-page-footer.component.scss']
})
export class ReportPageFooterComponent {
  // @Output() isDatasetSelected = new EventEmitter<boolean>();

  constructor(public shimmerService: ShimmerEffectService,
              public datasetSelectorService: DatasetSelectorService,
    ){}

  // ngOnInit(): void {
  //   this.isDatasetSelected.emit(this.isSelected);
  // }

  OpenDatasetSelector(){
    this.datasetSelectorService.isSelectorOpen = true;
  }
}
