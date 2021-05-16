import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  title: string = 'Inspirational Quotes';

  iquotes: Quote[] = [
    new Quote(
      0,
      'You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.',
      'HARPER LEE',
      'Josphine Ndanu',
      new Date(2021, 15, 5),
      0,
      0
    ),
    new Quote(
      0,
      'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.',
      'ERNEST HEMINGWAY',
      'Josphine Ndanu',
      new Date(2021, 15, 5),
      0,
      0
    ),
    new Quote(
      0,
      'I was never afraid of failure; for I would sooner fail than not be among the greatest.',
      'JOHN KEATS',
      'Josphine Ndanu',
      new Date(2021, 15, 5),
      0,
      0
    ),
    new Quote(
      0,
      'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.',
      'HENRY DAVID',
      'Josphine Ndanu',
      new Date(2021, 15, 5),
      0,
      0
    ),
  ];

  newQuote(quote: any) {
    quote.name = quote.name;
    quote.quote = quote.quote;
    quote.author = quote.author;
    quote.date = new Date(quote.date);
    this.iquotes.unshift(quote);
  }

  deleteQuote(isDeleted: any,index: any){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this ${this.iquotes[index].quote}?`)
      if(remove){
        this.iquotes.splice(index,1)
      }
    }

  }

  toggleDetails(index:any){
    this.iquotes[index].showDetails=!this.iquotes[index].showDetails
  }
  
  findMax() {
    return Math.max.apply(Math, this.iquotes.map((quote) => quote.upvotes));
  }
  constructor() {}

  ngOnInit() {}
}
