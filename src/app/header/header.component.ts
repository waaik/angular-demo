import { Component, EventEmitter, OnInit, Output } from '@angular/core';
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 //Adding custom event
 
  
 constructor() { }
  
 collapsed =true;
 
  ngOnInit(): void {
  }

}
