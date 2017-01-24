import React from 'react';
import ReactDOM from 'react-dom';


class Table extends React.Component {
	render() {
		let handleClick = ()=>{
			console.log("click");
		}
		
		return (
			<SubTable onChange={handleClick}>sssdffffss</SubTable>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<tr className="h"> 
        		<th>班级</th> 
		        <th>日期</th> 
		        <th>标题</th> 
   			</tr> 
		)
	}
}

class Cell extends React.Component {
	render () {
		return (
	<tr className="r"> 
        <td>一班</td> 
        <td>2012-5-10</td> 
        <td>标题1</td> 
    </tr> 
		)
	}
}

class SubTable extends React.Component {
	render() {
		return (
			<table className="b" > 
   			<Header></Header>
  			<Cell></Cell>	
  			<Hello />
			</table> 
			
		)
	}
}

class Hello extends React.Component {
	constructor(props){
		super(props);
	this.state = {
		 opacity: 1.0
	}
}
  componentDidMount () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  }

  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}

export default Table;