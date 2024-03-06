import type { Meta, StoryObj } from "@storybook/react";

import type { Input, InputConfig } from "@/@types";
import FileInputStory from "./FileInputStory.tsx";

const meta: Meta<typeof FileInputStory> = {
  title: "File Input",
  component: FileInputStory,
};

export default meta;

const config: InputConfig = {
  name: "fileInput",
  label: "File Input",
  placeholder: "Select a file",
  rules: {
    required: "Input is required",
  },
};

type Story = StoryObj<Input>;

export const Primary: Story = {
  args: {
    config,
    labelClass: "flex flex-col items-center w-60",
    inputClass: "bg-yellow-500 hover:opacity-50",
  },
};
