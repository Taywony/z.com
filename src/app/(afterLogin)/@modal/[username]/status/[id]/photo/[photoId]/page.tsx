import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import CommentOpenButton from "./_component/CommentOpenButton";
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";
import style from "./photoModal.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import PhotoModalPostDetail from "./_component/PhotoModalPostDetail";

const PhotoModal = () => {
  const photo = {
    imageId: 1,
    link: "https://picsum.photos/500",
    Post: {
      comment: "오랜만에 솔캠, 삽결살에 볶음밥은 못참지",
    },
  };

  return (
    <div className={style.modalViewContainer}>
      <div className={style.modalViewBox}>
        <div className={style.photoContainer}>
          <div className={style.photoBox}>
            <div className={style.photoZone}>
              <img
                src="https://picsum.photos/500"
                alt="post-photo"
                className={style.postPhoto}
              />
            </div>
            <div className={style.actionButtonZone}>
              <ActionButtons inModal />
            </div>
          </div>
          <div className={style.backButtonBox}>
            <PhotoModalCloseButton />
          </div>
          <div className={style.commentOpenButtonBox}>
            <CommentOpenButton />
          </div>
        </div>
        <div className={style.commentContainer}>
          <PhotoModalPostDetail />
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
