import { Component } from '@angular/core';

@Component({
  selector: 'app-brandbar',
  templateUrl: './brandbar.component.html',
  styleUrls: ['./brandbar.component.css'],
})
export class BrandbarComponent {
  previous: any;
  isFirst: boolean = true;

  highlight(name: string): void {
    if (name === 'home') {
      this.previous.classList.remove('border-class');
      this.isFirst = true;
      return;
    }
    if (this.isFirst) {
      this.isFirst = false;
      let item = document.querySelector(`.${name}`);
      item?.classList.add('border-class');
      this.previous = item;
    } else {
      this.previous.classList.remove('border-class');
      let item = document.querySelector(`.${name}`);
      item?.classList.add('border-class');
      this.previous = item;
    }
  }
}
