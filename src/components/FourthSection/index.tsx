import styles from "./index.module.css";
import React, { Fragment } from "react";

function FourthSection() {
  return (
    <>
      <div className={"container mt-4"}>
        <h3 className={"text-center my-5"}>لورم ایپسوم متن ساختگی</h3>

        <div className={"row"}>
          <ResponsiveDivs count={6} />
        </div>
      </div>
    </>
  );
}

function ResponsiveDivs({ count = 1 }: { count: number }) {
  return (
    <Fragment>
      {Array.from({ length: count }, (v, i) => (
        <div className={"col-sm-12 mb-3 col-md-6 col-lg-4"} key={i}>
          <div className={styles.image}>
            <h3 className={"text-white position-absolute"}>لورم اپیسوم</h3>
            <div className={"container d-md-none d-lg-none d-xl-none"}>
              <div className={"row"}>
                <p
                  className={
                    "col-5 mb-3 mx-3 bg-warning text-white text-center"
                  }
                >
                  لورم
                </p>
                <p
                  className={
                    "col-5 mb-3 mx-3 bg-warning text-white text-center"
                  }
                >
                  لورم
                </p>
                <p
                  className={
                    "col-5 mb-3 mx-3 bg-warning text-white text-center"
                  }
                >
                  لورم
                </p>
                <p
                  className={
                    "col-5 mb-3 mx-3 bg-warning text-white text-center"
                  }
                >
                  لورم
                </p>
                <p
                  className={
                    "col-5 mb-3 mx-3 bg-warning text-white text-center"
                  }
                >
                  لورم
                </p>
                <p
                  className={
                    "col-5 mb-3 mx-3 bg-warning text-white text-center"
                  }
                >
                  لورم
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
export default FourthSection;
