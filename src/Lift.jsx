import React, { Component } from 'react'
import './index.css'

class Lift extends Component {
    state = {
        arr: [],
        arr2: [],
        controller: true,
        controller2: false,

    }



    componentDidMount() {
        // 模拟信息更新
        this.time1 = setInterval(() => {
            const { arr ,arr2} = this.state
            const newArr = '日志信息' + (arr.length + 1)
            this.setState({
                
                arr: [...arr, newArr],
                arr2: [newArr,...arr2]
            })
        }, 500);
    }
    getSnapshotBeforeUpdate() {
        const { div2 } = this.refs

        return div2.scrollHeight
    }


    componentDidUpdate(prePost, preState, Height) {
        const { div ,div2} = this.refs
        const { controller, controller2 } = this.state
        //案例一默认： 滚轮为底部
        if (controller) div.scrollTop = div.scrollHeight;

        if(controller2)  div2.scrollTop  += div2.scrollHeight - Height
        

       
        if (this.state.arr.length === 40) {
            clearInterval(this.time1)
        }
    }
    componentWillUnmount() {
        clearInterval(this.time1)
    }

    // 滚轮事件 
    DataUp = () => {
        const {div,div2} = this.refs
        console.log();
    this.setState({
        
        controller: div.scrollTop + div.clientHeight < div.scrollHeight ? false : true ,
        controller2 : div2.scrollTop == 0 ?false : true 
    })
    }

    render() {
       

        const { arr ,arr2} = this.state
        return (
            <>
                <h1>案例一</h1>
                <div className='Box' ref="div" onScroll={this.DataUp}>
                    {
                        arr.map((item, index) => {
                            return <li className="List" key={index}>{item}</li>
                        })
                    }
                </div>
                <h1>案例二</h1>
                <div className='Box' ref="div2" onScroll={this.DataUp}>
                    {
                        arr2.map((item, index) => {
                            return <li className="List" key={index}>{item}</li>
                        })
                    }
                </div>
            </>

        )
    }
}

export default Lift;
