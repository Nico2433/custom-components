import type { Meta, StoryObj } from "@storybook/react";

import type { Input, InputConfig } from "@/@types";
import DateInputStory from "./DateInputStory";

const meta: Meta<typeof DateInputStory> = {
  title: "Date Input",
  component: DateInputStory,
};

export default meta;

const config: InputConfig = {
  name: "dateInput",
  label: "Date Input",
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
