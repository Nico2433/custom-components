import type { Meta, StoryObj } from "@storybook/react";
import DropdownStory from "./DropdownStory";

const meta: Meta<typeof DropdownStory> = {
  title: "Dropdown",
  component: DropdownStory,
};

export default meta;

type Story = StoryObj<DropdownStory>;

export const Primary: Story = {
  args: {
    autoClose: true,
    noAbsolute: false,
    position: "bottom",
  },
};
