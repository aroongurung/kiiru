// components/CardsContainer.tsx
import React from "react";
import Card from "@/components/ui/card";

const cardsData = [
  {
    image: "https://images.pexels.com/photos/19722717/pexels-photo-19722717/free-photo-of-traffic-on-bridge.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Self-Driving Vehicles",
    date: "2024-09-07",
    author: "Admin",
    href: "https://www.nvidia.com/en-us/self-driving-cars/",
  },
  {
    image: "https://images.pexels.com/photos/17489157/pexels-photo-17489157/free-photo-of-close-up-of-computer-hardware.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Cloud Computing",
    date: "2024-06-26",
    author: "Admin",
    href: "https://cloud.google.com/learn/what-is-cloud-computing",
  },
  {
    image: "https://images.pexels.com/photos/9028872/pexels-photo-9028872.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "AI Technology",
    date: "2024-05-11",
    author: "Admin",
    href: "https://www.ibm.com/topics/artificial-intelligence",
  },
];

const TechnologyCardContainer = () => {
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

export default TechnologyCardContainer;
