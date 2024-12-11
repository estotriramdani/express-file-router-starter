import { digital_twin_db } from '@/lib/db';

interface CacheOptions {
  maxSize?: number;
  ttl?: number; // time to live in milliseconds
}

const Cache = (options: CacheOptions) => {
  options.ttl = options.ttl || 1000 * 60; // 1 minute
  return {
    set: async (key: string, value: any, ttl?: number) => {
      await digital_twin_db.cache.create({
        data: {
          key,
          value,
          expiredAt: new Date(Date.now() + (ttl || options.ttl)),
        },
      });
    },
    get: async (key: string) => {
      const cache = await digital_twin_db.cache.findFirst({
        where: {
          key,
          expiredAt: {
            gt: new Date(),
          },
        },
      });

      return cache ? cache?.value : null;
    },
    remove: async (key: string) => {
      await digital_twin_db.cache.deleteMany({
        where: {
          key,
        },
      });
    },
    clear: async () => {
      await digital_twin_db.cache.deleteMany({});
    },
  };
};

export const cache = Cache({
  ttl: 1000 * 60 * 60 * 3,
});
