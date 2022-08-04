import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {
  constructor() {}
  @Input() title: string = ''
  @Input() data: string[] = []
  @Output() selectedValue: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
  dectectChanges(event: any) {
    this.selectedValue.emit(event);
  }
}
