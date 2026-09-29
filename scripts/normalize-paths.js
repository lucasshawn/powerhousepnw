const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'contact.html',
  'about.html',
  'services.html',
  'products.html',
  'success.html',
  'contact/index.html',
  'about/index.html',
  'services/index.html',
  'products/index.html',
  'success/index.html'
];

const root = path.join(__dirname, '..');

files.forEach(file => {
  const filePath = path.join(root, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Convert relative asset paths to root-relative
  content = content.replace(/href="\.\/css\//g, 'href="/css/');
  content = content.replace(/src="\.\/public\//g, 'src="/public/');
  content = content.replace(/src="\.\/js\//g, 'src="/js/');
  content = content.replace(/href="\.\/public\//g, 'href="/public/');
  content = content.replace(/content="\.\/public\//g, 'content="/public/');

  // Convert navigation links to clean URLs
  content = content.replace(/href="index\.html"/g, 'href="/"');
  content = content.replace(/href="contact\.html"/g, 'href="/contact"');
  content = content.replace(/href="about\.html"/g, 'href="/about"');
  content = content.replace(/href="services\.html"/g, 'href="/services"');
  content = content.replace(/href="products\.html"/g, 'href="/products"');

  // Update services hash links
  content = content.replace(/href="services\.html#/g, 'href="/services#');
  content = content.replace(/href="products\.html#/g, 'href="/products#');

  // Ensure contact action is /success
  content = content.replace(/action="\/success\.html"/g, 'action="/success"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Normalized:', file);
});
