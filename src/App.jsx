import { fetchPhotos, fetchVideo } from "./api/mediaApi";

const App = () => {


  return (
    <div className="bg-gray-900 text-white h-screen flex justify-start flex-col gap-10">

      <h1 className="text-4xl font-bold text-center pt-20">Hey i am Mustafa!!</h1>
      <button 
      onClick={()=>{
        fetchPhotos("dog")
      }}
      className="btn w-fit mx-auto btn-primary"
      >Get Photos</button>
      <button 
      onClick={()=>{
        fetchVideo("dog")
      }}
      className="btn w-fit mx-auto btn-secondary"
      >Get Videos</button>
    </div>
  );
};

export default App;