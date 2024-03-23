import type { Meta, StoryObj } from "@storybook/react";

import SelectInputStory from "./SelectInputStory";

const meta: Meta<typeof SelectInputStory> = {
  title: "Select Input",
  component: SelectInputStory,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {},
};
