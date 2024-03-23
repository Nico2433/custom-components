import type { Meta, StoryObj } from "@storybook/react";
import DateInputStory from "./DateInputStory.js";

const meta: Meta<typeof DateInputStory> = {
  title: "Date Input",
  component: DateInputStory,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {},
};
