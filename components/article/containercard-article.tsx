// components/CardsContainer.tsx
import React from "react";
import Card from "@/components/ui/card";

const cardsData = [
  {
    image: "https://images.pexels.com/photos/4325476/pexels-photo-4325476.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Yoga & Meditation",
    date: "2024-09-07",
    author: "Admin",
    href: "https://isha.sadhguru.org/uk/en/yoga-meditation",
  },
  {
    image: "https://images.pexels.com/photos/1919030/pexels-photo-1919030.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "HopLop - Kids",
    date: "2024-06-26",
    author: "Admin",
    href: "https://www.hoplop.fi/en",
  },
  {
    image: "https://images.pexels.com/photos/5841672/pexels-photo-5841672.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Hiking in Finland",
    date: "2024-05-11",
    author: "Admin",
    href: "https://www.visitfinland.com/en/articles/tips-for-hiking-and-walking-in-finland/",
  },
];

const ArticleCardContainer = () => {
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

export default ArticleCardContainer;
