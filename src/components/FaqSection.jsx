import { motion } from "motion/react";
import { useState } from "react";
import toast from "react-hot-toast";
export default function App() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      e.target.reset();
      toast.success("Thanks! We’ll get back to you soon.");
      setSubmitting(false);
      setOpen(false);
    }, 1000);
  };
  return (
    <div className="md:w-10/12 mx-auto md:my-20 lg:my-50 overflow-hidden">
      <div className="lg:hidden pb-10">
        <h2 className="text-2xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col justify-between p-4"
        >
          <div className="hidden lg:block">
            <h2 className="text-5xl font-bold text-yellow-500">
              Frequently Asked Questions
            </h2>
          </div>
          <div className=" rounded-2xl h-[12rem] md:w-[26rem] bg-zinc-900 p-4 flex flex-col justify-between items-start text-white">
            <h3 className="text-2xl font-bold ">
              Still have a questions{" "}
              <span className="text-green-500 text-3xl animate-pulse">?</span>
            </h3>
            <p className="text-zinc-400">
              We’re just a message away — let’s get your questions answered.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="text-green-500 rounded-2xl p-2 bg-gradient-to-br to-emerald-800 font-semibold cursor-pointer"
            >
              Ask Your Question
            </button>
          </div>
        </motion.div>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-5"
          >
            <div className="collapse collapse-arrow">
              <input defaultChecked type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold border-l-4 border-green-500">
                Who can create assignments?
              </div>
              <div className="collapse-content text-sm border-l-4">
                Any registered user can create assignments. All users are
                considered friends and collaborators.
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold border-l-4 border-green-500">
                Can I grade my own submitted assignment?
              </div>
              <div className="collapse-content text-sm border-l-4">
                No, you can only evaluate assignments submitted by others. This
                helps maintain fairness in peer grading.
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold border-l-4 border-green-500">
                Can I grade my own submitted assignment?
              </div>
              <div className="collapse-content text-sm border-l-4">
                No, you can only evaluate assignments submitted by others. This
                helps maintain fairness in peer grading.
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold border-l-4 border-green-500">
                Is STUDY BOND free to use?
              </div>
              <div className="collapse-content text-sm border-l-4">
                Yes! STUDY BOND is completely free for all users. It’s built to
                encourage collaborative learning.
              </div>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold border-l-4 border-green-500">
                How is my data secured?
              </div>
              <div className="collapse-content text-sm border-l-4">
                We use Firebase Authentication and environment-protected APIs,
                along with JWT tokens to ensure user data is safe.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed h-[100vh] w-[100vw] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black/20 text-white backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 inset-0 bg-gray-700 w-[90vw] h-fit lg:h-[42vh] lg:w-[40vw] rounded-2xl p-6"
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Your Email</label>
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                className="w-full border rounded-xl p-3 my-3"
              />
              <label htmlFor="">Question</label>
              <textarea
                required
                type="text"
                placeholder="Write Your Question"
                className="w-full border rounded-xl my-3 p-3"
                rows="4"
              />
              <div className="flex mt-5 justify-end gap-5 font-semibold">
                <motion.button
                  whileTap={{ scale: 0.3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setOpen(false)}
                  className="px-7 py-2 rounded-full cursor-pointer transition-all shadow-[0_0_10px_white] bg-red-700"
                >
                  Cancel
                </motion.button>
                <motion.button
                  disabled={submitting}
                  whileTap={{ scale: 0.3 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  className="px-7 py-2 rounded-full cursor-pointer transition-all  shadow-[0_0_10px_white] bg-white text-black"
                >
                  {submitting ? "Sending..." : "Send"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
