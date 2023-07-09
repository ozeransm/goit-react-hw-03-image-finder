import { Component } from 'react'
import css from '../Styles.module.css'
class Modal extends Component{
componentDidMount(){
  document.addEventListener('keydown',this.props.handlerClose);
}
componentWillUnmount()   {
    document.removeEventListener('keydown',this.props.handlerClose);
}
  render()  {
    const {id, listImg, handlerClose} = this.props;
    return(
        <div className={css.Overlay} onClick={handlerClose}>
            <div className={css.Modal}>
                <img src={listImg.filter((el)=>el.id===id)[0].largeImageURL} alt="LargeImage" />
           </div>
        </div>
    )
  }
}
export {Modal}