import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Challenge = () => {
  const { animationValue } = useContext(AuthContext);

  return (
    <div className="mx-5 md:mx-0 lg:mx-20 mt-32 md:mt-60">
      <motion.h2 {...animationValue} className="text-center text-4xl font-bold">
      Take the challenge now
      </motion.h2>
      <motion.p
        {...animationValue}
        className="text-p font-semibold text-center mt-5 mb-10"
      >
        Take your learning to the next level with challenges that push your
        boundaries. Whether you&apos;re starting or aiming for fluency, each
        level helps <br /> you grow and expand your language skills in a fun,
        interactive way.
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <motion.div
          {...animationValue}
          className="shadow-xl p-10 rounded-xl text-center"
        >
          <i className="fa-brands fa-readme text-4xl text-accent"></i>
          <h2 className="text-4xl font-bold font-gummy py-3">Easy</h2>
          <p className="text-p font-semibold">
            Start your journey with simple and fun challenges. Perfect for
            beginners to build confidence and learn at a steady pace
          </p>
          <button className="py-1 px-4 bg-black text-white font-bold rounded-full mt-5">
            <Link to="/startLearning">Challenge</Link>
          </button>
        </motion.div>
        <motion.div
          {...animationValue}
          className="shadow-xl p-10 rounded-xl text-center"
        >
          <i className="fa-brands fa-readme text-4xl text-warning"></i>
          <h2 className="text-4xl font-bold font-gummy py-3">Medium</h2>
          <p className="text-p font-semibold">
            Challenge your skills with moderately complex tasks. Great for
            learners looking to solidify their knowledge
          </p>
          <button className="py-1 px-4 bg-black text-white font-bold rounded-full mt-5">
            <Link to="/startLearning">Challenge</Link>
          </button>
        </motion.div>
        <motion.div
          {...animationValue}
          className="shadow-xl p-10 rounded-xl text-center"
        >
          <i className="fa-brands fa-readme text-4xl text-error"></i>
          <h2 className="text-4xl font-bold font-gummy py-3">Hard</h2>
          <p className="text-p font-semibold">
            Push your limits with advanced challenges. Perfect for those ready
            to master their expertise and conquer tough tasks
          </p>
          <button className="py-1 px-4 bg-black text-white font-bold rounded-full mt-5">
            <Link to="/startLearning">Challenge</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Challenge;
