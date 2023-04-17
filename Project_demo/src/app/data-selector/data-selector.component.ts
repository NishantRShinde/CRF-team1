import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { InternalDataSelectorComponent } from '../internal-data-selector/internal-data-selector.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css'],

})
export class DataSelectorComponent implements OnInit {
  [x: string]: any;
  isAtLeastOneCheckboxSelected = false;

  constructor( public dialogRef: MatDialogRef<DataSelectorComponent>,
    public router: Router,
    public dialog: MatDialog
    
    ) { }

  updateCheckboxSelection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call(checkboxes, (checkbox: HTMLInputElement) => checkbox.checked);
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }
  ngOnInit(): void { }

  public openNewDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/third']);

    const dialogRef = this.dialog.open(InternalDataSelectorComponent, {
      width: '540px',
      position: { top: '4.7%', left: '34%' },
      panelClass: 'custom-dialog-container'
    });
  }
  }






