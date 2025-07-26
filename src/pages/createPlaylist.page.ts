import { Locator, Page, expect } from "@playwright/test"
import { trackNamesDataTypes } from "../types";

export class CreatePlaylistPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly trackList: Locator;
    readonly yourPlaylistField: Locator;
    readonly addSingleTrackButton: Locator;
    readonly totalPlaylistTracksDurationField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.locator('[id=":r0:"]');
        this.trackList = this.page.locator('[id="tracklist"]');
        this.yourPlaylistField = this.page.locator('[class*="css-3u751r"]', { hasText: "Your playlist"});
        this.addSingleTrackButton = this.page.locator('[class*="css-hktlod"]');
        this.totalPlaylistTracksDurationField = this.page.locator('[id="playlist-duration"]');
    }

    async fillSearchInputAndCheckResultFiled(trackNames: trackNamesDataTypes) {
        for (const trackName of Object.values(trackNames)) {
            await this.searchInput.fill(trackName);
            await expect(this.trackList).toContainText(trackName);
            await this.searchInput.fill("");
        }
    }

    async clickOnFirstAddSingleTrackButton() {
        await this.addSingleTrackButton.first().click()
    }

    async checkThatAddedTackDisplayedInYourPlaylistField(trackName: string) {
        await expect(this.trackList).toContainText(trackName);
    }

    async addAllTrackToYourPlaylist(trackNames: trackNamesDataTypes) {
        for (const trackName of Object.values(trackNames)) {
            await this.searchInput.fill(trackName);
            await expect(this.trackList).toContainText(trackName);
            await this.clickOnFirstAddSingleTrackButton();
            await this.searchInput.fill("");
        }
    }

    async checkTotalPlaylistTracksDurationField(totalDuration: string) {
        await expect(this.totalPlaylistTracksDurationField).toContainText(totalDuration);
    }
}