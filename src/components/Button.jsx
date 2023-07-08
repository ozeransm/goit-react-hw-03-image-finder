import css from '../Styles.module.css';
export const LoadMore = ({LoadMore})=>{
    return(
        <button className={css.Button} type="button" onClick={LoadMore}>Load more</button>
    )
}