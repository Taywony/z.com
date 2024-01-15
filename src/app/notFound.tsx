import Link from "next/link";
import { NextPage } from "next";

const notFound = () => {
  return (
    <>
      <div>이 페이지는 존재하지 않는 페이지 입니다.</div>
      <Link href="/search">검색</Link>
    </>
  );
};

export default notFound;
