import { suite } from 'uvu'
import { exec } from 'child_process'
import { promisify } from 'util'
import { transpileNodeModules } from '../index.js'
import { rm, access, readFile } from 'fs/promises'
import { constants, readdirSync } from 'fs'
import * as assert from 'uvu/assert'

const run = promisify(exec)

const t = suite('transpile-node-modules')

let json

t.before(async () => {
  try {
    process.chdir(process.cwd() + '/test/fixtures')
    await run('pnpm init -y')
    const { stderr } = await run('pnpm i mdast-util-to-hast')
    await transpileNodeModules('mdast-util-to-hast')
    json = JSON.parse((await readFile('node_modules/mdast-util-to-hast/package.json')).toString())
    if (stderr) throw stderr
  } catch (e) {
    throw e
  }
})

t('it creates an index.cjs file', async () => {
  assert.is(await access('node_modules/mdast-util-to-hast/index.cjs', constants.F_OK), true)
})

t('it replaces "type" field with "commonjs"', async () => {
  assert.equal(json.type, 'commonjs')
})

t.after(async () => {
  await rm('node_modules', { recursive: true })
})

t.run()
