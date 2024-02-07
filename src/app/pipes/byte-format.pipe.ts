import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byteFormat'
})
export class ByteFormatPipe implements PipeTransform {
  transform(value: number, isPerSecond: boolean): string {
    if (value === null || isNaN(value) || value < 0) {
      return '';
    }
    var returnString = ''
    if (value < 1024) {
      returnString = value + ' B';
    } else if (value < 1048576) {
      returnString =(value / 1024).toFixed(2) + ' KB';
    } else if (value < 1073741824) {
      returnString = (value / 1048576).toFixed(2) + ' MB';
    } else {
      returnString = (value / 1073741824).toFixed(2) + ' GB';
    }
    if (isPerSecond) {
        returnString = returnString + "/s";
    }
    return returnString;
  }
}

