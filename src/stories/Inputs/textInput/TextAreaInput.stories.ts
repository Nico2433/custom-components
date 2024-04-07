import type { Meta, StoryObj } from "@storybook/react";
import TextAreaInputStory from "./TextAreaInputStory";

const meta: Meta<typeof TextAreaInputStory> = {
  title: "Text Area Input",
  component: TextAreaInputStory,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {},
};
