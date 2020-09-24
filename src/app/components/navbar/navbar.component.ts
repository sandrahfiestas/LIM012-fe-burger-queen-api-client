import { Component, OnInit } from '@angular/core';

declare var $: any; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

    $(document).ready(function () {
    $(".menu .btn").on("click", function () {
      $("#nav").toggleClass("menu_show");
    });
  });

  }
 
}