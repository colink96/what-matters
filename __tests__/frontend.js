import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

test('renders correctly', async () => {
  let tree;
  renderer.act(() => {
    tree = renderer.create(<App />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
