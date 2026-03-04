import { fetchPhotos, fetchVideo } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";

const App = () => {


  return (
    <div className="bg-gray-900 text-white h-screen flex justify-start flex-col gap-8">

      <h1 className="text-4xl font-bold text-center pt-20">Hey i am Mustafa!!</h1>
      <SearchBar></SearchBar>
    </div>
  );
};

export default App;