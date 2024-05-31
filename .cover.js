const path = require('path')

module.exports = {
  entry: '/src/index.js',  // 项目入口
  oldBranch: 'master',    // 需要对比的老分支
  newBranch: 'test',  // 需要对比的新分支
  alias:{               // 配置webpack中的路径别名
    '@a': path.join(__dirname, 'src', 'moduleA'),
    '@b': path.join(__dirname, 'src', 'moduleB'),
  }
}