import React, { Fragment, PureComponent } from 'react';
import './index.less';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Record extends PureComponent {
    state = {

    }
    componentDidMount(){
        this.props.callRecord()
    }
    render() {
        return (
            <Fragment>
               <div className="recordWrap">
               {
                   this.props.form ?
                   this.props.form.map(item=>{
                       return(
                        <div className="item" key={item.id}>
                            <div className="itemTitle">
                                <p className="date">{item.date}</p>
                                <p className="check-type">{item.check_type}</p>
                            </div>
                            <div className="itemBody">
                                <div className="line">
                                    <div className="leftBox">Card Type</div>
                                    <div className="rightBox">{item.card_type}</div>
                                </div>
                                <div className="line">
                                    <div className="leftBox">Amount</div>
                                    <div className="rightBox"><span className="redSign">$</span>{item.amount}</div>
                                </div>
                                <div className="line">
                                    <div className="leftBox">Payment Type</div>
                                    <div className="rightBox">{item.payment_type}</div>
                                </div>
                                <div className="line">
                                    <div className="leftBox">Comment</div>
                                    <div className="rightBox commentBox">{item.comment}</div>
                                </div>
                            </div>
                        </div> 
                       )  
                   })
                   :
                  <div className="noData">sorry,there is no data avliable, please connect with our customer service. </div>
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