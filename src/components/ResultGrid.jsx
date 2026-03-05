import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setError, setLoading, setResults } from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {

     const dispatch = useDispatch()
     const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

     useEffect(() => {

          const getData = async () => {

               if (!query) return;

               try {
                    dispatch(setLoading())
                    let data = []
                    if (activeTab == "photos") {
                         let response = await fetchPhotos(query)
                         data = response.map((item) => ({
                              id: item.id,
                              types: 'photo',
                              title: item.alt_description,
                              thumbnail: item.urls.small,
                              src: item.urls.full
                         }))
                    }
                    if (activeTab == "videos") {
                         let response = await fetchVideos(query)
                         data = response.map((item) => ({
                              id: item.id,
                              types: 'video',
                              title: item.user.name || "video",
                              thumbnail: item.image,
                              src: item.video_files[1].link
                         }))
                    }
                    dispatch(setResults(data))

               } catch (error) {
                    dispatch(setError(error.message))
               }
          }
          getData()

     }, [query, activeTab, dispatch])
     if (error) return <h1>Somethings is Wrong</h1>
     if (loading) return <span className="loading loading-xl "></span>

     return (
          <div className="w-full p-5 md:w-11/12 mx-auto flex flex-wrap gap-5 ">
               {
                    results?.map((item, idx) => (
                         <ResultCard key={idx} item={item}></ResultCard>
                    ))
               }
          </div>
     );
};

export default ResultGrid;