import Link from "next/link";
import style from "./newMessageButton.module.css";

const NewMessageButton = () => {
  return (
    <div className={style.newMessageBox}>
      <Link className={style.newMessageButton} href="/compose">
        <svg viewBox="0 0 24 24" aria-hidden="true" className={style.svg}>
          <g>
            <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"></path>
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default NewMessageButton;
