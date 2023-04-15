import { Component } from '@angular/core';

@Component({
  selector: 'app-untitled-report',
  templateUrl: './untitled-report.component.html',
  styleUrls: ['./untitled-report.component.scss']
})
export class UntitledReportComponent {
  report_title: string = "Untitled-Report"
  undo: string = "";
  redo: string = "";
  undo_icon_disable: boolean = true;
  redo_icon_disable: boolean = true;
  download_icon_disable: boolean = true;
  save_icon_disable: boolean = false;
  addcard_icon_disable: boolean = false;
  more_icon_disable: boolean = false;

  save_report_title(title: string): void{
    if(!title){
      this.report_title = 'Untitled-Report';
      this.undo_icon_disable = false;
      this.redo_icon_disable = this.redo ? false:true;
      return ;
    }
    this.undo = this.report_title;
    this.report_title = title;
    this.undo_icon_disable = false;
    this.redo_icon_disable = true;
  }

  undo_click(){
    this.redo = this.report_title;
    this.report_title = this.undo;
    this.undo_icon_disable = true;
    this.redo_icon_disable = false;
  }

  redo_click(){
    this.report_title = this.redo;
    this.undo_icon_disable = false;
    this.redo_icon_disable = true;
  }

}
