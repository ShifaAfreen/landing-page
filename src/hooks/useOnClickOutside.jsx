import { useEffect } from "react";

export default function useOnClickOutside(refs, handler) {
  useEffect(() => {
    const listener = (event) => {
      const clickedOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );

      if (clickedOutside) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [refs, handler]);
}
