import BarChart from "./components/bar-chart";
import sunshine from "./data/sunshine.json";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "JUL", label: "July" },
  { value: "JUN", label: "June" },
  { value: "AUG", label: "August" },
  { value: "SEP", label: "September" },
  { value: "OCT", label: "October" },
  { value: "NOV", label: "November" },
  { value: "DEC", label: "December" },
  { value: "JAN", label: "January" },
  { value: "FEB", label: "February" },
  { value: "MAR", label: "March" },
  { value: "APR", label: "April" },
  { value: "MAY", label: "May" },
];

function App() {
  const [month, setMonth] = useState(options[0]);
  const data = sunshine
    .map((d) => {
      return { city: d.CITY, sunshine: d[month.value] };
    })
    .sort((a, b) => b.sunshine - a.sunshine)
    .slice(0, 20);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Sunshine By City</h1>
          <Select defaultValue={month} onChange={setMonth} options={options} />
        </div>

        <BarChart data={data} width={700} height={500} />
      </div>
    </div>
  );
}

export default App;
