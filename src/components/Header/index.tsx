import styles from "./index.module.css";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav flex-row-reverse">
              <Link className="nav-item nav-link active" href="#">
                صفحه اصلی <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" href="#">
                پروژه ها
              </Link>
              <Link className="nav-item nav-link" href="#">
                محصولات
              </Link>
              <Link className="nav-item nav-link" href="#">
                گواهینامه ها
              </Link>
              <Link className="nav-item nav-link" href="#">
                تماس با ما
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
