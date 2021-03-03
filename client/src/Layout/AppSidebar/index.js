import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import Nav from '../AppNav/VerticalNavWrapper';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PerfectScrollbar from 'react-perfect-scrollbar';
import HeaderLogo from '../AppLogo';

class AppSidebar extends Component {

    state = {};



    render() {
        let {
            backgroundColor,
            enableBackgroundImage,
            enableSidebarShadow,
            backgroundImage,
            backgroundImageOpacity,
        } = this.props;

        return (
            <Fragment>
                <div className="sidebar-mobile-overlay" onClick={this.toggleMobileSidebar}/>
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-sidebar", backgroundColor, {'sidebar-shadow': enableSidebarShadow})}
                    transitionName="SidebarAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <HeaderLogo/>
                    <PerfectScrollbar>
                        <div className="app-sidebar__inner">
                            <Nav/>
                        </div>
                    </PerfectScrollbar>
                    <div
                        className={cx("app-sidebar-bg", backgroundImageOpacity)}
                        style={{
                            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
                        }}>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}





export default connect()(AppSidebar);