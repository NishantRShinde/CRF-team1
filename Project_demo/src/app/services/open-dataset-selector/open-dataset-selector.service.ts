import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatasetSelectorService {
  
  isDataApplied: boolean = false;
  isSelectorOpen: boolean = true;
  appliedDataset: string = "";
}
