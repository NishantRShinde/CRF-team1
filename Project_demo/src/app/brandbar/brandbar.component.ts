import { Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';
import { DatasetSelectorService } from '../services/open-dataset-selector/open-dataset-selector.service';
@Component({
  selector: 'app-brandbar',
  templateUrl: './brandbar.component.html',
  styleUrls: ['./brandbar.component.scss'],
})
export class BrandbarComponent {
  constructor(
    public shimmerService: ShimmerEffectService,
    public datasetSelectorService: DatasetSelectorService
  ) {}

  currentlySelected: AllPermissions = AllPermissions.buildATable;

  //user object
  user: {
    uname: string;
    permissions: Array<{ name: string; route: string }>;
  } = {
    uname: 'Nishant.Shinde',
    permissions: [
      { name: 'Monitor my business', route: '/monitorMyBusiness' },
      { name: 'Choose a template', route: 'chooseATemplate' },
      { name: 'Build a table', route: '/buildATable' },
      { name: 'Find my stuff', route: '/findMyStuff' },
    ],
  };

  changeCurrentlySelected(index: number): void {
    this.currentlySelected = index;
    if (this.currentlySelected === AllPermissions.buildATable) {
      this.datasetSelectorService.isOnBuildATable = true;
    } else {
      this.datasetSelectorService.isOnBuildATable = false;
    }
  }
}

enum AllPermissions {
  monitorMyBusiness,
  chooseATemplate,
  buildATable,
  findMyStuff,
}
