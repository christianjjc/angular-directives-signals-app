import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
  standalone: false,
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  @Input() set color(value: string) {
    // console.log({ color: value });
    this._color = value;
    this.setStyleColor();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log(el);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('Directiva ngOnInit');
    this.setStyleColor();
  }

  setStyleColor(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }
}
