chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
    const originalFilename = downloadItem.filename;
    const specificStrings = ['tfile', '다운로드', 'img'];

    let newFilename = originalFilename;

    specificStrings.forEach(specificString => {
        if (newFilename.includes(specificString)) {
            const randomString = generateRandomString(16);
            newFilename = newFilename.split(specificString).join(randomString);
        }
    });
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
