import React from "react";
import hand from "../assets/hand.svg";

const Contact = (props) => {
  const { data } = props;
  return (
    <section id="contact">
      <div className="bg-contactPrimary dark:bg-contactPrimaryDark pt-20">
        <div className="w-2/3 mx-auto">
          <div className="text-4xl font-semibold mb-16">
            <p>{data.contact.title1}</p>
            <p>{data.contact.title2}</p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between  pb-36">
            <div className="flex gap-2 pb-16">
              <img src={hand} alt="" />
              <div className="text-contactRed text-xl underline">
                www.github.com/hamdiboyraz
              </div>
            </div>
            <div className="flex justify-between gap-5 font-medium text-lg">
              <div className="text-contactT1">{data.contact.personalBlog}</div>
              <a
                href="https://www.github.com/hamdiboyraz"
                target="_blank"
                className="text-contactT2"
              >
                Github
              </a>
              <div className="text-contactT3">Linkedin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
