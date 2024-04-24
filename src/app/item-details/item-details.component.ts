import { Component, OnInit, inject } from '@angular/core';
import { ItemsService } from '../items-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import Item from '../types/Item';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { UpdateItemDialogComponent } from '../update-item-dialog/update-item-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {

  itemId = Number(this.route.snapshot.params['id']);
  item!: Item;
  //  url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByJnPt5Zve9UgvAH1n9RQO2ocst0_qSbMrdo1cZSQDw&s";

  

  constructor(private service: ItemsService, 
    private route: ActivatedRoute, private dialog: MatDialog) {

    // (this.route.snapshot.params['id']);
    // rotue: ActivatedRoute = inject(ActivatedRoute);
  }
  ngOnInit(): void {
    this.getItemById();
  }


  public getItemById() {
    this.service.getItemById(this.itemId).subscribe((result) => {
      console.log(result);
      this.item = result;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdateItemDialogComponent, {
      width: '700px',
      data: this.item
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   // this.service.updateItem()
    // });
  }

}
