/*
京喜农场助力码
此助力码要求种子 active 相同才能助力，多个账号的话可以种植同样的种子，如果种子不同的话，会自动跳过使用云端助力
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京京喜农场的好友码。
// 同一个京东账号的好友助力码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 注意：京喜农场 种植种子发生变化的时候，互助码也会变！！
// 每个账号 shareCdoe 是一个 json，示例如下
// {"smp":"22bdadsfaadsfadse8a","active":"jdnc_1_btorange210113_2","joinnum":"1"}
let JxncShareCodes = [
  '{"smp":"a9f971c9e76b669ec664f6f2af654ed2","active":"jdnc_1_penggan210123_2","joinnum":1}@{"smp":"149784fc9af187135440d97cd92fd31c","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"23a0a4184c3d83e4d14ec69ffc62589a","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"8daa6c9a4a03d9bb5e395edca758ad44","active":"jdnc_1_mizao210113_2","joinnum":1}',//账号一的好友shareCode,不同好友中间用@符号隔开
  '{"smp":"a9f971c9e76b669ec664f6f2af654ed2","active":"jdnc_1_penggan210123_2","joinnum":1}@{"smp":"149784fc9af187135440d97cd92fd31c","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"23a0a4184c3d83e4d14ec69ffc62589a","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"8daa6c9a4a03d9bb5e395edca758ad44","active":"jdnc_1_mizao210113_2","joinnum":1}',
  '{"smp":"a9f971c9e76b669ec664f6f2af654ed2","active":"jdnc_1_penggan210123_2","joinnum":1}@{"smp":"149784fc9af187135440d97cd92fd31c","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"23a0a4184c3d83e4d14ec69ffc62589a","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"8daa6c9a4a03d9bb5e395edca758ad44","active":"jdnc_1_mizao210113_2","joinnum":1}',
  '{"smp":"a9f971c9e76b669ec664f6f2af654ed2","active":"jdnc_1_penggan210123_2","joinnum":1}@{"smp":"149784fc9af187135440d97cd92fd31c","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"23a0a4184c3d83e4d14ec69ffc62589a","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"8daa6c9a4a03d9bb5e395edca758ad44","active":"jdnc_1_mizao210113_2","joinnum":1}',
  '{"smp":"a9f971c9e76b669ec664f6f2af654ed2","active":"jdnc_1_penggan210123_2","joinnum":1}@{"smp":"149784fc9af187135440d97cd92fd31c","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"23a0a4184c3d83e4d14ec69ffc62589a","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"8daa6c9a4a03d9bb5e395edca758ad44","active":"jdnc_1_mizao210113_2","joinnum":1}',
  '{"smp":"a9f971c9e76b669ec664f6f2af654ed2","active":"jdnc_1_penggan210123_2","joinnum":1}@{"smp":"149784fc9af187135440d97cd92fd31c","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"23a0a4184c3d83e4d14ec69ffc62589a","active":"jdnc_1_gxwogan210115_2","joinnum":1}@{"smp":"8daa6c9a4a03d9bb5e395edca758ad44","active":"jdnc_1_mizao210113_2","joinnum":1}',
]
// 判断github action里面是否有京喜农场助力码
if (process.env.JXNC_SHARECODES) {
  if (process.env.JXNC_SHARECODES.indexOf('&') > -1) {
    console.log(`您的京喜农场助力码选择的是用&隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('&');
  } else if (process.env.JXNC_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的京喜农场助力码选择的是用换行隔开\n`)
    JxncShareCodes = process.env.JXNC_SHARECODES.split('\n');
  } else {
    JxncShareCodes = process.env.JXNC_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  // console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < JxncShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['JxncShareCode' + index] = JxncShareCodes[i];
}
