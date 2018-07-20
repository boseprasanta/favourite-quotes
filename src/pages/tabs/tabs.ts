import { Component } from '@angular/core';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-tabs',
  template: `
  	<ion-tabs>
  		<ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab>
  		<ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
  	<ion-tabs>
  	`
})
export class TabsPage {
	favouritesPage = FavouritesPage;
	libraryPage = LibraryPage;
}
