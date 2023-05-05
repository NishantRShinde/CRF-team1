import { Component } from '@angular/core';
import { AddCardsService } from 'src/app/services/add-cards/add-cards.service';
import { ShimmerEffectService } from 'src/app/services/shimmer-effect/shimmer-effect.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  expandCard: boolean = false;
  constructor(public shimmerService: ShimmerEffectService,
    public addCards: AddCardsService){
      
    }

}
