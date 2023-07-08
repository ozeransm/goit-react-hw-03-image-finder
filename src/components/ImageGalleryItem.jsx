import css from '../Styles.module.css';
export  const ImageGalleryItem = ({urlImg, id, handlerOpenImg})=>{
    return(
        <li className={css.ImageGalleryItem}>
            <img className={css["ImageGalleryItem-image"]} src={urlImg} alt="GallerryPhoto" onClick={()=>handlerOpenImg(id)}/>
        </li>
    )
}