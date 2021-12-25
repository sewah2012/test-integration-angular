import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slid-toggle',
  templateUrl: './slid-toggle.component.html',
  styleUrls: ['./slid-toggle.component.css']
})
export class SlidToggleComponent implements OnInit {
  @Input('isChecked')
   isChecked:Boolean = new Boolean()

   @Input('title')
   title:String = new String()
  
  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

  
 
}
