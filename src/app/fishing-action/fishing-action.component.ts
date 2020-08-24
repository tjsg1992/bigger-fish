import { Component, OnInit } from '@angular/core';
import { Player, World } from '../player';

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
    this.player.catchActiveFish();
    this.catchTracker.start(1000);
  }

  public resolveCatch(): void {
    this.player.resolveCatch();
  }

}

export class CatchTracker {
  public timeElapsed: number = 0;
  public interval = 100;
  public duration: number;
  public percentageComplete: number = 0;

  constructor(public callback: FishingActionComponent) {
      
  }

  public start(duration: number) {
      if (this.timeElapsed > 0) {
          return;
      }

      this.duration = duration;
      this.interval = setInterval(() => {
          if (this.timeElapsed < this.duration) {
              this.timeElapsed += this.interval;
              $scope.percentageComplete = (this.timeElapsed / this.duration) * 100;
          } else {
              this.callback.resolveCatch();
              this.reset();
          }
      }, this.interval)
  }

  public reset(): void {
      this.percentageComplete = 0;
      this.timeElapsed = 0;
      clearInterval(this.interval);
  }
}
