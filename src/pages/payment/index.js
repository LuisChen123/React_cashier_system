import React, { Fragment, PureComponent } from 'react';
import './index.less';
import { Modal, Button, Select, Upload, Icon, message, Radio, Input } from 'antd';
import { connect } from 'react-redux';
class Payment extends PureComponent {
    state = {
        loading: false,
        value: 1,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleChange(value) {
        console.log(`selected ${value}`);
    };
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    };
    handlePicChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { Option } = Select;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const imageUrl = this.state.imageUrl;
        return (
            <Fragment>
                <div className="pageWrap">
                    <div className="line">
                        <div className="leftBox"><span className="redMark">*</span>Card Type:</div>
                        <div className="RightBox" onClick={this.showModal}>Golden VIP Card</div>
                    </div>
                    <div className="line">
                        <div className="leftBox"><span className="redMark">*</span>Amount:</div>
                        <div className="RightBox">4800</div>
                    </div>
                    <div className="line">
                        <div className="leftBox leftPicBox">Upload Your Picture:</div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={this.beforeUpload}
                            onChange={this.handlePicChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                        </Upload>
                    </div>
                    <div className="line radio-line">
                        <label className="aLabel">Make a payment:</label>
                        <Radio.Group onChange={this.onChange} value={this.state.value} className="radioGroup">
                            <Radio style={radioStyle} value={1}>
                                WeChat Pay
                            </Radio>
                            <Radio style={radioStyle} value={2}>
                                AliPay
                            </Radio>
                            <Radio style={radioStyle} value={3}>
                                More...
                            {this.state.value === 3 ? <Input maxLength={10} style={{ width: 100, marginLeft: 10, border: 0,borderBottom:'1px solid #dcdcdc'}}  className="radioInput"/> : null}
                            </Radio>
                        </Radio.Group>
                    </div>
                    <div className="line">
                        <div className="leftBox">Card Number:</div>
                        <input className="line-input" maxLength={20} type='number' placeholder="Card Number"></input>
                    </div>
                    <div className="line">
                        <div className="leftBox">Client Name:</div>
                        <input className="line-input" maxLength={20} placeholder="Client Name"></input>
                    </div>
                    <div className="line">
                        <div className="leftBox">Phone Number:</div>
                        <input className="line-input" maxLength={20} type='number' placeholder="Phone Number"></input>
                    </div>
                    <div className="line">
                        <div className="leftBox">E-tao Account Number:</div>
                        <input className="line-input" maxLength={20} placeholder="E-tao Account"></input>
                    </div>
                    <div className="line">
                        <label className="aLabel centerLabel">click to add more imformation.</label>
                    </div>
                    <Button className="submitIt" type="primary">Submit Your Payment</Button>
                </div>
                <Modal
                    className="inputAmount"
                    title="Select Card type"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="line">
                        <div className="leftBox">Card Type:</div>
                        <div className="rightBox">
                            <Select defaultValue="Golden Vip Card" style={{ width: 200 }} onChange={this.handleChange}>
                                <Option value="Golden Vip Card">Golden Vip Card</Option>
                                <Option value="Golden V-Vip Card">Golden V-Vip Card</Option>
                                <Option value="Golden V-V-Vip Card">Golden V-V-Vip Card</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="line">
                        <div className="leftBox">Amount:</div>
                        <div className="rightBox">
                            <input className="line-input" style={{ width: 200 }}></input>
                        </div>
                    </div>
                </Modal>
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
export default connect(mapState, mapDispatch)(Payment)