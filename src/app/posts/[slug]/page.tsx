import Form from "@/app/components/form";
import TempToast from "@/app/components/temp-toast";

type Slug = { slug: string };

export default async function Page({ params }: { params: Promise<Slug> }) {
  const { slug } = await params;

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="p-5 text-3xl font-bold">記事編集 : {slug}</h1>
      <main className="p-5">
        <Form />
        <TempToast />
      </main>
    </div>
  );
}
