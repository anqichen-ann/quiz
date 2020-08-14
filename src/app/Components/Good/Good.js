import React from 'react';
import './Good.less';

class Good extends React.Component {
    constructor(props){
        super(props);
    }



    render() {
        let good = this.props.good;
        return <div className='good'>
                <img src={require('../../../../mockups/product_image_placeholder.png')}/>
                <p>{good.name}</p>
                <p>{good.price}</p>
        </div>
    };

}

export default Good;