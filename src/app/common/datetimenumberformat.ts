import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import {Constants} from "../settings/contants";


@Pipe({
  name: 'dateTimeNumberFormat'
})
export class DateTimeNumberFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
    let dateConvert = new Date(value * 1000);
    return super.transform(dateConvert, Constants.DATE_TIME_FMT);
  }
}
