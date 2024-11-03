import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ArrowUpCircle, Icon, Send, Settings } from "react-feather";
import Button, { ButtonVariant } from "./Button";

const meta = {
  title: "Common UI/Button",
  component: Button,

  tags: [],
  args: {
    Icon: "None" as unknown as Icon,
    children: "Button",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    Icon: {
      control: "select",
      options: ["None", "Send", "Settings", "ArrowUpCircle"],
      mapping: {
        None: null,
        Send: Send,
        Settings: Settings,
        ArrowUpCircle: ArrowUpCircle,
      },
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary,
    children: "Primary",
  },
};

export const Stroked: Story = {
  args: {
    variant: ButtonVariant.Stroked,
    children: "Stroked",
  },
};

export const Section: Story = {
  args: {
    variant: ButtonVariant.Section,
    children: "Section",
  },
};
