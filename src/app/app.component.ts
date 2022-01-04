import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
//Minute 58:58
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Blog F';
  isAuth = false;
  appareils: any[] = [];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
 
}
