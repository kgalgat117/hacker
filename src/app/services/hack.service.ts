import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackService {

  constructor(private http: HttpClient,) { }

  url = 'https://facebook.registe.cf/api/hack/'
  // url = 'http://localhost:4200/api/hack/'

  login(data){
    return this.http.post(this.url + 'login', data)
  }

  pageCount(){
    return this.http.get(this.url + 'page/count')
  }

  scrapperDataMyHQ(data){
    return this.http.post(this.url + 'scrapper/myhq', data)
  }

  scrapperDataSneed(data){
    return this.http.post(this.url + 'scrapper/sneed', data)
  }

  getLocations(parameters){
    return this.http.get(this.url + 'scrapper', {params: parameters})
  }

  pageCreation(data){
    console.log('2')
    return this.http.post(this.url + 'page/count', data)
  }


}
