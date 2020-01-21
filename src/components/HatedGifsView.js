import React from 'react';
import {Image, Container, Button, Spinner} from 'react-bootstrap'
import '../App.css';
import { connect } from "react-redux";

function HatedGifsView(props) {
    const hatedGifs = props.hatedGifs.map(gif  =>
        <>
            <Image src={gif.images.downsized.url}/>
            <h3> {gif.title.split("GIF")[0]}</h3>
        </>
    )

  return (
     <Container>
         {hatedGifs.length? hatedGifs: <h1> No Hated Gifs</h1>}
     </Container>
    );
}

const mapStateToProps = state => {
    const { hatedGifs } = state

    return hatedGifs;
  };
export default connect(
    mapStateToProps
  )(HatedGifsView);

// export default HatedGifsView;
