module.exports = {
  name: 'count-dec',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/count-dec',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
