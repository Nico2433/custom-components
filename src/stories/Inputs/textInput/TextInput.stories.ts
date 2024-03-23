import type { Meta, StoryObj } from "@storybook/react";

import TextInputStory from "./TextInputStory";

const meta: Meta<typeof TextInputStory> = {
  title: "Text Input",
  component: TextInputStory,
};

export default meta;

type Story = StoryObj<TextInputStory>;

export const Primary: Story = {
  args: {
    addBtn: false,
  },
};
