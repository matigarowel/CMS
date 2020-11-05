import { Component, OnInit } from '@angular/core';
import { TablesModel } from 'src/app/models/tables.model';
import { Element } from '../../enum/element.enum'

const form_template: TablesModel[] = [
  {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 1,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
       //element: Element.badge,
       value: 2,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 11,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 3,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 4,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 5,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 6,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 7,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 8,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 9,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 10,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
        //element: Element.badge,
       value: 12,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
       //element: Element.badge,
       value: 13,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
       //element: Element.badge,
       value: 14,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
 {
   data:[
     {
       field: 'date',
       prop: {
        element: Element.button,
       value: '2020/09/28',
       label:'Date',
       primary: true,
       }
     },
     {
       field: 'paycode',
       prop: {
       value: 'SL',
       label:'Pay Code',
       }
     },
     {
       field: 'amount',
       prop: {
       //element: Element.badge,
       value: 15,
       label:'Amount',
       }
     },
     {
       field: 'in',
       prop: {
       value: '07:00 AM',
       label:'In',
       }
     },
     {
       field: 'out',
       prop: {
       value: '04:45 PM',
       label:'Out',
       }
     },
     {
       field: 'sched',
       prop: {
       value: '07:00 AM - 04:45 PM',
       label:'Schedule',
       }
     },
     {
       field: 'daily',
       prop: {
       value: 8.0,
       label:'Daily',
       }
     },
     {
       field: 'period',
       prop: {
       value: 8.0,
       label:'Period',
       }
     },
     // {
     //   field: 'status',
     //   prop: {
     //   element: Element.button,
     //   value: 'Pending',
     //   label:'Status',
     //   }
     // },
   ]
 },
]


interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-timecard',
  templateUrl: './timecard.component.html',
  styleUrls: ['./timecard.component.scss']
})
export class TimecardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  options: Options[] = [
    {value: 'current', viewValue: 'Current Cut-off'},
    {value: 'previous', viewValue: 'Previous Cut-off'},
    {value: 'range', viewValue: 'Range Cut-off'}
  ];

  timecardDataSource: TablesModel[] = form_template
  pageSizeOptions: number[] = [15];

}
