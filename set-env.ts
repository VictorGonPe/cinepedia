import { writeFileSync } from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  TMDB_API_KEY: '${process.env.NG_ENV_TMDB_API_KEY}',
  firebaseConfig: {
    apiKey: '${process.env.NG_ENV_FIREBASE_API_KEY}',
    authDomain: '${process.env.NG_ENV_FIREBASE_AUTH_DOMAIN}',
    projectId: '${process.env.NG_ENV_FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.NG_ENV_FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.NG_ENV_FIREBASE_MESSAGING_ID}',
    appId: '${process.env.NG_ENV_FIREBASE_APP_ID}'
  }
};
`;

writeFileSync(targetPath, envConfigFile);
