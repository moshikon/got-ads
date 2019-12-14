import {Component, Input, OnInit} from '@angular/core';
import {AdData} from '../interface/ad/ad.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() ads: AdData[];
  position: ClientRect | DOMRect;

  constructor() {
  }

  ngOnInit() {
    this.position = document.getElementById('map').getBoundingClientRect();
  }
}
