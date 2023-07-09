import { Component } from 'react';
import css from '../Styles.module.css';
 class Searchbar extends Component{
    state={
        isQuery:''
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.setState({isQuery: e.target.elements.searchQuery.value.trim()})
        e.target.reset();
      
        
    }
    onChange=(e)=>{
       this.setState({isQuery: e.target.value})
        
    }

    render(){
        return(
        
            <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.onSubmit}>
                <button type="submit" className={css["SearchForm-button"]} onClick={()=>this.props.handleSubmit(this.state.isQuery)}>
                <span className={css["SearchForm-button-label"]}>Search</span>
                </button>
    
                <input
                className={css["SearchForm-input"]}
                type="text"
                name="searchQuery"
                value={this.state.isQuery}
                onChange={this.onChange}
                placeholder="Search images and photos"
                />
            </form>
            </header>
            
        )
    }
 }
 export { Searchbar }
   

