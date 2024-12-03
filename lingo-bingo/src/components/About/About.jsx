import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const About = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center mb-5">
        <img className="w-28" src={logo} alt="" />
      </div>
      <h2 className="text-4xl md:text-6xl font-bold font-sora text-center animate__animated animate__zoomIn">
        Lingo Bingo <br /> Korean Learning
      </h2>
      <p className="px-5 md:px-20 text-center py-8 text-p font-semibold">
        Welcome to Lingo Bingo! Your go-to platform for learning and mastering
        vocabulary in a fun, interactive way. Whether you&apos;re starting from
        scratch or looking to enhance your linguistic skills, Lingo Bingo makes
        it simple and enjoyable. Features: Learn new words with detailed
        meanings, pronunciations, and examples. Interactive lessons tailored to
        your chosen language. Tutorials and videos to help you grasp the basics.
        Log in to access your lessons and track your progress. Join a community
        of learners and take the first step <br /> towards fluency in your
        desired language.
      </p>
      <div className="flex items-center justify-center">
        <Link
          to="startLearning"
          className="py-3 px-10 bg-primary text-white font-bold text-lg font-sora rounded-md"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default About;
