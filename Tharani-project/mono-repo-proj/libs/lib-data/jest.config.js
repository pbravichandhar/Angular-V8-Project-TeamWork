module.exports = {
  name: 'lib-data',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib-data',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
