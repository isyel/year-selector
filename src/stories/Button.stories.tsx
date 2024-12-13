import { Meta, StoryContext, StoryFn, type StoryObj } from "@storybook/react";

import { Add } from "iconsax-react";
import { Button, ButtonVariant, Color } from "../../lib";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text label displayed on the button.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Indicates if the button is disabled.",
    },
    loading: {
      control: { type: "boolean" },
      description: "Indicates if the button is in a loading state.",
    },
    color: {
      options: [Color.ACCENT, Color.ACCENT_GRADIENT],
      control: { type: "radio" },
      description: "Color of the button.",
    },
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: "radio" },
      description: "Variant of the button.",
    },
  },
  parameters: {
    controls: {
      exclude: ["onClick", "icon"],
    },
  },
  args: {
    label: "Button",
    disabled: false,
    loading: false,
    color: Color.ACCENT,
    variant: ButtonVariant.PRIMARY,
  },
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      return <Story {...context} />;
    },
  ],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const ButtonWithIcon: Story = {
  args: {
    icon: <Add size="24" />,
  },
};

const PrimaryButtonWithGradient: Story = {
  args: {
    color: Color.ACCENT_GRADIENT,
  },
};

const SecondaryButton: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
  },
};

const DisabledButton: Story = {
  args: {
    disabled: true,
  },
};

const LoadingButton: Story = {
  args: {
    loading: true,
  },
};

export {
  Default,
  ButtonWithIcon,
  PrimaryButtonWithGradient,
  SecondaryButton,
  DisabledButton,
  LoadingButton,
};
export default meta;
