import React, { Fragment, PureComponent } from 'react';
import './index.less';
import { connect } from 'react-redux';
import Footer from '../../components/footer'

class Container extends PureComponent {
    state = {

    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    {this.props.children}
                    <Footer {...this.props}/>
                </div>
            </Fragment>
        )
    }
}

const mapState = (state) => {
    return {

    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}


export default connect(mapState, mapDispatch)(Container)