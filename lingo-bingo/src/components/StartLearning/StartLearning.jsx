import { Link, useLoaderData } from "react-router-dom";
import LetsLearn from "../LetsLearn/LetsLearn";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const StartLearning = () => {
  const lessons = useLoaderData();
  const { user } = useContext(AuthContext);
  
  return (
    <div className="">
      <Helmet>
        <title>
          Lingo Bingo | Let’s Learn{" "}
          {`${user?.displayName ? user.displayName : "User"}`}
        </title>
      </Helmet>
      <h2 className="text-center font-sora font-bold text-3xl mb-10 md:pt-10">
        Let’s Learn
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mx-5 md:mx-0">
        {lessons.map((lesson, idx) => (
          <LetsLearn key={idx} lesson={lesson}></LetsLearn>
        ))}
      </div>
      <button className="mt-10 ml-5 md:ml-0">
        <Link
          to="/tutorials"
          className="bg-primary py-2 px-6 rounded-sm text-white font-bold"
        >
          View more
        </Link>
      </button>
    </div>
  );
};

export default StartLearning;
