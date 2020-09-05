//@param remainTime 剩余时间秒数
//@param count 执行次数 默认为0
//@param now 第一次调用函数的时间
 function setStartTime(remainTime,count=0,now) {
    if (remainTime > 0) {
      let day = parseInt(remainTime / 86400)
      let hour = parseInt((remainTime - 86400 * day) / 3600)
      let min = parseInt((remainTime - 86400 * day - 3600 * hour) / 60)
      let seconds = (remainTime - 86400 * day - 3600 * hour - 60 * min)
      let cont = ''
      if(day>0){
        cont = `距预约开始 ${day}天${hour}时${min}分${seconds}秒`
      }else {
        cont = `距预约开始 ${hour}时${min}分${seconds}秒`
      }
      let inteval = 1000
      let offset = +new Date()-(now+count*1000)
      inteval = inteval-offset
      if(inteval<1){inteval=0}
      count++
      remainTime--
      timer = setTimeout(() => setStartTime(remainTime,count,now), inteval)
    } else {
      //取消定时任务 定时任务结束
        clearTimeout(timer)
    }
  }
export default {setStartTime}
