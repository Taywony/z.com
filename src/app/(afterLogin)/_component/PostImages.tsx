import Link from "next/link";
import style from "./postImages.module.css";
import cx from "classnames";

type Props = {
  post: {
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    postId: number;
    content: string;
    createdAt: Date;
    Images: { imageId: number; Link: string }[];
  };
};

const PostImages = ({ post }: Props) => {
  if (!post.Images) return null;

  if (post.Images.length === 1) {
    return (
      <div className={style.oneImageBox}>
        <Link
          href={`${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={style.oneImage}
          style={{
            backgroundImage: `url(${post.Images[0].Link})`,
            backgroundSize: "cover",
          }}
        >
          <img src={post.Images[0].Link} />
        </Link>
      </div>
    );
  }

  if (post.Images.length === 2) {
    return (
      <div className={style.twoImageBox}>
        <Link
          href={`${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={style.twoImage}
          style={{
            backgroundImage: `url(${post.Images[0].Link})`,
            backgroundSize: "cover",
          }}
        >
          <img src={post.Images[0].Link} />
        </Link>
        <Link
          href={`${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          className={style.twoImage}
          style={{
            backgroundImage: `url(${post.Images[1].Link})`,
            backgroundSize: "cover",
          }}
        >
          <img src={post.Images[1].Link} />
        </Link>
      </div>
    );
  }

  if (post.Images.length === 3) {
    return (
      <div className={style.threeImageBox}>
        <Link
          href={`${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={cx(style.threeImage, style.threeLeft)}
          style={{
            backgroundImage: `url(${post.Images[0].Link})`,
            backgroundSize: "cover",
          }}
        >
          <img src={post.Images[0].Link} />
        </Link>
        <div className={style.threeRightBox}>
          <Link
            href={`${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            className={cx(style.threeImage, style.threeRightTop)}
            style={{
              backgroundImage: `url(${post.Images[1].Link})`,
              backgroundSize: "cover",
            }}
          >
            <img src={post.Images[1].Link} />
          </Link>
          <Link
            href={`${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            className={cx(style.threeImage, style.threeRightBottom)}
            style={{
              backgroundImage: `url(${post.Images[2].Link})`,
              backgroundSize: "cover",
            }}
          >
            <img src={post.Images[2].Link} />
          </Link>
        </div>
      </div>
    );
  }

  if (post.Images.length === 4) {
    return (
      <div className={style.fourImageBox}>
        <div className={style.fourTopBox}>
          <Link
            href={`${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            className={cx(style.fourImage, style.fourTopLeft)}
            style={{
              backgroundImage: `url(${post.Images[0].Link})`,
              backgroundSize: "contain",
            }}
          >
            <img src={post.Images[0].Link} />
          </Link>
          <Link
            href={`${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            className={cx(style.fourImage, style.fourTopRight)}
            style={{
              backgroundImage: `url(${post.Images[1].Link})`,
              backgroundSize: "contain",
            }}
          >
            <img src={post.Images[1].Link} />
          </Link>
        </div>
        <div className={style.fourBottomBox}>
          <Link
            href={`${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            className={cx(style.fourImage, style.fourBottomLeft)}
            style={{
              backgroundImage: `url(${post.Images[2].Link})`,
              backgroundSize: "contain",
            }}
          >
            <img src={post.Images[2].Link} />
          </Link>
          <Link
            href={`${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
            className={cx(style.fourImage, style.fourBottomRight)}
            style={{
              backgroundImage: `url(${post.Images[3].Link})`,
              backgroundSize: "contain",
            }}
          >
            <img src={post.Images[3].Link} />
          </Link>
        </div>
      </div>
    );
  }
};

export default PostImages;
