import css from '../Styles.module.css';
export  const ImageGalleryItem = ({urlImg}, title)=>{
    return(
        <li className={css.ImageGalleryItem}>
            <img className={css["ImageGalleryItem-image"]} src={urlImg} alt="GallerryPhoto" />
        </li>
    )
}