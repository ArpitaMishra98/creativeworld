import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const spinTransition = {
  repeat: Infinity,
  ease: "linear",
  duration: 2,
};

export const AprilFoolsModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAprilFoolModalVisible, setIsAprilFoolModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show modal after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setIsAprilFoolModalVisible(true);
  };

  return isVisible ? (
    <div className="modal">
      <motion.div animate={{ rotate: 360 }} transition={spinTransition}>
        <Image
          src="https://cdn.svgator.com/images/2021/08/logo-animation-example-conversable.gif"
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
      <h2>Introducing Time Travel Feature!</h2>
      <p>Go back in time and edit your code before it breaks. Coming soon!</p>
      <button onClick={handleButtonClick}>Click Here</button>
      {isAprilFoolModalVisible && (
        <div className="aprilFoolModal">
          <p className="blinkingText">AprilFool</p>
        </div>
      )}
    </div>
  ) : null;
};
