import React from 'react';
import './Good.less';
import {imgUrl} from '../../Constants/imgURL'

class Good extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            disabled: false,
            number: 0
        }
    }
    BASE_URL = '../../../../mockups/';

    getUrl = () =>  '../../../../mockups/' + this.props.good.url + '.jpg';

    handleClick = (event) => {
        this.setState({
            disabled:true,
            number: this.state.number+1
        })
        let data = {
            productName: this.props.good.productName,
            number: 1
        }
        var opts = {
            method:"POST", 
            body:JSON.stringify(data),   
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
                },
        }
        const url = 'http://localhost:8080/Order';
        const request = fetch(url,opts)
                    .then(res=> {
                        res.json()
                        this.setState({
                            disabled:false,
                        })
                    })

    }
    
    render() {
        let {good} = this.props
        return <div className='good'>
                <img src={imgUrl[good.url-1]}/>
                <p className='name'>{good.productName}</p>
                <p className='price'>  单价：{good.price}元/{good.unit}</p>
                {this.state.number>0? <span className='number'>{this.state.number}</span> : ''}
                <button onClick={this.handleClick} disabled={this.state.disabled}>+</button>
        </div>
    };

}

export default Good;