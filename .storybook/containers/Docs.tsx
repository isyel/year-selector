import React from "react";
import {
  DocsContextProps,
  DocsContainer as StorybookDocsContainer,
} from "@storybook/blocks";

interface DocsContainerProps {
  children: React.ReactNode;
  context: DocsContextProps<any>;
}

const DocsContainer: React.FC<DocsContainerProps> = ({ children, context }) => {
  return (
    <StorybookDocsContainer context={context}>
      {children}
    </StorybookDocsContainer>
  );
};

export default DocsContainer;
