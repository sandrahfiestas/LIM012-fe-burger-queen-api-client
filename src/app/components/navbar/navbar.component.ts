import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
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
