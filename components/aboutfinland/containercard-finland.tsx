// components/CardsContainer.tsx
import React from "react";
import Card from "@/components/ui/card";

const cardsData = [
  {
    image: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Winter in Rovaniemi",
    date: "2024-11-10",
    author: "Aroon",
    href: "https://www.rovaniemi.fi/",
  },
  {
    image: "https://images.pexels.com/photos/10543010/pexels-photo-10543010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "SkyWheel Helsinki",
    date: "2024-11-11",
    author: "Admin",
    href: "https://skywheel.fi/en/home/",
  },
  {
    image: "https://images.pexels.com/photos/5018661/pexels-photo-5018661.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Oodi Library",
    date: "2024-11-12",
    author: "Admin",
    href: "https://oodihelsinki.fi/en/",
  },
];

const FinlandContainerCard = () => {
  return (
    <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-6 py-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          description={card.description}
          date={card.date}
          author={card.author}
          link={card.href}
        />
      ))}
    </div>
  );
};

export default FinlandContainerCard;
