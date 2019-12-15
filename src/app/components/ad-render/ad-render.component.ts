import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AdData} from '../../interfaces/ad/ad.interface';

@Component({
  selector: 'app-ad-render',
  templateUrl: './ad-render.component.html',
  styleUrls: ['./ad-render.component.scss']
})
export class AdRenderComponent implements OnInit {
  @Input() ad: AdData;
  @Input() position: ClientRect | DOMRect;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    // kill ad after 5 sec
    setTimeout(() => {
      this.ad = null;
      this.cdRef.detectChanges();
    }, 5000);
    // make sure position is on map
    this.setPosition();
  }

  setPosition() {
    const html = document.documentElement;
    const height = html.scrollHeight;
    if (this.ad.coordinates.y > height) {
      this.ad.coordinates.y = height * 0.8;
    }
    if (this.ad.coordinates.x < this.position.left) {
      this.ad.coordinates.x += this.position.left;
    }
  }
}
