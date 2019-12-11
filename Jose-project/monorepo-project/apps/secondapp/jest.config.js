module.exports = {
  name: 'secondapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/secondapp',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
