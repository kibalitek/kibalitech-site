import React, { useState, useEffect } from "react";
import "./App.css";

function PunchLine() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch`https://official-joke-api.appspot.com/jokes/programming/ten`;
    var item = await fetchItem.json();
    //for (var key in item) {
    //if (item[key] === 385) {
    //var myValue = item.punchline;
    //}
    //}
    var val = item.id;
    console.log(val);
  };

  return (
    <div>
      <h1>PunchLine</h1>
    </div>
  );
}

export default PunchLine;
