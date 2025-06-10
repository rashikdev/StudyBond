import React, { use, useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import axiosSecure from "../utils/axiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Assignments = () => {
  const initialAssignments = useLoaderData();
  const [assignments, setAssignments] = useState(initialAssignments);
  const [open, setOpen] = useState(false);

  const [Id, setId] = useState(null);
  const [specificAssignment, setSpecificAssignment] = useState(null);

  const { user } = use(AuthContext);

  const handleDelete = (id, assignment) => {
    if (!assignment.email || assignment.email !== user?.email)
      return toast.error("You are not authorized to delete this assignment.");
    Swal.fire({
      width: 450,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#27ae60",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/assignments/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              toast.success("Assignment deleted successfully");
              setAssignments((prev) => prev.filter((a) => a._id !== id));
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handleGetIdAndAssignment = (id, assignment) => {
    setId(id);
    setSpecificAssignment(assignment);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    axiosSecure
      .put(`/assignments/${Id}`, data)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Assignment updated successfully");
          setAssignments((prev) =>
            prev.map((a) => (a._id === Id ? specificAssignment : a))
          );
          setOpen(false);
        }
      })
      .catch((error) => {
        toast.error("Failed to update assignment");
      });
  };

  const handleSearch = async (e) => {
    const searchTerm = e.target.value;
    try {
      const searchedAssignments = await axiosSecure.get(
        `/assignments?search=${searchTerm}`
      );
      setAssignments(searchedAssignments.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilter = async (e) => {
    const filterValue = e.target.value;
    try {
      const filteredAssignments = await axiosSecure.get(
        `/assignments?difficulty=${filterValue}`
      );
      setAssignments(filteredAssignments.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-40 mb-10">
      <div className="w-11/12 mx-auto mb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-text-white mb-4"
        >
          Browse Assignments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto mb-6"
        >
          Discover all available assignments, filter by difficulty, and find
          tasks that challenge and grow your skills. Use the search box to find
          a specific one quickly.
        </motion.p>
        <input
          onChange={handleSearch}
          type="search"
          placeholder="Search by title ..."
          className="w-full md:w-1/2 px-4 py-2 my-5 border-1 border-gray-500 rounded-full outline-none"
        />
      </div>
      <div className="flex justify-end items-center gap-2 mb-8">
        <h4 className="font-semibold text-xl">Filter :</h4>
        <select
          onChange={handleFilter}
          name="difficulty"
          className="border-1 border-gray-500 p-1 rounded-2xl bg-base-100"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
            setOpen={setOpen}
            handleGetIdAndAssignment={handleGetIdAndAssignment}
          ></AssignmentCard>
        ))}
      </div>

      {open && specificAssignment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed h-[100vh] w-[100vw] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-gray-700 w-[90vw] h-[60vh] md:w-[55vw] rounded-2xl flex flex-col items-center justify-center gap-4"
          >
            <div className="">
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="flex flex-col gap-2 md:flex-row md:space-x-4">
                  <div className="flex-1">
                    <label className="w-full font-medium mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={specificAssignment.title}
                      onChange={(e) =>
                        setSpecificAssignment((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="w-full border rounded-lg px-4 py-4 my-3"
                      placeholder="Enter assignment title"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="w-full font-medium mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={specificAssignment.description}
                      onChange={(e) =>
                        setSpecificAssignment((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      className="w-full border rounded-lg px-4 py-2 h-20 md:h-[56px] my-3"
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
                      value={specificAssignment.marks}
                      onChange={(e) =>
                        setSpecificAssignment((prev) => ({
                          ...prev,
                          marks: e.target.value,
                        }))
                      }
                      className="w-full border rounded-lg px-4 py-4 my-3"
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
                      value={specificAssignment.thumbnail}
                      onChange={(e) =>
                        setSpecificAssignment((prev) => ({
                          ...prev,
                          thumbnail: e.target.value,
                        }))
                      }
                      className="w-full border rounded-lg px-4 py-4 my-3"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:space-x-4">
                  <div className="flex-1">
                    <label className="w-full font-medium mb-1">
                      Difficulty Level
                    </label>
                    <select
                      name="difficulty"
                      value={specificAssignment.difficulty || ""}
                      onChange={(e) =>
                        setSpecificAssignment((prev) => ({
                          ...prev,
                          difficulty: e.target.value,
                        }))
                      }
                      className="w-full border rounded-lg px-4 py-4 my-3"
                      required
                    >
                      <option className="text-black" value="easy">
                        Easy
                      </option>
                      <option className="text-black" value="medium">
                        Medium
                      </option>
                      <option className="text-black" value="hard">
                        Hard
                      </option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="w-full font-medium mb-1">Due Date</label>
                    <div className="w-full my-3">
                      <DatePicker
                        dateFormat="dd-MM-yyyy"
                        name="dueDate"
                        selected={
                          specificAssignment?.dueDate &&
                          !isNaN(new Date(specificAssignment.dueDate))
                            ? new Date(specificAssignment.dueDate)
                            : null
                        }
                        onChange={(date) =>
                          setSpecificAssignment((prev) => ({
                            ...prev,
                            dueDate: date,
                          }))
                        }
                        placeholderText="Select due date"
                        className="w-full border rounded-lg px-4 py-4"
                        wrapperClassName="w-full"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 justify-end py-3">
                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="bg-red-600 text-white rounded-md hover:bg-red-400 transition px-4 py-2 cursor-pointer font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white rounded-md hover:bg-green-700 transition px-4 py-2 cursor-pointer font-bold"
                  >
                    Update Assignment
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Assignments;
