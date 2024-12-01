import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
  const [posData, setPosData] = useState(null);
  const [negData, setNegData] = useState(null);
  const [neuData, setNeuData] = useState(null);
  const [cur, setCur] = useState("pos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:5000/fetch-data");
      res = res.data.filter((e) => e.category === id);
      const pos = res.filter((e) => e.positive === "True");
      const neu = res.filter((e) => e.neutral === "True");
      const neg = res.filter((e) => e.negative === "True");
      setPosData(pos);
      setNegData(neg);
      setNeuData(neu);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (value) => {
    setCur(value);
  };
  if (loading) {
    return <div className="h-screen mt-10 text-white text-2xl">Loading...</div>; 
  }
  return (
    <div className="p-5">
      <div className="text-white text-2xl flex justify-center items-center m-5">
        <button
          onClick={() => handleClick("pos")}
          className={cur === 'pos'?"bg-white text-black p-5 rounded-s-full":"border-2 border-gray-500 p-5 rounded-s-full"}
        >
          Positive
        </button>
        <button
          onClick={() => handleClick("neu")}
          className={cur === 'neu'?"bg-white text-black p-5":"border-2 border-gray-500 p-5"}
        >
          Neutral
        </button>
        <button
          onClick={() => handleClick("neg")}
          className={cur === 'neg'?"bg-white text-black p-5 rounded-e-full":"border-2 border-gray-500 p-5 rounded-e-full"}
        >
          Negative
        </button>
      </div>
      {cur === "pos" && <Table data={posData} />}
      {cur === "neu" && <Table data={neuData} />}
      {cur === "neg" && <Table data={negData} />}
    </div>
  );
};

export default Review;
