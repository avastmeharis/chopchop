import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  amount: number = 12;
  noMeat: number = 0;
  noVegg: number = 0;

  constructor(public navCtrl: NavController) { }

  search() {
    this.navCtrl.push('SearchPage', {
      amount: this.amount,
      noMeat: this.noMeat,
      noVegg: this.noVegg
    });
  }

  incMeat() {
    this.noMeat++;
  }

  decMeat() {
    this.noMeat--;
    if (this.noMeat < 0) {
      this.noMeat = 0;
    }
  }

  incVegg() {
    this.noVegg++;
  }

  decVegg() {
    this.noVegg--;
    if (this.noVegg < 0) {
      this.noVegg = 0;
    }
  }
}
