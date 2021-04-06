import React from "react";
import { ComboBox, MultiSelect } from "carbon-components-react";
import API from "../../utils/API";

export default class FilterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            competition: null,
            horses: []
        }

        this.setCompetition = this.setCompetition.bind(this);
    }

    setCompetition = (competition) => {
        this.props.setCompetition(competition.selectedItem)
        this.setState({
            competition: competition.selectedItem
        });
    }

    setHorses = (horses) => {
        this.props.setHorses(horses.selectedItems)
        this.setState({
            horses: horses.selectedItem
        });
    }

    render() {
        return (
            <div className="filterForm">
                <ComboBox
                    id="CompetitionSelector"
                    title="Competition:"
                    titleText="Competition"
                    helperText="Select a competition"
                    light
                    items={this.props.competitions}
                    itemToString={item => (item ? `Placing: ${item.placing}) Penalties: ${item.penalties}` : "")}
                    onChange={this.setCompetition}
                />
                <MultiSelect.Filterable
                    id="HorseSelector"
                    title="Horses"
                    titleText="Horses:"
                    helperText="Select horses to compare"
                    light
                    disabled={(!this.state.competition && !this.props.horses) || this.props.horses.length === 0}
                    items={this.props.horses}
                    itemToString={item => (item && item.horse ? item.horse.name : "")}
                    onChange={this.setHorses}
                />
            </div>
        );
    }
}