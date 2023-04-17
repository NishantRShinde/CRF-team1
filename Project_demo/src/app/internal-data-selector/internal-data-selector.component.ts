
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LastDataSelectorComponent } from '../last-data-selector/last-data-selector.component';
import { DataSelectorComponent } from '../data-selector/data-selector.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-internal-data-selector',
  templateUrl: './internal-data-selector.component.html',
  styleUrls: ['./internal-data-selector.component.css']
})


export class InternalDataSelectorComponent implements OnInit {
  


  isAtLeastOneCheckboxSelected = false; 
  constructor(public router: Router, public dialog: MatDialog) { }


  updateCheckboxSelection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call(checkboxes, (checkbox: HTMLInputElement) => checkbox.checked);
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }

  ngOnInit(): void {

  }

  
  
  public goBack(): void {
    const dialogRef = this.dialog.open(DataSelectorComponent, {
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
