gitlab-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gitlab-cli.svg)](https://npmjs.org/package/gitlab-cli)
[![Downloads/week](https://img.shields.io/npm/dw/gitlab-cli.svg)](https://npmjs.org/package/gitlab-cli)
[![License](https://img.shields.io/npm/l/gitlab-cli.svg)](https://github.com/younesshakky/gitlab-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gitlab-cli
$ gitlab-cli COMMAND
running command...
$ gitlab-cli (-v|--version|version)
gitlab-cli/0.0.0 win32-x64 node-v10.13.0
$ gitlab-cli --help [COMMAND]
USAGE
  $ gitlab-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gitlab-cli hello [FILE]`](#gitlab-cli-hello-file)
* [`gitlab-cli help [COMMAND]`](#gitlab-cli-help-command)

## `gitlab-cli hello [FILE]`

describe the command here

```
USAGE
  $ gitlab-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gitlab-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src\commands\hello.ts)_

## `gitlab-cli help [COMMAND]`

display help for gitlab-cli

```
USAGE
  $ gitlab-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src\commands\help.ts)_
<!-- commandsstop -->
