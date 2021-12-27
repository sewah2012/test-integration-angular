import { Component, OnInit } from '@angular/core';
import { AffectationService } from '../affectation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  listings:any[]

  isSmallMenuOpen:Boolean

  constructor(private affectationService:AffectationService) { }

  ngOnInit(): void {
    this.listings = this.affectationService.getListing()
    this.affectationService.getOpenSmall().subscribe(res=>this.isSmallMenuOpen=res)
  }


  
}
