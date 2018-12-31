import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoaderService} from '../../services/loader/loader.service';
import {LoaderState} from '../../services/loader/loader';

@Component({
  selector: 'app-loader-indicator',
  templateUrl: './loader-indicator.component.html',
  styleUrls: ['./loader-indicator.component.scss']
})
export class LoaderIndicatorComponent implements OnInit {

  public isLoading;
  public subscription: Subscription;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.isLoading = state.show;
      });
  }

}
