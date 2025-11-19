//Wed Nov 19 2025 04:39:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const qs = require("querystring"),
  axios = require("axios"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
function generateRandomInteractionMessage() {
  const _0xfa228e = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0xfa228e[Math.floor(Math.random() * _0xfa228e.length)];
}
const isDevMode = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function getEnvNumber(_0x5b4d52, _0x4f678d) {
  const _0x43eb86 = parseInt(process.env[_0x5b4d52], 10);
  return isNaN(_0x43eb86) ? _0x4f678d : _0x43eb86;
}
const KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 10),
  KSROUNDS = getEnvNumber("KSROUNDS", 200),
  KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 1000000),
  KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 3);
function getTasksToExecute() {
  const _0x1391f9 = process.env.Task;
  if (!_0x1391f9) {
    console.log("未设置Task环境变量，将执行所有任务 (food, box, look)");
    return ["food", "box", "look"];
  }
  const _0x59dde0 = _0x1391f9.split(",").map(_0x26f234 => _0x26f234.trim().toLowerCase()).filter(Boolean),
    _0x30136c = ["food", "box", "look"],
    _0x12dbd6 = _0x59dde0.filter(_0x4d50da => _0x30136c.includes(_0x4d50da));
  if (_0x12dbd6.length === 0) return console.log("Task环境变量中没有有效任务���将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x12dbd6.join(", "));
  return _0x12dbd6;
}
function getAccountConfigsFromEnv() {
  const _0x5d3acd = [],
    _0x19534d = new Set();
  if (process.env.ksck) {
    const _0x550c39 = process.env.ksck,
      _0x332f68 = _0x550c39.split("&").map(_0x53f4da => _0x53f4da.trim()).filter(Boolean);
    _0x5d3acd.push(..._0x332f68);
  }
  for (let _0x35147e = 1; _0x35147e <= 666; _0x35147e++) {
    {
      const _0x55ab70 = "ksck" + _0x35147e;
      if (process.env[_0x55ab70]) {
        {
          const _0x21d64c = process.env[_0x55ab70],
            _0xc78890 = _0x21d64c.split("&").map(_0x589241 => _0x589241.trim()).filter(Boolean);
          _0x5d3acd.push(..._0xc78890);
        }
      }
    }
  }
  const _0x604c6f = [];
  for (const _0x26beca of _0x5d3acd) {
    !_0x19534d.has(_0x26beca) && (_0x19534d.add(_0x26beca), _0x604c6f.push(_0x26beca));
  }
  console.log("从ksck及ksck1到ksck666环境变量中解析到 " + _0x604c6f.length + " 个唯一配置");
  return _0x604c6f;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute();
let globalSignatureFailures = 0;
const GLOBAL_SIGNATURE_FAILURE_LIMIT = getEnvNumber("KS_GLOBAL_SIGNATURE_FAILURE_LIMIT", 3);
async function validateCardKey() {
  const _0x1244a1 = (process.env.kskm || "").trim();
  if (!_0x1244a1) {
    console.log("❌ 未设置kskm环境变量，请设置后重试！");
    process.exit(1);
  }
  (_0x1244a1.length < 3 || _0x1244a1.length > 50) && (console.log("❌ 卡密格式无效（长度需3-50字符），请检查kskm变量！"), process.exit(1));
  console.log("🔑 检测到卡密: " + _0x1244a1.substring(0, 8) + "...");
  const _0x4600f9 = "http://117.72.209.186:1314/query.php?card_key=" + encodeURIComponent(_0x1244a1);
  try {
    {
      const {
        body: _0x24fa36
      } = await sendRequest({
        "method": "GET",
        "url": _0x4600f9,
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "查询卡密状态");
      !_0x24fa36 && (console.log("❌ 卡密查询无响应，请检查服务！"), process.exit(1));
      const _0x3310fb = _0x24fa36.code || -999,
        _0x169136 = _0x24fa36.msg || "未知错误",
        _0x4908ed = _0x24fa36.data || {};
      if (_0x3310fb === 0 || _0x169136 === "valid" && Object.keys(_0x4908ed).length > 0) {
        const _0x3ea9be = _0x4908ed.type || "unknown",
          _0x27974d = _0x4908ed.val || 0,
          _0x24a4c5 = _0x4908ed.expire_formatted || "N/A";
        let _0x404778 = "";
        _0x3ea9be === "count" ? _0x404778 = "剩余次数: " + _0x27974d : _0x404778 = "过期时间: " + _0x24a4c5;
        console.log("✅ 卡密验证通过，类型: " + _0x3ea9be + ", " + _0x404778);
        return;
      } else {
        console.log("❌ 卡密验证失败: " + _0x169136 + " (code: " + _0x3310fb + ")");
        process.exit(1);
      }
    }
  } catch (_0xa4e846) {
    console.log("❌ 卡密查询异常: " + _0xa4e846.message + "，请检查服务或卡密！");
    process.exit(1);
  }
}
console.log("👉快手极速公益版👈");
console.log("ᥬ🌝᭄免费提供，接口撑不住我就关");
console.log("===========免责声明==========");
console.log("本软件/脚本仅供学习与交流使用，严禁用于任何商业或非法用途。\n使用者因违反本声明或相关法律法规所产生的一切后果，由使用者本人承担，作者不承担任何责任。\n使用本软件即视为您已阅读并同意本声明的全部内容。");
console.log("===========变量设置==========");
console.log("Task(任务设置，look，food，box)");
console.log("KSROUNDS(轮数设置)");
console.log("KSLOW_REWARD_THRESHOLD(金币阀值)");
console.log("KSLOW_REWARD_LIMIT(连续低金币次数)");
console.log("💎 检测到环境变量配置：" + accountCount + "个账号");
console.log("🎯 将执行以下任务：" + tasksToExecute.join(", "));
console.log("🎯 配置参数：轮数=" + KSROUNDS + ", 金币上限=" + KSCOIN_LIMIT + ", 低奖励阈值=" + KSLOW_REWARD_THRESHOLD + ", 连续低奖励上限=" + KSLOW_REWARD_LIMIT);
accountCount > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + accountCount + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
function generateKuaishouDid() {
  try {
    const _0xc93a66 = _0x103e06 => {
        const _0x38cd17 = "0123456789abcdef";
        let _0x41f452 = "";
        for (let _0x137f62 = 0; _0x137f62 < _0x103e06; _0x137f62++) {
          _0x41f452 += _0x38cd17.charAt(Math.floor(Math.random() * _0x38cd17.length));
        }
        return _0x41f452;
      },
      _0x10e76e = _0xc93a66(16),
      _0xb2e206 = "ANDROID_" + _0x10e76e;
    return _0xb2e206;
  } catch (_0x98df36) {
    console.log("生成did失败: " + _0x98df36.message);
    const _0x65dc7c = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x65dc7c.substring(0, 16);
  }
}
async function sendRequest(_0x278870, _0x2a1465 = null, _0x2f4685 = "Unknown Request") {
  const _0x955fa6 = {
    ..._0x278870
  };
  let _0x361c96 = null;
  if (_0x2a1465) try {
    _0x361c96 = new SocksProxyAgent(_0x2a1465);
    if (isDevMode) {}
  } catch (_0x31599a) {
    console.log("[错误] " + _0x2f4685 + " 代理URL无效(" + _0x31599a.message + ")，尝试直连模式");
    isDevMode && console.log("[调试] 代理无效，自动切换到直连模式");
  } else isDevMode && console.log("[调试] 未配置代理，使用直连模式");
  if (isDevMode) {
    const _0x21f1fd = _0x955fa6.method || "GET";
  }
  try {
    {
      const _0x5b1383 = {
          "method": _0x955fa6.method || "GET",
          "url": _0x955fa6.url,
          "headers": _0x955fa6.headers || {},
          "data": _0x955fa6.body || _0x955fa6.form,
          "timeout": _0x955fa6.timeout || 30000,
          ...(_0x361c96 && {
            "httpAgent": _0x361c96,
            "httpsAgent": _0x361c96
          })
        },
        _0x583381 = await axios(_0x5b1383);
      return {
        "response": _0x583381,
        "body": _0x583381.data
      };
    }
  } catch (_0x50c8f6) {
    {
      if (_0x50c8f6.response) return {
        "response": _0x50c8f6.response,
        "body": null
      };else {
        if (_0x50c8f6.request) {
          {
            if (_0x50c8f6.name === "AggregateError" && Array.isArray(_0x50c8f6.errors)) isDevMode && console.log("[调试] " + _0x2f4685 + " 请求错误: AggregateError（抑制详细日志）");else {
              {
                if (isDevMode) {
                  console.log("[调试] " + _0x2f4685 + " 请求错误（抑制详细日志）");
                }
              }
            }
          }
        } else isDevMode && console.log("[调试] " + _0x2f4685 + " 其他请求错误（抑制详细日志）");
      }
      return {
        "response": null,
        "body": null
      };
    }
  }
}
async function testProxyConnectivity(_0x48a9cf, _0x565618 = "代理连通性检测") {
  if (!_0x48a9cf) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const {
    response: _0x4daabe,
    body: _0x58a8c0
  } = await sendRequest({
    "method": "GET",
    "url": "https://httpbin.org/ip",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0x48a9cf, _0x565618 + " → baidu.com");
  if (_0x58a8c0) return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，成功访问 baidu.com，出口IP: " + _0x58a8c0.origin,
    "ip": _0x58a8c0.origin
  };
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x4f9869, _0x4edc61, _0x26d29d = "?") {
  const _0x18b434 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x3c2fc4
    } = await sendRequest({
      "method": "GET",
      "url": _0x18b434,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x4f9869,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x4edc61, "账号[" + _0x26d29d + "] 获取基本信息");
  if (_0x3c2fc4 && _0x3c2fc4.result === 1 && _0x3c2fc4.data) return {
    "nickname": _0x3c2fc4.data.userData?.["nickname"] || null,
    "totalCoin": _0x3c2fc4.data.totalCoin ?? null,
    "allCash": _0x3c2fc4.data.allCash ?? null
  };
  return null;
}
function centerAlign(_0x1f80fd, _0x4de962) {
  _0x1f80fd = String(_0x1f80fd);
  if (_0x1f80fd.length >= _0x4de962) return _0x1f80fd.substring(0, _0x4de962);
  const _0x4e1b60 = _0x4de962 - _0x1f80fd.length,
    _0x4c4f1c = Math.floor(_0x4e1b60 / 2),
    _0x59cefd = _0x4e1b60 - _0x4c4f1c;
  return " ".repeat(_0x4c4f1c) + _0x1f80fd + " ".repeat(_0x59cefd);
}
class KuaishouAdTask {
  constructor({
    index: _0xec336a,
    salt: _0x24cd2d,
    cookie: _0x2aa1fa,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"],
    remark = ""
  }) {
    this.index = _0xec336a;
    this.salt = _0x24cd2d;
    this.cookie = _0x2aa1fa;
    this.nickname = nickname || remark || "账号" + _0xec336a;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.paramsFromCK = this.extractParamsFromCK();
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
    this.queryParams = "mod=" + this.paramsFromCK.mod + "&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x142a4c => {
      this.taskConfigs[_0x142a4c] && (this.taskStats[_0x142a4c] = {
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
    this.tasksToExecute.forEach(_0x97ba0b => {
      this.taskConfigs[_0x97ba0b] && (this.taskLimitReached[_0x97ba0b] = false);
    });
  }
  ["extractParamsFromCK"]() {
    const _0x3ca3de = {},
      _0x56f460 = this.cookie.split(";").map(_0x311ff4 => _0x311ff4.trim()).filter(Boolean);
    _0x56f460.forEach(_0x58d211 => {
      const [_0x36d0cc, _0x2d8d83] = _0x58d211.split("=").map(_0x38deea => _0x38deea.trim());
      switch (_0x36d0cc) {
        case "mod":
          _0x3ca3de.mod = _0x2d8d83 || "Xiaomi(MI 8 Lite)";
          break;
        case "isp":
          _0x3ca3de.isp = _0x2d8d83 || "CMCC";
          break;
        case "net":
          _0x3ca3de.net = _0x2d8d83 || "WIFI";
          break;
        case "sys":
          _0x3ca3de.sys = _0x2d8d83 || "ANDROID_10";
          break;
        case "androidApiLevel":
          _0x3ca3de.androidApiLevel = _0x2d8d83 || "29";
          break;
        case "boardPlatform":
          _0x3ca3de.boardPlatform = _0x2d8d83 || "sdm660";
          break;
        case "ver":
          _0x3ca3de.ver = _0x2d8d83 || "10.0";
          break;
        case "kcv":
          _0x3ca3de.kcv = _0x2d8d83 || "1500";
          break;
        case "sw":
          _0x3ca3de.sw = _0x2d8d83 || "1080";
          break;
        case "sh":
          _0x3ca3de.sh = _0x2d8d83 || "2340";
          break;
        case "abi":
          _0x3ca3de.abi = _0x2d8d83 || "arm64-v8a";
          break;
        case "oc":
          _0x3ca3de.osVersion = _0x2d8d83 ? _0x2d8d83.split("_")[1] || "10" : "10";
          break;
        default:
          break;
      }
    });
    _0x3ca3de.mod = _0x3ca3de.mod || "Xiaomi(M2012K11AC)";
    _0x3ca3de.isp = _0x3ca3de.isp || "CUCC";
    _0x3ca3de.net = _0x3ca3de.net || "WIFI";
    _0x3ca3de.sys = _0x3ca3de.sys || "ANDROID_13";
    _0x3ca3de.androidApiLevel = _0x3ca3de.androidApiLevel || "33";
    _0x3ca3de.boardPlatform = _0x3ca3de.boardPlatform || "kona";
    _0x3ca3de.ver = _0x3ca3de.ver || "13.9";
    _0x3ca3de.kcv = _0x3ca3de.kcv || "1599";
    _0x3ca3de.sw = _0x3ca3de.sw || "1080";
    _0x3ca3de.sh = _0x3ca3de.sh || "2400";
    _0x3ca3de.abi = _0x3ca3de.abi || "arm64";
    _0x3ca3de.osVersion = _0x3ca3de.osVersion || "13";
    console.log("\n🚀 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 从CK提取设备参数：");
    console.log("   - mod: " + _0x3ca3de.mod);
    console.log("   - isp: " + _0x3ca3de.isp);
    console.log("   - net: " + _0x3ca3de.net);
    console.log("   - sys: " + _0x3ca3de.sys);
    console.log("   - androidApiLevel: " + _0x3ca3de.androidApiLevel);
    console.log("   - boardPlatform: " + _0x3ca3de.boardPlatform);
    console.log("   - ver: " + _0x3ca3de.ver);
    console.log("   - kcv: " + _0x3ca3de.kcv);
    console.log("   - screen: " + _0x3ca3de.sw + "x" + _0x3ca3de.sh);
    console.log("   - abi: " + _0x3ca3de.abi);
    console.log("   - osVersion: " + _0x3ca3de.osVersion);
    if (isDevMode) {
      console.log("[调试] 账号[" + this.nickname + "] 从CK提取参数: mod=" + _0x3ca3de.mod + ", isp=" + _0x3ca3de.isp + ", net=" + _0x3ca3de.net + ", sys=" + _0x3ca3de.sys + ", screen=" + _0x3ca3de.sw + "x" + _0x3ca3de.sh);
    }
    return {
      "mod": _0x3ca3de.mod,
      "isp": _0x3ca3de.isp,
      "net": _0x3ca3de.net,
      "sys": _0x3ca3de.sys,
      "androidApiLevel": _0x3ca3de.androidApiLevel,
      "boardPlatform": _0x3ca3de.boardPlatform,
      "ver": _0x3ca3de.ver,
      "kcv": _0x3ca3de.kcv,
      "sw": _0x3ca3de.sw,
      "sh": _0x3ca3de.sh,
      "abi": _0x3ca3de.abi,
      "osVersion": _0x3ca3de.osVersion,
      "screenSize": {
        "width": parseInt(_0x3ca3de.sw),
        "height": parseInt(_0x3ca3de.sh)
      }
    };
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x9f4d35 = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
      if (_0x9f4d35 && _0x9f4d35.totalCoin) {
        {
          const _0x5f48b6 = parseInt(_0x9f4d35.totalCoin);
          if (_0x5f48b6 >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0x5f48b6 + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
        }
      }
      return false;
    } catch (_0x6f06b9) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x6f06b9.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x320995 = this.cookie.match(/egid=([^;]+)/),
        _0x53ab57 = this.cookie.match(/did=([^;]+)/),
        _0x435c68 = this.cookie.match(/userId=([^;]+)/),
        _0x8fea39 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
        _0x183793 = this.cookie.match(/appver=([^;]+)/);
      this.egid = _0x320995 ? _0x320995[1] : "";
      this.did = _0x53ab57 ? _0x53ab57[1] : "";
      this.userId = _0x435c68 ? _0x435c68[1] : "";
      this.kuaishouApiSt = _0x8fea39 ? _0x8fea39[1] : "";
      this.appver = _0x183793 ? _0x183793[1] : "13.7.20.10468";
      if (!this.egid || !this.did) {
        console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie格式可能无 egid 或 did，但继续尝试...");
      }
    } catch (_0x1b4c13) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x1b4c13.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    for (const [_0x2e16bb, _0x3039b3] of Object.entries(this.taskStats)) {
      {
        const _0x585e90 = this.taskConfigs[_0x2e16bb].name;
        console.log("  " + _0x585e90 + ": 成功" + _0x3039b3.success + "次, 失败" + _0x3039b3.failed + "次, 总奖励" + _0x3039b3.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0x3b3562, _0xb94ad4, _0x4ebdc7 = 3, _0x222a1d = 2000) {
    let _0x42c036 = 0,
      _0xc80489 = null;
    while (_0x42c036 < _0x4ebdc7) {
      {
        try {
          const _0xe47691 = await _0x3b3562();
          if (_0xe47691) return _0xe47691;
          _0xc80489 = new Error(_0xb94ad4 + " 返回空结果");
        } catch (_0x311dea) {
          _0xc80489 = _0x311dea;
          console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0xb94ad4 + " 异常: " + _0x311dea.message);
        }
        _0x42c036++;
        _0x42c036 < _0x4ebdc7 && (console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0xb94ad4 + " 失败，重试 " + _0x42c036 + "/" + _0x4ebdc7), await new Promise(_0x41c700 => setTimeout(_0x41c700, _0x222a1d)));
      }
    }
    if (isDevMode && _0xc80489) {}
    return null;
  }
  async ["getAdInfo"](_0x5a5506) {
    try {
      const _0x5a19bc = "/rest/e/reward/mixed/ad",
        _0x5638f3 = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        _0xda022b = {
          "earphoneMode": "1",
          "mod": this.paramsFromCK.mod,
          "appver": this.appver,
          "isp": this.paramsFromCK.isp,
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": this.paramsFromCK.net,
          "kcv": this.paramsFromCK.kcv,
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": this.paramsFromCK.ver,
          "android_os": "0",
          "boardPlatform": this.paramsFromCK.boardPlatform,
          "kpn": "NEBULA",
          "androidApiLevel": this.paramsFromCK.androidApiLevel,
          "country_code": "cn",
          "sys": this.paramsFromCK.sys,
          "sw": this.paramsFromCK.sw,
          "sh": this.paramsFromCK.sh,
          "abi": this.paramsFromCK.abi,
          "userRecoBit": "0"
        },
        _0x134b80 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": this.paramsFromCK.osVersion,
            "deviceId": this.did,
            "screenSize": this.paramsFromCK.screenSize,
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": 11101,
            "subPageId": _0x5a5506.subPageId,
            "action": 0,
            "browseType": 1,
            "impExtData": "{}",
            "mediaExtData": "{}"
          }]
        },
        _0x55de04 = Buffer.from(JSON.stringify(_0x134b80)).toString("base64");
      let _0x132435 = await this.getSign(_0x55de04);
      _0x5638f3.encData = _0x132435.encdata;
      _0x5638f3.sign = _0x132435.sign;
      let _0x18b0e5 = await this.requestSignService({
        "urlpath": _0x5a19bc,
        "reqdata": qs.stringify(_0x5638f3) + "&" + qs.stringify(_0xda022b),
        "api_client_salt": this.salt
      });
      const _0x1eb76b = {
          ..._0xda022b,
          "sig": _0x18b0e5.sig,
          "__NS_sig3": _0x18b0e5.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x18b0e5.__NStokensig
        },
        _0x95d936 = "https://api.e.kuaishou.com" + _0x5a19bc + "?" + querystring.stringify(_0x1eb76b),
        {
          response: _0x1b46ea,
          body: _0x466343
        } = await sendRequest({
          "method": "POST",
          "url": _0x95d936,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
          },
          "form": _0x5638f3,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
      if (!_0x466343) return null;
      if (_0x466343.errorMsg === "OK" && _0x466343.feeds && _0x466343.feeds[0] && _0x466343.feeds[0].ad) {
        const _0x4aa5a6 = _0x466343.feeds[0].caption || _0x466343.feeds[0].ad?.["caption"] || "";
        _0x4aa5a6 && console.log("✅ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 成功获取到广告信息：" + _0x4aa5a6);
        const _0x4bab0a = _0x466343.feeds[0].exp_tag || "",
          _0x553303 = _0x4bab0a.split("/")[1]?.["split"]("_")?.[0] || "";
        return {
          "cid": _0x466343.feeds[0].ad.creativeId,
          "llsid": _0x553303
        };
      }
      if (isDevMode) {}
      return null;
    } catch (_0x175cf1) {
      console.log(_0x175cf1);
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x175cf1.message);
      return null;
    }
  }
  async ["generateSignature"](_0x41e8e8, _0xe0a037, _0x2ccedf, _0x50ffc3) {
    try {
      const _0x5d7a7c = JSON.stringify({
          "businessId": _0x50ffc3.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x41e8e8,
            "extInfo": "",
            "llsid": _0xe0a037,
            "requestSceneType": _0x50ffc3.requestSceneType,
            "taskType": _0x50ffc3.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 11101,
          "posId": _0x50ffc3.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x50ffc3.subPageId
        }),
        _0x4d5319 = "bizStr=" + encodeURIComponent(_0x5d7a7c) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
        _0xf08460 = this.queryParams + "&" + _0x4d5319,
        _0x1511c3 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "reqdata": _0xf08460,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
      return {
        "sig": _0x1511c3.sig,
        "sig3": _0x1511c3.__NS_sig3,
        "sigtoken": _0x1511c3.__NStokensig,
        "post": _0x4d5319
      };
    } catch (_0x21d3af) {
      console.log(_0x21d3af);
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0x21d3af.message);
      return null;
    }
  }
  async ["submitReport"](_0x1e1731, _0x2e328d, _0x18e802, _0x576bb2, _0x3f19fd, _0x3c3460) {
    try {
      {
        const _0x54d411 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x1e1731 + "&__NS_sig3=" + _0x2e328d + "&__NS_xfalcon=&__NStokensig=" + _0x18e802),
          {
            response: _0x143bed,
            body: _0x331531
          } = await sendRequest({
            "method": "POST",
            "url": _0x54d411,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": _0x576bb2,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
        if (!_0x331531) return {
          "success": false,
          "reward": 0
        };
        if (_0x331531.result === 1) {
          const _0x2b8aa4 = _0x331531.data?.["neoAmount"] || 0;
          console.log("💰 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3c3460.name + "获得" + _0x2b8aa4 + "💵");
          if (_0x2b8aa4 <= this.lowRewardThreshold) this.lowRewardStreak++, console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x2b8aa4 + ")低于阈值(" + this.lowRewardThreshold + ")，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true);else {
            this.lowRewardStreak = 0;
          }
          return {
            "success": true,
            "reward": _0x2b8aa4
          };
        }
        if ([20107, 20108, 1003, 415].includes(_0x331531.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3c3460.name + " 已达上限"), this.taskLimitReached[_0x3f19fd] = true, {
          "success": false,
          "reward": 0
        };
        console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x3c3460.name + " 奖励失败，result=" + _0x331531.result + " msg=" + (_0x331531.data || ""));
        if (isDevMode) {}
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x5eb6b6) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x5eb6b6.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["getSign"](_0x4a4563) {
    try {
      const _0x5d6592 = (process.env.kskm || "").trim();
      if (!_0x5d6592) return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " ��名失败: 未提供kskm环境变量"), null;
      const _0xab0bef = "http://117.72.209.186:1314/sgin.php?card_key=" + encodeURIComponent(_0x5d6592),
        {
          response: _0x408a7c,
          body: _0x2becc2
        } = await sendRequest({
          "method": "POST",
          "url": _0xab0bef,
          "body": JSON.stringify({
            "data": _0x4a4563
          }),
          "headers": {
            "Content-Type": "application/json"
          }
        });
      if (_0x2becc2 && _0x2becc2.status) return _0x2becc2.data;
    } catch (_0x18ab4d) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " getSign异常: " + _0x18ab4d.message);
    }
    return null;
  }
  async ["requestSignService"](_0x3c2a40, _0x4399ca) {
    const _0x393c11 = (process.env.kskm || "").trim();
    if (!_0x393c11) return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: 未提供kskm环境变量"), null;
    let _0x26f68a = {},
      _0x3ce786 = {
        "path": _0x3c2a40.urlpath,
        "data": _0x3c2a40.reqdata,
        "salt": _0x3c2a40.api_client_salt
      };
    const _0x5f0086 = "http://117.72.209.186:1314/sgin.php?card_key=" + encodeURIComponent(_0x393c11),
      {
        response: _0xecbee5,
        body: _0x209280
      } = await sendRequest({
        "method": "POST",
        "url": _0x5f0086,
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": JSON.stringify(_0x3ce786),
        "timeout": 15000
      }, null, _0x4399ca + "（签名服务）");
    if (!_0x209280) {
      if (_0xecbee5 && [403, 405, 502].includes(_0xecbee5.status)) {
        if (_0xecbee5.status === 403) console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: HTTP状态码 403 - kskm过期，请检查或更换kskm"), process.exit(1);else return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: HTTP错误，将触发重试（非全局停止）"), null;
      }
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名失败: 无响应");
      return null;
    }
    if (_0x209280 && _0x209280.data && _0x209280.data.sig) {
      let _0xee349 = _0x209280.data.nssig3,
        _0x32be15 = _0x209280.data.nstokensig;
      Object.assign(_0x26f68a, {
        "__NS_sig3": _0xee349,
        "__NStokensig": _0x32be15,
        "sig": _0x209280.data.sig
      });
      globalSignatureFailures = 0;
      console.log("💠 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取签名成功!美滋滋😋😋😋");
      return _0x26f68a;
    } else return globalSignatureFailures++, console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名接口失效，全局连续失败次数：" + globalSignatureFailures + "/" + GLOBAL_SIGNATURE_FAILURE_LIMIT), globalSignatureFailures >= GLOBAL_SIGNATURE_FAILURE_LIMIT && (console.log("🚫 全局签名接口连续" + GLOBAL_SIGNATURE_FAILURE_LIMIT + "次失效，立即停止整个脚本运行！"), this.stopAllTasks = true, process.exit(1)), null;
  }
  async ["executeTask"](_0x5a3352) {
    const _0x3c430e = this.taskConfigs[_0x5a3352];
    if (!_0x3c430e) return console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 未知任务: " + _0x5a3352), false;
    if (this.taskLimitReached[_0x5a3352]) return false;
    try {
      {
        const _0x48d46c = await this.retryOperation(() => this.getAdInfo(_0x3c430e), "获取" + _0x3c430e.name + "信息", 3);
        if (!_0x48d46c) return this.taskStats[_0x5a3352].failed++, false;
        const _0x3e9549 = Math.floor(Math.random() * 10000) + 30000;
        console.log("🔍 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " ==>" + _0x3c430e.name + " " + generateRandomInteractionMessage() + " " + Math.round(_0x3e9549 / 1000) + " 秒");
        await new Promise(_0x3306db => setTimeout(_0x3306db, _0x3e9549));
        const _0x3a9528 = await this.retryOperation(() => this.generateSignature(_0x48d46c.cid, _0x48d46c.llsid, _0x5a3352, _0x3c430e), "生成" + _0x3c430e.name + "签名", 3);
        if (!_0x3a9528) return this.taskStats[_0x5a3352].failed++, false;
        const _0x262202 = await this.retryOperation(() => this.submitReport(_0x3a9528.sig, _0x3a9528.sig3, _0x3a9528.sigtoken, _0x3a9528.post, _0x5a3352, _0x3c430e), "提交" + _0x3c430e.name + "报告", 3);
        if (_0x262202?.["success"]) return this.taskStats[_0x5a3352].success++, this.taskStats[_0x5a3352].totalReward += _0x262202.reward || 0, true;
        this.taskStats[_0x5a3352].failed++;
        return false;
      }
    } catch (_0x4a1bba) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0x5a3352 + "): " + _0x4a1bba.message);
      this.taskStats[_0x5a3352].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x4711d8 = {};
    for (const _0x511bb6 of this.tasksToExecute) {
      {
        if (this.stopAllTasks) break;
        if (!this.taskConfigs[_0x511bb6]) {
          {
            console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 跳过未知任务: " + _0x511bb6);
            continue;
          }
        }
        console.log("🚀 账号[" + this.nickname + "]" + (this.remark ? "���" + this.remark + "）" : "") + " 开始任务：" + this.taskConfigs[_0x511bb6].name);
        _0x4711d8[_0x511bb6] = await this.executeTask(_0x511bb6);
        if (this.stopAllTasks) break;
        if (_0x511bb6 !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
          const _0x23d5c3 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 下一个任务，随机等待 " + Math.round(_0x23d5c3 / 1000) + " 秒");
          await new Promise(_0x2af488 => setTimeout(_0x2af488, _0x23d5c3));
        }
      }
    }
    return _0x4711d8;
  }
}
function parseAccountConfig(_0x515e54) {
  const _0x54906b = String(_0x515e54 || "").trim().split("#");
  if (_0x54906b.length < 2) return null;
  let _0x2bed33 = "",
    _0x2669fb = "",
    _0x211b04 = "",
    _0x521b18 = null;
  if (_0x54906b.length === 2) _0x2669fb = _0x54906b[0], _0x211b04 = _0x54906b[1];else {
    if (_0x54906b.length === 3) /socks5:\/\//i.test(_0x54906b[2]) ? (_0x2669fb = _0x54906b[0], _0x211b04 = _0x54906b[1], _0x521b18 = _0x54906b[2]) : (_0x2bed33 = _0x54906b[0], _0x2669fb = _0x54906b[1], _0x211b04 = _0x54906b[2]);else _0x54906b.length >= 4 && (_0x2bed33 = _0x54906b[0], _0x2669fb = _0x54906b[1], _0x211b04 = _0x54906b.slice(2, _0x54906b.length - 1).join("#"), _0x521b18 = _0x54906b[_0x54906b.length - 1]);
  }
  if (_0x521b18) {
    {
      if (_0x521b18.includes("|")) {
        console.log("开始解析代理格式: " + _0x521b18);
        const _0x464739 = _0x521b18.split("|");
        if (_0x464739.length >= 2) {
          {
            const [_0x3e5fb5, _0x1d9493, _0x109a4b, _0x226c04] = _0x464739;
            _0x521b18 = "socks5://" + _0x109a4b + ":" + _0x226c04 + "@" + _0x3e5fb5 + ":" + _0x1d9493;
          }
        } else _0x521b18 = null, console.log("⚠️ 代理字段格式错误，忽略：" + _0x521b18);
      } else {
        if (!/^socks5:\/\//i.test(_0x521b18)) {
          console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x521b18);
          _0x521b18 = null;
        }
      }
    }
  }
  return {
    "remark": _0x2bed33 || "",
    "salt": _0x211b04,
    "cookie": _0x2669fb,
    "proxyUrl": _0x521b18
  };
}
function loadAccountsFromEnv() {
  const _0x3105df = getAccountConfigsFromEnv(),
    _0x1043a5 = [];
  for (const _0x28a5b8 of _0x3105df) {
    const _0x1b5fad = parseAccountConfig(_0x28a5b8);
    _0x1b5fad ? _0x1043a5.push(_0x1b5fad) : console.log("账号格式错误：" + _0x28a5b8);
  }
  _0x1043a5.forEach((_0x354e3c, _0x2587e9) => {
    _0x354e3c.index = _0x2587e9 + 1;
  });
  return _0x1043a5;
}
async function concurrentExecute(_0x28e75b, _0x2b5dee, _0x7c8d14) {
  const _0x4d5f54 = new Array(_0x28e75b.length);
  let _0x48e78b = 0;
  async function _0x456ee7() {
    while (true) {
      {
        const _0x5bfd09 = _0x48e78b++;
        if (_0x5bfd09 >= _0x28e75b.length) return;
        const _0x1578ca = _0x28e75b[_0x5bfd09];
        try {
          _0x4d5f54[_0x5bfd09] = await _0x7c8d14(_0x1578ca, _0x5bfd09);
        } catch (_0x5ec9f1) {
          console.log("并发执行异常（index=" + (_0x5bfd09 + 1) + "）：" + _0x5ec9f1.message);
          _0x4d5f54[_0x5bfd09] = null;
        }
      }
    }
  }
  const _0x42c472 = Array.from({
    "length": Math.min(_0x2b5dee, _0x28e75b.length)
  }, _0x456ee7);
  await Promise.all(_0x42c472);
  return _0x4d5f54;
}
async function processAccount(_0x4a522d) {
  if (_0x4a522d.proxyUrl) {
    {
      console.log("账号[" + _0x4a522d.index + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " 🔌 测试代理连接中...");
      const _0x26bdbb = await testProxyConnectivity(_0x4a522d.proxyUrl, "账号[" + _0x4a522d.index + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : ""));
      console.log("  - " + (_0x26bdbb.ok ? "✅ 代理验证通过，IP: " + _0x26bdbb.ip : "❌ 代理验证失败") + ": " + _0x26bdbb.msg);
      _0x26bdbb.ok && _0x26bdbb.ip && _0x26bdbb.ip !== "localhost" && (usedProxies.has(_0x26bdbb.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x26bdbb.ip + "），请立即检查！"), process.exit(1)), usedProxies.add(_0x26bdbb.ip));
    }
  } else console.log("账号[" + _0x4a522d.index + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " 未配置代理，走直连");
  console.log("账号[" + _0x4a522d.index + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x238884 = await getAccountBasicInfo(_0x4a522d.cookie, _0x4a522d.proxyUrl, _0x4a522d.index),
    _0x28d843 = _0x238884?.["nickname"] || "账号" + _0x4a522d.index;
  if (_0x238884) {
    {
      const _0x5cb25f = _0x238884.totalCoin != null ? _0x238884.totalCoin : "未知",
        _0xa8c24 = _0x238884.allCash != null ? _0x238884.allCash : "未知";
      console.log("账号[" + _0x28d843 + "] ✅ 登录成功，💰 当前金币: " + _0x5cb25f + "，💸 当前余额: " + _0xa8c24);
    }
  } else console.log("账号[" + _0x28d843 + "] ❌ 基本信息获取失败，继续执行");
  const _0x406e6b = new KuaishouAdTask({
    ..._0x4a522d,
    "nickname": _0x28d843,
    "tasksToExecute": tasksToExecute
  });
  await _0x406e6b.checkCoinLimit();
  if (_0x406e6b.coinExceeded) {
    console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
    const _0x108071 = await getAccountBasicInfo(_0x4a522d.cookie, _0x4a522d.proxyUrl, _0x4a522d.index),
      _0x104f0a = _0x238884?.["totalCoin"] || 0,
      _0xd6f02d = _0x108071?.["totalCoin"] || 0,
      _0x481784 = _0xd6f02d - _0x104f0a,
      _0x370ab5 = _0x238884?.["allCash"] || 0,
      _0x2a5799 = _0x108071?.["allCash"] || 0,
      _0x592c3b = _0x2a5799 - _0x370ab5;
    return {
      "index": _0x4a522d.index,
      "remark": _0x4a522d.remark || "无备注",
      "nickname": _0x28d843,
      "initialCoin": _0x104f0a,
      "finalCoin": _0xd6f02d,
      "coinChange": _0x481784,
      "initialCash": _0x370ab5,
      "finalCash": _0x2a5799,
      "cashChange": _0x592c3b,
      "stats": _0x406e6b.getTaskStats(),
      "coinLimitExceeded": true
    };
  }
  for (let _0x1826ef = 0; _0x1826ef < KSROUNDS; _0x1826ef++) {
    const _0x49442b = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " ⌛ 第" + (_0x1826ef + 1) + "轮，先随机等待 " + Math.round(_0x49442b / 1000) + " 秒");
    console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " 🚀 开始第" + (_0x1826ef + 1) + "轮任务");
    const _0x47c648 = await _0x406e6b.executeAllTasksByPriority();
    if (Object.values(_0x47c648).some(Boolean)) console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " ✅ 第" + (_0x1826ef + 1) + "轮执行完成");else {
      {
        console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " ⚠️ 第" + (_0x1826ef + 1) + "轮没有成功任务，停止后续轮次");
        _0x406e6b.stopAllTasks = true;
        break;
      }
    }
    if (_0x406e6b.stopAllTasks) {
      console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " 🏁 达到停止条件，终止后续轮次");
      break;
    }
    if (_0x1826ef < KSROUNDS - 1) {
      const _0x4a52b0 = Math.floor(Math.random() * 10000) + 10000;
      console.log("账号[" + _0x406e6b.nickname + "]" + (_0x4a522d.remark ? "（" + _0x4a522d.remark + "）" : "") + " ⌛ 等待 " + Math.round(_0x4a52b0 / 1000) + " 秒进入下一轮");
      await new Promise(_0x2fa0a6 => setTimeout(_0x2fa0a6, _0x4a52b0));
    }
  }
  const _0x18e171 = await getAccountBasicInfo(_0x4a522d.cookie, _0x4a522d.proxyUrl, _0x4a522d.index),
    _0x43976c = _0x238884?.["totalCoin"] || 0,
    _0x20f3ad = _0x18e171?.["totalCoin"] || 0,
    _0x3d4528 = _0x20f3ad - _0x43976c,
    _0x3773ff = _0x238884?.["allCash"] || 0,
    _0x540ea9 = _0x18e171?.["allCash"] || 0,
    _0x1762fb = _0x540ea9 - _0x3773ff;
  _0x406e6b.printTaskStats();
  return {
    "index": _0x4a522d.index,
    "remark": _0x4a522d.remark || "无备注",
    "nickname": _0x28d843,
    "initialCoin": _0x43976c,
    "finalCoin": _0x20f3ad,
    "coinChange": _0x3d4528,
    "initialCash": _0x3773ff,
    "finalCash": _0x540ea9,
    "cashChange": _0x1762fb,
    "stats": _0x406e6b.getTaskStats(),
    "coinLimitExceeded": _0x406e6b.coinExceeded
  };
}
function printAccountsSummary(_0x1d00df) {
  if (!_0x1d00df.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0xc81492 = _0x1d00df.reduce((_0x271fae, _0x186066) => {
      return _0x271fae + (parseInt(_0x186066.initialCoin) || 0);
    }, 0),
    _0x3e8b61 = _0x1d00df.reduce((_0x400772, _0x14b022) => {
      return _0x400772 + (parseInt(_0x14b022.finalCoin) || 0);
    }, 0),
    _0x4d292f = _0x3e8b61 - _0xc81492,
    _0x3fbbbe = _0x1d00df.reduce((_0x4d7198, _0x5d8e18) => {
      return _0x4d7198 + (parseFloat(_0x5d8e18.initialCash) || 0);
    }, 0),
    _0x3f5344 = _0x1d00df.reduce((_0x30a66d, _0x59f1c2) => {
      return _0x30a66d + (parseFloat(_0x59f1c2.finalCash) || 0);
    }, 0),
    _0x45dfe6 = _0x3f5344 - _0x3fbbbe;
  let _0xe13cc1 = 0,
    _0x451bf2 = 0,
    _0x579f45 = 0;
  _0x1d00df.forEach(_0x3658fe => {
    _0x3658fe.stats && Object.values(_0x3658fe.stats).forEach(_0x21a777 => {
      _0xe13cc1 += _0x21a777.success + _0x21a777.failed;
      _0x451bf2 += _0x21a777.success;
      _0x579f45 += _0x21a777.totalReward;
    });
  });
  const _0x964e36 = _0xe13cc1 > 0 ? (_0x451bf2 / _0xe13cc1 * 100).toFixed(1) : "0.0",
    _0x15b4cf = _0x1d00df.filter(_0xf485cb => _0xf485cb.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号��务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x1d00df.length).padEnd(22) + ("超过金币阈��账号: " + _0x15b4cf).padEnd(22) + ("总任务数: " + _0xe13cc1).padEnd(22) + ("任务成功率: " + _0x964e36 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x4d292f).padEnd(26) + ("总金币奖励: " + _0x579f45).padEnd(26) + ("总余额变化: " + _0x45dfe6.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x221204 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x4f12c1 = [6, 16, 16, 12, 12, 12, 12, 12, 12];
  let _0x2cec42 = "|";
  _0x221204.forEach((_0xca4cc9, _0x46e23b) => {
    _0x2cec42 += centerAlign(_0xca4cc9, _0x4f12c1[_0x46e23b]) + "|";
  });
  console.log(_0x2cec42);
  let _0x217d17 = "|";
  _0x4f12c1.forEach(_0x431a3b => {
    _0x217d17 += "-".repeat(_0x431a3b) + "|";
  });
  console.log(_0x217d17);
  _0x1d00df.forEach(_0x35b8a6 => {
    let _0x1ad16c = "|";
    _0x1ad16c += centerAlign(_0x35b8a6.index, _0x4f12c1[0]) + "|";
    _0x1ad16c += centerAlign(_0x35b8a6.remark, _0x4f12c1[1]) + "|";
    const _0x40aa2e = (_0x35b8a6.nickname || "-") + (_0x35b8a6.coinLimitExceeded ? " ⚠️" : "");
    _0x1ad16c += centerAlign(_0x40aa2e.substring(0, _0x4f12c1[2] - 2), _0x4f12c1[2]) + "|";
    _0x1ad16c += centerAlign(_0x35b8a6.initialCoin, _0x4f12c1[3]) + "|";
    _0x1ad16c += centerAlign(_0x35b8a6.finalCoin, _0x4f12c1[4]) + "|";
    const _0x417270 = _0x35b8a6.coinChange >= 0 ? "+" + _0x35b8a6.coinChange : _0x35b8a6.coinChange;
    _0x1ad16c += centerAlign(_0x417270, _0x4f12c1[5]) + "|";
    _0x1ad16c += centerAlign(_0x35b8a6.initialCash, _0x4f12c1[6]) + "|";
    _0x1ad16c += centerAlign(_0x35b8a6.finalCash, _0x4f12c1[7]) + "|";
    const _0x5a2193 = _0x35b8a6.cashChange >= 0 ? "+" + _0x35b8a6.cashChange.toFixed(2) : _0x35b8a6.cashChange.toFixed(2);
    _0x1ad16c += centerAlign(_0x5a2193, _0x4f12c1[8]) + "|";
    console.log(_0x1ad16c);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  await validateCardKey();
  const _0x10a43e = loadAccountsFromEnv();
  console.log("共找到 " + _0x10a43e.length + " 个有效账号");
  !_0x10a43e.length && process.exit(1);
  const _0x29199d = getEnvNumber("MAX_CONCURRENCY", 888);
  console.log("\n防黑并发：" + _0x29199d + "    防黑轮数：" + KSROUNDS + "\n");
  const _0x11d22c = [];
  await concurrentExecute(_0x10a43e, _0x29199d, async _0x40588b => {
    {
      console.log("\n—— 🚀 开始账号[" + _0x40588b.index + "]" + (_0x40588b.remark ? "（" + _0x40588b.remark + "）" : "") + " ——");
      try {
        {
          const _0x3a83af = await processAccount(_0x40588b);
          _0x11d22c.push({
            "index": _0x40588b.index,
            "remark": _0x40588b.remark || "无备注",
            "nickname": _0x3a83af?.["nickname"] || "账号" + _0x40588b.index,
            "initialCoin": _0x3a83af?.["initialCoin"] || 0,
            "finalCoin": _0x3a83af?.["finalCoin"] || 0,
            "coinChange": _0x3a83af?.["coinChange"] || 0,
            "initialCash": _0x3a83af?.["initialCash"] || 0,
            "finalCash": _0x3a83af?.["finalCash"] || 0,
            "cashChange": _0x3a83af?.["cashChange"] || 0,
            "stats": _0x3a83af?.["stats"] || {},
            "coinLimitExceeded": _0x3a83af?.["coinLimitExceeded"] || false
          });
        }
      } catch (_0xc5287b) {
        console.log("账号[" + _0x40588b.index + "]" + (_0x40588b.remark ? "（" + _0x40588b.remark + "）" : "") + " ❌ 执行异常：" + _0xc5287b.message);
        _0x11d22c.push({
          "index": _0x40588b.index,
          "remark": _0x40588b.remark || "无备注",
          "nickname": "账号" + _0x40588b.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0xc5287b.message
        });
      }
    }
  });
  _0x11d22c.sort((_0x3e3b1b, _0x3d47f6) => _0x3e3b1b.index - _0x3d47f6.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x11d22c);
})();