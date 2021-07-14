#!/usr/bin/env node
import { transpileNodeModules } from './index.mjs'

if (!process.argv[2]) console.log(`Usage: esmtocjs <package>`)

const pkg = process.argv[2]

await transpileNodeModules(pkg, process.argv[3] || 'es2018')
