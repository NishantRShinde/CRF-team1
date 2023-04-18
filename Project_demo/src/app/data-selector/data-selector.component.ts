import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.scss'],
})
export class DataSelectorComponent implements OnInit {

  heading: string = 'Choose source type';
  [x: string]: any;
  isAtLeastOneCheckboxSelected = false;

  // constructor( public dialogRef: MatDialogRef<DataSelectorComponent>,
  //   // public router: Router,
  //   public dialog: MatDialog

  //   ) { }
  dataset: any
  panel: any;
  constructor(private http: HttpClient,public dialog: MatDialog) {

    this.http.get("../../assets/jsonfiles/dataset.json").subscribe((res) => {

      this.dataset = res;

      console.log('--- result : ', this.dataset);

      this.panel = this.dataset.panels_1;
      console.log(this.panel);



      // this.panel = this.dataset.panel_2;

      // this.panel = this.dataset.panel_3;

    });

  }
  panelnumber: number = 1;

  Onnext(): void {
    this.panelnumber++;
    if (this.panelnumber == 1) {
      this.panel = this.dataset.panels_1;
      this.heading = "Choose source type";
    }
    else if (this.panelnumber == 2) {
      this.panel = this.dataset.panels_2;
      this.heading = "Retail Measurement";
    }
    else if (this.panelnumber == 3) {
      this.panel = this.dataset.panels_3;
      this.heading = "SYNDICATED US";
    }
    else if (this.panelnumber >= 3) {
      this.panelnumber = 1;
      this.panel = this.dataset.panels_1;
      this.heading = "Choose source type";
    }
  }

  updateCheckboxSelection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call(checkboxes, (checkbox: HTMLInputElement) => checkbox.checked);
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }
  ngOnInit(): void { }

  // public openNewDialog(): void {
  //   this.dialogRef.close();

  //   const dialogRef = this.dialog.open(InternalDataSelectorComponent, {
  //     width: '540px',
  //     position: { top: '4.7%', left: '34%' },
  //     panelClass: 'custom-dialog-container'
  //   });
  // }
}






