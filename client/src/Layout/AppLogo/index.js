import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Hamburger from 'react-hamburgers';

import AppMobileMenu from '../AppMobileMenu';



class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false
        };

    }


    state = {
        openLeft: false,
        openRight: false,
        relativeWidth: false,
        width: 280,
        noTouchOpen: false,
        noTouchClose: false,
    };

    render() {
        let {
            enableClosedSidebar,
        } = this.props;

        const {
        } = this.state;

        return (
            <Fragment>
                <div className="app-header__logo">
                    <div className="logo-src"/>
                    <div className="header__pane ml-auto">
                        <div onClick={this.toggleEnableClosedSidebar}>
                            <Hamburger
                                active={enableClosedSidebar}
                                type="elastic"
                                onClick={() => this.setState({active: !this.state.active})}
                            />
                        </div>
                    </div>
                </div>
                <AppMobileMenu/>
            </Fragment>
        )
    }
}






export default connect()(HeaderLogo);