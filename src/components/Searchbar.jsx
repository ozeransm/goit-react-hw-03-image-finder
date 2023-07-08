import css from '../Styles.module.css';
 export const Searchbar = ({handleSubmit})=>{
    return(
        
        <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css["SearchForm-button"]} >
            <span className={css["SearchForm-button-label"]}>Search</span>
            </button>

            <input
            className={css["SearchForm-input"]}
            type="text"
            name="searchQuery"
            placeholder="Search images and photos"
            />
        </form>
        </header>
        
    )

}
