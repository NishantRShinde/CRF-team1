import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShimmerEffectService {
  isloading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isloading = false;
    }, 2000);
  }

  shimmer_effect(){
    this.isloading = true;
    console.log('in shimmer service')
    setTimeout(() => {
      this.isloading = false;
    }, 1500);
  }

}
