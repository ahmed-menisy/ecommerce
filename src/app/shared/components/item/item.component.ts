import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  constructor() {}
  @Input() data: any;
  @Output() item: EventEmitter<any> = new EventEmitter();
  addButton: boolean = false;
  amount: any = 1;
  ngOnInit(): void {}
  add(): void {
    this.item.emit({ quantity: this.amount, item: this.data });
  }
  select(e: any) {
    this.amount = e.target.value;
  }
  counter(i: number): Array<number> {
    return new Array(i);
  }
}
