const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    dialect: 'mysql'
}
const seq = new Sequelize('koa-weibo-db', 'root', 'xiaosatufu', conf)

//测试链接

// seq.authenticate().then(() => {
//     console.log('ok')
// }).catch((err) => {
//     console.log(err)
// })


module.exports = seq