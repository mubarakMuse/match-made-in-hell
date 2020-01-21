import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import SelectionPage from './components/SelectionPage';
import HatedGifsView from './components/HatedGifsView';

function App() {

//   const [hatedGifs, setHatedGifs] = useState([]);
//   const addToHatedGifs = (hatedGif) => {
//     setHatedGifs(hatedGifs.concat([hatedGif]))
// }
  return (
    <React.Fragment>
    <Router>
     <Switch>
       <Route exact default path= "/" component={SelectionPage}/>
       <Route exact default path= "/hated-gifs" component={HatedGifsView}/>

       {/* <Route exact default path= "/hate-gifs"  render={(props) => <HatedGifsView {...props} hatedGifs={hatedGifs} />}/> */}
     </Switch>
   </Router>
</React.Fragment>
  );
}

export default App;
