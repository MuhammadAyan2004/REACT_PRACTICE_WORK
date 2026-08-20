const path = require('path');
const fs = require('fs').promises;

const itemsFile = path.join(__dirname, 'items.json');

async function getStoredItems() {
    const rawFileContent = await fs.readFile(itemsFile, { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedItems = data.items ?? [];
    return storedItems;
}

function storeItems(items) {
    return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;