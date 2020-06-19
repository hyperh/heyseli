// https://www.gatsbyjs.org/docs/preoptimizing-images/
const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const folderOpt = 'assets-optimized';
const folderRaw = 'assets-raw';
const matches = glob.sync(`src/**/${folderRaw}/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1400;
const QUALITY = 30;

Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    console.log('Optimizing:', match);

    const optimizedName = match
      .replace(folderRaw, folderOpt) // target optimized folder
      .replace(/(\..+)$/, (match, ext) => `${ext}`);

    // Make folder if it doesn't exist
    const re = /.+\//g; // Find everything except file name
    const [dir] = optimizedName.match(re);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // Write optimized files
    const info = await stream.metadata();
    const targetWidth = info.width <= MAX_WIDTH ? info.width : MAX_WIDTH;

    await stream
      .resize(targetWidth)
      .png({ quality: QUALITY })
      .toFile(optimizedName);

    // Overwrite original file
    // return fs.rename(optimizedName, match);
  })
);
