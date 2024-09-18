import React, { useState } from "react";
import { faq } from "../../dummydata";
import Title from "../common/title/Title";

const Faq = () => {
  console.log("Faq component rendered");
  console.log("faq:", faq);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    console.log("Toggling index:", index);
    setExpandedIndex(expandedIndex === index ? null : index);
    console.log("expandedIndex:", expandedIndex);
  }

  if (!faq) {
    return <div>No FAQs available</div>;
  }

  return (
    <>
      <Title subtitle='FAQS' title='Frequently Asked Questions' />
      <section className='faq'>
        <div className='container'>
          {faq.map((val, index) => {
            if (!val) {
              return null;
            }

            return (
              <div className='box'>
                <button className='accordion' onClick={() => toggle(index)} key={index}>
                  <h2>{val.title}</h2>
                  <span>{expandedIndex === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                </button>
                {expandedIndex === index ? (
                  <div className='text'>
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;