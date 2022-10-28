window.onload = function() {
  var b_prev = document.querySelector(".banner-prev");
  var b_next = document.querySelector(".banner-next");
  var b_list = document.querySelector(".banner-list");
  var b_o = document.querySelector(".banner-os");
  var count = b_list.children[0].offsetWidth;//图片宽度
  var gindex = 1;
  var timer;
  //初始化
  init();
  function init() {
        addos();
        cursor();
        addimg();
  }
  //添加圆点
  function addos() {
      let lis = b_list.children;
     for(let i = 0; i<lis.length; i++) {
        let li = document.createElement("li");
        b_o.appendChild(li);
     }
  }
  //添加头尾图片
  function addimg() {
    let header = b_list.children[0];
    let footUrl = header.getAttribute("src");
    let headUrl = b_list.children[b_list.children.length-1].getAttribute("src");
    let headNode = document.createElement("img");
    headNode.setAttribute("src",headUrl);
    let footNode = document.createElement("img");
    footNode.setAttribute("src",footUrl);
    b_list.insertBefore(headNode, header);
    b_list.appendChild(footNode);
    b_list.style.width = b_list.offsetWidth + header.offsetWidth * 2 + 'px';
    b_list.style.left = `-${header.offsetWidth}px`;
  }
  
  //添加选中
  function cursor(index) {
      index = index-1 || 0;
    let os = document.querySelectorAll(".banner-os li");
        for(let i = 0; i<os.length; i++) {
            os[i].classList.remove("cursor");
        }
        os[index].classList.add("cursor");    
  }
  b_prev.onclick = function() {
    animate(count);
    if(gindex == 1) {
      gindex = 6;
    }
    cursor(--gindex);
  }
  b_next.onclick = function() {
    animate(-count);
    if(gindex == 5) {
      gindex = 0;
    }
    cursor(++gindex);
  }
  //移动函数
  function animate(count) {
      let length = b_list.children.length;
      let last = Math.abs(count * (length - 2));//第五张图
      let static = Math.abs(count); //第二张图
        b_list.style.left = `${b_list.offsetLeft+count}px`;
        let getleft = parseInt(b_list.style.left);//该值需同步变化后的值 
        if(-getleft > last || -getleft < static) {
          b_list.style.transition = "none";
          console.log(last,getleft);
        }else {
          b_list.style.transition = "0.2s";
        }
       if(-getleft > last) {
          b_list.style.left = count + 'px';
       }else if(-getleft < static) {
          b_list.style.left = `-${count * (length - 2)}px`;
       }
     //console.log(-getleft);//确保都是正值容易比较
  }
  function move(target,yun,tl)
		//目标位置offsetleft，和云 ，参数'top','left'
		{
			//计时器由云调用，每次调用就清除保证只有一个计时器
			clearInterval(yun.timer);
			yun.timer = setInterval(function()
			{
				var offsetTL = tl=="top"?yun.offsetTop:yun.offsetLeft;
				//目标距离 / 云的位置
				var speed = (target - offsetTL)/10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(offsetTL == target )
				{
					clearInterval(yun.timer);
				}else if(tl =='top')
					{
						yun.style.top = yun.offsetTop +speed +'px';
					}else
						{
							yun.style.left = yun.offsetLeft +speed +'px';
						}
			},15);
    }
  }