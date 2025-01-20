import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer';
import Journey from "./components/Journey/Journey";
import ParentScroll from "./components/Scroll/ParentSroll";
async function fetchData() {
  const res = await fetch('http://localhost:3000/api/hello'); // Replace with your API endpoint
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const reponsedata = await res.json();
  return reponsedata.Data || 'No data found';
}

export default async function App() {
  const Data = await fetchData();
  return (
    <div className="App">
      <div className="body">
        <>
        <Home/>
        <Journey/>
        <ParentScroll/>
        <Footer Data={Data}/>
        </>
      </div>
    </div>
  );
}
