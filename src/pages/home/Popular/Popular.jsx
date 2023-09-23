import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchButton from "../../../components/Switch/SwitchButton";
import useFetch from "../../../hook/useFetch";
import { useState } from "react";
import "../style.scss";
import Carousel from "../../../components/Carousel/Carousel";
const Popular = () => {
  const [endpoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
    
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchButton data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}  endpoint={endpoint}/>
    </div>
  );
};

export default Popular;
