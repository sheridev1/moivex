import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchButton from "../../../components/Switch/SwitchButton";
import useFetch from "../../../hook/useFetch";
import { useState } from "react";
import "../style.scss";
import Carousel from "../../../components/Carousel/Carousel";
const TopRated = () => {
  const [endpoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  console.log(`top ${endpoint}`)
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchButton data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default TopRated;
