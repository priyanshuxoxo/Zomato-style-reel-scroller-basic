const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  try {
    const result = await imagekit.upload({
      file, // base64 string or URL
      fileName,
    });
    console.log("ImageKit Upload Result:", result);
    return result; // ✅ make sure you return this
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw error;
  }
}

module.exports = { uploadFile };
