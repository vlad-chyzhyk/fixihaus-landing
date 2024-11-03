import { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.scss";
import fonts from "../src/styles/fonts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={fonts}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
