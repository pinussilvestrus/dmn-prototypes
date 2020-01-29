# dmn-prototypes

[![Netlify Status](https://api.netlify.com/api/v1/badges/eccd3f40-e68e-4d41-8e3b-80bd04dbde36/deploy-status)](https://app.netlify.com/sites/dmn-prototypes/deploys)

Prototypes built via our DMN Innovation Process, Q1 2020

## Demos


- Hypothesis 1: DRD Layout
    - [level-snapping](./packages/level-snapping)
    - [drd-layout-sketches](./packages/drd-layout-sketches)
    - [ortho-incoming-connections](./packages/ortho-incoming-connections)
    - [hypothesis-1-final](./packages/hypothesis-1-final)
- Hypothesis 2: DRD Relations
    - [drd-relation-prototype](./packages/drd-relation-prototype)
    - [innovation-week-linus](./packages/innovation-week-linus)
    - [innovation-week-maciej](./packages/innovation-week-maciej)
    - [drd-relation-sketches](./packages/drd-relation-sketches)

## Setup

```bash
$ git clone https://github.com/pinussilvestrus/dmn-prototypes.git
$ cd dmn-prototypes
$ npm install
```

## Usage

```bash
$ npm run dev
```

Visit http://localhost:5000 and visit one demo inside the `packages` directory.

## Contribution

Every demo goes into the `packages` sub directory. It has to include a `npm run build` task resulting in an `index.html` to serve the Demo in the end. 

Check out the [example demo](./packages/example) for guidance.

## License

[**MIT**](./LICENSE)
