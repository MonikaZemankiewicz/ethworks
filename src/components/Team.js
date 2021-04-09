import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import team1 from "../assets/team1.svg";
import team2 from "../assets/team2.svg";
import team3 from "../assets/team3.svg";
import team4 from "../assets/team4.svg";
import Modal from "react-modal";

const Team = () => {
  return (
    <section className="team">
      <h1> team </h1>
      <Carousel breakPoints={breakPoints}>
        {items.map((item, index) => {
          return <Item key={item.id} index={index} {...item} />;
        })}
      </Carousel>
    </section>
  );
};

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 620, itemsToShow: 4 },
];

const items = [
  {
    id: 1,
    name: "Edgar Morrison",
    image: team1,
    position: "CEO",
    desc:
      "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...",
  },
  {
    id: 2,
    name: "Mae Martin",
    image: team2,
    position: "CTO",
    desc:
      "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...",
  },
  {
    id: 3,
    name: "David Banks",
    image: team3,
    position: "CFO",
    desc:
      "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...",
  },
  {
    id: 4,
    name: "Frederick Parsons",
    image: team4,
    position: "COO",
    desc:
      "Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner...",
  },
];

export default Team;