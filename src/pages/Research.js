import React from "react";
import { faqs } from "../utils/constants";

const Research = () => {
  return (
    <main className="research">
      <div className="container">
        <header>
          <h3>RESEARCH</h3>
        </header>
        <div className="research-content">
          <div className="top-heading">Research Topics</div>
          <div className="content">
            <ul>
              <li>Drinking-Water Supply and Treatment</li>
              <li>Geochemical Processes in Soil and Ground Water </li>
              <li>Environmental Impacts of Fossil Energy Byproducts</li>
            </ul>
            <div className="research-img">
              <img
                src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="research"
              />
            </div>
          </div>
        </div>
        <div className="faqs">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            {faqs.map((faq, index) => (
              <div key={index} class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index}`}
                  >
                    {faq.heading}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    {faq.content.map((item, index) => (
                      <div key={index} className="content-repeat">
                        <h6>{item.title}</h6>
                        <p className="para">{item.para}</p>
                        <p>{item.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Research;
