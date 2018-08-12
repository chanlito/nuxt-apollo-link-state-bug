# Nuxt + Apollo Link State = Bug?!

## Setup

```bash
npm i
```

## Usage

```bash
npm run dev
```

## Bug Repro?

1. Define client `defaults` state.
2. Mutate `defaults` state in a middleware.
3. Render same `defaults` state.
