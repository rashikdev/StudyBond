import { useState } from "react";
import toast from "react-hot-toast";

const AskQuestion = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      e.target.reset();
      toast.success("Question submitted successfully!");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-2xl shadow-xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Ask a Question</h2>

      <input
        type="email"
        required
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded-md border"
      />

      <textarea
        required
        rows="4"
        placeholder="Type your question here..."
        className="w-full px-4 py-2 rounded-md border"
      ></textarea>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#37c386d3] text-white font-semibold py-2 rounded-md transition"
      >
        {submitting ? "Sending..." : "Submit Question"}
      </button>
    </form>
  );
};

export default AskQuestion;
