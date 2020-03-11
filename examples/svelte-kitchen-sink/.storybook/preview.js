import { addDecorator, addParameters } from '@storybook/svelte';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
  docs: {
    iframeHeight: 300,
  },
});
