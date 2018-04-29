// server/index.js
'use strict';

const app = require('./app');
const conf = require('../config');
const PORT = process.env.PORT || conf.getServerPort();

function isDbReady(){
  return new Promise((fulfilled, rejected) => {
    const dbProps = conf.getDbProps()
    const mysqlClient =
      mysql.createClient(dbProps.db.port, dbProps.db.host)

      mysqlClient.on('ready', () => {
      logger.info('Mysql is ready, starting express server......')
      return fulfilled()
    }).on('error', (err) => {
      // You should assume here that the connection is lost, or compromised.
      logger.error('Received error:', err)
      logger.error('X-X-X-X-X-X Looks like Db is not up and running X-X-X-X-X-X')
      return rejected()
    })
  })
}

function shutdown(){
  logger.error('X-X-X-X-X-X Dependent service check failed. ' +
    'Application is not going to be started. X-X-X-X-X-X')
  process.exit(1) // eslint-disable-line no-process-exit, no-magic-numbers
}


isRedisReady().then(spawnCluster, shutdown)

function startServer() {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });  
}
