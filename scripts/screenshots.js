/*
  take links PNG screenshots and put them in /static/screenshots/[md5(url )].png
*/

import fs from 'fs'
import path from 'path'
import md5 from 'md5'
import Pageres from 'pageres'

const outDir = path.join(__dirname, '..', 'public', 'screenshots')
const links = require('../static/links.json')

const makeScreenShot = (url, outPath) => new Promise((resolve, reject) => {
  const outFilename = md5(url)
  const outFile = path.join(outPath, `${outFilename}.png`)
  if (fs.existsSync(outFile)) {
    return resolve()
  }
  console.log('📸  screenshot', url)
  return new Pageres({
    delay: 5,
    scale: 0.5,
    filename: outFilename
  }).src(url, ['1024x768'], { crop: true })
              .dest(outPath)
              .run()
              .catch(e => console.log('❌', e))
              .then(() => resolve())
})

const makeScreenShots = links => links.reduce((prev, link) => {
  return prev.catch(e => console.log('❌', e)).then(() => makeScreenShot(link.url, outDir))
}, Promise.resolve())

makeScreenShots(links).then(() => {
  console.log('✅ done')
}).catch(e => {
  console.log('❌', e)
})
