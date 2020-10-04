import { Component, Input, OnInit } from '@angular/core';

declare var $: any; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
    
  // hora
  private date = new Date();
  
  public hour: any;
  public minute: string;
  public ampm: string;
  
  
  constructor() { }
  
  ngOnInit(): void {
    
  // this.title ="Hola Mundo!"

    // hora
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);


    $(document).ready(function () {
    $(".menu .btn").on("click", function () {
      $("#nav").toggleClass("menu_show");
    });
  });

  }

  private updateDate(date: Date){
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;

    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
 
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
  }
 
}