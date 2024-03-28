import { useState } from "react";
import "./App.css";

const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSelectedSize = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div>
      <label htmlFor="size">Select a clothing size: </label>
      <select id="size" onChange={handleSelectedSize}>
        <option value="Small - Fits chest size 34-36 inches.">Small</option>
        <option value="Medium - Fits chest size 38-40 inches.">Medium</option>
        <option value="Large - Fits chest size 42-44 inches.">Small</option>
      </select>
      <p>Description: {selectedSize}</p>
    </div>
  );
};

const Jobs = () => {
  const [job, setJob] = useState("");
  const handleChangeEvent = (event) => {
    setJob(event.target.value);
  };
  return (
    <div>
      <label htmlFor="job">Select a job category: </label>
      <select id="job" onChange={handleChangeEvent}>
        <option value="Employment for a standard 40-hour workweek">
          Full-Time
        </option>
        <option value="Part-time - Employment for less than a standard workweek">
          Part-time
        </option>
        <option value="Contract - Temporary employment for a specific project or period">
          Contract
        </option>
      </select>
      <p>Description: {job}</p>
    </div>
  );
};

const Meals = () => {
  const [meals, setMeals] = useState("");

  const handleChangeEvent = (event) => {
    setMeals(event.target.value);
  };

  return (
    <div>
      <label htmlFor="meal">Select a meal time: </label>
      <select id="meal" onChange={handleChangeEvent}>
        <option value="Breakfast - Morning meal typically eaten before starting the day.">
          Breakfast
        </option>
        <option value="Lunch - Midday meal typically eaten around noon.">
          Lunch
        </option>
        <option value="Dinner - Evening meal typically eaten at the end of the day.">
          Dinner
        </option>
      </select>
      <p>Description: {meals}</p>
    </div>
  );
};

const SkillLevel = () => {
  const [skillLevel, setSkillLevel] = useState("");

  const handleChangeEvent = (event) => {
    setSkillLevel(event.target.value);
  };

  return (
    <div>
      <label htmlFor="skill">Select your skill level: </label>
      <select id="skill" onChange={handleChangeEvent}>
        <option value="Just starting out, limited experience or knowledge">
          Beginner
        </option>
        <option value="Intermediate - Some experience or knowledge, moderate skill level">
          Intermediate
        </option>
        <option value="Advanced - Extensive experience or knowledge, high skill level">
          Advanced
        </option>
      </select>
      <p>Description: {skillLevel}</p>
    </div>
  );
};

const TempUnit = () => {
  const [selectedTemp, setSelectedTemp] = useState("");

  const handleChangeEvent = (event) => {
    setSelectedTemp(event.target.value);
  };
  return (
    <div>
      <label htmlFor="temp">Select a temperature unit: </label>
      <select id="temp" onChange={handleChangeEvent}>
        <option value="Celcius - Temperature scale in which water freezes at 0 degree and boils at 100 degrees">
          Celcius
        </option>
        <option value="Fahrenheit - Temperature scale widely used in United Kingdom">
          Fahrenheit
        </option>
        <option value="Kelvin - Absolute temperature sale with 0 representing absolute zero">
          Kelvin
        </option>
      </select>
      <p>Description: {selectedTemp}</p>
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Sizes />
      <br />
      <Jobs />
      <br />
      <Meals />
      <br />
      <SkillLevel />
      <br />
      <TempUnit />
    </main>
  );
}
