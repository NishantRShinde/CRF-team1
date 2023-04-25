import { Component } from '@angular/core';
import { DatasetSelectorService } from './services/open-dataset-selector/open-dataset-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Project_demo';
  constructor(public datasetSelectorService: DatasetSelectorService) {}
}
