import { AfterViewInit, Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect.service';

@Component({
  selector: 'app-brandbar',
  templateUrl: './brandbar.component.html',
  styleUrls: ['./brandbar.component.scss'],
})
export class BrandbarComponent implements AfterViewInit {
  previous: any;
  isFirst: boolean = true;

  allPermissions: string[] = [
    'Monitor my business',
    'Choose a template',
    'Build a table',
    'Find my stuff',
  ];
  // linkToshow: string[] = {
  //   'monitorMyBusiness',
  //   'chooseATemplate',
  //   'buildATable',
  //   'findMyStuff'
  // }

  constructor(public shimmerService: ShimmerEffectService) {}

  user: {
    uname: string;
    permissions: number[];
  } = {
    uname: 'Nishant.Shinde',
    permissions: [0, 1, 2, 3],
  };

  ngAfterViewInit() {
    let listItems = document.querySelectorAll('.list-items');
    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (this.isFirst) {
          item.classList.add('border-class');
          this.isFirst = false;
          this.previous = item;
        } else {
          this.previous.classList.remove('border-class');
          item.classList.add('border-class');
          this.previous = item;
        }
      });
    });
  }
}
