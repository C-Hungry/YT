<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- <div class="ani ani-1" swiper-animate-effect="flipInY" swiper-animate-duration="1.5s" swiper-animate-delay="0.5s">
    </div>-->
    <swiper-slide class="slide-1">
      <div class="language">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            {{
              lang == "zh" ? "简体中文" : lang == "en" ? "English" : "繁体中文"
            }}<i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            <!-- <el-dropdown-item disabled command="tw">繁体中文</el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div
        class="circle-top ani ani-1"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      ></div>
      <div
        class="circle-bottom ani ani-1"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      ></div>
      <div
        class="girl ani ani-1"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s"
      ></div>
      <div class="yt">
        <img src="../assets/home/logo.png" alt />
      </div>
      <div
        class="register title ani ani-1"
        :class="{ 'register-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
      >
        {{ $t("download.register") }}
      </div>
      <div
        class="register-desc desc ani ani-1"
        :class="{ 'register-desc-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
      >
        {{ $t("download.registerDesc") }}
      </div>
      <a
        class="download ani ani-1"
        :href="downloadUrl"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
        >{{ $t("download.downloadAndExperience") }}</a
      >
    </swiper-slide>
    <swiper-slide class="slide-2">
      <div
        class="gift ani ani-2"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      ></div>
      <div
        class="hongbao ani ani-2"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      ></div>
      <div
        class="piaodai ani ani-2"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      ></div>
      <div
        class="placard ani ani-2"
        swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s"
      ></div>
      <div
        class="online-interactive title ani ani-2"
        :class="{ 'online-interactive-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
      >
        {{ $t("download.onlineInteractive") }}
      </div>
      <div
        class="online-interactive-desc desc ani ani-2"
        :class="{ 'online-interactive-desc-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
      >
        {{ $t("download.onlineInteractiveDesc") }}
      </div>
      <a
        class="download ani ani-2"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
        :href="downloadUrl"
        >{{ $t("download.downloadAndExperience") }}</a
      >
    </swiper-slide>
    <swiper-slide class="slide-3">
      <div
        class="screen ani ani-3"
        swiper-animate-effect="fadeInDown"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s"
      ></div>
      <div
        class="sanjiao1 ani ani-3"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      ></div>
      <div
        class="sanjiao2 ani ani-3"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      ></div>
      <div
        class="sanjiao3 ani ani-3"
        swiper-animate-effect="fadeInRight"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      ></div>
      <div
        class="party title ani ani-3"
        :class="{ 'party-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
      >
        {{ $t("download.party") }}
      </div>
      <div
        class="party-desc desc ani ani-3"
        :class="{ 'party-desc-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
      >
        {{ $t("download.partyDesc") }}
      </div>
      <a
        class="download ani ani-3"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.9s"
        :href="downloadUrl"
        >{{ $t("download.downloadAndExperience") }}</a
      >
    </swiper-slide>
    <swiper-slide class="slide-4">
      <div class="car"></div>
      <div
        class="svip title ani ani-4"
        :class="{ 'svip-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      >
        {{ $t("download.SVIP") }}
      </div>
      <div
        class="svip-desc desc ani ani-4"
        :class="{ 'svip-desc-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      >
        {{ $t("download.SVIPDesc") }}
      </div>
      <a
        class="download ani ani-4"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
        :href="downloadUrl"
        >{{ $t("download.downloadAndExperience") }}</a
      >
    </swiper-slide>
    <swiper-slide class="slide-5">
      <div class="map-bg"></div>
      <div
        class="about-yt title ani ani-5"
        :class="{ 'about-yt-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      >
        {{ $t("download.aboutYT") }}
      </div>
      <div
        class="about-yt-desc desc ani ani-5"
        :class="{ 'about-yt-desc-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
      >
        {{ $t("download.aboutYTDesc") }}
      </div>
      <a
        class="download ani ani-5"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.3s"
        :href="downloadUrl"
        >{{ $t("download.downloadAndExperience") }}</a
      >
      <div
        class="contact-us title ani ani-5"
        :class="{ 'contact-us-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      >
        {{ $t("download.contactUS") }}
      </div>
      <div
        class="contact-us-desc desc ani ani-5"
        :class="{ 'contact-us-desc-en': lang == 'en' }"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      >
        {{ $t("download.contactByEmail") }}
      </div>
      <div
        class="contact-us-email desc ani ani-5"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      >
        {{ $t("download.contactEmail") }}
      </div>
      <div
        class="network-record ani ani-5"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.6s"
      >
        <div>{{ $t("download.networkForRecord1") }}</div>
        <!-- <div>{{ $t("download.networkForRecord2") }}</div>
        <div>{{ $t("download.networkForRecord3") }}</div> -->
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
export default {
  name: "home",
  data() {
    let _this = this;
    return {
      lang: "zh",
      downloadUrl: "",
      swiperOption: {
        direction: "vertical", // 垂直切换选项
        noSwiping: true,
        height: window.innerHeight,
        autoHeight: true,
        noSwipingSelector: "input",
        on: {
          init() {
            _this.$swiperAnimateCache(this);
            _this.$swiperAnimate(this);
            _this.removeClass(0);
          },
          slideChangeTransitionStart() {
            _this.handleTransitionStart(
              _this.$refs.mySwiper.swiper.activeIndex
            );
          },
          slideChangeTransitionEnd() {
            _this.removeClass(_this.$refs.mySwiper.swiper.activeIndex);
          },
          slideChange() {
            _this.$swiperAnimate(this);
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    removeClass(index) {
      let domArr = document.getElementsByClassName(`ani-${index + 1}`);
      if (domArr && domArr.length) {
        for (let i = 0; i < domArr.length; i++) {
          domArr[i].classList.remove("ani");
        }
      }
    },
    handleTransitionStart(index) {},
    handleCommand(command) {
      localStorage.setItem("lang", command);
      location.reload();
    }
  },
  created() {
    if (localStorage.getItem("lang")) {
      this.lang = localStorage.getItem("lang");
      this.$i18n.locale = this.lang;
    } else {
      this.lang =
        (navigator.browserLanguage || navigator.language).toLowerCase() ==
        "zh-cn"
          ? "zh"
          : "en";
      this.$i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
    }
    this.$axios({
      url: "https://api.yuya.chat/versions/latest",
      method: "get"
    }).then(res => {
      if (res.data.data) {
        let data = res.data.data;
        let u = navigator.userAgent;
        let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isAndroid) {
          this.downloadUrl = (data.android && data.android.url) || "";
        }
        if (isIOS) {
          this.downloadUrl = (data.ios && data.ios.url) || "";
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.el-dropdown-menu--medium .el-dropdown-menu__item {
  padding: 5px 40px;
}
.swiper-slide {
  transform: perspective(1000);
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  .title {
    height: 100px;
    font-size: 72px;
    font-family: PingFang-SC-Heavy, PingFang-SC;
    font-weight: 800;
    color: rgba(0, 0, 0, 1);
    line-height: 100px;
    letter-spacing: 2px;
    position: relative;
  }
  .desc {
    font-size: 32px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    line-height: 48px;
    letter-spacing: 2px;
    position: relative;
  }
  .download {
    display: block;
    height: 96px;
    line-height: 96px;
    background: #dfc4a1;
    border-radius: 4px;
    text-align: center;
    font-size: 28px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: rgba(70, 54, 34, 1);
    letter-spacing: 2px;
  }
}
.slide-1 {
  padding: 58px 40px 0 60px;
  background: #fff;
  .language {
    position: relative;
    float: right;
    z-index: 1000;
  }
  .yt {
    margin-bottom: 152px;
    img {
      width: 224px;
      height: 84px;
    }
  }
  .register {
    margin-bottom: 16px;
    z-index: 10;
  }
  .register-en {
    font-size: 40px;
  }
  .register-desc {
    width: 506px;
    margin-bottom: 42px;
  }
  .register-desc-en {
    font-size: 28px;
  }
  .download {
    width: 200px;
  }
  .circle-top {
    width: 900px;
    height: 900px;
    background-image: url(../assets/home/circle-yellow.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -338px;
    right: -488px;
  }
  .circle-bottom {
    width: 900px;
    height: 900px;
    background-image: url(../assets/home/circle-green.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: -450px;
    left: -468px;
    z-index: 10;
  }
  .girl {
    width: 530px;
    height: 878px;
    background-image: url(../assets/home/girl.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: -32px;
    right: -38px;
  }
}
.slide-2 {
  background-color: #f1e5d6;
  .placard {
    position: relative;
    width: 400px;
    height: 800px;
    margin: -56px auto 120px auto;
    background-image: url(../assets/home/girl2.png);
    background-size: cover;
  }
  .online-interactive {
    width: 524px;
    margin: 0 auto 16px auto;
  }
  .online-interactive-desc {
    width: 516px;
    margin: 0 auto 54px auto;
  }
  .online-interactive-en {
    width: 624px;
    font-size: 36px;
    margin: 0 auto;
  }
  .online-interactive-desc-en {
    width: 616px;
    font-size: 28px;
    margin: 0 auto 36px auto;
  }
  .download {
    width: 516px;
    margin: 0 auto 0 auto;
  }
  .gift {
    width: 170px;
    height: 194px;
    position: absolute;
    top: 134px;
    left: 10px;
    background-image: url(../assets/home/gift.png);
    background-size: cover;
  }
  .hongbao {
    width: 184px;
    height: 184px;
    position: absolute;
    top: 583px;
    right: -27px;
    background-image: url(../assets/home/hongbao.png);
    background-size: cover;
  }
  .piaodai {
    width: 400px;
    height: 452px;
    position: absolute;
    top: 382px;
    left: 0;
    background-image: url(../assets/home/piaodai.png);
    background-size: cover;
  }
}
.slide-3 {
  background-color: #1b1b1b;
  .screen {
    position: relative;
    width: 400px;
    height: 798px;
    margin: -54px auto 120px auto;
    background-image: url(../assets/home/screen.png);
    background-size: cover;
    z-index: 5;
  }
  .party {
    color: #ffffff;
    width: 524px;
    margin: 0 auto 16px auto;
  }
  .party-desc {
    color: #ffffff;
    width: 516px;
    margin: 0 auto 54px auto;
  }
  .party-en {
    width: 624px;
    font-size: 36px;
    margin: -40px auto 0 auto;
  }
  .party-desc-en {
    width: 616px;
    font-size: 28px;
    margin: 0 auto 36px auto;
  }
  .download {
    width: 516px;
    margin: 0 auto 0 auto;
  }
  .sanjiao1 {
    width: 210px;
    height: 180px;
    position: absolute;
    top: -20px;
    left: 72px;
    background-image: url(../assets/home/sanjiao1.png);
    background-size: cover;
    z-index: 10;
  }
  .sanjiao2 {
    width: 232px;
    height: 478px;
    position: absolute;
    top: 332px;
    left: 60px;
    background-image: url(../assets/home/sanjiao2.png);
    background-size: cover;
  }
  .sanjiao3 {
    width: 184px;
    height: 440px;
    position: absolute;
    top: 310px;
    right: 8px;
    background-image: url(../assets/home/sanjiao3.png);
    background-size: cover;
  }
}
.slide-4 {
  background-color: #000002;
  .car {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 750px;
    background-image: url(../assets/home/car.png);
    background-size: cover;
  }
  .svip {
    color: #ffffff;
    width: 524px;
    margin: 218px auto 18px auto;
  }
  .svip-desc {
    position: relative;
    color: #ffffff;
    width: 516px;
    margin: 0 auto 54px auto;
  }
  .svip-en {
    width: 624px;
    font-size: 36px;
  }
  .svip-desc-en {
    width: 616px;
    font-size: 28px;
    margin: 0 auto 36px auto;
  }
  .download {
    width: 516px;
    position: relative;
    margin: 0 auto;
  }
}
.slide-5 {
  background-color: #ffffff;
  .map-bg {
    position: absolute;
    top: 526px;
    left: 0;
    right: 0;
    height: 546px;
    background-image: url(../assets/home/map-bg.png);
    background-size: cover;
  }
  .about-yt {
    margin: 106px 0 48px 0;
    text-align: center;
  }
  .about-yt-desc {
    padding: 0 128px;
    margin-bottom: 70px;
    letter-spacing: 0;
  }
  .about-yt-en {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .about-yt-desc-en {
    font-size: 28px;
    padding: 0 60px;
    margin-bottom: 50px;
  }
  .download {
    position: relative;
    width: 508px;
    margin: 0 auto 104px auto;
  }
  .contact-us {
    margin: 0 0 46px 0;
    text-align: center;
  }
  .contact-us-desc {
    text-align: center;
    margin-bottom: 10px;
  }
  .contact-us-email {
    text-align: center;
    font-weight: bold;
  }
  .contact-us-en {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .contact-us-desc-en {
    text-align: left;
    padding: 0 60px;
    font-size: 28px;
  }
  .contact-us-email-en {
    font-size: 28px;
  }
  .network-record {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 24px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    line-height: 34px;
  }
}
</style>
