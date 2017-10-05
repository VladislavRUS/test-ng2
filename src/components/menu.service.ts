import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {

    private menuOpenedSource = new Subject<void>();

    menuOpened = this.menuOpenedSource.asObservable();

    constructor() { }

    setMenuOpened(): void {
        this.menuOpenedSource.next();
    }
}