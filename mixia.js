// 更新时间显示 
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();                  
    const month = (now.getMonth()  + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2,  '0');
    const hours = now.getHours().toString().padStart(2,  '0');
    const minutes = now.getMinutes().toString().padStart(2,  '0');
    const seconds = now.getSeconds().toString().padStart(2,  '0');
    
    // 获取星期几 
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekDay = weekDays[now.getDay()];
    
    // 农历日期（简化版，实际应用中可以使用专业农历库）
    const lunarDate = getSimpleLunarDate(now);
    
    document.getElementById('current-time').textContent  = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    document.getElementById('week-day').textContent  = `星期${weekDay} 农历${lunarDate}`;
}
 
// 简化版农历日期计算（仅作演示，实际农历计算比较复杂 
function getSimpleLunarDate(date) {
    const lunarMonths = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
    const lunarDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
                      '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
                      '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];
    
    // 简单模拟，实际应根据农历算法计算 
    const month = date.getMonth();     
    const day = date.getDate();     
    const lunarMonth = lunarMonths[month % 12];
    const lunarDay = lunarDays[(day - 1) % 30];
    
    return `${lunarMonth}月${lunarDay}`;
}
 
// 初始化时间并设置定时器 
updateTime();
setInterval(updateTime, 1000);
 
// 显示优惠券弹窗 
function showCouponModal(imgUrl, linkUrl) {
    const modal = document.getElementById('couponModal');                  
    const modalImg = document.getElementById('modalImg');                  
    const downloadBtn = document.getElementById('downloadBtn');                  
    const modalOpenBtn = document.getElementById('modalOpenBtn');              
    
    modalImg.src  = imgUrl;
    
    // 设置下载图片按钮 
    downloadBtn.onclick  = function() {
        const link = document.createElement('a');            
        link.href  = imgUrl;
        link.download  = '弥夏优惠';
        document.body.appendChild(link);            
        link.click();            
        document.body.removeChild(link);            
    };
    
    // 设置打开链接按钮 
    modalOpenBtn.onclick  = function() {
        window.open(linkUrl,  '_blank');
    };
    
    modal.classList.add('active');                  
}
 
// 关闭弹窗 
document.getElementById('couponModal').addEventListener('click',  function(e) {
    if (e.target  === this) {
        this.classList.remove('active');                  
    }
});
 
// 复制优惠券代码 
function copyCouponCode(code) {
    navigator.clipboard.writeText(code).then(()  => {
        showCopyNotification();
    }).catch(err => {
        console.error(' 复制失败:', err);
    });
}
 
// 复制微信号 
function copyWechat() {
    navigator.clipboard.writeText('weixiaolei522').then(()  => {
        showCopyNotification();
    }).catch(err => {
        console.error(' 复制失败:', err);
    });
}
 
// 显示复制通知 
function showCopyNotification() {
    const notification = document.getElementById('copyNotification');                  
    notification.classList.add('show');                   
    
    setTimeout(() => {
        notification.classList.remove('show');                  
    }, 2000);
} 