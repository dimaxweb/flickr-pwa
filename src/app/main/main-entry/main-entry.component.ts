import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-entry',
  templateUrl: './main-entry.component.html',
  styleUrls: ['./main-entry.component.scss']
})
@Injectable()
export class MainEntryComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  goToGithub(){
    window.open('https://github.com/dimaxweb/flickr-pwa');
  }


}
