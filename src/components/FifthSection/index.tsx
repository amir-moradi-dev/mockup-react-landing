import styles from "./index.module.css";

function FifthSection() {
  return (
    <>
      <div className={"p-4 my-5 bg-secondary"}>
        <div className={styles.image}>
          <h3 className={"text-warning text-lg-center bg-white"}>
            لورم ایپسوم متن ساختگی
          </h3>
          <p className={"bg-white"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
          <button className={"px-4"}>لورم ایپسوم</button>
        </div>
      </div>
    </>
  );
}

export default FifthSection;
