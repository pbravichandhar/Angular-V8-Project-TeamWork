module.exports = {
  name: 'count',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/count',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
