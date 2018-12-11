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
* [`gitlab-cli configure`](#gitlab-cli-configure)
* [`gitlab-cli hello [FILE]`](#gitlab-cli-hello-file)
* [`gitlab-cli help [COMMAND]`](#gitlab-cli-help-command)
* [`gitlab-cli mr:delete ID`](#gitlab-cli-mrdelete-id)
* [`gitlab-cli mr:open`](#gitlab-cli-mropen)
* [`gitlab-cli mr:state ID STATE`](#gitlab-cli-mrstate-id-state)

## `gitlab-cli configure`

Configure gitlab-cli

```
USAGE
  $ gitlab-cli configure

OPTIONS
  -h, --help                       show CLI help
  -i, --project-id=project-id
  -t, --access-token=access-token
  --prompt
```

_See code: [src\commands\configure.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src\commands\configure.ts)_

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

## `gitlab-cli mr:delete ID`

```
USAGE
  $ gitlab-cli mr:delete ID

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\mr\delete.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src\commands\mr\delete.ts)_

## `gitlab-cli mr:open`

Open new merge request

```
USAGE
  $ gitlab-cli mr:open

OPTIONS
  -a, --assignee=assignee        Assignee
  -d, --description=description  Description
  -h, --help                     show CLI help
  -h, --title=title              MR title. defaults to the last commit message if none is provided
  -s, --source=source            Source branch. defaults to your current branch if none is provided
  -t, --target=target            (required) [default: DEV] Target branch. defaults to DEV if none is provided
```

_See code: [src\commands\mr\open.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src\commands\mr\open.ts)_

## `gitlab-cli mr:state ID STATE`

```
USAGE
  $ gitlab-cli mr:state ID STATE

ARGUMENTS
  ID     MR id
  STATE  State of MR close/reopen

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\mr\state.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src\commands\mr\state.ts)_
<!-- commandsstop -->
