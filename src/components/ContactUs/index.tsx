import styles from "./index.module.css";

function ContactUs() {
  return (
    <>
      <div
        className={
          "w-75 mx-auto d-flex flex-column justify-content-center align-items-center"
        }
      >
        <div className={"mb-3 "}>
          <h3>با ما تماس بگیرید</h3>
        </div>
        <div className={styles.desc}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={"btn-outline-secondary mx-3"}>تلفن</button>
          <button className={"btn-outline-warning mx-3"}>واتساپ</button>
          <button className={"btn-outline-secondary mx-3"}>ایمیل</button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
