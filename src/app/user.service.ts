import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http:HttpClient) { }
  Login = (data:any): Observable<any> =>{
    return this.http.post('http://localhost:3000/login',data)
  }
  Register = (data:any): Observable<any> =>{
    return this.http.post('http://localhost:3000/register',data)
  }
}
