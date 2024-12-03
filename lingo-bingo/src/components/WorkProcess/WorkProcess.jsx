import { useContext } from "react";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";
import work6 from "../../assets/work6.png";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthProvider";

const WorkProcess = () => {
  const { animationValue } = useContext(AuthContext);

  return (
    <div className="mx-5 md:mx-0 lg:mx-20 md:space-y-10 lg:space-y-0 font-round mt-20">
      <motion.h2
        {...animationValue}
        className="text-center font-sans text-4xl font-bold"
      >
        Our Work Process
      </motion.h2>
      <motion.p
        {...animationValue}
        className="text-p font-semibold text-center pt-5"
      >
        Our structured approach ensures a seamless journey from start to finish.
        By understanding your needs, crafting innovative solutions, and
        delivering <br /> with precision, we aim to make every step of the
        process meaningful and impactful.
      </motion.p>
      <motion.div
        {...animationValue}
        className="grid grid-cols-1 md:grid-cols-2 shadow-xl md:shadow-none rounded-xl md:rounded-none p-5 md:p-0"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-gummy text-5xl text-primary font-bold mb-5">
            Road to knowledge
          </h2>
          <p className="text-p font-semibold">
            Embarking on the road to knowledge is the first step toward
            unlocking your true potential. This journey is designed to inspire
            curiosity, promote critical thinking, and provide a structured
            pathway to mastery. From foundational concepts to advanced insights,
            we guide you through each milestone with clarity and purpose,
            ensuring you never lose sight of your goals.
          </p>
        </div>
        <div className="lg:h-96 md:h-72">
          <img className="w-full h-full" src={work1} alt="" />
        </div>
      </motion.div>
      <motion.div
        {...animationValue}
        className="grid grid-cols-1 md:grid-cols-2 shadow-xl md:shadow-none rounded-xl md:rounded-none p-5 md:p-0"
      >
        <div className="lg:h-96 md:h-72">
          <img className="w-full h-full" src={work2} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-gummy text-5xl text-primary font-bold mb-5">
            Vocabulary
          </h2>
          <p className="text-p font-semibold">
            Building a strong vocabulary is the foundation of effective
            communication and deeper understanding. Our platform offers curated
            word lists, contextual meanings, and practical examples to make
            learning new words engaging and memorable. Whether you&apos;re
            expanding your language skills, preparing for challenges, or
            exploring a new culture, we provide the tools you need to grow your
            vocabulary with confidence.
          </p>
        </div>
      </motion.div>
      <motion.div
        {...animationValue}
        className="grid grid-cols-1 md:grid-cols-2 shadow-xl md:shadow-none rounded-xl md:rounded-none p-5 md:p-0"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-gummy text-5xl text-primary font-bold mb-5">
            Video Tutorial
          </h2>
          <p className="text-p font-semibold">
            Video tutorials offer a dynamic and engaging way to learn at your
            own pace. With step-by-step guidance, visual demonstrations, and
            expert insights, we aim to make complex topics simple and
            accessible. Whether you&apos;re mastering new skills, exploring
            advanced concepts, or seeking creative inspiration, our video
            tutorials are designed to support and enhance your learning journey
            anytime, anywhere.
          </p>
        </div>
        <div className="lg:h-96 md:h-72">
          <img className="w-full h-full" src={work3} alt="" />
        </div>
      </motion.div>
      <motion.div
        {...animationValue}
        className="grid grid-cols-1 md:grid-cols-2 shadow-xl md:shadow-none rounded-xl md:rounded-none p-5 md:p-0"
      >
        <div className="lg:h-96 md:h-72">
          <img className="w-full h-full" src={work4} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-gummy text-5xl text-primary font-bold mb-5">
            Online Support
          </h2>
          <p className="text-p font-semibold">
            In today&apos;s interconnected world, we offer dedicated online
            support to empower your learning journey. Our team ensures you have
            access to timely assistance, resources, and expert guidance at your
            fingertips. Whether it&apos;s solving queries, providing technical
            help, or offering personalized advice, we&apos;re here to support
            you—anytime, anywhere. Together, we make your self-learning
            experience seamless and successful.
          </p>
        </div>
      </motion.div>
      <motion.div
        {...animationValue}
        className="grid grid-cols-1 md:grid-cols-2 shadow-xl md:shadow-none rounded-xl md:rounded-none p-5 md:p-0"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="font-gummy text-5xl text-primary font-bold mb-5">
            Success factors
          </h2>
          <p className="text-p font-semibold">
            Achieving success is never accidental—it’s the result of essential
            factors aligned with your vision and goals. We focus on fostering
            determination, strategic planning, adaptability, and continuous
            improvement to ensure sustainable growth. By leveraging
            opportunities, overcoming challenges, and unlocking your true
            potential, we help you navigate the path to success with confidence
            and clarity.
          </p>
        </div>
        <div className="lg:h-96 md:h-72">
          <img className="w-full h-full" src={work5} alt="" />
        </div>
      </motion.div>
      <motion.div
        {...animationValue}
        className="flex items-center justify-center h-52 pt-36"
      >
        <div>
          <img className="w-full h-full" src={work6} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default WorkProcess;
