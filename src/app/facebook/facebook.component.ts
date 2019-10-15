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
  someCheck: Array<string> = this.arrayData.someCheck
  xlsx_file_name: string = 'sharedesk'
  locations: Array<Object> = []

  nowheredata: Array<string> = []
  testdata: Array<Object> = []

  dummydata: any = {}
  file_upload;


  constructor(private arrayData: ArrayData, private hackService: HackService, private router: Router) {
    this.locations = this.Sharedesk

  }

  import(event) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = event.target.files[0];
    console.log('0')
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        // console.log(initial, name, '1')
        const sheet = workBook.Sheets[name];
        // console.log(sheet, '2')
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.dummydata = jsonData
      this.makeData()
      console.log(this.dummydata)
    }
    console.log('4')
    reader.readAsBinaryString(file);
  }

  makeData() {
    let data = this.dummydata.booking
    for (let i = 0; i < data.length; i++) {
      data[i].seat = {
        amount: data[i]['seat.amount'],
        quantity: data[i]['seat.quantity'],
        name: data[i]['seat.name'],
        floor: data[i]['seat.floor'],
        duration: {
          from: data[i]['seat.duration.from'],
          to: data[i]['seat.duration.to']
        }
      }
      if (data[i]['user_gst.gstin']) {
        data[i].user_gst = {
          gstin: data[i]['user_gst.gstin'],
          line1: data[i]['user_gst.line1'],
          line2: data[i]['user_gst.line2'],
          line3: data[i]['user_gst.line3'],
          pincode: data[i]['user_gst.pincode'],
          state: data[i]['user_gst.state'],
          city: data[i]['user_gst.city']
        }
      }
      delete data[i]['seat.amount']
      delete data[i]['seat.quantity']
      delete data[i]['seat.name']
      delete data[i]['seat.floor']
      delete data[i]['seat.duration.from']
      delete data[i]['seat.duration.to']
      delete data[i]['user_gst.gstin']
      delete data[i]['user_gst.line1']
      delete data[i]['user_gst.line2']
      delete data[i]['user_gst.line3']
      delete data[i]['user_gst.pincode']
      delete data[i]['user_gst.state']
      delete data[i]['user_gst.city']
    }
    console.log(data)
  }

  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.testdata);

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
    } else if (to == 'no cafe') {
      this.noData()
    } else if (to == 'some check') {
      this.nowhere()
    }
  }

  nowhere() {
    this.getAllLocations()
    this.nowheredata = this.someCheck
    this.locations.forEach(item => {
      if (this.someCheck.indexOf(item['name']) != -1) {
        this.nowheredata.splice(this.someCheck.indexOf(item['name']), 1)
      }
    })
    this.nowheredata.forEach(item => {
      this.testdata.push({
        name: item
      })
    })
  }

  noData() {
    this.getAllLocations()
    this.locations = this.locations.filter(item => {
      if (item['type'] == 'Coworking Space') {
        return true
      }
      return false
    })
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





