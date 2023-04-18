import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataSelectorComponent } from './data-selector/data-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project_demo';
  buttonVisible = true;

  // constructor(private dialog: MatDialog,
  //   // public router: Router
  //   ) { }


  openNewDialog(): void {
    // this.router.navigate(['/second']);

    //  this.buttonVisible = false;
    // const dialogRef = this.dialog.open(DataSelectorComponent, {
    //   width: '540px',
    //   position: { top: '4.7%', left: '34%' },
    //   panelClass: 'custom-dialog-container'
    // });

    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
