import { Component } from '@angular/core';

import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  favouritesPage = FavouritesPage;
  libraryPage = LibraryPage;

  constructor() {

  }
}
