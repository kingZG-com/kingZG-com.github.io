const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const assetsDir = path.join(__dirname, 'assets'); // optionally watch assets too

console.log('👀 Watching for file changes...');

let timeout = null;

function handleWatch(eventType, filename) {
    if (filename) {
        // Debounce to prevent multiple builds for a single file save
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`\n[${new Date().toLocaleTimeString()}] File changed: ${filename}. Rebuilding...`);
            try {
                execSync('node build.js', { stdio: 'inherit' });
            } catch (err) {
                console.error('Error during build:', err.message);
            }
        }, 300);
    }
}

// Watch src folder
fs.watch(srcDir, { recursive: true }, handleWatch);
console.log(`- Watching directory: ${srcDir}`);
