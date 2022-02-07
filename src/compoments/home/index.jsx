import React, { Component } from 'react';

class index extends Component {
    constructor(props){
        super(props)
       
        this.state = {
            isHot : true,
            arr:[1,2,3,4,5]
        }
        // this.demo = this.demo.bind(this)
    }
   
    render() {
        const {isHot,arr} = this.state
        return (
            <div >
                <h1 onClick={this.arr}>
                今天天气很 {isHot ? '炎热' : '凉爽' }
                {arr}
                </h1>
                
            </div>
        );
       
    }
    //写一个处理数组的函数
    arr=()=>{
        const {arr} = this.state

        let arrNew= arr.reduce((a,b)=>{
            return a+b
        })
       this.setState(
           {
            arr : arrNew

           }
       )
        console.log(arrNew);
    }

    demo = (...arr)=> {
       return arr.reduce( (a,b) =>{
        return a+b
       })
    }
    
}

export default index;
