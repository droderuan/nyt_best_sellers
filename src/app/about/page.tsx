"use client";

import Page from "@/components/layout/structure/Page";
import Section from "@/components/layout/structure/Section";
import HorizontalBookList from "@/components/organisms/horizontalBookList";
import Link from "next/link";

export default function About() {
  return (
    <Page>
      <Section>
        <p className="text-lg">
          Hello, I'm{" "}
          <Link
            href={"https://www.linkedin.com/in/ruan-ferreira-87a15a180/"}
            target="_blank"
            className="underline text-teal-950 text-bold"
          >
            Ruan Ferreira
          </Link>{" "}
          and this application was made by me! Of Course! <br />
          The main idea is to create an application where the user can track
          their favorite New York Times Best Seller list.
        </p>
      </Section>
    </Page>
  );
}
