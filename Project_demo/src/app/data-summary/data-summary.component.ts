import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import content from "./src/assets/Json/content.json";

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss'],
})
export class DataSummaryComponent {
  mainObj: any;
  // mainObj: Dict;
  component: any;
  constructor(private http: HttpClient) {
    this.http.get('../../assets/Json/content.json').subscribe((res) => {
      this.mainObj = res;
      console.log('it comes up to here');
      console.log('--- result : ', this.mainObj);
    });
    // this.mainObj = this.obj;
  }

  content: Dict = {
    Facts: ['', '$'],
    Products: ['of', 'Beer', 'Coke'],
    Markets: ['in', 'US', 'UK'],
    Periods: ['during', '13 4 Weeks'],
  };

  keys(): Array<string> {
    return Object.keys(this.mainObj);
  }
}

interface Dict {
  [index: string]: Array<any>;
}

//  myFunction(): any{
//   alert("Successfully executed!")
//  }
// previous: any;
// isFirst: boolean = true;
// openClose(sidebar: String) {
//   if (this.isFirst) {

//     this.openNav(sidebar);
//     this.isFirst = false;
//   }
//   else {
//     this.closeNav();
//     this.openNav(sidebar);
//   }
// }

//   openNav(sidebar: String) {
//     var z = document.getElementById("main");
//     var mainSelect = <HTMLInputElement>document.getElementById('mainSelect');
//     switch (sidebar) {
//       case "facts":
//         var x = document.getElementById("mySidebar")
//         var y = document.getElementById("factsSidebar")
//         if (x != null && y != null && z != null && mainSelect != null) {
//           mainSelect.value = "facts";
//           x.style.width = "325px";
//           y.style.width = "295px";
//           z.style.marginRight = "325px";
//         }
//         else {
//           alert("oops! Invalid Entry.")
//         }
//         this.previous = y
//         break;

//       case "products":
//         var x = document.getElementById("mySidebar")
//         var y = document.getElementById("productsSidebar")
//         if (x != null && y != null && z != null && mainSelect != null) {
//           mainSelect.value = "products";
//           x.style.width = "325px";
//           y.style.width = "295px";
//           z.style.marginRight = "325px";
//         }
//         else {
//           alert("oops! Invalid Entry.");
//         }
//         this.previous = y
//         break;

//     }
//   }

//   closeNav(){
//     var x = document.getElementById("mySidebar")
//     var z = document.getElementById("main");
//     if (x != null && this.previous != null && z != null){
//       x.style.width = '0px';
//       this.previous.style.width = "0px";
//       z.style.marginRight = "0px";
//     }
//     else{
//       alert("oops! Invalid Entry.");
//     }
//   }

//   // openFactsNav() {
//   //   var x = document.getElementById("mySidebar")
//   //   var y = document.getElementById("factsSidebar")
//   //   var z = document.getElementById("main")
//   //   if (x != null && y != null && z != null) {
//   //     x.style.width = "325px";
//   //     y.style.width = "325px";
//   //     z.style.marginRight = "325px";
//   //   }
//   //   else {
//   //     alert("oops! Invalid Entry.")
//   //   }
//   // }

//   // closeFactsNav() {
//   //   var x = document.getElementById("mySidebar")
//   //   var y = document.getElementById("factsSidebar")
//   //   var z = document.getElementById("main")
//   //   if (x != null && y != null && z != null) {
//   //     x.style.width = "0px";
//   //     y.style.width = "0px";
//   //     z.style.marginRight = "0px";
//   //   }
//   //   else {
//   //     alert("oops! Invalid Entry.")
//   //   }
//   // }

//   // openProductsNav() {
//   //   var x = document.getElementById("mySidebar")
//   //   var y = document.getElementById("productsSidebar")
//   //   var z = document.getElementById("main")
//   //   if (x != null && y != null && z != null) {
//   //     x.style.width = "325px";
//   //     y.style.width = "325px";
//   //     z.style.marginRight = "325px";
//   //   }
//   //   else {
//   //     alert("oops! Invalid Entry.")
//   //   }
//   // }

//   // closeProductsNav() {
//   //   var x = document.getElementById("mySidebar")
//   //   var y = document.getElementById("productsSidebar")
//   //   var z = document.getElementById("main")
//   //   if (x != null && y != null && z != null) {
//   //     x.style.width = "0px";
//   //     y.style.width = "0px";
//   //     z.style.marginRight = "0px";
//   //   }
//   //   else {
//   //     alert("oops! Invalid Entry.")
//   //   }
//   // }

//   // openNav(): any {
//   //   document.getElementById("mySidebar")!.style.width = "325px";
//   //   document.getElementById("main")!.style.marginRight = "325px";
//   // }

//   // closeNav() {
//   //   document.getElementById("mySidebar")!.style.width = "0";
//   //   document.getElementById("main")!.style.marginRight= "0";
//   // }
