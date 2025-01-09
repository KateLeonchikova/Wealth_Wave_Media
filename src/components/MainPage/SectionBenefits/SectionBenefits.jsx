import styles from "./SectionBenefits.module.css";

export const SectionBenefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <h2 className={styles.benefits__title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet,
          voluptatibus exercitationem repellendus eum perferendis, deleniti est
          obcaecati itaque eaque porro!
        </h2>
        <ul className={styles.benefits__list}>
          <li className={styles.benefits__item}>
            <div className={styles.benefits__card}>
              <h3 className={styles.benefits__subtitle}>Some benefits 1</h3>
              <p className={styles.benefits__descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                sed, perferendis porro earum amet iusto tenetur eligendi, omnis
                reprehenderit, itaque nam explicabo commodi? Explicabo cumque
                ipsam quos officiis, necessitatibus quisquam!
              </p>
            </div>
          </li>
          <li className={styles.benefits__item}>
            <div className={styles.benefits__card}>
              <h3 className={styles.benefits__subtitle}>Some benefits 2</h3>
              <p className={styles.benefits__descr}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                repudiandae dolore, dignissimos, assumenda perspiciatis qui
                voluptates expedita minima ipsa quod odit neque saepe voluptatem
                nisi voluptatibus, iure dolorem inventore! Mollitia?
              </p>
            </div>
          </li>
          <li className={styles.benefits__item}>
            <div className={styles.benefits__card}>
              <h3 className={styles.benefits__subtitle}>Some benefits 3</h3>
              <p className={styles.benefits__descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                modi sunt aliquid, nisi laborum ipsam rem sint! Officiis, rem
                cum ducimus tempora voluptatem quasi explicabo dolor sunt quo,
                possimus veniam!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
