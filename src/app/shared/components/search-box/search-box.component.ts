import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'ca-shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{
  @Input()
  public placeholder: string = '';

  @Input('initial-value')
  public initialValue: string = '';

  @Output("on-value")
  public onValue: EventEmitter<string> = new EventEmitter<string>();

  private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(750)
    )
    .subscribe(
      value => {
        this.onSearch(value);
      }
    )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.debouncer.unsubscribe();
  }

  onSearch( term: string): void {
    this.onValue.emit(term);
  }

  onKeyPress( searchTerm: string ): void {
    this.debouncer.next( searchTerm );

  }
}
