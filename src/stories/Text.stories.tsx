import { Meta, type StoryObj } from "@storybook/react";
import { Size, Text, TextWeight } from "../../lib";

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: [Size.XS, Size.SM, Size.MD, Size.LG, Size.XL, Size.XXL],
      control: { type: "radio" },
      description: "Size of the text.",
    },
    weight: {
      options: [TextWeight.REGULAR, TextWeight.SEMIBOLD, TextWeight.BOLD],
      control: { type: "radio" },
      description: "Weight of the text.",
    },
    tagName: {
      control: { type: "text" },
      description: "HTML tag to be used for the text.",
    },
    renderAsRichText: {
      control: { type: "boolean" },
      description: "Whether to render the text as rich text.",
    },
    children: {
      control: { type: "text" },
      description: "Content of the text.",
    },
  },
  args: {
    size: Size.SM,
    weight: TextWeight.REGULAR,
    tagName: "p",
    renderAsRichText: false,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis malesuada tristique. Duis facilisis erat at urna egestas, ac ultricies augue rutrum. Suspendisse cursus pulvinar mi sit amet volutpat. Phasellus ut mattis magna. Quisque venenatis massa in purus pharetra, id venenatis tortor consequat. Nam finibus, ante eu ornare lobortis, sapien magna finibus est, eget consequat dui ligula sed nulla. Pellentesque vel leo tortor. Praesent dignissim ligula nisl.",
  },
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const RichText: Story = {
  args: {
    renderAsRichText: true,
    children:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <em class="text-accent-11">Nullam convallis malesuada tristique.</em> Duis facilisis erat at urna egestas, ac ultricies augue rutrum. Suspendisse cursus pulvinar mi sit amet volutpat. <strong>Phasellus ut mattis magna.</strong> Quisque venenatis massa in purus pharetra, id venenatis tortor consequat. Nam finibus, ante eu ornare lobortis, sapien magna finibus est, eget consequat dui ligula sed nulla. Pellentesque vel leo tortor. <s>Praesent dignissim ligula nisl.</s></p>',
  },
};

export { Default, RichText };
export default meta;
