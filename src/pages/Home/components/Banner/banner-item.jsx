import React from "react";
import 'animate.css';

export function BannerItem({ news , index }) {
  return (
    <li className="animate__animated animate__fadeIn bannerItem" key={index.toString()}>
        <div className="contentItemBanner">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Promovemos tu valor personal.</h2>
        </div>
        <img src={news.bgImage} alt={news.title}/>
    </li>
  )
}