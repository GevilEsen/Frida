const shell = require('shelljs')
const message = require('minimist')(process.argv.slice(2))._[0]

shell.config.fatal = true
shell.config.verbose = true

if (message) {
  shell
    .exec(`git add .`)
    .exec(`git commit -m "${message}"`)
    .exec('git push')
} else {
  console.log('must provide a message info')
}
