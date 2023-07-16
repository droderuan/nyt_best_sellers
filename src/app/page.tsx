import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/horizontalBookList";
import Listdata from "../../.local/list_all_books_best_sellers_sample.json";
import SkeletonHorizontalBookList from "@/components/organisms/skeletonHorizontalBookList";

export default function Home() {
  const loading = false;
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
        Listdata.results.lists.map((list) => (
          <Section key={list.list_id}>
            <HorizontalBookList name={list.display_name} books={list.books} />
          </Section>
        ))
      )}
    </Page>
  );
}
