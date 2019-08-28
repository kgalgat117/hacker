import { Component, OnInit } from '@angular/core';
import { HackService } from '../services/hack.service';
import { Router } from '@angular/router'

import { ArrayData } from 'src/app/statics'

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})

export class FacebookComponent implements OnInit {

  update_array: Array<Object> = []
  Sharedesk: Array<Object> = this.arrayData.ShareDesk
  Nexdus: Array<Object> = this.arrayData.Nexdus
  hackerStreet: Array<Object> = this.arrayData.offices_thehackerstreet
  myHQ: Array<Object> = this.arrayData.offices_myhq
  Engage: Array<Object> = this.arrayData.Enagage

  locations: Array<Object> = []

  constructor(private arrayData: ArrayData, private hackService: HackService, private router: Router) {
    // this.getLocations()
    // this.scrapper()
    this.locations = this.Sharedesk
  }

  change(tot) {
    console.log(tot)
    let to = tot.target.value
    if (to == 'sharedesk') {
      this.locations = this.Sharedesk
    } else if (to == 'nexdus') {
      this.locations = this.Nexdus
    } else if (to == 'hackerstreet') {
      this.locations = this.hackerStreet
    } else if (to == 'myhq') {
      this.locations = this.myHQ
    } else if (to == 'engage') {
      this.locations = this.Engage
    }
  }

  scrapper() {
    this.hackService.scrapperData({ locations: this.update_array }).subscribe(resp => {
      console.log(resp)
    }, err => {
      console.log(err)
    })
  }

  // getLocations() {
  //   this.hackService.getLocations({}).subscribe(resp => {
  //     this.locations = resp['result']
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  ngOnInit() { }

}





