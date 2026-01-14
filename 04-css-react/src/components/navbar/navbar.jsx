import styles from "../navbar/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="">LOGO</a>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
        </ul>

        <div className={styles.search}>
          <input type="text" placeholder="Search here"/>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
