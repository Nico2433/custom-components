import type { Meta, StoryObj } from "@storybook/react";
import FileInputStory from "./FileInputStory";

const meta: Meta<typeof FileInputStory> = {
  title: "File Input",
  component: FileInputStory,
};

export default meta;

type Story = StoryObj<FileInputStory>;

export const Primary: Story = {
  args: {
    fileDrop: false,
  },
};
