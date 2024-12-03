import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const LetsLearn = ({ lesson }) => {
  const { animationValue } = useContext(AuthContext);
  const { id, title } = lesson;

  return (
    <motion.div {...animationValue}>
      <Link
        to={`/detail/${id}`}
        className="h-48 shadow-xl rounded-xl flex flex-col items-center justify-center text-center"
      >
        <i className="fa-brands fa-readme text-5xl mb-3"></i>
        <h2 className="text-3xl font-bold text-primary font-sora">{title}</h2>
      </Link>
    </motion.div>
  );
};

LetsLearn.propTypes = {
  lesson: PropTypes.object,
};

export default LetsLearn;
