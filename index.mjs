#!/usr/bin/env node

import { readFile, writeFile } from 'fs/promises'
import tocjs from 'esm-to-cjs'

if (!process.argv[2]) console.log(`Usage: esmtocjs <package>`)

const pkg = process.argv[2]

const file = (await readFile(`./node_modules/${pkg}/package.json`)).toString()

const json = JSON.parse(file)

const { exports } = json

if (typeof exports === 'string') {
  const esmSource = (await readFile(`./node_modules/${pkg}/${exports.slice(2)}`)).toString()

  const output = tocjs.runTransform(esmSource, {
    lenDestructure: 100,
    lenModuleName: 100,
    lenIdentifier: 100
  })

  await writeFile(`./node_modules/${pkg}/index.cjs`, output)

  await writeFile(`./node_modules/${pkg}/package.json`, JSON.stringify({ ...json, main: './index.cjs' }, null, 2))
}
