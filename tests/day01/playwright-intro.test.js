import test from "playwright/test";

test("Search for Playwright on google", async ({ page }) => {

    /*
    Steps:
        Neavigate to "https://www.google.com/"
        Locate the search box
        type "Playwright"
        press Enter
    */

        await page.goto("https://www.google.com/");

        await page.waitForTimeout(3000); // pauses for 3 seconds

        const searchBox = await page.locator("//textarea[@class='gLFyf']");

        // await searchBox.type('Playwright Automation');
        await searchBox.fill('Playwright Automation');

        await page.waitForTimeout(3000); // pauses for 3 seconds

        await searchBox.press('Enter');

        await page.waitForTimeout(3000); // pauses for 3 seconds

});

/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" jsaction="paste:puy29d;" aria-label="Search" aria-autocomplete="both" aria-expanded="false" 
aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" 
name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwi22Y-xpaqHAxVQFFkFHUIfACwQ39UDCAY"></textarea>

//textarea[@class='gLFyf']
*/
