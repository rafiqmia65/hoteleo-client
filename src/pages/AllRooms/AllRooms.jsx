import React, { useState, useEffect } from "react";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { BiSolidGrid } from "react-icons/bi";
import { MdTableRows } from "react-icons/md";
import { useLoaderData } from "react-router";
import TableView from "./TableView/TableView";
import CardView from "./CardView/CardView";
import axios from "axios";
import { Helmet } from "react-helmet";

const AllRooms = () => {
  const rooms = useLoaderData();
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePriceFilter = (e) => {
    e.preventDefault();

    const budget = e.target.budget.value;

    axios
      .get(`${import.meta.env.VITE_serverURL}/rooms?budget=${budget}`)
      .then((res) => {
        setFilteredRooms(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const savedIndex = localStorage.getItem("roomTabIndex");
    if (savedIndex !== null) {
      setSelectedIndex(parseInt(savedIndex));
    }
  }, []);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
    localStorage.setItem("roomTabIndex", index);
  };

  return (
    <div className="min-h-screen pt-30 pb-14 bg-base-200">
      <Helmet>
        <title>Hoteleo - All Rooms</title>
      </Helmet>
      <div className="container mx-auto px-5 lg:px-0">
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          {/* Filter and Tab Switch */}
          <div className="flex flex-wrap  px-5 py-2 justify-between items-center gap-4 mb-6">
            <form onSubmit={handlePriceFilter}>
              <div className="flex ">
                <select
                  name="budget"
                  className="select cursor-pointer select-bordered border-yellow-400 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  <option value="All">All</option>
                  <option value="0-1000">0 - 1000</option>
                  <option value="1001-1500">1001 - 1500</option>
                  <option value="1500+">1500 +</option>
                </select>
                <button
                  className="btn bg-yellow-500 border-yellow-500 text-white border-l-0 rounded-l-none"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            <TabList className="flex gap-2">
              <Tab
                className={({ selected }) =>
                  `btn btn-sm rounded-full px-4 py-1 font-medium ${
                    selected
                      ? "bg-yellow-400 text-white shadow-md"
                      : "bg-white text-yellow-600 border border-yellow-400"
                  }`
                }
              >
                <MdTableRows size={25} />
              </Tab>
              <Tab
                className={({ selected }) =>
                  `btn btn-sm rounded-full px-4 py-1 font-medium ${
                    selected
                      ? "bg-yellow-400 text-white shadow-md"
                      : "bg-white text-yellow-600 border border-yellow-400"
                  }`
                }
              >
                <BiSolidGrid size={25} />
              </Tab>
            </TabList>
          </div>

          {/* Tab Content */}
          <TabPanels>
            {/* Table View */}
            <TabPanel>
              <div className="overflow-x-auto rounded-xl mt-12 shadow-md bg-white border border-yellow-100">
                <table className="table w-full">
                  <thead className="bg-yellow-50 text-gray-600 font-semibold">
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th className="hidden lg:block">Features</th>
                      <th>Rating</th>
                      <th>Status</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRooms.map((room) => (
                      <TableView key={room._id} room={room} />
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>

            {/* Grid View */}
            <TabPanel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map((room) => (
                  <CardView key={room._id} room={room} />
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default AllRooms;
