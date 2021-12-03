import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'chipTag',
  templateUrl: 'chipTag.component.html',
  styleUrls: ['chipTag.component.css'],
})
export class ChipTagComponent{
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = []; //Colección de los tags seleccionados o ingresados.
  //tags: string[] = [];  //Coleccion de todos los tags que se mostraran.

  @ViewChild('autocomplete') fruitInput: ElementRef<HTMLInputElement>;
  @Output() public CTEvent = new EventEmitter();
  @Input() tags:string[];

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.tags.slice())),
    );
  }

  ngEnviarTags(){
    this.CTEvent.emit(this.fruits);
   }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.tags.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
