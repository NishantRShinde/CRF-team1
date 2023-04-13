import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog ,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-internal-data-selector',
  templateUrl: './internal-data-selector.component.html',
  styleUrls: ['./internal-data-selector.component.css']
})
export class InternalDataSelectorComponent implements OnInit {
  constructor(public dialog:MatDialog){ }


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