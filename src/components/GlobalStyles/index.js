import './GlobalStyles.scss';
import AOS from "aos";

function GlobalStyles({ children }) {
    AOS.init({
        duration: 1000,
        once: true,
    });
    return children;
}

export default GlobalStyles;
