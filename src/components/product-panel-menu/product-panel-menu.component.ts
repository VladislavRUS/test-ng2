import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product-panel-menu',
  templateUrl: './product-panel-menu.component.html',
  styleUrls: ['./product-panel-menu.component.scss']
})
export class ProductPanelMenuComponent implements OnInit, OnDestroy {

  @Input() menuBtn: HTMLElement;
  @Input() panel: HTMLElement;

  private menu: HTMLElement;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    const menu = this.elementRef.nativeElement.childNodes[0];
    this.elementRef.nativeElement.removeChild(menu);

    menu.style.left = `${this.menuBtn.offsetLeft}px`;
    menu.style.top = `${this.panel.offsetTop}px`;

    document.body.appendChild(menu);
    this.menu = menu;

    setTimeout(() => {
      this.menu.classList.add('_active');
    });
  }

  ngOnDestroy(): void {
    this.menu.classList.add('_inactive');

    setTimeout(() => {
      document.body.removeChild(this.menu);
      this.menu = null;
    }, 300);
  }
}
