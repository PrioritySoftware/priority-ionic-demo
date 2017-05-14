import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormService, Form, MessageHandler, ObjToIterable } from 'priority-ionic';

@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {

	form: Form;
	rows = [];

	columnsOptions = {
		'CUSTDES': {
			isShow: true,
			pos: 1
		},
		'STATDES': {
			isShow: true,
			pos: 2
		},
		'BUSINESSTYPE': {
			isShow: true,
			isShowTitle: true,
			pos: 3
		},
		'PHONE': {
			isShow: true,
			pos: 4,
			icon: 'call'
		},
		'EMAIL': {
			isShow: true,
			pos: 5,
			icon: 'mail'
		},
		'ADDRESS': {
			isShow: true,
			pos: 6,
			icon: 'pin'
		}
	}

  constructor(public navCtrl: NavController,
  						public navParams: NavParams,
  						private formService: FormService,
  						private messageHandler: MessageHandler,
  						private objToIterable: ObjToIterable) {
  }

  ionViewDidLoad() {
  	this.messageHandler.showTransLoading("","Loading data...");
    this.formService.startFormAndGetRows('CUSTOMERS', 'test').then((form: Form) => {
    	this.form = form;
    	this.rows = this.objToIterable.transform(form.rows);
    	this.messageHandler.hideLoading();
    })
  }

  ionViewWillUnload() {
  	this.formService.endForm(this.form);
  }

}
