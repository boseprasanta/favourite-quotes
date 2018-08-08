import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface'; 
import { ModalController } from 'ionic-angular';
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings";

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage{
	quotes: Quote[];		
  	constructor(private quotesService:QuotesService,
                private modalController : ModalController,
                private settingService : SettingsService){
  	}

  	ionViewWillEnter(){
  		this.quotes = this.quotesService.getFavouriteQuotes();

  	}
  	onViewQuote(quote:Quote){
  		const modal = this.modalController.create(QuotePage,quote);
  		modal.present();
      modal.onDidDismiss((remove)=>{
          if(remove){
            //this.quotes = this.quotesService.getFavouriteQuotes();
            this.onRemoveFromFavourites(quote);            
          }
      });
  	}

    onRemoveFromFavourites(quote : Quote){
      this.quotesService.removeQuoteFromFavourites(quote);
      const position = this.quotes.findIndex((quoteEl : Quote)=>{
        return quoteEl.id == quote.id;
      });
      this.quotes.splice(position,1);
    }

    getBackground(){
      return this.settingService.isAltBackground()? 'primary' : 'danger';
    }

    isAltBackground(){
      return this.settingService.isAltBackground();
    }
}
