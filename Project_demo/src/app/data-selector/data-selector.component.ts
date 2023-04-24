import { Component, EventEmitter, Input, Output } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service'; 
import { DatasetSelectorService } from '../services/open-dataset-selector/open-dataset-selector.service';

enum Panel {
  SourceType,
  Dataset,
  Dataview
}
@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.scss'],
})

export class DataSelectorComponent { 
  // output property declares an event emitter used to emit events with boolean values.an array of strings. component to parent;
  // @Output() ChangeBoolean = new EventEmitter<boolean>(); 
  // @Output() sendDataSources = new EventEmitter<string>();
  @Output() sendFooterContent = new EventEmitter<string>(); 
  listedDatasources: string[]; //arraylist oof selected datasource 
  heading: string = 'Choose source type';
  [x: string]: any;
  isAtLeastOneCheckboxSelected = false;

  dataset: any; 
  panel: any; 
  Panel=Panel;
  currentPanel = Panel.SourceType;

  constructor( 
    public shimmerService: ShimmerEffectService, 
    private http: HttpClient,
     public datasetSelectorservice:DatasetSelectorService,
  ) { 
    this.http.get('../../assets/jsonfiles/dataset.json').subscribe((res) => {
      this.dataset = res;
      this.panel = this.dataset.panels_1;
    });
    this.listedDatasources = []; 
  }

  currentTitle: string = ''; 
  // titleBeforeCurrent: string = ''; 

  onNext(): void {
    this.datasetSelected+=" | "+this.currentTitle
    this.listedDatasources.push(this.currentTitle); 
    this.currentPanel++; 
    if (this.currentPanel == Panel.Dataset) { 
      this.panel = this.dataset.panels_2; 
      this.heading = this.currentTitle; 
    } else if (this.currentPanel == Panel.Dataview) { 
      this.panel = this.dataset.panels_3; 
      this.heading = this.currentTitle; 
    } else { 
      this.panel = this.dataset.panels_1; 
      this.heading = 'Choose source type'; 
    } 
    this.isAtLeastOneCheckboxSelected = !this.isAtLeastOneCheckboxSelected; 
  }
  
  onback(): void {
    this.listedDatasources.pop(); 
    this.currentPanel--; 
    if (this.currentPanel == Panel.SourceType) { 
      this.panel = this.dataset.panels_1; 
      this.heading = 'Choose source type'; 
    } else if (this.currentPanel == Panel.Dataset) { 
      this.panel = this.dataset.panels_2; 
      this.heading = this.listedDatasources[this.listedDatasources.length - 1]; 
    } else { 
      this.panel = this.dataset.panels_3; 
      this.heading = this.listedDatasources[this.listedDatasources.length - 1]; 
    } 
    this.isAtLeastOneCheckboxSelected = !this.isAtLeastOneCheckboxSelected; 
  }
  
  closeDatasetSelector() { 
    this.datasetSelectorservice.isSelectorOpen=false;

    //closing container 
    // const temp: boolean = false;
    // this.ChangeBoolean.emit(temp);
  }

  // footercontent(datasetlists:string[]){
  //   let content: string = "NielsenIQ "
  //   content += datasetlists[0];
  //   for(let i=1; i<3; i++){
  //     content += " | " + datasetlists[i];
  //   }
  //   // console.log(content);
  //    return content;
  // }
  datasetSelected:string="NielsenIQ"


  applydataset() {
    this.datasetSelected+=" | "+this.currentTitle
    console.log(this.datasetSelected)
     this.listedDatasources.push(this.currentTitle);  
    this.datasetSelectorservice.isSelectorOpen=false;
    this.shimmerService.shimmerEffect(); 
    // let footerString=this.footercontent(this.listedDatasources);
    let footerString=this.datasetSelected;
    this.datasetSelectorservice.appliedDataset=footerString;
    this.datasetSelectorservice.isDataApplied=true;
  } 
  checkboxSelector(title: string) {//current title
    this.currentTitle = title; 
    this.isAtLeastOneCheckboxSelected = true; 
  }
}
