import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

//Components 
import Homepage from './components/HomePage'
import Posts from './components/Posts';
import President from './components/President';
import CEO from './components/CEO';
import Founder from './components/Founder';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Homepage</Link></li> 
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>  
    
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/posts" component={Posts}/>
        </Switch>

        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/president" component={President}/>
        <Route path="/founder" component={Founder}/>
        <Route path="/ceo" component={CEO}/>
        
      </div>
    </Router>
  );
}

export default App;
