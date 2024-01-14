import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippet-edit-form';

interface SnippetEdditPageProps {
  params: {
    id: string;
  };
}
export default async function SnippeteditPage(props: SnippetEdditPageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (!snippet) {
    return notFound();
  }

  return <div><SnippetEditForm snippet={snippet} /></div>;

}