// 修正数据库新增流程
var sData = {};

var ShareInfo = {
  sAppId: 'wx598443c6ed33d9a1',
  init: function (options) {
    this.logoUrl = options.logoUrl;
    this.title = options.title;
    this.desc = options.desc;
    console.log('share init end');
    return this;
  },
  //分享操作
  normalShare: function (linkOrCb, successCb) {

    var link;
    if ('function' === typeof linkOrCb) {
      successCb = linkOrCb;
    } else {
      link = linkOrCb;
    }

    var homePage = link || Common.homePage;
    var imgUrl = this.logoUrl;
    var title = this.title;
    var desc = this.desc;
    var _this = this;

    console.log('分享操作');

    if (Common.isQQ()) {


      TGMobileShare({
        shareTitle: title,
        shareDesc: desc,
        shareImgUrl: imgUrl,
        shareLink: link,
        actName: 'a20090528yyz',
        onShare: {
          QQToQQSuccess: function () {
            successCb();
          },
          QQToQzoneSuccess: function () {
            successCb();
          },
          QQToMessageSuccess: function () {
            successCb();
          },
          QQToTimelineSuccess: function () {
            successCb();
          },
        }
      });


    } else if (Common.isWx()) {
      console.log('微信分享 init');
      need("biz.wxclient", function (WXClient) {
        console.log('get biz.wxclient');
        //微信客户初始化成功后，返回wx对象
        WXClient.init({ "sAppId": ShareInfo.sAppId }, function (wx) {
          console.log('get wxclient init');
          //分享用的信息对象
          var shareObj = {
            title: title,
            desc: desc,
            link: homePage,
            imgUrl: imgUrl,
            actName: "a20190517tianti", //点击流命名
            success: function (res) {
              successCb(res);
              //shareGift();
            },
            cancel: function (res) {
              //shareGift();
            }
          };
          //为发送给好友、分享到朋友圈、分享到QQ、分享到微博同时绑定分享事件
          WXClient.shareAll(shareObj);
          console.log('微信分享 end');
        });
      });
    }
  },
  //ark
  arkShare: function () {
    var shareInfo = {
      'title': '',
      'desc': '',
      'url': this.homePage,
      'imgUrl': this.logoUrl
    };
    mqq.invoke("QQApi", "shareArkMessage", {
      "appName": "com.tencent.gamecenter.gameshare", // appName是固定的
      "appView": "noDataView", // appView 目前支持两种，dataView和noDataView，具体后面有说明
      "appDesc": shareInfo.title,
      "promptText": shareInfo.title,
      "appMinVersion": "1.0.1.17",
      "appConfig": JSON.stringify({
        "type": "normal", // normal：非页卡模式（高度可自适应），card：页卡模式（高度固定）
        "forward": 1 // 0：不允许转发，1：允许转发
      }),
      "metaData": JSON.stringify({
        "shareData": {
          "appid": Common.qqAppId,
          "type": "image",
          "url": encodeURIComponent(shareInfo.imgUrl),
          "width": 600,
          "height": 338,
          "jumpUrl": encodeURIComponent(shareInfo.url),
          "scene": "154175",
          "desc": shareInfo.desc,
          "buttons": [
            //使用要替换url
            {
              "text": "查看更多",
              "url": encodeURIComponent(window.location.protocol + "//m.gamecenter.qq.com/directout/detail/1105906633?_wv=1031&appid=100692648&appType=1&asyncMode=3&ADTAG=share&nologin=1")
            },
            { "text": "立即加入", "url": encodeURIComponent(shareInfo.url) }
          ]
        }
      }),
      "callback": mqq.callback(function (result) {
        alert(result);
        if (result.result == 0) {
          //if(isShare)return;
          //amsCfg_519448.sData = sData;
          //amsSubmit(173852,519448);
        }
        //PTTSendClick('btn', 'a20181112gej.qqshare', 'success');
      })
    });
  }
};

var User = (function () {

  var _nickName = '';
  var _headImg = '';
  var _info = {};
  var _isLogin = false;

  return {
    isLogin: function () {
      return _isLogin;
    },
    // 微信有异步，需要判断然后操作
    init: function (userInfo, callback) {

      _isLogin = true;
      var _this = this;

      // 微信里面的获取
      if (Common.isWx()) {
        Common.LoginManagerCopy.getUserInfoByWxOpenId({
          "openid": milo.cookie.get("openid"),
          "access_token": milo.cookie.get("access_token")
        }, function (wxuser) {
          _info = wxuser;
          _this.setNickNameByWx();
          _this.setHeadImgByWx();
          'function' === typeof callback && callback();
        }, function () {
          console.log('获取用户信息失败');
          'function' === typeof callback && callback();
        });
      } else {
        _info = userInfo;
        // pc 微信信息设置
        if (userInfo.openId) {
          this.setNickNameByWx();
          this.setHeadImgByWx();
        } else {
          this.setNickNameByQQ();
          this.setHeadImgByQQ();
        }

        'function' === typeof callback && callback();
      }
    },
    setOpenlink: function (openlink) {
      this.openlink = openlink;
    },
    // qq登录按钮元素, wx按钮元素
    initLogin: function (options) {

      options = options || {};
      console.log(options);
      var qqEl = '.qqLoginBtn', wxEl = '.wxLoginBtn';
      var s_url = options.s_url || '';

      // qq环境
      if (Common.isQQ()) {
        Common.LoginManagerCopy.login({ s_url: s_url });
        return true;
      }

      // 微信环境
      if (Common.isWx()) {

        // 本页面登录
        var search = window.location.search;
        var link = window.location.protocol + '//' + window.location.host + window.location.pathname;

        if (search) {
          link += search + '&appid=' + Common.x8AppId + '&acctype=wx';
        } else {
          link += '?appid=' + Common.x8AppId + '&acctype=wx';
        }

        Common.LoginManagerCopy.loginByWX({
          redirect_wx_url: location.protocol + '//iu.qq.com/wxauth/redirect.html?url=' + encodeURIComponent(link)
        });

        return true;
      }

      // pc环境
      if (!Common.isMobileCheckByUrl()) {
        this.initPcLoginBtn(qqEl, wxEl);
        return;
      }

      this.initMobileLoginBtn(qqEl, wxEl);
      return false;

    },
    initPcLoginBtn: function (qqEl, wxEl) {
      // qqlogin

      $(qqEl).click(function () {
        Common.LoginManagerCopy.login();
      });

      // wxLogin
      $(wxEl).click(function () {
        need('biz.login', function (LoginManager) {
          LoginManager.checkLogin(function () {
            window.location.reload();
          }, function () {
            var link = window.location.href;
            LoginManager.loginByWx({
              appId: Common.pcX8AppId,
              originalUrl: location.protocol + "//iu.qq.com/wxauth/redirect.html?url=" + encodeURIComponent(link),
              gameDomain: 'iu.qq.com',
              serviceType: 'txsyhdh'
            });
          });
        });
      });
    },
    // 手机点击登录
    initMobileLoginBtn: function (qqEl, wxEl) {

      $(qqEl).click(function () {
        Common.jumpQQ();
      });

      var _this = this;
      $(wxEl).click(function () {
        window.location.href = _this.openlink;
      });

    },
    qin: function () {
      Common.LoginManagerCopy.login();
    },
    // 退出登录
    qout: function () {
      Common.LoginManagerCopy.logout({
        logoutCallback: function () {
          location.reload(true);
        }
      });
      setTimeout(function () {
        location.reload();
      }, 1000);
    },
    initLogout: function () {
      $('#logout').click(function () {
        Common.LoginManagerCopy.logout({
          logoutCallback: function () {
            location.reload(true);
          }
        });
        setTimeout(function () {
          location.reload();
        }, 1000);
      });
    },
    loginInfoShow: function (filterEmoji) {
      $('#unlogin').css('display', 'none');
      $('#logined').css('display', 'block');
      $('#nickName').text(this.getNickName(filterEmoji));
    },
    setInfoSData: function () {

    },
    setNickNameByQQ: function () {
      // qq 环境 nickName(uriencode)
      // pc qq nickname
      if (_info.uin) {
        _nickName = _info.nickname || '';
      } else if (_info.userUin) {
        _nickName = decodeURIComponent(_info.nickName || '');
      } else {
        _nickName = _info.nickname || '';
      }
      _nickName = _nickName.replace(/<span[^>]*?>.*?<\/span[^>]*>/ig, '');
      _nickName = milo.xss.filterWxNickName(_nickName);
    },
    setNickNameByWx: function () {
      if (typeof _info.nickname === 'undefined') {
        _info.nickname = '';
      }
      _nickName = _info.nickname.replace(/<span[^>]*?>.*?<\/span[^>]*>/ig, '');
      _nickName = milo.xss.filterWxNickName(_nickName);
    },
    setHeadImgByQQ: function () {
      var uin = _info.uin || _info.userUin;
      _headImg = window.location.protocol + '//q.qlogo.cn/g?b=qq&nk=' + uin + '&s=100';
    },
    setHeadImgByWx: function () {
      _headImg = _info.headimgurl != '' ? decodeURIComponent(_info.headimgurl + '/96') : this.defaultHeadImg;
    },
    //设置头像
    setDefaultHeadImg: function (headImg) {
      this.defaultHeadImg = headImg;
    },
    getInfo: function () {
      return _info;
    },
    getNickName: function (filterEmoji) {
      return filterEmoji ? _nickName.replace(/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig, '') : _nickName;
    },
    getHeadImg: function () {
      return _headImg;
    }
  };
})();

// 角色绑定
var RoleBind = {
  hasBind: function () {
    return !!this.data;
  },
  setData: function (data) {
    this.data = data;
  },
  setDataByModuleRes: function (res) {

    if (res.iRet != 0) {
      alert(res.sMsg);
      return false;
    }

    if (res.jData.data && 'undefined' === typeof res.jData.data.length) {
      this.data = res.jData.data;
    }

  },
  init: function (opts) {
    console.log(opts);
    this.initAfter = opts.initAfter || function () {
    };
    this.gameId = opts.gameId;
    this.pop = opts.pop;

    this.channelContentId = opts.platContentId || 'areaContentId';
    this.systemContentId = opts.areaContentId || 'platContentId';
    this.areaContentId = opts.partitionContentId || 'partitionContentId';
    this.roleContentId = opts.roleContentId || 'roleContentId';
    this.confirmButtonId = opts.confirmButtonId || 'confirmButtonId';
    this.submit = opts.submit || function (roleObj) {

      var submitData = roleObj.submitData;

      console.log(roleObj);

      sData.sPartitionName = sData.user_areaName = encodeURIComponent(submitData.areaname);
      sData.sArea = sData.user_area = submitData.areaid;
      sData.sPlatId = sData.user_platId = submitData.sPlatId;
      sData.sPartition = sData.user_partition = submitData.sPartition;
      sData.sRoleId = sData.user_roleId = submitData.roleid;
      sData.sRoleName = sData.user_roleName = encodeURIComponent(submitData.rolename);
      sData.sServiceType = sData.sServiceCode = opts.gameId;
      sData.user_checkparam = submitData.checkparam;
      sData.user_md5str = submitData.md5str;

      'function' === typeof opts.submitChain && opts.submitChain();

      return false;
    };

    return this;
  },
  getUrl: function () {
    return window.location.protocol + '//gameact.qq.com/comm-htdocs/js/game_area/' + this.gameId + '_server_select.js';
  },
  open: function () {
    include(this.getUrl(), function () {
      RoleBind.pop();
      need([ "biz.roleselector" ], function (RoleSelector) {
        var roleobj = cloneClass(RoleSelector);
        roleobj.init({
          openToOpen: {
            "sAMSTrusteeship": 1,
            "ams_targetappid": Common.wxAppId
          },
          'type': 'html',
          'gameId': RoleBind.gameId,
          'isQueryRole': true,
          //'iActivityId' : actInfo.id,
          //'area1ContentId': 'area1ContentId', //如果为2级大区，则该值必须设置
          'areaContentId': RoleBind.areaContentId,
          'channelContentId': RoleBind.channelContentId, // 如果用不到可以删除
          'systemContentId': RoleBind.systemContentId,   // 如果用不到可以删除
          'roleContentId': RoleBind.roleContentId,
          'confirmButtonId': RoleBind.confirmButtonId,
          submitEvent: RoleBind.submit
        });
        roleobj.show();
        setTimeout(function () {
          $('#areaContentId').val(sData.sArea);
        }, 1000);
        RoleBind.initAfter();
      });
    });
  }
};

//预约信息
var ReseInfo = {
  // 预约初始
  init: function (jData) {
    this.rsvtStatus = jData.rsvtStatus;
    this.mobileStatus = jData.mobileStatus;
    this.inviteNum = jData.inviteNum;
    this.num1 = jData.num1;
    this.inviteCode = jData.invtCode;
    this.sExtend1 = jData.sExtend1;
    this.sExtend2 = jData.sExtend2;
    this.sExtend3 = jData.sExtend3;
    this.user = jData.user ;

    if (jData.user && jData.user.usedCode) {
      this.usedCode = jData;
    }

  },
  //预约完 bWithMobile 该预约是否伴随手机
  afterRese: function (jData, bWithMobile) {
    if (jData.inviteCode) {
      this.inviteCode = jData.inviteCode;
    }

    this.rsvtStatus = '1';
    if (bWithMobile) {
      this.mobileStatus = '1';
    }
  },
  isRsvt: function () {
    return this.rsvtStatus == '1';
  },
  isBindMobile: function () {
    return this.mobileStatus == '1';
  },
  getInviteCode: function () {
    return this.inviteCode;
  },
  getUrlInviteCode: function () {
    return milo.request('sInviteCode');
  },
  makeShareUrl: function (code) {
    return Common.homePage + '?sInviteCode=' + (code || this.inviteCode);
  }
};

var AmsInfo = function (options, callback) {

  var hasInit = false;
  //初始化ams
  if (!options.emptyInit) {
    var initAms = window[ 'amsCfg_' + options.iFlowId ] = {
      iActivityId: options.iActivityId,
      iFlowId: options.iFlowId,
      sData: sData,
      sNeedSubmitPopDiv: undefined === options.sNeedSubmitPopDiv ? true : options.sNeedSubmitPopDiv,
      fFlowSubmitEnd: function (res) {
        hasInit = true;
        'function' === typeof callback && callback(res);
        //options.initAction(res);
      },
      fFlowSubmitFailed: function (res) {
        // 角色初始化
        if (options.iQueryFlowID) {
          hasInit = true;
        }

        alert(res.sMsg);
      }
    };

    // 角色绑定初始化
    if (options.iQueryFlowID) {
      initAms.iQueryFlowID = options.iQueryFlowID;
    }

    // 模块实例号
    if (options.activityId) {
      initAms.activityId = options.activityId;
    }
    amsSubmit(parseInt(options.iActivityId), parseInt(options.iFlowId));
  } else {
    hasInit = true;
  }

  return {
    afterClass: options.afterClass,
    iActivityId: options.iActivityId,
    checkLogin: options.checkLogin,
    ams: {},
    // normal模块
    push: function (options) {

      var _this = this;

      if ('function' === typeof options.success) {
        options.fFlowSubmitEnd = options.success;
      }

      if ('function' === typeof options.failure) {
        options.fFlowSubmitFailed = options.failure;
      } else if ('function' !== typeof options.fFlowSubmitFailed) {
        options.fFlowSubmitFailed = function (res) {

          console.log(res);

          if (res.iRet != '0') {
            alert(res.sMsg);
            return false;
          }

          if (res.jData && res.jData.ret) {
            alert(res.jData.msg);
            return false;
          }

        };
      }

      // if ('function' !== typeof options.fFlowSubmitEnd || !options.fFlowSubmitEnd) {
      //   options.fFlowSubmitEnd = function (res) {
      //     console.log(res);
      //   };
      // }
      //
      // if ('function' !== typeof options.fFlowSubmitFailed || !options.fFlowSubmitFailed) {
      //   options.fFlowSubmitFailed = function (res) {
      //     alert(res.sMsg);
      //   };
      // }

      this.bind(options);
      return this;
    },
    // 抽奖
    pushLott: function (options) {

      var _this = this;

      if (!options.onBeginGetGiftEvent) {
        options.onBeginGetGiftEvent = function () {
          return 0; // 抽奖前事件，返回0表示成功
        };
      }

      if ('function' === typeof options.failure) {
        options.onGetGiftFailureEvent = options.failure;
      } else if (!options.onGetGiftFailureEvent) {
        options.onGetGiftFailureEvent = function (callbackObj) {// 抽奖失败事件
          alert(callbackObj.sMsg);
        };
      }

      if ('function' === typeof options.success) {
        options.onGetGiftSuccessEvent = options.success;
      }

      this.bind(options);
    },
    //
    // 列表操作
    template: function (options) {

      // 模板div
      if (undefined === options.el) {
        console.log('缺少 dataTemplateEl');
        return false;
      }

      var actions = [];
      // 映射
      options.map.forEach(function (action) {

        action.split('.').forEach(function (methodWithParam) {

          var preg = /(.*)\(["|']?(.*?)["|']?\)/g.exec(methodWithParam);
          // 有参数
          var method, param, data;

          if (preg) {
            method = preg[ 1 ];
            param = preg[ 2 ];
            data = { method: method, param: param };
          } else {
            method = methodWithParam;
            data = { method: method };
          }

          actions.push(data);

        });

      });

      // 后去父亲
      var father = $(options.el).parent();

      // 数据
      options.list.forEach(function (item) {

        var originalDom = $(options.el).eq(0).clone(); // 克隆
        var lastActionDom = ''; // 最后操作元素
        var lastAction = ''; // 最后操作
        var flowDom = originalDom; // 会动的dom

        actions.forEach(function (action) {

          lastActionDom = flowDom;
          lastAction = action.method;

          if (action.method === 'text') {
            var field = action.param;
            flowDom = flowDom[ action.method ](item[ field ]);
          } else {
            var method = action.method;
            var param = action.param;
            flowDom = item.param ? flowDom[ method ]() : flowDom[ method ](param);
          }

        });

        father.append(originalDom);

      });

      $(options.el).eq(0).remove();
    },
    // 给options通用绑定参数
    bind: function (options) {

      var _this = this;

      // 基础参数
      options.iActivityId = this.iActivityId;
      options.iAMSActivityId = this.iActivityId;
      options._everyRead = true;

      if ('undefined' !== options.sNeedSubmitPopDiv) {
        options.sNeedSubmitPopDiv = true;
      }

      // 如果已完成就没有必要有这个提交事件了
      options.submit = function () {

        // 是否需要检查登录
        if ('undefined' === options.checkLogin || options.checkLogin) {
          // 检查登录
          if (!User.isLogin()) {

            if ('function' === typeof options.checkLogin) {
              options.checkLogin();
            }

            if ('function' === typeof this.checkLogin) {
              this.checkLogin();
            }

            return false;
          }
        }


        if (!hasInit) {
          return false;
        }

        if ('function' === typeof options.beforeSubmit) {
          if (!options.beforeSubmit()) {
            return false;
          }
        }

        //_this.ams[ options.el ].sData = sData;
        window[ 'amsCfg_' + options.iFlowId ].sData = sData;
        amsSubmit(parseInt(_this.iActivityId), parseInt(options.iFlowId));
      };

      // 绑定点击事件
      $(options.el).click(function () {
        options.dom = this;
        //检查是否已领取样式
        if (options.afterClass) {
          var className = $(options.el).attr('class');
          if (className.indexOf(options.afterClass) !== -1) {
            return false;
          }
        }

        options.submit();
      });

      this.ams[ options.el ] = window[ 'amsCfg_' + options.iFlowId ] = options;

    },
    get: function (el) {
      return this.ams[ el ];
    }
  };
};

var Common = {
  x8AppId: 'wx1cd4fbe9335888fe',
  pcX8AppId: 'wxfa0c35392d06b82f',
  LoginManagerCopy: null,
  init: function (data) { // 初始化主要初始xx内容

    this.sPlatId = this.isAndroid() ? '1' : '0';
    this.sArea = this.isWx() ? '1' : '2';

    // appid必填
    if (!data.qqAppId || !data.wxAppId) {
      throw new Error('appid is lost，code error');
    }

    for ( var key in data ) {
      if (typeof this[ key ] === 'function') {
        throw new Error('prop is function，code error');
      }
      this[ key ] = data[ key ];
    }

    this.wxHomePage = this.mHomePage + '?appid=' + this.x8AppId + '&acctype=wx';
    console.log('common init end');
  },
  isInGame: function () {
    return /msdkEncodeParam=/.test(window.location.href);
  },
  initSData: function (options) {
    if (this.isInGame()) {
      alert('游戏内不推荐这种初始化数据');
      return;
    }
    sData = options || {};
    sData.sPlat = sData.sPlatId = this.sPlatId;
    sData.iDevice = this.isMobileCheckByUrl() ? '1' : '0';

    var userInfo = User.getInfo();

    if (Common.isWx() || milo.request('acctype') == 'wx' || userInfo.logtype === 'wx') {
      sData.sAMSTrusteeship = 1;
      sData.appid = Common.x8AppId;
      sData.ams_targetappid = Common.wxAppId;
      sData.sArea = 1;
    } else if (Common.isQQ() || milo.request('acctype') == 'qq' || userInfo.logtype === 'qq' || userInfo.userUin) {
      sData.appid = Common.qqAppId;
      sData.sArea = 2;
    }
  },
  setMsdkDataMap: function (mdskMap) { // 因为mdsk有不同的传参，在这里定义传参
    this.msdkMap = mdskMap;
  },
  initMsdkData: function () {
    var msdkMap = this.msdkMap;
    sData.sArea = msdkMap[ 'sArea' ];
    sData.sPlatId = msdkMap[ 'sPlatId' ];
    sData.appid = msdkMap[ 'appid' ];
  },
  wxInit: function () {
    var _this = this;
    this.LoginManagerCopy.init({
      appConfig: {
        avoidConflict: true,
        WxAppId: _this.x8AppId
      }
    });
    console.log('微信初始化');
  },
  isAndroid: function () {
    return /android/i.test(window.navigator.userAgent.toLowerCase());
  },
  isIos: function () {
    return /iphone|ipod|ipad/i.test(window.navigator.userAgent.toLowerCase());
  },
  isQQ: function () {
    var sUserAgent = navigator.userAgent;
    var REGEXP_IOS_QQ = new RegExp("(iPad|iPhone|iPod).*? (IPad)?QQ\\/([\\d\\.]+)");
    var REGEXP_ANDROID_QQ = new RegExp("\\bV1_AND_SQI?_([\\d\\.]+)(.*? QQ\\/([\\d\\.]+))?", "ig");
    var isIphoneOs_QQ = REGEXP_IOS_QQ.test(sUserAgent);
    var isAndroid_QQ = REGEXP_ANDROID_QQ.test(sUserAgent);

    return isIphoneOs_QQ || isAndroid_QQ;
  },
  isWx: function () {
    return /MicroMessenger/ig.test(navigator.userAgent);
  },
  jumpQQFromWx: function (url) {
    window.location.href = window.location.protocol + '//imgcache.qq.com/club/themes/mobile/middle_page/index_wqm.html?url=' + encodeURIComponent(url + "?_wv=1");
  },
  jumpQQ: function (url) {
    url = url || this.mHomePage;
    window.location.href = 'mqqapi://forward/url?url_prefix=' + btoa(url + '?_wv=49957') + '&version=1&src_type=web';
  },
  valueToRange: function (inputValue, range, mapValue) {

    var len = range.length;
    var i = 0;
    for ( ; i < len; i++ ) {
      if (inputValue <= range[ i ]) {
        return mapValue[ i ];
      }
    }

    return mapValue[ i ];
  },
  urlParam: function (name) {
    var sParam = window.location.search.substr('1');
    var aSKeyValue = sParam.split('&');
    var oRetKeyValue = {};
    aSKeyValue.forEach(function (sKeyValue) {
      var aKeyValue = sKeyValue.split('=');
      oRetKeyValue[ aKeyValue[ 0 ] ] = aKeyValue[ 1 ];
    });
    if (name) {
      return oRetKeyValue[ name ];
    } else {
      return oRetKeyValue;
    }
  },
  // 批量注册点击触发时间
  elArrOnClick: function (elArr, clickEvent) {

    if (typeof clickEvent !== 'function') {
      console.log('click event error');
      return;
    }

    elArr.forEach(function (el) {
      $(el).click(clickEvent);
    });
  },
  isMobileCheckByWidth: function () {
    return window.innerWidth <= 758;
  },
  isMobileCheckByUA: function () {

  },
  isMobileCheckByUrl: function () {
    var pureUrl = window.location.href.split('?')[ 0 ];
    return pureUrl.indexOf(this.mHomePage) !== -1;
  },
  copyCode(target) {
    if (window.clipboardData) {
      window.clipboardData.setData("Text", target);
    } else {
      var save = function (e) {
        e.clipboardData.setData('text/plain', target);
        e.preventDefault();
      };
      document.addEventListener('copy', save);
      document.execCommand('copy');
      document.removeEventListener('copy', save);
    }
  }
};

if (Common.isWx()) {
  $('.login_qq').hide();
}

var Qual = {
  setFields: function (fields) {
    this.fields = fields;
  },
  isEqualOne: function (field) {
    return this[ field ] == '1';
  },
  isTodayShare: function () {
    return this.todayShare == '1';
  },
  render: function () {
    var shareTimes = this.shareTimes || '0';
    $('#inviteNum').text(shareTimes + '/3');
  }
};

var Observer = {};

function baseReady(loginFun, unLoginFun) {
  milo.ready(function () {
    need('biz.login', function (LoginManager) {

      Common.LoginManagerCopy = LoginManager;

      if (Common.isQQ() && milo.request('acctype') == 'wx') {
        LoginManager.logout();
        window.location.href = Common.mHomePage;
        return false;
      }

      if (Common.isWx()) {
        Common.wxInit();
      }

      LoginManager.checkLogin(function (userInfo) { //已登录

        User.init(userInfo, function () {

          if (Common.isInGame()) {
            Common.initMsdkData();
          } else {
            Common.initSData();
          }

          loginFun();

        });

      }, function () { // 未登录

        unLoginFun();

      });

    });
  });
}

/* #t6Hl8#EC85CB0C90562BBD8E5D4DCB954163E9 *//* #t6Hl8#929A14CFD05FE8A7EA6E922A5ACEF790 */