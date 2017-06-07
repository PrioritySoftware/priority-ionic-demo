import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormService, Form, Filter, Search, MessageHandler, ObjToIterable, ColumnsOptions, ItemOptions } from 'priority-ionic';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

	form: Form;
	rows = [];

	columnsOptions: ColumnsOptions = {
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
			isShow: true,
			pos: 5,
			title: 'Status'
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

	itemOptions: ItemOptions = {
		cssClass: (item) => {
			if(item['ORDSTATUSDES'])
				return item['ORDSTATUSDES'].toLowerCase().replace(' ','-');
			return '';
		},
		subforms: {
			'ORDERSTEXT': {
				title: 'Remarks'
			},
			'ORDERITEMS': {
				title: 'Items'
			}
		},
		// click: (item) => {console.log(item);}
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

}
