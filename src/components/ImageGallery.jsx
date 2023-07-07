import { ImageGalleryItem } from "./ImageGalleryItem";
import css from '../Styles.module.css';
export const ImageGallery = ({listImg})=>{
    return(
        <ul className={css.ImageGallery}>
                {listImg.map((el)=>{
                    return <ImageGalleryItem key={el.id} urlImg={el.webformatURL}/>
                })}
        </ul>
    )
}