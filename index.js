//
// 功能:计算两个时间戳相隔的时间 (最大单位:天)
//
// start:number|string 时间戳(单位:秒)
// end:number|string 时间戳(单位:秒)
// format:string 正则匹配规则 ${d}天 ${h}小时 ${m}分钟 ${s}秒
function residue(start, end, format = '${d}天${h}小时${m}分钟${s}秒'){
    //开始时间与结束时间 单位秒（不是毫秒）
    start = parseInt(start); //转换成number
    end = parseInt(end); //转换成number
    let between = end - start;
    // 计算天数
    let day = Math.floor(between / 86400);
    between = between % 86400;
    // 计算小时
    let hour = Math.floor(between / 3600);
    between = between % 3600;
    // 计算分钟
    let minute = Math.floor(between / 60);
    between = between % 60;
    //计算秒
    let second = between;
    //正则转换天
    format = format.replace(/\${d}/, day);
    //正则转换小时
    format = format.replace(/\${h}/, hour);
    //正则转换分钟
    format = format.replace(/\${m}/, minute);
    //正则转换秒
    format = format.replace(/\${s}/, second);
    return format;
}