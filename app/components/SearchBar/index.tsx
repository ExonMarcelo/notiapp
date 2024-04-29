import Icons from "@/app/utils/icons";
import styles from "./index.module.css"

export default function SearchBar(){
    const { IconSearch } = Icons
    return(
        <div className={`flex items-center ${styles.searchBar}`}>
            <div>
                {IconSearch}
            </div>
            <input type="text" name="searchQuery" placeholder="Busca una publicación"/>
        </div>
    )
}