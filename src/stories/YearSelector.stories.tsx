import React from "react";
import { Meta, type StoryObj } from "@storybook/react";
import { YearSelector } from "../../lib";
import { YearSelectorProps } from "../../lib/components/YearSelector/interfaces";

const StoryComponent: React.FC<YearSelectorProps> = (
  props: YearSelectorProps
) => {
  const [year, setYear] = React.useState(props.value);

  const handleChange = (value: string) => {
    setYear(value);
  };

  return (
    <YearSelector
      contentClasses="max-w-[90vw] p-4"
      {...props}
      value={year}
      onChange={handleChange}
    />
  );
};

const meta = {
  title: "Components/YearSelector",
  component: StoryComponent,
  args: {
    label: "Year",
    placeholder: "Select year",
    value: "2021",
    fromYear: 1950,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YearSelector>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const DisabledYearSelector: Story = {
  args: {
    disabled: true,
  },
};

const AscendingYearSelector: Story = {
  args: {
    order: "asc",
  },
};

export { Default, DisabledYearSelector, AscendingYearSelector };
export default meta;
