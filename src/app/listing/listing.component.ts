import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input()
  enService:Boolean
  @Input()
  noSequentiel:Number
  @Input()
  matricule: String
  @Input()
  genre: String
  @Input()
  brandName: String
  @Input()
  gps:any
  @Input()
  entite:any

  @Input()
  isSmallMenuOpen:Boolean


  constructor() { }

  ngOnInit(): void {
  }


  onDotsClick = ()=>{
   this.isSmallMenuOpen = !this.isSmallMenuOpen
  }

}
