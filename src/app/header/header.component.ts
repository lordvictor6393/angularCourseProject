/**
 * Created by Victor on 15/06/2017.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() activeTabChanged = new EventEmitter<string>();

  ngOnInit() {
  }

  onTabSelect(selectedTab: string) {
    this.activeTabChanged.emit(selectedTab);
  }
}
