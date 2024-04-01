import type { Meta, StoryObj } from "@storybook/react";
import MenuDropdownStory from "./MenuDropdownStory";

const meta: Meta<typeof MenuDropdownStory> = {
  title: "Menu Dropdown",
  component: MenuDropdownStory,
};

export default meta;

type Story = StoryObj<MenuDropdownStory>;

export const Primary: Story = {
  args: {
    hideChildren: false,
    autoClose: true,
  },
};
