import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useG11n } from "next-g11n";
import dictionary from "app/locales/dictionary";
export default function Loading({ children, variant = "dark", stillLoad }) {
  const { translate: t } = useG11n(dictionary);
  const [longLoading, setLongLoading] = useState(false);
  const loadingContainer = {
    width: "5rem",
    height: "2rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const loadingCircle = {
    display: "block",
    width: "20px",
    height: "20px",
    backgroundColor: variant == "dark" ? "black" : "white",
    borderRadius: "100px",
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "50%",
    },
    end: {
      y: "150%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  useEffect(() => {
    const timer = setTimeout(function () {
      setLongLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    longLoading && (
      <div className="d-flex gap-5 flex-column align-items-center">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
        <span>{t("loading")}</span>
      </div>
    )
  );
}
