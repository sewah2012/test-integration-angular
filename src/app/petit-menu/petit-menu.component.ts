import { Component, Input, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AffectationService } from '../affectation.service';
import { GrandMenuComponent } from '../grand-menu/grand-menu.component';

@Component({
  selector: 'app-petit-menu',
  templateUrl: './petit-menu.component.html',
  styleUrls: ['./petit-menu.component.css']
})
export class PetitMenuComponent implements OnInit {
  
 
  constructor(private affectationService:AffectationService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onItemClick(){
    this.openDialog()
    

  }

  openDialog() {
    this.dialog.open(GrandMenuComponent, {
      data: {
        animal: 'panda',
      },
      panelClass:'my-custom-dialog'
    });
  }

}
