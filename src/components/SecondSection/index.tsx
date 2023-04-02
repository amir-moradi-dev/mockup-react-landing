import styles from "./index.module.css";
import Image from "next/image";
import LoremText from "@/components/LoremText";

function SecondSection() {
  return (
    <>
      <div className={styles.container}>
        <h3>لورم ایپسوم متن ساختگی</h3>
        <div className={styles.loremAndImageOne}>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"image"}
            width={"1000"}
            height={"1000"}
          />
          <LoremText
            containerStyle={styles.loremContainerOne}
            titleStyle={styles.loremTitleOne}
          />
        </div>
        <div className={styles.loremAndImageTwo}>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"image"}
            width={"1000"}
            height={"1000"}
          />
          <LoremText
            containerStyle={styles.loremContainerTwo}
            titleStyle={styles.loremTitleTwo}
          />
        </div>
        <div className={styles.loremAndImageThree}>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"image"}
            width={"1000"}
            height={"1000"}
          />
          <LoremText
            containerStyle={styles.loremContainerThree}
            titleStyle={styles.loremTitleThree}
          />
        </div>
        <div className={styles.loremAndImageFour}>
          <Image
            src={"/assets/images/1.jpg"}
            alt={"image"}
            width={"1000"}
            height={"1000"}
          />
          <LoremText
            containerStyle={styles.loremContainerFour}
            titleStyle={styles.loremTitleFour}
          />
        </div>
      </div>
    </>
  );
}

export default SecondSection;
