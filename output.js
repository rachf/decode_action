//Thu Oct 23 2025 09:08:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const fs = require("fs"),
  path = require("path"),
  child_process = require("child_process");
function ensurePackageInstalled(_0x391244, _0x279b81 = "") {
  try {
    require.resolve(_0x391244);
    console.log("[依赖检查] " + _0x391244 + " 已安装.");
  } catch (_0x55ed13) {
    {
      console.log("[依赖检查] " + _0x391244 + " 缺失，正在自动安装" + (_0x279b81 ? " (" + _0x279b81 + ")" : "") + "...");
      try {
        child_process.execSync("npm install " + _0x391244 + _0x279b81, {
          "stdio": "inherit"
        });
        console.log("[依赖修补] " + _0x391244 + " 安装成功，继续运行.");
      } catch (_0x596cd3) {
        console.error("[依赖修补失败] 无法安装 " + _0x391244 + ": " + _0x596cd3.message);
        process.exit(1);
      }
    }
  }
}
const nodeVersion = process.versions.node,
  [major, minor] = nodeVersion.split(".").map(Number);
console.log("[Node.js 版本检测] 当前版本: " + nodeVersion + " (major: " + major + ", minor: " + minor + ")");
let requestVersion = "",
  socksProxyAgentVersion = "";
if (major >= 18) console.log("[Node.js 版本兼容] Node.js 18+ 检测到，使用 request 默认版本（若有警告，可忽略或升级脚本）"), process.noDeprecation = true;else major < 14 ? (socksProxyAgentVersion = "@^5.0.0", console.log("[Node.js 版本兼容] Node.js < 14 检测到，使用 socks-proxy-agent 旧版以兼容.")) : console.log("[Node.js 版本兼容] Node.js 14-17 检测到，使用默认依赖版本.");
ensurePackageInstalled("request", requestVersion);
ensurePackageInstalled("socks-proxy-agent", socksProxyAgentVersion);
const request = require("request"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
process.noDeprecation = true;
function generateRandomInteractionMessage() {
  const _0x49512c = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x49512c[Math.floor(Math.random() * _0x49512c.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getEnvNumber(_0x227556, _0x21f043) {
  const _0x3ad064 = parseInt(process.env[_0x227556], 10);
  return isNaN(_0x3ad064) ? _0x21f043 : _0x3ad064;
}
const KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 10),
  KSROUNDS = getEnvNumber("KSROUNDS", 35),
  KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 500000),
  KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 3);
function getTasksToExecute() {
  const _0x45b75a = process.env.Task;
  if (!_0x45b75a) return console.log("未设置Task环境变量，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  const _0x511a7e = _0x45b75a.split(",").map(_0x3b7630 => _0x3b7630.trim().toLowerCase()).filter(Boolean),
    _0x1d37d7 = ["food", "box", "look"],
    _0x23be52 = _0x511a7e.filter(_0xce72f => _0x1d37d7.includes(_0xce72f));
  if (_0x23be52.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x23be52.join(", "));
  return _0x23be52;
}
function getAccountConfigsFromEnv() {
  const _0x2884ea = [],
    _0x3bca5f = new Set();
  if (process.env.ksck) {
    {
      const ksckValue = process.env.ksck,
        _0x43f9a3 = ksckValue.split("&").map(_0x181100 => _0x181100.trim()).filter(Boolean);
      _0x2884ea.push(..._0x43f9a3);
    }
  }
  for (let _0x227591 = 1; _0x227591 <= 666; _0x227591++) {
    const ksckKey = "ksck" + _0x227591;
    if (process.env[ksckKey]) {
      {
        const ksckValue = process.env[ksckKey],
          _0x311071 = ksckValue.split("&").map(_0x133627 => _0x133627.trim()).filter(Boolean);
        _0x2884ea.push(..._0x311071);
      }
    }
  }
  const _0x25c150 = [];
  for (const _0x3de26e of _0x2884ea) {
    !_0x3bca5f.has(_0x3de26e) && (_0x3bca5f.add(_0x3de26e), _0x25c150.push(_0x3de26e));
  }
  console.log("从ksck及ksck1到ksck666环境变量中解析到 " + _0x25c150.length + " 个唯一配置");
  return _0x25c150;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute();
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊普通版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("================🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.join(", "));
console.log("🎯 配置参数：轮数=" + KSROUNDS + ", 金币上限=" + KSCOIN_LIMIT + ", 低奖励阈值=" + KSLOW_REWARD_THRESHOLD + ", 连续低奖励上限=" + KSLOW_REWARD_LIMIT);
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
const baseRemoteUrl = "http://111.170.33.15:11678",
  proxyApiUrl = baseRemoteUrl + "/sign1.php",
  queueStatusApiUrl = baseRemoteUrl + "/queue_status";
function generateKuaishouDid() {
  try {
    {
      const _0x220474 = _0x442203 => {
          {
            const _0x4910c1 = "0123456789abcdef";
            let _0x910394 = "";
            for (let _0xe0ae86 = 0; _0xe0ae86 < _0x442203; _0xe0ae86++) {
              _0x910394 += _0x4910c1.charAt(Math.floor(Math.random() * _0x4910c1.length));
            }
            return _0x910394;
          }
        },
        _0x4fe361 = _0x220474(16),
        _0xe8d8d8 = "ANDROID_" + _0x4fe361;
      return _0xe8d8d8;
    }
  } catch (_0x3f0328) {
    {
      console.log("生成did失败: " + _0x3f0328.message);
      const _0x175c30 = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x175c30.substring(0, 16);
    }
  }
}
async function sendRequest(_0x180940, _0x19cee1 = null, _0x144803 = "Unknown Request") {
  const _0x67a54d = {
    ..._0x180940
  };
  if (_0x19cee1) {
    try {
      _0x67a54d.agent = new SocksProxyAgent(_0x19cee1);
      isDevMode && console.log("[调试] " + _0x144803 + " 使用代理: " + _0x19cee1);
    } catch (_0x53d114) {
      console.log("[错误] " + _0x144803 + " 代理URL无效(" + _0x53d114.message + ")，尝试直连模式");
      isDevMode && console.log("[调试] 代理无效，自动切换到直连模式");
    }
  } else isDevMode && console.log("[调试] 未配置代理，使用直连模式");
  if (isDevMode) {
    const _0x46fbfd = _0x67a54d.method || "GET";
    console.log("[调试] " + _0x144803 + " -> " + _0x46fbfd + " " + _0x67a54d.url);
  }
  return new Promise(_0x1d16f6 => {
    request(_0x67a54d, (_0x1c9493, _0x53e176, _0x12f68b) => {
      if (_0x1c9493) {
        {
          if (_0x1c9493.name === "AggregateError" && Array.isArray(_0x1c9493.errors)) console.log("[调试] " + _0x144803 + " 请求错误: AggregateError\n" + _0x1c9493.errors.map((_0x39fc5b, _0xa196d1) => "  [" + _0xa196d1 + "] " + (_0x39fc5b?.["message"] || _0x39fc5b)).join("\n"));else {
            console.log("[调试] " + _0x144803 + " 请求错误: " + (_0x1c9493.message || String(_0x1c9493)));
          }
          return _0x1d16f6(null);
        }
      }
      if (!_0x53e176 || _0x53e176.statusCode !== 200) {
        const _0x13fa1b = _0x53e176 ? _0x53e176.statusCode : "无响应";
        console.log("[调试] " + _0x144803 + " HTTP状态码异常: " + _0x13fa1b);
        return _0x1d16f6(null);
      }
      try {
        _0x1d16f6(JSON.parse(_0x12f68b));
      } catch {
        _0x1d16f6(_0x12f68b);
      }
    });
  });
}
async function testProxyConnectivity(_0x5cf651, _0x37fef5 = "代理连通性检测") {
  if (!_0x5cf651) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  const _0x2ec580 = await sendRequest({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x5cf651, _0x37fef5 + " → ipinfo.io");
  if (!_0x2ec580) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ipinfo.io",
    "ip": ""
  };
  const _0x40e89f = _0x2ec580.ip || _0x2ec580.ip_address || "";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x40e89f || "未知"),
    "ip": _0x40e89f || "未知"
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x176da5, _0x46ecb9, _0x2499c5 = "?") {
  const _0x559da9 = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
    _0x69338b = await sendRequest({
      "method": "GET",
      "url": _0x559da9,
      "headers": {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x176da5,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x46ecb9, "账号[" + _0x2499c5 + "] 获取基本信息");
  if (_0x69338b && _0x69338b.result === 1 && _0x69338b.data) return {
    "nickname": _0x69338b.data.userData?.["nickname"] || _0x2499c5,
    "totalCoin": _0x69338b.data.coinAmount ?? null,
    "allCash": _0x69338b.data.cashAmountDisplay ?? null
  };
  return null;
}
function centerAlign(_0xd2b4dc, _0x5c1618) {
  _0xd2b4dc = String(_0xd2b4dc);
  if (_0xd2b4dc.length >= _0x5c1618) {
    return _0xd2b4dc.substring(0, _0x5c1618);
  }
  const _0x1735d7 = _0x5c1618 - _0xd2b4dc.length,
    _0x44a6bb = Math.floor(_0x1735d7 / 2),
    _0x2ea446 = _0x1735d7 - _0x44a6bb;
  return " ".repeat(_0x44a6bb) + _0xd2b4dc + " ".repeat(_0x2ea446);
}
class KuaishouAdTask {
  constructor({
    index: _0x8f07c6,
    salt: _0x557dce,
    cookie: _0x991dd4,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"]
  }) {
    this.index = _0x8f07c6;
    this.salt = _0x557dce;
    this.cookie = _0x991dd4;
    this.nickname = nickname || "账号" + _0x8f07c6;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 604,
        "posId": 20347,
        "subPageId": 100024063,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补得金币",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x4baa06 => {
      this.taskConfigs[_0x4baa06] && (this.taskStats[_0x4baa06] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = KSLOW_REWARD_THRESHOLD;
    this.lowRewardLimit = KSLOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x264b05 => {
      this.taskConfigs[_0x264b05] && (this.taskLimitReached[_0x264b05] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      {
        const _0x18276b = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
        if (_0x18276b && _0x18276b.totalCoin) {
          {
            const _0x5e15d8 = parseInt(_0x18276b.totalCoin);
            if (_0x5e15d8 >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x5e15d8 + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
          }
        }
        return false;
      }
    } catch (_0x4eeba4) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x4eeba4.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x1410cf = this.cookie.match(/egid=([^;]+)/),
        _0xa05a59 = this.cookie.match(/did=([^;]+)/),
        _0x1a7408 = this.cookie.match(/userId=([^;]+)/),
        _0x562e20 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x4a51dc = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x1410cf ? _0x1410cf[1] : "";
      this.did = _0xa05a59 ? _0xa05a59[1] : "";
      this.userId = _0x1a7408 ? _0x1a7408[1] : "";
      this.kuaishouApiSt = _0x562e20 ? _0x562e20[1] : "";
      this.appver = _0x4a51dc ? _0x4a51dc[1] : "13.7.20.10468";
      (!this.egid || !this.did) && console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
    } catch (_0x6d64ce) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x6d64ce.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x1def04, _0x42e577] of Object.entries(this.taskStats)) {
      const _0x1cdf5a = this.taskConfigs[_0x1def04].name;
      console.log("  " + _0x1cdf5a + ": 成功" + _0x42e577.success + "次, 失败" + _0x42e577.failed + "次, 总奖励" + _0x42e577.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x530e73, _0x332fbf, _0x3eb9f4 = 3, _0x51601d = 2000) {
    let _0xc9646a = 0,
      _0x5468ef = null;
    while (_0xc9646a < _0x3eb9f4) {
      {
        try {
          {
            const _0x40edbc = await _0x530e73();
            if (_0x40edbc) return _0x40edbc;
            _0x5468ef = new Error(_0x332fbf + " 返回空结果");
          }
        } catch (_0x2c6c89) {
          _0x5468ef = _0x2c6c89;
          console.log("账号[" + this.nickname + "] " + _0x332fbf + " 异常: " + _0x2c6c89.message);
        }
        _0xc9646a++;
        _0xc9646a < _0x3eb9f4 && (console.log("账号[" + this.nickname + "] " + _0x332fbf + " 失败，重试 " + _0xc9646a + "/" + _0x3eb9f4), await new Promise(_0x452d16 => setTimeout(_0x452d16, _0x51601d)));
      }
    }
    isDevMode && _0x5468ef && console.log("[调试] " + _0x332fbf + " 最终失败: " + _0x5468ef.message);
    return null;
  }
  async ["getAdInfo"](_0xd39245) {
    try {
      {
        const _0x93823a = "/rest/e/reward/mixed/ad",
          _0x335fe6 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "3c2cd3f3",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x3c38ec = {
            "earphoneMode": "1",
            "mod": "Xiaomi(23116PN5BC)",
            "appver": this.appver,
            "isp": "CUCC",
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": "WIFI",
            "kcv": "1599",
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": "11.6",
            "android_os": "0",
            "boardPlatform": "pineapple",
            "kpn": "KUAISHOU",
            "androidApiLevel": "35",
            "country_code": "cn",
            "sys": "ANDROID_15",
            "sw": "1080",
            "sh": "2400",
            "abi": "arm64",
            "userRecoBit": "0"
          },
          _0x5f4e79 = {
            "appInfo": {
              "appId": "kuaishou",
              "name": "快手",
              "packageName": "com.smile.gifmaker",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this.did,
              "screenSize": {
                "width": 1080,
                "height": 2249
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 100011251,
              "subPageId": _0xd39245.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x3859e2 = Buffer.from(JSON.stringify(_0x5f4e79)).toString("base64"),
          _0x4830ca = querystring.stringify(_0x3c38ec) + "&" + querystring.stringify(_0x335fe6),
          _0x3ce3d5 = await this.generateSignature2(_0x93823a, _0x4830ca, this.salt, _0x3859e2);
        if (!_0x3ce3d5) return console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0xd39245.name), null;
        const _0x284604 = {
          ..._0x3c38ec,
          "sig": _0x3ce3d5.sig,
          "__NS_sig3": _0x3ce3d5.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x3ce3d5.__NStokensig
        };
        _0x335fe6.encData = _0x3ce3d5.encData;
        _0x335fe6.sign = _0x3ce3d5.sign;
        const _0x9c680c = "https://api.e.kuaishou.com" + _0x93823a + "?" + querystring.stringify(_0x284604),
          _0x201dbc = await sendRequest({
            "method": "POST",
            "url": _0x9c680c,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x335fe6,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (!_0x201dbc) return null;
        if (_0x201dbc.errorMsg === "OK" && _0x201dbc.feeds && _0x201dbc.feeds[0] && _0x201dbc.feeds[0].ad) {
          {
            const _0xf92504 = _0x201dbc.feeds[0].caption || _0x201dbc.feeds[0].ad?.["caption"] || "";
            _0xf92504 && console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0xf92504);
            const _0x4a1b2d = _0x201dbc.feeds[0].exp_tag || "",
              _0x1522d1 = _0x4a1b2d.split("/")[1]?.["split"]("_")?.[0] || "";
            return {
              "cid": _0x201dbc.feeds[0].ad.creativeId,
              "llsid": _0x1522d1
            };
          }
        }
        isDevMode && console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x201dbc));
        return null;
      }
    } catch (_0x4f8d38) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x4f8d38.message);
      return null;
    }
  }
  async ["generateSignature"](_0x32413a, _0x1f583b, _0x3720eb, _0x1f02a6) {
    try {
      const _0x2e5d87 = JSON.stringify({
          "businessId": _0x1f02a6.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x32413a,
            "extInfo": "",
            "llsid": _0x1f583b,
            "requestSceneType": _0x1f02a6.requestSceneType,
            "taskType": _0x1f02a6.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 100011251,
          "posId": _0x1f02a6.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x1f02a6.subPageId
        }),
        _0x4fa927 = "bizStr=" + encodeURIComponent(_0x2e5d87) + "&cs=false&client_key=3c2cd3f3&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x19381c = this.queryParams + "&" + _0x4fa927,
        _0x325c66 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "urldata": _0x19381c,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "] 生成报告签名");
      if (!_0x325c66 || !_0x325c66.data) return null;
      return {
        "sig": _0x325c66.data.sig,
        "sig3": _0x325c66.data.__NS_sig3,
        "sigtoken": _0x325c66.data.__NStokensig,
        "post": _0x4fa927
      };
    } catch (_0xd357ca) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0xd357ca.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x818f64, _0x5c6111, _0x91700e, _0x4c2822) {
    const _0x55f5d5 = await this.requestSignService({
      "urlpath": _0x818f64,
      "urldata": _0x5c6111,
      "api_client_salt": _0x91700e,
      "req_str": _0x4c2822
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x55f5d5) return null;
    return _0x55f5d5.data || _0x55f5d5;
  }
  async ["submitReport"](_0x247c9c, _0x59e7e4, _0x1ad9d3, _0x14efa5, _0xcf7207, _0x1b33a3) {
    try {
      const _0x4b345c = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x247c9c + "&__NS_sig3=" + _0x59e7e4 + "&__NS_xfalcon=&__NStokensig=" + _0x1ad9d3),
        _0x4f655a = await sendRequest({
          "method": "POST",
          "url": _0x4b345c,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x14efa5,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
      if (!_0x4f655a) return {
        "success": false,
        "reward": 0
      };
      if (_0x4f655a.result === 1) {
        const _0x2e953b = _0x4f655a.data?.["neoAmount"] || 0;
        console.log("💰 账号[" + this.nickname + "] " + _0x1b33a3.name + _0x2e953b + "金币奖励！");
        if (_0x2e953b <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          this.did = generateKuaishouDid();
          console.log("⚠️ 账号[" + this.nickname + "] 金币奖励(" + _0x2e953b + ")低于阈值(" + this.lowRewardThreshold + ")，模拟下载应用提升权重，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit);
          if (this.lowRewardStreak >= this.lowRewardLimit) {
            console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务");
            this.stopAllTasks = true;
          }
        } else {
          this.lowRewardStreak = 0;
        }
        return {
          "success": true,
          "reward": _0x2e953b
        };
      }
      if ([20107, 20108, 1003, 415].includes(_0x4f655a.result)) return console.log("⚠️ 账号[" + this.nickname + "] " + _0x1b33a3.name + " 已达上限"), this.taskLimitReached[_0xcf7207] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "] " + _0x1b33a3.name + " 奖励失败，result=" + _0x4f655a.result + " msg=" + (_0x4f655a.data || ""));
      isDevMode && console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x4f655a));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x32927a) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0x32927a.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0xc09e14, _0x458e71) {
    const _0x366a3b = (process.env.ptkm || "").trim();
    if (!_0x366a3b) return null;
    const _0x42a38f = await sendRequest({
      "method": "POST",
      "url": proxyApiUrl + "?card_key=" + encodeURIComponent(_0x366a3b),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x366a3b
      },
      "body": JSON.stringify(_0xc09e14),
      "timeout": 15000
    }, null, _0x458e71 + "（签名服务）");
    if (!_0x42a38f) {
      return null;
    }
    if (_0x42a38f.success && _0x42a38f.status === "queued" && _0x42a38f.queue_id) {
      const _0x129c3b = await this.pollQueueStatus(_0x42a38f.queue_id);
      if (_0x129c3b && _0x129c3b.success && (_0x129c3b.status === "completed" || _0x129c3b.status === "processed")) return _0x129c3b;
      console.log("账号[" + this.nickname + "] 签名失败: " + (_0x129c3b?.["error"] || _0x129c3b?.["status"] || "未知"));
      return null;
    }
    if (_0x42a38f.success && (!_0x42a38f.status || _0x42a38f.status === "processed" || _0x42a38f.status === "completed")) return _0x42a38f;
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x42a38f.error || _0x42a38f.message || _0x42a38f.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0x1141e3, _0x4e2e0b = 30000, _0x54900b = 2000) {
    const _0x3a4606 = Date.now();
    while (Date.now() - _0x3a4606 < _0x4e2e0b) {
      const _0x38be60 = await sendRequest({
        "method": "GET",
        "url": queueStatusApiUrl + "?queue_id=" + encodeURIComponent(_0x1141e3),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名排队");
      if (_0x38be60?.["success"]) {
        {
          if (_0x38be60.status === "completed" || _0x38be60.status === "processed") {
            return _0x38be60;
          }
          if (_0x38be60.status === "failed") return _0x38be60;
        }
      }
      await new Promise(_0x18ca6b => setTimeout(_0x18ca6b, _0x54900b));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x572117) {
    const _0x29f9c1 = this.taskConfigs[_0x572117];
    if (!_0x29f9c1) return console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x572117), false;
    if (this.taskLimitReached[_0x572117]) return false;
    try {
      const _0x10a19d = await this.retryOperation(() => this.getAdInfo(_0x29f9c1), "获取" + _0x29f9c1.name + "信息", 3);
      if (!_0x10a19d) return this.taskStats[_0x572117].failed++, false;
      const _0x3697b6 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x29f9c1.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x3697b6 / 1000) + " 秒");
      await new Promise(_0x40fee0 => setTimeout(_0x40fee0, _0x3697b6));
      const _0x2bf6ed = await this.retryOperation(() => this.generateSignature(_0x10a19d.cid, _0x10a19d.llsid, _0x572117, _0x29f9c1), "生成" + _0x29f9c1.name + "签名", 3);
      if (!_0x2bf6ed) {
        this.taskStats[_0x572117].failed++;
        return false;
      }
      const _0x83ed55 = await this.retryOperation(() => this.submitReport(_0x2bf6ed.sig, _0x2bf6ed.sig3, _0x2bf6ed.sigtoken, _0x2bf6ed.post, _0x572117, _0x29f9c1), "提交" + _0x29f9c1.name + "报告", 3);
      if (_0x83ed55?.["success"]) return this.taskStats[_0x572117].success++, this.taskStats[_0x572117].totalReward += _0x83ed55.reward || 0, true;
      this.taskStats[_0x572117].failed++;
      return false;
    } catch (_0x218bf4) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x572117 + "): " + _0x218bf4.message);
      this.taskStats[_0x572117].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x3831ff = {};
    for (const _0x9ccd80 of this.tasksToExecute) {
      if (this.stopAllTasks) break;
      if (!this.taskConfigs[_0x9ccd80]) {
        {
          console.log("⚠️ 账号[" + this.nickname + "] 跳过未知任务: " + _0x9ccd80);
          continue;
        }
      }
      console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0x9ccd80].name);
      _0x3831ff[_0x9ccd80] = await this.executeTask(_0x9ccd80);
      if (this.stopAllTasks) break;
      if (_0x9ccd80 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        {
          const _0x1eb9a8 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x1eb9a8 / 1000) + " 秒");
          await new Promise(_0x3e7882 => setTimeout(_0x3e7882, _0x1eb9a8));
        }
      }
    }
    return _0x3831ff;
  }
}
function parseAccountConfig(_0x5105df) {
  const _0x3d5bda = String(_0x5105df || "").trim().split("#");
  if (_0x3d5bda.length < 2) {
    return null;
  }
  let _0x648f00 = _0x3d5bda[0];
  _0x648f00 = _0x648f00.replace("kpn=NEBULA", "kpn=KUAISHOU");
  const _0xf1cd3 = _0x3d5bda.slice(1, _0x3d5bda.length - (_0x3d5bda.length >= 3 ? 1 : 0)).join("#");
  let _0xa86636 = null;
  if (_0x3d5bda.length >= 3) {
    const _0x416cb4 = _0x3d5bda[_0x3d5bda.length - 1].trim();
    if (_0x416cb4.includes("|")) {
      console.log("开始解析格式1 " + _0x416cb4);
      const _0x381a47 = _0x416cb4.split("|");
      if (_0x381a47.length >= 2) {
        const [_0x18eeea, _0x23d487, _0x16f814, _0x5d310a] = _0x381a47;
        _0xa86636 = "socks5://" + _0x16f814 + ":" + _0x5d310a + "@" + _0x18eeea + ":" + _0x23d487;
      }
    } else _0xa86636 = /^socks5:\/\/.+/i.test(_0x416cb4) ? _0x416cb4 : null;
    !_0xa86636 && console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x416cb4);
  }
  return {
    "salt": _0xf1cd3,
    "cookie": _0x648f00,
    "proxyUrl": _0xa86636
  };
}
function loadAccountsFromEnv() {
  const _0x4fa007 = getAccountConfigsFromEnv(),
    _0x381f97 = [];
  for (const _0x2e1bc6 of _0x4fa007) {
    const _0x4433d7 = parseAccountConfig(_0x2e1bc6);
    _0x4433d7 ? _0x381f97.push(_0x4433d7) : console.log("账号格式错误：" + _0x2e1bc6);
  }
  _0x381f97.forEach((_0x449afa, _0x4dbad4) => {
    _0x449afa.index = _0x4dbad4 + 1;
  });
  return _0x381f97;
}
async function concurrentExecute(_0x36bd58, _0x33adea, _0x46edf7) {
  const _0x57424c = new Array(_0x36bd58.length);
  let _0x2bf1db = 0;
  async function _0x2a9c26() {
    while (true) {
      {
        const _0x570f7d = _0x2bf1db++;
        if (_0x570f7d >= _0x36bd58.length) return;
        const _0x54f55f = _0x36bd58[_0x570f7d];
        try {
          _0x57424c[_0x570f7d] = await _0x46edf7(_0x54f55f, _0x570f7d);
        } catch (_0x2977cd) {
          console.log("并发执行异常（index=" + (_0x570f7d + 1) + "）：" + _0x2977cd.message);
          _0x57424c[_0x570f7d] = null;
        }
      }
    }
  }
  const _0x9f1e18 = Array.from({
    "length": Math.min(_0x33adea, _0x36bd58.length)
  }, _0x2a9c26);
  await Promise.all(_0x9f1e18);
  return _0x57424c;
}
async function processAccount(_0x56d8d3) {
  if (_0x56d8d3.proxyUrl) {
    console.log("账号[" + _0x56d8d3.index + "]" + (_0x56d8d3.remark ? "（" + _0x56d8d3.remark + "）" : "") + " 🔌 测试代理连接中...");
    const _0x54567d = await testProxyConnectivity(_0x56d8d3.proxyUrl, "账号[" + _0x56d8d3.index + "]");
    console.log("  - " + (_0x54567d.ok ? "✅ 代理验证通过，IP: " + _0x54567d.ip : "❌ 代理验证失败") + ": " + _0x54567d.msg);
    if (_0x54567d.ok && _0x54567d.ip && _0x54567d.ip !== "localhost") {
      usedProxies.has(_0x54567d.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x54567d.ip + "），请立即检查！"), process.exit(1));
      usedProxies.add(_0x54567d.ip);
    }
  } else {
    console.log("账号[" + _0x56d8d3.index + "] 未配置代理，走直连");
  }
  console.log("账号[" + _0x56d8d3.index + "]" + (_0x56d8d3.remark ? "（" + _0x56d8d3.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x5415b0 = await getAccountBasicInfo(_0x56d8d3.cookie, _0x56d8d3.proxyUrl, _0x56d8d3.index),
    _0x28a57b = _0x5415b0?.["nickname"] || "账号" + _0x56d8d3.index;
  if (_0x5415b0) {
    {
      const _0xb07613 = _0x5415b0.totalCoin != null ? _0x5415b0.totalCoin : "未知",
        _0x119f62 = _0x5415b0.allCash != null ? _0x5415b0.allCash : "未知";
      console.log("账号[" + _0x28a57b + "] ✅ 登录成功，💰 当前金币: " + _0xb07613 + "，💸 当前余额: " + _0x119f62);
    }
  } else console.log("账号[" + _0x28a57b + "] ❌ 基本信息获取失败，继续执行");
  const _0x236782 = new KuaishouAdTask({
    ..._0x56d8d3,
    "nickname": _0x28a57b,
    "tasksToExecute": tasksToExecute
  });
  await _0x236782.checkCoinLimit();
  if (_0x236782.coinExceeded) {
    console.log("账号[" + _0x236782.nickname + "] 初始金币已超过阈值，不执行任务");
    const _0xaf95fa = await getAccountBasicInfo(_0x56d8d3.cookie, _0x56d8d3.proxyUrl, _0x56d8d3.index),
      _0x4f1d16 = _0x5415b0?.["totalCoin"] || 0,
      _0x1c9f61 = _0xaf95fa?.["totalCoin"] || 0,
      _0x2395fb = _0x1c9f61 - _0x4f1d16,
      _0x2f3dba = _0x5415b0?.["allCash"] || 0,
      _0x192945 = _0xaf95fa?.["allCash"] || 0,
      _0x1e40ba = _0x192945 - _0x2f3dba;
    return {
      "index": _0x56d8d3.index,
      "nickname": _0x28a57b,
      "initialCoin": _0x4f1d16,
      "finalCoin": _0x1c9f61,
      "coinChange": _0x2395fb,
      "initialCash": _0x2f3dba,
      "finalCash": _0x192945,
      "cashChange": _0x1e40ba,
      "stats": _0x236782.getTaskStats(),
      "coinLimitExceeded": true
    };
  }
  for (let _0x2caab7 = 0; _0x2caab7 < KSROUNDS; _0x2caab7++) {
    const _0x3aed04 = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x236782.nickname + "] ⌛ 第" + (_0x2caab7 + 1) + "轮，先随机等待 " + Math.round(_0x3aed04 / 1000) + " 秒");
    await new Promise(_0x24fed4 => setTimeout(_0x24fed4, _0x3aed04));
    console.log("账号[" + _0x236782.nickname + "] 🚀 开始第" + (_0x2caab7 + 1) + "轮任务");
    const _0xdeaf61 = await _0x236782.executeAllTasksByPriority();
    Object.values(_0xdeaf61).some(Boolean) ? console.log("账号[" + _0x236782.nickname + "] ✅ 第" + (_0x2caab7 + 1) + "轮执行完成") : console.log("账号[" + _0x236782.nickname + "] ⚠️ 第" + (_0x2caab7 + 1) + "轮没有成功任务");
    if (_0x236782.stopAllTasks) {
      console.log("账号[" + _0x236782.nickname + "] 🏁 达到停止条件，终止后续轮次");
      break;
    }
    if (_0x2caab7 < KSROUNDS - 1) {
      const _0x1581d2 = Math.floor(Math.random() * 10000) + 10000;
      console.log("账号[" + _0x236782.nickname + "] ⌛ 等待 " + Math.round(_0x1581d2 / 1000) + " 秒进入下一轮");
      await new Promise(_0x19a652 => setTimeout(_0x19a652, _0x1581d2));
    }
  }
  const _0x384478 = await getAccountBasicInfo(_0x56d8d3.cookie, _0x56d8d3.proxyUrl, _0x56d8d3.index),
    _0xfe8110 = _0x5415b0?.["totalCoin"] || 0,
    _0x563073 = _0x384478?.["totalCoin"] || 0,
    _0x2e5a71 = _0x563073 - _0xfe8110,
    _0x4d2369 = _0x5415b0?.["allCash"] || 0,
    _0x45ece5 = _0x384478?.["allCash"] || 0,
    _0xc31f46 = _0x45ece5 - _0x4d2369;
  _0x236782.printTaskStats();
  return {
    "index": _0x56d8d3.index,
    "nickname": _0x28a57b,
    "initialCoin": _0xfe8110,
    "finalCoin": _0x563073,
    "coinChange": _0x2e5a71,
    "initialCash": _0x4d2369,
    "finalCash": _0x45ece5,
    "cashChange": _0xc31f46,
    "stats": _0x236782.getTaskStats(),
    "coinLimitExceeded": _0x236782.coinExceeded
  };
}
function printAccountsSummary(_0x44605c) {
  if (!_0x44605c.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x3ae8a3 = _0x44605c.reduce((_0x1aea10, _0x5d099f) => {
      return _0x1aea10 + (parseInt(_0x5d099f.initialCoin) || 0);
    }, 0),
    _0x2e513d = _0x44605c.reduce((_0x5ee80b, _0x22fb86) => {
      return _0x5ee80b + (parseInt(_0x22fb86.finalCoin) || 0);
    }, 0),
    _0x135843 = _0x2e513d - _0x3ae8a3,
    _0x41c783 = _0x44605c.reduce((_0x2bea44, _0x286b92) => {
      return _0x2bea44 + (parseFloat(_0x286b92.initialCash) || 0);
    }, 0),
    _0x2a4337 = _0x44605c.reduce((_0x44c56e, _0x283748) => {
      return _0x44c56e + (parseFloat(_0x283748.finalCash) || 0);
    }, 0),
    _0x32566d = _0x2a4337 - _0x41c783;
  let _0x8406d = 0,
    _0x570127 = 0,
    _0x34f836 = 0;
  _0x44605c.forEach(_0x112385 => {
    _0x112385.stats && Object.values(_0x112385.stats).forEach(_0x450f15 => {
      _0x8406d += _0x450f15.success + _0x450f15.failed;
      _0x570127 += _0x450f15.success;
      _0x34f836 += _0x450f15.totalReward;
    });
  });
  const _0x799554 = _0x8406d > 0 ? (_0x570127 / _0x8406d * 100).toFixed(1) : "0.0",
    _0x50aa25 = _0x44605c.filter(_0x529146 => _0x529146.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x44605c.length).padEnd(22) + ("超过金币阈值账号: " + _0x50aa25).padEnd(22) + ("总任务数: " + _0x8406d).padEnd(22) + ("任务成功率: " + _0x799554 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x135843).padEnd(26) + ("总金币奖励: " + _0x34f836).padEnd(26) + ("总余额变化: " + _0x32566d.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x4bb072 = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0xa96ecb = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x31f249 = "|";
  _0x4bb072.forEach((_0x5a4032, _0x57b906) => {
    _0x31f249 += centerAlign(_0x5a4032, _0xa96ecb[_0x57b906]) + "|";
  });
  console.log(_0x31f249);
  let _0x21c594 = "|";
  _0xa96ecb.forEach(_0x4a0563 => {
    _0x21c594 += "-".repeat(_0x4a0563) + "|";
  });
  console.log(_0x21c594);
  _0x44605c.forEach(_0x949d53 => {
    {
      let _0x22875a = "|";
      _0x22875a += centerAlign(_0x949d53.index, _0xa96ecb[0]) + "|";
      const _0x5861a9 = (_0x949d53.nickname || "-") + (_0x949d53.coinLimitExceeded ? " ⚠️" : "");
      _0x22875a += centerAlign(_0x5861a9.substring(0, _0xa96ecb[1] - 2), _0xa96ecb[1]) + "|";
      _0x22875a += centerAlign(_0x949d53.initialCoin, _0xa96ecb[2]) + "|";
      _0x22875a += centerAlign(_0x949d53.finalCoin, _0xa96ecb[3]) + "|";
      const _0x21feeb = _0x949d53.coinChange >= 0 ? "+" + _0x949d53.coinChange : _0x949d53.coinChange;
      _0x22875a += centerAlign(_0x21feeb, _0xa96ecb[4]) + "|";
      _0x22875a += centerAlign(_0x949d53.initialCash, _0xa96ecb[5]) + "|";
      _0x22875a += centerAlign(_0x949d53.finalCash, _0xa96ecb[6]) + "|";
      const _0x5ac509 = _0x949d53.cashChange >= 0 ? "+" + _0x949d53.cashChange.toFixed(2) : _0x949d53.cashChange.toFixed(2);
      _0x22875a += centerAlign(_0x5ac509, _0xa96ecb[7]) + "|";
      console.log(_0x22875a);
    }
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0xc0db7a = loadAccountsFromEnv();
  console.log("共找到 " + _0xc0db7a.length + " 个有效账号");
  !_0xc0db7a.length && process.exit(1);
  const _0x40c431 = getEnvNumber("MAX_CONCURRENCY", 888);
  console.log("\n防黑并发：" + _0x40c431 + "    防黑轮数：" + KSROUNDS + "\n");
  const _0x3e9c4f = [];
  await concurrentExecute(_0xc0db7a, _0x40c431, async _0x194b60 => {
    {
      console.log("\n—— 🚀 开始账号[" + _0x194b60.index + "]" + (_0x194b60.remark ? "（" + _0x194b60.remark + "）" : "") + " ——");
      try {
        {
          const _0x23e8fe = await processAccount(_0x194b60);
          _0x3e9c4f.push({
            "index": _0x194b60.index,
            "remark": _0x194b60.remark || "无备注",
            "nickname": _0x23e8fe?.["nickname"] || "账号" + _0x194b60.index,
            "initialCoin": _0x23e8fe?.["initialCoin"] || 0,
            "finalCoin": _0x23e8fe?.["finalCoin"] || 0,
            "coinChange": _0x23e8fe?.["coinChange"] || 0,
            "initialCash": _0x23e8fe?.["initialCash"] || 0,
            "finalCash": _0x23e8fe?.["finalCash"] || 0,
            "cashChange": _0x23e8fe?.["cashChange"] || 0,
            "stats": _0x23e8fe?.["stats"] || {},
            "coinLimitExceeded": _0x23e8fe?.["coinLimitExceeded"] || false
          });
        }
      } catch (_0x4704ce) {
        console.log("账号[" + _0x194b60.index + "] ❌ 执行异常：" + _0x4704ce.message);
        _0x3e9c4f.push({
          "index": _0x194b60.index,
          "remark": _0x194b60.remark || "无备注",
          "nickname": "账号" + _0x194b60.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0x4704ce.message
        });
      }
    }
  });
  _0x3e9c4f.sort((_0x36c1d4, _0x75aae6) => _0x36c1d4.index - _0x75aae6.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x3e9c4f);
})();