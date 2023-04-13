import { Location } from '@angular/common';
import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog ,MatDialogRef} from '@angular/material/dialog';

import { DataSelectorComponent } from '../data-selector/data-selector.component';


@Component({
  selector: 'app-internal-data-selector',
  templateUrl: './internal-data-selector.component.html',
  styleUrls: ['./internal-data-selector.component.css']
})
export class InternalDataSelectorComponent implements OnInit {
   isAtLeastOneCheckboxSelected = false; //for next disable
  constructor(private location: Location,public dialog:MatDialog ){ }
  goBack():void {
    this.location.back();
    
  }
  
  updateCheckboxSelection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call(checkboxes, (checkbox: HTMLInputElement) => checkbox.checked);
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  openNewDialog():void{
    const dialogRef=this.dialog.open(InternalDataSelectorComponent,{
      width:'500px'
    });
  }

}

// @Component({
//   selector: 'app-dialog-content',
//   template: `
//     <h2>Retail Measurement</h2>
//     <p>Choose a dataset</p>
//     <div mat-dialog-actions>
//       <button mat-button (click)="onClose()">Close</button>
//     </div>
//   `
// })
// export class InternalDataSelectorComponent {

//   constructor(public dialogRef: MatDialogRef<InternalDataSelectorComponent>) { }

//   onClose(): void {
//     this.dialogRef.close();
//   }