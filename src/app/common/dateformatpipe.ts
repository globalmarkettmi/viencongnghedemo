import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Constants} from "../settings/contants";

@Pipe({
    name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, args?: any): any {
        return super.transform(value, Constants.DATE_FMT);
    }
}
