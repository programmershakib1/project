import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { AuthContext } from "../../provider/AuthProvider";

const Documents = ({ data }) => {
  const [documents, setDocuments] = useState([]);
  const { animationValue } = useContext(AuthContext);

  useEffect(() => {
    setDocuments(data.slice(0, 3));
  }, [data]);

  return (
    <div className="mx-5 md:mx-0 lg:mx-20 mt-20 md:mt-28">
      <motion.h2
        {...animationValue}
        className="text-center text-4xl font-bold"
      >
        Documents
      </motion.h2>
      <motion.p
        {...animationValue}
        className="text-center text-p font-semibold mt-5 mb-16"
      >
        The Korean language (한국어, Hangugeo in Korean) is the official
        language of both South Korea and North Korea, spoken by approximately 80
        million <br /> people worldwide. It is unique in its structure, history,
        and cultural significance. Here&apos;s a detailed overview:
      </motion.p>
      <div>
        {documents.map((doc, idx) => (
          <motion.div {...animationValue} key={idx}>
            <div className="mt-5">
              <h4 className="font-bold text-lg pb-2">{doc?.title}</h4>
              <p className="text-p">{doc?.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => setDocuments(data)}
        hidden={documents.length > 9}
        className="bg-primary text-white py-2 px-6 rounded-md mt-5 font-bold"
      >
        Reade More
      </button>
      {documents.length > 9 ? (
        <button
          onClick={() => setDocuments(data.slice(0, 3))}
          className="bg-primary text-white py-2 px-6 rounded-md mt-5 font-bold"
        >
          See Less
        </button>
      ) : (
        " "
      )}
      {documents.length > 9 ? (
        <button className="mt-5 ml-5 underline">
          <a
            className="text-primary font-bold"
            href="https://en.wikipedia.org/wiki/Korean_language"
            target="-blank"
          >
            Reade More
          </a>
        </button>
      ) : (
        " "
      )}
    </div>
  );
};

Documents.propTypes = {
  data: PropTypes.array,
};

export default Documents;
