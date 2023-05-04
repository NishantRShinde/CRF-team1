import { Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';

@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.css']
})
export class CardDesignComponent {

  constructor(public shimmerService: ShimmerEffectService) {}

}
