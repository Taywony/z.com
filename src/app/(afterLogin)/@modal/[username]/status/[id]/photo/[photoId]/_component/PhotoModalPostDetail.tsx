import PostDetailArticle from "@/app/(afterLogin)/_component/PostDetailArticle";
import style from "./photoModalPostDetail.module.css";
import ReplyForm from "@/app/(afterLogin)/_component/ReplyForm";
import Post from "@/app/(afterLogin)/_component/Post";

const PhotoModalPostDetail = () => {
  return (
    <section className={style.section}>
      <div className={style.detailPost}>
        <article className={style.articleBox}>
          <PostDetailArticle inModal />
        </article>
        <div className={style.replyInputBox}>
          <div className={style.inputZone}>
            <ReplyForm />
          </div>
        </div>
      </div>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default PhotoModalPostDetail;
