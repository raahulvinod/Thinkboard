import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import "dotenv/config";

// create a ratelimiter that allows 100 requests per 60 seconds
const ratelimit = new Ratelimit({
  redis: new Redis({
    url: process.env.UPSTASH_REST_REDIS_URL,
    token: process.env.UPSTASH_REST_REDIS_TOKEN,
  }),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;
