//导航栏搜索
const navSearch = document.querySelector(".nav_search");

//搜索模块
const search = document.querySelector(".search");

//从搜索模块返回主界面
const returnMainPage = document.querySelector(".return");

//搜索栏旁边的取消键
const cancelSearch = document.querySelector(".cancel");

//店铺二维码
const store = document.querySelector(".store");

//导航栏店铺
const navStore = document.querySelector(".icon-dianpu");

//大轮播图上一张按钮
const bigCarouselPrev = document.querySelector(".big_carousel .prev");

//大轮播图下一张按钮
const bigCarouselNext = document.querySelector(".big_carousel .next");

//大轮播图图片容器
const bigCarouselContainer = document.querySelector(".big_carousel_container");

//大轮播图指示器
const bigCarouselIndicator = document.querySelectorAll(
  ".big_carousel_indicator span"
);

//乐享运动模块每个选项
const hsSelect = document.querySelectorAll(".hs_menu li");

//乐享运动模块图片
const hsImg = document.querySelectorAll(".hs_menu img");

//点击导航栏搜索打开搜索界面
navSearch.addEventListener("click", () => {
  search.classList.remove("hidden");
});

//点击空白区域返回主页
returnMainPage.addEventListener("click", () => {
  search.classList.add("hidden");
});

//点击取消返回主页
cancelSearch.addEventListener("click", () => {
  search.classList.add("hidden");
});

//鼠标经过导航栏店铺显示二维码
navStore.addEventListener("mouseover", () => {
  store.style.display = "flex";
  navStore.style.color = "rgb(60, 68, 185)";
});

//鼠标离开导航栏店铺隐藏二维码
store.addEventListener("mouseleave", () => {
  store.style.display = "none";
  navStore.style.color = "black";
});

//大轮播图模块开始
//自动播放模块
let timeID = setInterval(() => {
  //利用js自动调用点击事件
  bigCarouselNext.click();
}, 5000);

//大轮播图切换图片函数
function MoveBigImg(i) {
  bigCarouselContainer.style.transform = `translateX(-${i}00%)`;
}

let i = 1;
//切换到上一张
bigCarouselPrev.addEventListener("click", () => {
  clearInterval(timeID);
  if (i !== 1) {
    bigCarouselIndicator[i - 1].classList.remove("active");
    i--;
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  } else {
    bigCarouselContainer.style.transition = "none";
    MoveBigImg(7);
    bigCarouselIndicator[i - 1].classList.remove("active");
    i = 6;
    bigCarouselContainer.clientHeight; //强制渲染
    bigCarouselContainer.style.transition = "all 0.5s";
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  }
  timeID = setInterval(() => {
    //利用js自动调用点击事件
    bigCarouselNext.click();
  }, 4500);
});

//切换到下一张
bigCarouselNext.addEventListener("click", () => {
  clearInterval(timeID);
  if (i !== 6) {
    bigCarouselIndicator[i - 1].classList.remove("active");
    i++;
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  } else {
    bigCarouselContainer.style.transition = "none";
    bigCarouselIndicator[i - 1].classList.remove("active");
    MoveBigImg(0);
    i = 1;
    bigCarouselContainer.clientHeight; //强制渲染
    bigCarouselContainer.style.transition = "all 0.5s";
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  }
  timeID = setInterval(() => {
    //利用js自动调用点击事件
    bigCarouselNext.click();
  }, 4500);
});
//大轮播图模块结束

//乐享运动图片移动
console.log(hsImg);
hsSelect.forEach((span, hs) => {
  span.addEventListener("mouseover", () => {
    hsImg[hs].style.left = "30px";
  });
});

hsSelect.forEach((span, hs) => {
  span.addEventListener("mouseleave", () => {
    hsImg[hs].style.left = "20px";
  });
});
