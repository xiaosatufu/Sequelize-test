const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    dialect: 'mysql'
}
conf.pool = {
    max: 5,
    min: 0,
    idle: 10000 //如果一个连接池10s之内没有被使用，则释放
}
const seq = new Sequelize('koa-weibo-db', 'root', 'xiaosatufu', conf)

//测试链接

// seq.authenticate().then(() => {
//     console.log('ok')
// }).catch((err) => {
//     console.log(err)
// })


module.exports = seq