import { Component, OnInit } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';
import { DatasetSelectorService } from '../services/open-dataset-selector/open-dataset-selector.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent implements OnInit {
  reportTitle: string = 'Untitled-Report';
  oldReportTitle: string = 'Untitled-Report';
  undo: string = '';
  redo: string = '';
  headerMore: boolean = false;
  undoIconDisable: boolean = true;
  redoIconDisable: boolean = true;
  downloadIconDisable: boolean = true;
  saveIconDisable: boolean = false;
  addcardIconDisable: boolean = false;
  moreIconDisable: boolean = false;
  expandCard: boolean = false;
  showChartList: boolean = false;
  chartOptions: {class: string, name: string}[] = [{class: 'bi bi-table', name: 'Table'},{class: 'bi bi-graph-up', name: 'Line chart'},{class: 'bi bi-bar-chart-line-fill', name: 'Column chart'},{class: 'bi bi-bar-chart-steps', name: 'Bar chart'},{class: 'bi bi-pie-chart-fill', name: 'Pie chart'},{class: 'bi bi-border-inner', name: 'Scatter chart'}];
  // isloading: boolean = true;

  constructor(
    public shimmerService: ShimmerEffectService,
    public datasetSelectorService: DatasetSelectorService
  ) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isloading = false;
    // }, 1000);
  }

  openCard(index: number): void {
    console.log(index);
    this.showChartList = false;
    
  }

  saveInputText() {
    this.undo = this.oldReportTitle;
    this.undoIconDisable = false;
    this.oldReportTitle = this.reportTitle;
  }
  saveReportTitle(): void {
    if (!this.reportTitle) {
      this.reportTitle = 'Untitled-Report';
      this.undoIconDisable = false;
      this.redoIconDisable = this.redo ? false : true;
      return;
    }
    this.undo = this.reportTitle;
    this.undoIconDisable = false;
    this.redoIconDisable = true;
  }

  undoClick() {
    this.redo = this.reportTitle;
    this.reportTitle = this.undo;
    this.undoIconDisable = true;
    this.redoIconDisable = false;
  }

  redoClick() {
    this.reportTitle = this.redo;
    this.undoIconDisable = false;
    this.redoIconDisable = true;
  }

  // shimmer_effect(){
  //   this.isloading = true;
  //   setTimeout(() => {
  //     this.isloading = false;
  //   }, 1500);
  // }
}
