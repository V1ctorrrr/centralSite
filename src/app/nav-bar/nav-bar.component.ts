import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/libs/theme/theme.service';
import { NgModel } from '@angular/forms';
import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isDarkTheme?:boolean;

  constructor(private themeService:ThemeService) { 
    this.isDarkTheme = localStorage.getItem('theme') === 'dark';
  }


  toggleTheme(){
    this.themeService.toggleDarkMode();
    this.isDarkTheme = localStorage.getItem('theme') === 'dark';
  }

  ngOnInit(): void {
    initTE({ Collapse, Dropdown });
  }

}
