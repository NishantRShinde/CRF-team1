import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSelectorComponent } from './data-selector/data-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_demo';
  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DataSelectorComponent, {
      width: '600px',
      position:{top:'#',left:'30%'},
      panelClass:'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
