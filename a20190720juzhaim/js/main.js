/**
 * Date: 2019/7/24
 */

Common.init({
  qqAppId: '1105641716',
  wxAppId: 'wx123790a68951765e',
  homePage: '',
  mHomePage: window.location.protocol + '//zhuoyao.qq.com/cp/a20190720juzhaim/index.html',
});

ShareInfo.init({
  title: '嘿~这有份你的嘉年华邀请函！',
  desc: '一起来捉妖首届线下拒宅嘉年华即将开启，一键关注就送限量礼包！',
  logoUrl: window.location.protocol + '//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/shareicon.jpg',
}).normalShare(Common.mHomePage);

User.setOpenlink('https://game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90228987&appid=wx123790a68951765e&url=https%3A%2F%2Fzhuoyao.qq.com%2Fcp%2Fa20190720juzhaim%2Findex.html');

// shareInfo
var Action = {
  Qual: [ '0', '1' ],
  lastTarget: '',
  initQual: function () {
    this.Qual = ReseInfo.sExtend3.split('|');
  },
  // 静默
  initSilent: function () {

    if (ReseInfo.sExtend1 != '1') {
      amsInfo.push({
        'el': 'silentRese',
        'activityId': '10410', 			// 模块实例号
        'iFlowId': '590507',
        'sNeedSubmitPopDiv': false,
        success: function (res) {
          console.log(res);
        },
        failure: function () {

        }
      }).get('silentRese').submit();
    }

  },
  // 关注
  initRese: function () {

    $('.check').click(function () {
      if (ReseInfo.isRsvt()) {
        $('.invitation').show();
        share(name, num, daname, img_src);
      } else {
        alert('你还没有关注哦');
        return false;
      }
    });

    amsInfo.push({
      'el': '.appointment',
      'activityId': '10409', 			// 模块实例号
      'iFlowId': '590496',
      beforeSubmit: function () {

        if (Action.checkTime()) {
          TGDialogS('tickets');
          //alert('御灵师久等啦！嘉年华购票将于14：00重新开放，敬请期待～');
          return false;
        }

        if (ReseInfo.isRsvt()) {

          $('.invitation').show();
          share(name, num, daname, img_src);

          return false;
        }

        sData.sNickName = User.getNickName();
        sData.sHeadImg = 'http://q.qlogo.cn/' + ReseInfo.num1;

        return true;
      },
      success: function (res) {

        if (res.iRet != 0) {
          alert(res.sMsg);
          return false;
        }

        if (res.jData.ret != 0) {
          alert(res.jData.msg);
          return false;
        }

        $(".invitation").show();
        share(name, num, daname, img_src);

        ReseInfo.afterRese(res.jData);
        $('.appointment').css({
          'background': 'url(//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/getfol.png)',
          'background-size': '100%',
        });

      },
    });
  },
  // 发送短信
  initSendMsg: function () {

    var lock = false;
    var count = 60;
    var originalText;

    function countDown() {
      lock = true;
      originalText = $('.getnumber').text();

      $('.getnumber').css({
        'display': 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffc640',
        borderRadius: '90px',
        textIndent: 0,
        color: '#000000'
      });

      var interval = setInterval(function () {

        if (count <= 0) {
          lock = true;
          count = 60;
          clearInterval(interval);
          $('.getnumber').text(originalText).attr('style', '');
          return false;
        }
        console.log(count);
        $('.getnumber').text(count);
        count--;

      }, 1000);

    }

    amsInfo.push({
      'el': '.getnumber',
      'iActivityId': '244086',  // AMS活动号
      'activityId': '10409', 			// 模块实例号
      'iFlowId': '590490',
      beforeSubmit: function () {

        var sMobile = $('#phonenumber').val();

        if (count > 0 && count !== 60) {
          return false;
        }

        if (!ReseInfo.isRsvt()) {
          alert('你还没有关注哦');
          return false;
        }

        if (ReseInfo.isBindMobile()) {
          alert('你已绑定手机');
          return false;
        }

        if (!milo.isMobile(sMobile)) {
          alert('请输入正确的手机号码');
          return false;
        }

        sData.sMobile = sMobile;
        countDown();
        return true;
      },
      success: function (res) {

        if (res.iRet != 0) {
          alert(res.sMsg);
          return false;
        }

        if (res.jData.ret != 0) {
          alert(res.jData.msg);
          return false;
        }


        alert('发送成功');
      },
    });
  },
  // 手机
  initMobileSave: function () {

    amsInfo.push({
      'el': '#bind',
      'activityId': '10409', 			// 模块实例号
      'iFlowId': '590500',
      beforeSubmit: function () {

        var sMobile = $('#phonenumber').val();
        var sVftCode = $('#number').val();

        if (!ReseInfo.isRsvt()) {
          alert('你还没有关注哦');
          return false;
        }

        if (ReseInfo.isBindMobile()) {
          alert('你已绑定手机');
          return false;
        }

        if (!milo.isMobile(sMobile)) {
          alert('请输入正确的手机号码');
          return false;
        }

        if (!/^[a-zA-Z\d]{6}$/.test(sVftCode)) {
          alert('请输入正确的验证码');
          return false;
        }

        sData.sMobile = sMobile;
        sData.sVftCode = sVftCode;

        return true;
      },
      success: function (res) {

        if (res.iRet != 0) {
          alert(res.sMsg);
          return false;
        }

        if (res.jData.ret != 0) {
          alert(res.jData.msg);
          return false;
        }

        ReseInfo.mobileStatus = '1';
        $('.binding').addClass("on");
        alert('绑定手机成功');
        closeDialog();
      },
    });
  },
  // 绑定角色
  initBindRole: function () {

    RoleBind.init({
      gameId: 'gwgo',
      pop: function () {
        TGDialogS('role');
      },
      submitChain: function () {
        amsInfo.get('commitRole').submit();
      }
    });

    amsInfo.push({
      el: 'queryRole',
      type: "query",
      iQueryFlowID: 590777,
      iFlowId: 590778,
      success: function (res) {
        RoleBind.setDataByModuleRes(res);
      },
      failure: function () {
        //未绑定时的扩展处理
      }
    });

    amsInfo.push({
      el: 'commitRole',
      type: "comit",
      needPopupRole: false,//是否弹默认角色框选角色
      roleInfo: null,//如果needPopupRole为false，需要自定义传入角色信息，roleInfo需要传角色信息对象
      iQueryFlowID: 590778,
      iFlowId: 590777,
      service: "gwgo",
      success: function (res) {
        //已绑定时的扩展处理
        RoleBind.setDataByModuleRes(res);
        if (Action.lastTarget) {
          amsInfo.get(Action.lastTarget).submit();
        }
      },
      failure: function () {
        //未绑定时的扩展处理
      }
    });

    if (ReseInfo.sExtend1 == '1') {
      amsInfo.get('queryRole').submit();
    }

  },
  // 关注礼包
  initResePack: function () {

    amsInfo.pushLott({
      el: '.orderreward',
      iAMSActivityId: '244086', // AMS活动号
      activityId: '295807', // 模块实例号
      iFlowId: '590665',
      beforeSubmit: function () {
        // 是否已经领取
        if (Action.Qual[ 0 ] == '1') {
          return false;
        }

        // 检查是否8月2号后
        if (!Action.checkTime()) {
          return false;
        }

        // 是否关注
        if (!ReseInfo.isRsvt()) {
          alert('你没有关注哦');
          return false;
        }

        // 是否绑定角色
        if (!RoleBind.hasBind()) {
          Action.lastTarget = this.el;
          RoleBind.open();
          return false;
        }

        // 检查是否领取
        return true;
      },
      success: function (res) {

        if (res.iRet != 0) {
          alert(res.sMsg);
          return false;
        }

        Action.Qual[ 0 ] = '1';
        Action.changeBtnToDisable();
        TGDialogS('success');
      }
    });

  },
  // 绑定奖励
  initBindPack: function () {

    amsInfo.pushLott({
      el: '#btn-to-bind',
      iAMSActivityId: '244086', // AMS活动号
      activityId: '295807', // 模块实例号
      iFlowId: '590776',
      beforeSubmit: function () {

        // 是否领取
        if (Action.Qual[ 1 ] == '1') {
          return false;
        }

        if (!ReseInfo.isRsvt()) {
          alert('你还没有关注哦');
          return false;
        }

        // 是否绑定手机
        if (!ReseInfo.isBindMobile()) {
          TGDialogS('phone');
          return false;
        }

        // 是否绑定角色
        if (!RoleBind.hasBind()) {
          Action.lastTarget = this.el;
          RoleBind.open();
          return false;
        }

        return true;
      },
      success: function (res) {

        if (res.iRet != 0) {
          alert(res.sMsg);
          return false;
        }

        Action.Qual[ 1 ] = '1';
        Action.changeBindBtnToDisable();
        TGDialogS('success');
      }
    });
  },
  // 渲染信息
  renderMsg: function () {

    name = User.getNickName(true);
    if (ReseInfo.isRsvt()) {
      num = (ReseInfo.user && ReseInfo.user.headImg) ? ReseInfo.user.headImg.replace('http://q.qlogo.cn/', '') : 60131;
    } else {
      num = ReseInfo.num1;
    }

    //share(name, num, daname, img_src);

    if (!Action.checkTime() && ReseInfo.isRsvt()) {
      $('.appointment').css({
        'background': 'url(//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/getfol.png)',
        'background-size': '100%',
      });
    }

    if (ReseInfo.isBindMobile()) {
      $('#btn-to-bind').addClass('on');
    }

    if (this.checkTime()) {
      this.changeBtnToEnable();
    }

    if (this.Qual[ 0 ] == '1') {
      this.changeBtnToDisable();
    }

    if (this.Qual[ 1 ] == '1') {
      this.changeBindBtnToDisable();
    }

  },
  // 更改按钮状态
  changeBtnToEnable: function () {

    // 抢先关注
    $('.appointment').css({
      'background': 'url(//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/getkit.png)',
      'background-size': '100%',
    });

    // 领取关注奖励
    $('.orderreward')
      .addClass('open')
      .css({
        'pointer-events': 'all',
        'background': 'url(//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/lqgzjl.png)',
        'background-size': '100%'
      });
  },
  changeBtnToDisable: function () {
    $('.orderreward').attr('style', '').css({
      // 'background':'url(//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/sprite.png) no-repeat 0 0/7.5rem 7.5rem;',
      'background-position': '-2.95rem -4.2rem',
    });
  },
  changeBindBtnToDisable: function () {
    $('#btn-to-bind').css({
      'background-position': '-2.95rem -4.2rem',
    });
  },
  checkTime: function () {
    var nowTime = (new Date()).getTime() / 1000;
    return (nowTime >= ReseInfo.sExtend2) || (nowTime >= 1564711200);
  }
};
// 时间是否满足
if (Action.checkTime()) {
  Action.changeBtnToEnable();
}

baseReady(function () {

  // 游戏就注册点击按钮时间
  if (milo.request('roleid')) {
    User.initMobileLoginBtn('.qqLoginBtn', '.wxLoginBtn');
    $('.appointment,.check,#btn-to-bind').click(function () {
      TGDialogS('load');
    });
    return false;
  }

  User.loginInfoShow(true);

  window.amsInfo = new AmsInfo({
    'iActivityId': '244086',  // AMS活动号
    'activityId': '10409', 			// 模块实例号
    'iFlowId': '590489',
  }, function (res) {

    console.log(res);

    ReseInfo.init(res.jData);

    Action.initQual();
    Action.renderMsg();
    Action.initSilent();
    Action.initRese();
    Action.initSendMsg();
    Action.initMobileSave();
    Action.initBindRole();
    Action.initResePack();
    Action.initBindPack();

  });

}, function () {

  User.initLogin();

  if (!Common.isQQ() && !Common.isWx()) {
    //TGDialogS('load');
    $('.appointment,.check,#btn-to-bind').click(function () {
      TGDialogS('load');
    });
  }

});/* #t6Hl8#EA0C01DE6FA1B304668497B034A3ED28 */