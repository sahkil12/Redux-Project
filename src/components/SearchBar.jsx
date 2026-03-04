import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {

     const [text, setText] = useState("")

     const dispatch = useDispatch()

     const handleSearch = (e) => {
          e.preventDefault()
          dispatch(setQuery(text))
          
          setText("")
     }

     return (
          <div className="flex justify-center w-4/5 mx-auto bg-gray-800 p-14 rounded-xl">
               <form
                    onSubmit={(e) => {
                         handleSearch(e)
                    }}
                    className="flex w-full items-center gap-4">
                    <input
                         value={text}
                         onChange={(e) => setText(e.target.value)}
                         required
                         placeholder="Search Anythings....."
                         className="border-2 w-full outline-none text-xl py-3 px-5 rounded font-semibold"
                         type="text" />

                    <button className="border-2 cursor-pointer active:scale-95 transition-all outline-none text-xl py-3 px-16 font-bold rounded">Search</button>
               </form>
          </div>
     );
};

export default SearchBar;