import React, {useState} from 'react';
import {Jumbotron, Image, Container, Button, Spinner} from 'react-bootstrap'
import '../App.css';
import Axios from 'axios';
import { connect } from "react-redux";

import { addHatedGif, incrementCurrGifIndex } from "../redux/actions/actions";

function SelectionPage(props) {

    const [gifs, setGifs] = useState([]);
    // const [gifIndex, setGifIndex] = useState(0);
    
    Axios.get("http://api.giphy.com/v1/gifs/trending?api_key=M3erJ2EvHLhoSNjZQFOuUa5w9CQDXRhB&limit=30")
    .then(res => {
        const data = res.data;
        setGifs(data.data)
    })
    let currGif = gifs.length? gifs[props.currGifIndex] : null

    const handleHateButton = () => {
        if (currGif) {
            props.addHatedGif(currGif)
            incrementGifIndex()
        }
    }
    const hundleDontCareButton = () => {
        incrementGifIndex()

    }
    function incrementGifIndex() {
        if (props.currGifIndex < gifs.length) {
            props.incrementCurrGifIndex()
        }
        else {
            alert("that was the final gif") 
        }

    }
    const hatedGifs = props.hatedGifs.map(gif  =>
        <>
            <Image src={gif.images.downsized.url}/>
            <h3> {gif.title.split("GIF")[0]}</h3>
        </>
    )

        
  return (
    <div className="App">
     <Jumbotron fluid>
         <span>
         <h1>Match Made In Hell</h1>
         <Image style={{width:"300px"}} src="https://media.giphy.com/media/1SAmkSqxjO8PLW0Tk7/giphy.gif"/>
         </span>
     </Jumbotron>
     <Container>
         {gifs.length && currGif ?
         (<><Image src={currGif.images.downsized.url}/>
         <h3> {currGif.title.split("GIF")[0]}</h3> </>) :
         (<div>
         <Spinner animation="grow" /> </div>)}
         <Button onClick={hundleDontCareButton} className="App-button" pill>Don't care</Button>
         <Button onClick={handleHateButton} className="App-button" pill variant="danger">Hate</Button>
         <Button href={"/hated-gifs"} className="App-button" pill variant="secondary">Hated Gifs View</Button>
     </Container>
     <Container>
         {hatedGifs.length? hatedGifs: <h1> No Hated Gifs</h1>}
     </Container>
    </div>
  );
}
const mapStateToProps = state => {
    console.log(state)
    const { hatedGifs, currGifIndex } = state
    return { hatedGifs, currGifIndex };
  };
export default connect(
    mapStateToProps,
    { addHatedGif, incrementCurrGifIndex }
  )(SelectionPage);

// export default SelectionPage;
