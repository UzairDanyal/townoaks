import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../client.component.scss'],
})
export class HomeComponent implements OnInit {
  vm: any;
  constructor(private router: Router) {}

  year:any;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    this.vm = {
      heroImg: 'assets/hero.jpeg',
      planMap: 'assets/site/images/Apartments-floor-plan1to10.jpg',
      startDate: 'July, 2020',
      endDate: 'July, 2024',
      showMoreDocs:false
    };
  }

  //#region NAVIGATIONS
  viewPrices() {
    this.router.navigateByUrl('/Prices');
  }

  //#endregion
}
