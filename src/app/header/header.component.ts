import { Component } from '@angular/core';
import { faUserAstronaut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  iconUser = faUserAstronaut;
  iconNotification = faBell;
}
