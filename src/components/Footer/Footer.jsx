import styles from "./Footer.module.css";
import { SiteNav } from "../SiteNav/SiteNav";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__container}>
          <SiteNav />
          <p className={styles.footer__terms}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            non. Mollitia eos hic maiores error eaque quod, reprehenderit quis,
            voluptates saepe optio sed. Iste ratione numquam aut nobis
            recusandae alias.
          </p>
        </div>
      </div>
    </footer>
  );
};
