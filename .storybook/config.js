import { configure, addDecorator } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
