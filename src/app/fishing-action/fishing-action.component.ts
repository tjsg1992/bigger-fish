import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { World } from '../world';
import * as $ from 'jquery';

@Component({
  selector: 'app-fishing-action',
  templateUrl: './fishing-action.component.html',
  styleUrls: ['./fishing-action.component.css']
})
export class FishingActionComponent implements OnInit {

  public catchTracker: CatchTracker = new CatchTracker(this);

  constructor(public player: Player, public world: World) { }

  ngOnInit(): void {
  }

  public changeActiveFish(fishType: string) {
    this.player.activeFish = fishType;
  }

  public catchActiveFish(): void {
    if (this.player.canCatchActiveFish()) {
      this.player.purchaseActiveFish();
      this.catchTracker.start(this.world.getFish(this.player.activeFish).difficulty);
    }
    
  }

  public resolveCatch(): void {
    this.player.resolveCatch();
  }

}

export class CatchTracker {
  public timeElapsed: number = 0;
  public intervalLength = 10;
  public duration: number;
  public interval;

  constructor(public callback: FishingActionComponent) {
      
  }

  public start(difficulty: number) {
      if (this.timeElapsed > 0) {
          return;
      }

      this.duration = difficulty * 100;
      //TEMP
      // this.duration = 1;
      this.interval = setInterval(() => {
        let percentageComplete = (this.timeElapsed / this.duration) * 100;
          if (this.timeElapsed < this.duration + this.intervalLength) {
              this.timeElapsed += this.intervalLength;
              $('.progress-bar').css('width', percentageComplete + '%');
          } else {
              this.callback.resolveCatch();
              this.reset();
          }
      }, this.intervalLength)
  }

  public reset(): void {
      this.timeElapsed = 0;
      $('.progress-bar').css('width', '0%');
      clearInterval(this.interval);
  }
}
