import Home from "@/app/(afterLogin)/home/page";

type Props = {
  params: { username: string; id: string; photoId: string };
};

const Page = ({ params }: Props) => {
  console.log(params.username);
  console.log(params.id);
  console.log(params.photoId);

  return <Home />;
};

export default Page;
