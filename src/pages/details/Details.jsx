
import {  useParams } from 'react-router-dom'
import DetailBanner from './DetailBanner/DetailBanner'

import Cast from '../cast/Cast';
import VideosSection from '../VideosSection.jsx/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recomendation';
import useFetch from '../../hook/useFetch';


const Details = () => {
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`);
  console.log(mediaType)
  const { data: credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  
  return (
    <div>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
}

export default Details
 