import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-iqoutes-form',
  templateUrl: './iqoutes-form.component.html',
  styleUrls: ['./iqoutes-form.component.css']
})
export class IqoutesFormComponent implements OnInit {

  newQuote = new Quote(0, '','','', new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>()

  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', '', new Date(), 0, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
