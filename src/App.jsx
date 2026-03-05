import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {


  return (
    <div className="bg-gray-900 text-white h-screen flex justify-start flex-col gap-8">

      <h1 className="text-4xl font-bold text-center pt-20">Hey i am Mustafa!!</h1>
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;