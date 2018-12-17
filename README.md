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
gitlab-cli/0.0.0 linux-x64 node-v10.14.2
$ gitlab-cli --help [COMMAND]
USAGE
  $ gitlab-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gitlab-cli configure`](#gitlab-cli-configure)
* [`gitlab-cli help [COMMAND]`](#gitlab-cli-help-command)
* [`gitlab-cli mr:delete ID`](#gitlab-cli-mrdelete-id)
* [`gitlab-cli mr:list`](#gitlab-cli-mrlist)
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

_See code: [src/commands/configure.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src/commands/configure.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `gitlab-cli mr:delete ID`

```
USAGE
  $ gitlab-cli mr:delete ID

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/mr/delete.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src/commands/mr/delete.ts)_

## `gitlab-cli mr:list`

list merge requests, shows open MRs by default

```
USAGE
  $ gitlab-cli mr:list

OPTIONS
  -h, --help         show CLI help
  -s, --state=state  [default: open]
```

_See code: [src/commands/mr/list.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src/commands/mr/list.ts)_

## `gitlab-cli mr:open`

Open new merge request

```
USAGE
  $ gitlab-cli mr:open

OPTIONS
  -a, --assignee=assignee        Assignee
  -c, --title=title              MR title. defaults to the last commit message if none is provided
  -d, --description=description  Description
  -h, --help                     show CLI help
  -s, --source=source            Source branch. defaults to your current branch if none is provided
  -t, --target=target            (required) [default: DEV] Target branch. defaults to DEV if none is provided
  -w, --assign                   list assignees
```

_See code: [src/commands/mr/open.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src/commands/mr/open.ts)_

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

_See code: [src/commands/mr/state.ts](https://github.com/younesshakky/gitlab-cli/blob/v0.0.0/src/commands/mr/state.ts)_
<!-- commandsstop -->
