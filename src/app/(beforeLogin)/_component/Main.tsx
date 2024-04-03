"use client";

import styles from "./main.module.css";
import Zlogo from "../../../../public/zlogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <Image src={Zlogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </main>
  );
}
