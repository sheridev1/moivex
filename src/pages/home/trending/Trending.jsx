import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchButton from '../../../components/Switch/SwitchButton'
import useFetch from '../../../hook/useFetch';
import { useState } from 'react';
import "../style.scss"
import Carousel from '../../../components/Carousel/Carousel';
const Trending = () => {
    const [endpoint ,setEndPoint]=useState("day");
    
    
    const {data,loading}=useFetch(`/trending/movie/${endpoint}`)
    const onTabChange=(tab)=>{
        setEndPoint(tab==="Day"?"day":"week")

    }
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchButton data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
