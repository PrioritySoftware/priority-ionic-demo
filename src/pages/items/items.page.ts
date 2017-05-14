import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormService, Form, MessageHandler, ObjToIterable } from 'priority-ionic';

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
		'PARTNAME': {
			isShow: true,
			isShowTitle: true,
			pos: 2
		},
		'FAMILYDES': {
			isShow: true,
			isShowTitle: true,
			pos: 3
		},
		'EXTFILENAME': {
			thumbnail: true
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
    this.formService.startFormAndGetRows('LOGPART', 'test').then((form: Form) => {
    	this.form = form;
    	this.rows = this.objToIterable.transform(form.rows);
    	this.messageHandler.hideLoading();
    })
  }

  ionViewWillUnload() {
  	this.formService.endForm(this.form);
  }

}
