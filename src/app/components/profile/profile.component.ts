import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { User } from 'src/app/models/user.model';
import { MAT_DIALOG_SCROLL_STRATEGY_PROVIDER } from '@angular/material';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private token:any;
  public profile:any;
  public pedidos:any=[];
  constructor(private userService: UserService) { }

  ngOnInit() {
   
    this.token = localStorage.getItem('Authorization')
    this.userService.profile(this.token)
    .subscribe((data)=>{this.profile=data
      this.pedidos= this.profile.viewedFilms})  

       
  }

}
