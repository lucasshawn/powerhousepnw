const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const netlifyPath = path.join(__dirname, '../netlify.toml');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(indexPath), 'index.html exists');
assert(fs.existsSync(netlifyPath), 'netlify.toml exists');

if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');
  assert(html.includes('Powerhouse PNW'), 'index.html contains company name');
  assert(html.includes('powerhouse-graphic.jpg'), 'index.html references brand graphic');
  assert(html.includes('Bring us the problem, we build the solution'), 'index.html contains core slogan');
  assert(html.includes('Bellevue, WA') || html.includes('Bellevue'), 'index.html mentions Bellevue, WA');
  assert(html.includes('30'), 'index.html mentions 30+ years experience');
  assert(html.includes('Microsoft') || html.includes('Oracle'), 'index.html highlights Microsoft/Oracle pedigree');
  assert(html.includes('powerhousepnw@gmail.com'), 'index.html has contact email');
}

if (fs.existsSync(netlifyPath)) {
  const toml = fs.readFileSync(netlifyPath, 'utf8');
  assert(toml.includes('publish = "."') || toml.includes('publish = "/"'), 'netlify.toml defines publish dir');
  assert(toml.includes('[[headers]]'), 'netlify.toml defines security headers');
}

if (failed) process.exit(1);
console.log('All Task 3 assertions passed!');
