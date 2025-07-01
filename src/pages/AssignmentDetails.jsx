import React, { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
const AssignmentDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [assignment, setAssignment] = useState({});
  const { thumbnail, title, description, difficulty, marks, dueDate, _id } =
    assignment;
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://study-bond-server.vercel.app/assignments/${id}`)
      .then((res) => res.json())
      .then((data) => setAssignment(data));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getBadgeColor = () => {
    if (difficulty === "Easy") return "bg-green-200 text-green-800";
    if (difficulty === "Medium") return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.status = "pending";
    data.email = user?.email;
    data.examinee = user?.displayName;
    data.marks = marks;
    data.title = title;
    data.id = _id;
    // send data to server
    await axiosSecure
      .post("/submitedassignment", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Assignment submitted successfully");
          form.reset();
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to submit assignment");
      });
    navigate("/pending-assignments");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 py-10 md:mt-30 mt-16 mb-5"
    >
      <div className="bg-gray-800 rounded-2xl p-6">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <div className="flex items-center justify-between">
          <h2 className="md:text-3xl text-lg font-bold mb-2 text-white">{title}</h2>
          <span
            className={`inline-block px-4 font-semibold py-1 rounded-full ${getBadgeColor()}`}
          >
            {difficulty}
          </span>
        </div>
        <p className="mb-4 text-gray-400">{description}</p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-white">
            Due Date: <strong className="text-yellow-400">{dueDate}</strong>
          </span>
          <span className="text-sm">
            Marks: <strong className="text-green-400">{marks}</strong>
          </span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="w-full text-lg font-semibold py-2 rounded-full cursor-pointer bg-base-100 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Take Assignment
        </button>
      </div>
      {open && (
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
            className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-gray-700 w-[90vw] h-fit md:h-[42vh] md:w-[40vw] rounded-2xl p-6 text-white"
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Google Docs Link</label>
              <input
                type="url"
                name="docsLink"
                required
                placeholder="Your Google Docs Link:"
                className="w-full border rounded-xl p-3 my-3"
              />
              <label htmlFor="">Quick Notes</label>
              <textarea
                required
                name="notes"
                type="text"
                minLength={20}
                placeholder="Your Quick Notes:"
                className="w-full border rounded-xl my-3 p-3"
                rows="4"
              />
              <div className="flex mt-5 justify-end gap-5 font-semibold">
                <motion.button
                  whileTap={{ scale: 0.3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setOpen(false)}
                  className="px-7 py-2 rounded-full cursor-pointer transition-all hover:shadow-[0_0_10px_white] bg-red-700"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.3 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  className="px-7 py-2 rounded-full cursor-pointer transition-all hover:shadow-[0_0_10px_white] bg-gradient-to-br to-green-600
                  from-black/40"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AssignmentDetails;
