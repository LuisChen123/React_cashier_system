import React, { Fragment, PureComponent } from 'react';
import './index.less';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import axios from 'axios'
import Footer from '../../components/footer'

class Setting extends PureComponent {
    state = {

    }
    render() {
        
        
        return (
            <Fragment>
                this is setting page
                {/* <Footer/> */}
            </Fragment>
        )
    }
}


const mapState =(state) =>{
    return{

    }
}

const mapDispatch =(dispatch) =>{
 return{
        
    }
}


export default connect(mapState, mapDispatch)(Setting)