import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderLogo from '../AppLogo';

import SearchBox from './Components/SearchBox';
import UserBox from './Components/UserBox';

class Header extends React.Component {
    render() {
        let {
            headerBackgroundColor,
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-header", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <HeaderLogo/>

                    <div className={cx(
                        "app-header__content",
                        
                    )}>
                        <div className="app-header-left">
                            <SearchBox/>
                        </div>
                        <div className="app-header-right">
                            <UserBox/>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}





export default connect()(Header);