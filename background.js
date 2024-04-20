chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    const originalFilename = downloadItem.filename;
    const specificString = 'tfile';
    const randomString = generateRandomString(16);

    if (originalFilename.includes(specificString)) {
        const newFilename = originalFilename.replace(specificString, randomString);
        suggest({ filename: newFilename, conflictAction: 'uniquify' });
    }
});

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
