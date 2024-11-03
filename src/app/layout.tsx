import Header from "@/components/Header/Header";
import "@/styles/colors.scss";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { ReactNode } from "react";
import fonts from "../styles/fonts";

export const metadata: Metadata = {
  title: "Fixihaus",
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={fonts}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
