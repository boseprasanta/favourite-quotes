import { Component ,OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface'; 
import { ModalController } from 'ionic-angular';
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage{
	quotes: Quote[];		
  	constructor(private quotesService:QuotesService,private modalController : ModalController){
  	}

  	ionViewWillEnter(){
  		this.quotes = this.quotesService.getFavouriteQuotes();

  	}
  	onViewQuote(quote:Quote){
  		const modal = this.modalController.create(QuotePage,quote);
  		modal.present();
      modal.onDidDismiss((remove)=>{
          if(remove){
            this.quotesService.removeQuoteFromFavourites(quote);
            this.quotes = this.quotesService.getFavouriteQuotes();
          }
      });
  	}
}
