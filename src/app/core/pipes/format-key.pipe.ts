import { Pipe, PipeTransform } from '@angular/core';
import { RegexPatterns } from '../constants';

@Pipe({
  name: 'formatKey',
})
export class FormatKeyPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const formattedValue = value.replace(RegexPatterns.Dot, ' ');
    return formattedValue.replace(RegexPatterns.CamelPascal, '$1 $2');
  }
}
