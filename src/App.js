import { Component } from "react";
import { getImage } from "./components/Loader";


class App extends Component {
  state={
    objImg:[],
    
  }
  componentDidMount(){
    try{
      getImage('forest')
      .then(({data})=>{
        const objImg = data.hits.map((el)=>{
          return {id: el.id, webformatURL: el.webformatURL, largeImageURL: el.largeImageURL}
        })
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
      <>
      jhgjhghjbgkbgjbh
      </>
    )
  }
}
export  {App}
