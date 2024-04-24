import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

  @Input() id: number = 0;
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;
  @Input() quantity: number = 0;
  @Input() url: string = "";

constructor(private router: Router){

}


public goToDetails() {
this.router.navigate([`items/${this.id}`])
}




}
