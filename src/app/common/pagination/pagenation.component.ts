import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
/**
 * Created by Administrator on 2017/6/15.
 */
@Component({
  moduleId: module.id,
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() total: number;
  @Input() size: number;
  @Input() number: number;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
  _pages: number[] = [];
  _pageNumber: number;

  onSelectPage(pageNumber: number) {
    this.onSelect.emit({size: this.size, number: pageNumber});
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propKey: number]: SimpleChange }): void {
    for (const propName in changes) {
      if (propName === 'total') {
        this.total = changes[propName].currentValue;
      }else if (propName === 'size') {
        this.size = changes[propName].currentValue;
      }else if (propName === 'number') {
        this.number = changes[propName].currentValue;
      }
    }
    this._pageNumber = Math.ceil(this.total / this.size);
    this._pages = [];
    for (let i = 0; i < this._pageNumber; i++) {
      this._pages.push(i);
    }
  }
}
