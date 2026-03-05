import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { setError, setLoading, setResult } from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {

     const dispatch = useDispatch()
     const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

     useEffect(() => {

          const getData = async () => {

               if(!query) return <h1>Type Something</h1>

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
               dispatch(setResult(data))

              } catch (error) {
               dispatch(setError(error.message))
              }
          }
          getData()

     }, [query, activeTab, dispatch])

     if(error) return <h1>Somethings is Wrong</h1>

     if(loading) return <span className="loading loading-xl "></span>

     return (
          <div>
               <button className="btn btn-primary">Get Data </button>
          
          </div>
     );
};

export default ResultGrid;