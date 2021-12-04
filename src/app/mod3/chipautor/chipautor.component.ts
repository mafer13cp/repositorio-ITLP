import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Output, ViewChild, EventEmitter, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UsuarioLogService } from 'src/app/services/usuario-log.service';

/**
 * @title Chips Autocomplete
 */

@Component({
  selector: 'chipautor',
  templateUrl: './chipautor.component.html',
  styleUrls: ['./chipautor.component.css']
})
export class ChipautorComponent{
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = []; //Colección de los tags seleccionados o ingresados.
  //allFruits: string[] = [];  //Coleccion de todos los tags que se mostraran.
  @Output() public CAEvent = new EventEmitter();
  @ViewChild('autocomplete') fruitInput: ElementRef<HTMLInputElement>;
  @Input() autores:string[];

  constructor(private usuario:UsuarioLogService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.autores.slice())),
    );
   }

   ngEnviarAutores(){
    this.CAEvent.emit(this.fruits);
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

    return this.autores.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
}
