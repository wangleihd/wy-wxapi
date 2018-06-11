'use strict';
/* 如果是来自api连接的请求则需要检查来源 */
const platforms = ['wechat'];
module.exports = options => {
    const reg = new RegExp(`^/${options.version}`);
    return async function checkApi(ctx, next) {
        // if(reg.test(ctx.path)){
        //     const { platform, uid, page } = ctx.header;
        //     if(platforms.indexOf(platform) ===-1 || !uid || !page){
        //         ctx.status = 401;
        //         ctx.body = {code: 40001, msg: '非法请求'};
        //     }else{
        await next();
        if (ctx.status === 200 && !ctx.body.code) {
            ctx.body = {
                code: 20000,
                msg: 'success',
                data: ctx.body
            };
        }
        //         if(ctx.status === 200 && !ctx.body.code){
        //             ctx.body = {
        //                 code: 20000,
        //                 msg: 'success',
        //                 data: ctx.body
        //             };
        //         }
        //     }
        // }else{
        // console.log(404)
        // ctx.status = 404;
        // ctx.body = {code: 40004, msg: '资源不存在'};
        // }
    }
}