const fs = require('fs');
const path = require('path');

function build() {
    console.log('Building index.html...');
    const templatePath = path.join(__dirname, 'src', 'index.html');
    if (!fs.existsSync(templatePath)) {
        console.error('Template index.html not found in src/');
        return;
    }

    let template = fs.readFileSync(templatePath, 'utf8');
    const includeRegex = /<!-- @include ([\w-]+) -->/g;

    let match;
    let newTemplate = template;
    while ((match = includeRegex.exec(template)) !== null) {
        const componentName = match[1];
        const componentPath = path.join(__dirname, 'src', 'components', `${componentName}.html`);
        
        if (fs.existsSync(componentPath)) {
            console.log(`- Including ${componentName}.html`);
            const componentContent = fs.readFileSync(componentPath, 'utf8');
            newTemplate = newTemplate.replace(match[0], componentContent);
        } else {
            console.warn(`- Warning: component ${componentName}.html not found at ${componentPath}`);
        }
    }

    const outputPath = path.join(__dirname, 'index.html');
    fs.writeFileSync(outputPath, newTemplate, 'utf8');
    console.log('Success! Output written to root index.html');
}

build();
