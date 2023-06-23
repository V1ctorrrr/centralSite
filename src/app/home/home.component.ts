import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { initTE, Button,Ripple } from 'tw-elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http:HttpClient) { 
  }

  ngOnInit(): void {
    initTE({Button,Ripple});
  }
}
