const mongoose = require("mongoose");
const mongoUrl = require("../config/index").mongoUrl;
exports.connect = () => {
    mongoose.connect(mongoUrl);
    let maxConnectTimes = 0;
    return new Promise((resolve, reject) => {
        mongoose.connection.on('disconnected', () => {
            if (maxConnectTimes <= 3) {
                maxConnectTimes++;
                mongoose.connect(mongoUrl);
            } else {
                reject();
                throw new Error('数据库出现问题')
            }
        });
        mongoose.connection.on('error', (err) => {
            console.log('***********数据库错误')
            if (maxConnectTimes <= 3) {
                maxConnectTimes++
                mongoose.connect(db)
            } else {
                reject(err)
                throw new Error('数据库出现问题，程序无法搞定，请人为修理.....')
            }
        })
        mongoose.connection.once('open',()=>{
            console.log('MogoDB connect success');
            resolve();
        })

    });
}