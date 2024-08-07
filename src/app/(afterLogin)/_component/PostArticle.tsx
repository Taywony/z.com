"use client";

import { ReactNode } from "react";
import style from "./postArticle.module.css";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  post: {
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    postId: number;
    content: string;
    createdAt: Date;
    Images: any[];
  };
};

const PostArticle = ({ children, post }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`${post.User.id}/status/${post.postId}`);
  };

  return (
    <article className={style.post} onClickCapture={onClick}>
      {children}
    </article>
  );
};

export default PostArticle;
