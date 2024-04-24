import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ItemsService } from '../items-service.service';
import { FormBuilder } from '@angular/forms';
import Item from '../types/Item';

@Component({
  selector: 'app-additem',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent {

  item: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    quantity: [0, Validators.required],
    description: ['', Validators.required],
    url: ['', Validators.required]
  });

  constructor(private itemService: ItemsService, private formBuilder: FormBuilder){}

  public saveItem() {
    console.log(this.item.value)
    this.itemService.saveItem(this.item.value).subscribe((data) => {
      console.log(data);
    });
  }
}
