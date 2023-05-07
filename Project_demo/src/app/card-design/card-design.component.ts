import { Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';
import { AddCardsService } from '../services/add-cards/add-cards.service';

@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.scss']
})
export class CardDesignComponent {
  expandCard: boolean = false;
  constructor(public shimmerService: ShimmerEffectService,
    public addCard: AddCardsService) {}
  
  // appendToCardContainer() { 
  //   document.querySelector(".table-line")!.appendChild(this.addCard.cardElement);
  // }
}
