import { Component ,OnInit } from '@angular/core';
import { SettingsPage } from "../settings/settings";
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage implements OnInit {
	quotesPage:any;
  	settingsPage:any;
  	constructor(){

	    this.settingsPage = SettingsPage;
	    console.log('Page Called');
  	}
  	ngOnInit(){
  		console.log('Hello World');
  	}
  	helloWorld(){
  		console.log('Hello World 2');
  	}
}
