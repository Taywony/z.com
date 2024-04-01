import Image from "next/image";
import styles from "./page.module.css";
import Zlogo from "../../public/zlogo.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <Image src={Zlogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <div>
          <h1>지금 일어나고 있는 일</h1>
        </div>
        <div>
          <div>
            <h2>지금 가입하세요.</h2>
            <Link href="/i/flow/signup">계정 만들기</Link>
          </div>
          <div>
            <h2>이미 가입하셨나요?</h2>
            <Link href="/login">로그인</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
