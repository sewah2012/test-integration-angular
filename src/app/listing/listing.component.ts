
import { Component, Input, OnInit} from '@angular/core';
import { AffectationService } from '../affectation.service';

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

  
  


  constructor(private affectationService:AffectationService) { }

  ngOnInit(): void {
  
  }


}
