import { MdDeleteForever } from "react-icons/md";
import { RiTimelineView } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { motion } from "motion/react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { use } from "react";
import toast from "react-hot-toast";

const AssignmentCard = ({
  assignment,
  handleDelete,
  setOpen,
  handleGetIdAndAssignment,
}) => {
  const { thumbnail, title, marks, difficulty, _id } = assignment;

  const { user } = use(AuthContext);

  const getBadgeColor = () => {
    if (difficulty === "Easy") return "bg-green-200 text-green-800";
    if (difficulty === "Medium") return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };

  const handleModal = () => {
    if (!assignment.email || assignment.email !== user?.email)
      return toast.error("You are not authorized to update this assignment.");
    setOpen(true);
    handleGetIdAndAssignment(_id, assignment);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 text-white shadow-md rounded-2xl overflow-hidden min-h-[370px] flex flex-col"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full ${getBadgeColor()}`}
            >
              {difficulty}
            </span>
          </div>
          <p className="text-sm">
            Marks: <span className="font-medium">{marks}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-6 mt-4">
          <button
            onClick={() => handleDelete(_id, assignment)}
            data-tip="Delete"
            className="tooltip tooltip-error cursor-pointer"
          >
            <MdDeleteForever size={30} color="red" />
          </button>
          <button
            onClick={handleModal}
            data-tip="Update"
            className="tooltip tooltip-warning cursor-pointer"
          >
            <RxUpdate size={25} color="yellow" />
          </button>
          <Link to={`/assignment/${_id}`}>
            <button
              data-tip="View"
              className="tooltip tooltip-info cursor-pointer"
            >
              <RiTimelineView
                size={27}
                color="LightBlue"
                className="rounded-2xl"
              />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentCard;
