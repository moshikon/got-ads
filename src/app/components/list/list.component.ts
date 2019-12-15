import {Component, Input, OnInit} from '@angular/core';
import {AdData} from '../../interfaces/ad/ad.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() ads: AdData[];
  filterEnd: string;
  filterStart: string;
  constructor() { }

  ngOnInit() {
  }

}
