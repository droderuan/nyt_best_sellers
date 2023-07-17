"use client";

import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/horizontalBookList";
import SkeletonHorizontalBookList from "@/components/organisms/skeletonHorizontalBookList";
import { useBooks } from "@/hooks/useBooks";
import Modal from "@/components/molecules/modal";
import { useCallback, useMemo, useState } from "react";
import Button from "@/components/atoms/button";
import Checkbox from "@/components/molecules/Checkbox";
import { useNyTimesClient } from "@/hooks/client/nyTimesClient";

export default function Home() {
  const { data, isLoading } = useNyTimesClient();

  const [openWelcome, setOpenWelcome] = useState(() => {
    const hiddeWelcome = localStorage.getItem("hiddeModalWelcome");
    return !(hiddeWelcome === "true");
  });
  const [hiddeWelcomeForever, setHiddeWelcomeForever] = useState(() => {
    const hiddeWelcome = localStorage.getItem("hiddeModalWelcome");
    return hiddeWelcome === "true";
  });

  const handleWelcome = useCallback(() => {
    setOpenWelcome(false);
    localStorage.setItem(
      "hiddeModalWelcome",
      hiddeWelcomeForever ? "true" : "false"
    );
  }, [hiddeWelcomeForever, setOpenWelcome]);

  const { reoderListByFavorite } = useBooks();
  const bookLists = useMemo(() => {
    return data?.lists ? reoderListByFavorite(data?.lists as any) : [];
  }, [data, reoderListByFavorite]);

  return (
    <Page>
      <Modal open={openWelcome} onClose={() => {}} suppressHydrationWarning>
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
        <div className="flex-1 flex justify-between items-center gap-3">
          <Checkbox
            onChange={() => setHiddeWelcomeForever((old) => !old)}
            label="Do not show again"
            checked={hiddeWelcomeForever}
          />
          <div>
            <Button onClick={handleWelcome}>Ok</Button>
          </div>
        </div>
      </Modal>
      <Section>
        <div className="flex justify-end">
          <div>
            <Button onClick={() => setOpenWelcome(true)}>Show welcome</Button>
          </div>
        </div>
      </Section>
      {isLoading ? (
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
