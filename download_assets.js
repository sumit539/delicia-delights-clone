
const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${dest}`);
        });
    }).on('error', (err) => {
        fs.unlink(dest);
        console.error(`Error downloading ${url}: ${err.message}`);
    });
};

const assets = [
    { url: 'https://catalog.wlimg.com/1/304027/other-images/12577-comp-image.png', dest: 'src/assets/logo.png' },
    { url: 'https://catalog.wlimg.com/1/304027/other-images/374666.jpg', dest: 'src/assets/banners/banner1.jpg' },
    { url: 'https://catalog.wlimg.com/1/304027/other-images/374669.jpg', dest: 'src/assets/banners/banner2.jpg' },
    { url: 'https://catalog.wlimg.com/1/304027/other-images/374670.jpg', dest: 'src/assets/banners/banner3.jpg' },
    { url: 'https://catalog.wlimg.com/1/304027/other-images/374664.jpg', dest: 'src/assets/banners/banner4.jpg' },
    { url: 'https://catalog.wlimg.com/1/304027/other-images/374665.jpg', dest: 'src/assets/banners/banner5.jpg' },

    // Products
    { url: 'https://2.wlimg.com/product_images/bc-small/2025/11/304027/pineapple-jam-1762430360-92265.jpeg', dest: 'src/assets/products/pineapple-jam.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/dir_11/304027/apple-jam-92266.jpg', dest: 'src/assets/products/apple-jam.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/2025/11/304027/mango-jam-1762430299-92267.jpeg', dest: 'src/assets/products/mango-jam.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/2025/11/304027/strawberry-jam-1762430377-92268.jpeg', dest: 'src/assets/products/strawberry-jam.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/2020/10/304027/sarson-ka-saag-1602153354-92255.jpeg', dest: 'src/assets/products/sarson-ka-saag.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/2020/10/304027/dal-makhani-1602153275-92257.jpeg', dest: 'src/assets/products/dal-makhani.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/2020/10/304027/canned-litchi-1602153730-92247.jpeg', dest: 'src/assets/products/canned-litchi.jpg' },
    { url: 'https://2.wlimg.com/product_images/bc-small/2025/11/304027/mango-chutney-1762430624-5604435.jpeg', dest: 'src/assets/products/mango-chutney.jpg' },

    // Categories (using product images as representative if specific category markers aren't easy to dl directly, but I found some)
    { url: 'https://catalog.wlimg.com/1/304027/small-images/fruit-jams-707614.jpg', dest: 'src/assets/products/cat_jams.jpg' },
    { url: 'https://catalog.wlimg.com/1/304027/small-images/ready-to-eat-vegetables-707603.jpg', dest: 'src/assets/products/cat_rte.jpg' },
    { url: 'https://catalog.wlimg.com/1/304027/small-images/canned-fruits-707591.jpg', dest: 'src/assets/products/cat_fruits.jpg' }
];

assets.forEach(asset => download(asset.url, asset.dest));
