export interface BookDto {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  book_review_link: string;
  book_uri: string;
  contributor: string;
  contributor_note: string;
  created_date: string;
  description: string;
  first_chapter_link: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  updated_date: string;
  weeks_on_list: number;
  buy_links: {
    name: string;
    url: string;
  }[];
}

export interface ListBookDto {
  list_id: number,
  list_name: string,
  list_name_encoded: string,
  display_name: string,
  updated: string,
  list_image: string,
  list_image_width: string,
  list_image_height: string,
  books: BookDto[]
}
