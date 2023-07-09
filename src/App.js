import { Component } from "react";
import { nanoid } from 'nanoid'
import { getImage } from "./components/Api";
import { ImageGallery } from "./components/ImageGallery";
import { createPortal } from 'react-dom';
import css from './Styles.module.css';
import { Modal } from "./components/Modal";
import { Loader } from "./components/Loader";
import { Searchbar } from "./components/Searchbar";
import { LoadMore } from "./components/Button";
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');

class App extends Component {
  state={
    objImg: [],
    isLoading: false,
    isModalOpen: 0,
    isQuery: '',
    error: null,
    page: 1,
    totalPage: 0
  }
  
  componentDidUpdate(prevProps, prevState){
    if(this.state.isQuery && prevState.isQuery!==this.state.isQuery){
    this.setState({isLoading: true});
    setTimeout(()=>{
    
    try{
      getImage(this.state.isQuery, 1)
      .then(({data})=>{
        const objImg = data.hits.map((el)=>({id: nanoid(), webformatURL: el.webformatURL, largeImageURL: el.largeImageURL}));
        this.setState({objImg, totalPage: data.totalHits, isLoading: false, page: 1});
      });
    }catch(error){
      console.log(error);
      this.setState({error});
    }
    
  },1000);
  }
  }

  handlerOpenImg=(id)=>{
    this.setState({isModalOpen: id})
  }
  handlerClose=(e)=>{
    if (e.target.nodeName==='DIV' || e.code==='Escape'){
      this.setState({isModalOpen: 0})
    }
  }
  handleSubmit=(query)=>{
    this.setState({isQuery: query})
    
  }

  LoadMore=(e)=>{
    e.preventDefault();
    e.target.setAttribute('disabled','');
    this.setState((prev)=>{return {page: prev.page+1}});
    this.setState({isLoading: true});
    setTimeout(()=>{
    try{
      getImage(this.state.isQuery, this.state.page)
      .then(({data})=>{
        const objImg = data.hits.map((el)=>({id: nanoid(), webformatURL: el.webformatURL, largeImageURL: el.largeImageURL}));
        this.setState((prev)=>{return {objImg: [...prev.objImg,...objImg], isLoading: false}});
      });
    }catch(error){
      console.log(error);
      this.setState({error});
    }finally{
      e.target.removeAttribute('disabled','');
    }
  },1000);
  }
  render() {
    return(
      <>
        {this.state.isLoading && createPortal(<Loader/>, spinner)}
        {this.state.isModalOpen!==0  && createPortal(<Modal listImg={this.state.objImg} id={this.state.isModalOpen} handlerClose={this.handlerClose}/>, modal)}
        <div className={css.App}>
          <Searchbar listImg={this.state.objImg} handlerOpenImg={this.handlerOpenImg} handleSubmit={this.handleSubmit}/>
          <ImageGallery listImg={this.state.objImg} handlerOpenImg={this.handlerOpenImg}/>
          {this.state.objImg.length!==0 && (this.state.page * 12 <= this.state.totalPage) && <LoadMore LoadMore={this.LoadMore}/>}
        </div>
      </>
    )
  }
}
export  {App}
