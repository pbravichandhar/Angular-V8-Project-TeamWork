module.exports = {
  name: 'main-proj',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/main-proj',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
