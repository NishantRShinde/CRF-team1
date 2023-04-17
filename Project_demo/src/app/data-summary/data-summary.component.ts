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
  previous: any;
  isFirst: boolean = true;
  openClose(sidebar: String) {
    if (this.isFirst) {

      this.openNav(sidebar);
      this.isFirst = false;
    }
    else {
      this.closeNav();
      this.openNav(sidebar);
    }
  }

  openNav(sidebar: String) {
    var z = document.getElementById("main");
    switch (sidebar) {
      case "facts":
        var x = document.getElementById("mySidebar")
        var y = document.getElementById("factsSidebar")
        if (x != null && y != null && z != null) {
          x.style.width = "325px";
          y.style.width = "325px";
          z.style.marginRight = "325px";
        }
        else {
          alert("oops! Invalid Entry.")
        }
        this.previous = y
        break;

      case "products":
        var x = document.getElementById("mySidebar")
        var y = document.getElementById("productsSidebar")
        if (x != null && y != null && z != null) {
          x.style.width = "325px";
          y.style.width = "325px";
          z.style.marginRight = "325px";
        }
        else {
          alert("oops! Invalid Entry.");
        }
        this.previous = y
        break;
        
    }
  }

  closeNav(){
    var x = document.getElementById("mySidebar")
    var z = document.getElementById("main");
    if (x != null && this.previous != null && z != null){
      x.style.width = '0px';
      this.previous.style.width = "0px";
      z.style.marginRight = "0px";
    }
    else{
      alert("oops! Invalid Entry.");
    }
  }

  // openFactsNav() {
  //   var x = document.getElementById("mySidebar")
  //   var y = document.getElementById("factsSidebar")
  //   var z = document.getElementById("main")
  //   if (x != null && y != null && z != null) {
  //     x.style.width = "325px";
  //     y.style.width = "325px";
  //     z.style.marginRight = "325px";
  //   }
  //   else {
  //     alert("oops! Invalid Entry.")
  //   }
  // }

  // closeFactsNav() {
  //   var x = document.getElementById("mySidebar")
  //   var y = document.getElementById("factsSidebar")
  //   var z = document.getElementById("main")
  //   if (x != null && y != null && z != null) {
  //     x.style.width = "0px";
  //     y.style.width = "0px";
  //     z.style.marginRight = "0px";
  //   }
  //   else {
  //     alert("oops! Invalid Entry.")
  //   }
  // }

  // openProductsNav() {
  //   var x = document.getElementById("mySidebar")
  //   var y = document.getElementById("productsSidebar")
  //   var z = document.getElementById("main")
  //   if (x != null && y != null && z != null) {
  //     x.style.width = "325px";
  //     y.style.width = "325px";
  //     z.style.marginRight = "325px";
  //   }
  //   else {
  //     alert("oops! Invalid Entry.")
  //   }
  // }

  // closeProductsNav() {
  //   var x = document.getElementById("mySidebar")
  //   var y = document.getElementById("productsSidebar")
  //   var z = document.getElementById("main")
  //   if (x != null && y != null && z != null) {
  //     x.style.width = "0px";
  //     y.style.width = "0px";
  //     z.style.marginRight = "0px";
  //   }
  //   else {
  //     alert("oops! Invalid Entry.")
  //   }
  // }

  // openNav(): any {
  //   document.getElementById("mySidebar")!.style.width = "325px";
  //   document.getElementById("main")!.style.marginRight = "325px";
  // }

  // closeNav() {
  //   document.getElementById("mySidebar")!.style.width = "0";
  //   document.getElementById("main")!.style.marginRight= "0";
  // }



}