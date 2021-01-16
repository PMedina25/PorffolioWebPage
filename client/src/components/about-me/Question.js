import React, { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Question = ({ title, info }) => {
  const [ showInfo, setShowInfo ] = useState(true);

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <article className="question" data-aos="fade-left">
      <header>
        <h4>{title}</h4>
        <button className="btn-question" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
