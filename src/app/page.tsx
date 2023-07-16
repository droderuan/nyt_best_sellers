"use client";

import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/horizontalBookList";
import Listdata from "../../.local/list_all_books_best_sellers_sample.json";
import SkeletonHorizontalBookList from "@/components/organisms/skeletonHorizontalBookList";
import { useBooks } from "@/hooks/useBooks";

export default function Home() {
  const loading = false;
  const { reoderListByFavorite } = useBooks();
  const bookLists = reoderListByFavorite(Listdata.results.lists as any);

  return (
    <Page>
      {loading ? (
        <>
          <Section>
            <SkeletonHorizontalBookList />
          </Section>
          <Section>
            <SkeletonHorizontalBookList />
          </Section>
          <Section>
            <SkeletonHorizontalBookList />
          </Section>
        </>
      ) : (
        bookLists.map((list) => (
          <Section key={list.list_id}>
            <HorizontalBookList name={list.display_name} books={list.books} />
          </Section>
        ))
      )}
    </Page>
  );
}
