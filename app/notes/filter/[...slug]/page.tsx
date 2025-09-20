import css from "./NoteClient.module.css"; 
import NotesClientImport from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

interface NoteListClientProps {
  tag: string;
}

interface PageProps {
  params: {
    slug: string[];
  };
}

const NoteListClient = NotesClientImport as React.ComponentType<NoteListClientProps>;

export default async function NotesFilterPage({ params }: PageProps) {
  const tag = params.slug?.[0] || "All";
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { tag, page: 1 }],
    queryFn: () => fetchNotes(1, tag),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteListClient tag={tag} />
      </HydrationBoundary>
    </div>
  );
}

