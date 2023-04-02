import styles from "./index.module.css";
import LoremText from "@/components/LoremText";
import Image from "next/image";

function SixthSection() {
  return (
    <>
      <h3 className={"text-lg-center my-5"}>لورم ایپسوم متن ساختگی</h3>
      <div className={styles.container}>
        <div className={styles.rowContainer}>
          <Image
            className={styles.image}
            src={"/assets/images/1.jpg"}
            width={800}
            height={800}
            alt={"image"}
          />
          <LoremText
            containerStyle={styles.loremContainer + " " + styles.loremTextRight}
            titleStyle={styles.loremTitle}
            descStyle={styles.loremText}
          />
        </div>
        <div className={styles.rowContainer}>
          <Image
            className={styles.image}
            src={"/assets/images/1.jpg"}
            width={800}
            height={800}
            alt={"image"}
          />
          <LoremText
            containerStyle={styles.loremContainer + " " + styles.loremTextLeft}
            titleStyle={styles.loremTitle}
            descStyle={styles.loremText}
          />
        </div>
        <div className={styles.rowContainer}>
          <Image
            className={styles.image}
            src={"/assets/images/1.jpg"}
            width={800}
            height={800}
            alt={"image"}
          />
          <LoremText
            containerStyle={styles.loremContainer + " " + styles.loremTextRight}
            titleStyle={styles.loremTitle}
            descStyle={styles.loremText}
          />
        </div>
      </div>
    </>
  );
}

export default SixthSection;
