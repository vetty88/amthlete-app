import React, {
    useEffect,
    useState,
    useParams
} from "react";
import ChartistGraph from "react-chartist";
// @material-ui/core components
import {
    makeStyles
} from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
import API from "../../utils/API";
import HorseFilter from "../../components/HorseFilter/HorseFilter.js";
import Heatmap from "../../components/Heatmap/Heatmap.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

const useStyles = makeStyles(styles);
const Chartist = require("chartist");
const delays = 80, durations = 500;
const delays2 = 80, durations2 = 500;

export default function CustomCompCharts() {
    const classes = useStyles();
  // Setting our component's initial state
  const [competitions, setCompetitions] = useState([]);

  // Load all competitions and store them with setCompetitions
  useEffect(() => {
    loadCompetitions()
    getCompetition()
  }, []);

  // Loads all competitions and sets them to competitions
  function loadCompetitions() {
    API.getCompetitions()
      .then(res => 
        setCompetitions(res.data)
      )
      .catch(err => console.log(err));
  };

  function getCompetition(id) {
    API.getCompetition(id)
    .then(res => 
      setCompetition(res.data)
    )
    .catch(err => console.log(err));
};

    const dailySalesChart = {
        data: {
            labels: [""],
            series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
        lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
        }),
        low: 0, high: 80, 
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }
    };

    const compsSubscriptionChart = {
        data: {
        labels: [""],
        series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
        axisX: {
        showGrid: false
        },
        low: 0, high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        },
        responsiveOptions: [["screen and (max-width: 640px)",
        {seriesBarDistance: 5, axisX: {labelInterpolationFnc: function(value) {return value[0];}}}
        ]],
        animation: { draw: function(data) {
        if (data.type === "bar") {data.element.animate({opacity: {
        begin: (data.index + 1) * delays2, dur: durations2,
        from: 0, to: 1, easing: "ease"
        }});}
        }}
    };

    const completedTasksChart = {
        data: {
        labels: [""],
        series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },
        options: {lineSmooth: Chartist.Interpolation.cardinal({tension: 0}),
        low: 0, high: 1000, chartPadding: {
        top: 0, right: 0, bottom: 0, left: 0}
        },
        animation: {
        draw: function(data) {
        if (data.type === "line" || data.type === "area") {
        data.element.animate({
        d: { begin: 600, dur: 700, from: data.path
        .clone()
        .scale(1, 0)
        .translate(0, data.chartRect.height())
        .stringify(),
        to: data.path.clone().stringify(), easing: Chartist.Svg.Easing.easeOutQuint
        }
        });
        } else if (data.type === "point") {
        data.element.animate({
        opacity: { begin: (data.index + 1) * delays, dur: durations, from: 0, to: 1,easing: "ease"}
        });
        }
        }
        }
    };
 
    return (


        // <div className="dashboardContainer">
      
        //     {this.state.competition ? 
        // <div>
        //     <h4>{this.state.competition.horse.horse_name} ({this.state.competition.score}) vs {this.state.competition._horse._horse_name} ({this.state.competition._score})</h4>
        //     <h5>Date: {this.state.competition.competition_date}</h5>
        // <div className="chartGrid">
        // <div class="bx--grid">
        // <div class="bx--row">
        //     {this.state.selectedhorses ?
        //     this.state.selectedhorses.map(horse => (
        // <div class="bx--col">
        //     <Heatmap 
        //     data={this.state.competitionData}
        //     horseName={horse.horse.name}
        //     horseDiscipline={horse.Discipline.name}
        //     />
        // </div>)) : <div /> 
        //     }
        // </div>
        // </div>
        // </div>
        // </div> : <div/>
        //     }      
        // </div>
        
        // <div>
            <GridContainer>
            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <Card chart>
            <CardHeader color="success">
                {competitions.map(competition => (
            <ChartistGraph key={competition.date} className="ct-chart" data={ dailySalesChart.data } type="Line" options={ dailySalesChart.options } listener={ dailySalesChart.animation } />
            ))}
            </CardHeader>
            <CardBody>
            <h4 className={ classes.cardTitle }> Daily Sales </h4>
            <p className={ classes.cardCategory }>
            <span className={ classes.successText }>
            < ArrowUpward className={ classes.upArrowCardCategory }/> 55% </span>{" "}
            increase in today sales. </p>
            </CardBody>
            <CardFooter chart>
                <div className={ classes.stats }>
                <AccessTime /> updated 4 minutes ago 
                </div>
            </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <Card chart>
            <CardHeader color="warning">
            <ChartistGraph className="ct-chart" data={ compsSubscriptionChart.data } type="Bar" options={ compsSubscriptionChart.options } responsiveOptions={ compsSubscriptionChart.responsiveOptions } listener={ compsSubscriptionChart.animation } />
            </CardHeader>
            <CardBody>
            <h4 className={ classes.cardTitle }> comp Subscriptions </h4>
            <p className={ classes.cardCategory }> Last Campaign Performance </p>
            </CardBody>
            <CardFooter chart>
                <div className={ classes.stats }>
                <AccessTime /> campaign sent 2 days ago 
                </div>
            </CardFooter>
            </Card>
            </GridItem>
            <GridItem xs={ 12 } sm={ 12 } md={ 4 }>
            <Card chart>
            <CardHeader color="danger">
            <ChartistGraph className="ct-chart" data={ completedTasksChart.data } type="Line" options={ completedTasksChart.options } listener={ completedTasksChart.animation } />
            </CardHeader>
            <CardBody>
            <h4 className={ classes.cardTitle }> Completed Tasks </h4>
            <p className={ classes.cardCategory }> Last Campaign Performance </p>
            </CardBody>
            <CardFooter chart>
                <div className={ classes.stats }>
                <AccessTime /> campaign sent 2 days ago 
                </div>
            </CardFooter>
            </Card>
            </GridItem>
            <GridItem>
            
            <h4 key={competition.id} className="title">{competitions && competitions[0] && competitions[0].competition ? competitions[0].competition.competition_name : ""}</h4>
            <h6 className="subTitle">date: {competitions && competitions[0] && competitions[0].date ? competitions[0].date.date_name : ""}</h6>
            </GridItem>
            </GridContainer>
    )
}

{/* <HorseFilter */}
            // competitions={competitions}
            // setCompetition={competitions.setCompetition}
            // horses={competitions.state.horses}
            // sethorses={competitions.sethorses}
            // />
