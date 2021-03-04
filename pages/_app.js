import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

// import "@fortawesome/free-brands-svg-icons/styles.css"
// import { config } from "@fortawesome/free-brands-svg-icons"

import '../styles/globals.css'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
