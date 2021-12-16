import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
export default function SectionHeader({ children }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="position-relative d-inline-block"
    >
      {children}
      <motion.div
        style={{
          background: "#f1c40f",
          width: "100%",
          height: "5px",
        }}
        variants={{
          rest: {
            width: 0,
            duration: 0.2,
          },
          hover: {
            width: "100%",
          },
        }}
      />
    </motion.div>
  );
}
