import React, { use, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import useAxiosSecure from "../hooks/useAxiosSecure";
const CreateAssignment = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = use(AuthContext);
  const [dueDate, setDueDate] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.dueDate = dueDate.toLocaleDateString();
    data.email = user?.email;
    // send data to server
    axiosSecure
      .post("/assignments", data)
      .then((res) => {
        toast.success("Assignment created successfully");
        form.reset();
        setDueDate(null);
        navigate("/assignments");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to create assignment");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-34 mb-20 lg:w-9/12 mx-auto p-6 md:p-10 rounded-xl bg-zinc-900 text-white"
    >
      <h2 className="text-2xl font-semibold mb-10 text-center">
        Create an Assignment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="flex flex-col gap-2 md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="w-full font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              className="w-full bg-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-4 my-3 focus:outline-none"
              placeholder="Enter assignment title"
              required
            />
          </div>
          <div className="flex-1">
            <label className="w-full font-medium mb-1">Description</label>
            <textarea
              type="text"
              name="description"
              className="w-full bg-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-4 h-20 md:h-[56px] my-3 focus:outline-none"
              placeholder="Enter assignment description"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="w-full font-medium mb-1">Marks</label>
            <input
              type="number"
              name="marks"
              className="w-full bg-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-4 my-3 focus:outline-none"
              placeholder="Enter total marks"
              required
            />
          </div>

          <div className="flex-1">
            <label className="w-full font-medium mb-1">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              name="thumbnail"
              className="w-full bg-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-4 my-3 focus:outline-none"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="w-full font-medium mb-1">Difficulty Level</label>
            <select
              name="difficulty"
              className="w-full bg-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-4 my-3 focus:outline-none"
              required
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="w-full font-medium mb-1">Due Date</label>
            <div className="w-full my-3">
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat="dd-MM-yyyy"
                placeholderText="Select due date"
                className="w-full bg-gray-700 placeholder:text-gray-400 rounded-lg px-4 py-4"
                wrapperClassName="w-full"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-lg font-semibold py-2 rounded-full cursor-pointer bg-black shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-base-400"
        >
          Create Assignment
        </button>
      </form>
    </motion.div>
  );
};

export default CreateAssignment;
