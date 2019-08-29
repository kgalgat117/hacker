import { Component, OnInit } from '@angular/core';
import { HackService } from '../services/hack.service';
import { Router } from '@angular/router'
import * as XLSX from 'xlsx';
import { ArrayData } from 'src/app/statics'

type AOA = any[][];

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})

export class FacebookComponent implements OnInit {

  data: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';

  update_array: Array<Object> = []
  Sharedesk: Array<Object> = this.arrayData.ShareDesk
  Nexdus: Array<Object> = this.arrayData.Nexdus
  hackerStreet: Array<Object> = this.arrayData.offices_thehackerstreet
  myHQ: Array<Object> = this.arrayData.offices_myhq
  Engage: Array<Object> = this.arrayData.Enagage
  Digicuro: Array<Object> = this.arrayData.Digicuro
  xlsx_file_name: string = 'sharedesk'
  locations: Array<Object> = []

  constructor(private arrayData: ArrayData, private hackService: HackService, private router: Router) {
    this.locations = this.Sharedesk
  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.locations);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, this.xlsx_file_name);

    /* save to file */
    XLSX.writeFile(wb, this.xlsx_file_name + '.xlsx');
  }

  change(tot) {
    let to = tot.target.value
    this.xlsx_file_name = to
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
    } else if (to == 'digicuro') {
      this.locations = this.Digicuro
    } else if (to == 'all') {
      this.locations = []
      this.getAllLocations()
    } else if (to == 'common') {
      this.newTable()
    }
  }

  newTable() {
    this.getAllLocations()
    let new_data = []
    let total_length = this.locations.length
    for (let i = 0; i < total_length; i++) {
      let index = new_data.findIndex(item => {
        if (item['name'] == this.locations[i]['name']) {
          return true
        }
        return false
      })
      if (index == -1) {
        new_data.push({
          name: this.locations[i]['name'],
          address: this.locations[i]['address'],
          type: this.locations[i]['type'],
          provider_array: [this.locations[i]['provider']],
          provider: this.locations[i]['provider']
        })
      } else {
        if (new_data[index]['provider_array'].indexOf(this.locations[i]['provider']) == -1) {
          new_data[index]['provider_array'].push(this.locations[i]['provider'])
          new_data[index]['provider'] = new_data[index]['provider'] + ',' + this.locations[i]['provider']
        }
      }
    }
    this.locations = new_data
  }

  getAllLocations() {
    this.locations = this.locations.concat(this.hackerStreet, this.myHQ, this.Digicuro, this.Nexdus, this.Engage, this.Sharedesk)
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





