import { MediaMatcher } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewpointService {
  private mobileQuery: MediaQueryList;
  public isMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private media: MediaMatcher) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.isMobile.next(this.mobileQuery.matches);
    this._mobileQueryListener = this._mobileQueryListener.bind(this);
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  private _mobileQueryListener(event: MediaQueryListEvent) {
    this.isMobile.next(event.matches);
  }

}
