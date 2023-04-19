import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-data-summary',
  templateUrl: './data-summary.component.html',
  styleUrls: ['./data-summary.component.scss']
})
export class DataSummaryComponent {
  content: any
  component: any
  constructor(private http: HttpClient){
    this.http.get("../../assets/Json/content.json").subscribe((res) => {
      this.content = res;
      this.component = this.content.facts;
    });
  }

  
}
