import React,{Component, Fragment} from "react";
import './App.css';
import Navbar from './Layout/navbar'; 
import Useritem from './Layout/useritem';
import Users from './Layout/users';
import axios from 'axios';
import Spinner from './Layout/spinner';
import Search from './Layout/search'
import { Alert } from './Layout/Alert.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './Pages/About'
import {Link} from 'react-router-dom'
import User from './Pages/User'

class App extends Component {
  state={
    users:[],
    loading:false,
    alert:null,
    user:{},
    repos:[]
  }
  //async componentDidMount()
  //{
    //this.setState({loading:true});
    //const res= await axios.get('https://api.github.com/users');
    //this.setState({users:res.data});
  //}
  searchUsers = async (text) => {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    this.setState({users:res.data.items})
    this.setState({loading:false})
  }
  setAlert=(message,type)=> {
    this.setState({alert:{message:message,type:type}})
    setTimeout(()=>this.setState({alert:null}),5000)
  }
  clearUsers =()=> {
    this.setState({users:[]})
  }
  getUser=async(username)=> {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}`)
    this.setState({user:res.data})
    this.setState({loading:false})
  }
  getUserRepos=async(username)=> {
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
    this.setState({repos:res.data})
    this.setState({loading:false})
  }
  render() {
    return (
      <Router>
      <div className='App'>
      <Navbar title=' Github Explorer' icon="fab fa-github"></Navbar>
      <Switch>
        <Route exact path='/'  render={props=>(
        <Fragment>
        <Alert alert={this.state.alert}/>
        <div className='container'>
        <Search 
        searchUsers={this.searchUsers}
        clearUsers={this.clearUsers}
        showClear={this.state.users.length>0?true:false}
        setAlert={this.setAlert}/>
        <Users users={this.state.users} loading={this.state.loading}></Users>
        </div>
        </Fragment>
        )}/>
        </Switch>
        </div>
        <Route exact path='/about' component={About}></Route>

        <Route exact path='/user/:login' render={props=>(
          <User {...props} getUser={this.getUser}
          getUserRepos={this.getUserRepos} repos={this.state.repos} user={this.state.user}></User>
        )}/>
        </Router>
    );
    }
  }

  export default App