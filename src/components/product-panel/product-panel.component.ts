import { Component, OnInit, Input, trigger, state, transition, animate, style, EventEmitter, Output } from '@angular/core';
import { MenuService } from 'components/menu.service';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  animations: [
    trigger('slideDown', [
      state('active', style({ height: '*' })),
      state('inactive', style({ height: '0' })),
      transition('active <=> inactive', animate('200ms ease'))
    ])
  ],
  styleUrls: ['./product-panel.component.scss']
})
export class ProductPanelComponent implements OnInit {

  @Input() product: any;
  @Output() removeEmitter = new EventEmitter<number>();

  removeState = 'inactive';
  bodyState = 'inactive';
  menuOpened = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.menuOpened.subscribe((menuOpened) => {
      this.menuOpened = false;
    });
  }

  onRemove(event: Event): void {
    event.stopPropagation();
    this.removeEmitter.emit(this.product.id);
  }

  setRemoveState(state: string, event: Event): void {
    event.stopPropagation();

    this.removeState = state;
  }

  onHeaderClick(): void {
    this.bodyState = (this.bodyState === 'active' ? 'inactive' : 'active');
  }

  toggleMenu(event: any): void {

    if (!this.menuOpened) {

      this.menuService.setMenuOpened();

      this.menuOpened = true;

      setTimeout(() => {
        document.body.onclick = (event: any) => {

          for (let i = 0; i < event.target.classList.length; i++) {
            if (event.target.classList[i] === 'tsMenu') {
              return;
            }
          }

          this.menuOpened = false;
          document.body.onclick = null;
        }
      });
    } else {
      this.menuOpened = false;

    }
  }
}