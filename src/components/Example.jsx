import { motion, useTransform, useScroll, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import "./Example.css"
import image1 from "../assets/resources/1.jpg";
import image2 from "../assets/resources/2.jpg";
import image3 from "../assets/resources/3.jpg";
import image4 from "../assets/resources/4.jpg";
import image5 from "../assets/resources/5.jpg";
import image6 from "../assets/resources/6.jpg";
import image7 from "../assets/resources/7.jpg";
import image8 from "../assets/resources/8.jpg";
import image9 from "../assets/resources/9.jpg";
import image10 from "../assets/resources/10.jpg";
import image11 from "../assets/resources/11.jpg";
import image12 from "../assets/resources/12.jpg";
import image13 from "../assets/resources/13.jpg";
import image14 from "../assets/resources/14.jpg";
import image15 from "../assets/resources/15.jpg";
import image16 from "../assets/resources/16.jpg";
import image17 from "../assets/resources/17.jpg";
import image18 from "../assets/resources/18.jpg";
import image19 from "../assets/resources/19.jpg";
import image20 from "../assets/resources/20.jpg";
import image21 from "../assets/resources/21.jpg";
import image22 from "../assets/resources/22.jpg";
import image23 from "../assets/resources/23.jpg";
import image24 from "../assets/resources/24.jpg";
import image25 from "../assets/resources/25.jpg";
import image26 from "../assets/resources/26.jpg";
import image27 from "../assets/resources/27.jpg";
import image28 from "../assets/resources/28.jpg";
import image29 from "../assets/resources/29.jpg";
import image30 from "../assets/resources/30.jpg";
import image31 from "../assets/resources/31.jpg";
import image32 from "../assets/resources/32.jpg";
import image33 from "../assets/resources/33.jpg";
import image34 from "../assets/resources/34.jpg";
import image35 from "../assets/resources/35.jpg";
import image36 from "../assets/resources/36.jpg";
import image37 from "../assets/resources/37.jpg";
import image38 from "../assets/resources/38.jpg";
import image39 from "../assets/resources/39.jpg";
import image40 from "../assets/resources/40.jpg";
import image41 from "../assets/resources/41.jpg";
import image42 from "../assets/resources/42.jpg";
import image43 from "../assets/resources/43.jpg";
import image44 from "../assets/resources/44.jpg";
import image45 from "../assets/resources/45.jpg";
import image46 from "../assets/resources/46.jpg";
import image47 from "../assets/resources/47.jpg";


const Example = () => {
  const sections = [
    {
      id: 1,
      text: "Chairperson",
      images: [
        image1
      ],
    },
    {
      id: 2,
      text: "Co-Chairperson",
      images: [
       image2,
       image3,
       image4,
       image5,
       image6
      ],
    },
    {
      id: 3,
      text: "Vice Chairperson (Marketing)",
      images: [
        image7,
        image8,
      ],
    },
    {
        id: 4,
        text: "Vice Chairperson (Admin)",
        images: [
          image9,
          image10
        ],
      },
      {
        id: 5,
        text: "Vice Chairperson (Creatives)",
        images: [
          image11,
          image12
        ],
      },
      {
        id: 6,
        text: "Vice Chairperson (Finance)",
        images: [
          image13
        ],
      },
      {
        id: 7,
        text: "Vice Chairperson (Sponsership)",
        images: [
          image16
        ],
      },
      {
        id: 8,
        text: "Vice Chairperson (Events)",
        images: [
          image14,
          image15
        ],
      },
      {
        id: 9,
        text: "Vice Chairperson (Publicity)",
        images: [
          image17,
          image18
        ],
      },
      {
        id: 10,
        text: "Vice Chairperson (Hospitality)",
        images: [
          image19,
          image20
        ],
      },
      {
        id: 11,
        text: "Vice Chairperson (Operations)",
        images: [
          image21,
          image22
        ],
      },
      {
        id: 12,
        text: "Technical Secretary",
        images: [
            image23,
            image24,
            image25
        ],
      },
      {
        id: 13,
        text: "Cultural Secretary",
        images: [
          image26,
          image27,
          image28
        ],
      },
      {
        id: 14,
        text: "Sports Secretary",
        images: [
          image29,
          image30,
          image31
        ],
      },
      {
        id: 15,
        text: "HOD - Security",
        images: [
          image32,
          image33,
        ],
      },
      {
        id: 16,
        text: "HOD - Sports",
        images: [
          image34,
          image35,
          image36
        ],
      },
      {
        id: 17,
        text: "HOD - Operations",
        images: [
          image37,
          image38
        ],
      },
      {
        id: 18,
        text: "HOD - Finance",
        images: [
          image39,
          image40
        ],
      },
      {
        id: 19,
        text: "HOD - Technical",
        images: [
            image41,
            image42
        ],
      },
      {
        id: 20,
        text: "HOD - Publicity",
        images: [
          image43,
          image44
        ],
      },
      {
        id: 21,
        text: "HOD - Creatives",
        images: [
          image46
        ],
      },
      {
        id: 22,
        text: "Editorial",
        images: [
          image45
        ],
      },
      {
        id: 23,
        text: "Artist Relations",
        images: [
          image47
        ],
      },
  ];

  return (
    <div className="example-container">
        <div className="sticky-header">Core Team</div>
      {sections.map((section) => (
        <HorizontalScrollSection
          key={section.id}
          text={section.text}
          images={section.images}
        />
      ))}
    </div>
  );
};

const HorizontalScrollSection = ({ text, images }) => {
  const targetRef = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-700%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 5},
    });
  }, [scrollYProgress]);

  return (
    <section ref={targetRef} className="horizontal-scroll-section">
      <div className="sticky-container">
        <motion.div
          className="text-container"
          animate={controls}
          style={{ opacity }}
        >
          <h2 className="section-title">{text}</h2>
        </motion.div>
        <div className="images-container">
          <motion.div style={{ x }} className="images-wrapper">
            {images.map((url, index) => (
              <motion.div
                key={index}
                className="image-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 5,
                  delay: index * 0.5, 
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="image-background"
                ></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Example;
