const { Keyboard } = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const googleUsername = "fahad.ghafar.dg@gmail.com";
const googlePassword = "Jawwd54321@";

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--disable-gpu',
            '--enable-webgl',
            '--window-size=800,800'
        ]
    });

    const loginUrl = "https://accounts.google.com/AccountChooser?service=mail&continue=https://google.com&hl=en";
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36';
    const page = await browser.newPage();

    await page.setUserAgent(ua);
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://accounts.google.com/',
    });
    // await page.goto(loginUrl, { waitUntil: 'networkidle2' });
    // await page.type('input[type="email"]', googleUsername);
    // await page.keyboard.press('Enter');
    // // await page.waitForTimeout(2000);
    // await page.type('input[type="password"]', googlePassword);
    // await page.keyboard.press('Enter');

    await page.goto(loginUrl, { waitUntil: 'networkidle2' });
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', googleUsername);
    await page.keyboard.press('Enter');

    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', googlePassword);
    await page.keyboard.press('Enter');
})();

// const puppeteer = require('puppeteer');
// const fs = require('fs');

// async function loginToService(url, email, password, serviceName) {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     try {
//         await page.goto(url, { waitUntil: 'networkidle2' });

//         // Fill in the email and password fields
//         await page.type('input[type="email"], input[name="username"]', email);
//         await page.click('button[type="submit"], button[name="next"]');
//         await page.waitForTimeout(2000); // Wait for the next page to load

//         await page.type('input[type="password"]', password);
//         await page.click('button[type="submit"]');

//         // Optional: Verify successful login
//         await page.waitForNavigation();
//         const loggedIn = await page.evaluate(() => {
//             return document.querySelector('selector-for-logged-in-element') !== null;
//         });

//         if (loggedIn) {
//             console.log(`Successfully logged into ${serviceName}`);
//         } else {
//             console.log(`Failed to log into ${serviceName}`);
//         }
//     } catch (error) {
//         console.error(`Error logging into ${serviceName}: ${error.message}`);
//     } finally {
//         await browser.close();
//     }
// }

// async function main() {
//     const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

//     await loginToService('https://mail.google.com', credentials.gmail.email, credentials.gmail.password, 'Gmail');
//     // await loginToService('https://soundcloud.com/signin', credentials.soundcloud.email, credentials.soundcloud.password, 'SoundCloud');
//     // await loginToService('https://accounts.spotify.com/en/login', credentials.spotify.email, credentials.spotify.password, 'Spotify');
// }

// main();