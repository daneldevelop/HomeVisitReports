import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'hebrewBool'})

export class HebrewBool implements PipeTransform {
  transform(value: any): string {
    if(value === true) return "כן" 
    return "לא"
  }
}