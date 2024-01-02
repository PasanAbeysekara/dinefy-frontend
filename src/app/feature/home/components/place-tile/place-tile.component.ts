import { Component, OnInit, Input } from '@angular/core';
import { PlacesModel } from '../../../../models/placesModel';

@Component({
  selector: 'app-place-tile',
  templateUrl: './place-tile.component.html',
  standalone: true,
  styleUrls: ['./place-tile.component.css']
})
export class PlaceTileComponent implements OnInit {
  @Input() model: PlacesModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
