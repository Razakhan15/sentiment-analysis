import PieChart from "./PieChart";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AdminData = () => {
  const datasets = [
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
    [
      { name: "Postive", value: 30 },
      { name: "Negative", value: 60 },
      { name: "Neutral", value: 10 },
    ],
  ];
  return (
    <div className="h-screen">
      <div className="mt-10 flex items-center justify-center">
        <h2 className="text-white text-center text-2xl">
          Analysis of your Reviews
        </h2>
        <Link to="/">
          <button
            className="bg-richblack-800 text-white py-[8px] px-[12px] ml-5  rounded-[8px] border border-richblack-700"
            onClick={() => {
              toast.success("Logged out");
            }}
          >
            Log out
          </button>
        </Link>
      </div>

      <div className="text-white mt-20 flex justify-center flex-wrap max-w-[1400px] gap-20 mx-auto">
        <div className="h-1/4 w-1/4 p-20 text-center border-2 border-gray-500 text-2xl font-bold ease-out transform hover:scale-125 transition duration-500 inline">
          <Link to={"/admindatapage/cleanliness"}>Cleanliness</Link>
        </div>
        <div className="h-1/4 w-1/4 p-20 text-center border-2 border-gray-500 text-2xl font-bold ease-out transform hover:scale-125 transition duration-500 inline">
          <Link to={"/admindatapage/train_delay"}>Train Delay</Link>
        </div>
        <div className="h-1/4 w-1/4 p-20 text-center border-2 border-gray-500 text-2xl font-bold ease-out transform hover:scale-125 transition duration-500 inline">
          <Link to={"/admindatapage/ticket_issues"}>Ticket Issue</Link>
        </div>
        <div className="h-1/4 w-1/4 p-20 text-center border-2 border-gray-500 text-2xl font-bold ease-out transform hover:scale-125 transition duration-500 inline">
          <Link to={"/admindatapage/medical_issues"}>Medical Issue</Link>
        </div>
        <div className="h-1/4 w-1/4 p-20 text-center border-2 border-gray-500 text-2xl font-bold ease-out transform hover:scale-125 transition duration-500 inline">
          <Link to={"/admindatapage/food_services"}>Food Service</Link>
        </div>
        <div className="h-1/4 w-1/4 p-20 text-center border-2 border-gray-500 text-2xl font-bold ease-out transform hover:scale-125 transition duration-500 inline">
          <Link to={"/admindatapage/others"}>Others</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminData;
