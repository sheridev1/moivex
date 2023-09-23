import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hook/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadimage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss"
const HeroBanner = () => {
  const [backimg, setImage] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setImage(bg);
  }, [data]);
  
  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={backimg} />
      </div>}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search For a moive to show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
              value={query || ""}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
