import { Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect.service';

@Component({
  selector: 'app-brandbar',
  templateUrl: './brandbar.component.html',
  styleUrls: ['./brandbar.component.scss'],
})
export class BrandbarComponent {
  constructor(public shimmerService: ShimmerEffectService) {}

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
}

enum AllPermissions {
  monitorMyBusiness,
  chooseATemplate,
  buildATable,
  findMyStuff,
}
