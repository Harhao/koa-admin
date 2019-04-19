const userModel = require('../model/userModel.js');
const config = require('../config/index.js');
const util = require('../util/index');
module.exports = {
    register: async (ctx, next) => {
        let { name, password } = ctx.request.body;
        if (!name || !password) {
            password = util.crateHash(password);
            const result = userModel.save({
                name: name,
                password: password
            });
            if (!result)
                return ctx.body = {
                    code: '400',
                    message: 'register fail'
                }
            else
                return ctx.body = {
                    code: '200',
                    message: 'register success!'
                }
        }

    },
    login: async (ctx, next) => {
        const data = ctx.request.body;
        if (!data.name || !data.password) {
            return ctx.body = {
                code: '',
                data: null,
                message: "the usernumber or password can't be null"
            }
        }
        data.password = crateHash(data.password);
        const result = await userModel.findOne({
            name: data.name,
            password: data.password
        });
        if (result != null) {
            const token = util.verify(result);
            return ctx.body = {
                code: '200',
                token: token,
                message: 'login success'
            };
        } else {
            return ctx.body = {
                code: '400',
                data: null,
                message: 'usernumber or password is error'
            }
        }

    }
}