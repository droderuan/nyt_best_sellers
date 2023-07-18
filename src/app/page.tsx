"use client";

import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/horizontalBookList";
import SkeletonHorizontalBookList from "@/components/organisms/skeletonHorizontalBookList";
import { useBooks } from "@/hooks/useBooks";
import Modal from "@/components/molecules/modal";
import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "@/components/atoms/button";
import Checkbox from "@/components/molecules/Checkbox";
import { useNyTimesClient } from "@/hooks/client/nyTimesClient";
import ListUpdates from "@/components/molecules/showUpdatesList";
import { getStorageItem, setStorageItem } from "@/utils/myLocalStorage";

export default function Home() {
  const { reoderListByFavorite, checkForUpdatesInList } = useBooks();

  const { data, isLoading } = useNyTimesClient();

  const [openWelcome, setOpenWelcome] = useState(() => {
    const hiddeWelcome = getStorageItem("hiddeModalWelcome");
    return !(hiddeWelcome === "true");
  });
  const [hiddeWelcomeForever, setHiddeWelcomeForever] = useState(() => {
    const hiddeWelcome = getStorageItem("hiddeModalWelcome");
    return hiddeWelcome === "true";
  });

  const [openUpdate, setOpenUpdate] = useState(false);
  const [updatedList, setUpdatedList] =
    useState<ReturnType<typeof checkForUpdatesInList>>();

  useEffect(() => {
    if (!isLoading && data?.lists) {
      const checkedList = checkForUpdatesInList(data?.lists);
      if (checkedList.hasUpdate) {
        setOpenUpdate(true);
        setUpdatedList(checkedList);
      }
    }
  }, [checkForUpdatesInList, isLoading, data]);

  const handleWelcome = useCallback(() => {
    setOpenWelcome(false);
    setStorageItem("hiddeModalWelcome", hiddeWelcomeForever ? "true" : "false");
  }, [hiddeWelcomeForever, setOpenWelcome]);

  const bookLists = useMemo(() => {
    return data?.lists ? reoderListByFavorite(data?.lists as any) : [];
  }, [data, reoderListByFavorite]);

  return (
    <Page>
      <Modal open={openWelcome} onClose={() => {}}>
        <h3 className="text-center text-lg md:text-2xl font-bold">
          New York Times Best Sellers
        </h3>
        <div className="overflow-y-auto">
          <div className="w-full my-4">
            <p>
              In this application, you can be up to date with all the best
              sellers books out there!
            </p>
            <p>
              You can add a specific list into your favorites and our
              application will track the changes from the list, if a book was
              out or a new entered.
            </p>
            <div className="md:m-auto w-3/4 lg:w-2/4 my-4 ">
              <ListUpdates
                listName="Tech books"
                newBooks={[
                  { title: "HOMO DEUS" },
                  { title: "CLEAN CODE" },
                  { title: "DOMAIN DRIVEN DESIGN" },
                ]}
                outBooks={[
                  { title: "PRAGMATIC PROGRAMMER" },
                  {
                    title:
                      "Design Patterns: Elements of Reusable Object-Oriented Software",
                  },
                ]}
              />
            </div>
          </div>
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

      <Modal open={openUpdate} onClose={() => {}}>
        <h3 className="text-lg font-light">
          {updatedList?.hasUpdate
            ? "There is a update on your favorite lists!"
            : "Check any updates bellow"}
        </h3>
        <div className="w-full my-4">
          <p className="text-center">
            {updatedList?.hasUpdate
              ? "There is a update since your last visite!"
              : "Looks like there is no update."}
          </p>
        </div>
        <div className="w-full lg:w-2/4 my-4 overflow-y-auto h-2/3">
          {updatedList &&
            updatedList.lists.map((list) => (
              <ListUpdates
                key={list.name}
                listName={list.name}
                newBooks={list.news}
                outBooks={list.out}
              />
            ))}
        </div>
        <div className="flex-1 flex justify-between items-center gap-3">
          <div>
            <Button onClick={() => setOpenUpdate(false)}>Ok</Button>
          </div>
        </div>
      </Modal>

      <Section>
        <div className="flex justify-end">
          <div>
            <Button onClick={() => setOpenUpdate(true)}>Show updates</Button>
          </div>
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
            <HorizontalBookList listBooks={list} />
          </Section>
        ))
      )}
    </Page>
  );
}
