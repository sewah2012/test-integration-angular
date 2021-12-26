import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listings = [
      {
        enService:true,
        noSequentiel:8765,
        matricule: "6612A6",
        genre: "Pick Up",
        brandName: "MITSUBISHI Pick Up",
        gps:98755445666,
        entite:{
          onee:"ONEE",
          parce: "Parce Central (NB)",
          cour: "Course de ville(NB)"
        }
      },

      {
        enService:false,
        noSequentiel:8765,
        matricule: "",
        genre: "",
        brandName: "",
        // gps:98755445666,
        // entite:{
        //   onee:"ONEE",
        //   parce: "Parce Central (NB)",
        //   cour: "Course de ville(NB)"
        // }
      }
  ]

  isSmallMenuOpen:Boolean

  constructor() { }

  ngOnInit(): void {
  }

  
  openSmallMenu = ($event:any)=>{
this.isSmallMenuOpen = $event
  }
}
