type PropsType = {
  containerStyle?: string;
  titleStyle?: string;
  descStyle?: string;
};
function LoremText({
  containerStyle = "",
  titleStyle = "",
  descStyle = "",
}: PropsType) {
  return (
    <>
      <div className={containerStyle}>
        <h3 className={titleStyle}>لورم ایپسوم</h3>
        <p className={descStyle}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
        </p>
      </div>
    </>
  );
}

export default LoremText;
