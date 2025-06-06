import { motion } from "motion/react";
import AskQuestion from "./AskQuestion";
export default function App() {
  return (
    <div className="w-10/12 mx-auto my-10">
      <motion.h3
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-semibold mb-20 text-center"
      >
        Frequently Asked Questions
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" border rounded-2xl"
        >
          <div className="collapse collapse-arrow ">
            <input defaultChecked  type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Who can create assignments?
            </div>
            <div className="collapse-content text-sm">
              Any registered user can create assignments. All users are
              considered friends and collaborators.
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Can I grade my own submitted assignment?
            </div>
            <div className="collapse-content text-sm">
              No, you can only evaluate assignments submitted by others. This
              helps maintain fairness in peer grading.
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Can I grade my own submitted assignment?
            </div>
            <div className="collapse-content text-sm">
              No, you can only evaluate assignments submitted by others. This
              helps maintain fairness in peer grading.
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Is STUDY BOND free to use?
            </div>
            <div className="collapse-content text-sm">
              Yes! STUDY BOND is completely free for all users. It’s built to
              encourage collaborative learning.
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How is my data secured?
            </div>
            <div className="collapse-content text-sm">
              We use Firebase Authentication and environment-protected APIs,
              along with JWT tokens to ensure user data is safe.
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="border rounded-2xl"
        >
          <AskQuestion></AskQuestion>
        </motion.div>
      </div>
    </div>
  );
}
