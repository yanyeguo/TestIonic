import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-ctdetails',
    templateUrl: 'ctdetails.html'
})
export class CtdetailsPage {
    item1;
    constructor(params: NavParams) {
        this.item1 = params.data.item;
    }


}