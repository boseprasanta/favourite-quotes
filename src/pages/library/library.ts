import { Component , OnInit } from '@angular/core';
import quotes from '../../data/quotes';
import { Quote } from '../../data/quote.interface';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
	quoteCollection:{ category:string , quotes:Quote[] , icon:string }[];
	//quoteCollection:{ category:string , quotes:{ id:string,person:string,text:string }[] , icon:string }[];
	ngOnInit(){
		this.quoteCollection = quotes;
	}
}
