import { Component } from 'react'
import css from '../Styles.module.css'
class Modal extends Component{
componentWillUnmount()   {
    document.removeEventListener('keydown',this.props.handlerClose);
}
  render()  {
    const {id, listImg, handlerClose} = this.props;
    document.addEventListener('keydown',handlerClose);
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