"use client";

import Image from "next/image";
import style from "./replyForm.module.css";
import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";

const ReplyForm = () => {
  const [text, setText] = useState("");
  const imageRef = useRef<HTMLInputElement>(null);

  const me = {
    id: "taewon2659",
    url: "/tay.png",
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handleInputValue: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form className={style.postFormWrapper} onSubmit={onSubmit}>
      <div className={style.replyToBox}>
        <button className={style.replyToZone}>
          <span className={style.replyTitle}>Replying to </span>
          <span className={style.replyId}>@{me.id}</span>
        </button>
      </div>
      <div className={style.postFormBox}>
        <div className={style.imageSection}>
          <Image
            src={me.url}
            alt="myImage"
            className={style.meImage}
            width={20}
            height={20}
          />
        </div>
        <div className={style.postSection}>
          <div className={style.postTextBox}>
            <textarea
              placeholder="Post your reply"
              value={text}
              onChange={handleInputValue}
              className={style.postText}
              rows={1}
            />
          </div>
          <div className={style.uploadSection}>
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
              Reply
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReplyForm;
