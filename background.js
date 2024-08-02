chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    const originalFilename = downloadItem.filename;
    const specificString1 = 'tfile';
    const specificString2 = '다운로드';
    const specificString3 = 'img';

    const randomString = generateRandomString(16);

    if (originalFilename.includes(specificString1) || originalFilename.includes(specificString2) || originalFilename.includes(specificString3)) {
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
