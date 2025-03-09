import { notFound } from "next/navigation";

import Form from "@/app/components/form";
import TempToast from "@/app/components/temp-toast";
import { fetchPostBySlug } from "@/app/lib/data";

type Slug = { slug: string };

export default async function Page({ params }: { params: Promise<Slug> }) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="p-5 text-3xl font-bold">記事編集 : {slug}</h1>
      <main className="p-5">
        <Form post={post} />
        <TempToast />
      </main>
    </div>
  );
}
