import style from "./postForm.module.css";

export default function PostForm() {
  return (
    <div className={style.postFixed}>
      <div className={style.meImg}></div>
      <div className={style.postText}>
        <input placeholder="What is happening?!"></input>
      </div>
      <div className={style.PostButton}>
        <button>post</button>
      </div>
    </div>
  );
}
