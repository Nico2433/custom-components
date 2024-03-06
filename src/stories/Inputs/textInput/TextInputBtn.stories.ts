import type { Meta, StoryObj } from "@storybook/react";

import type { Input, InputConfig } from "@/@types";
import TextInputStory from "./TextInputStory";

const meta: Meta<typeof TextInputStory> = {
  title: "Text Input Btn",
  component: TextInputStory,
};

export default meta;

const config: InputConfig = {
  name: "textInput",
  label: "Text Input",
  optionalBtn: {
    label: "Btn",
    onClick: () => {
      console.log("You clicked me");
    },
  },
  rules: {
    required: "Input is required",
  },
};

type Story = StoryObj<Input>;

export const Primary: Story = {
  args: {
    config,
    labelClass: "flex flex-col items-center",
  },
};
