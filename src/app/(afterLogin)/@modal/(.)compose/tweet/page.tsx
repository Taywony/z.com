"use client";

import { useRef, useState } from "react";
import style from "./modal.module.css";
import Tay from "../../../../../../public/tay.png";
import Image from "next/image";

export default function TweetModal() {
  const [text, setText] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);

  const onClose = () => {};
  const onClickButton = () => {};
  const handleInputValue = (e: any) => {
    setText(e.target.value);
  };

  const me = {
    id: "taewon2659",
    url: Tay,
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <button className={style.closeBtn} onClick={onClose}>
          <div className={style.closeBtnBox}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </div>
        </button>
        <form className={style.modalForm}>
          <div className={style.modalBody}>
            <div className={style.userImageBox}>
              <Image src={me.url} alt="myImage" className={style.meImage} />
            </div>
            <div className={style.postTextBox}>
              <textarea
                placeholder="What is happening?!"
                value={text}
                onChange={handleInputValue}
                className={style.postText}
                rows={3}
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <div className={style.imageUploadBox}>
              <button
                className={style.imageUploadButton}
                onClick={onClickButton}
              >
                <svg
                  width={24}
                  fill=" rgb(29, 155, 240)"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </button>
              <input
                type="file"
                className={style.imageUploadInput}
                ref={imageRef}
              />
            </div>
            <button className={style.postButton} disabled={!text}>
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
