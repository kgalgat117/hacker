import {
  Component,
  OnInit
} from '@angular/core';
import {
  HackService
} from '../services/hack.service';
import {
  Router
} from '@angular/router'

import {ArrayData} from 'src/app/statics'

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})

export class FacebookComponent implements OnInit {

update_array: Array<Object> = this.arrayData.offices_thehackerstreet

  locations: Array<Object> = []

  constructor(private arrayData: ArrayData, private hackService: HackService, private router: Router) {
    this.getLocations()
    // this.scrapper()
  }

  scrapper() {
    this.hackService.scrapperData({locations: this.update_array}).subscribe(resp=>{
      console.log(resp)
    }, err=>{
      console.log(err)
    })
  }

  getLocations(){
    this.hackService.getLocations({}).subscribe(resp=>{
      this.locations = resp['result']
    }, err=>{
      console.log(err)
    })
  }

  ngOnInit() {}

}





