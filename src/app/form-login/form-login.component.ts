import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  user: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ["", Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private userService: UsersService){}

  public onLogin(){
    console.log(this.user.value)
    this.userService.login(this.user.value).subscribe((data) => {
      console.log(data);
    })

  }


}
