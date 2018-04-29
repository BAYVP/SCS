"use strict"
const shell = require("shelljs")
const fs = require("fs")
const yargs = require("yargs")
const logger = require("./logger").logger(module)
const DB_PORT = 9003;
const SERVER_PORT = 9000;
const DB_HOSTNAME = 'localhost'; // Default is localhost
// read args
const args = yargs
// Code commented out to bootstrap db with default values
// .default('e', 'dev')
// .alias('e', 'env')
// .alias('b', 'bootstrapDbType')
//   .argv
// var env = args.env.toLowerCase()
// var bootstrapDbType = args.bootstrapDbType

const pe = process.env // eslint-disable-line no-process-env

function getDbHostname(){
  return DB_HOSTNAME;
}


module.exports = {
  environment: {
    dev: {
      port: SERVER_PORT,
      db: {
        username : '',
        password: '',
        host: getRedisHostname(),
        port: getRedisPort()
      }
    },
    prod: {
        port: SERVER_PORT,
        db: {
          username : '',
          password: '',
          host: getRedisHostname(),
          port: getRedisPort()
        }
      },
    
  },
  getProps(){
    return this.environment[env]
  },
  getDbProps(){
    // Add comment on why you need the below method inspite of tracking
    // the props above
    return {
      db: {
        port: this.environment[env].db.port,
        host: this.environment[env].db.host
      }
    }
  },
  getDbPort(){
    return DB_PORT;
  },
  getServerPort(){
    return SERVER_PORT;
  },
  setEnv(passedEnv){
    env = passedEnv
  }
}