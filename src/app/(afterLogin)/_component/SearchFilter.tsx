"use client";

import Link from "next/link";
import style from "./searchFilter.module.css";
import { usePathname } from "next/navigation";

const SearchFileter = () => {
  const pathname = usePathname();
  const Click = () => {
    console.log("click");
  };

  if (pathname !== "/search") return null;
  return (
    <div className={style.container}>
      <div className={style.titleSection}>
        <div className={style.titleBox}>
          <h2 className={style.titleText}>Search filters</h2>
        </div>
      </div>
      <div className={style.radioSection}>
        <div className={style.radioBox}>
          <div className={style.radioGroup}>
            <div className={style.radioZone}>
              <h3 className={style.radioTitle}>People</h3>
              <label htmlFor="off" className={style.radioLabel} onClick={Click}>
                <div className={style.labelInnerBox}>
                  <span className={style.radioText}>From anyone</span>
                  <div className={style.innerRadioZone}>
                    <div className={style.innerHoverBoxChecked}>
                      <div className={style.innerIconBoxChecked}>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className={style.radioIcon}
                        >
                          <g>
                            <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path>
                          </g>
                        </svg>
                        <input
                          type="radio"
                          name="people"
                          id="off"
                          value="off"
                          defaultChecked
                          className={style.radioInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </label>
              <label htmlFor="on" className={style.radioLabel} onClick={Click}>
                <div className={style.labelInnerBox}>
                  <span className={style.radioText}>People you follow</span>
                  <div className={style.innerRadioZone}>
                    <div className={style.innerHoverBoxUnChecked}>
                      <div className={style.innerIconBoxUnChecked}>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className={style.radioIcon}
                          display="none"
                        >
                          <g>
                            <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path>
                          </g>
                        </svg>
                        <input
                          type="radio"
                          name="people"
                          id="on"
                          value="on"
                          className={style.radioInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className={style.radioZone}>
              <h3 className={style.radioTitle}>Location</h3>
              <label htmlFor="off" className={style.radioLabel} onClick={Click}>
                <div className={style.labelInnerBox}>
                  <span className={style.radioText}>Anywhere</span>
                  <div className={style.innerRadioZone}>
                    <div className={style.innerHoverBoxChecked}>
                      <div className={style.innerIconBoxChecked}>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className={style.radioIcon}
                        >
                          <g>
                            <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path>
                          </g>
                        </svg>
                        <input
                          type="radio"
                          name="location"
                          id="off"
                          value="off"
                          defaultChecked
                          className={style.radioInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </label>
              <label htmlFor="on" className={style.radioLabel} onClick={Click}>
                <div className={style.labelInnerBox}>
                  <span className={style.radioText}>Near you</span>
                  <div className={style.innerRadioZone}>
                    <div className={style.innerHoverBoxUnChecked}>
                      <div className={style.innerIconBoxUnChecked}>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className={style.radioIcon}
                          display="none"
                        >
                          <g>
                            <path d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"></path>
                          </g>
                        </svg>
                        <input
                          type="radio"
                          name="location"
                          id="on"
                          value="on"
                          className={style.radioInput}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className={style.advanedBox}>
          <Link href="/search-advanced" className={style.advancedLink}>
            <span className={style.advancedTitle}>Advanced search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchFileter;
