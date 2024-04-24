import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItemCardComponent } from '../item-card/item-card.component';
import { ItemsService } from '../items-service.service';
import Item from '../types/Item';


@Component({
  selector: 'app-items-grid',
  standalone: true,
  imports: [MatGridListModule, ItemCardComponent],
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.css'
})
export class ItemsGridComponent implements OnInit {
  breakpoint: number = 3;
  items: Item[] = [];
  defaultImage = "https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.867xw:0.651xh;0.0417xw,0.190xh&resize=1200:*";
  
  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
    this.itemsService.getItems().subscribe((data) => {
      // console.log(data);
      this.items = data;
      this.items.forEach((element) => {
        if (element.url && (!element.url.includes("jpg") && !element.url.includes(".png") && !element.url.includes(".jpeg"))) {
          element.url = this.defaultImage;
        }
        if (!element.url) {
          element.url = this.defaultImage;
        }
      })
    });
  }
  
  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth < 500) ? 1 : 3;
  }


  // dogs: string[] = [
  //   "Shiba Inu1",
  //   "Shiba Inu2",
  //   "Shiba Inu3",
  //   "Shiba Inu4",
  //   "Shiba Inu5",
  //   "Shiba Inu6",
  //   "Shiba Inu7",
  //   "Shiba Inu8",
  //   "Shiba Inu9",
  //   "Shiba Inu10"
  // ]
}
