import BarChart from "./components/bar-chart";
import sunshine from "./data/sunshine.json";

import "./App.css";

function App() {
  const data = sunshine
    .map((d) => {
      return {
        city: d.CITY,
        sunshine: d["JUL"],
      };
    })
    .sort((a, b) => b.sunshine - a.sunshine)
    .slice(0, 20);

  console.log("data", data);

  return (
    <>
      <div className="header">
        <h1></h1>
      </div>
      <div className="container">
        <BarChart height={600} width={900} data={data} />
      </div>
    </>
  );
}

export default App;
