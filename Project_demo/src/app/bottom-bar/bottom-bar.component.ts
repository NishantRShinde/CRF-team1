// import { Component } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';

import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  @Output() cancel = new EventEmitter<void>();

  cancelButton() {
    this.cancel.emit();
  }
  // showRunButton: boolean=false;
  // showBottomBar:boolean=true;
  constructor(
    public shimmerService: ShimmerEffectService
  ) { }

  // cancelButton(){
  //   this.showRunButton= true;
  //   this.showBottomBar=false;

  // }
}
