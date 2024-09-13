// const { Keyboard } = require('puppeteer');
// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// puppeteer.use(StealthPlugin());

// const googleUsername = "fahad.ghafar.dg@gmail.com";
// const googlePassword = "Jawwad54321@";
const puppeteer = require('puppeteer');

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

    const loginUrl = 'https://soundcloud.com/login';
    const username = "fahad.ghaffar.office@gmail.com";
    const password = "Jawwad54321@";

    const page = await browser.newPage();
    await page.goto(loginUrl, { waitUntil: 'networkidle2' });

    await page.click('button[id="onetrust-reject-all-handler"]', { delay: 1000 });
    // await page.waitForXPath('//*[@id="sign_in_up_email"]');
    // const usernameInput = await page.$x('//*[@id="sign_in_up_email"]');
    // await usernameInput[0].type(username, { delay: 100 });
    const frame = await page.$('/html/body/div[3]/iframe');
    // const frame = await page.frames().find(f => f.src() === 'https://secure.soundcloud.com/web-auth?client_id=T9frtmUVGsxBucS3jqGV9A8lsB3MAO47&device_id=398602-224456-198272-585932&app_id=46941&tracking=local&redirect_uri=https%3A%2F%2Fsoundcloud.com%2Fsignin%2Fcallback&state=eyJjbGllbnRfaWQiOiJUOWZydG1VVkdzeEJ1Y1MzanFHVjlBOGxzQjNNQU80NyIsIm5vbmNlIjoiUm9qbGk3SDc5Y25ZYlN1U1p0SkpicmR0c0ttNkt6a1dvUXRlcGNwbHhtZTJLQXpFX1p1M0dQbXNzZ2NET3hxcSJ9&code_challenge=8p1ySQzDC2uP3wn-bLDtUrCc02czu9iUXCMyZwiiS_E&code_challenge_method=S256#page_name=signin%3Amain&page_urn=soundcloud%3Asignin%3Amain&start_url=https%3A%2F%2Fsoundcloud.com%2Fsignin&start_view=sign_in&is_visible=true');
    // console.log(frame);
    // Log the names and URLs of all frames

    // await frame.click('input[id="sign_in_up_email"]', { delay: 100 });
    await frame.waitForSelector('input[id="sign_in_up_email"]', { delay: 500 });
    // await page.$eval('input[type="text"][name="email]', el => el.value = 'fahad.ghaffar.office@gmail.com');
    await frame.type('input[id="sign_in_up_email"]', username, { delay: 100 });


    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]', password, { delay: 100 });

    await page.click('button[type="submit"]');

    // Wait for the login to complete
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // You're now logged in!
    console.log('Logged in to SoundCloud!');

    // Do something with the logged-in page
    await page.goto('https://soundcloud.com/your_username');

    // Close the browser
    await browser.close();
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

// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// puppeteer.use(StealthPlugin());

// (async () => {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();

//     // Navigate to Gmail login page
//     await page.goto('https://accounts.google.com/');

//     // Enter email
//     await page.waitForSelector('input[type="email"]');
//     await page.type('input[type="email"]', 'fahad.ghafar.dg@gmail.com'); // Replace with your email
//     await page.click('#identifierNext');

//     // Wait for the password field to appear
//     await page.waitForSelector('input[type="password"]');
//     await page.type('input[type="password"]', 'Jawwad54321@'); // Replace with your password
//     await page.click('#passwordNext');

//     // Wait for navigation to Gmail
//     await page.waitForNavigation();

//     console.log('Logged in successfully!');

//     // You can now interact with your Gmail inbox
//     // ...

//     // Close the browser after your tasks
//     await browser.close();
// })();