import classNames from "classnames";

import { Oxanium, Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin-ext"],
  variable: "--urbanist-font",
});

const oxanium = Oxanium({ subsets: ["latin-ext"], variable: "--oxanium-font" });

const fonts = classNames(urbanist.variable, oxanium.variable);

export default fonts;
