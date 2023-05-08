import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('cardHolder') cardHolder: any;
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
  chartOptions: { class: string; name: string }[] = [
    { class: 'bi bi-table', name: 'Table' },
    { class: 'bi bi-graph-up', name: 'Line chart' },
    { class: 'bi bi-bar-chart-line-fill', name: 'Column chart' },
    { class: 'bi bi-bar-chart-steps', name: 'Bar chart' },
    { class: 'bi bi-pie-chart-fill', name: 'Pie chart' },
    { class: 'bi bi-border-inner', name: 'Scatter chart' },
  ];
  // isloading: boolean = true;
  // showActualFact: boolean = false;
  rowData: any;
  colData: any;
  // columnDefs!: ColDef[];

  showBottomBar = false;
  showRunButton: boolean = true;

  cardList!: {
    type: string;
    title: string;
    columns: any;
    showActualFact: boolean;
    viewStatus:string;
  }[];

  text!: string;
  cardTitle!: string;

  constructor(
    public shimmerService: ShimmerEffectService,
    public datasetSelectorService: DatasetSelectorService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get('../../assets/jsonfiles/97210-RB_RULE.json')
      .subscribe((data) => {
        this.rowData = data;
      });
    this.cardList = [
      {
        type: 'table',
        title: 'Table-1',
        columns: this.getColumns(false),
        showActualFact: false,
        viewStatus:'preview',
      },
    ];
    // this.cardList[0].columns = this.getColumns();
  }

  getColumns(showActualFact: boolean) {
    return [
      {
        field: 'market',
        headerName: 'Markets',
        headerClass: 'header-cell',
        cellClass: 'body-cell',
        width: 137,
      },
      {
        field: 'period',
        headerName: 'Periods',
        headerClass: 'header-cell',
        cellClass: 'body-cell',
        width: 134,
      },
      {
        field: 'product',
        headerName: 'Products',
        headerClass: 'header-cell',
        cellClass: 'body-cell',
        width: 205,
      },
      {
        field: '$',
        headerClass: 'header-cell',
        cellClass: 'body-cell',
        width: 180,

        valueFormatter: this.factFormatter.bind(this),
        valueFormatterParams: { showActualFact: showActualFact },
        // cellRenderer: (params: any) => {
        //   if (!this.showActualFact) {
        //     return '###';
        //   } else {
        //     return params.value;
        //   }
        // },
      },
    ];
  }

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 },
  // ];

  factFormatter(params: any) {
    const showActualFact = params.colDef.valueFormatterParams.showActualFact;
    if (showActualFact) {
      const numberValue = parseFloat(params.value);
      const formattedValue = numberValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return formattedValue;
    } else {
      return '###';
    }
  }

  addCard(type: string) {
    let listLength = this.cardList.length + 1;
    // this.showActualFact = false;
    this.showRunButton = true;
    this.shimmerService.shimmerEffect();
    this.showBottomBar = false;
    if (type === 'Table') {
      this.cardList.push({
        type: 'table',
        title: 'Table-' + listLength.toString(),
        columns: this.getColumns(false),
        showActualFact: false,
        viewStatus:'preview',
      });
    } else {
      this.cardList.push({
        type: 'lineChart',
        title: 'Chart-' + listLength.toString(),
        columns: this.getColumns(false),
        showActualFact: false,
        viewStatus:'preview',

      });
    }
    this.showChartList = false;
    setTimeout(() => {
      this.cardHolder.nativeElement.scrollTop =
        this.cardHolder.nativeElement.scrollHeight;
    }, 0);
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

  // Run-button
  RunButton() {
    // this.showActualFact = !this.showActualFact; 
    // this.columnDefs = this.getColumns(); 
    for (let i of this.cardList) { 
      if (!i.showActualFact) { 
        i.showActualFact = true; 
        i.columns = this.getColumns(true); 
        i.viewStatus='running' 
      } 
      else{ 
        i.viewStatus='actual'; 
      } 
    } 
    this.shimmerService.shimmerEffect();
    this.showBottomBar = true;
    this.showRunButton = false;
  }
  cancelButton() {
    // if (this.showActualFact) { 
    //   this.showActualFact = false; 
    for(let i of this.cardList){
      if(i.viewStatus='running'){
        i.viewStatus='preview';
        i.showActualFact=false;
        i.columns=this.getColumns(false)
      }
    }
      this.showBottomBar = false;
      this.showRunButton = true;
    
  }
} 

// export class MyComponent {
//   dataType: string = 'Tables'; // initial value set to Tables
//   tableData: any[] = []; // actual data for table
//   chartData: any[] = []; // actual data for line chart

//   // function to fetch actual data based on current selected data type
//   fetchData() {
//     if (this.dataType === 'Tables') {
//       // fetch actual data for table
//       // assign the fetched data to this.tableData
//     } else if (this.dataType === 'Line Chart') {
//       // fetch actual data for line chart
//       // assign the fetched data to this.chartData
//     }
//   }
// }
