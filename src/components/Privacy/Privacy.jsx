import styles from "./Privacy.module.css";

export const Privacy = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.privacy__container}>
          <h2 className={styles.privacy__title}>политика конфиденциальности</h2>
          <div className={styles.privacy__content}>
            <h3 className={styles.privacy__subtitle}>Сбор личной информации</h3>
            <p className={styles.privacy__text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              expedita, soluta suscipit alias doloribus odit doloremque beatae
              eligendi? Minus repellendus odit vel voluptates quam aspernatur
              nihil ipsum, non odio unde! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam minima, architecto, ea repudiandae
              delectus ullam totam placeat voluptates illum excepturi vel
              dignissimos quas nam inventore quaerat veritatis laborum veniam
              iusto!
            </p>
          </div>
          <div className={styles.privacy__content}>
            <h3 className={styles.privacy__subtitle}>
              Использование личной информации
            </h3>
            <p className={styles.privacy__text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              maiores facilis eius atque quam adipisci mollitia maxime ipsa a.
              Blanditiis aspernatur cum vel sapiente excepturi aperiam
              consectetur tempore quibusdam porro? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Exercitationem laborum porro vitae
              eius quod saepe iste autem velit nostrum optio accusantium veniam
              officia sapiente, qui ut excepturi assumenda laudantium libero.
            </p>
          </div>
          <div className={styles.privacy__content}>
            <h3 className={styles.privacy__subtitle}>
              Раскрытие личной информации
            </h3>
            <p className={styles.privacy__text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              pariatur velit fuga quas placeat minima illo, delectus soluta
              magnam, laboriosam tempora inventore veritatis nesciunt
              consequuntur, in cumque fugiat hic. Distinctio. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Laudantium, molestias
              reprehenderit, deleniti, vitae mollitia obcaecati suscipit fugit
              tempore maiores voluptatibus quae. Atque rem magnam, hic cumque
              quisquam eos neque autem!
            </p>
          </div>
          <div className={styles.privacy__content}>
            <h3 className={styles.privacy__subtitle}>
              Хранение и защита вашей личной информации
            </h3>
            <p className={styles.privacy__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              molestiae quam quae in deserunt facere quas cumque quo omnis
              veritatis. Eaque laudantium odit corporis velit dolorum illo
              adipisci blanditiis atque.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
