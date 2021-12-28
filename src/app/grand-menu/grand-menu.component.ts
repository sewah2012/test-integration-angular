import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-grand-menu',
  templateUrl: './grand-menu.component.html',
  styleUrls: ['./grand-menu.component.css']
})
export class GrandMenuComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialog.closeAll()
  }
  
}
