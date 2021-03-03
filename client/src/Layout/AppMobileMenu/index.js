import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Hamburger from 'react-hamburgers';

import cx from 'classnames';

import {
    faEllipsisV,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    Button
} from 'reactstrap';



class AppMobileMenu extends React.Component {
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


        return (
            <Fragment>

                <div className="app-header__mobile-menu">
                    <div onClick={this.toggleMobileSidebar}>
                        <Hamburger
                            
                            type="elastic"
                            onClick={() => this.setState({activeMobile: !this.state.activeMobile})}
                        />
                    </div>
                </div>
                <div className="app-header__menu">
                    <span onClick={this.toggleMobileSmall}>
                        <Button size="sm"
                                className={cx("btn-icon btn-icon-only", {active: this.state.activeSecondaryMenuMobile})}
                                color="primary"
                                onClick={() => this.setState({activeSecondaryMenuMobile: !this.state.activeSecondaryMenuMobile})}>
                            <div className="btn-icon-wrapper"><FontAwesomeIcon icon={faEllipsisV}/></div>
                        </Button>
                    </span>
                </div>
            </Fragment>
        )
    }
}






export default connect()(AppMobileMenu);