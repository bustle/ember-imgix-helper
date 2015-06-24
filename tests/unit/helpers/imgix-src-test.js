import { imgixSrc } from '../../../helpers/imgix-src';
import { module, test } from 'qunit';

module('Unit | Helper | imgix src');

test('it works', function(assert) {
  var result = imgixSrc(['fake-src.png'], { query: 'w=300' });
  assert.ok(result);
  assert.equal(result, 'fake-src.png?w=300');
});
