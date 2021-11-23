import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let landingPage = document.querySelector('.landing-page');
    let imgsArray = [
      '../../assets/1.jpg',
      '../../assets/2.jpg',
      '../../assets/3.jpg',
      '../../assets/4.jpg',
      '../../assets/5.jpg',
    ];

    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    }, 3000);
  }
}
