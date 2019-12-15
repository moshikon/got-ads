import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {adDispatcher} from 'ubimo-ad-dispatcher';
import {AdData} from '../../interfaces/ad/ad.interface';

@Component({
  selector: 'app-got-ads',
  templateUrl: './got-ads.component.html',
  styleUrls: ['./got-ads.component.scss']
})
export class GotAdsComponent implements OnInit {
  public ads: AdData[] = [];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    adDispatcher.registerToAdEvents(this.onGetAdEvent.bind(this));
  }

  onGetAdEvent(adEvent): void {
    const epochTime = Date.now();
    const newAd = {
      coordinates: {
        x: adEvent.coordinates.x,
        y: adEvent.coordinates.y,
      },
      creative: {
        name: adEvent.creative.name,
        url: adEvent.creative.url,
      },
      type: adEvent.type,
      date: epochTime
    };
    this.ads.push(newAd);
    this.cdRef.detectChanges();
  }
}
