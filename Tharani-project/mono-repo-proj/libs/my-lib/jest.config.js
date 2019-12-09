module.exports = {
  name: 'my-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
