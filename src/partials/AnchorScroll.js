import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnchorScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if(hash){
      const section = document.querySelector(hash);
      window.scrollTo(0, section.offsetTop);
    }
  }, [hash]);

  return null;
}