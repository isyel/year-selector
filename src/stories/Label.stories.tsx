import { Meta, type StoryObj } from "@storybook/react";
import { NoteSquare } from "iconsax-react";
import { Color, Label } from "../../lib";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label text",
    },
    color: {
      control: "radio",
      options: [Color.ACCENT, Color.ACCENT_GRADIENT, Color.SUCCESS, Color.GRAY],
      description: "The color of the label",
    },
    infoText: {
      control: "text",
      description: "The info text",
    },
    required: {
      control: "boolean",
      description: "Whether the label is required",
    },
  },
  args: {
    label: "Label",
    color: Color.GRAY,
  },
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const LabelWithIcon: Story = {
  args: {
    icon: <NoteSquare size="16" />,
  },
};

const LabelWithInfoText: Story = {
  args: {
    infoText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies ultricies.",
  },
};

const LabelWithRequired: Story = {
  args: {
    required: true,
  },
};

export { Default, LabelWithInfoText, LabelWithRequired, LabelWithIcon };
export default meta;
