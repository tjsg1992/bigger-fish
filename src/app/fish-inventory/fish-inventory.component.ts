import { Component, OnInit } from '@angular/core';
import { Player } from '../player'

@Component({
  selector: 'app-fish-inventory',
  templateUrl: './fish-inventory.component.html',
  styleUrls: ['./fish-inventory.component.css']
})
export class FishInventoryComponent implements OnInit {

  constructor(public player: Player) { }

  ngOnInit(): void {
  }

}
