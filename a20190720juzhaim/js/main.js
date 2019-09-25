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
  title: '��~���з���ļ��껪���뺯��',
  desc: 'һ����׽���׽����¾�լ���껪����������һ����ע�������������',
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
  // ��Ĭ
  initSilent: function () {

    if (ReseInfo.sExtend1 != '1') {
      amsInfo.push({
        'el': 'silentRese',
        'activityId': '10410', 			// ģ��ʵ����
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
  // ��ע
  initRese: function () {

    $('.check').click(function () {
      if (ReseInfo.isRsvt()) {
        $('.invitation').show();
        share(name, num, daname, img_src);
      } else {
        alert('�㻹û�й�עŶ');
        return false;
      }
    });

    amsInfo.push({
      'el': '.appointment',
      'activityId': '10409', 			// ģ��ʵ����
      'iFlowId': '590496',
      beforeSubmit: function () {

        if (Action.checkTime()) {
          TGDialogS('tickets');
          //alert('����ʦ�õ��������껪��Ʊ����14��00���¿��ţ������ڴ���');
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
  // ���Ͷ���
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
      'iActivityId': '244086',  // AMS���
      'activityId': '10409', 			// ģ��ʵ����
      'iFlowId': '590490',
      beforeSubmit: function () {

        var sMobile = $('#phonenumber').val();

        if (count > 0 && count !== 60) {
          return false;
        }

        if (!ReseInfo.isRsvt()) {
          alert('�㻹û�й�עŶ');
          return false;
        }

        if (ReseInfo.isBindMobile()) {
          alert('���Ѱ��ֻ�');
          return false;
        }

        if (!milo.isMobile(sMobile)) {
          alert('��������ȷ���ֻ�����');
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


        alert('���ͳɹ�');
      },
    });
  },
  // �ֻ�
  initMobileSave: function () {

    amsInfo.push({
      'el': '#bind',
      'activityId': '10409', 			// ģ��ʵ����
      'iFlowId': '590500',
      beforeSubmit: function () {

        var sMobile = $('#phonenumber').val();
        var sVftCode = $('#number').val();

        if (!ReseInfo.isRsvt()) {
          alert('�㻹û�й�עŶ');
          return false;
        }

        if (ReseInfo.isBindMobile()) {
          alert('���Ѱ��ֻ�');
          return false;
        }

        if (!milo.isMobile(sMobile)) {
          alert('��������ȷ���ֻ�����');
          return false;
        }

        if (!/^[a-zA-Z\d]{6}$/.test(sVftCode)) {
          alert('��������ȷ����֤��');
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
        alert('���ֻ��ɹ�');
        closeDialog();
      },
    });
  },
  // �󶨽�ɫ
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
        //δ��ʱ����չ����
      }
    });

    amsInfo.push({
      el: 'commitRole',
      type: "comit",
      needPopupRole: false,//�Ƿ�Ĭ�Ͻ�ɫ��ѡ��ɫ
      roleInfo: null,//���needPopupRoleΪfalse����Ҫ�Զ��崫���ɫ��Ϣ��roleInfo��Ҫ����ɫ��Ϣ����
      iQueryFlowID: 590778,
      iFlowId: 590777,
      service: "gwgo",
      success: function (res) {
        //�Ѱ�ʱ����չ����
        RoleBind.setDataByModuleRes(res);
        if (Action.lastTarget) {
          amsInfo.get(Action.lastTarget).submit();
        }
      },
      failure: function () {
        //δ��ʱ����չ����
      }
    });

    if (ReseInfo.sExtend1 == '1') {
      amsInfo.get('queryRole').submit();
    }

  },
  // ��ע���
  initResePack: function () {

    amsInfo.pushLott({
      el: '.orderreward',
      iAMSActivityId: '244086', // AMS���
      activityId: '295807', // ģ��ʵ����
      iFlowId: '590665',
      beforeSubmit: function () {
        // �Ƿ��Ѿ���ȡ
        if (Action.Qual[ 0 ] == '1') {
          return false;
        }

        // ����Ƿ�8��2�ź�
        if (!Action.checkTime()) {
          return false;
        }

        // �Ƿ��ע
        if (!ReseInfo.isRsvt()) {
          alert('��û�й�עŶ');
          return false;
        }

        // �Ƿ�󶨽�ɫ
        if (!RoleBind.hasBind()) {
          Action.lastTarget = this.el;
          RoleBind.open();
          return false;
        }

        // ����Ƿ���ȡ
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
  // �󶨽���
  initBindPack: function () {

    amsInfo.pushLott({
      el: '#btn-to-bind',
      iAMSActivityId: '244086', // AMS���
      activityId: '295807', // ģ��ʵ����
      iFlowId: '590776',
      beforeSubmit: function () {

        // �Ƿ���ȡ
        if (Action.Qual[ 1 ] == '1') {
          return false;
        }

        if (!ReseInfo.isRsvt()) {
          alert('�㻹û�й�עŶ');
          return false;
        }

        // �Ƿ���ֻ�
        if (!ReseInfo.isBindMobile()) {
          TGDialogS('phone');
          return false;
        }

        // �Ƿ�󶨽�ɫ
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
  // ��Ⱦ��Ϣ
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
  // ���İ�ť״̬
  changeBtnToEnable: function () {

    // ���ȹ�ע
    $('.appointment').css({
      'background': 'url(//game.gtimg.cn/images/gwgo/cp/a20190720juzhaim/getkit.png)',
      'background-size': '100%',
    });

    // ��ȡ��ע����
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
// ʱ���Ƿ�����
if (Action.checkTime()) {
  Action.changeBtnToEnable();
}

baseReady(function () {

  // ��Ϸ��ע������ťʱ��
  if (milo.request('roleid')) {
    User.initMobileLoginBtn('.qqLoginBtn', '.wxLoginBtn');
    $('.appointment,.check,#btn-to-bind').click(function () {
      TGDialogS('load');
    });
    return false;
  }

  User.loginInfoShow(true);

  window.amsInfo = new AmsInfo({
    'iActivityId': '244086',  // AMS���
    'activityId': '10409', 			// ģ��ʵ����
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