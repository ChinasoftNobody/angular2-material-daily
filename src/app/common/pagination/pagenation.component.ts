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
  _gridCols = 0;
  _morePositionPre = true;
  _morePositionShow = false;
  _totalPage = 0;

  onSelectPage(pageNumber: number) {
    if (pageNumber < 0) {
      pageNumber ++;
      return;
    }
    if (pageNumber > this._pages.length - 1) {
      pageNumber --;
      return;
    }
    this.onSelect.emit({size: this.size, number: pageNumber});
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: { [propKey: number]: SimpleChange }): void {
    for (const propName in changes) {
      if (propName === 'total') {
        this.total = changes[propName].currentValue;
      } else if (propName === 'size') {
        this.size = changes[propName].currentValue;
      } else if (propName === 'number') {
        this.number = changes[propName].currentValue;
      }
    }
    const number = Math.ceil(this.total / this.size);
    this._totalPage = number + 2;
    if (number > 10) {
      this._morePositionShow = true;
      if (this.number > number / 2) {
        this._morePositionPre = true;
      } else {
        this._morePositionPre = false;
      }
      this._pageNumber = 10;
    } else {
      this._morePositionShow = false;
      this._pageNumber = number;
    }
    this._gridCols = this._pageNumber + 2 + (this._morePositionShow ? 1 : 0);
    this._pages = [];
    if (!this._morePositionShow) {
      for (let i = 0; i < this._pageNumber; i++) {
        this._pages.push(i);
      }
    } else {
      for (let i = 0; i < this._totalPage - 2; i++) {
        this._pages.push(i);
      }
    }
  }
}
