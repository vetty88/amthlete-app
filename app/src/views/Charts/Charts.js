import React from "react";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CardIcon from "../../components/Card/CardIcon.js";
import Icon from "@material-ui/core/Icon";

export default function CustomCompCharts() {
 
    return (

        <GridContainer>
            <GridItem>
                <Card>
                <CardHeader><Icon> addchart </Icon> Competitions by Horse </CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=bdab3054-5ba1-47e5-b482-45e5e859c862&theme=light"></iframe>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem> 

            <GridItem>
                <Card>
                    <CardHeader><Icon> addchart </Icon> Placings by Discipline </CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=d2f1e98d-9b13-4e08-9ce8-d01c7a8869f0&theme=light"></iframe> 
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem>

            <GridItem>
                <Card>
                    <CardHeader><Icon> addchart </Icon> Calendar of Events </CardHeader>
                    <CardBody>
                        <div id="chart">
                        <iframe styles="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-ifizl/embed/charts?id=ef7be6d4-9043-4ed2-90c4-ac8576aae118&theme=light"></iframe>
                        </div>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </GridItem> 
        
        </GridContainer>
    )
}