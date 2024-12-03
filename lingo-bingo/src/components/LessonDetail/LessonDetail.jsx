import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from "framer-motion";

const LessonDetail = () => {
  const data = useLoaderData();
  const [lessons, setLessons] = useState();
  const { animationValue } = useContext(AuthContext);

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Japanese
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <Helmet>
        <title>
          Lingo Bingo | Lesson{" "}
          {`${data[0]?.lesson_no ? data[0].lesson_no : "User"}`}
        </title>
      </Helmet>
      <h2 className="text-3xl font-sora font-bold text-center mb-10 md:pt-10">
        Lesson {data[0].lesson_no}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-0">
        {data.map((lesson, idx) => (
          <motion.div
            onClick={() => pronounceWord(lesson?.word)}
            key={idx}
            {...animationValue}
            className={`shadow-xl rounded-xl font-semibold p-10 ${
              lesson?.difficulty == "easy" ? "bg-accent" : ""
            }${lesson?.difficulty == "medium" ? "bg-warning text-black" : ""}${
              lesson?.difficulty == "difficult" ? "bg-error text-white" : ""
            }`}
          >
            <h4
              className={`text-2xl font-bold py-2 ${
                lesson?.difficulty == "easy" ? "text-black" : ""
              }${lesson?.difficulty == "medium" ? "text-black" : ""}${
                lesson?.difficulty == "difficult" ? "text-white" : ""
              }`}
            >
              Word : {lesson?.word}
            </h4>
            <p>Meaning : {lesson?.meaning}</p>
            <p>Pronunciation : {lesson?.pronunciation}</p>
            <p>Part of speech : {lesson?.part_of_speech}</p>
            <button
              className={`py-1 px-4 font-gummy rounded-full mt-3 font-semibold ${
                lesson?.difficulty == "easy" ? "bg-white text-black" : ""
              } ${
                lesson?.difficulty == "medium" ? "bg-white text-black" : ""
              } ${
                lesson?.difficulty == "difficult" ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                setLessons(lesson);
                document.getElementById("my_modal_5").showModal();
              }}
            >
              When to say
            </button>
          </motion.div>
        ))}
        <dialog id="my_modal_5" className="modal sm:modal-middle">
          <div className="modal-box flex flex-col justify-center items-center py-10 text-center font-semibold">
            <h4 className="text-3xl font-bold py-2 text-primary mb-5">
              Word : {lessons?.word}
            </h4>
            <p>Meaning : {lessons?.meaning}</p>
            <p className="py-3">When to say : {lessons?.when_to_say}</p>
            <p>Example : {lessons?.example}</p>
            <div className="modal-action">
              <form className="mx-auto" method="dialog">
                <button className="border rounded-full w-32 py-1 bg-primary text-white font-semibold">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <button className="mt-10 ml-5 md:ml-0">
        <Link
          to="/startLearning"
          className="bg-primary py-2 px-6 rounded-sm text-white font-bold"
        >
          Back to Lesson
        </Link>
      </button>
    </div>
  );
};

export default LessonDetail;
