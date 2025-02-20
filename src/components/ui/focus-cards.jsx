"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-80 md:h-[30rem] w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.97]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0"
    />
     <div
  className={cn(
    "absolute inset-0 bg-black/50 flex flex-col items-start py-10 px-6 transition-opacity duration-300",
    hovered === index ? "opacity-100" : "opacity-0"
  )}
>
  {/* Card Title */}
  <div className="text-2xl md:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-4">
    {card.title}
  </div>

  {/* Topics List */}
  <ul className="text-white text-base space-y-2 overflow-hidden">
    {card.topics.map((topic, idx) => (
      <li key={idx} className="flex items-start">
        <span className="mr-2">•</span> {topic}
      </li>
    ))}
  </ul>
</div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto md:px-12 w-full">
      {cards.map((card, index) => (
        <Card
        key={`${card.title}-${index}`}
        card={card}
        index={index}
        hovered={hovered}
        setHovered={setHovered}
        />
      ))}
    </div>
  );
}