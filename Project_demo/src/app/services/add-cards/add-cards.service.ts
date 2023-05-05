import { Injectable } from '@angular/core';
import { CardDesignComponent } from 'src/app/card-design/card-design.component';
import { CardComponent } from 'src/app/card-design/card/card.component';
@Injectable({
  providedIn: 'root'
})
export class AddCardsService {
  clickType: "Table" | "Line" | "" = "";
  tableNumber: number = 0;
  lineChartNumber: number = 0;
  cardElement: any;

  constructor() { }

  addTableChart(chartType: "Table" | "Line"): void {
    this.clickType = chartType;
    this.tableNumber++;
  }
  addLineChart(chartType: "Table" | "Line"): void {
    this.clickType = chartType;
    this.lineChartNumber++;
  }
}
