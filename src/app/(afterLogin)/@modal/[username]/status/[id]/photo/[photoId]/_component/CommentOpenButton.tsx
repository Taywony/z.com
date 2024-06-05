"use client";

import style from "./commentOpenButton.module.css";

const CommentOpenButton = () => {
  const HandleCommentOpenButton = () => {};

  return (
    <div className={style.commentOpenBtnBox}>
      <button
        className={style.commentOpenBtn}
        onClick={HandleCommentOpenButton}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={style.commentOpenBtnIcon}
        >
          <g>
            <path d="M12.04 2.54l1.42 1.42L5.41 12l8.05 8.04-1.42 1.42L2.59 12l9.45-9.46zm7 0l1.42 1.42L12.41 12l8.05 8.04-1.42 1.42L9.59 12l9.45-9.46z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default CommentOpenButton;
