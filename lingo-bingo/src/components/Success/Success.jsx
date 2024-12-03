import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Success = () => {
  const { animationValue } = useContext(AuthContext);
  return (
    <div className="mx-5 md:mx-0 lg:mx-20 mt-20">
      <motion.h2 {...animationValue} className="text-center text-4xl font-bold">
        Our Success
      </motion.h2>
      <motion.p
        {...animationValue}
        className="text-p font-semibold text-center mt-5 mb-10"
      >
        We’ve made tremendous progress in helping learners like you. Here’s a
        snapshot <br /> of our achievements.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <motion.div
          {...animationValue}
          className="flex flex-col items-center shadow-xl rounded-xl md:shadow-none md:rounded-none py-8"
        >
          <i className="fa-solid fa-user text-7xl"></i>
          <CountUp
            start={0}
            end={12000}
            duration={20}
            className="text-3xl font-bold text-primary py-5 font-sora"
          />
          <h2 className="font-bold">User</h2>
        </motion.div>
        <motion.div
          {...animationValue}
          className="flex flex-col items-center shadow-xl rounded-xl md:shadow-none md:rounded-none py-8"
        >
          <i className="fa-solid fa-person-chalkboard text-7xl"></i>
          <CountUp
            start={0}
            end={120}
            duration={20}
            className="text-3xl font-bold text-primary py-5 font-sora"
          />
          <h2 className="font-bold">Lesson</h2>
        </motion.div>
        <motion.div
          {...animationValue}
          className="flex flex-col items-center shadow-xl rounded-xl md:shadow-none md:rounded-none py-8"
        >
          <i className="fa-solid fa-language text-7xl"></i>
          <CountUp
            start={0}
            end={35000}
            duration={20}
            className="text-3xl font-bold text-primary py-5 font-sora"
          />
          <h2 className="font-bold">Vocabulary</h2>
        </motion.div>
        <motion.div
          {...animationValue}
          className="flex flex-col items-center shadow-xl rounded-xl md:shadow-none md:rounded-none py-8"
        >
          <i className="fa-solid fa-video text-7xl"></i>
          <CountUp
            start={0}
            end={450}
            duration={20}
            className="text-3xl font-bold text-primary py-5 font-sora"
          />
          <h2 className="font-bold">Tutorial</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
