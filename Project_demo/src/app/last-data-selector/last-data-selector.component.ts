import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InternalDataSelectorComponent } from '../internal-data-selector/internal-data-selector.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-last-data-selector',
  templateUrl: './last-data-selector.component.html',
  styleUrls: ['./last-data-selector.component.css']
})
export class LastDataSelectorComponent implements OnInit {
  isAtLeastOneCheckboxSelected = false;
  constructor(public router: Router, public dialog: MatDialog) { }
 

  updateCheckboxSelection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call(checkboxes, (checkbox: HTMLInputElement) => checkbox.checked);
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }
  ngOnInit(): void {
  }
  goBack1(): void {
    const dialogRef = this.dialog.open(InternalDataSelectorComponent, {
      width: '540px',
      position: { top: '4.7%', left: '34%' },
      panelClass: 'custom-dialog-container'
    })
  }
  public openNewDialog(): void {

    const dialogRef = this.dialog.open(LastDataSelectorComponent, {
      width: '540px',
      position: { top: '4.7%', left: '34%' },
      panelClass: 'custom-dialog-container'
    });
  }
}

