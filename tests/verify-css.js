const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/main.css');
const faviconPath = path.join(__dirname, '../public/images/favicon.svg');
const graphicPath = path.join(__dirname, '../public/images/powerhouse-graphic.jpg');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(graphicPath), 'Official graphic exists in public/images');
assert(fs.existsSync(faviconPath), 'Favicon SVG exists');
assert(fs.existsSync(cssPath), 'Main CSS exists');

if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  assert(css.includes('--bg-primary'), 'CSS defines --bg-primary token');
  assert(css.includes('--accent-gold'), 'CSS defines --accent-gold token');
  assert(css.includes('--pnw-blue'), 'CSS defines --pnw-blue token');
  assert(css.includes('Plus Jakarta Sans'), 'CSS imports or references Plus Jakarta Sans');
  assert(css.includes('Inter'), 'CSS imports or references Inter');
}

if (failed) process.exit(1);
console.log('All Task 1 assertions passed!');
