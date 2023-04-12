import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-data-selector',
    templateUrl: './data-selector.component.html',
    styleUrls: ['./data-selector.component.css']
  })
export class DataSelectorComponent implements OnInit {

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<DataSelectorComponent>) { }

  ngOnInit(): void {
  }

}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-data-selector-page',
//   templateUrl: './data-selector-page.component.html',
//   styleUrls: ['./data-selector-page.component.css']
// })
// export class DataSelectorPageComponent {

// }
