import styles from "./layout.module.css";
import Header from "../header/header";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default layout;
