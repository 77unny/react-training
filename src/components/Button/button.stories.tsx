import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { IButtonProps } from "./index";
import "../../styles/styles.css";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

export const AllButton = () => (
  <div>
    <div style={{ margin: "5px 0" }}>
      <Template label="기본버튼" />
      <Template label="클릭버튼" onClick={() => console.log("Click!")} />
    </div>
  </div>
);
