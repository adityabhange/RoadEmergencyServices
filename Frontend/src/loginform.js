import React, { Component } from 'react';
import AdminLoginService from './AdminLoginService';

class loginform extends Component {

  constructor(props){
    super(props);

    this.state = {
      id:'',
      name:'',
      address:'',
      email:'',
      dob:'',
      mobile:'',
      password:'',
      errormsg:'',
      successmsg:''
    }
  }

  componentDidMount(){


  }

  authenticateLogin = (e) => {
    e.preventDefault();
    if(this.state.email !== ''){
      if(this.state.password !== ''){
        let user = {email: this.state.email, password: this.state.password}
        
        AdminLoginService.getUserAuthenticated(user).then(res =>{
          this.setState({
            visibleMessage: true,
            colorMessage: "success",
            message: "Data fetch successfully"
          });
          if(res.data.email === user.email && res.data.password === user.password){
            this.setState({errormsg: "success"});
            this.props.history.push('/Admin');
            
           

          
          
        }
        });
      }
      else{this.setState({errormsg: "please insert password"});}
    }
    else{this.setState({errormsg: "please insert email"});}
   
  }

  cancel(){
    this.props.history.push('/');
  }

  onChange = e =>{
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div className='text-center' >
      <form >
        <div>
          <p className='text-danger'>{this.state.errormsg}</p>
        </div>
        <div className='col-md-4 offset-md-4 border rounded p-2 mt-2 shadow' >
          <h5 className='alert alert-primary' > User Login</h5>
          <table className='table table-borderless'>
            <tr>
            <td>Enter User email</td>
              <td><input type='email' name='email' minLength='7' maxLength='30' value={this.state.email} onChange={this.onChange} required /></td>
            </tr>
            <tr>
              <td>Enter Password</td>
              <td><input type='password' name='password' minLength="8" maxLength="20" value={this.state.password} onChange={this.onChange} required/></td>
            </tr>
            <tr>
              <td colSpan={12} ><button type='button'  onClick={this.authenticateLogin} >Login</button></td>
            </tr>
          </table>
        </div>
      </form>
      <br/>
      <button className="btn btn-secondary" onClick={this.cancel.bind(this)}> back </button>
    </div>
    );
  }
}

export default loginform;