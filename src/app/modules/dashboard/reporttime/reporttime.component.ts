import { Component } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reporttime',
  templateUrl: './reporttime.component.html',
  styleUrls: ['./reporttime.component.scss']
})
export class ReporttimeComponent {

  chooseView = 'hour';
	modelTime: NgbDateStruct;

  // json data with: hour range like 00:00 - 00:30, The number of people in (total), The number of people out (total), Weather, Staying people
  reportTimeData = [
    {
      hourRange: '00:00 - 00:30',
      in: 5,
      out: 3,
      weather: 'Sunny',
      staying: 2
    },
    {
      hourRange: '00:30 - 01:00',
      in: 3,
      out: 2,
      weather: 'Sunny',
      staying: 1
    },
    {
      hourRange: '01:00 - 01:30',
      in: 2,
      out: 1,
      weather: 'Sunny',
      staying: 1
    },
    {
      hourRange: '01:30 - 02:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '02:00 - 02:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '02:30 - 03:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '03:00 - 03:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '03:30 - 04:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '04:00 - 04:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '04:30 - 05:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '05:00 - 05:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '05:30 - 06:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '06:00 - 06:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '06:30 - 07:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '07:00 - 07:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '07:30 - 08:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '08:00 - 08:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '08:30 - 09:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '09:00 - 09:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '09:30 - 10:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '10:00 - 10:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '10:30 - 11:00',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '11:00 - 11:30',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      hourRange: '11:30 - 12:00',
      in: 1,
      out:  1,
      weather: 'Sunny',
      staying: 0
    },
  ];

  // json data with: date, The number of people in (total), The number of people out (total), Weather, Staying people
  reportDateData = [
    {
      date: '2021-06-01',
      in: 5,
      out: 3,
      weather: 'Sunny',
      staying: 2
    },
    {
      date: '2021-06-02',
      in: 3,
      out: 2,
      weather: 'Sunny',
      staying: 1
    },
    {
      date: '2021-06-03',
      in: 2,
      out: 1,
      weather: 'Sunny',
      staying: 1
    },
    {
      date: '2021-06-04',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      date: '2021-06-05',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      date: '2021-06-06',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      date: '2021-06-07',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      date: '2021-06-08',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      date: '2021-06-09',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
    {
      date: '2021-06-10',
      in: 1,
      out: 1,
      weather: 'Sunny',
      staying: 0
    },
  ];
}
