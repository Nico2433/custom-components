import type { Meta, StoryObj } from "@storybook/react";

import type { Input, InputConfig } from "@/@types";
import SelectInputStory from "./SelectInputStory";

const meta: Meta<typeof SelectInputStory> = {
  title: "Select Input",
  component: SelectInputStory,
};

export default meta;

const config: InputConfig = {
  name: "selectInput",
  label: "Select Input",
  rules: {
    required: "Input is required",
  },
  options: [
    {
      label: "Option test",
      value: "Value 1",
    },
  ],
};

type Story = StoryObj<Input>;

export const Primary: Story = {
  args: {
    config,
    className: "flex flex-col items-center w-60",
  },
};
