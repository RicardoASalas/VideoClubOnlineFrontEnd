import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  {
  private token:any;

  constructor(private userService: UserService) { }

  deslogear() {
    
    this.token = localStorage.getItem('Authorization')
    
    this.userService.logout(this.token)
      .subscribe(
        (data)=>{
          console.log(data)
          localStorage.removeItem('Authorization')  
        },
        (error) => console.log(error)
      )

  }

}
