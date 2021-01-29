import logo from './logo.svg';

import School from './Myfirstreact';
import Login from './component/Login';
import Ref from'./component/Ref';
import Signup from './Signup';
import Axios from './component/Axios';
import{BrowserRouter,Route, Switch}from 'react-router-dom';
function App() { 
  return (
    
   <BrowserRouter>
   
      <Route exact path="/" component={Signup} />
      <Route exact path="/my-app" component={Axios}/>
     
   </BrowserRouter>

    
  );
}

export default App;
