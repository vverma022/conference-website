"use client";

import { InfiniteMovingCards } from "./ui/infinitemoving";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex h-[40rem] flex-col  items-center justify-center overflow-hidden rounded-md antialiased">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="py-1"
      />
    </div>
  );
}

const testimonials = [
        {
          "quote": "Contibuted 5+ papers to the project",
          "name": "Soham Waswatkar",
          "title": "First Year Physics Cycle"
        },
        {
          "quote": "Contributed 10+ papers to the project",
          "name": "Vikas Malhotra",
          "title": "First Year Chemistry Cycle"
        },
        {
          "quote": "Provided Valuable Insights",
          "name": "Vineet Muley",
          "title": "Third Year AI-ML"
        },
        {
          "quote": "Contributed 5+ papers to the project",
          "name": "Moksh Gupta",
          "title": "Second Year CSE-C"
        },
        {
          "quote": "Contributed 10+ papers to the project",
          "name": "Varun Narayan Jain",
          "title": "Second Year CCE"
        },
        {
          "quote": "Once in the System, Always in the System",
          "name": "Badass Bhai",
          "title": "Third Year IT"
        },
];
