import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quote-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote!: Quote;

  constructor() { }

  ngOnInit(): void {
  }

}