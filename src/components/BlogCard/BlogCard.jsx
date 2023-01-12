import React from "react";
import { SlArrowRight } from "react-icons/sl";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import './BlogCard.css'

const card = [
  {
    title: "Audi driving experience",
    desc: "Erleben Sie, wie faszinierend intelligente Performance ist. In unserem Winterprogramm 2023 finden Sie spannende Events, die Ihre Leidenschaft wecken und Sie vor neue Herausforderungen stellen werden.",
    img: blog1,
  },
  {
    title: "Audi Leasing",
    desc: "Erfahren Sie hier auf einen Blick die Vorteile von Audi Leasing für Privat- und Geschäftskunden.",
    img: blog2,
  },
  {
    title: "Winterkompletträder",
    desc: "Mit Reifen und Gussrädern in verschiedensten Designs sicher durch die kalte Jahreszeit.",
    img: blog3,
  },
];

const BlogCard = () => {
  return (
    <div className="blogCard">
      {card.map((obj, index) => (
        <div key={index} className="card__body">
          <img src={obj.img} alt="" />
          <h4>{obj.title}</h4>
          <p>{obj.desc}</p>
          <button>Mehr erfahren <SlArrowRight style={{width: '0.8rem'}}/></button>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
