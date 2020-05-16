const { spawnSync } = require('child_process')

Object.defineProperty(module, 'exports', {
  get: function () {
    return parseInt(spawnSync('node', ['-e', 'require("net").createServer().listen(0,"localhost",function(){process.stdout.write(""+this.address().port);this.close()})']).stdout)
  }
})
