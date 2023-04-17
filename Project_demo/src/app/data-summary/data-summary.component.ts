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
//  openNav(): any {
//   x =  document.getElementById("mySidebar")
//   y =  document.getElementById("main")
//   if(X!=null && y!=null){
//     x.style.width = "330px";
//     y.style.marginRight = "330px";
//   }
//   else{
//     alert("oops! Invalid Entry.")
//   }
// }

openNav(): any {
  document.getElementById("mySidebar")!.style.width = "325px";
  document.getElementById("main")!.style.marginRight = "325px";
}

closeNav() {
  document.getElementById("mySidebar")!.style.width = "0";
  document.getElementById("main")!.style.marginRight= "0";
}

}