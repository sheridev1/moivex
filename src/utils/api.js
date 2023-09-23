import axios from "axios";



const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN =
  " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU4MGY4Mjg5YmMyMDVhNTRmM2U5NjdjMzU5MTk4OCIsInN1YiI6IjY1MDE2ZTkyMWJmMjY2MDBlMjVlNzA3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._LYu9kVsIF4Ldp3KGNLv2VZRE6j3LRn5HjupG9NCtFE";
//import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer" + TMDB_TOKEN,
};

export const fetchDataFromApi=async(url,params)=>{
    try{
         const {data} =await axios.get(BASE_URL+ url,{
           headers,
           params 
         })
         return data
    }
    catch(error){
        console.log(error)
        return error
    }
}