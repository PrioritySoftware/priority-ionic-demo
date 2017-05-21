import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormService, Form, Filter, MessageHandler, ObjToIterable } from 'priority-ionic';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

	form: Form;
	rows = [];

	columnsOptions = {
		'ORDNAME': {
			isShow: true,
			pos: 1
		},
		'CURDATE': {
			isShow: true,
			pos: 2
		},
		'CDES': {
			isShow: true,
			pos: 4,
		},
		'ORDSTATUSDES': {
			isShowTitle: true,
			isShow: true,
			pos: 5,
		},
		'DISPRICE': {
			isShow: true,
			pos: 6,
			concat: 'CODE'
		}
	}

	filter: Filter = {
		or: 0,
		ignorecase: 1,
		QueryValues: [{
			field: 'DOERNAME',
			fromval: 'apidemo',
			toval: '',
			op: '=',
			sort: 0,
			isdesc: 0
		}]
	}

	itemOptions = {
		itemClass: (item) => {
			switch (item['ORDSTATUSDES']) {
				case "Draft":
					return 'draft';
				case "Confirmed":
					return 'confirmed';
				case "In Progress":
					return 'in-progress';
				case "Completed":
					return 'completed';
				case "Paid":
					return 'paid';
				case "Canceled":
					return 'canceled';
				default:
					return "";
			}
		},
		subforms: ['ORDERITEMS','ORDERSTEXT']
	}

  	constructor(public navCtrl: NavController,
			public navParams: NavParams,
			private formService: FormService,
			private messageHandler: MessageHandler,
			private objToIterable: ObjToIterable) {
    }

    ionViewDidLoad() {
  		this.messageHandler.showTransLoading("","Loading data...");
    	this.formService.startFormAndGetRows('ORDERS', 'usdemo', this.filter).then((form: Form) => {
	    	this.form = form;
	    	this.rows = this.objToIterable.transform(form.rows);
	    	this.messageHandler.hideLoading();
	    })
    }

    itemSelect = (item) => {
    	this.formService.openSearchOrChoose(this.form,'ORDSTATUSDES')
    }

}
