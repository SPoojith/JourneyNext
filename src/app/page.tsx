import Home from "./components/Home/Home";
import Journey from "./components/Journey/Journey";
import ParentScroll from "./components/Scroll/ParentSroll";


export default function App() {
  return (
    <div className="App">
      <div className="body">
        <>
        <Home/>
        <Journey/>
        <ParentScroll/>
        </>
      </div>
    </div>
  );
}
