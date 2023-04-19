import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShimmerEffectService } from '../services/shimmer-effect.service';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.scss'],
})
export class DataSelectorComponent{
  // @Input() dataselectorbox!: boolean;
  @Output() ChangeBoolean = new EventEmitter<boolean>();
  @Output() sendDataSources = new EventEmitter<string[]>();

  selectedDatasources:string[];
  heading: string = 'Choose source type';
  [x: string]: any;
  isAtLeastOneCheckboxSelected = false;

  dataset: any
  panel: any;
  constructor(public shimmerService:ShimmerEffectService, private http: HttpClient) {

    this.http.get("../../assets/jsonfiles/dataset.json").subscribe((res) => {
      this.dataset = res;
      this.panel = this.dataset.panels_1;
    });
    this.selectedDatasources = [];

  }
  panelnumber: number = 1;

  Onnext(): void {
    this.panelnumber++;
    if (this.panelnumber == 1) {
      this.panel = this.dataset.panels_1;
      this.heading = "Choose source type";
    }
    else if (this.panelnumber == 2) {
      this.panel = this.dataset.panels_2;
      this.heading = "Retail Measurement";
    }
    else if (this.panelnumber == 3) {
      this.panel = this.dataset.panels_3;
      this.heading = "SYNDICATED US";
    }
    else if (this.panelnumber >= 3) {
      this.panelnumber = 1;
      this.panel = this.dataset.panels_1;
      this.heading = "Choose source type";
    }
    this.isAtLeastOneCheckboxSelected = !this.isAtLeastOneCheckboxSelected;
  }
  Onback(): void {
    this.panelnumber--;
    if (this.panelnumber == 1) {
      this.panel = this.dataset.panels_1;
      this.heading = "Choose source type";
    }
    else if (this.panelnumber == 2) {
      this.panel = this.dataset.panels_2;
      this.heading = "Retail Measurement";
    }
    else if (this.panelnumber == 3) {
      this.panel = this.dataset.panels_3;
      this.heading = "SYNDICATED US";
    }
    else if (this.panelnumber <= 3) {
      this.panelnumber = 1;
      this.panel = this.dataset.panels_1;
      this.heading = "Choose source type";
    }
  }
  updateCheckboxSelection(): void {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const atLeastOneCheckboxSelected = Array.prototype.some.call(checkboxes, (checkbox: HTMLInputElement) => checkbox.checked);
    this.isAtLeastOneCheckboxSelected = atLeastOneCheckboxSelected;
  }
  changeisDatasetSelector(){
    const temp: boolean = false;
    this.ChangeBoolean.emit(temp);
  }
  applyDataset(){
    this.ChangeBoolean.emit(false);
    this.shimmerService.shimmer_effect();
    this.sendDataSources.emit(this.selectedDatasources);
  }
  SelectedDatasetlist(title:string){
    this.selectedDatasources.push(title);
  }
}






