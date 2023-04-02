import styles from "./index.module.css";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.upPart}>
          <Link href={"/#"}>معماری</Link>|<Link href={"/#"}>محصولات</Link>|
          <Link href={"/#"}>بلاگ</Link>|<Link href={"/#"}>کاتالوگ</Link>|
          <Link href={"/#"}>واژه نامه</Link>|<Link href={"/#"}>فضاها</Link>
        </div>
        <hr />
        <div className={styles.downPart}>
          <p> .تمامی حقوق این وب سایت متعلق به شرکت سفارش دهنده می‌باشد </p>
          <span>
            <p> طراحی سایت </p>
            <p> توسط شرکت سفارش گیرنده </p>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
