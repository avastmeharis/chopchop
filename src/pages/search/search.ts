import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  amount: number = 12;
  noMeat: number = 0;
  noVegg: number = 0;

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {
    this.amount = navParams.get('amount');
    this.noMeat = navParams.get('noMeat');
    this.noVegg = navParams.get('noVegg');
  }

  goBack() {
    this.navCtrl.pop();
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
