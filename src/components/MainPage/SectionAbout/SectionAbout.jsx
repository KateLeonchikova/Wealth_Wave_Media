import styles from "./SectionAbout.module.css";
import aboutImg from "../../../assets/image/about.png";

export const SectionAbout = () => {
  return (
    <section className={styles.about}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.about__picture}>
          <div className={styles.about__picture_wrapper}>
            <img
              className={styles.about__img}
              src={aboutImg}
              alt="some image"
            />
          </div>
        </div>
        <div className={styles.about__wrapper}>
          <h2 className={styles.about__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className={styles.about__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            mollitia impedit quia maiores, quidem animi in hic iure non ullam!
            Esse perferendis placeat soluta odio sequi deserunt quod nisi
            ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Error assumenda voluptatibus quasi vel!
          </p>
        </div>
      </div>
    </section>
  );
};
