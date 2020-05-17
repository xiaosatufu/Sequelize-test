const { User } = require('./model')


!(async function () {
    const updateRes = await User.update({
        nickName: '3333'
    }, {
        where: {
            userName: 'zhangsan'
        }
    })
    console.log('updateRes',updateRes)
})()
