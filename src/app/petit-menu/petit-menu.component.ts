import { Component, Input, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GrandMenuComponent } from '../grand-menu/grand-menu.component';

@Component({
  selector: 'app-petit-menu',
  templateUrl: './petit-menu.component.html',
  styleUrls: ['./petit-menu.component.css']
})
export class PetitMenuComponent implements OnInit {
  
 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onItemClick(){
    this.openDialog()
    

  }

  

  openDialog() {
    this.dialog.open(GrandMenuComponent, {
      data: {
        id: 11,
      },
      panelClass:'my-custom-dialog',
      position:{ 
        top: '0px',
        right: '0px'
      }
    });
  }

  

}
