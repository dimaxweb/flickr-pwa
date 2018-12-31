import {Component, Inject} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {environment} from '../environments/environment';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {}
}
