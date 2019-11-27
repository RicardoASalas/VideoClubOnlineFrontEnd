import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User;
  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<object>{
   
    console.log(user)
    return this.httpClient.post('http://localhost:3001/user/register', user)
  }
  

}
