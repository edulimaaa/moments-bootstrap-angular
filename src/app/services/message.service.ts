import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string = '';
  classe: string = '';

  constructor() {}

  add(message: string, classe: string) {
    this.message = message;
    this.classe = classe;

    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.message = '';
  }
}
