import { Component,OnInit } from '@angular/core';
import { NavController, NavParams , AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(public navCtrl: NavController, public navParams: NavParams , private alertController:AlertController) {
  	
  }

  ngOnInit(){
  	this.quoteGroup = this.navParams.data;
  }

  onAddToFavourite(selectedQuote : Quote){
  	const alert = this.alertController.create({
  		title : "Add Quote",
  		subTitle : "Are you sure ?",
  		message : "Are you sure you want to add the quote?",
  		buttons:[
	  		{
	  			text: "Yes! Go Ahead",
	  			handler : ()=>{
	  				console.log('Ok');
	  			}
	  		},
	  		{
	  			text:"No, I Changed my mind.",
	  			role : "cancel",
	  			handler : ()=>{
	  				console.log('Cancelled..');
	  			}
	  		}
  		]
  	});
  	alert.present();
  }
}
