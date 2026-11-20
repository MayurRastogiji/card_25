
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Envelope.css";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div
      className="envelope-scene"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className="envelope-eyebrow">
        A SPECIAL CELEBRATION AWAITS
      </p>

      <div className="envelope-wrapper">

        <div className="envelope-back" />

        <motion.div
          className="invitation-letter"
          initial={{ y: 0 }}
          whileHover={{ y: -15 }}
          transition={{ duration: 0.4 }}
        >
          <span className="script-font">
            You are invited
          </span>

          <Heart size={24} />
        </motion.div>

        <div className="envelope-front">
          <div className="envelope-fold-left" />
          <div className="envelope-fold-right" />
          <div className="envelope-fold-bottom" />
        </div>

        <motion.button
          className="wax-seal"
          onClick={onOpen}
          whileHover={{ scale: 1.12, rotate: -8 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open anniversary invitation"
        >
          <Heart fill="white" size={25} />
        </motion.button>

      </div>

      <h2 className="envelope-title script-font">
        With love, we invite you...
      </h2>

      <p className="envelope-hint">
        Tap the heart to open your invitation
      </p>
    </motion.div>
  );
}
