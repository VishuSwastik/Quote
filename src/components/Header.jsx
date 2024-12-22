import styles from './Header.module.css';
 

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.uperLogo} >
            
            <p>GeekFood</p>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li>Home</li>
                    <li>Quote</li>
                    <li>Restaurants</li>
                    <li>Food</li>
                    <li>Contacts</li>
                </ul>
            </nav>
            <button className={styles.button}>Get Started</button>
        </header>
    );
};

export default Header;