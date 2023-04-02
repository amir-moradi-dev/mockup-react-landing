import styles from "./index.module.css";

function ThirdSection() {
  return (
    <>
      <div className={styles.container}>
        <h3>لورم ایپسوم متن ساختگی</h3>
        <div className={styles.video}>
          <p className={styles.videoDesc}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className={styles.playIconContainer}>
            <div className={styles.playIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdSection;
