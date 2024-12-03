import { Helmet } from "react-helmet-async";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div className="mx-5 md:mx-0">
      <Helmet>
        <title>Lingo Bingo | Tutorials</title>
      </Helmet>
      <h2 className="text-center font-sora font-bold text-3xl md:pt-10 mb-3">
        Tutorial
      </h2>
      <p className="mb-14 text-center text-p font-semibold">
        Explore a wide range of tutorials designed to help you enhance your
        skills. From beginner to advanced, our tutorials are tailored to suit
        all <br /> learning levels. Start your learning journey with us today!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/s5aobqyEaMQ?si=I6brWQ6DPDTpaOh5"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/YysEVF3s0n8?si=99e-6VAvZBQ-e35R"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/szI7AvSlr4E?si=kVWmrPpJ5EHZTLUF"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/IYpojR8gc2c?si=kxX3JNQwzp1DCnZu"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/jXwwwU_ebVk?si=Y93eo-t-Nkz_8SE2"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/0KnUyy6pH-U?si=L8KWj7M_Z8xZ1t-c"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/EGona9AEtTk?si=LhRn2xo_K9_Mz9VK"
          width="100%"
          height="315"
        ></Iframe>
        <Iframe
          className="rounded-xl"
          url="https://www.youtube.com/embed/pfWqfxRa-T0?si=NCG5qG6jf2bQeZ7Z"
          width="100%"
          height="315"
        ></Iframe>
      </div>
      <button className="pt-10 pl-5 md:pl-0">
        <Link
          to="/startLearning"
          className="bg-primary py-3 px-4 rounded-sm text-lg text-white font-semibold"
        >
          Learn Vocabularies
        </Link>
      </button>
    </div>
  );
};

export default Tutorials;
