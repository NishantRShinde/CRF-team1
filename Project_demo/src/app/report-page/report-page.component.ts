import { Component, OnInit } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';
import { DatasetSelectorService } from '../services/open-dataset-selector/open-dataset-selector.service';
// import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

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
  // isloading: boolean = true;
  showActualPrice: boolean = false;
  rowData:any;

  constructor(
    public shimmerService: ShimmerEffectService,
    public datasetSelectorService: DatasetSelectorService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get('../../assets/jsonfiles/97210-RB_RULE.json').subscribe(data => {
      this.rowData = data;
    });
  }

  columnDefs: ColDef[] = [
    { field: 'market', headerName:"Markets", headerClass: 'header-cell', cellStyle: { borderRight: '1px solid rgb(204,204,204)', borderBottom: '1px solid rgb(204,204,204)' } },
    { field: 'period', headerName:"Periods", headerClass: 'header-cell', cellStyle: { borderRight: '1px solid rgb(204,204,204)', borderBottom: '1px solid rgb(204,204,204)' } },
    { field: 'product', headerName:"Products", headerClass: 'header-cell', cellStyle: { borderRight: '1px solid rgb(204,204,204)', borderBottom: '1px solid rgb(204,204,204)' } },
    {
      field: '$', headerClass: 'header-cell', cellStyle: { borderRight: '1px solid rgb(204,204,204)', borderBottom: '1px solid rgb(204,204,204)' },
      valueFormatter: this.priceFormatter.bind(this),
    },
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 },
  // ];

  priceFormatter(params: any) {
    if (this.showActualPrice) {
      return params.value;
    } else {
      return '###';
    }
  }

  saveInputText() {
    this.undo = this.oldReportTitle;
    this.undoIconDisable = false;
    this.oldReportTitle = this.reportTitle;
  }
  saveReportTitle(): void {
    this.showActualPrice = !this.showActualPrice;
    console.warn(this.showActualPrice);
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
