import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import * as go from 'src/assets/js/gojs/go';
import { CameraDetailComponent } from '../camera-detail/camera-detail.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  myDiagram: any;
  myDiagram2: any;
  public chartOption2s: any;
  private modalService = inject(NgbModal);
  chartInDay: any;

  chartBlockinDay: any;
  chartBlockinDay2: any;
  constructor() {

  }

  ngOnInit(): void {
    this.initChart();
    this.initDiagram();
  }
  ngAfterViewInit(): void {

  }

  initChart() {
    this.chartOptions = {
      series: [
        {
          name: "People counting",
          data: [44, 55, 41, 67, 22]
        }
      ],

      chart: {
        height: 260,
        width: '100%',
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Entrance A",
          "Entrance B",
          "Block A",
          "Block B",
          "WC A",
        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "People counting"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
        }
      }
    };


    this.chartOption2s = {
      series: [{
        name: "People (In)",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Same Date Last Year",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Same Day Last Year',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: '',
        align: 'left'
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
    };

    this.chartInDay = {
      series: [{
        name: "People (In)",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Same Date Last Year",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Same Day Last Year',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: '',
        align: 'left'
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ["2/2/24", "2/2/25", "2/2/26", "2/2/27", "2/2/28", "2/2/29", "2/2/30", "2/2/31", "2/2/32", "2/2/33", "2/2/34", "2/2/35"],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session"
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: '#f1f1f1',
      }
    };

    //

    this.chartBlockinDay = {
      series: [{
        name: 'L',
        data: [44, 55, 41, 67, 22, 43, 21, 20, 6, 8, 15, 10,
        ]
      },
      {
        name: 'R',
        data: [-13, -23, -20, -8, -13, -27, -33, -12, -13, -53, -32, -33,
        ]
      }
      ],
      chart: {
        type: 'bar',
        height: 440,
        stacked: true
      },
      colors: ['#008FFB', '#FF4560'],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: 'end', // 'around', 'end'
          borderRadiusWhenStacked: 'all', // 'all', 'last'
          horizontal: true,
          barHeight: '80%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },

      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        stepSize: 1,

      },

      title: {
        text: ''
      },
      xaxis: {
        categories: ["Block 1H", "Block 2H", "Block 3H", "Block 4H", "Block 5H", "Block 6H", "Block 7H", "Block 8H", "Block 9H", "Block 10H", "Block 11H", "Block 12H"],
        title: {
          text: 'People in out'
        },
      },
    };

    this.chartBlockinDay2 = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

  }


  initDiagram() {
    // Since 2.2 you can also author concise templates with method chaining instead of GraphObject.make
    // For details, see https://gojs.net/latest/intro/buildingObjects.html
    const $ = go.GraphObject.make;  // for conciseness in defining templates

    var INTERVAL = 2000;  // this constant parameter cannot be set later

    this.myDiagram =
      new go.Diagram("myDiagramDiv",
        {
          initialContentAlignment: go.Spot.TopLeft,
          isReadOnly: true,  // allow selection but not moving or copying or deleting
          scaleComputation: (d, newsc) => {
            // only allow scales that are a multiple of 0.1
            var oldsc = Math.round(d.scale * 10);
            var sc = oldsc + ((newsc * 10 > oldsc) ? 1 : -1);
            if (sc < 1) sc = 1;  // but disallow zero or negative!
            return sc / 10;
          },
          "toolManager.hoverDelay": 100  // how quickly tooltips are shown
        });

    // the background image, a floor plan
    this.myDiagram.add(
      $(go.Part,  // this Part is not bound to any model data
        {
          width: 2232, height: 2000,
          layerName: "Background", position: new go.Point(0, 0),
          selectable: false, pickable: false
        },
        $(go.Picture, "/assets/images/Hue_PPC_ZONE_SOECO_20240226-1.png")
      ));

    // the template for each kitten, for now just a colored circle
    this.myDiagram.nodeTemplate =
      $(go.Node,
        new go.Binding("location", "loc"),  // specified by data
        (INTERVAL > 20)  // don't animate if INTERVAL is <= 20 milliseconds
          ? new go.AnimationTrigger("position", { duration: INTERVAL, easing: go.Animation.EaseLinear })
          : {},
        { locationSpot: go.Spot.Center },   // at center of node
        $(go.Shape, "Circle",
          { width: 15, height: 15, strokeWidth: 3 },
          new go.Binding("fill", "color", makeFill),
          new go.Binding("stroke", "color", makeStroke)
        ),  // also specified by data
        { // this tooltip shows the name and picture of the kitten
          toolTip:
            $("ToolTip",
              $(go.Panel, "Vertical",
                $(go.Picture, { margin: 3 },
                  new go.Binding("source", "src", s => "images/" + s + ".png")),
                $(go.TextBlock, { margin: 3 },
                  new go.Binding("text", "key"))
              )
            )  // end Adornment
        }
      );

    // pretend there are four kittens
    let data = [];
    for (let i = 0; i < 30; i++) {
      // randome from 600 - 650
      data.push({ key: "people" + i, src: "100x100", loc: new go.Point(600 + Math.random() * 150, 600 + Math.random() * 150), color: 3 })
      // data.push({ key: "people" + i, src: "100x100", loc: new go.Point(650, 650), color: 2 })
    }
    // list 30 people with random from 1600 - 700
    for (let i = 0; i < 30; i++) {
      data.push({ key: "people" + i, src: "100x100", loc: new go.Point(1600 + Math.random() * 150, 600 + Math.random() * 150), color: 2 })
    }
    this.myDiagram.model.nodeDataArray = data;
    this.myDiagram.addDiagramListener("ObjectDoubleClicked",
      e => {
        var part = e.subject.part;
        // console.log(part.data);
        const modalRef = this.modalService.open(CameraDetailComponent, { size: 'lg' });
      });
    // start the simulation

    // generate some colors based on hue value
    function makeFill(number) {
      return HSVtoRGB(0.1 * number, 0.5, 0.7);
    }
    function makeStroke(number) {
      return HSVtoRGB(0.1 * number, 0.5, 0.5); // same color but darker (less V in HSV)
    }
    function HSVtoRGB(h, s, v) {
      var r, g, b, i, f, p, q, t;
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
      }
      return 'rgb(' +
        Math.floor(r * 255) + ',' +
        Math.floor(g * 255) + ',' +
        Math.floor(b * 255) + ')';
    }

    // zoom to fix
    this.myDiagram.commandHandler.zoomToFit();
    // fix scale to 0.2
    this.myDiagram.scale = 0;

  }

  initDiagram2() {
    // Since 2.2 you can also author concise templates with method chaining instead of GraphObject.make
    // For details, see https://gojs.net/latest/intro/buildingObjects.html
    const $ = go.GraphObject.make;  // for conciseness in defining templates

    var INTERVAL = 2000;  // this constant parameter cannot be set later

    this.myDiagram2 =
      new go.Diagram("myDiagramDiv2",
        {
          initialContentAlignment: go.Spot.TopLeft,
          isReadOnly: true,  // allow selection but not moving or copying or deleting
          scaleComputation: (d, newsc) => {
            // only allow scales that are a multiple of 0.1
            var oldsc = Math.round(d.scale * 10);
            var sc = oldsc + ((newsc * 10 > oldsc) ? 1 : -1);
            if (sc < 1) sc = 1;  // but disallow zero or negative!
            return sc / 10;
          },
          "toolManager.hoverDelay": 100  // how quickly tooltips are shown
        });

    // the background image, a floor plan
    this.myDiagram2.add(
      $(go.Part,  // this Part is not bound to any model data
        {
          width: 2232, height: 2000,
          layerName: "Background", position: new go.Point(0, 0),
          selectable: false, pickable: false
        },
        $(go.Picture, "/assets/images/Hue_PPC_ZONE_SOECO_20240226-2.png")
      ));

    // the template for each kitten, for now just a colored circle
    this.myDiagram2.nodeTemplate =
      $(go.Node,
        new go.Binding("location", "loc"),  // specified by data
        (INTERVAL > 20)  // don't animate if INTERVAL is <= 20 milliseconds
          ? new go.AnimationTrigger("position", { duration: INTERVAL, easing: go.Animation.EaseLinear })
          : {},
        { locationSpot: go.Spot.Center },   // at center of node
        $(go.Shape, "Circle",
          { width: 15, height: 15, strokeWidth: 3 },
          new go.Binding("fill", "color", makeFill),
          new go.Binding("stroke", "color", makeStroke)
        ),  // also specified by data
        { // this tooltip shows the name and picture of the kitten
          toolTip:
            $("ToolTip",
              $(go.Panel, "Vertical",
                $(go.Picture, { margin: 3 },
                  new go.Binding("source", "src", s => "images/" + s + ".png")),
                $(go.TextBlock, { margin: 3 },
                  new go.Binding("text", "key"))
              )
            )  // end Adornment
        }
      );

    // pretend there are four kittens
    let data = [];
    for (let i = 0; i < 30; i++) {
      // randome from 600 - 650
      data.push({ key: "people" + i, src: "100x100", loc: new go.Point(600 + Math.random() * 150, 600 + Math.random() * 150), color: 3 })
      // data.push({ key: "people" + i, src: "100x100", loc: new go.Point(650, 650), color: 2 })
    }
    // list 30 people with random from 1600 - 700
    for (let i = 0; i < 30; i++) {
      data.push({ key: "people" + i, src: "100x100", loc: new go.Point(1600 + Math.random() * 150, 600 + Math.random() * 150), color: 2 })
    }
    this.myDiagram2.model.nodeDataArray = data;
    this.myDiagram2.addDiagramListener("ObjectDoubleClicked",
      e => {
        var part = e.subject.part;
        // console.log(part.data);
        const modalRef = this.modalService.open(CameraDetailComponent, { size: 'lg' });
      });
    // start the simulation

    // generate some colors based on hue value
    function makeFill(number) {
      return HSVtoRGB(0.1 * number, 0.5, 0.7);
    }
    function makeStroke(number) {
      return HSVtoRGB(0.1 * number, 0.5, 0.5); // same color but darker (less V in HSV)
    }
    function HSVtoRGB(h, s, v) {
      var r, g, b, i, f, p, q, t;
      i = Math.floor(h * 6);
      f = h * 6 - i;
      p = v * (1 - s);
      q = v * (1 - f * s);
      t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
      }
      return 'rgb(' +
        Math.floor(r * 255) + ',' +
        Math.floor(g * 255) + ',' +
        Math.floor(b * 255) + ')';
    }

    // zoom to fix
    this.myDiagram2.commandHandler.zoomToFit();
    // fix scale to 0.2
    this.myDiagram2.scale = 0;

  }
}


