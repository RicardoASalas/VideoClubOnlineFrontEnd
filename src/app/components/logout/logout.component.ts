import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
  import { from } from 'rxjs';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  {
  private token:any;

  constructor(private userService: UserService) { }

  deslogear(e) {
    
    this.token = localStorage.getItem('Authorization')
    console.log("en el logout el token es: "+this.token)

    this.userService.logout(this.token)
      .subscribe(
        (data)=>{
          console.log(data)
          console.log("entra aqui")
          localStorage.removeItem('Authorization')  
        },
        (error) => console.log("entra aqui como error")
      )

  }

}
