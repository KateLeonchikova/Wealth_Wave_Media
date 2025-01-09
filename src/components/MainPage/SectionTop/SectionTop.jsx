import styles from "./SectionTop.module.css";
import mainImg from "../../../assets/image/18plus.png";

export const SectionTop = () => {
  return (
    <section className={styles.top}>
      <div className="container">
        <h1 className={styles.top__title}>Lorem ipsum dolor sit</h1>
        <img className={styles.top__img} src={mainImg} alt="18+" />
        <p className={styles.top__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui
          neque dolores maiores eligendi tempora unde eius quasi aliquid quos.
          Libero quis, quidem accusamus vero praesentium reprehenderit
          recusandae quisquam eaque.
        </p>
      </div>
    </section>
  );
};
