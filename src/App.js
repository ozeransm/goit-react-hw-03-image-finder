import React from "react";
import { Component } from "react";
import { getImage } from "./components/Api";
import { ImageGallery } from "./components/ImageGallery";
import PuffLoader from "react-spinners/ClipLoader";
import { createPortal } from 'react-dom';
import css from './Styles.module.css';
const spinner = document.getElementById('spinner');
const override: React.CSSProperties = {
  display: "block",
  margin: "40vh auto",
    
};
class App extends Component {
  state={
    objImg: [],
    isLoading: false,
    error: null,
  }
  componentDidMount(){
    this.setState({isLoading: true})
    // setTimeout(()=>{

    
    try{
      getImage('car', 1)
      .then(({data})=>{
        const objImg = data.hits.map((el)=>({id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL}))
        this.setState((prev)=>{
          return {objImg:[...objImg]};
          // ...prev.objImg,
        })
      });
    }catch(error){
      console.log(error);
    }
  // },3000);
  }
  componentDidUpdate(prevProps, prevState){
    
    if(prevState.isLoading)this.setState({isLoading: false});
  }
  render() {
    return(
      <>
      {this.state.isLoading && createPortal(<PuffLoader cssOverride={override} color="#3641d6" size={70}  speedMultiplier={1}/>, spinner)}
      
      <div className={css.App}>

        <ImageGallery listImg={this.state.objImg}/>
      </div>
      </>
    )
  }
}
export  {App}
