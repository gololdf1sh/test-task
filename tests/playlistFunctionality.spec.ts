import { test } from "@playwright/test";
import { trackNames } from "../src/testData"
import { CreatePlaylistPage } from "../src/pages";

test.describe("Check Playlist Functionality", () => {
    let createPlaylistPage: CreatePlaylistPage;

    test.beforeEach(async ({page}) => {
        createPlaylistPage = new CreatePlaylistPage(page);

        await page.goto("https://vite-react-alpha-lemon.vercel.app/");
    })

    test("Test the search input field for filtering the available tracks", async () => {
        await createPlaylistPage.fillSearchInputAndCheckResultFiled(trackNames);
    });

    test("Add Track Using + Button", async () => {
        const firstTrackName = trackNames.summerBreeze
        await createPlaylistPage.clickOnFirstAddSingleTrackButton();
        await createPlaylistPage.checkThatAddedTackDisplayedInYourPlaylistField(firstTrackName)
    });

    test("Test that the total duration of all tracks in 'Your Playlist' is accurately calculated and displayed in seconds", async () => {
        const totalDuration = "1030"
        await createPlaylistPage.addAllTrackToYourPlaylist(trackNames);
        await createPlaylistPage.checkTotalPlaylistTracksDurationField(totalDuration)
    });
});