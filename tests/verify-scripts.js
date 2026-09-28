const fs = require('fs');
const path = require('path');

const componentsCssPath = path.join(__dirname, '../css/components.css');
const jsPath = path.join(__dirname, '../js/main.js');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(componentsCssPath), 'components.css exists');
assert(fs.existsSync(jsPath), 'main.js exists');

if (fs.existsSync(componentsCssPath)) {
  const css = fs.readFileSync(componentsCssPath, 'utf8');
  assert(css.includes('.btn-primary'), 'components.css defines .btn-primary');
  assert(css.includes('.card'), 'components.css defines .card');
  assert(css.includes('.badge'), 'components.css defines .badge');
}

if (fs.existsSync(jsPath)) {
  const js = fs.readFileSync(jsPath, 'utf8');
  assert(js.includes('copyEmail'), 'main.js defines copyEmail function');
  assert(js.includes('powerhousepnw@gmail.com'), 'main.js references powerhousepnw@gmail.com');
  assert(js.includes('nav-toggle') || js.includes('mobile-menu') || js.includes('mobile-drawer'), 'main.js handles mobile nav');
}

if (failed) process.exit(1);
console.log('All Task 2 assertions passed!');
