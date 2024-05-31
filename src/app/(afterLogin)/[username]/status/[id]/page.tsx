import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./postDetail.module.css";
import ReplyForm from "./_component/ReplyForm";
import PostDetailArticle from "./_component/PostDetailArticle";
import Post from "@/app/(afterLogin)/_component/Post";

const PostDetail = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <BackButton />
        <div className={style.headerTitle}>
          <h2 className={style.titleText}>Post</h2>
        </div>
      </div>
      <section className={style.section}>
        <div className={style.detailPost}>
          <article className={style.articleBox}>
            <PostDetailArticle />
          </article>
          <div className={style.replyInputBox}>
            <div className={style.inputZone}>
              <ReplyForm />
            </div>
          </div>
        </div>
        <div className={style.replyContentsBox}>
          <Post />
        </div>
        <div className={style.replyContentsBox}>
          <Post />
        </div>
        <div className={style.replyContentsBox}>
          <Post />
        </div>
      </section>
    </div>
  );
};

export default PostDetail;
