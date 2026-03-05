import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {

     const tabs = ["photos", "videos", "gif"]

     const dispatch = useDispatch()
     const activeTab = useSelector((state) => state.search.activeTab)

     return (
          <div className="flex gap-8 justify-center mt-5">
               {
                    tabs.map((tab, idx) => (
                         <button
                              onClick={() => {
                                   dispatch(setActiveTabs(tab))
                              }}
                              className={`${activeTab == tab ? 'bg-emerald-600' : 'bg-gray-600 '}  px-6 py-3 uppercase rounded font-semibold cursor-pointer active:scale-95 transition`}
                              key={idx}>{tab}</button>
                    ))
               }
          </div>
     );
};

export default Tabs;