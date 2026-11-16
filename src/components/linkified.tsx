import { Fragment } from "react";

const URL_RE = /(https?:\/\/[^\s<>"]*[^\s<>".,;:!?)])/g;

/** Renders plain text and turns bare URLs into links. Presentation only; the FAQ data stays plain text. */
export function Linkified({ text }: { text: string }) {
  return (
    <>
      {text.split(URL_RE).map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener"
            className="text-primary underline underline-offset-2 hover:no-underline"
          >
            {part.replace(/^https?:\/\//, "")}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
