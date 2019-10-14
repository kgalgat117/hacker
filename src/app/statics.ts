import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArrayData {

  someCheck: Array<string> = [
    'Team station',
    'Workin X',
    'Supreme Cowork',
    'Spring house',
    'Cubicles',
    'Co-offiz',
    'Daftar co work',
    'The Business Square',
    'ABL Workspaces',
    'Koworkspace',
    'Team station',
    'Stirring Minds',
    'Coworkable',
    'cowrks',
    'Cowork',
    'Mstoic Coworking',
    'Huddle',
    'Office Beanz',
    'One Co work',
    'ArtBuzz Studios',
    'Base Station',
    'Sharal Co work',
    'Invento Workspaces Dwarka',
    '22 workspace',
    'GoHive',
    'Ecosphere',
    'InstaOffice',
    'Sprout Box',
    'Wolk Coworkin',
    'Flock work',
    'Revstart',
    'BCogent solutions',
    'Qbicals',
    'Fume Coworkin',
    'Work hubz',
    'Step 01',
    'Hacker space',
    '1 share office',
    'Peer Share',
    'India Accelerator',
    'Cube 8',
    'Gowork',
    'Lets Cowork',
    'Amigo coworking',
    'Conexus life',
    'BOD Cowork',
    'Vatika Business Centre',
    'MYHQ',
    'Co Work Delhi',
    'INNOV 8',
    'Hustle Co work delhi',
    'Zen Business Centre',
    'Co workIn.co',
    'Cum work',
    'CoWorking Space Delhi',
    'SigmaWay works',
  ]

  offices_myhq: Array<Object> = [
    {
      "name": "Team Station Cowork Space",
      "address": "Rohini, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Workin X",
      "address": "Paschim Vihar, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Supreme Cowork",
      "address": "Shalimar Bagh, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Tippling Street",
      "address": "Rajouri Garden, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "SpringHouse Janakpuri",
      "address": "Janakpuri, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Cubicles Cowork",
      "address": "Netaji Subhash Place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Zorambo Punjabi Bagh",
      "address": "Punjabi Bagh, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Co-Offiz NSP",
      "address": "Netaji Subhash place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "The Beer Cafe Kirti Nagar",
      "address": "Kirti Nagar, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Co-Offiz Janakpuri",
      "address": "Janakpuri, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Daftar Cowork",
      "address": "GT Karnal Road, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Rodeo Cantina and Kitchen",
      "address": "Connaught Place, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Imly Janakpuri",
      "address": "Janakpuri, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "FLYP Cafe",
      "address": "Connaught Place, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Pebble Street",
      "address": "Connaught Place, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "ABL Workspaces CP",
      "address": "Connaught Place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Koworkspace",
      "address": "Dwarka, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Sharal Cowork",
      "address": "Nariana, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Invento Workspaces Dwarka",
      "address": "Sector 12 Dwarka, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "22 Workspace",
      "address": "New Delhi Metro Station, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Coworkin Patel Nagar",
      "address": "Patel Nagar, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "One Co.Work",
      "address": "Connaught Place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Stop My Starvation",
      "address": "Indirapuram, Ghaziabad",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "YC Coworking Sohna Road",
      "address": "Sohna Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "GoHive SAS Towers",
      "address": "Sector 38, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Eccosphere Coworking",
      "address": "Sector 67, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Office Beanz",
      "address": "Sector 39, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Instaoffice SPML House",
      "address": "Sector 32, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "OYO Townhouse Cafe Curryhut",
      "address": "Sector 62, Noida",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Cafe Soul Garden",
      "address": "Supermart 2, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Instaoffice Good Earth City Centre",
      "address": "Sector 50, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "SproutBox",
      "address": "Okhla, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Barista Huda Market",
      "address": "Sector 22, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "SpringHouse Sector 16",
      "address": "Noida, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Wolk Coworking",
      "address": "Nehru Place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "What A Comic Show GK2",
      "address": "Greater Kailash 2, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "2Tree Coffee",
      "address": "Saket, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "The Red Kettle",
      "address": "Saiyad Ul Ajaib Extension, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "ArtBuzz Studios",
      "address": "Okhla Phase 2, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "myHQ Techarbeits",
      "address": "Mayur Vihar Phase 1, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Flockwork",
      "address": "Tilak Marg, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Revstart",
      "address": "Sector 125, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Qbicals Coworking",
      "address": "Sector 63, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "myHQ Coregano",
      "address": "Noida Sector 8, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "IHOP Cyberhub",
      "address": "DLF Cyber City, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Fume Coworking Udyog Vihar",
      "address": "Udyog Vihar, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "SpringHouse Sohna Road",
      "address": "Sohna Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Workhubz",
      "address": "Safdarjung Enclave, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Unboxed",
      "address": "Sector 65, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Step 01",
      "address": "Sector 32, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Huddle",
      "address": "DLF Cyber City, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Qahwa",
      "address": "SDA Market, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "ABL Workspaces Okhla",
      "address": "Okhla, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Hacker Space",
      "address": "Sector 2, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "The Reader's Cafe",
      "address": "Indirapuram, Ghaziabad",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "IHOP Saket",
      "address": "Saket, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Springhouse Noida",
      "address": "Sector 8, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Dribble",
      "address": "DLF Phase 3, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "SpringHouse Galleria",
      "address": "DLF Phase 4, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Cha Cha Cha",
      "address": "Lajpat Nagar, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "ABL Workspaces Two Horizon",
      "address": "Golf course Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "GoHive Ocus",
      "address": "Sector-54, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Coworkin Sector 39 Gurugram",
      "address": "Sector 39, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "The Beer Cafe Noida",
      "address": "Sector 32, Noida",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "1share office",
      "address": "East Of Kailash, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "D&B Office",
      "address": "Panchsheel Park, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "The Blue Parrot Cafe",
      "address": "Kalkaji, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Peer Share",
      "address": "Vasant Vihar, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Instaoffice Okhla",
      "address": "Okhla Phase 2, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Dribble Golf Course Road",
      "address": "Golf Course Road, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "India Accelerator",
      "address": "Sector 44, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "One Co.Work Sushant Lok",
      "address": "Sushant Lok, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Coworkin Lajpat Nagar",
      "address": "Lajpat Nagar, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "What A Comic Show SDA",
      "address": "SDA Market, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Instaoffice Noida",
      "address": "Sector 16, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "GoHive Ghitorni",
      "address": "Ghitorni, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Cube8",
      "address": "Udyog Vihar, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "GoWorkin",
      "address": "Green Park, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Let's Cowork",
      "address": "Hauz Khas Village, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Cospaces",
      "address": "Sector 28, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Social Vasant Kunj",
      "address": "Vasant Kunj, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "myHQ ABL Workspace NH8",
      "address": "NH8, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Coworkin Nehru Place",
      "address": "Nehru Place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Amigo Coworking",
      "address": "Sector-8, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "The Beer Cafe GK2",
      "address": "Greater Kailash, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Zorambo Sohna Road",
      "address": "Sohna Road, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Vorkzone",
      "address": "Sohna Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Zorambo South City",
      "address": "South City 2, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Social Cyber Hub",
      "address": "Cyber Hub, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "CoNexus Life",
      "address": "Sector 29, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "myHQ PiWork",
      "address": "Sector 132, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "One Co.Work NSP",
      "address": "Netaji Subhash Place, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "BOD Cowork",
      "address": "Karol Bagh, New Delhi",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Imperfecto Hauz Khas Village",
      "address": "Hauz Khas Village, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Publiq Bar & Kitchen",
      "address": "Green Park, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Cafe Untold",
      "address": "Gulmohar Park, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Imperfecto Ruin Pub",
      "address": "Khel Gaon Marg, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Instaoffice Konterra",
      "address": "Udyog Vihar, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "ABL Workspaces Cyber City",
      "address": "DLF Cyber City, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Potbelly Sandwich Shop Cyberhub",
      "address": "DLF Cyber City, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Urban Sip",
      "address": "Okhla Phase 3, New Delhi",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Vatika Business Centre FIP",
      "address": "MG Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Vatika Business Centre Triangle",
      "address": "MG Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "ABL Workspaces Noida",
      "address": "Sector 4, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Tangy House",
      "address": "Sushant Lok, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Vatika Business Centre Prius",
      "address": "Sector 125, Noida",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Zorambo Golf Course Road",
      "address": "Golf course Road, Gurugram",
      "type": "Work Cafe"
      , "provider": "myHQ"
    },
    {
      "name": "Vatika Business Centre Atrium",
      "address": "Golf Course Road, Gurugram",
      "type": "Coworking Space"
      , "provider": "myHQ"
    },
    {
      "name": "Imperfecto Rainbow",
      "address": "Sector 135, Noida",
      "type": "Work Cafe"
      , "provider": "myHQ"
    }
  ]
  offices_thehackerstreet: Array<Object> = [
    {
      "name": "Bridge+ Coworking",
      "address": "Ascendas Park Square Mall, Bangaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Circle.Work",
      "address": "Sector 29, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Startup Offices",
      "address": "Cetrum Plaza, Gurgaon",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkDesq",
      "address": "Nerkundram, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dhwarco Business Center",
      "address": "Guindy, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Works 9to9",
      "address": "Ashok Nagar, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Crizon Business Centre",
      "address": "Mogappair East, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WSquare",
      "address": "Venkata Rathinam Nagar, Adyar, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Doxa OMR",
      "address": "Okkiyam Thuraipakkam, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vatika Business Centre &amp; Co-working Spaces",
      "address": "Teynampet, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks",
      "address": "Guindy Industrial Estate, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spaces – Express Avenue",
      "address": "Royapettah, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Artisans Lab",
      "address": "Mylapore, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vantage Coworking",
      "address": "Thiruvanmiyur, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WOCO Spaces T. Nagar",
      "address": "T. Nagar Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WOCO Spaces",
      "address": "Anna Nagar, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AtWorks OMR",
      "address": "Perungudi, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Hive",
      "address": "Thirumangalam, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Executive Zone",
      "address": "Anna Salai, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "TwoTrees Workspaces",
      "address": "Teynampet, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Grid Chennai",
      "address": "Kesava perumal puram, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workfella Perungudi",
      "address": "Perungudi, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workfella Alwarpet",
      "address": "Alwarpet, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Karya Space Nungambakkam",
      "address": "Nungambakkam, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Karya Space Mylapore",
      "address": "Mylapore, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva Chennai",
      "address": "Perungudi, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks Porur",
      "address": "Porur, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks OMR",
      "address": "Perungudi, Chennai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Smart Hive",
      "address": "Madhapur, Hyderabad,",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks Office",
      "address": "Kondapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkZone",
      "address": "Jubilee Hills, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GrowWork",
      "address": "Nanakramguda, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Your Desk",
      "address": "DLF Cyber City, Gachibowli, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Resolution 501",
      "address": "Banjara Hills, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis",
      "address": "Banjara Hills, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Unispace Kondapur",
      "address": "Kondapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spacion Business Centre",
      "address": "HITEC City, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dwaraka Business Centre",
      "address": "Hitech city, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Unispace Business Center",
      "address": "Gachibowli, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Unispace Business Centre",
      "address": "Hitech city, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Technals Coworking",
      "address": "Vasant Towers, Begumpet, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hatch Station",
      "address": "Prakash Nagar, Begumpet, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Indiqube",
      "address": "Mindspace Rd, Gachibowli, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workafella",
      "address": "Hitech City Rd, Kondapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks Hitech City",
      "address": "The Skyview, Hitech City Main Rd, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CLOwork",
      "address": "Hitech City Rd, Patrika Nagar, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva Kavuri Hills",
      "address": "Kavuri Hills, Madhapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IQ Business Center",
      "address": "The Platina, Gachibowli, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva Banjara Hills",
      "address": "Road No.10, Banjara Hills, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Valley Coworking",
      "address": "Green Valley, Banjara Hills, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Hitec City",
      "address": "HITEC City, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Kavuri Hills",
      "address": "Kavuri Hills, Jubilee Ridge, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Autonetic Spaces",
      "address": "HITECH City, Opp. Raheja Mind Space, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Unispace Business Center",
      "address": "Hospitals Lane, Nagarjuna nagar colony, Madhapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Jxtapose Coworking",
      "address": "Venkatagiri, Jubilee Hills, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoKarma",
      "address": "Kondapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Octo Spaces",
      "address": "Kavuri Hills, Madhapur, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva",
      "address": "Madhapur, HITEC City, Hyderabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AccessWork",
      "address": "Sector 48, Sohna Rd, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoHive SAS",
      "address": "SAS Towers, Medicity, Sector 38, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spring House",
      "address": "DLF Phase IV, Sector 27, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iSharespace",
      "address": "Golf Course Road, DLF Phase 5, Sector 54, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Huddle",
      "address": "DLF Cyber City, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CO4U Coworking",
      "address": "Udyog Vihar, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Innov8",
      "address": "DLF Phase 2, Sector 24, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Apeejay Business Centre",
      "address": "DLF Phase 2, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ABL workspaces",
      "address": "Two Horizon Centre, Golf Course Road, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoHive Golf Course Road",
      "address": "Golf Course Road, Sector 54, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AtDexter’s Coworking",
      "address": "Sohna Rd, Sector 48, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "STEP 01",
      "address": "Institutional Area, Sector 32, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoWork",
      "address": "Udyog Vihar, Sector 20, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "SproutBox",
      "address": "DLF Phase 1, Sector 26A, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Platina Tower",
      "address": "Platina Tower MG Road, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoNexus Life",
      "address": "City Center, Sector 29, Opposite Plazzo Hotel, Gurugram,",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks Sushant Lok",
      "address": "Sushant Lok, Block B, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Investopad",
      "address": "Prem Puri, Sector 32, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Skootr Offices",
      "address": "Sohna Road, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cybnetics Coworking",
      "address": "DLF Phase IV, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks Golf Course Road",
      "address": "Golf Course Road, Sector 54, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks Cybercity",
      "address": "DLF Cyber City, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Garage Gurgaon",
      "address": "DLF Cyber City, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Corporatedge Serviced Offices",
      "address": "DLF Phase 2, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoSphere",
      "address": "DLF Phase 1, Sector 24, Gurugram,",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workingham Palace",
      "address": "Sushant Lok Phase 1, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Inhwa Business Centre",
      "address": "Sohna Rd, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "VORKzone",
      "address": "Sohna Rd, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workcation",
      "address": "Metro Station, Sector 26, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Office Pass",
      "address": "DLF Phase 3, Sector 24, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Office Pass",
      "address": "Unitech Cyber Park, Sector-39, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Office Pass",
      "address": "Sohna Road, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard",
      "address": "Maruti Industrial Area, Sector 18, Gurgaon",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoHive",
      "address": "Sohna Road, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Incuspaze",
      "address": "Udyog Vihar, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Incuspaze",
      "address": "DLF Phase 3, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoHive Coworking",
      "address": "SAS Towers, Medicity, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Plus Offices",
      "address": "65, Sector 44 Road, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cospaces",
      "address": "DLF Phase 1, Sector 28, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Plus Offices",
      "address": "Sector 67, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AccessWork Coworking",
      "address": "DLF Phase 2, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "One Co.Work",
      "address": "Sushant Lok,, Phase- I, Gurgaon",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Grappus Coworking",
      "address": "SS Plaza, Sector 47, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Skootr Coworking",
      "address": "Udyog Vihar Phase 1, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Altf coworking",
      "address": "Plaza Mall, Mehrauli-Gurgaon Rd, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Think Valley",
      "address": "Institutional Area, Sector 32, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork 32nd Milestone",
      "address": "32nd Milestone Off NH 8, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork BlueOne Square",
      "address": "Udyog Vihar Phase 4 Rd, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva",
      "address": "HUDA City Center Metro Station, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Nimble Coworking",
      "address": "DLF Cyber City, Gurugram",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Seias Coworking",
      "address": "C Block, Sector 2, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "StartupEntrepreneurs",
      "address": "The I-Thum, A-40, Sector 62, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Qbicals Coworking",
      "address": "H Block, Sector 63, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "SSAP Coworking",
      "address": "G-89, sector-63, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Urban Hive Spaces",
      "address": "Green Park Extension, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workie",
      "address": "Area A 31, Sector 4, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "L2L Academy",
      "address": "B Block, Sector 2, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Kocreate",
      "address": "Expy, Sector 126, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Easy Office",
      "address": "H Block, Sector 62, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hackerspace Coworking",
      "address": "Near Sector 15 Metro Station, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "BOD Coworking",
      "address": "Karo Bagh, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Moti Arcade",
      "address": "C Block, Sector 2, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Xspaces Coworking",
      "address": "Sector 8, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vatika Business Centre",
      "address": "Okaya Centre B-5, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks",
      "address": "Maple Corporate Park, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkWings",
      "address": "Lohia Rd, H Block, Sector 63, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Blockspace",
      "address": "D Block, Sector 63, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Oqtagon Coworking",
      "address": "Sector 63, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workbar Coworking",
      "address": "Logix Technova, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Go4Office",
      "address": "Block G, Sector 3, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Amigo Coworking",
      "address": "C Block, Sector 8, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Unboxed Coworking",
      "address": "C Block, Sector 65, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Serenia",
      "address": "IHDP Business Park, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Innov8 Coworking",
      "address": "Film City, Sector 16A, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Let’s Connect Coworking",
      "address": "D Block, Sector 59, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Sector 63",
      "address": "A Block, Sector 63, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Sector 1",
      "address": "Block C, Sector 1, Noida",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Fume Coworking",
      "address": "Pitampura, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "VTS Coworking",
      "address": "Dwarka, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Connexxions",
      "address": "Greater Kailash, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Team Station",
      "address": "Rohini, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Garh.co",
      "address": "Mohammadpur, RK Puram, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "360 Degrees Budget Coworking",
      "address": "Tilak Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "B Hive 11",
      "address": "Badarpur, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Regus Elegance",
      "address": "Elegance Tower, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Daftar Coworking",
      "address": "State Bank Colony, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Supreme Cowork",
      "address": "Shalimar Bagh, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Ingenious Coworking",
      "address": "Metro plax mall, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Westart Coworking",
      "address": "Jhandewalan, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "eTribe Coworking Janakpuri",
      "address": "Janakpuri, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "eTribe Coworking",
      "address": "Mayur Vihar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Virtual Office",
      "address": "Southern Park, Saket, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Eccosphere Coworking",
      "address": "Okhla Industrial Area, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DesqWorx",
      "address": "Green Park Metro station, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DBS Office",
      "address": "Connaught Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Trinity Coworking",
      "address": "Dwarka, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workhubz",
      "address": "Nauroji Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Prowork Coworking",
      "address": "Karol Bagh, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "PeerShare",
      "address": "Shahpur Jat, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spring House",
      "address": "Greater Kailash, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowork Delhi",
      "address": "Mayur Vihar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ShareDesk",
      "address": "Nehru Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "MyInstpass Coworking",
      "address": "Hauz Khas, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Avanta Business Centre",
      "address": "Barakhamba, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Investopad",
      "address": "Hauz Khas, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "22 Workspace",
      "address": "Chandni Chowk, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Koworkspace",
      "address": "Dwarka, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "SproutBox",
      "address": "Okhla Industrial Area Phase 1, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hatch101",
      "address": "Mohan Estate Industrial Area, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Regus",
      "address": "Vasanth Kunj, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Okhla",
      "address": "Okhla, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Zen Business Center",
      "address": "Defence Colony, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Co-offiz",
      "address": "Preet Vihar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cocoweave",
      "address": "karkardooma Metro Station, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis Qutab",
      "address": "Qutab Institutional Area, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cercels Coworking",
      "address": "Hauz Khas Village, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Empowerers Coworking",
      "address": "Green Park Metro, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Base Station",
      "address": "Shahpur Jat, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIn Anarky HKV",
      "address": "Hauz Khas Village, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIn Lajpat Nagar",
      "address": "Lajpat Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIn Patel Nagar",
      "address": "East Patel Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIn Nehru Place",
      "address": "Nehru Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIN GK2",
      "address": "Greater Kailash-2, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "TRE Coworking",
      "address": "Connaught Circus, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Wolk-Walk and work",
      "address": "Nehru Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Work world",
      "address": "Dwarka, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Roots Coworking",
      "address": "Dariya Ganj, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Flockwork",
      "address": "Tilak Marg, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Prestige Coworking",
      "address": "Lajpat Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "BCL Coworking",
      "address": "Lajpat Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workwize",
      "address": "Palam, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vatika Business Centre",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "One Co.Work NSP",
      "address": "Pitampura, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "One Co.Work",
      "address": "Connaught Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "NQube Coworking",
      "address": "Kailash Colony, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Altf coworking",
      "address": "Mehrauli, Gurgaon",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Jhandewalan",
      "address": "Jhandewalan, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DevX Coworking",
      "address": "Vastrapur, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hively Coworking",
      "address": "Science City Road, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Working cube",
      "address": "S.G. Highway, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Address",
      "address": "SG Highway, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "14 The Hub",
      "address": "S. G. Highway. Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Paragraph",
      "address": "Gandhinagar HWY, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Greenfield Workspaces",
      "address": "Prahlad Nagar, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Next57 Coworking",
      "address": "Rajpath Rangoli Rd, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spaces Coworking",
      "address": "Nr Star Bazaar, Jodhpur, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "5B Colab",
      "address": "Ellisbridge, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Pravel Coworking",
      "address": "Makarba, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Daftar Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Uncubate Coworking",
      "address": "Commerce Six Rd, Navrangpura, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Karyalaya Coworking",
      "address": "Jai Ambe Nagar, Ahmedabad",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "A &amp; A Coworking",
      "address": "City bay, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DesignBoat Innovation",
      "address": "Hadapsar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Coworq",
      "address": "Hinjawadi, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Liberty Society",
      "address": "Koregaon Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "MVPM Spark",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workster Coworking",
      "address": "Vakil Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Crystal Coworking",
      "address": "Hinjawadi, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AIC-Pinnacle Ventures",
      "address": "Shivajinagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Digitise Factory",
      "address": "Kothrud, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Grafio Coworking",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Richesse Cowork",
      "address": "Sadashiv Peth, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Insppire Cowork",
      "address": "Magarpatta, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Garage CoWorking",
      "address": "Metro House, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Level 212",
      "address": "Parmar House, Baner",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "W-Business Centre",
      "address": "Kothrud, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "URJA Coworking",
      "address": "Datta Mandir Rd, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Third Space",
      "address": "Baner Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Maxiple Coworking",
      "address": "DSK Raanwaara Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Workshop Space",
      "address": "Baner Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IQS House",
      "address": "Baner, Riviresa Society, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sector 7 Workspaces",
      "address": "Viman Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CO workspace",
      "address": "Umashankar Complex, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoPlayr",
      "address": "Baner Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DNOS Coworking",
      "address": "Balajinagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Coworkingz hub",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Inscape Cowork Pvt Ltd",
      "address": "Koregaon Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "KickStart Coworking",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ThinkDesk Bavdhan",
      "address": "Bavdhan, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Gennxt Coworking",
      "address": "Aundh, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard",
      "address": "Yerwada, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Work Katta Coworking",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Friyey Space",
      "address": "Aundh, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis Camp Nucleus Mall",
      "address": "Nucleus mall, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Suave Spaces",
      "address": "Hinjawadi, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Yooco Red",
      "address": "Ashoka Nagar, Kharadi, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "EFC Coworking",
      "address": "Kalyani Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Launch Space",
      "address": "BMCC RD, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vatika",
      "address": "Viman Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vatika",
      "address": "Yerwada, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "VCN Coworking",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Fuel Spaces",
      "address": "Vishal Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva Powai",
      "address": "Powai, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Matchbox Coworking",
      "address": "Andheri West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "TBL Space",
      "address": "Balewadi, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Redbrick – Shivajinagar",
      "address": "Shivajinagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Redbrick – Magarpatta",
      "address": "Magarpetta, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "2499 Office",
      "address": "Tagore Garden Extension, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Meraki Spaces",
      "address": "Shivajinagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Coherent co-working",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Mesh – Koregaon Park",
      "address": "Koregaon Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Space",
      "address": "Rachana Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "One Co.Work",
      "address": "Connaught Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Peer Share Coworking",
      "address": "Vasant Vihar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Share-A-Space",
      "address": "Aundh, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Avanta Business Centre",
      "address": "Barakhamba, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Reno Spaces",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Starthub",
      "address": "Koregaon Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "InCube",
      "address": "Aundh, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Work Lab",
      "address": "Aundh, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Work Lab",
      "address": "Model Colony, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workolab",
      "address": "Pusa Road, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workly",
      "address": "Lajpat Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "myDesk",
      "address": "KG Marg, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ABL Workspaces",
      "address": "Green Park Extension, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "22 Workspace",
      "address": "Asaf Ali Rd, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Maker’s Asylum",
      "address": "Malviya Nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Startup Tunnel Coworking",
      "address": "Chattarpur, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Delhi Co",
      "address": "Shahpur Jat, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "So Share",
      "address": "Shahpur, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "1share office",
      "address": "East of Kailash, New Delh",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "NCR Urban Hive Spaces",
      "address": "Green Park Extension, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hatch101",
      "address": "Badarpur, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Myinstapass Coworking",
      "address": "Hauz Khas, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Founders Café",
      "address": "Okhla Industrial Area, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Aboard Offices",
      "address": "Dwarka, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "eTribe Coworking",
      "address": "Mayur Vihar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIn Lajpat Nagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91 Springboard Nehru Place",
      "address": "Nehru Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis Qutab Institutional Area A16",
      "address": "Qutab Institutional Area, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoHive",
      "address": "Ghitorni, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Greendesks",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Stirring Minds",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Empowerers Co-Working",
      "address": "Yusuf Sarai, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Innov8 Coworking CP",
      "address": "Connaught Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ProWorkIn",
      "address": "Sant nagar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoworkIn Nehru Place",
      "address": "Nehru Place, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Daftar",
      "address": "Baner Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "TRIOS Coworking",
      "address": "Balewadi, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "TRIOS Coworking",
      "address": "Viman Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "TRIOS Coworking",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Hub",
      "address": "Karve Rd, Mayur Colony, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Excella",
      "address": "Laxman Nagar, Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Collabworks Carter Road",
      "address": "Carter Road, Bandra, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Collabworks",
      "address": "The Cuckoo Club, Bandra, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Ultimate Arena",
      "address": "Andheri, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Teal House",
      "address": "Andheri, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Innov8 Andheri",
      "address": "Boston House, Andheri, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cohive Coworking",
      "address": "Karve Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Divine Coworking",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowork studio",
      "address": "Viman Nagar, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bootstart – Varsha Park",
      "address": "Varsha Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bootstart Koregaon Park",
      "address": "Koregaon Park, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bootstart – Kalyani Nagar",
      "address": "Kalyani Nagar - Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bootstart – Baner RD",
      "address": "Baner Road, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bootstart – Bavdhan",
      "address": "Bavdhan, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks – Yerwada",
      "address": "Yerwada - Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks – Baner",
      "address": "Baner, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks – Baner ACTP",
      "address": "Baner ACTP, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks",
      "address": "Magarpatta City, Pune",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Empire Business Centre",
      "address": "Lower Parel, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Servcorp",
      "address": "Bandra Kurla Complex, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DBS House Fort",
      "address": "Prescot Rd, fort, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DBS Office",
      "address": "Andheri East, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Boardroom",
      "address": "Malad West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Coworkyard Andheri",
      "address": "Andheri East, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Up in the Air",
      "address": "Dubash Marg, Ford, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Quest Offices",
      "address": "Bandra Kurla Complex, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hustle Cowork",
      "address": "Anand Vihar, New Delhi",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "YesssWorks Palm Beach",
      "address": "Palm Beach RD, Navi Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spacewhiz Saint John Baptist",
      "address": "Bandra West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AccessWork Malad West",
      "address": "Malad West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AccessWork Powai",
      "address": "Powai, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Access Kalina BKC",
      "address": "Kalina BKC, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "YesssWorks BKC",
      "address": "Kurla West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "603 Powai",
      "address": "Powai, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Access Vikhroli",
      "address": "Vikhroli, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "SOS Sakinaka",
      "address": "Andheri East, Sakinaka,Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Co.Lab.Oratory asia",
      "address": "kurla Road, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Divine Hub",
      "address": "Andheri East, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Blue Mushroom",
      "address": "Malad West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Clearspaces",
      "address": "Andheri East, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Regus",
      "address": "Goregaon East, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "G-Corp Media",
      "address": "Andheri East, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Tasmac Business Centre",
      "address": "Andheri West, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Beesquare",
      "address": "Thane Belapur Road, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Arth Coworking",
      "address": "Senapati Bapat Marg, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "OfficeSpace Lokhandwala",
      "address": "Off Link Road, Mumbai",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ZoomStart India",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Navi Mumbai",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Lotus",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CfE Offices",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Coworking Central Suburbs",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "JITO Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Millennial Pod",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workafella",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dhinchak Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "MyKopcha",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Office Space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "wegrow",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Access Andheri East",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hour Space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Smartworks",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Deodhar Workspace",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Orbit Plaza",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Redbrick powai",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Redbrick BKC",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spacewhiz New Link Road",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spacewhiz JP Road",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Connections Co-Working",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Rise Co – Working",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowrks Worli",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowrks Powai",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The A Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Evita",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Garage Co-Working",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dextrus",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Arch N Rock",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Maker’s Asylum",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "at101 Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Kontor Space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowrks Worli",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowrks Powai",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The A Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Evita",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Garage Co-Working",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dextrus",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Arch N Rock",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Maker’s Asylum",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "at101 Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Kontor Space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkAmp 59",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkAmp Estate",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Of10 Cowoking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vorq Space Andheri",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vorq Space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Innov8 Vikhroli",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bluespace Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IShareSpace",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Geekout",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Harkat Studios",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Ministry of New",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Garage Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Vaswani Chambers",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Oberoi Commerz II",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Marol",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Playce",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Mascots Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard BKC",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Mosaic Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkLoft",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowork Garage",
      "address": "HSR Layout, Bengaluru ",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Octavius Coworking",
      "address": "Kudlu Gate, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Boutik Stay Coworking",
      "address": "Whitefield, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Invertree Shared Offices",
      "address": "Sector 7, HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowork@35/2",
      "address": "Cooke Town, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Share Studio",
      "address": "Sadashivnagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "InCubes Coworking",
      "address": "Brookefield, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sky Offices",
      "address": "Museum Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bangalore Alpha Lab",
      "address": "JP Nagar 2nd Phase, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bangalore Best",
      "address": "Langford Gardens, Bangalore",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spacelance HSR",
      "address": "HSR Layout, Sector 1, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkPod",
      "address": "JP Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "ClayWorks CBD",
      "address": "Ashok Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "AKH Infomedia Solutions",
      "address": "Lingarajpuram, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Bohemian House",
      "address": "Richmond Town, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "DBS House",
      "address": "Cunningham Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "NUMA Coworking",
      "address": "Ashok Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Upstart Coworking",
      "address": "Whitefield, Brooke Bond First Cross, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workmatterz",
      "address": "HRBR Layout 1st Block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Quest Offices",
      "address": "MG Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Next Space",
      "address": "HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Evoma EPIP Zone",
      "address": "EPIP Zone Whitefield, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Square one",
      "address": "Indiranagar, Bengaluru,",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Evoma KR Puram",
      "address": "K R Puram, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Evoma Marathahalli",
      "address": "Marathahalli, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Lorven Coworks",
      "address": "Jayanagar 4th Block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Classic Converge",
      "address": "5th Phase, JP Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Co – start Hub Coworking",
      "address": "Sanjaynagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Prime Coworking",
      "address": "koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bangalore Coworking Hub",
      "address": "Kodihalli, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkWise",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Redbrick Offices",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis ORR",
      "address": "Kadubeesanahalli, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Gospace Coworking",
      "address": "Whitefield, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Happy Coworks",
      "address": "HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vybrant Coworks",
      "address": "BTM stage1, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bhive Workspace Koramangala",
      "address": "Koramangala 6th block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bhive Workspace Residency Road",
      "address": "Richmond Town, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Urban Vault Indiranagar",
      "address": "Kodihalli, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bhive Workspace Indiranagar",
      "address": "Indiranagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis Whitefield",
      "address": "Whitefield, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Hive Coworking",
      "address": "ITPL Main Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva Coworking",
      "address": "Marathahalli ORR, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowrks  Koramangala",
      "address": "Koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Inspire Jayanagar",
      "address": "Jayanagar 7th Block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Kokarya Business Synergy Centre",
      "address": "Jayanagara 9th Block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Trik Traffic Coworking",
      "address": "Domlur, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "PRI Co working Hub",
      "address": "Jp Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "V Converge",
      "address": "HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Startupin",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Gyan Space",
      "address": "Electronic City, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "B Station",
      "address": "St Marks Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Work ‘n’ Space",
      "address": "OMBR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Gopalan Coworks Indiranagar",
      "address": "Nagavarapalya, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Instasquares Business Center",
      "address": "Jayanagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sierra Cartel",
      "address": "Pulikeshi Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sierra Cartel HRBR",
      "address": "HRBR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sierra Cartel HSR",
      "address": "HSR layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Starttopia Coworking",
      "address": "BTM Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Accilerator Marathahalli",
      "address": "Silver Springs Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IKP Eden",
      "address": "Tavarekere Main Rd, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bootstart CoWorking",
      "address": "Raj Mahal Vilas 2nd Stage, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "The Circular Square",
      "address": "Doddakalansandra, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Unispace Business Center",
      "address": "Kudlu Gate, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Intide Space",
      "address": "J.P.Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "365 shared space Indiranagar",
      "address": "Indiranagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Hustle hub Co-working",
      "address": "HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Muse Hub Coworking",
      "address": "Marathahalli, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Le BURROW coworking",
      "address": "Uttarahalli, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "HOFIS Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cubic Business Centre",
      "address": "Koramangala 3 Block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Co start hub",
      "address": "Sanjaynagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Davanam Golden Square Prime",
      "address": "Koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "My WorkArea",
      "address": "Sheshadripuram, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "365 shared spaces HSR",
      "address": "HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Investopad",
      "address": "4th Block, Koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Galaxy",
      "address": "Ashok Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Rainmakers Workspace",
      "address": "MG Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Candor HUB",
      "address": "MG Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "HOFIS Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cubic Business Centre",
      "address": "Koramangala 3 Block, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Co start hub",
      "address": "Sanjaynagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Davanam Golden Square Prime",
      "address": "Koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "My WorkArea",
      "address": "Sheshadripuram, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "365 shared spaces HSR",
      "address": "HSR Layout, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Investopad",
      "address": "4th Block, Koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Galaxy",
      "address": "Ashok Nagar, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Rainmakers Workspace",
      "address": "MG Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Candor HUB",
      "address": "MG Road, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IndiQube Zeta",
      "address": "Hubali, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IndiQube Omega",
      "address": "ITPL Main Road,, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Newbridge Business Centre",
      "address": "Koramangala, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Fetchpod coworking",
      "address": "6th Block, Ejipura, Bengaluru",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IndiQube Garden",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "North Bangalore Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "High Calibre League Co-working",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Founder’s Cube",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "We Work Embassy TechVillage",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Vikhroli West",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bombay Connect",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkSquare Powai",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bloomdesk coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "603 Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Mumbai Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Work Square",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "iKeva BKC Annexe",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bangalore Alpha Lab – JP Nagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workshaala NR Tower",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks – Ecoworld",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "One Co.Work",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GreenBubbles Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WeWork Hebbal",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sillicon Vally Business Centre",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dialogues Cafe",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IndiQube Sigma",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Indiqube Alpha",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Solo Cubes Koramangala",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Innov8 Koramangala",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "GoodWorks CoWork",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Social Offline – Church Street",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Novel Office MG road",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWorkIndia",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "CoWrks – New Indiranagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Inspire Workplace",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Work-Adda CoWorking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Blank Space Bangalore",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Let’s Start Cowork Space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Indiranagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Spacelance Indiranagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Ixora Cowork",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Think Hub",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "WorkDen Indiranagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Deskhub Bangalore",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bangalore Alpha Lab",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Solo Cubes Co working and Reading place",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Sun Square Business Hub",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Ataura Coworking space",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Indiqube Delta",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bhive HSR S-6",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Commune Coworks",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bhive HSR S-4",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workspace MG Road",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Space-n-Desk",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Koramangala 8th block",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard MG road",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Work IN",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Awfis Indiranagar",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Golden Square Business Centre VM",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Trinity Workspace",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Woodstock Business centre",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Workbench Projects",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Jaaga",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Vatika Business Centre &amp; Co-working Spaces",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Bizzhub Work Spaces",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Dreams@Work",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Beginest",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "My Work Area",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "IShareSpace – Residency Road",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Upstart Coworking",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "Cowork Cafe",
      "address": "",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "91springboard Koramangala 7th Block",
      "address": "Hosur Road",
      "provider": "The Hacker Street",
      "type": "cowork"
    },
    {
      "name": "SparkPlug Coworks",
      "address": "Koramangala, Bangalore",
      "provider": "The Hacker Street",
      "type": "cowork"
    }
  ]

  OTHER_MT: Array<Object> = [
    'ShareDesk Global Inc',
    'cobot',
    'Nexudus Ltd',
    'eFlair',
    'digicuro'
  ]
  Digicuro: Array<Object> = [
    {
      "name": "Workingdom",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Co-Offiz",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "WIZworks",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Pin For Cowork",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "MiQB",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Your Own Space",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Digicuro Meetings",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "InCube Cowork",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Vorq Space",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Office Beanz",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Anant Raj Estate",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "603 The Coworking Space",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Digicuro Guests",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "WorkDen",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Glorious Cowork",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Monitoring Committee Visitor Management",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "YesssWorks",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Digicuro - Space Management Software",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "The Board Room",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    },
    {
      "name": "Digicuro Admin",
      "address": "",
      "type": "",
      "provider": "Digicuro"
    }
  ]
  Enagage: Array<Object> = [
    {
      "name": "Engage",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "The Hack - Coworking Spaces",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "R WorkSquare Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "CoKarma Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Qabila Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Coworq",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "One Space",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Work Shack - Navin House",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Gowork",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "My Place",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "BIG WHEEL",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Bric Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Spring House Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "India Accelerator",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Team Cowork",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Work365",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "HashTag Coworks",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Rainmakers Workspace",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Bcogent",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "The BoardRoom Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "The Hack Champion",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "BubbleSpace",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Cowork Venue",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "VrkSpace",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Working Kulture",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Ginserv",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "WorkOville",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Muse Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "InnoWorks",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Evolve Coworking",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Aspire Business Club",
      "address": "",
      "type": "",
      "provider": "Engage"
    },
    {
      "name": "Synergy Offices",
      "address": "",
      "type": "",
      "provider": "Engage"
    }
  ]
  Nexdus: Array<Object> = [
    {
      "name": "AICD Passport",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Passport by Nexudus",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "HIT",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "LABS",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "SOHO NOMADS",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "NEWO",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Werqwise",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "The Clubhouse",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Mutuo",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Urban Place",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "NexIO",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "4D COMMISSARY",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "utopicus",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Cozone",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Powered by United",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "The Shop Workspace",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "CO.CO",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "B:Hive",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "MLC Mobile",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Luminary",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Impact Hub Madrid",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "The Building Society",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Minds CoWork",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "The Ministry",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "WeRemote",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "CWi",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "SOHO CONNECT",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Inspire Cowork",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "meet + greet",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Brain Embassy",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "NexBoard",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "ManeSpace",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Venture X",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Haven Coworking",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "CloudWorks Passport",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Visionary Workspaces",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "NexEvents",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "SOHO CI",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Colony Coworking Space",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "One Heddon St",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "L39 Community",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "The A Insider",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Office Suites Club",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Office Club",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "The Workshop",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Tribe",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Glandore",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "COHUTT",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Toong",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Space2B",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Cowork Medical",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Mortimer House",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Eleanor's Place",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Workvana",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "AtTheOffice",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "azalvo",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "MYO",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Bold",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "Workable London",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    },
    {
      "name": "OnOffices",
      "address": "",
      "type": "",
      "provider": "Nexdus"
    }
  ]
  ShareDesk: Array<Object> = [
    {
      "name": "Optix",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Business Link",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Highland | City Club",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "COhatch",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "community101",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Workhaus Co.",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Cloud Room",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Orbital Music Park",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Hopewell Works",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "LINA: Love Your Practice",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Impact Hub Honolulu",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "THRIVE | Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Ikigai Nairobi",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Tramshed Tech",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Cornerstone Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Enterspace",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "HiVE Vancouver",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "theDesk Booking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Coven MPLS",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "ORCA Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "MyWorkSpot",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "AYEKA",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Irontek",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Loft Office Suites",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Aldea Networking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Stratus Offices",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "StationW",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "StartHub",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Infusion Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Orangery",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "MileOne",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Grunderloftet",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Mosaic Mumbai",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The McKinley Club PHX",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "innspace",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Parlay Cafe",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "OfficeOurs Melbourne",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Workable Nairobi",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Atmowork",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Workup Hub",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Terkko Hub",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "BNZ Partners",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Launch Coworking Space",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Grid.works",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Duo Works",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Profile Vancouver",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Haus",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Rise & Grind Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Work and Wall",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Cahoots",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "BLOC Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "HudCo",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "space on the fly",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Look LV",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "ASID HQ Meetings",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "FoundrSpace",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "the Urban Hub",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Launch Academy",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Homebase Works",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Work At The Park",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Co-Co",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "COWORK 1010",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Johnson Corner",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "HIVE Coworking & Makerspace",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Scout Workshop",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "F.M.C",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "OPEN Workspace",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Protein Studios",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Playyo",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "MobSquad Calgary",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Input Cowork",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Shop - Homewood",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Incubate Ventures",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Western BACE",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Raw Space",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "LawWorks Workspace for Lawyers",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Dream Village",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Conspire Boston",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "b[x]",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Artist Foundry",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Zip Office, LLC",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Commons at Phase",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "United Agent Services",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "ProSuites2 Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "pro.space",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "A/D/O Workspace",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Kimball HQ",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Impact Brixton",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "River City Labs",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Co-Madre Comunidad y Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Cluster",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "The Wheelhouse UK",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "co.workspace @ the collective",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "DIOM",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "Kailua Music School",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "KIN Coworking",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    },
    {
      "name": "FabCafe",
      "address": "",
      "type": "",
      "provider": "ShareDesk"
    }
  ]


  constructor() { }

}