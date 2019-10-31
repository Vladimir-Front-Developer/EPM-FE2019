import { Component } from '@angular/core';
import { Observable, timer } from "rxjs";
import { tipsInterface, TipsService } from "../../services/tips.service";
import { filter, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-game-tips',
  templateUrl: './game-tips.component.html',
  styleUrls: ['./game-tips.component.scss']
})
export class GameTipsComponent {
  constructor(private tipsSvc: TipsService){}
  updateTipsTimer = timer(0, 5000)
  tips: Observable<tipsInterface[]> = this.updateTipsTimer.pipe(
    switchMap(() => this.tipsSvc.getTips())
  )

  /*
  * 1. Реализовать фильтр. Чтоб каждые 5-сек выводилась радномная подсказка с JSON файла.
  * 2. Сделать анимацию при отрисовке подсказки.
  * 3. Если будет время заняться отдавать подсказку с сервера.
  **/

}
