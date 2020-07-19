//@param remainTime 剩余时间秒数
function setStartTime(remainTime){
    let timer
    if(remainTime>0){
      let day=parseInt(remainTime/86400)
      let hour=parseInt((remainTime-86400*day)/3600)
      let min =parseInt((remainTime-86400*day-3600*hour)/60)
      let Seconds=(remainTime-86400*day-3600*hour-60*min)
      let cont = ''
      if(day>0){
       cont = `未开始预约 ${day}天${hour}时${min}分${Seconds}秒`
      }else {
        cont = `未开始预约 ${hour}时${min}分${Seconds}秒`
      }
        //渲染页面
        //定时任务
        timer = setTimeout(()=>setStartTime(remainTime-1),1000)
    }else{
      //取消定时任务
      clearTimeout(timer)
    }
}
export default {setStartTime}