import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormService, Form, Filter, MessageHandler, ObjToIterable } from 'priority-ionic';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {

  	form: Form;
	rows = [];

	columnsOptions = {
		'PARTDES': {
			isShow: true,
			pos: 1
		},
		'FAMILYDES': {
			isShow: true,
			pos: 3
		},
		'EXTFILENAME': {
			thumbnail: true
		},
		'BASEPLPRICE': {
			isShow: true,
			pos: 4,
			concat: 'BASEPLCODE'
		}
	}

	filter: Filter = {
		or: 1,
		ignorecase: 1,
		QueryValues: [{
			field: 'FAMILYNAME',
			fromval: '0*',
			toval: '',
			op: '<>',
			sort: 0,
			isdesc: 0
		}]
	}

	sortColumn = 'PARTDES';

    constructor(public navCtrl: NavController,
			  public navParams: NavParams,
			  private formService: FormService,
			  private messageHandler: MessageHandler,
			  private objToIterable: ObjToIterable) {
  }

  ionViewDidLoad() {
  	this.messageHandler.showTransLoading("","Loading data...");
    this.formService.startFormAndGetRows('LOGPART', 'usdemo', this.filter , 1).then((form: Form) => {
    	this.form = form;
    	this.rows = this.objToIterable.transform(form.rows);
    	this.messageHandler.hideLoading();
    })
  }

  ionViewWillUnload() {
  	this.formService.endForm(this.form);
  }

}
