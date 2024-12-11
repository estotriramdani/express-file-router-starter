// @ts-ignore
// import Cache from 'file-system-cache';

// export const cache = Cache({
//   basePath: './.cache', // (optional) Path where cache files are stored (default).
//   ns: 'my-namespace', // (optional) A grouping namespace for items.
//   hash: 'sha1', // (optional) A hashing algorithm used within the cache key.
//   ttl: 60 * 60 * 3, // (optional) A time-to-live (in secs) on how long an item remains cached.
// });

import * as fs from 'fs';
import * as path from 'path';

const cacheDir = path.resolve(__dirname, '../../.cache');

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

const Cache = (options) => {
  return {
    set: async (key, value) => {
      const filePath = path.join(cacheDir, key);
      await fs.promises.writeFile(filePath, JSON.stringify(value));
    },
    get: async (key) => {
      const filePath = path.join(cacheDir, key);
      if (fs.existsSync(filePath)) {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
      }
      return null;
    },
    remove: async (key) => {
      const filePath = path.join(cacheDir, key);
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
    },
    clear: async () => {
      const files = await fs.promises.readdir(cacheDir);
      for (const file of files) {
        await fs.promises.unlink(path.join(cacheDir, file));
      }
    },
  };
};

export const cache = Cache({
  basePath: './.cache', // (optional) Path where cache files are stored (default).
  ns: 'my-namespace', // (optional) A grouping namespace for items.
  hash: 'sha1', // (optional) A hashing algorithm used within the cache key.
  ttl: 60 * 60 * 3, // (optional) A time-to-live (in secs) on how long an item remains cached.
});
