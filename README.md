xlab-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/xlab-cli.svg)](https://npmjs.org/package/xlab-cli)
[![Downloads/week](https://img.shields.io/npm/dw/xlab-cli.svg)](https://npmjs.org/package/xlab-cli)
[![License](https://img.shields.io/npm/l/xlab-cli.svg)](https://github.com/younesshakky/xlab-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g xlab-cli
$ xlab-cli COMMAND
running command...
$ xlab-cli (-v|--version|version)
xlab-cli/1.0.0-alpha linux-x64 node-v10.14.2
$ xlab-cli --help [COMMAND]
USAGE
  $ xlab-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`xlab-cli autocomplete [SHELL]`](#xlab-cli-autocomplete-shell)
* [`xlab-cli configure`](#xlab-cli-configure)
* [`xlab-cli help [COMMAND]`](#xlab-cli-help-command)
* [`xlab-cli mr:delete ID`](#xlab-cli-mrdelete-id)
* [`xlab-cli mr:list`](#xlab-cli-mrlist)
* [`xlab-cli mr:open`](#xlab-cli-mropen)
* [`xlab-cli mr:state ID STATE`](#xlab-cli-mrstate-id-state)

## `xlab-cli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ xlab-cli autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ xlab-cli autocomplete
  $ xlab-cli autocomplete bash
  $ xlab-cli autocomplete zsh
  $ xlab-cli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.0/src/commands/autocomplete/index.ts)_

## `xlab-cli configure`

Configure xlab-cli

```
USAGE
  $ xlab-cli configure

OPTIONS
  -h, --help  show CLI help
  --prompt
```

_See code: [src/commands/configure.ts](https://github.com/younesshakky/xlab-cli/blob/v1.0.0-alpha/src/commands/configure.ts)_

## `xlab-cli help [COMMAND]`

display help for xlab-cli

```
USAGE
  $ xlab-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `xlab-cli mr:delete ID`

```
USAGE
  $ xlab-cli mr:delete ID

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mr/delete.ts](https://github.com/younesshakky/xlab-cli/blob/v1.0.0-alpha/src/commands/mr/delete.ts)_

## `xlab-cli mr:list`

list merge requests, shows open MRs by default

```
USAGE
  $ xlab-cli mr:list

OPTIONS
  -h, --help         show CLI help
  -s, --state=state  [default: open]
```

_See code: [src/commands/mr/list.ts](https://github.com/younesshakky/xlab-cli/blob/v1.0.0-alpha/src/commands/mr/list.ts)_

## `xlab-cli mr:open`

Open new merge request

```
USAGE
  $ xlab-cli mr:open

OPTIONS
  -a, --assignee=assignee        Assignee
  -c, --title=title              MR title. defaults to the last commit message if none is provided
  -d, --description=description  Description
  -h, --help                     show CLI help
  -s, --source=source            Source branch. defaults to your current branch if none is provided
  -t, --target=target            (required) [default: DEV] Target branch. defaults to DEV if none is provided
  -w, --assign                   list assignees
```

_See code: [src/commands/mr/open.ts](https://github.com/younesshakky/xlab-cli/blob/v1.0.0-alpha/src/commands/mr/open.ts)_

## `xlab-cli mr:state ID STATE`

```
USAGE
  $ xlab-cli mr:state ID STATE

ARGUMENTS
  ID     MR id
  STATE  State of MR close/reopen

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mr/state.ts](https://github.com/younesshakky/xlab-cli/blob/v1.0.0-alpha/src/commands/mr/state.ts)_
<!-- commandsstop -->
