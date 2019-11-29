import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user:User;
  private storagedToken:any;
  private emptyBody:any;

  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<object>{
   
    return this.httpClient.post('http://localhost:3001/user/register', user)

  }

  login(user:User):Observable<object>{

    return this.httpClient.patch('http://localhost:3001/user/login', user)

  }

  logout(token){
   
    this.storagedToken=JSON.parse(token);
    
    return this.httpClient.put('http://localhost:3001/user/logout',{},{headers: {Authorization: this.storagedToken.token }})
    
  }

  profile(token){
    console.log("aqui tambien")
    this.storagedToken=JSON.parse(token)

    return this.httpClient.get('http://localhost:3001/user/profile',{headers: {Authorization: this.storagedToken.token }})

  }

  tokenExists(){
    if(localStorage.getItem('Authorization')){
      return true
    }
    else{
      return false
    }
  }

  

}
