import React, { Component } from 'react'
import './index.css'

class Lift extends Component {
    state = {
        arr: [],
        fal: true,
        data: 0,
    }



    componentDidMount() {
        this.time1 = setInterval(() => {
            const { arr } = this.state
            const newArr = '日志信息' + (arr.length + 1)
            this.setState({
                arr: [...arr, newArr]
            })
        }, 500);


    }
    getSnapshotBeforeUpdate() {
        const { div } = this.refs

        return div.scrollHeight
    }


    componentDidUpdate(prePost, preState, Height) {
        const { div } = this.refs
        const { fal, a } = this.state


        if (fal) {

            div.scrollTop = div.scrollHeight;


        } else {
            console.log(div.clientHeight);
            div.scrollTop += div.scrollHeight - Height - 20

        }


    }
    componentWillUnmount() {
        clearInterval(this.time1)
    }

    DataUp = () => {


        const { div } = this.refs
        if (div.scrollTop + div.clientHeight < div.scrollHeight) {
            // console.log('非底部');
            this.setState({
                fal: false  

            })
        } else {
            // console.log('底部');
            this.setState({
                fal: true
            })

        }

    }

    render() {
        if (this.state.arr.length === 40) {
            clearInterval(this.time1)
        }

        const { arr } = this.state
        return (
            <div className='Box' ref="div" onScroll={this.DataUp}>

                {
                    arr.map((item, index) => {
                        return <li className="List" key={index}>{item}</li>
                    })
                }
            </div>
        )
    }
}

export default Lift;
