import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import Item from '../types/Item';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ItemsService } from '../items-service.service';

@Component({
  selector: 'app-update-item-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './update-item-dialog.component.html',
  styleUrl: './update-item-dialog.component.css'
})
export class UpdateItemDialogComponent {

  itemForm: FormGroup = this.formBuilder.group({
    name: [this.data.name, Validators.required],
    price: [this.data.price, Validators.required],
    quantity: [this.data.quantity, Validators.required],
    description: [this.data.description, Validators.required],
    url: [this.data.url, Validators.required]
  });

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: Item, private itemService: ItemsService){
    console.log(this.data);
  }

  public updateItem() {
    const updatedItem: Item = this.itemForm.value;
    this.itemService.updateItem(this.data.id, updatedItem).subscribe();
}
  
}
