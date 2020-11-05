import { Component } from '@angular/core';
import { UsersService } from '../services/users.service'
import { PinsService } from '../services/pins.service'
import { FormsModel } from '../models/forms.model';
import { TablesModel } from '../models/tables.model';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ismobile: boolean = true;
  constructor(private usersService: UsersService, private pinsService: PinsService,public mediaObserver: MediaObserver) {
    mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.ismobile = true;  
      } else {
        this.ismobile = false;
      }
    }); 
  }

  options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454']
  };

  rowID(id){
    // console.log(id);
  }


  onSelect(data): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

//LineChart Config
  chartType = 'line';
  chartData = [{ 
    data: [100, 48, 40, 19, 86, 27, 90,100, 48, 40, 19, 86, 27, 9, 15,11,98,10,67,34,76,90,78,45 ], label: 'CPU' 
    },]
  chartLabels = new Array(24).join().split(',')
  chartOptions = {responsive: true, maintainAspectRatio: false}
  chartColors = [{
      backgroundColor: 'rgba(105, 240, 174,0.2)',
      borderColor: 'rgba(105, 240, 174,1)',
    },]
    chartLegend = true;
    chartPlugins = [];
    chartHieght = 270;




//PieChart Config
    pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function (tooltipItems, data) {
            return data.datasets[0].data[tooltipItems.index] + ' %';
          }
        }
      },
    };
  
    pieChartLabels = ['Local: C', 'Available'];
  
    pieChartData = [1, 5];
  
    pieChartType  = 'pie';
  
    pieChartLegend = true;
  
    pieChartPlugins = [];
  
    pieChartColors = [
      {
        backgroundColor: ['rgba(63, 81, 181,1)', 'rgba(255, 255, 255,0.2)'],
        borderColor: 'rgba(255, 255, 255,0.2)',
      },
    ];
    pieHieght = 240;


  //Table Config
  // tableDataSource: any[] = this.usersService.getUsers();
  // tableDataColumns: string[] =  ['id','name','email','active','date_created','date_change','created_by']; //Object.keys(this.tableDataSource).map(function (key) { return this.tableDataSource[key][name]; })
  // formTemplate: FormsModel[] = this.usersService.addUsers()

  
  pinsDataSource: TablesModel[] = this.pinsService.getPins();
  pinsAddTemplate: FormsModel[] = this.pinsService.addPins();
  pinsUpdateTemplate: FormsModel[] = this.pinsService.updatePins();
  
  usersDataSource: TablesModel[] = this.usersService.getUsers();
  usersAddTemplate: FormsModel[] = this.usersService.addUsers();
  usersUpdateTemplate: FormsModel[] = this.usersService.updateUsers();

}
