import { Component } from '@angular/core';
import { IUser } from '../../interface/user';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private userservice: UserService) {}
  registerform = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  router = new Router();
  onRegister = () => {
    this.userservice.Register(this.registerform.value).subscribe(
      (data) => {
        alert(' dang ky thanh cong');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  Onsubmit = () => {};
}
