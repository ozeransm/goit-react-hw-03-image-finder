import { Component } from "react";
import { getImage } from "./components/Api";
import { ImageGallery } from "./components/ImageGallery";
import css from './Styles.module.css';
class App extends Component {
  state={
    objImg: [],
    isLoading: false,
    error: null,
  }
  componentDidMount(){
    try{
      getImage('car', 1)
      .then(({data})=>{
        const objImg = data.hits.map((el)=>({id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL}))
        this.setState((prev)=>{
          return {objImg:[...prev.objImg,...objImg]};
        })
      });
    }catch(error){
      console.log(error);
    }
    
  }
  render() {
    return(
      <div className={css.App}>
        <ImageGallery listImg={this.state.objImg}/>
      </div>
    )
  }
}
export  {App}
