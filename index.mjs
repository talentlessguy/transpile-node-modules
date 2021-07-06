import { readFile, writeFile } from 'fs/promises'
import esbuild from 'esbuild'
import resolve from 'enhanced-resolve'

const resolver = resolve.create.sync({
  conditionNames: ['require', 'node', 'default', 'import'],
  extensions: ['.js', '.json', '.node']
})

export async function transpileNodeModules(pkg, target = 'es2018') {
  const esmFilepath = resolver(`./node_modules/${pkg}`, pkg)

  const file = (await readFile(`./node_modules/${pkg}/package.json`)).toString()

  const json = JSON.parse(file)

  const result = await esbuild.transform({
    target,
    format: 'cjs',
    entryPoints: [esmFilepath]
  })

  await writeFile(esmFilepath.replace('index.js', 'index.cjs'), result.code)

  await writeFile(
    esmFilepath.replace('index.js', 'package.json'),
    JSON.stringify({ ...json, main: './index.cjs', type: 'commonjs' }, null, 2)
  )
}
