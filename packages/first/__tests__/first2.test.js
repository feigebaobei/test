// 除了使用内联快照，别的与first.test.js相同
import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../src/components/Link.js';

it('renders correctly', () => {
  const tree = renderer
    // .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .create(<Link/>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div>
  from ReactComp
</div>
`);
});