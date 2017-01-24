import React from 'react';
import Table from './src/Table.jsx';
class App extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);//改变上下文 否则this指向null
		this.onIdChange = this.onIdChange.bind(this);
		this.onPwdChange = this.onPwdChange.bind(this);
		this.onCheckbox = this.onCheckbox.bind(this);
		
		this.state = {
			user_id:window.localStorage.getItem('record')?window.localStorage.getItem('user_id'):"",
			user_pwd:"",
			record:window.localStorage.getItem('record'),
			view:false
		};
	} 
	
	onSubmit() {
		if(this.state.record){
      		window.localStorage.setItem("record",true);
       		window.localStorage.setItem("user_id",this.refs.uid.value);  
       		this.state.view = true;
       		console.log(this.refs.uid.value);
		}         
  	}
	
	onIdChange(e) {		
		this.setState({user_id:e.target.value});  
		console.log(e.target.value)
	}
	
	onPwdChange(e) {
		this.setState({user_pwd:e.target.value});
	}
	
	onCheckbox(e){
		this.setState({record:e.target.checked});
	}
	
    render() {
    		return (
    			
            <div>
                <div className="t">用户登陆</div>    
               		<label>用户名</label>
               		<input type="text"
               				ref="uid"
               				name="user_id"
               				value={this.state.user_id}
               				onChange={this.onIdChange}
               		/><br />
               		<label>密码</label>
               		<input type="password"
               				name="user_pwd"
               				value={this.state.user_pwd||""}
               				onChange={this.onPwdChange}
               		/>
                <div>
                <button onClick={this.onSubmit} >登录</button>
                
            </div>
                	<input type="checkbox" 
                			checked={this.state.record}
                			onChange={this.onCheckbox}        				             			
                			/>记住密码
            </div>
       );
    }
}



export default App;