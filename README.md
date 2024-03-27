# TS Launchpad

This is an opinionated starter kit for TypeScript monorepo projects.

## Motivation

## Features/Stack

- path aliasing uses `~` instead of `@`, since @ prefix is used
  by [scoped packages](https://docs.npmjs.com/cli/v10/using-npm/scope). Similar to [create-t3-app].
- `@local/lib` to refer to the shared `lib` workspace dependency

## Project Structure

## Developer Workflow

```bash
pnpm -F core dev
pnpm -F web dev
```

If working on shared `lib` package

```bash
pnpm -F @local/lib watch
```

