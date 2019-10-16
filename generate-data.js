#! /usr/bin/env node

const glob = require('glob');
const write = require('write');

glob('./blocks/packages/**/package.json', {}, (err, files) => {
  if (!err) {
    const result = {};
    files.map(filePath => {
      const match = /\.\/blocks\/packages\/([a-zA-Z-_]+)\//.exec(filePath);
      const type = match[1];
      result[type] = result[type] || [];
      const pkgJson = require(filePath);
      result[type].push({
        name: pkgJson.name,
        title: pkgJson.blockConfig.title,
        categories: pkgJson.blockConfig.categories,
        screenshot: pkgJson.blockConfig.screenshot,
        version: pkgJson.version,
        repository: pkgJson.repository.url,
      })
    })
    write.sync('./public/blocks-data.json', JSON.stringify(result), {
      overwrite: true,
    })
  }
})