"use client";

import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/horizontalBookList";
import Listdata from "../../.local/list_all_books_best_sellers_sample.json";
import SkeletonHorizontalBookList from "@/components/organisms/skeletonHorizontalBookList";
import { useBooks } from "@/hooks/useBooks";
import Modal from "@/components/molecules/modal";
import { getStorageItem, setStorageItem } from "@/utils/localStorage";
import { useCallback, useMemo, useState } from "react";
import Button from "@/components/atoms/button";
import Checkbox from "@/components/molecules/Checkbox";

export default function Home() {
  const loading = false;
  const [openWelcome, setOpenWelcome] = useState(() => {
    const hiddeWelcome = getStorageItem("hiddeModalWelcome");
    return !(hiddeWelcome === "true");
  });
  const [hiddeWelcomeForever, setHiddeWelcomeForever] = useState(() => {
    const hiddeWelcome = getStorageItem("hiddeModalWelcome");
    return hiddeWelcome === "true";
  });

  const handleWelcome = useCallback(() => {
    setOpenWelcome(false);
    setStorageItem("hiddeModalWelcome", hiddeWelcomeForever ? "true" : "false");
  }, [hiddeWelcomeForever, setOpenWelcome]);

  const { reoderListByFavorite } = useBooks();
  const bookLists = useMemo(() => {
    return reoderListByFavorite(Listdata.results.lists as any);
  }, [reoderListByFavorite]);

  return (
    <Page>
      <Modal open={openWelcome} onClose={() => {}}>
        <h3 className="text-lg font-light">
          Welcome to the Ruan's Masterpiece
        </h3>
        <h3 className="text-2xl font-bold">New York Times Best Sellers</h3>
        <div className="w-full my-4">
          <p>
            In this application, you can be up to date with all the best sellers
            books out there!
          </p>
          <p>
            You can add a specific list into your favorites and our application
            will track the changes from the list, if a book was out or a new
            entered.
          </p>
        </div>
        <div className="w-2/4 flex justify-between gap-3">
          <Checkbox
            onClick={() => setHiddeWelcomeForever((old) => !old)}
            label="Do not show again"
            checked={hiddeWelcomeForever}
            value="show-welcome"
          />
          <div>
            <Button onClick={handleWelcome}>Ok</Button>
          </div>
        </div>
      </Modal>
      <Section>
        <div>
          <Button onClick={() => setOpenWelcome(true)}>Show welcome</Button>
        </div>
      </Section>
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
