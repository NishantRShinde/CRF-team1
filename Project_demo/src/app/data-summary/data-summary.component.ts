import { Component } from '@angular/core';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.css']
})
export class DataSummaryComponent {
//  myFunction(): any{
//   alert("Successfully executed!")
//  }
 openNav(): any {
  document.getElementById("mySidebar")!.style.width = "250px";
  document.getElementById("main")!.style.marginRight = "250px";
}

closeNav() {
  document.getElementById("mySidebar")!.style.width = "0";
  document.getElementById("main")!.style.marginRight= "0";
}

}