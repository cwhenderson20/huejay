#!/usr/bin/env node

'use strict';

let huejay = require('../lib/Huejay');
let credentials = require('./.credentials.json');

let client = new huejay.Client(credentials);

console.log(`Retrieving light from (${credentials.host})...`);

client.getLights()
  .then(lights => {
    let light = lights[4];

    light.name = `Name test`;
    light.on   = true;

    console.log(`Saving light...`);

    return client.saveLight(light);
  })
  .then(() => {
    console.log('Success');
  })
  .catch(error => {
    console.log(error.stack);
  });