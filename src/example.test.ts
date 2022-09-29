import getSystemParameters from './utils/getSystemParameters';

getSystemParameters

Promise.resolve()
  .then(async () => {
     await getSystemParameters();
   })
  .then(
    process.exit(1)
  )