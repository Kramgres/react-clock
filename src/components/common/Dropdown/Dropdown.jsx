import styles from "./Dropdown.module.css";
import {useEffect, useState} from "react";

const Dropdown = ({items, onSelect}) => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [title, setTitle] = useState(items[0]);
    const dropdownItems = items.map((item, key) => ({id: key, title: item, selected: false}))

    useEffect(() => {
        if (!title) {
            setTitle(items[0]);
        }
    }, [title, items]);

    const toggleList = () => {
        setIsListOpen(!isListOpen);
    }

    const selectItem = (item) => {
        onSelect(item.title);
        setTitle(item.title)
        toggleList();
    }

    return (
        <div className={styles.dropdown + (isListOpen ? ' ' + styles.dropdownOpen : "")}>
            <button type="button"
                    className={styles.dropdownHeader}
                    onClick={toggleList}>
                {title}
            </button>

            {isListOpen && (
                <div role="list" className={styles.dropdownList}>
                    {dropdownItems.map((item) => (
                        <button type="button"
                                className={styles.dropdownItem}
                                key={item.id}
                                onClick={() => selectItem(item)}>
                            {item.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;
