# dmn-prototypes

[![Netlify Status](https://api.netlify.com/api/v1/badges/eccd3f40-e68e-4d41-8e3b-80bd04dbde36/deploy-status)](https://app.netlify.com/sites/dmn-prototypes/deploys)

Prototypes built via our DMN Innovation Process, Q1 2020

## Demos

 - [level-snapping](./packages/level-snapping)
 - [drd-layout-sketches](./packages/drd-layout-sketches)
 - [hypothesis-1-final](./packages/hypothesis-1-final)

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
