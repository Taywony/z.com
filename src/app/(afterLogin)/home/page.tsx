import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <div className={style.tabSection}>
          <div className={style.tabTitleBox}>
            <h2 className={style.tabTitle}>Home</h2>
          </div>
          <Tab />
        </div>
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
