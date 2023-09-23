import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import "./style.scss";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import no_results from "../../assets/no-results.png";
import Spinner from "../../components/Spinner/Spinner";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setloading] = useState(null);
  const { query } = useParams();

  const fetchInitialData = () => {
    setloading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((next) => next + 1);
        setloading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((next) => next + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1); 
    fetchInitialData();
  }, [query]);
  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.results > 0 ? "results" : "result"
                } of ${query}`}
              </div>
              <InfiniteScroll 
              className="content"
              dataLength={data?.results?.length||[]}
              next={fetchNextPageData}
              hasMore={pageNum<= data?.total_pages}
              loader={<Spinner/>}
              >

                {data.results.map((item, index) => {
                  if (item.media_type == "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Results Not Found</span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
