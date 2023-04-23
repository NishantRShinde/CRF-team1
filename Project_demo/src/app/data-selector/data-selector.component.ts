import { Component, EventEmitter, Input, Output } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import { ShimmerEffectService } from '../services/shimmer-effect.service'; 
// import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service'; 

// import { DatasetSelector } from '../services/dataset-selector/dataset-selector.service'; 


@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.scss'],
})



export class DataSelectorComponent { 
  // output property declares an event emitter used to emit events with boolean values.an array of strings. component to parent;
  @Output() ChangeBoolean = new EventEmitter<boolean>(); 
  @Output() sendDataSources = new EventEmitter<string>(); 
// comment above 2 lines
  listedDatasources: string[]; //list oof selected datasource 
  heading: string = 'Choose source type';
  [x: string]: any;
  isAtLeastOneCheckboxSelected = false;

  dataset: any;
  panel: any;
  constructor( 
    public shimmerService: ShimmerEffectService, 
    private http: HttpClient,
    // public datasetSelectorservice:DatasetSelectorService,
  ) {
    this.http.get('../../assets/jsonfiles/dataset.json').subscribe((res) => {
      this.dataset = res;
      this.panel = this.dataset.panels_1;
    });
    this.listedDatasources = []; //list oof selected datasource
  }

  currentTitle: string = ''; 
  titleBeforeCurrent: string = ''; 

  panelnumber: number = 1; 
  // currentPanel: PanelNumber = PanelNumber.PANEL_1;


  onnext(): void {
    this.listedDatasources.push(this.currentTitle); 

    this.panelnumber++; 
    if (this.panelnumber == 1) { 
      this.panel = this.dataset.panels_1; 
      this.heading = 'Choose source type'; 
    } else if (this.panelnumber == 2) { 
      this.panel = this.dataset.panels_2; 
      this.heading = this.currentTitle; 
    } else if (this.panelnumber == 3) { 
      this.panel = this.dataset.panels_3; 
      this.heading = this.currentTitle; 
    } 
    this.isAtLeastOneCheckboxSelected = !this.isAtLeastOneCheckboxSelected; 
  } 

  
  
  onback(): void { 
    this.panelnumber--; 
    if (this.panelnumber == 1) { 
      this.panel = this.dataset.panels_1; 
      this.heading = 'Choose source type'; 
    } else if (this.panelnumber == 2) { 
      this.heading = this.titleBeforeCurrent; 
      this.panel = this.dataset.panels_2;
      this.heading = this.listedDatasources[this.listedDatasources.length -2];
    }
    
  }
  
  updatecheckboxselection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call( 
      checkboxes, 
      (checkbox: HTMLInputElement) => checkbox.checked 
    );
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }
  changeisdatasetselector() { 
    // closedatasetselector() { 
      // this.datasetSelectorService.isSelectedOpen=false;
      // console.log(this.datasetSelectorService.isSelectedOpen)

    //closing container 
    const temp: boolean = false;
    this.ChangeBoolean.emit(temp);
  }

  footercontent(datasetlists:string[]){
    let content: string = "NielsenIQ "
    content += datasetlists[0];
    for(let i=1; i<3; i++){
      content += " | " + datasetlists[i];
    }
    console.log(content);
    return content;
  }
  applydataset() {
    this.listedDatasources.push(this.currentTitle);  
    this.ChangeBoolean.emit(false); 
    this.shimmerService.shimmer_effect(); 
    // this.sendDataSources.emit(this.footercontent(this.listedDatasources));

    // this.datasetSelectorService.isSelectedOpen=false;
    // this.shimmerService.shimmerEffect(); 
    // this.datasetSelectorService.appliedDataset=this.listedDatasources;
    // this.datasetSelectorService.isDataApplied=true;

  }
  selecteddatasetlist(title: string) {
    //current title
    this.currentTitle = title; 
    this.isAtLeastOneCheckboxSelected = true; 
  }
}
