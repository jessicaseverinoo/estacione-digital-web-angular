import { Component } from '@angular/core';
import { faHome, faClock, faWallet, faCar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  iconHome = faHome;
  iconClock = faClock;
  iconWallet = faWallet;
  iconCar = faCar;
  iconUser = faUser;
}
