import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { InternalDataSelectorComponent } from '../internal-data-selector/internal-data-selector.component';

@Component({
    selector: 'app-data-selector',
    templateUrl: './data-selector.component.html',
    styleUrls: ['./data-selector.component.css'],
   
  })
export class DataSelectorComponent implements OnInit {
  [x:string]:any;
  // dialog: any;

  // constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<DataSelectorComponent>) { }

  // ngOnInit(): void {

  constructor(public dialog:MatDialog){}
    ngOnInit(): void{}
  
  public openNewDialog():void{
    const dialogRef=this.dialog.open(InternalDataSelectorComponent,{
      width:'500px',

      position:{top:'#',left:'30%'},
        panelClass:'custom-dialog-container'
    });

  //   openNewDialog: void {
  //     const dialogRef = this.dialog.open(InternalDataSelectorComponent, {
  //       width: '500px',
        
        
  //     })
  // }
}}



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

// }
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-data-selector-page',
//   templateUrl: './data-selector-page.component.html',
//   styleUrls: ['./data-selector-page.component.css']
// })
// export class DataSelectorPageComponent {}
