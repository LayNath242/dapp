import 'dotenv/config';

const defaultNodeUrls = ['ws://127.0.0.1:9944'];

export default {
  nodeUrls: process.env.NODE_PROVIDER_URLS ? JSON.parse(process.env.NODE_PROVIDER_URLS) as string[] : defaultNodeUrls,
  sentryDns: process.env.SENTRY_DNS || '',
  seedPhase: process.env.SEED_PHRASE || '',
}
