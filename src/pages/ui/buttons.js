import React from 'react'
import { Card, Button, Icon ,Radio } from 'antd';
import './ui.less'
const ButtonGroup = Button.Group;

export default class Buttons extends React.Component {
    state = {
        loading: true,
        size:'default',
    }
    handleClosing = () => {
        this.setState({
            loading: false
        })
    }
    handleValueChange =(e)=>{
        this.setState({
                size: e.target.value
            })
    }

    render() {
        return (
            <div>
                <Card title="Base Buttons" className="card-warp">
                    <Button type="primary">Click me </Button>
                    <Button>Click me</Button>
                    <Button type="dashed">Click me </Button>
                    <Button type="danger">Click me </Button>
                    <Button disabled>Click me </Button>
                </Card>
                <Card title="Icon Buttons" className="card-warp">
                    <Button icon='plus'>Create</Button>
                    <Button icon='edit'>Edit</Button>
                    <Button icon='delete'>Delete</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type="primary" icon='search'>Search</Button>
                    <Button type='primary' icon='download'>Download</Button>
                </Card>
                <Card title="Loading Buttons"className="card-warp" >
                    <Button type="primary" loading={this.state.loading}>Submit</Button>
                    <Button type="primary" shape='circle' loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>Click to load</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button shape='circle' loading={this.state.loading}></Button>
                    <Button type='primary' onClick={this.handleClosing}>close</Button>
                </Card>
                <Card title="Button Group" className="card-warp">
                    <ButtonGroup>
                        <Button type="primary" style={{marginRight:0}}>
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                        <Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title="Radio Group" className="card-warp">
                <Radio.Group value={this.state.size} onChange={this.handleValueChange}>
                    <Radio value='small' >small</Radio>
                    <Radio value='default'>default</Radio>
                    <Radio value='large'>large</Radio>
                </Radio.Group>
                <Button type='primary' size={this.state.size}>close</Button>
                <Button type='dashed' size={this.state.size}>close</Button>
                <Button type='danger' size={this.state.size}>close</Button>
                </Card>
            </div>
        )
    }
}