import React,{ useState } from 'react';
import './AddGood.less';
import { Form, Input, Button } from 'antd';
class AddGood extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productName: '',
            price: '',
            unit: '',
            url: '',
            disabled: false
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            disabled:true
        })
        let formData = {
            productName: this.state.productName,
            price: this.state.price,
            unit: this.state.unit,
            url: this.state.url,
        }
        var opts = {
            method:"POST", 
            body:JSON.stringify(formData),   
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
                },
        }
        const url = 'http://localhost:8080/product';
        const request = fetch(url,opts)
                    .then(res=>{res.json()})
                    .then(data=>{
                        this.setState({
                            disabled:false,
                        })
                    })
                    .catch(error=>console.log(error));
    }

    handleChangeName = (e) => {
        this.setState({
            productName: e.target.value
        })
    }
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    handleChangeUrl = (e) => {
        this.setState({
            url: e.target.value
        })
    }
    handleChangeUnit = (e) => {
        this.setState({
            unit: e.target.value
        })
    }

    
    render() {
        const FormItem = Form.Item;
        const buttonItemLayout = {
        wrapperCol: { span: 14, offset: 4 },
        };
        return <div className='addGood'>
            <div className='content'>
            <form>
                <h3>添加商品</h3>
          <FormItem>
            <label>名称：</label>
            <Input placeholder="名称" name='productName' onChange={this.handleChangeName} value={this.state.productName}/>
          </FormItem>
          <FormItem>
            <label>价格：</label>
            <Input placeholder="价格" name='price' onChange={this.handleChangePrice} value={this.state.price}/>
          </FormItem>
          <FormItem>
            <label>单位：</label>
            <Input placeholder="单位" name='unit' onChange={this.handleChangeUnit} value={this.state.unit}/>
          </FormItem>
          <FormItem>
            <label>图片：</label>
            <Input placeholder="URL" name='url' onChange={this.handleChangeUrl} value={this.state.url}/>
          </FormItem>
          <FormItem className='myButton'>
            <Button type="primary" onClick={this.handleSubmit} >提交</Button>
          </FormItem>
        </form>
        </div>
        </div>
    };

}

export default AddGood;