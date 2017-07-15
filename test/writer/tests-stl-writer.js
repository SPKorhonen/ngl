import StlWriter from '../../src/writer/stl-writer.js'

import { assert } from 'chai'

describe('writer/stl-writer', function () {
  describe('writing', function () {
    it('getData', function () {
      var surf = {
        normal: [0, 0, 1, 0, 0, 1, 0, 0, 1],
        index: [0, 1, 2],
        position: [0, 0, 0, 0, 1, 0, 0, 0, 1]
      }
      var stl = new StlWriter(surf)
      var dataView = stl.getData()
      assert.strictEqual(dataView.byteLength, 80 + 4 + 12 + 36 + 2, 'byte length')
      assert.strictEqual(dataView.getInt32(80), 1, 'triangles count')
      assert.strictEqual(dataView.getFloat32(80 + 4 + 12), 0, '1st vertex x')
      assert.strictEqual(dataView.getInt16(80 + 4 + 48), 0, 'attribute byte count')
    })
  })
})
