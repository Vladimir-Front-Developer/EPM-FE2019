import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private MOCK_SERVER_ID: string = '8nfg9829dnm209gfmn34'
  authForm = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  getErrMsgNick() {
    return this.authForm.controls.nickname.hasError('required') ? 'You must enter a value' :
      this.authForm.controls.nickname.hasError('minlength') ? 'minimum length 4 characters' : '';
  }

  getErrMsgEmail() {
    return this.authForm.controls.email.hasError('required') ? 'You must enter a value' :
      this.authForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  authenticate(){
    //Работа с валидацие формы, если форма не валидна дальше не пускать
  }

}
/*
* 1. Получить данные формы nickname, email
* 2. Отправить на сервер(Реализовать сервис)
* 3. Получить ответ от сервера (id)
* 4. Записать id, nickname в localstorage(Реализовать сервис)
* 5. Реализовать Guard, без id не пускать выводить ошбику сервера.
* 6. Получить nickname из localstorage в sea-battleship.component(Использовать сервис)
**/
