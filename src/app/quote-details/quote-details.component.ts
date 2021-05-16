import { Quote } from '../quotes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() mquote!: Quote;
  @Output() isDeleted = new EventEmitter<boolean>();
  iquotes: any;

  quoteDelete(read:boolean){
    this.isDeleted.emit(read);
  }

  
  // downvotes=0;
  // upvotes=0;
  upvote(){
   this.mquote.upvotes=this.mquote.upvotes+=1;
  }
  downvote(){
    this.mquote.downvotes=this.mquote.downvotes+=1;
  }
  
  constructor() { }

  ngOnInit() {
  }
}
