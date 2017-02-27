import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BootstrapDropdownService {

  private activeMenu = new Subject<string>();

  menuActivated$ = this.activeMenu.asObservable();

  activateMenu(el: string) {
    this.activeMenu.next(el);
  }
}
