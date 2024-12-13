import type { Preview, StoryFn } from "@storybook/react";

import "../lib/assets/index.css";
import React from "react";
import Layout from "./layout";
import DocsContainer from "./containers/Docs";

const preview: Preview = {
  parameters: {
    layout: "padded",
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: { method: "alphabetical" },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: (props) => (
        <Layout>
          <DocsContainer {...props} />
        </Layout>
      ),
    },
  },
};

const decorators = [
  (Story: StoryFn) => (
    <Layout>
      <Story />
    </Layout>
  ),
];

export { decorators };
export default preview;
