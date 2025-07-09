import arcjet, { shield, detectBot, tokenBucket } from '@arcjet/node';

import { ARCJET_KEY, NODE_ENV } from './env.js';

const isDevelopment = NODE_ENV === 'development';

const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: ['ip.src'],
  rules: [
    //shieldd
    shield({ mode: 'LIVE' }),
    // Create a bot detection rule
    detectBot({
      mode: isDevelopment ? 'DRY_RUN' : 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE'],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: 'LIVE',
      refillRate: 5, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;
