export type PublicationMedia =
  | {
      kind: "video";
      poster: string;
      src: string;
    }
  | {
      alt: string;
      kind: "image";
      src: string;
    };

export interface Publication {
  authors: string;
  authorsTitle: string;
  award: string;
  date: string;
  dateTime: string;
  href: string;
  listThumbnail: string;
  media: PublicationMedia | null;
  subtitle: string;
  title: string;
  venue: string;
}

export interface Course {
  external: boolean;
  height: number;
  href: string;
  identifier: string;
  image: string;
  term: string;
  title: string;
  width: number;
}

export interface Member {
  height: number;
  name: string;
  src: string;
  width: number;
}
