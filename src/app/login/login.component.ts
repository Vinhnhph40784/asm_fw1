import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userservice:UserService){}
  loginform = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
  router = new Router();
  onLogin = () => {
    this.userservice.Login(this.loginform.value).subscribe(
      data=> {
        alert('dang nhap thnah cong')
        this.router.navigate(['book'])
      },
      err=> {
        console.log(err)
      }
    )
  }
}
