import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { recentNews, researchHighlights } from "../utils/constants";
import { iconsReact } from "../utils/icons";
import RecentNewsCard from "../components/RecentNewsCard";
const Home = () => {
  const [slide, setSlide] = useState(0);
  const slides = [];
  return (
    <main className="home">
      <div className="container">
        <header className="header">
          <h3>Welcome to the Aquatic Chemistry Laboratory</h3>
          <p>
            <i>
              Research in the Aquatic Chemistry Laboratory investigates chemical
              reactions affecting the fate and transport of heavy metals,
              radionuclides, and other inorganic contaminants in natural and
              engineered aquatic systems. Specific topics include reactions at
              the solid-water interface, drinking water treatment, contaminated
              site remediation, energy byproducts in the environment,
              biogeochemistry of metals in soils and sediments, and carbon
              sequestration.
            </i>
          </p>
        </header>
        <section className="swiper-section-wrapper">
          <header className="header">
            <h3>Research Highlights</h3>
          </header>
          <div className="swiper-section">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
              }}
              spaceBetween={16}
              loop={true}
              loopFillGroupWithBlank={true}
              grabCursor={true}
              navigation={{
                nextEl: ".research-swiper-button-next",
                prevEl: ".research-swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="w-full"
              onSlideChange={(swiper) => {
                setSlide(swiper.activeIndex);
              }}
            >
              <div className="">
                {researchHighlights.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="slides-img">
                      <img src={item.imgpath} alt="labs" />
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="research-swiper-button-prev swiper-btn">
              {iconsReact.left}
            </div>
            <div className="research-swiper-button-next swiper-btn">
              {iconsReact.right}
            </div>
          </div>
        </section>
        <section className="recent-news">
          <header>
            <h3>Recent News</h3>
            <div className="line"></div>
          </header>

          <div className="recent-news-wrapper">
            {recentNews.map((item, index) => (
              <RecentNewsCard key={index} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
