import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const handleValue = (e) => {
    console.log(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true);

    if (loading) {
      return <h1> Loading...</h1>;
    }

    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setPerson(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>

      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="random user" className="user-img" />
        </div>
      </div>
    </main>
  );
}

export default App;
