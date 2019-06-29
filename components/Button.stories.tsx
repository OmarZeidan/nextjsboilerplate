import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Button from './Button';

const Basic = () => {
  return <Button />;
};

storiesOf('Button', module)
  .addDecorator(jsxDecorator)
  .add('Basic', Basic);
