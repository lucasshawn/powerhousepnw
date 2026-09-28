const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
let failures = 0;

function check(desc, condition) {
  if (condition) {
    console.log(`  [PASS] ${desc}`);
  } else {
    console.error(`  [FAIL] ${desc}`);
    failures++;
  }
}

console.log('=== Verifying Powerhouse PNW Website Assets & Pages ===\n');

// 1. Files & Assets Check
console.log('1. Checking File Existence:');
const requiredFiles = [
  'index.html',
  'products.html',
  'services.html',
  'about.html',
  'contact.html',
  'netlify.toml',
  'README.md',
  'css/main.css',
  'css/components.css',
  'js/main.js',
  'public/images/favicon.svg',
  'public/images/powerhouse-graphic.jpg'
];

requiredFiles.forEach(relPath => {
  check(relPath, fs.existsSync(path.join(root, relPath)));
});

// 2. Content & Business Requirements
console.log('\n2. Verifying Business Copy & Requirements:');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const productsHtml = fs.readFileSync(path.join(root, 'products.html'), 'utf8');
const servicesHtml = fs.readFileSync(path.join(root, 'services.html'), 'utf8');
const aboutHtml = fs.readFileSync(path.join(root, 'about.html'), 'utf8');
const contactHtml = fs.readFileSync(path.join(root, 'contact.html'), 'utf8');
const netlifyToml = fs.readFileSync(path.join(root, 'netlify.toml'), 'utf8');

check('index.html contains slogan "Bring us the problem, we build the solution"', indexHtml.includes('Bring us the problem, we build the solution'));
check('index.html contains Bellevue, WA', indexHtml.includes('Bellevue, WA'));
check('index.html references official graphic', indexHtml.includes('powerhouse-graphic.jpg'));
check('index.html contains contact email', indexHtml.includes('powerhousepnw@gmail.com'));

check('products.html contains Cascade StreamCore', productsHtml.includes('Cascade StreamCore'));
check('products.html contains StratusRelay', productsHtml.includes('StratusRelay'));
check('products.html contains AlpineTelemetry', productsHtml.includes('AlpineTelemetry'));

check('services.html highlights 30+ years track record', servicesHtml.includes('30'));
check('services.html highlights reasonable prices', servicesHtml.includes('Reasonable') || servicesHtml.includes('reasonable'));
check('services.html covers cloud and DevOps', servicesHtml.includes('DevOps') && servicesHtml.includes('Cloud'));

check('about.html mentions Bellevue, WA', aboutHtml.includes('Bellevue, WA') || aboutHtml.includes('Bellevue, Washington'));
check('about.html mentions Microsoft & Oracle', aboutHtml.includes('Microsoft') && aboutHtml.includes('Oracle'));
check('about.html mentions 4 years in DevOps', aboutHtml.includes('4 years'));
check('about.html describes small, efficient team', aboutHtml.includes('small') && (aboutHtml.includes('efficient') || aboutHtml.includes('lean')));

check('contact.html contains direct email', contactHtml.includes('powerhousepnw@gmail.com'));
check('contact.html has Netlify form support', contactHtml.includes('data-netlify="true"'));

check('netlify.toml configures clean redirects & security headers', netlifyToml.includes('[[redirects]]') && netlifyToml.includes('[[headers]]'));

console.log('\n======================================================');
if (failures === 0) {
  console.log('SUCCESS: All files and business requirements are 100% verified!');
  process.exit(0);
} else {
  console.error(`COMPLETED WITH ${failures} FAILURE(S).`);
  process.exit(1);
}
