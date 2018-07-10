const mongoose = require("mongoose");
const db = "mongodb://localhost/smile-db";
const glob = require('glob')
const {
  resolve
} = require('path')
exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}
exports.connect = () => {
  //链接数据库
  mongoose.connect(db);
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    //增加数据库监听事件
    mongoose.connection.on("disconnected", () => {
      console.log("[*******数据库断开]");
      if (maxConnectTimes <= 3) {
        maxConnectTimes++;
        mongoose.connect(db);
      } else {
        reject()
        throw new Error('数据库出现问题，无法重连，请人为修理一下*************')
      }
    });
    4
    mongoose.connection.on("error", (err) => {
      if (maxConnectTimes <= 3) {
        maxConnectTimes++;
        mongoose.connect(db);
      } else {
        reject(err)
        throw new Error('数据库出现问题，无法重连，请人为修理一下*************')
      }
    });
    mongoose.connection.once("open", () => {
      console.log("[**********mongodb connected successfully]");
      resolve()
    });
  })

};
