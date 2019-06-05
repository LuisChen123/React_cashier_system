import React, { Fragment, PureComponent } from 'react';
import './index.less';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Record extends PureComponent {
    state = {

    }
    componentDidMount(){
        this.props.callRecord()
        console.log(this.props.form)
    }
    check =()=>{
        console.log(this.props.form)
    }
    render() {
        return (
            <Fragment>
               <div className="recordWrap">
               {
                   this.props.form ?
                   this.props.form.map(item=>{
                       return(
                        <div className="item">
                            <div className="itemTitle">
                                <p className="date">2019年06月05日</p>
                                <p className="check-type">自定义查询</p>
                            </div>
                            <div className="itemBody">
                                <div className="line">
                                    <div className="leftBox"></div>
                                    <div className="rightBox"></div>
                                </div>
                            </div>
                        </div> 
                       )
                  
                   })
                   :
                  <div>sorry,there is no data avliable, please connect with our customer service. </div>
               }
               </div>
            </Fragment>
        )
    }
}

const mapState =(state) =>({
    form:state.getIn(['record','form']),
    
})

const mapDispatch =(dispatch) =>({
    callRecord(){
        dispatch(actionCreators.getData())
    }
})
export default connect(mapState, mapDispatch)(Record)