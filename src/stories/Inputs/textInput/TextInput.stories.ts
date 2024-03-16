import type { Meta, StoryObj } from "@storybook/react";

import type { Input, InputConfig } from "@/@types";
import TextInputStory from "./TextInputStory";

const meta: Meta<typeof TextInputStory> = {
  title: "Text Input",
  component: TextInputStory,
};

export default meta;

const config: InputConfig = {
  name: "textInput",
  label: "Text Input",
  rules: {
    required: "Input is required",
  },
};

type Story = StoryObj<Input>;

export const Primary: Story = {
  args: {
    config,
    className: "flex flex-col items-center w-60",
  },
};
