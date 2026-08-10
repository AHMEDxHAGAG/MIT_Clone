import Image from "next/image";
import type { Publication } from "./types";

function cardVenue(venue: string) {
  return venue === "ArXiv" ? "arXiv" : venue;
}

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <a className="srg-card-link" href={publication.href}>
      <figure className="srg-card">
        <div className="srg-card-media">
          {publication.media?.kind === "video" ? (
            <video autoPlay loop muted playsInline poster={publication.media.poster} preload="metadata">
              <source src={publication.media.src} type="video/webm" />
              <source src={publication.media.src.replace(/\.webm$/, ".mp4")} type="video/mp4" />
            </video>
          ) : publication.media?.kind === "image" ? (
            <Image
              alt={publication.media.alt}
              height={284}
              sizes="(max-width: 767px) 100vw, 33vw"
              src={publication.media.src}
              unoptimized
              width={568}
            />
          ) : null}
        </div>
        <figcaption>
          <h3>
            <span className="srg-card-title">{publication.title}</span>
            {publication.subtitle ? <span className="srg-card-subtitle">: {publication.subtitle}</span> : null}
          </h3>
          <div className="srg-label srg-nobreak">
            <span className="srg-venue">{cardVenue(publication.venue)}</span>
            <span aria-hidden="true"> · </span>
            <time dateTime={publication.dateTime}>{publication.date}</time>
            <span aria-hidden="true"> · </span>
            <span className="srg-et-al" title={publication.authorsTitle}>{publication.authors}</span>
            {publication.award ? <span> · {publication.award}</span> : null}
          </div>
        </figcaption>
      </figure>
    </a>
  );
}
