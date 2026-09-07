import fs from 'node:fs'
import vm from 'node:vm'

const s = fs.readFileSync(new URL('./fill-all-content.mjs', import.meta.url), 'utf8')
const start = s.indexOf('const FACTS = {')
const end = s.indexOf('\nfunction factFor')
const block = s.slice(start, end)
const facts = vm.runInNewContext(block + '\nFACTS')
const v = facts.callbacks
console.log(JSON.stringify(v, null, 2))
console.log('def has eto', /—\s*это\b/.test(v[0]))
console.log('why starts', /^Чтобы\b/.test(v[1]))
console.log([...v[0]].slice(0, 20).map((c) => c + ':' + c.codePointAt(0)))
