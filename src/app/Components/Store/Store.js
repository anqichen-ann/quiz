import React from 'react';
import './Store.less';
import Good from '../Good/Good';

class Store extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            flag: false
        }
    }

    componentDidMount(){
        const url = 'http://localhost:8080/product';
        const request = fetch(url,{method:'get'})
                    .then(res=>res.json())
                    .then(data=>{
                        this.setState({
                            list:data,
                            flag: true
                        })
                    })
                    .catch(error=>console.log(error));
    
    }


    render() {
        return <div className='store'>
            {
                this.state.list.map((item, index) => 
                <Good good={item} key={index}></Good>
                )
            }
        </div>
    };

}

export default Store;