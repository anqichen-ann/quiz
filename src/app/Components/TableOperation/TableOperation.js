import React from 'react';



export default class TableOperation extends React.Component {
    handleClick = () => {
    this.props.handledelete(this.props.record.productName)
} 
render() {
    return <button onClick={this.handleClick} style={{color: 'red'}}>删除</button>
}
}


