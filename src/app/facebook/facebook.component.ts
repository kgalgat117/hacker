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

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  // main_div_array: Array<HTMLDivElement> = []

   offices_myhq: Array<Object> = [
    {
      "name": "Team Station Cowork Space",
      "address": "Rohini, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Workin X",
      "address": "Paschim Vihar, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Supreme Cowork",
      "address": "Shalimar Bagh, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Tippling Street",
      "address": "Rajouri Garden, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "SpringHouse Janakpuri",
      "address": "Janakpuri, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Cubicles Cowork",
      "address": "Netaji Subhash Place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Zorambo Punjabi Bagh",
      "address": "Punjabi Bagh, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Co-Offiz NSP",
      "address": "Netaji Subhash place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "The Beer Cafe Kirti Nagar",
      "address": "Kirti Nagar, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Co-Offiz Janakpuri",
      "address": "Janakpuri, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Daftar Cowork",
      "address": "GT Karnal Road, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Rodeo Cantina and Kitchen",
      "address": "Connaught Place, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Imly Janakpuri",
      "address": "Janakpuri, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "FLYP Cafe",
      "address": "Connaught Place, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Pebble Street",
      "address": "Connaught Place, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "ABL Workspaces CP",
      "address": "Connaught Place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Koworkspace",
      "address": "Dwarka, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Sharal Cowork",
      "address": "Nariana, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Invento Workspaces Dwarka",
      "address": "Sector 12 Dwarka, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "22 Workspace",
      "address": "New Delhi Metro Station, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Coworkin Patel Nagar",
      "address": "Patel Nagar, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "One Co.Work",
      "address": "Connaught Place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Stop My Starvation",
      "address": "Indirapuram, Ghaziabad",
      "type": "Work Cafe"
    },
    {
      "name": "YC Coworking Sohna Road",
      "address": "Sohna Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "GoHive SAS Towers",
      "address": "Sector 38, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Eccosphere Coworking",
      "address": "Sector 67, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Office Beanz",
      "address": "Sector 39, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Instaoffice SPML House",
      "address": "Sector 32, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "OYO Townhouse Cafe Curryhut",
      "address": "Sector 62, Noida",
      "type": "Work Cafe"
    },
    {
      "name": "Cafe Soul Garden",
      "address": "Supermart 2, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Instaoffice Good Earth City Centre",
      "address": "Sector 50, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "SproutBox",
      "address": "Okhla, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Barista Huda Market",
      "address": "Sector 22, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "SpringHouse Sector 16",
      "address": "Noida, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Wolk Coworking",
      "address": "Nehru Place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "What A Comic Show GK2",
      "address": "Greater Kailash 2, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "2Tree Coffee",
      "address": "Saket, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "The Red Kettle",
      "address": "Saiyad Ul Ajaib Extension, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "ArtBuzz Studios",
      "address": "Okhla Phase 2, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "myHQ Techarbeits",
      "address": "Mayur Vihar Phase 1, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Flockwork",
      "address": "Tilak Marg, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Revstart",
      "address": "Sector 125, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Qbicals Coworking",
      "address": "Sector 63, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "myHQ Coregano",
      "address": "Noida Sector 8, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "IHOP Cyberhub",
      "address": "DLF Cyber City, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Fume Coworking Udyog Vihar",
      "address": "Udyog Vihar, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "SpringHouse Sohna Road",
      "address": "Sohna Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Workhubz",
      "address": "Safdarjung Enclave, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Unboxed",
      "address": "Sector 65, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Step 01",
      "address": "Sector 32, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Huddle",
      "address": "DLF Cyber City, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Qahwa",
      "address": "SDA Market, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "ABL Workspaces Okhla",
      "address": "Okhla, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Hacker Space",
      "address": "Sector 2, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "The Reader's Cafe",
      "address": "Indirapuram, Ghaziabad",
      "type": "Work Cafe"
    },
    {
      "name": "IHOP Saket",
      "address": "Saket, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Springhouse Noida",
      "address": "Sector 8, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Dribble",
      "address": "DLF Phase 3, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "SpringHouse Galleria",
      "address": "DLF Phase 4, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Cha Cha Cha",
      "address": "Lajpat Nagar, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "ABL Workspaces Two Horizon",
      "address": "Golf course Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "GoHive Ocus",
      "address": "Sector-54, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Coworkin Sector 39 Gurugram",
      "address": "Sector 39, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "The Beer Cafe Noida",
      "address": "Sector 32, Noida",
      "type": "Work Cafe"
    },
    {
      "name": "1share office",
      "address": "East Of Kailash, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "D&B Office",
      "address": "Panchsheel Park, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "The Blue Parrot Cafe",
      "address": "Kalkaji, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Peer Share",
      "address": "Vasant Vihar, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Instaoffice Okhla",
      "address": "Okhla Phase 2, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Dribble Golf Course Road",
      "address": "Golf Course Road, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "India Accelerator",
      "address": "Sector 44, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "One Co.Work Sushant Lok",
      "address": "Sushant Lok, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Coworkin Lajpat Nagar",
      "address": "Lajpat Nagar, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "What A Comic Show SDA",
      "address": "SDA Market, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Instaoffice Noida",
      "address": "Sector 16, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "GoHive Ghitorni",
      "address": "Ghitorni, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Cube8",
      "address": "Udyog Vihar, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "GoWorkin",
      "address": "Green Park, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Let's Cowork",
      "address": "Hauz Khas Village, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Cospaces",
      "address": "Sector 28, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Social Vasant Kunj",
      "address": "Vasant Kunj, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "myHQ ABL Workspace NH8",
      "address": "NH8, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Coworkin Nehru Place",
      "address": "Nehru Place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Amigo Coworking",
      "address": "Sector-8, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "The Beer Cafe GK2",
      "address": "Greater Kailash, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Zorambo Sohna Road",
      "address": "Sohna Road, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Vorkzone",
      "address": "Sohna Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Zorambo South City",
      "address": "South City 2, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Social Cyber Hub",
      "address": "Cyber Hub, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "CoNexus Life",
      "address": "Sector 29, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "myHQ PiWork",
      "address": "Sector 132, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "One Co.Work NSP",
      "address": "Netaji Subhash Place, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "BOD Cowork",
      "address": "Karol Bagh, New Delhi",
      "type": "Coworking Space"
    },
    {
      "name": "Imperfecto Hauz Khas Village",
      "address": "Hauz Khas Village, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Publiq Bar & Kitchen",
      "address": "Green Park, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Cafe Untold",
      "address": "Gulmohar Park, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Imperfecto Ruin Pub",
      "address": "Khel Gaon Marg, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Instaoffice Konterra",
      "address": "Udyog Vihar, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "ABL Workspaces Cyber City",
      "address": "DLF Cyber City, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Potbelly Sandwich Shop Cyberhub",
      "address": "DLF Cyber City, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Urban Sip",
      "address": "Okhla Phase 3, New Delhi",
      "type": "Work Cafe"
    },
    {
      "name": "Vatika Business Centre FIP",
      "address": "MG Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Vatika Business Centre Triangle",
      "address": "MG Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "ABL Workspaces Noida",
      "address": "Sector 4, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Tangy House",
      "address": "Sushant Lok, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Vatika Business Centre Prius",
      "address": "Sector 125, Noida",
      "type": "Coworking Space"
    },
    {
      "name": "Zorambo Golf Course Road",
      "address": "Golf course Road, Gurugram",
      "type": "Work Cafe"
    },
    {
      "name": "Vatika Business Centre Atrium",
      "address": "Golf Course Road, Gurugram",
      "type": "Coworking Space"
    },
    {
      "name": "Imperfecto Rainbow",
      "address": "Sector 135, Noida",
      "type": "Work Cafe"
    }
  ]

  locations: Array<Object> = []


  constructor(private hackService: HackService, private router: Router) {
    this.getLocations()
  }

  scrapperMyHQ() {
    this.hackService.scrapperDataMyHQ({locations: this.offices_myhq}).subscribe(resp=>{
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





