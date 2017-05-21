import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormService, Form, Filter, MessageHandler, ObjToIterable } from 'priority-ionic';

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
		'PHONE': {
			isShow: true,
			pos: 4,
			icon: 'ios-call'
		},
		'EMAIL': {
			isShow: true,
			pos: 5,
			icon: 'mail'
		},
		'ADDRESS': {
			isShow: true,
			pos: 6,
			icon: 'pin',
			concat: 'STATE'
		}
	}

	filter: Filter = {
		or: 0,
		ignorecase: 1,
		QueryValues: [{
			field: 'OWNERLOGIN',
			fromval: 'apidemo',
			toval: '',
			op: '=',
			sort: 0,
			isdesc: 0
		}]
	}

	itemOptions = {
		itemClass: (item) => {
			switch (item['STATDES']) {
				case "Active":
					return 'active';
				case "Potential":
					return 'potential';
				case "Warned":
					return 'warned';
				case "Restricted":
					return 'restricted';
				case "Inactive":
					return 'inactive';
				default:
					return "";
			}
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
    	this.formService.startFormAndGetRows('CUSTOMERS', 'usdemo', this.filter).then((form: Form) => {
	    	this.form = form;
	    	this.rows = this.objToIterable.transform(form.rows);
	    	this.messageHandler.hideLoading();
	    })
    }

  ionViewWillUnload() {
  	this.formService.endForm(this.form);
  }

}
