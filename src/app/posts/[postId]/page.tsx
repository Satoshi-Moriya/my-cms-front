import { notFound } from "next/navigation";

import Form from "@/app/components/form";
import Toaster from "@/app/components/toaster";
import { fetchPostByPostId } from "@/app/lib/data";

type PostId = { postId: number };

export default async function Page({ params }: { params: Promise<PostId> }) {
  const { postId } = await params;

  const post = await fetchPostByPostId(Number(postId));

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="p-5 text-3xl font-bold">記事編集</h1>
      <main className="p-5">
        <Form post={post} />
        <Toaster />
      </main>
    </div>
  );
}
