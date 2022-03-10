import styles from "./header.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const header = () => {
  //open the sideNav menu
  let openNav = () => {
    document.getElementById("sideNav").style.width = "250px";
  };
  //close the sideNav menu
  function closeNav() {
    document.getElementById("sideNav").style.width = "0";
  }
  return (
    <nav>
      <Link href="/">
        <a className={styles.logo}>MVCTB</a>
      </Link>
      <GiHamburgerMenu className={styles.menuIcon} onClick={() => openNav()} />
      <div id="sideNav" className={styles.sideNav}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
          &times;
        </a>
        <Link href="/about" className={styles.sideNavLink}>
          <a>About</a>
        </Link>
        <Link href="/contact" className={styles.sideNavLink}>
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default header;
