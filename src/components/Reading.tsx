"use client";

import type { ReactNode } from "react";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  /** ISBN-13 for Open Library cover images */
  isbn: string;
  takeaway: ReactNode;
};

const books: Book[] = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    isbn: "9781449373320",
    takeaway: (
      <>
        Deepened my understanding of
        <strong>distributed systems architecture</strong>, specifically the
        trade-offs between <strong>consistency and availability</strong> in the
        face of network partitions. It provided a framework for deciding when to
        prioritize <strong>immediate data accuracy</strong> versus{" "}
        <strong>high system uptime</strong> based on specific business
        needs.{" "}
      </>
    ),
  },
  {
    title: "Grokking Simplicity",
    author: "Eric Normand",
    isbn: "9781617296208",
    takeaway: (
      <>
        Strengthened my approach to
        <strong>functional programming</strong> by mastering the separation of{" "}
        <strong>side effects (actions)</strong> from
        <strong>pure logic (calculations)</strong> and{" "}
        <strong>state (data)</strong>. This mental model allows me to build{" "}
        <strong>deeply decoupled systems</strong> where the core logic is{" "}
        <strong>highly testable</strong> and <strong>predictable</strong>,
        regardless of the UI or infrastructure.
      </>
    ),
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    isbn: "9780465050659",
    takeaway: (
      <>
        Refined my <strong>frontend development</strong> philosophy: I believe
        every element on a screen should have a{" "}
        <strong>logical purpose and placement</strong>. If a user has to ask for
        documentation to navigate a feature, it needs improvement. I strive to
        build <strong>intuitive interfaces</strong>.
      </>
    ),
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    isbn: "9780804139298",
    takeaway: (
      <>
        Informed my <strong>entrepreneurial mindset</strong> toward software. It
        reminds me to build things that are 10x better than the status quo and
        to focus on creating unique value in the marketplace.
      </>
    ),
  },
  {
    title: "The 10X Rule",
    author: "Grant Cardone",
    isbn: "9780470627600",
    takeaway: (
      <>
        Becoming a <strong>10X Engineer</strong> requires a level of{" "}
        <strong>discipline</strong>. I bring this{" "}
        <strong>relentless work ethic</strong> to every project, staying
        obsessed with constant self-improvement to stay ahead of the curve in
        this competitive field.
      </>
    ),
  },
];

function BookCover({ title, isbn }: Pick<Book, "title" | "isbn">) {
  return (
    <Image
      src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}
      alt={`Book cover: ${title}`}
      fill
      className="object-cover"
      sizes="160px"
    />
  );
}

export default function Reading() {
  return (
    <section className="px-6 py-12 md:py-24 bg-custom-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-50 text-center font-bold text-4xl md:text-6xl mb-6">
          Reading List
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto leading-relaxed mb-12 md:mb-20 text-sm md:text-base">
          I regularly visit the library to sharpen my technical craft and mental
          models. Here are a few books that have fundamentally shaped how I
          think about code, design, and building products.
        </p>

        <div className="flex flex-col gap-8">
          {books.map((book) => (
            <article
              key={book.isbn}
              className="group border border-white/10 rounded-2xl p-6 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 flex flex-col sm:flex-row gap-8 items-center sm:items-start"
            >
              <div className="relative w-40 shrink-0 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/20 transform group-hover:scale-[1.02] transition-transform duration-300">
                <BookCover title={book.title} isbn={book.isbn} />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-blue-400 font-bold text-xl mb-1">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-semibold">
                  {book.author}
                </p>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    Key Takeaway
                  </span>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {book.takeaway}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
