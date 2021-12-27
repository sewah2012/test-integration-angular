import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
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

  private isSmallMenuOpen:Boolean = false;

  constructor() { }

  setOpenSmall(value:Boolean){
    this.isSmallMenuOpen = value
  }

  getOpenSmall():Observable<Boolean>{
    const res = of(this.isSmallMenuOpen)
    return res;
  }

  getListing():any[]{
    return this.listings;
  }

}
