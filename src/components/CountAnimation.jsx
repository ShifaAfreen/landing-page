import { useEffect, useState, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
  useInView,
} from "framer-motion";

const CountAnimation = ({ number, className = "", prefix = "", suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [current, setCurrent] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, number, { duration: 2 });
      return animation.stop;
    }
  }, [isInView, count, number]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setCurrent(latest);
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
};

export default CountAnimation;
