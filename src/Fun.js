
import React, { Component } from 'react'

export default class Fun extends Component {
    state={
        isHou:true ,
        userName:'',
        tag:0
    }
   componentDidMount(){
    document.documentElement.getElementsByClassName("Box")[0].scrollTop = 550;

}

componentDidUpdate(){

}
con = ()=>{
    const {Div}  = this.refs
    console.log(Div.scrollHeight);
    this.setState({
        tag : this.state.tag + 1
    })
}
    render() {
        return (
            <>
            {this.state.tag}
            <div className='Box' ref='Div' >
              <li> 例子1</li>
              <li> 例子2</li>
              <li> 例子3</li>
              <li> 例子4</li>
              <li> 例子5</li>
              <li> 例子6</li>
              <li> 例子7</li>
              <li> 例子8</li>
              <li> 例子9</li>
              <li> 例子10</li>
              <li> 例子11</li>
              <li> 例子4</li>
              <li> 例子5</li>
              <li> 例子6</li>
              <li> 例子7</li>
              <li> 例子8</li>
              <li> 例子9</li>
              <li> 例子10</li>
              <li> 例子11</li>
              <li> 例子2</li>
              <li> 例子3</li>
              <li> 例子4</li>
              <li> 例子5</li>
              <li> 例子6</li>
              <li> 例子7</li>
              <li> 例子8</li>
        </div>
        <button onClick={this.con}> 测试</button>
            </>
        
        )
    }
}

