import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/HorizontalBookList";
import Image from "next/image";
import Listdata from "../../.local/list_all_books_best_sellers_sample.json";

export default function Home() {
  return (
    <Page>
      {Listdata.results.lists.map((list) => (
        <Section key={list.list_id}>
          <HorizontalBookList name={list.display_name} books={list.books} />
        </Section>
      ))}
    </Page>
  );
}
