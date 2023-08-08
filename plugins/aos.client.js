import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app = AOS.init({
    once: false,
  });
};
