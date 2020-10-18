import React from 'react';
import './Order.less';
import {Table} from 'antd'
import TableOperation from '../TableOperation/TableOperation'

class Order extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderList: []
        }
    }

    getOrders = () => {
        const url = 'http://localhost:8080/Order';
        const request = fetch(url,{method:'get'})
                    .then(res=>res.json())
                    .then(data=>{
                        this.setState({
                            orderList:data,
                        })
                    })
                    .catch(error=>console.log(error));
    }
        
    componentDidMount(){
        this.getOrders()
    }

    handledelete = (productName) => {
        const url = `http://localhost:8080/Order/${productName}`;
        const request = fetch(url,{method:'delete'})
                    .then(res=>{res.json()})
                    .then(()=>{
                        this.getOrders()
                    })
    }

    render() {
        const columns = [
            {
              title: '名字',
              dataIndex: 'productName',
              key: 'productName',
            },
            {
              title: '单价',
              dataIndex: 'price',
              key: 'price',
            },
            {
              title: '数量',
              dataIndex: 'number',
              key: 'number',
            },
            {
                title: '单位',
                dataIndex: 'unit',
                key: 'unit',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => 
                <TableOperation handledelete={this.handledelete} record={record} />
            }
          ];
        return <div className='order'>
            {
                this.state.orderList.length > 0 ?
                <Table className='myTable'
                dataSource={this.state.orderList} 
                columns={columns} pagination={false}
                /> :
                <h3>暂无订单，返回<a href='/'>商城页面</a>继续购买</h3> 
            }
        </div>
    };

}

export default Order;