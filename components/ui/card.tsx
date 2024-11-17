// components/Card.tsx
import React from "react";
import Link from "next/link";

type CardProps = {
  image: string;
  description: string;
  date: string;
  author: string;
  link: string;
};

const Card = ({ image, description, date, author, link }: CardProps) => {
  return (
    <Link href={link} target="_blank">
      <div className="block w-full h-full">
        <div className="flex flex-col bg-zinc-100 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-zinc-200">
          {/* Image */}
          <div
            className="w-full h-56 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          {/* Card Content */}
          <div className="p-4 flex flex-col flex-grow">
            <p className="text-xl font-bold text-zinc-950 truncate">
              {description}
            </p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-zinc-950">{date}</p>
              <p className="text-sm text-zinc-950">By: {author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
