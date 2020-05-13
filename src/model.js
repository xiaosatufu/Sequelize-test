const Sequelize = require('sequelize')

const seq = require('./seq')

//创建User 模型，数据表名 users
const User = seq.define('user', {
    //id 会自动创建并设为主键自增
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING,
        comments: '昵称'
    }
})


const Blog = seq.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


//关联外键

Blog.belongsTo(User, {
    //创建外键 Blog.userid -> User.id
    foreignKey: 'userId'
})

User.hasMany(Blog, {
    //创建外键 Blog.userid -> User.id
    foreignKey: 'userId'
})



module.exports = {
    User,
    Blog
}