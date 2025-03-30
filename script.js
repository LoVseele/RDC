//通用函数模块
//鼠标经过按钮变色
function buttonEvent(button) {
  button.addEventListener("mouseover", () => {
    if (button.style.cursor !== "not-allowed") {
      button.classList.add("button_hover");
    } else {
      button.classList.remove("button_hover");
    }
  });
  button.addEventListener("mouseleave", () => {
    if (button.style.cursor !== "not-allowed") {
      button.classList.remove("button_hover");
    }
  });
}

//经过商品显示购物车
function productOver(container, shopcar) {
  container.forEach((product, s) => {
    product.addEventListener("mouseover", () => {
      shopcar[s].classList.remove("hidden");
    });
  });

  container.forEach((product, s) => {
    product.addEventListener("mouseleave", () => {
      shopcar[s].classList.add("hidden");
    });
  });
  shopcar.forEach((shopcar) => {
    shopcar.addEventListener("mouseover", () => {
      shopcar.style.backgroundColor = "rgb(53, 57, 146)";
    });

    shopcar.addEventListener("mouseleave", () => {
      shopcar.style.backgroundColor = "rgb(59, 68, 184)";
    });
  });
}

//经过图片放大
function imgEvent(img) {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "all 0.3s";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
}

//功能模块
//导航栏模块开始
//左侧logo
const logo = document.querySelector(".nav_left img");

//左侧菜单容器
const navMenuContainer = document.querySelector(".nav_menu");
//左侧菜单选项
const navMenu = document.querySelectorAll(".nav_menu li");
//下划线
const navUnderline = document.querySelector(".underline");

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

//移动下划线函数
function moveUnderline(n) {
  let position = n * 21.2;
  navUnderline.style.left = `${position}%`;
}

navMenu.forEach((select, index) => {
  select.addEventListener("mouseover", () => {
    navUnderline.style.display = "block";
    moveUnderline(index);
  });
  navMenuContainer.addEventListener("mouseleave", () => {
    navUnderline.style.display = "none";
  });
});

//点击导航栏搜索打开搜索界面
navSearch.addEventListener("click", () => {
  search.classList.remove("hidden");
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
//导航栏结束

//搜索模块开始
//点击空白区域返回主页
returnMainPage.addEventListener("click", () => {
  search.classList.add("hidden");
});

//点击取消返回主页
cancelSearch.addEventListener("click", () => {
  search.classList.add("hidden");
});
//搜索模块结束

//大轮播图模块开始
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

//大轮播图立即查看按钮
const checkBox = document.querySelector(".checkbox");

//自动播放模块
let timeID_Big = setInterval(() => {
  bigCarouselNext.click();
}, 4500);

//大轮播图切换图片函数
function MoveBigImg(i) {
  bigCarouselContainer.style.transform = `translateX(-${i}00%)`;
  let move = 6 - i * 103.5;
  checkBox.style.left = `${move}%`;
}

let i = 1;
//切换到上一张
bigCarouselPrev.addEventListener("click", () => {
  clearInterval(timeID_Big);
  if (i !== 1) {
    bigCarouselIndicator[i - 1].classList.remove("active");
    i--;
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  } else {
    bigCarouselContainer.style.transition = "none";
    checkBox.style.transition = "none";
    MoveBigImg(7);
    bigCarouselIndicator[i - 1].classList.remove("active");
    i = 6;
    bigCarouselContainer.clientHeight; //强制渲染
    bigCarouselContainer.style.transition = "all 0.5s";
    checkBox.style.transition = "all 0.5s";
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  }
  timeID_Big = setInterval(() => {
    bigCarouselNext.click();
  }, 4500);
});

//切换到下一张
bigCarouselNext.addEventListener("click", () => {
  clearInterval(timeID_Big);
  if (i !== 6) {
    bigCarouselIndicator[i - 1].classList.remove("active");
    i++;
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  } else {
    bigCarouselContainer.style.transition = "none";
    checkBox.style.transition = "none";
    bigCarouselIndicator[i - 1].classList.remove("active");
    MoveBigImg(0);
    i = 1;
    bigCarouselContainer.clientHeight; //强制渲染
    bigCarouselContainer.style.transition = "all 0.5s";
    checkBox.style.transition = "all 0.5s";
    bigCarouselIndicator[i - 1].classList.add("active");
    MoveBigImg(i);
  }
  timeID_Big = setInterval(() => {
    //利用js自动调用点击事件
    bigCarouselNext.click();
  }, 4500);
});
//大轮播图模块结束

//乐享运动模块开始
//乐享运动模块每个选项
const hsSelect = document.querySelectorAll(".hs_menu li");

//乐享运动模块图片
const hsImg = document.querySelectorAll(".hs_menu li img");
//乐享运动图片移动
hsSelect.forEach((select, hs) => {
  select.addEventListener("mouseover", () => {
    hsImg[hs].style.left = "30px";
  });
  select.addEventListener("mouseleave", () => {
    hsImg[hs].style.left = "20px";
  });
});

//乐享运动模块结束

//关于迪卡侬模块开始
const adimg = document.querySelectorAll(".about_img img");
adimg.forEach((img) => {
  imgEvent(img);
});

//当季品类模块开始
//当季品类背景大图
const seasonBigimg = document.querySelector(".season_bigimg img");
//当季品类轮播图
const seasonCarousel = document.querySelector(".season_carousel_container");

//当季品类轮播图上一张
const seasonPrev = document.querySelector(".season .prev");

//当季品类轮播图下一张
const seasonNext = document.querySelector(".season .next");

//当季品类单个商品
const seasonProduct = document.querySelectorAll(".season_product");

//当季品类小购物车
const seasonShopcar = document.querySelectorAll(".season_product div");

//调用函数
imgEvent(seasonBigimg);
buttonEvent(seasonPrev);
buttonEvent(seasonNext);

let sc = 0;
//轮播图左移
seasonPrev.addEventListener("click", () => {
  if (seasonPrev.style.cursor !== "not-allowed") {
    sc = 0;
    seasonCarousel.style.transform = `translateX(-${sc}%)`;
    seasonPrev.style.color = "rgb(186, 193, 200)";
    seasonPrev.style.cursor = "not-allowed";
    seasonPrev.classList.remove("button_hover");
    seasonNext.style.cursor = "pointer";
    seasonNext.style.color = "black";
  }
});

//轮播图右移
seasonNext.addEventListener("click", () => {
  if (seasonNext.style.cursor !== "not-allowed") {
    sc = 20.3;
    seasonCarousel.style.transform = `translateX(-${sc}%)`;
    seasonNext.style.cursor = "not-allowed";
    seasonNext.style.color = "rgb(186, 193, 200)";
    seasonNext.classList.remove("button_hover");
    seasonPrev.style.cursor = "pointer";
    seasonPrev.style.color = "black";
  }
});

//经过商品显示购物车
productOver(seasonProduct, seasonShopcar);
//当季品类模块结束

//侬说搭配模块开始
//背景大图
const lsBigimg = document.querySelector(".ls_bigimg");
//轮播图容器
const lsCarousel = document.querySelector(".ls_carousel_container");
//上一张按钮
const lsPrev = document.querySelector(".lon_say .prev");
//下一张按钮
const lsNext = document.querySelector(".lon_say .next");
//单个商品
const lsProduct = document.querySelectorAll(".ls_carousel_product");
//购物车
const lsShopcar = document.querySelectorAll(".ls_carousel_product div");

//调用函数
imgEvent(lsBigimg);
buttonEvent(lsPrev);
buttonEvent(lsNext);

let ls = 0;
//轮播图左移
lsPrev.addEventListener("click", () => {
  if (lsPrev.style.cursor !== "not-allowed") {
    ls = 0;
    lsCarousel.style.transform = `translateX(-${ls}%)`;
    lsPrev.style.color = "rgb(186, 193, 200)";
    lsPrev.style.cursor = "not-allowed";
    lsPrev.classList.remove("button_hover");
    lsNext.style.cursor = "pointer";
    lsNext.style.color = "black";
  }
});

//轮播图右移
lsNext.addEventListener("click", () => {
  if (lsNext.style.cursor !== "not-allowed") {
    ls = 103.5;
    lsCarousel.style.transform = `translateX(-${ls}%)`;
    lsNext.style.cursor = "not-allowed";
    lsNext.style.color = "rgb(186, 193, 200)";
    lsNext.classList.remove("button_hover");
    lsPrev.style.cursor = "pointer";
    lsPrev.style.color = "black";
  }
});
//经过商品显示购物车
productOver(lsProduct, lsShopcar);

//折扣专区模块
//大图
const discountBigimg = document.querySelector(".discount img");
imgEvent(discountBigimg);

//迪家创新模块
const invCarousel = document.querySelector(".inv_carousel_container");
const invPrev = document.querySelector(".innovation .prev");
const invNext = document.querySelector(".innovation .next");
const invImg = document.querySelectorAll(".inv_carousel_img img");
//切换图片函数
function invChange(inv) {
  let j = inv * 51;
  invCarousel.style.transform = `translateX(-${j}%)`;
}

//自动播放
let timeID_inv = setInterval(() => {
  invNext.click();
}, 4500);

let inv = 1;
//上一张
invPrev.addEventListener("click", () => {
  clearInterval(timeID_inv);
  if (inv !== 1) {
    inv--;
    invChange(inv);
  } else {
    invCarousel.style.transition = "none";
    invChange(4);
    inv = 3;
    invCarousel.clientHeight; //强制渲染
    invCarousel.style.transition = "all 0.5s";
    invChange(inv);
  }
  timeID_inv = setInterval(() => {
    invNext.click();
  }, 4500);
});

//下一张
invNext.addEventListener("click", () => {
  clearInterval(timeID_inv);
  if (inv !== 3) {
    inv++;
    invChange(inv);
  } else {
    invCarousel.style.transition = "none";
    invChange(0);
    inv = 1;
    invCarousel.clientHeight; //强制渲染
    invCarousel.style.transition = "all 0.5s";
    invChange(inv);
  }
  timeID_inv = setInterval(() => {
    invNext.click();
  }, 4500);
});

//鼠标经过放大
invImg.forEach((img) => {
  imgEvent(img);
});

//服务模块
const serviceType = document.querySelectorAll(".service li");
serviceType.forEach((p) => {
  p.addEventListener("mouseover", () => {
    p.style.backgroundColor = "white";
  });
  p.addEventListener("mouseleave", () => {
    p.style.backgroundColor = "transparent";
  });
});

//热卖推荐模块
const recommendProduct = document.querySelectorAll(".recommend_menu li");
const recommendShopcar = document.querySelectorAll(
  ".recommend_menu .icon-gouwuche"
);
productOver(recommendProduct, recommendShopcar);

//跳转界面
//主界面
const bigCarousel = document.querySelector(".big_carousel");
const happySport = document.querySelector(".happy_sport");
const aboutDecathlon = document.querySelector(".about_decathlon");
const season = document.querySelector(".season");
const lonSay = document.querySelector(".lon_say");
const fanHot = document.querySelector(".fan_hot");
const discount = document.querySelector(".discount");
const innovation = document.querySelector(".innovation");
const service = document.querySelector(".service");
const recommend = document.querySelector(".recommend");
const productReturn = document.querySelector(".product_return");

//会员权益界面
const memberHeader = document.querySelector(".member_header");
const joinDecathlon = document.querySelector(".join_decathlon");
const memberBenefit = document.querySelector(".member_benefit");
const specialPlace = document.querySelector(".special_place");
const strategy = document.querySelector(".strategy");

//点击会员权益切换
navMenu[4].addEventListener("click", () => {
  bigCarousel.classList.add("hidden");
  happySport.classList.add("hidden");
  aboutDecathlon.classList.add("hidden");
  season.classList.add("hidden");
  lonSay.classList.add("hidden");
  fanHot.classList.add("hidden");
  discount.classList.add("hidden");
  innovation.classList.add("hidden");
  service.classList.add("hidden");
  recommend.classList.add("hidden");
  productReturn.classList.add("hidden");
  memberHeader.classList.remove("hidden");
  joinDecathlon.classList.remove("hidden");
  memberBenefit.classList.remove("hidden");
  specialPlace.classList.remove("hidden");
  strategy.classList.remove("hidden");
});

logo.addEventListener("click", () => {
  bigCarousel.classList.remove("hidden");
  happySport.classList.remove("hidden");
  aboutDecathlon.classList.remove("hidden");
  season.classList.remove("hidden");
  lonSay.classList.remove("hidden");
  fanHot.classList.remove("hidden");
  discount.classList.remove("hidden");
  innovation.classList.remove("hidden");
  service.classList.remove("hidden");
  recommend.classList.remove("hidden");
  productReturn.classList.remove("hidden");
  memberHeader.classList.add("hidden");
  joinDecathlon.classList.add("hidden");
  memberBenefit.classList.add("hidden");
  specialPlace.classList.add("hidden");
  strategy.classList.add("hidden");
});

//会员福利模块
//背景色
const gradientOverlay = document.querySelectorAll(".gradient_overlay");

//每个小框
const memberBenefitSelect = document.querySelectorAll(
  ".member_benefit_textbox"
);

//小框内文本
const memberBenefitText = document.querySelectorAll(
  ".member_benefit_textbox h3"
);

//工作室按钮
const workroom = document.querySelector(".workroom");

//立即加入按钮
const joinNow = document.querySelector(
  ".member_benefit_bottom div:nth-child(1)"
);

//迪卡侬会员须知按钮
const memberKnow = document.querySelector(
  ".member_benefit_bottom div:nth-child(2)"
);

//移动文本
memberBenefitSelect.forEach((select, s) => {
  select.addEventListener("mouseover", () => {
    memberBenefitText[s].style.marginTop = "7%";
    gradientOverlay[s].style.opacity = "1";
  });
  select.addEventListener("mouseleave", () => {
    memberBenefitText[s].style.marginTop = "45%";
    gradientOverlay[s].style.opacity = "0";
  });
});

//鼠标经过按钮变色
workroom.addEventListener("mouseover", () => {
  workroom.style.backgroundColor = "#3643ba";
  workroom.style.border = "0px solid white";
});
workroom.addEventListener("mouseleave", () => {
  workroom.style.backgroundColor = "transparent";
  workroom.style.border = "1px solid white";
});

joinNow.addEventListener("mouseover", () => {
  joinNow.style.backgroundColor = "rgb(53, 57, 146)";
});
joinNow.addEventListener("mouseleave", () => {
  joinNow.style.backgroundColor = "#3643ba";
});

memberKnow.addEventListener("mouseover", () => {
  memberKnow.style.backgroundColor = "rgb(223, 225, 242)";
});
memberKnow.addEventListener("mouseleave", () => {
  memberKnow.style.backgroundColor = "#ecedf8";
});

//燃值专区模块
const specialPlaceSelect = document.querySelectorAll(".special_place_menu li");
const specialPlaceImg = document.querySelectorAll(".special_place_menu li img");

specialPlaceSelect.forEach((select, s) => {
  select.addEventListener("mouseover", () => {
    specialPlaceImg[s].src = "resources/img/member/erweima2.png";
    specialPlaceImg[s].style.width = "55%";
    select.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
  });
  select.addEventListener("mouseleave", () => {
    specialPlaceImg[s].src = `resources/img/member/part2_${s + 1}.png`;
    specialPlaceImg[s].style.width = "35%";
    select.style.boxShadow = "none";
  });
});

//回到顶部按钮
const backTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    backTop.classList.remove("hidden");
    backTop.clientHeight;
    backTop.style.bottom = "10%";
  } else {
    backTop.classList.add("hidden");
    backTop.clientHeight;
    backTop.style.bottom = "7%";
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 平滑滚动
  });
});
