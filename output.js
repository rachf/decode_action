//Wed Nov 26 2025 08:48:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";
const _0x2b7866 = require("axios"),
  _0x266992 = require("querystring"),
  {
    SocksProxyAgent: _0x307c7e
  } = require("socks-proxy-agent"),
  _0x5f0c70 = require("fs");
function _0x1c714e(_0x384093) {
  return new Promise(_0xb16e1d => setTimeout(_0xb16e1d, _0x384093));
}
const _0x5395a4 = (() => {
    const _0x3d3541 = (process.env.KS_DEV_MODE || "").toLowerCase();
    return !["0", "false"].includes(_0x3d3541);
  })(),
  _0x36b055 = (() => {
    const _0x59dddf = (process.env.KS_LOG_COLOR || "1").toLowerCase();
    return !["0", "false"].includes(_0x59dddf);
  })();
function _0x13df70() {
  const _0x243671 = new Date(),
    _0x2be942 = _0x31d4ed => String(_0x31d4ed).padStart(2, "0");
  return _0x2be942(_0x243671.getHours()) + ":" + _0x2be942(_0x243671.getMinutes()) + ":" + _0x2be942(_0x243671.getSeconds());
}
const _0x6921dc = _0x36b055 ? {
  "reset": "[0m",
  "bright": "[1m",
  "dim": "[2m",
  "red": "[31m",
  "green": "[32m",
  "yellow": "[33m",
  "blue": "[34m",
  "magenta": "[35m",
  "cyan": "[36m",
  "white": "[37m"
} : {
  "reset": "",
  "bright": "",
  "dim": "",
  "red": "",
  "green": "",
  "yellow": "",
  "blue": "",
  "magenta": "",
  "cyan": "",
  "white": ""
};
function _0x8024f9(_0x532ede, _0x526d3f) {
  if (!_0x36b055 || !_0x526d3f) {
    return String(_0x532ede);
  }
  return "" + _0x526d3f + _0x532ede + _0x6921dc.reset;
}
function _0xe6f633(_0x35c9c6 = {}) {
  try {
    let _0x557e9a = _0x35c9c6.adExtInfo || _0x35c9c6.extInfo || _0x35c9c6?.["ad"]?.["adExtInfo"] || "{}";
    if (typeof _0x557e9a === "string") try {
      _0x557e9a = JSON.parse(_0x557e9a);
    } catch (_0x5054de) {
      _0x557e9a = {};
    }
    const _0x40602c = ["直播", "live", "主播", "LIVE", "zb", "ZB"],
      _0x27dc7b = String(_0x35c9c6.creativeId || _0x35c9c6?.["ad"]?.["creativeId"] || "").toLowerCase(),
      _0x1a6116 = String(_0x557e9a.description || "").toLowerCase(),
      _0x839a47 = String(_0x557e9a.title || _0x35c9c6.title || "").toLowerCase(),
      _0x27dd01 = String(_0x557e9a.caption || _0x35c9c6.caption || "").toLowerCase(),
      _0x56d3b5 = [_0x27dc7b, _0x1a6116, _0x839a47, _0x27dd01, JSON.stringify(_0x557e9a || {})];
    for (const _0x5b2778 of _0x56d3b5) {
      for (const _0x8b5a16 of _0x40602c) {
        {
          if (_0x5b2778 && _0x5b2778.includes(_0x8b5a16.toLowerCase())) {
            return true;
          }
        }
      }
    }
    const _0x21da54 = _0x35c9c6.materialTime || _0x35c9c6?.["ad"]?.["materialTime"] || 0;
    if (_0x21da54 > 60000) return true;
    if (_0x27dc7b.startsWith("live_") || _0x27dc7b.startsWith("zb_") || _0x27dc7b.startsWith("live-") || _0x27dc7b.startsWith("zb-")) {
      return true;
    }
    return false;
  } catch (_0x18ef7e) {
    return false;
  }
}
function _0x4b7b57(_0xf4b21a) {
  const _0x3ac483 = _0xf4b21a || "未知账号";
  return _0x8024f9("[" + _0x3ac483 + "]", _0x6921dc.bright + _0x6921dc.cyan);
}
function _0xe7df25(_0x86c5b9) {
  const _0x191baf = _0x86c5b9 ?? "-";
  return _0x8024f9(_0x191baf, _0x6921dc.bright + _0x6921dc.green);
}
function _0x5e7218(_0x2df85f) {
  const _0x1077a4 = _0x2df85f ?? "-";
  return _0x8024f9(_0x1077a4, _0x6921dc.bright + _0x6921dc.yellow);
}
function _0x28e982(_0x23458a) {
  const _0x52aabb = _0x23458a ?? 0;
  return _0x8024f9(_0x52aabb + "金币", _0x6921dc.bright + _0x6921dc.yellow);
}
function _0x113444(_0x43e65a, _0x76d229) {
  const _0x3fbc39 = String(_0x43e65a ?? "");
  if (_0x3fbc39.length >= _0x76d229) return _0x3fbc39.slice(0, _0x76d229);
  const _0x54d616 = _0x76d229 - _0x3fbc39.length,
    _0x55539f = Math.floor(_0x54d616 / 2),
    _0xa29fc = _0x54d616 - _0x55539f;
  return "" + " ".repeat(_0x55539f) + _0x3fbc39 + " ".repeat(_0xa29fc);
}
const _0x3fae1b = {
    "DEBUG": 0,
    "INFO": 1,
    "WARN": 2,
    "ERROR": 3,
    "SUCCESS": 4
  },
  _0x45cfc0 = {
    [_0x3fae1b.DEBUG]: "DEBUG",
    [_0x3fae1b.INFO]: "INFO",
    [_0x3fae1b.WARN]: "WARN",
    [_0x3fae1b.ERROR]: "ERROR",
    [_0x3fae1b.SUCCESS]: "SUCCESS"
  },
  _0x3afe47 = {
    [_0x3fae1b.DEBUG]: "[36m",
    [_0x3fae1b.INFO]: "[34m",
    [_0x3fae1b.WARN]: "[33m",
    [_0x3fae1b.ERROR]: "[31m",
    [_0x3fae1b.SUCCESS]: "[32m"
  },
  _0xa81756 = "[0m";
class _0x41e12 {
  constructor(_0x47381e = "") {
    this.prefix = _0x47381e ? "[" + _0x47381e + "]" : "";
    this.minLevel = _0x5395a4 ? _0x3fae1b.DEBUG : _0x3fae1b.INFO;
  }
  ["_formatMessage"](_0x5e425e, _0x2dfda3) {
    const _0x2a1212 = _0x13df70(),
      _0x18f048 = _0x45cfc0[_0x5e425e].padEnd(7),
      _0x3c2a08 = _0x36b055 ? _0x3afe47[_0x5e425e] || "" : "",
      _0x5a8ecc = _0x36b055 ? _0xa81756 : "";
    return _0x3c2a08 + "[" + _0x2a1212 + "] " + _0x18f048 + " " + this.prefix + " " + _0x2dfda3 + _0x5a8ecc;
  }
  ["log"](_0x4df526, _0x40753e, ..._0x53a45f) {
    if (_0x4df526 < this.minLevel) return;
    try {
      const _0x22df27 = this._formatMessage(_0x4df526, _0x40753e),
        _0x31a331 = _0x4df526 === _0x3fae1b.ERROR ? console.error : _0x4df526 === _0x3fae1b.WARN ? console.warn : console.log;
      _0x31a331(_0x22df27, ..._0x53a45f);
    } catch (_0x5d289f) {
      console.error("[" + _0x13df70() + "] ERROR   Logger error:", _0x5d289f);
      console.log("[" + _0x13df70() + "] INFO    Original message:", _0x40753e, ..._0x53a45f);
    }
  }
  ["debug"](_0x2173fb, ..._0x34956f) {
    this.log(_0x3fae1b.DEBUG, _0x2173fb, ..._0x34956f);
  }
  ["info"](_0x3af664, ..._0x3b0697) {
    this.log(_0x3fae1b.INFO, _0x3af664, ..._0x3b0697);
  }
  ["warn"](_0xc273e6, ..._0x3ca706) {
    this.log(_0x3fae1b.WARN, _0xc273e6, ..._0x3ca706);
  }
  ["error"](_0x444600, ..._0x50e70c) {
    this.log(_0x3fae1b.ERROR, _0x444600, ..._0x50e70c);
  }
  ["success"](_0x2f1635, ..._0x209822) {
    this.log(_0x3fae1b.SUCCESS, _0x2f1635, ..._0x209822);
  }
}
const _0x4a247b = new _0x41e12();
function _0x45c055(..._0x55d99c) {
  for (const _0x41fdd8 of _0x55d99c) {
    const _0x89eb36 = process.env[_0x41fdd8];
    if (_0x89eb36 && _0x89eb36.trim()) {
      return _0x89eb36.trim();
    }
  }
  return "";
}
const _0x2df5fc = process.env.AUTH_API_URL || "http://47.95.197.104/auth_normal.php",
  _0x24714a = _0x45c055("AUTH_KEY", "KAMICARD_KEY"),
  _0x34c27a = _0x45c055("SCRIPT_VERSION") || "pt_v4",
  _0x4e32f5 = _0x45c055("QL_ID"),
  _0x483e00 = (() => {
    const _0xe52dfe = _0x45c055("AUTH_TIMEOUT") || "30",
      _0x121444 = parseInt(_0xe52dfe, 10);
    return Number.isNaN(_0x121444) ? 30 : _0x121444;
  })(),
  _0x106d7e = !!(_0x2df5fc && _0x24714a);
let _0x5d41b1 = "";
if (_0x2df5fc) {
  if (_0x2df5fc.endsWith("auth_normal.php")) _0x5d41b1 = _0x2df5fc.replace("auth_normal.php", "client_api.php");else {
    if (_0x2df5fc.endsWith("auth.php")) _0x5d41b1 = _0x2df5fc.replace("auth.php", "client_api.php");else _0x2df5fc.endsWith("auth_pt.php") && (_0x5d41b1 = _0x2df5fc.replace("auth_pt.php", "client_api.php"));
  }
}
const _0xe62bf6 = (() => {
    const _0x11760c = _0x45c055("AUTH_STATUS_TTL") || "60",
      _0x5614a2 = parseInt(_0x11760c, 10);
    return Number.isNaN(_0x5614a2) ? 60 : _0x5614a2;
  })(),
  _0x47a80d = (() => {
    const _0x354aa1 = (process.env.SKIP_LIVE_ADS || "1").toLowerCase();
    return ["1", "true", "yes", "on"].includes(_0x354aa1);
  })(),
  _0x615e05 = (() => {
    const _0x1730f3 = parseInt(process.env.SKIP_LIVE_MAX_RETRIES || "5", 10);
    if (Number.isNaN(_0x1730f3) || _0x1730f3 < 1) return 5;
    return _0x1730f3;
  })();
let _0x3c3630 = {
  "timestamp": 0,
  "result": null,
  "ud": null,
  "device_id": null
};
const _0x2e1fab = ".device_id.txt";
function _0x4ba48e() {
  try {
    if (_0x5f0c70.existsSync(_0x2e1fab)) {
      {
        const _0x1e99a7 = _0x5f0c70.readFileSync(_0x2e1fab, "utf8").trim();
        if (_0x1e99a7 && _0x1e99a7.length === 32) return _0x1e99a7;else {
          if (_0x1e99a7) try {
            _0x5f0c70.unlinkSync(_0x2e1fab);
          } catch (_0xc43cf8) {}
        }
      }
    }
    const _0xa1475f = "0123456789abcdef";
    let _0x522e6e = "";
    for (let _0xa3101b = 0; _0xa3101b < 32; _0xa3101b++) {
      _0x522e6e += _0xa1475f.charAt(Math.floor(Math.random() * _0xa1475f.length));
    }
    try {
      _0x5f0c70.writeFileSync(_0x2e1fab, _0x522e6e, "utf8");
    } catch (_0x25f27b) {}
    return _0x522e6e;
  } catch (_0x1a84d5) {
    const _0x37d996 = "0123456789abcdef";
    let _0x2b50eb = "";
    for (let _0x25edb6 = 0; _0x25edb6 < 32; _0x25edb6++) {
      _0x2b50eb += _0x37d996.charAt(Math.floor(Math.random() * _0x37d996.length));
    }
    return _0x2b50eb;
  }
}
function _0x2e86a5() {
  if (process.env.KS_GUI_MODE) return;
  const _0x386dd2 = () => {
    _0x4a247b.warn("\n" + "=".repeat(80));
    _0x4a247b.warn("收到停止信号，脚本立即强制退出...");
    _0x4a247b.warn("=".repeat(80));
    process.exit(0);
  };
  try {
    process.on("SIGINT", _0x386dd2);
    process.on("SIGTERM", _0x386dd2);
  } catch (_0x68d8f8) {}
}
_0x2e86a5();
async function _0x9d489d(_0x101787, _0xcba981 = "") {
  if (!_0x106d7e) return null;
  const _0x29b8a0 = {
    "key": _0x24714a,
    "script_version": _0x34c27a,
    ..._0x101787
  };
  _0x4e32f5 && (_0x29b8a0.ql_id = _0x4e32f5);
  const _0x53b6a6 = {
    "Content-Type": "application/json",
    "X-Auth-Key": _0x24714a,
    "X-Script-Version": _0x34c27a
  };
  try {
    const _0x159cec = await _0x2b7866.post(_0x2df5fc, _0x29b8a0, {
        "headers": _0x53b6a6,
        "timeout": _0x483e00 * 1000
      }),
      _0x455ddd = _0x159cec.data;
    if (!_0x455ddd || typeof _0x455ddd !== "object") return null;
    if (!_0x455ddd.status) {
      return {
        "status": false,
        "error": _0x455ddd.message,
        "data": _0x455ddd.data
      };
    }
    let _0x33a774 = _0x455ddd.data;
    if (typeof _0x33a774 === "string") {
      {
        const _0x5ee571 = _0x33a774.trim();
        if (_0x5ee571) try {
          _0x33a774 = JSON.parse(_0x5ee571);
        } catch {}
      }
    }
    return {
      "status": true,
      "data": _0x33a774
    };
  } catch (_0x1882a7) {
    return null;
  }
}
async function _0x54244e(_0x14d415 = null, _0x5e1da2 = null) {
  if (!_0x24714a) {
    return {
      "valid": false,
      "message": "未配置卡密(AUTH_KEY / KAMICARD_KEY)"
    };
  }
  if (!(_0x106d7e && _0x5d41b1)) return {
    "valid": false,
    "message": ""
  };
  const _0x18ab8f = _0x5e1da2 || _0x4ba48e(),
    _0x124e34 = Date.now() / 1000,
    _0x5dc0d1 = _0x3c3630.result;
  if (_0x5dc0d1 && _0x3c3630.ud === _0x14d415 && _0x3c3630.device_id === _0x18ab8f && _0x124e34 - (_0x3c3630.timestamp || 0) < _0xe62bf6) return _0x5dc0d1;
  const _0x2d92bf = {
    "api": "check_key",
    "key": _0x24714a,
    "script_version": _0x34c27a
  };
  if (_0x14d415) _0x2d92bf.ud = _0x14d415;
  if (_0x18ab8f) _0x2d92bf.device_id = _0x18ab8f;
  if (_0x4e32f5) _0x2d92bf.ql_id = _0x4e32f5;
  try {
    {
      const _0x5f3267 = await _0x2b7866.get(_0x5d41b1, {
          "params": _0x2d92bf,
          "timeout": _0x483e00 * 1000
        }),
        _0x447d7e = _0x5f3267.data;
      if (!_0x447d7e || typeof _0x447d7e !== "object") {
        throw new Error("invalid response");
      }
      let _0x163aea;
      if (!_0x447d7e.status) {
        _0x163aea = {
          "valid": false,
          "message": _0x447d7e.message || "卡密验证失败",
          "data": _0x447d7e.data || {}
        };
      } else _0x163aea = {
        "valid": true,
        "message": "",
        "data": _0x447d7e.data || {}
      };
      _0x3c3630 = {
        "timestamp": _0x124e34,
        "result": _0x163aea,
        "ud": _0x14d415,
        "device_id": _0x18ab8f
      };
      return _0x163aea;
    }
  } catch (_0x1d56c1) {
    return {
      "valid": true,
      "message": ""
    };
  }
}
async function _0xfe5317(_0x249e45 = "脚本") {
  const _0xcc7a5d = await _0x54244e();
  if (_0xcc7a5d.valid) return _0x4a247b.info(_0x249e45 + " 卡密验证通过"), true;
  const _0x1ea842 = _0xcc7a5d.message || "卡密验证失败";
  _0x4a247b.error(_0x249e45 + " " + _0x1ea842);
  return false;
}
async function _0x2c54a0(_0x5ad966) {
  const _0x25e747 = _0x4ba48e(),
    _0x15ea21 = await _0x54244e(_0x5ad966.userId, _0x25e747);
  if (!_0x15ea21.valid) {
    let _0x34962f = _0x15ea21.message || "卡密验证失败";
    const _0x28de0a = _0x15ea21.data && typeof _0x15ea21.data === "object" ? _0x15ea21.data : {},
      _0x525bb9 = _0x28de0a.code || _0x28de0a.error_code;
    _0x525bb9 && (_0x34962f = _0x34962f + " (code=" + _0x525bb9 + ")");
    if (_0x525bb9 === "DEVICE_ID_CONFLICT") return _0x4a247b.error("账户[" + _0x5ad966.nickname + "] 设备ID唯一绑定已启用：请先解绑当前设备对应的旧卡密，再运行"), process.exit(1), false;
    _0x4a247b.error("账户[" + _0x5ad966.nickname + "] " + _0x34962f);
    return false;
  }
  const _0x4d228f = _0x15ea21.data && typeof _0x15ea21.data === "object" ? _0x15ea21.data : {},
    _0x483ed3 = [true, "1", 1].includes(_0x4d228f.device_bind_enabled);
  let _0x1de898 = _0x4d228f.bound_device_id;
  if (typeof _0x1de898 === "string") {
    _0x1de898 = _0x1de898.trim() || null;
  }
  if (_0x483ed3 && _0x1de898) {
    if (_0x25e747 && _0x25e747 !== _0x1de898) {
      _0x4a247b.error("账户[" + _0x5ad966.nickname + "] 设备ID绑定验证失败：本地设备与云端绑定设备不一致，脚本已停止运行");
      process.exit(1);
      return false;
    }
  }
  const _0x5463e2 = (_0x5ad966.userId || "").trim(),
    _0x10c2ed = [true, "1", 1].includes(_0x4d228f.ud_bind_enabled),
    _0x15df91 = _0x4d228f.bound_uds || [];
  if (_0x10c2ed && _0x5463e2) {
    if (Array.isArray(_0x15df91) && _0x15df91.length > 0) {
      {
        const _0x45bd96 = _0x15df91.map(_0x58c311 => String(_0x58c311).trim()).filter(Boolean);
        if (!_0x45bd96.includes(_0x5463e2)) return _0x4a247b.error("账户[" + _0x5ad966.nickname + "] UD绑定验证失败：当前账号UD（" + _0x5463e2 + "）不在云端绑定列表中，脚本已停止运行"), process.exit(1), false;
      }
    }
  }
  return true;
}
async function _0x198418() {
  !_0x24714a && (_0x4a247b.error("\n错误: 未设置卡密（AUTH_KEY / KAMICARD_KEY）"), _0x4a247b.info("提示: 请在环境变量中设置 AUTH_KEY 或 KAMICARD_KEY 后再运行脚本"), process.exit(1));
  if (!(_0x106d7e && _0x5d41b1)) {
    {
      _0x4a247b.warn("\n授权网关未正确配置(AUTH_API_URL / client_api.php)，跳过卡密及绑定检查");
      return;
    }
  }
  _0x4a247b.info("\n正在检测卡密状态及绑定配置...");
  const _0x6ee7d8 = _0x4ba48e(),
    _0x434548 = await _0x54244e(null, _0x6ee7d8);
  if (!_0x434548.valid) {
    {
      const _0x2812ac = _0x434548.message || "卡密验证失败",
        _0x47063a = _0x434548.data && typeof _0x434548.data === "object" ? _0x434548.data : {},
        _0x5f22da = _0x47063a.code || _0x47063a.error_code;
      if (_0x5f22da === "DEVICE_ID_CONFLICT") _0x4a247b.error("设备ID唯一绑定已启用：请先解绑当前设备对应的旧卡密，再运行脚本");else _0x5f22da ? _0x4a247b.error("卡密验证失败(" + _0x5f22da + "): " + _0x2812ac) : _0x4a247b.error("卡密验证失败: " + _0x2812ac);
      process.exit(1);
    }
  }
  _0x4a247b.success("卡密验证通过");
  const _0x212dc1 = _0x434548.data && typeof _0x434548.data === "object" ? _0x434548.data : {},
    _0x1de3da = [true, "1", 1].includes(_0x212dc1.device_bind_enabled);
  let _0x157920 = _0x212dc1.bound_device_id;
  if (typeof _0x157920 === "string") {
    _0x157920 = _0x157920.trim() || null;
  }
  if (_0x1de3da && _0x157920) _0x6ee7d8 && _0x6ee7d8 === _0x157920 ? _0x4a247b.success("\n设备ID验证通过") : _0x4a247b.error("\n设备ID验证失败：本地设备ID与云端绑定不一致");else _0x1de3da && !_0x157920 && _0x4a247b.info("\n设备ID验证已启用，当前尚未绑定设备ID");
  const _0x37f65f = [true, "1", 1].includes(_0x212dc1.ud_bind_enabled),
    _0x210eee = Array.isArray(_0x212dc1.bound_uds) ? _0x212dc1.bound_uds : [],
    _0x4aa707 = typeof _0x212dc1.max_ud_bind_count === "number" ? _0x212dc1.max_ud_bind_count : typeof _0x212dc1.max_bind_count === "number" ? _0x212dc1.max_bind_count : 0;
  if (_0x37f65f) {
    _0x4a247b.info("\nUD绑定功能: 已开启");
    if (_0x210eee.length > 0) {
      if (_0x4aa707 > 0) console.log("   已绑定账号数: " + _0x210eee.length + "/" + _0x4aa707 + " 个");else {
        console.log("   已绑定账号数: " + _0x210eee.length + " 个（无限制）");
      }
    } else console.log("   UD绑定已开启，当前尚未绑定任何账号UD");
  }
}
async function _0x31dc27() {
  if (!_0x2df5fc) return null;
  try {
    let _0x2820d4;
    try {
      const _0x184dd2 = new URL(_0x2df5fc),
        _0x198adf = _0x184dd2.pathname.split("/");
      _0x198adf[_0x198adf.length - 1] = "gongmonan.php";
      _0x184dd2.pathname = _0x198adf.join("/");
      _0x184dd2.search = "?api=get_script_version";
      _0x2820d4 = _0x184dd2.toString();
    } catch (_0x51d7e2) {
      _0x2820d4 = _0x2df5fc.replace("auth_normal.php", "gongmonan.php").replace("auth_pt.php", "gongmonan.php").replace("auth.php", "gongmonan.php") + "?api=get_script_version";
    }
    const _0xd60376 = await _0x2b7866.get(_0x2820d4, {
      "timeout": _0x483e00 * 1000,
      "validateStatus": function (_0x204b4a) {
        return _0x204b4a >= 200 && _0x204b4a < 600;
      }
    });
    if (_0xd60376.status === 401) {
      console.log("⚠️ 获取版本号需要登录");
      return null;
    }
    let _0x14f0e4 = _0xd60376.data;
    if (typeof _0x14f0e4 === "string") try {
      _0x14f0e4 = JSON.parse(_0x14f0e4);
    } catch (_0x164f3e) {
      console.log("⚠️ 服务器响应格式错误");
      return null;
    }
    if (!_0x14f0e4 || _0x14f0e4.status !== true || !_0x14f0e4.data) {
      const _0x2a7132 = _0x14f0e4 && (_0x14f0e4.message || _0x14f0e4.error) || "响应格式不正确";
      console.log("⚠️ 无法从服务器获取版本号: " + _0x2a7132);
      return null;
    }
    const _0x3ce068 = _0x14f0e4.data || {},
      _0x33db1b = (_0x3ce068.configured_version || "").toString().trim(),
      _0x44934c = (_0x3ce068.normal_version || "").toString().trim();
    let _0xff5cd5 = [];
    if (_0x44934c) _0xff5cd5 = [_0x44934c];else Array.isArray(_0x3ce068.extra_versions) && (_0xff5cd5 = _0x3ce068.extra_versions.map(_0x1652bd => _0x1652bd != null ? String(_0x1652bd).trim() : "").filter(Boolean));
    return {
      "configuredVersion": _0x33db1b,
      "extraVersions": _0xff5cd5
    };
  } catch (_0x4e12dc) {
    const _0x2cd712 = _0x4e12dc.response && _0x4e12dc.response.data && _0x4e12dc.response.data.message || _0x4e12dc.message || "未知错误";
    console.log("⚠️ 获取服务器版本号失败: " + _0x2cd712);
    return null;
  }
}
async function _0x3e0904() {
  try {
    {
      const _0x1532ca = await _0x31dc27();
      (!_0x1532ca || !_0x1532ca.configuredVersion) && (console.log("\n⚠️ 无法从服务器获取版本号，脚本已停止运行"), process.exit(1));
      const _0x41cc2c = _0x1532ca.configuredVersion,
        _0x4eacda = Array.isArray(_0x1532ca.extraVersions) ? _0x1532ca.extraVersions : [],
        _0x9c28a9 = String(_0x34c27a).toLowerCase().trim(),
        _0x1cf997 = _0x41cc2c ? _0x41cc2c.toLowerCase().trim() : "",
        _0x4a22fb = _0x4eacda.map(_0x177c72 => String(_0x177c72).toLowerCase().trim()),
        _0x1266c1 = _0x4a22fb.length > 0 ? _0x4a22fb : [_0x1cf997].filter(Boolean);
      !_0x1266c1.includes(_0x9c28a9) && (console.log("\n⚠️ 检测到新脚本版本，请更新脚本后重新运行。"), process.exit(1));
    }
  } catch (_0x2dd3e7) {
    console.log("\n⚠️ 版本检查出错: " + (_0x2dd3e7.message || _0x2dd3e7));
    console.log("\n⚠️ 脚本已停止运行。");
    process.exit(1);
  }
}
function _0x11e2c5() {
  const _0x47c493 = (process.env.KS_COIN_LIMIT || "").trim();
  if (_0x47c493) {
    const _0x1fbcbd = parseInt(_0x47c493, 10);
    if (!Number.isNaN(_0x1fbcbd) && _0x1fbcbd > 0) return _0x1fbcbd;
  }
  return 500000;
}
function _0x5b80c6() {
  const _0x90e5e6 = (process.env.KS_WATCH_RANGE || "").trim();
  if (_0x90e5e6) {
    try {
      const _0x3c6a97 = _0x90e5e6.split(",");
      if (_0x3c6a97.length === 2) {
        const _0x1cfaf9 = parseInt(_0x3c6a97[0].trim(), 10),
          _0x537872 = parseInt(_0x3c6a97[1].trim(), 10);
        if (_0x1cfaf9 > 0 && _0x537872 > _0x1cfaf9) return [_0x1cfaf9 * 1000, _0x537872 * 1000];
      }
    } catch {}
  }
  return [30000, 35000];
}
function _0x288e56() {
  const _0x49991a = (process.env.KS_ROUND_REST_INTERVAL || "").trim();
  if (_0x49991a) {
    {
      const _0xf26803 = parseInt(_0x49991a, 10);
      if (!Number.isNaN(_0xf26803) && _0xf26803 > 0) return _0xf26803;
    }
  }
  return 1;
}
function _0x53a740() {
  const _0x3623fe = (process.env.KS_ADINFO_FAIL_EXIT || "").trim();
  return _0x3623fe === "1";
}
function _0x1639b() {
  const _0x598b6b = (process.env.KS_DID_SWITCH || "").trim();
  return _0x598b6b === "1";
}
function _0x1579e2() {
  const _0x133470 = (process.env.KS_AD_APPEND || "").trim();
  if (_0x133470) try {
    return parseInt(_0x133470, 10) !== 0;
  } catch {}
  return true;
}
function _0x4febd7() {
  const _0x56d646 = (process.env.KS_SEARCH_APPEND || "").trim();
  if (_0x56d646) try {
    return parseInt(_0x56d646, 10) !== 0;
  } catch {}
  return true;
}
function _0xf1f175() {
  const _0x57ccad = (process.env.KS_SEARCH_PER_ROUND || "").trim();
  if (_0x57ccad) {
    const _0x717351 = parseInt(_0x57ccad, 10);
    if (!Number.isNaN(_0x717351) && _0x717351 > 0) {
      return _0x717351;
    }
  }
  return 10;
}
function _0x200402() {
  const _0x5c473e = (process.env.KS_COIN_CHECK_LIST || "").trim();
  if (_0x5c473e) {
    try {
      {
        const _0x13f387 = _0x5c473e.split(",").map(_0x293f1e => _0x293f1e.trim()).filter(Boolean).map(_0x2d4fa7 => parseInt(_0x2d4fa7, 10)).filter(_0x2cffa1 => !Number.isNaN(_0x2cffa1) && _0x2cffa1 > 0);
        if (_0x13f387.length > 0) return _0x13f387;
      }
    } catch {}
  }
  return [10, 1];
}
function _0x1f5404() {
  const _0x50436d = (process.env.KS_SEARCH_KEYWORD || "").trim();
  if (_0x50436d) return _0x50436d;
  return "短剧小说";
}
function _0x3281d4() {
  const _0x25b7f3 = (process.env.KS_TASKS || "").trim(),
    _0x2a7231 = {
      "1": "box",
      "2": "look",
      "3": "box_extra",
      "4": "ss"
    };
  if (!_0x25b7f3) return ["look"];
  const _0x4c8dea = _0x25b7f3.split(",").map(_0x7ca374 => _0x7ca374.trim()).filter(Boolean),
    _0x35dd02 = [];
  for (const _0x3fda57 of _0x4c8dea) {
    if (_0x2a7231[_0x3fda57]) {
      _0x35dd02.push(_0x2a7231[_0x3fda57]);
    } else console.log("⚠️ 警告：rw环境变量中的 '" + _0x3fda57 + "' 不是有效值，忽略");
  }
  if (_0x35dd02.length === 0) {
    console.log("⚠️ rw环境变量配置无效，将执行默认任务");
    return ["look"];
  }
  return _0x35dd02;
}
function _0x602979() {
  let _0x4b59f8 = process.env.KS_ACCOUNTS || "";
  const _0x5c55c2 = process.env.KS_ACCOUNTS_FILE;
  if (_0x5c55c2 && _0x5f0c70.existsSync(_0x5c55c2)) try {
    _0x4b59f8 = _0x5f0c70.readFileSync(_0x5c55c2, "utf8");
    console.log("从临时文件读取账号配置: " + _0x5c55c2);
    try {
      _0x5f0c70.unlinkSync(_0x5c55c2);
    } catch {}
  } catch (_0x3b5ff5) {
    console.log("读取临时文件失败: " + (_0x3b5ff5.message || _0x3b5ff5));
  }
  if (!_0x4b59f8) {
    console.log("未发现 KS_ACCOUNTS 环境变量");
    return [];
  }
  const _0x1055c8 = _0x4b59f8.split("&").map(_0x3c0010 => _0x3c0010.trim()).filter(Boolean);
  return _0x1055c8;
}
function _0x3c1fec(_0x511451, _0x4cefcd) {
  const _0x3c8090 = _0x511451.trim().split("#");
  if (_0x3c8090.length < 3) return null;
  const _0x2a3e9b = _0x3c8090[0].trim(),
    _0x4bf236 = _0x3c8090[1].replace("kpn=NEBULA", "kpn=KUAISHOU"),
    _0x1a1f3b = _0x3c8090[2].trim();
  let _0x5adf44 = null,
    _0xa55508 = null;
  const _0x480fa1 = _0x3a0c3a => _0x3a0c3a.includes("|") || _0x3a0c3a.startsWith("socks5://");
  if (_0x3c8090.length === 3) {} else {
    if (_0x3c8090.length === 4) {
      {
        if (_0x480fa1(_0x3c8090[3])) {
          {
            const _0xaefc83 = _0x3c8090[3].trim();
            if (_0xaefc83.includes("|")) {
              const _0x4970d9 = _0xaefc83.split("|");
              if (_0x4970d9.length >= 2) {
                const _0x13d892 = _0x4970d9[0],
                  _0x43f70e = _0x4970d9[1],
                  _0x8a5b4e = _0x4970d9[2] || "",
                  _0x5a7aa6 = _0x4970d9[3] || "";
                if (_0x8a5b4e && _0x5a7aa6) _0xa55508 = "socks5://" + _0x8a5b4e + ":" + _0x5a7aa6 + "@" + _0x13d892 + ":" + _0x43f70e;else {
                  _0xa55508 = "socks5://" + _0x13d892 + ":" + _0x43f70e;
                }
              }
            } else {
              if (_0xaefc83.startsWith("socks5://")) {
                _0xa55508 = _0xaefc83;
              }
            }
          }
        } else _0x5adf44 = _0x3c8090[3].trim();
      }
    } else {
      if (_0x3c8090.length === 5) {
        {
          _0x5adf44 = _0x3c8090[3].trim();
          if (_0x480fa1(_0x3c8090[4])) {
            const _0x204700 = _0x3c8090[4].trim();
            if (_0x204700.includes("|")) {
              {
                const _0x47b621 = _0x204700.split("|");
                if (_0x47b621.length >= 2) {
                  {
                    const _0x1e644e = _0x47b621[0],
                      _0x1ee843 = _0x47b621[1],
                      _0x43e37d = _0x47b621[2] || "",
                      _0x107c48 = _0x47b621[3] || "";
                    _0x43e37d && _0x107c48 ? _0xa55508 = "socks5://" + _0x43e37d + ":" + _0x107c48 + "@" + _0x1e644e + ":" + _0x1ee843 : _0xa55508 = "socks5://" + _0x1e644e + ":" + _0x1ee843;
                  }
                }
              }
            } else _0x204700.startsWith("socks5://") && (_0xa55508 = _0x204700);
          }
        }
      } else {
        if (_0x3c8090.length === 6) {
          {
            _0x5adf44 = _0x3c8090[4].trim();
            if (_0x480fa1(_0x3c8090[5])) {
              const _0x4f58b5 = _0x3c8090[5].trim();
              if (_0x4f58b5.includes("|")) {
                {
                  const _0x5bb1b3 = _0x4f58b5.split("|");
                  if (_0x5bb1b3.length >= 2) {
                    const _0x373644 = _0x5bb1b3[0],
                      _0x492ce9 = _0x5bb1b3[1],
                      _0x2b7e0b = _0x5bb1b3[2] || "",
                      _0x39fd84 = _0x5bb1b3[3] || "";
                    if (_0x2b7e0b && _0x39fd84) {
                      _0xa55508 = "socks5://" + _0x2b7e0b + ":" + _0x39fd84 + "@" + _0x373644 + ":" + _0x492ce9;
                    } else _0xa55508 = "socks5://" + _0x373644 + ":" + _0x492ce9;
                  }
                }
              } else {
                if (_0x4f58b5.startsWith("socks5://")) _0xa55508 = _0x4f58b5;else return console.log("⚠️ 6个字段时第6个应该是代理，格式错误"), null;
              }
            } else {
              console.log("⚠️ 6个字段时第6个应该是代理，格式错误");
              return null;
            }
          }
        } else return console.log("⚠️ 不支持的格式（字段数：" + _0x3c8090.length + "）"), null;
      }
    }
  }
  return {
    "index": _0x4cefcd,
    "nickname": _0x2a3e9b,
    "salt": _0x1a1f3b,
    "cookie": _0x4bf236,
    "region_ticket": _0x5adf44,
    "proxy_url": _0xa55508
  };
}
function _0x14007c() {
  const _0x5d7190 = _0x602979(),
    _0x1061eb = [];
  _0x5d7190.forEach((_0x14bcab, _0x3dc70f) => {
    const _0x286e84 = _0x3c1fec(_0x14bcab, _0x3dc70f + 1);
    _0x286e84 ? _0x1061eb.push(_0x286e84) : console.log("账号配置格式异常：" + _0x14bcab);
  });
  return _0x1061eb;
}
class _0x23ab09 {
  constructor(_0x224c5b, _0x2aea79) {
    this.accountConfig = _0x224c5b;
    this.tasksToExecute = _0x2aea79;
    this.nickname = _0x224c5b.nickname;
    this.customRegionTicket = _0x224c5b.region_ticket;
    this.cookieInfo = this._extractCookieInfo();
    this.egid = this.cookieInfo.egid || "";
    this.did = this.cookieInfo.did || "";
    this.userId = this.cookieInfo.user_id || "";
    this.kuaishouApiSt = this.cookieInfo.kuaishou_api_st || "";
    this.appver = this.cookieInfo.appver || "13.7.20.10468";
    this.ssFirstTaskShown = false;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "business_id": 604,
        "pos_id": 20347,
        "sub_page_id": 100024063,
        "request_scene_type": 1,
        "task_type": 1
      },
      "look": {
        "name": "看广告得金币",
        "business_id": 671,
        "pos_id": 24068,
        "sub_page_id": 100026368,
        "request_scene_type": 1,
        "task_type": 1
      },
      "ss": {
        "name": "搜索广告",
        "business_id": 7077,
        "pos_id": 216267,
        "sub_page_id": 100161535,
        "page_id": 10014,
        "request_scene_type": 1,
        "task_type": 2,
        "link_url": "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiYzc4OWI1ZTAzMjMxOTUwZjcyM2ZjMWE1ZGJjYzgwNmYzMDE1OTcyZWE0Mzc2NmNlNDYwNTk2ZDgzMGVjNTE5MDM0OGEwNTlkOTA2NWYwZGY1ZjkwY2YwMjEwMGVhMmQzYzU0YjUyZDBlNGUxY2Q0NmMxN2ExZDU3YmRhY2EyMzVlM2U1NjYzN2JmZGQzMThiZWMzNTgzOWU1YzIxNWUyNzMzY2IyMzQ2ZGQ1NDYyODc1NDdlMjc4OWYxMjZjZWU5NWZhYzg4N2IxMzM2MzBlZTEzYTVmYTlhODYzNDYxODQ5MjM0NDk3ZGY3ZTRmOWYyYzk2ZjQ5YzViMGExNzQ2NGE2MGM0MDg1MzU2NTY2ZDc4NGIxYjY3NzY3MzYzYjg3IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MH0"
      },
      "box_extra": {
        "name": "饭补广告",
        "business_id": 921,
        "pos_id": 29742,
        "sub_page_id": 100029908,
        "request_scene_type": 7,
        "task_type": 2
      }
    };
    this.taskStats = {};
    for (const _0x520bd5 of this.tasksToExecute) {
      if (this.taskConfigs[_0x520bd5]) {
        this.taskStats[_0x520bd5] = {
          "success": 0,
          "failed": 0,
          "total_reward": 0
        };
      }
    }
    !this.taskStats.box_extra && (this.taskStats.box_extra = {
      "success": 0,
      "failed": 0,
      "total_reward": 0
    });
    this.coinLimit = _0x11e2c5();
    this.coinExceeded = false;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    for (const _0x4e98c8 of this.tasksToExecute) {
      this.taskConfigs[_0x4e98c8] && (this.taskLimitReached[_0x4e98c8] = false);
    }
    this.jbjcValues = _0x200402();
    this.jbjcStreak = 0;
    this.jbjcLimit = 5;
    this.adInfoFailCount = 0;
    this.adInfoFailLimit = 3;
    this.ggcsEnabled = _0x53a740();
    this.jbqzEnabled = _0x1639b();
    this.dynamicDid = null;
    this.didFixed = false;
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this._updateQueryParams();
  }
  ["_updateQueryParams"]() {
    const _0x1ea327 = this.getCurrentDid();
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + _0x1ea327;
  }
  ["generateDeviceId"]() {
    try {
      const _0x2481e4 = "0123456789abcdef";
      let _0x3b1d48 = "";
      for (let _0xa30f7c = 0; _0xa30f7c < 16; _0xa30f7c++) {
        _0x3b1d48 += _0x2481e4.charAt(Math.floor(Math.random() * _0x2481e4.length));
      }
      return "ANDROID_" + _0x3b1d48;
    } catch (_0x177504) {
      console.log("设备ID生成异常: " + (_0x177504.message || _0x177504));
      const _0x20381d = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x20381d.slice(0, 16);
    }
  }
  ["_extractCookieInfo"]() {
    const _0x2f31b6 = {};
    try {
      const _0x152fc6 = this.accountConfig.cookie.split(";");
      for (let _0x4733dc of _0x152fc6) {
        {
          _0x4733dc = _0x4733dc.trim();
          if (!_0x4733dc.includes("=")) continue;
          const [_0x33b491, _0x2bc5fe] = _0x4733dc.split("=", 2);
          if (_0x33b491 === "egid") _0x2f31b6.egid = _0x2bc5fe;else {
            if (_0x33b491 === "did") _0x2f31b6.did = _0x2bc5fe;else {
              if (_0x33b491 === "userId") _0x2f31b6.user_id = _0x2bc5fe;else {
                if (_0x33b491 === "kuaishou.api_st") _0x2f31b6.kuaishou_api_st = _0x2bc5fe;else {
                  if (_0x33b491 === "appver") _0x2f31b6.appver = _0x2bc5fe;
                }
              }
            }
          }
        }
      }
    } catch (_0x168ea6) {
      console.log("账户[" + this.accountConfig.nickname + "] Cookie解析异常: " + (_0x168ea6.message || _0x168ea6));
    }
    return _0x2f31b6;
  }
  ["getCurrentDid"]() {
    if (this.jbqzEnabled && this.dynamicDid && !this.didFixed) return this.dynamicDid;
    return this.did;
  }
  ["_getImpExtData"](_0xd8137b) {
    if (_0xd8137b.name === "搜索广告") {
      {
        const _0x5e2485 = _0xd8137b.link_url || "",
          _0x20f500 = _0x1f5404();
        return JSON.stringify({
          "openH5AdCount": 2,
          "sessionLookedCompletedCount": "1",
          "sessionType": "1",
          "searchKey": _0x20f500,
          "triggerType": "2",
          "disableReportToast": "true",
          "businessEnterAction": "7",
          "neoParams": _0x5e2485
        }, null, 0);
      }
    }
    return "{}";
  }
  async ["getAccountBasicInfo"](_0x514237) {
    const _0x425d69 = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
      _0x3f1d62 = {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/4.27.0",
        "Cookie": this.accountConfig.cookie,
        "Content-Type": "application/x-www-form-urlencoded"
      };
    try {
      {
        const _0x352b31 = await _0x514237.get(_0x425d69, {
          "headers": _0x3f1d62,
          "timeout": 15000
        });
        if (_0x352b31.status !== 200) return console.log("[调试] 账户[" + this.nickname + "] 基础信息请求状态异常: " + _0x352b31.status), null;
        const _0x4e20b0 = _0x352b31.data;
        if (_0x4e20b0 && _0x4e20b0.result === 1 && _0x4e20b0.data) {
          const _0x58ae91 = _0x4e20b0.data;
          let _0x444ec4 = _0x58ae91.coinAmount || 0,
            _0x27e01c = _0x58ae91.cashAmountDisplay || 0;
          try {
            _0x444ec4 = _0x444ec4 ? parseInt(_0x444ec4, 10) : 0;
          } catch {
            _0x444ec4 = 0;
          }
          try {
            _0x27e01c = _0x27e01c ? parseFloat(_0x27e01c) : 0;
          } catch {
            _0x27e01c = 0;
          }
          return {
            "nickname": _0x58ae91.userData && _0x58ae91.userData.nickname || this.nickname,
            "total_coin": _0x444ec4,
            "all_cash": _0x27e01c
          };
        }
        return null;
      }
    } catch (_0x148389) {
      console.log("[调试] 账户[" + this.nickname + "] 基础信息请求错误: " + (_0x148389.message || _0x148389));
      return null;
    }
  }
  async ["checkCoinLimit"](_0x9e2228) {
    try {
      const _0x5bdc13 = await this.getAccountBasicInfo(_0x9e2228);
      if (_0x5bdc13 && _0x5bdc13.total_coin) {
        const _0x262008 = parseInt(_0x5bdc13.total_coin, 10) || 0;
        if (_0x262008 >= this.coinLimit) return console.log("⚠️ 账户[" + this.nickname + "] 金币数量 " + _0x262008 + " 已达上限 " + this.coinLimit + "，停止执行"), this.coinExceeded = true, this.stopAllTasks = true, true;
      }
      return false;
    } catch (_0x2cf3b5) {
      console.log("账户[" + this.nickname + "] 金币检查过程异常: " + (_0x2cf3b5.message || _0x2cf3b5));
      return false;
    }
  }
  async ["getAdInfo"](_0xaf70d7, _0x4b20c7, _0x4c5195 = 0) {
    try {
      {
        const _0x34c46a = "/rest/e/reward/mixed/ad",
          _0x8f41c3 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "3c2cd3f3",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x39db36 = this.getCurrentDid(),
          _0x164db3 = {
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
          _0xcef954 = {
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
              "deviceId": _0x39db36,
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
              "pageId": _0x4b20c7.page_id || 100011251,
              "subPageId": _0x4b20c7.sub_page_id,
              "action": 0,
              "browseType": _0x4b20c7.name === "搜索广告" ? 4 : 3,
              "impExtData": this._getImpExtData(_0x4b20c7),
              "mediaExtData": "{}"
            }]
          },
          _0x26db2b = JSON.stringify(_0xcef954),
          _0x4dc272 = _0x266992.stringify(_0x164db3) + "&" + _0x266992.stringify(_0x8f41c3),
          _0x3ef873 = await this._generateSignature2(_0xaf70d7, _0x34c46a, _0x4dc272, this.accountConfig.salt, _0x26db2b);
        if (!_0x3ef873) {
          console.log("❌ 账户[" + this.nickname + "] 签名生成失败，无法获取" + _0x4b20c7.name);
          return null;
        }
        const _0x2d9cb7 = {
          ..._0x164db3,
          "sig": _0x3ef873.sig || "",
          "__NS_sig3": _0x3ef873.__NS_sig3 || "",
          "__NS_xfalcon": _0x3ef873.__NS_xfalcon || "",
          "__NStokensig": _0x3ef873.__NStokensig || ""
        };
        _0x8f41c3.encData = _0x3ef873.encData || "";
        _0x8f41c3.sign = _0x3ef873.sign || "";
        const _0x93ec7e = "https://api.e.kuaishou.com" + _0x34c46a + "?" + _0x266992.stringify(_0x2d9cb7),
          _0x430f35 = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
          _0x5bb6b0 = {
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/4.27.0",
            "Cookie": _0x430f35,
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Client-Info": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;"
          };
        try {
          {
            const _0x46eb1c = await _0xaf70d7.post(_0x93ec7e, _0x266992.stringify(_0x8f41c3), {
              "headers": _0x5bb6b0,
              "timeout": 15000
            });
            if (_0x46eb1c.status !== 200) return console.log("[调试] 广告信息请求状态异常: " + _0x46eb1c.status), null;
            const _0x545646 = _0x46eb1c.data;
            if (!_0x545646) return null;
            if (_0x545646.errorMsg === "OK" && Array.isArray(_0x545646.feeds) && _0x545646.feeds[0] && _0x545646.feeds[0].ad) {
              {
                const _0x388d2f = _0x545646.feeds[0],
                  _0x24b64c = _0x388d2f?.["ad"]?.["creativeId"] ?? _0x388d2f?.["creativeId"];
                if (!_0x24b64c) return console.log("⚠️ 账户[" + this.nickname + "] 未能解析广告 creativeId"), null;
                if (_0x47a80d) {
                  {
                    const _0x541d0e = _0x388d2f.ad ? {
                        ..._0x388d2f.ad
                      } : {
                        ..._0x388d2f
                      },
                      _0x233dae = _0x388d2f?.["ad"]?.["adDataV2"]?.["inspireAdInfo"]?.["adExtInfo"] ?? _0x388d2f?.["ad"]?.["adExtInfo"] ?? _0x388d2f?.["adExtInfo"] ?? "{}";
                    _0x541d0e.creativeId = _0x541d0e.creativeId ?? _0x24b64c;
                    _0x541d0e.materialTime = _0x541d0e.materialTime ?? _0x388d2f.materialTime ?? 0;
                    _0x541d0e.adExtInfo = typeof _0x233dae === "string" ? _0x233dae : JSON.stringify(_0x233dae);
                    if (_0xe6f633(_0x541d0e)) {
                      const _0x5a47e1 = _0x4c5195 + 1;
                      console.log("⏭️ 账户[" + this.nickname + "] 检测到直播广告，重试 " + _0x5a47e1 + "/" + _0x615e05);
                      if (_0x5a47e1 < _0x615e05) return await this.getAdInfo(_0xaf70d7, _0x4b20c7, _0x5a47e1);
                      console.log("⚠️ 账户[" + this.nickname + "] 多次获取直播广告，停止当前任务");
                      return null;
                    }
                  }
                }
                const _0x225322 = _0x388d2f.exp_tag || "",
                  _0x317854 = _0x225322.split("/");
                let _0x5cc38e = "";
                if (_0x317854.length > 1) {
                  {
                    const _0x2d6ae5 = _0x317854[1].split("_");
                    _0x5cc38e = _0x2d6ae5[0] || "";
                  }
                }
                let _0x38e30d = false;
                try {
                  const _0x2e314d = _0x388d2f.ad && _0x388d2f.ad.adDataV2 || {},
                    _0x3d69a6 = _0x2e314d.onceAgainRewardInfo || {},
                    _0x5b3854 = _0x3d69a6.hasMore || false;
                  _0x5b3854 && (_0x38e30d = true);
                } catch (_0x5b86fa) {}
                return {
                  "cid": _0x24b64c,
                  "llsid": _0x5cc38e,
                  "hasRewardEnd": _0x38e30d
                };
              }
            }
            console.log("❌ 账户[" + this.nickname + "] 广告信息获取失败: " + (_0x545646.errorMsg || "未知错误"));
            return null;
          }
        } catch (_0x288894) {
          console.log("❌ 账户[" + this.nickname + "] 广告信息请求异常: " + (_0x288894.message || _0x288894));
          return null;
        }
      }
    } catch (_0x467230) {
      console.log("❌ 账户[" + this.nickname + "] 广告信息处理异常: " + (_0x467230.message || _0x467230));
      return null;
    }
  }
  async ["_generateSignature"](_0x492abb, _0x1ac37e, _0x175dc9, _0x4380f1, _0x358a44) {
    try {
      const _0x40e81b = JSON.stringify({
          "businessId": _0x358a44.business_id,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x1ac37e,
            "extInfo": "",
            "llsid": _0x175dc9,
            "requestSceneType": _0x358a44.request_scene_type,
            "taskType": _0x358a44.task_type,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": _0x358a44.page_id || 100011251,
          "posId": _0x358a44.pos_id,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x358a44.sub_page_id
        }),
        _0x1bbe64 = "bizStr=" + encodeURIComponent(_0x40e81b) + "&cs=false&client_key=3c2cd3f3",
        _0x12fca7 = _0x266992.parse(this.queryParams),
        _0x2d286c = {};
      for (const _0x166c5c of Object.keys(_0x12fca7)) {
        {
          const _0x18bc27 = _0x12fca7[_0x166c5c];
          _0x2d286c[_0x166c5c] = Array.isArray(_0x18bc27) ? _0x18bc27[0] : _0x18bc27;
        }
      }
      const _0x463508 = _0x266992.parse(_0x1bbe64),
        _0x27af40 = {};
      for (const _0x85ad33 of Object.keys(_0x463508)) {
        {
          const _0x3c14ab = _0x463508[_0x85ad33];
          _0x27af40[_0x85ad33] = Array.isArray(_0x3c14ab) ? _0x3c14ab[0] : _0x3c14ab;
        }
      }
      const _0x5be89f = {
        ..._0x2d286c,
        ..._0x27af40
      };
      delete _0x5be89f.sig;
      delete _0x5be89f.__NS_sig3;
      delete _0x5be89f.__NS_xfalcon;
      delete _0x5be89f.__NStokensig;
      const _0x378e86 = "/rest/r/ad/task/report",
        _0x2e9b53 = _0x266992.stringify(_0x5be89f),
        _0x1b0b61 = await this.requestNssig(_0x2e9b53, this.accountConfig.salt, _0x378e86, "账户[" + this.nickname + "] nssig(任务报告)");
      if (!_0x1b0b61) return console.log("❌ 账户[${this.nickname}] /nssig(任务报告) 返回空值"), null;
      const _0xa98508 = _0x1b0b61.sig || "",
        _0x5f59b8 = _0x1b0b61.nstokensig || "",
        _0x332240 = _0x1b0b61.nssig3 || "",
        _0x589776 = _0x1b0b61.nssig4 || "";
      if (!_0xa98508 || !_0x5f59b8 || !_0x332240 || !_0x589776) return console.log("❌ 账户[" + this.nickname + "] /nssig(任务报告) 返回字段不完整"), null;
      return {
        "sig": _0xa98508,
        "sig3": _0x332240,
        "xfalcon": _0x589776,
        "sigtoken": _0x5f59b8,
        "post": _0x1bbe64
      };
    } catch (_0x1b9cba) {
      console.log("❌ 账户[" + this.nickname + "] 生成签名异常: " + (_0x1b9cba.message || _0x1b9cba));
      return null;
    }
  }
  async ["_generateSignature2"](_0x3d812b, _0x1cc1ff, _0x43887d, _0x21f2f6, _0x325529) {
    try {
      {
        const _0x12ea27 = Buffer.from(_0x325529, "utf8").toString("base64"),
          _0x187851 = await this.requestEncsign(_0x12ea27, "账户[" + this.nickname + "] encsign(广告)");
        if (!_0x187851) {
          console.log("账户[" + this.nickname + "] /encsign 返回空值");
          return null;
        }
        const _0xd89210 = _0x187851.encdata || _0x187851.encData,
          _0x1ae158 = _0x187851.sign;
        if (!_0xd89210 || !_0x1ae158) return console.log("账户[" + this.nickname + "] /encsign 返回字段不完整"), null;
        const _0x207116 = _0x266992.parse(_0x43887d),
          _0x594c74 = {};
        for (const _0x594599 of Object.keys(_0x207116)) {
          const _0x30ec85 = _0x207116[_0x594599];
          _0x594c74[_0x594599] = Array.isArray(_0x30ec85) ? _0x30ec85[0] : _0x30ec85;
        }
        _0x594c74.encData = _0xd89210;
        _0x594c74.sign = _0x1ae158;
        const _0x128141 = _0x266992.stringify(_0x594c74),
          _0x35fb53 = await this.requestNssig(_0x128141, _0x21f2f6, _0x1cc1ff, "账户[" + this.nickname + "] nssig(广告)");
        if (!_0x35fb53) return console.log("❌ 账户[${this.nickname}] /nssig(广告) 返回空值"), null;
        const _0x330def = _0x35fb53.sig || "",
          _0x114d61 = _0x35fb53.nstokensig || "",
          _0x2862bd = _0x35fb53.nssig3 || "",
          _0x471210 = _0x35fb53.nssig4 || "";
        if (!_0x330def || !_0x114d61 || !_0x2862bd || !_0x471210) {
          console.log("❌ 账户[" + this.nickname + "] /nssig(广告) 返回字段不完整");
          return null;
        }
        return {
          "encData": _0xd89210,
          "sign": _0x1ae158,
          "sig": _0x330def,
          "__NS_sig3": _0x2862bd,
          "__NS_xfalcon": _0x471210,
          "__NStokensig": _0x114d61
        };
      }
    } catch (_0x2cfdfc) {
      console.log("账户[" + this.nickname + "] 生成广告签名异常: " + (_0x2cfdfc.message || _0x2cfdfc));
      return null;
    }
  }
  async ["submitReport"](_0x2d0c3a, _0xaa1ec6, _0x1b3314, _0x3cd921, _0x4d2429, _0x457b97, _0x2c74ab, _0x4c631d) {
    try {
      const _0x43da9a = "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.queryParams + ("&sig=" + _0xaa1ec6 + "&__NS_sig3=" + _0x1b3314 + "&__NS_xfalcon=" + _0x3cd921 + "&__NStokensig=" + _0x4d2429),
        _0x11471c = this.customRegionTicket || "";
      let _0x1ee6b4;
      _0x11471c ? _0x1ee6b4 = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=" + _0x11471c : _0x1ee6b4 = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7";
      const _0xbbe2d7 = {
        "Host": "api.e.kuaishou.cn",
        "User-Agent": "kwai-android aegon/4.27.0",
        "Cookie": _0x1ee6b4,
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Client-Info": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;"
      };
      try {
        const _0x59c37e = await _0x2d0c3a.post(_0x43da9a, _0x457b97, {
          "headers": _0xbbe2d7,
          "timeout": 15000
        });
        if (_0x59c37e.status !== 200) {
          console.log("[调试] 报告提交状态异常: " + _0x59c37e.status);
          return {
            "success": false,
            "reward": 0
          };
        }
        const _0x1acc4c = _0x59c37e.data;
        if (!_0x1acc4c) return {
          "success": false,
          "reward": 0
        };
        if (_0x1acc4c.result === 1) {
          {
            const _0x7b0ca9 = (_0x1acc4c.data && _0x1acc4c.data.neoAmount) !== undefined ? _0x1acc4c.data.neoAmount : 0;
            return {
              "success": true,
              "reward": _0x7b0ca9
            };
          }
        }
        const _0x38caac = [20107, 20108, 1003, 415];
        if (_0x38caac.includes(_0x1acc4c.result)) {
          console.log("⚠️ 账户[" + this.nickname + "] " + _0x4c631d.name + " 任务已达上限");
          this.taskLimitReached[_0x2c74ab] = true;
          return {
            "success": false,
            "reward": 0
          };
        }
        console.log("❌ 账户[" + this.nickname + "] " + _0x4c631d.name + " 奖励获取失败，result=" + _0x1acc4c.result + " msg=" + (_0x1acc4c.data || ""));
        return {
          "success": false,
          "reward": 0
        };
      } catch (_0x30c08d) {
        console.log("❌ 账户[" + this.nickname + "] 报告提交请求异常: " + (_0x30c08d.message || _0x30c08d));
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x580fd7) {
      console.log("❌ 账户[" + this.nickname + "] 任务提交过程异常: " + (_0x580fd7.message || _0x580fd7));
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["_retryOperation"](_0x4c7cc9, _0x22871b, _0x41b2f8 = 3, _0x39354d = 2) {
    let _0x4576ba = 0,
      _0x1b97ca = null;
    while (_0x4576ba < _0x41b2f8) {
      try {
        const _0x271795 = await _0x4c7cc9();
        if (_0x271795) return _0x271795;
        _0x1b97ca = new Error(_0x22871b + " 返回空结果");
      } catch (_0xdd11ab) {
        _0x1b97ca = _0xdd11ab;
        console.log("账户[" + this.nickname + "] " + _0x22871b + " 过程异常: " + (_0xdd11ab.message || _0xdd11ab));
      }
      _0x4576ba += 1;
      _0x4576ba < _0x41b2f8 && (console.log("账户[" + this.nickname + "] " + _0x22871b + " 失败，第 " + _0x4576ba + "/" + _0x41b2f8 + " 次重试"), await _0x1c714e(_0x39354d * 1000));
    }
    return null;
  }
  async ["executeTask"](_0x3456d1, _0x555524, _0x32bd32 = 1, _0x14abf4 = 1, _0x486835 = false, _0x224305 = true, _0x1bd520 = 1) {
    const _0x2e638d = this.taskConfigs[_0x555524];
    if (!_0x2e638d) return console.log("❌ 账户[" + this.nickname + "] 未知任务类型: " + _0x555524), {
      "success": false,
      "hasRewardEnd": false
    };
    if (this.taskLimitReached[_0x555524]) {
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
    try {
      {
        const _0x17991f = _0x2e638d.task_type ?? 1,
          _0x5c9b0a = _0x2e638d.request_scene_type ?? 1;
        _0x2e638d.task_type = _0x32bd32;
        if (_0x555524 === "ss") {
          _0x486835 ? (_0x2e638d.request_scene_type = 7, _0x2e638d.task_type = 2) : _0x2e638d.request_scene_type = 1;
        } else _0x32bd32 === 2 && (_0x2e638d.request_scene_type = 7);
        const _0x183693 = await this._retryOperation(() => this.getAdInfo(_0x3456d1, _0x2e638d), "获取" + _0x2e638d.name + "信息", 3);
        if (!_0x183693) {
          {
            this.adInfoFailCount += 1;
            const _0x263052 = _0x13df70();
            console.log("账号[" + this.nickname + "]获取" + _0x2e638d.name + "信息 失败，重试 " + this.adInfoFailCount + "/" + this.adInfoFailLimit);
            if (this.ggcsEnabled && this.adInfoFailCount >= this.adInfoFailLimit) {
              console.log("🏁 账号[" + this.nickname + "] 获取看广告信息失败" + this.adInfoFailLimit + "次，结束该账号");
              this.stopAllTasks = true;
            }
            _0x2e638d.task_type = _0x17991f;
            _0x2e638d.request_scene_type = _0x5c9b0a;
            this.taskStats[_0x555524].failed += 1;
            return {
              "success": false,
              "hasRewardEnd": false
            };
          }
        }
        this.adInfoFailCount = 0;
        const [_0x3f8354, _0x4aaed9] = _0x5b80c6(),
          _0x4364f8 = (Math.floor(Math.random() * (_0x4aaed9 - _0x3f8354 + 1)) + _0x3f8354) / 1000,
          _0x2f7401 = _0x486835 ? "_追加" : "",
          _0x4263b1 = _0x13df70();
        if (_0x224305) {
          if (_0x555524 === "ss") {
            const _0x2e3df1 = _0xf1f175();
            console.log(_0x4263b1 + " - INFO - 账号[" + this.nickname + "] 开始搜索广告任务 " + _0x14abf4 + "/" + _0x2e3df1);
            if (!_0x486835 && !this.ssFirstTaskShown && _0x14abf4 === 1) {
              const _0x337a40 = _0x1f5404();
              if ((process.env.KS_SEARCH_KEYWORD || "").trim()) {
                console.log(_0x4263b1 + " - INFO - 账号[" + this.nickname + "] 搜索关键词[" + _0x337a40 + "]");
                this.ssFirstTaskShown = true;
              }
            }
          } else console.log(_0x4263b1 + " - INFO - 账号[" + this.nickname + "] 开始广告任务 " + _0x14abf4 + "/10");
        }
        console.log(_0x4263b1 + " - INFO - 账号[" + this.nickname + "] ==>" + _0x2e638d.name + " 广告浏览中 " + Math.round(_0x4364f8) + " 秒");
        await _0x1c714e(_0x4364f8 * 1000);
        const _0x407a3c = await this._retryOperation(() => this._generateSignature(_0x3456d1, _0x183693.cid, _0x183693.llsid, _0x555524, _0x2e638d), "生成" + _0x2e638d.name + "签名", 3);
        if (!_0x407a3c) {
          _0x2e638d.task_type = _0x17991f;
          _0x2e638d.request_scene_type = _0x5c9b0a;
          this.taskStats[_0x555524].failed += 1;
          return {
            "success": false,
            "hasRewardEnd": false
          };
        }
        const _0x400b48 = await this._retryOperation(() => this.submitReport(_0x3456d1, _0x407a3c.sig, _0x407a3c.sig3, _0x407a3c.xfalcon, _0x407a3c.sigtoken, _0x407a3c.post, _0x555524, _0x2e638d), "提交" + _0x2e638d.name + "报告", 3);
        _0x2e638d.task_type = _0x17991f;
        _0x2e638d.request_scene_type = _0x5c9b0a;
        if (_0x400b48 && _0x400b48.success) {
          this.taskStats[_0x555524].success += 1;
          const _0x431433 = _0x400b48.reward || 0;
          this.taskStats[_0x555524].total_reward += _0x431433;
          const _0x29609e = await this.getAccountBasicInfo(_0x3456d1),
            _0x55b897 = _0x29609e ? _0x29609e.total_coin ?? _0x29609e.totalCoin ?? 0 : 0,
            _0x458eea = {
              "box": _0x6921dc.bright + _0x6921dc.blue,
              "box_extra": _0x6921dc.bright + _0x6921dc.green,
              "look": _0x6921dc.bright + _0x6921dc.cyan,
              "ss": _0x6921dc.bright + _0x6921dc.magenta
            },
            _0x4ee61d = _0x431433 >= 1000 ? "" + _0x6921dc.bright + _0x6921dc.red + "💰[高额奖励]" + _0x6921dc.reset : "" + _0x6921dc.bright + _0x6921dc.green + "💰[奖励]" + _0x6921dc.reset,
            _0x3745ad = _0x4b7b57(this.nickname),
            _0x5b1a8f = _0x8024f9("" + _0x2e638d.name + _0x2f7401, _0x458eea[_0x555524] || _0x6921dc.bright + _0x6921dc.cyan),
            _0x205658 = _0x14abf4 || 1,
            _0x3de5ec = _0x1bd520 || _0x205658 || 1,
            _0x576e8c = _0x8024f9("（第" + _0x205658 + "/" + _0x3de5ec + "次）", _0x6921dc.bright + _0x6921dc.yellow),
            _0x234b3b = [_0x4ee61d, _0x3745ad, "" + _0x5b1a8f + _0x576e8c].filter(Boolean).join("").trim();
          console.log(_0x234b3b + "==>" + _0x28e982(_0x431433) + " —— 当前金币[" + _0xe7df25(_0x55b897) + "]");
          if (this.jbqzEnabled && !this.didFixed) {
            {
              if (_0x431433 < 1000) {
                const _0x246e58 = this.generateDeviceId();
                this.dynamicDid = _0x246e58;
                this._updateQueryParams();
                console.log("��� 账号[" + this.nickname + "] 获得" + _0x431433 + "金币 < 1000，切换设备ID: " + _0x246e58);
              } else this.dynamicDid && (this.didFixed = true, console.log("✅ 账号[" + this.nickname + "] 获得" + _0x431433 + "金币 >= 1000，固定设备ID: " + this.dynamicDid));
            }
          }
          if (this.jbjcValues.includes(_0x431433)) {
            {
              this.jbjcStreak += 1;
              const _0x2925b3 = this.jbjcValues.join(",");
              console.log("⚠️ 账户[" + this.nickname + "] 获得" + _0x431433 + "金币 (连续" + this.jbjcStreak + "次，检测值：" + _0x2925b3 + ")");
              this.jbjcStreak >= this.jbjcLimit && (console.log("🏁 账户[" + this.nickname + "] 连续" + this.jbjcLimit + "次获得" + _0x2925b3 + "金币，停止该账号所有任务"), this.stopAllTasks = true);
            }
          } else this.jbjcStreak = 0;
          return {
            "success": true,
            "hasRewardEnd": _0x183693.hasRewardEnd || false
          };
        }
        this.taskStats[_0x555524].failed += 1;
        return {
          "success": false,
          "hasRewardEnd": false
        };
      }
    } catch (_0x3225af) {
      console.log("❌ 账户[" + this.nickname + "] 任务执行异常(" + _0x555524 + "): " + (_0x3225af.message || _0x3225af));
      this.taskStats[_0x555524].failed += 1;
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
  }
  async ["executeAllTasksByPriority"](_0x54b64e) {
    const _0x1f3869 = this.tasksToExecute.filter(_0x2daf6a => this.taskConfigs[_0x2daf6a]),
      _0x52c170 = {},
      _0xc8ffe8 = _0x4febd7(),
      _0x29894b = _0x1f3869.length === 1 && _0x1f3869[0] === "ss";
    if (_0x29894b && _0xc8ffe8) {
      {
        const _0x49bef4 = "ss";
        let _0x1797ee = 0;
        const _0x5c2edd = _0xf1f175();
        while (_0x1797ee < _0x5c2edd && !this.stopAllTasks) {
          _0x1797ee += 1;
          const _0x5e96b2 = await this.executeTask(_0x54b64e, _0x49bef4, 2, _0x1797ee, false, true, _0x5c2edd);
          if (!_0x5e96b2.success) continue;
          let _0x4f8177 = _0x5e96b2.hasRewardEnd || false;
          while (_0x4f8177 && _0x1797ee < _0x5c2edd && !this.stopAllTasks) {
            {
              _0x1797ee += 1;
              const _0x3e44cf = await this.executeTask(_0x54b64e, _0x49bef4, 2, _0x1797ee, true, true, _0x5c2edd);
              if (!_0x3e44cf.success) break;
              _0x4f8177 = _0x3e44cf.hasRewardEnd || false;
            }
          }
        }
        _0x52c170[_0x49bef4] = true;
        return _0x52c170;
      }
    }
    const _0x89c620 = _0x1f3869.filter(_0x9fcfe3 => !["look", "ss"].includes(_0x9fcfe3));
    for (const _0x3e6cd1 of _0x89c620) {
      if (this.stopAllTasks) break;
      const _0x363f87 = this.taskConfigs[_0x3e6cd1],
        _0x4f0d65 = await this.executeTask(_0x54b64e, _0x3e6cd1, _0x363f87.task_type || 1, 1, false, false, 1);
      _0x52c170[_0x3e6cd1] = !!_0x4f0d65.success;
      if (_0x3e6cd1 !== _0x89c620[_0x89c620.length - 1] || _0x1f3869.includes("look")) {
        const _0x15f2ea = Math.floor(Math.random() * 3001 + 3000) / 1000;
        await _0x1c714e(_0x15f2ea * 1000);
      }
    }
    if (_0x1f3869.includes("ss") && !_0x29894b) {
      {
        const _0x1ffa90 = "ss",
          _0x234a04 = this.taskConfigs[_0x1ffa90],
          _0x4d8966 = await this.executeTask(_0x54b64e, _0x1ffa90, _0x234a04.task_type || 2, 1, false, false, _0xf1f175());
        _0x52c170[_0x1ffa90] = !!_0x4d8966.success;
        if (_0x1f3869.includes("look")) {
          const _0x277dc9 = Math.floor(Math.random() * 3001 + 3000) / 1000;
          await _0x1c714e(_0x277dc9 * 1000);
        }
      }
    }
    if (!_0x1f3869.includes("look")) return _0x52c170;
    const _0x242eb2 = "look";
    let _0x426fa5 = 0;
    const _0x404641 = 10,
      _0x16d48e = _0x1579e2();
    while (_0x426fa5 < _0x404641 && !this.stopAllTasks) {
      {
        _0x426fa5 += 1;
        const _0x3fff9e = await this.executeTask(_0x54b64e, _0x242eb2, 1, _0x426fa5, false, true, _0x404641);
        if (!_0x3fff9e.success) continue;
        if (_0x16d48e) {
          {
            let _0x57ea35 = _0x3fff9e.hasRewardEnd || false;
            while (_0x57ea35 && _0x426fa5 < _0x404641 && !this.stopAllTasks) {
              _0x426fa5 += 1;
              const _0x316eeb = await this.executeTask(_0x54b64e, _0x242eb2, 2, _0x426fa5, true, true, _0x404641);
              if (!_0x316eeb.success) break;
              _0x57ea35 = _0x316eeb.hasRewardEnd || false;
            }
          }
        }
      }
    }
    _0x52c170[_0x242eb2] = true;
    return _0x52c170;
  }
  ["printTaskStats"]() {
    console.log("\n账户[" + this.nickname + "] 任务执行统计:");
    for (const [_0x289343, _0x1326cb] of Object.entries(this.taskStats)) {
      const _0x32c93f = this.taskConfigs[_0x289343]?.["name"] || _0x289343;
      console.log("  " + _0x32c93f + ": 成功" + _0x1326cb.success + "次, 失败" + _0x1326cb.failed + "次, 总奖励" + _0x1326cb.total_reward + "金币");
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  async ["requestEncsign"](_0x13dbac, _0x3cc32c) {
    if (!_0x106d7e) return null;
    const _0x59eaf8 = {
        "type": "encsign",
        "data": _0x13dbac,
        "ud": this.userId,
        "device_id": _0x4ba48e(),
        "task": _0x3cc32c
      },
      _0x54e598 = await _0x9d489d(_0x59eaf8, _0x3cc32c);
    if (_0x54e598 && _0x54e598.status) {
      {
        let _0x6572b = _0x54e598.data || {};
        if (typeof _0x6572b === "string") try {
          _0x6572b = JSON.parse(_0x6572b);
        } catch {}
        _0x6572b && typeof _0x6572b === "object" && _0x6572b.data && typeof _0x6572b.data === "object" && (_0x6572b = _0x6572b.data);
        return _0x6572b;
      }
    }
    _0x54e598 && _0x54e598.error && console.log("[警告] " + _0x3cc32c + " 网关返回错误: " + _0x54e598.error);
    return null;
  }
  async ["requestNssig"](_0x535f2c, _0x596650, _0x2d6549, _0x589270) {
    if (!_0x106d7e) return null;
    const _0x56f67c = {
        "type": "nssig",
        "data": _0x535f2c,
        "salt": _0x596650,
        "path": _0x2d6549,
        "ud": this.userId,
        "device_id": _0x4ba48e(),
        "task": _0x589270
      },
      _0xa13d1d = await _0x9d489d(_0x56f67c, _0x589270);
    if (_0xa13d1d && _0xa13d1d.status) {
      {
        let _0x325e82 = _0xa13d1d.data || {};
        if (typeof _0x325e82 === "string") {
          try {
            _0x325e82 = JSON.parse(_0x325e82);
          } catch {}
        }
        _0x325e82 && typeof _0x325e82 === "object" && _0x325e82.data && typeof _0x325e82.data === "object" && (_0x325e82 = _0x325e82.data);
        return _0x325e82;
      }
    }
    if (_0xa13d1d && _0xa13d1d.error) {
      console.log("[警告] " + _0x589270 + " 网关返回错误: " + _0xa13d1d.error);
    }
    return null;
  }
}
async function _0x296fdf(_0x4a5cb8, _0x5e5d9f = "代理连通性检测") {
  if (!_0x4a5cb8) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x40419b = 3;
  for (let _0x1d06ff = 0; _0x1d06ff < _0x40419b; _0x1d06ff++) {
    try {
      {
        const _0x3f811a = new _0x307c7e(_0x4a5cb8),
          _0xf53d7a = _0x2b7866.create({
            "httpAgent": _0x3f811a,
            "httpsAgent": _0x3f811a
          }),
          _0x39703c = Date.now(),
          _0x118396 = "https://nebula.kuaishou.com",
          _0x2894c2 = await _0xf53d7a.get(_0x118396, {
            "timeout": 15000
          }),
          _0x2b8621 = (Date.now() - _0x39703c) / 1000;
        if (_0x2894c2.status === 200) {
          let _0x2d82d4 = "未知";
          try {
            {
              const _0x539648 = await _0xf53d7a.get("https://ipinfo.io/json", {
                "timeout": 10000
              });
              _0x539648.status === 200 && _0x539648.data && (_0x2d82d4 = _0x539648.data.ip || "未知");
            }
          } catch {
            _0x2d82d4 = "未知";
          }
          return {
            "ok": true,
            "msg": "✅ 代理正常，延迟: " + _0x2b8621.toFixed(2) + "秒，IP: " + _0x2d82d4,
            "ip": _0x2d82d4
          };
        }
        if (_0x1d06ff < _0x40419b - 1) {
          console.log("账户[" + _0x5e5d9f + "] 代理测试失败，重试 " + (_0x1d06ff + 1) + "/" + _0x40419b);
          await _0x1c714e(1000);
          continue;
        }
        return {
          "ok": false,
          "msg": "❌ 代理测试失败，状态码: " + _0x2894c2.status,
          "ip": ""
        };
      }
    } catch (_0x5b13fa) {
      if (_0x1d06ff < _0x40419b - 1) {
        console.log("账户[" + _0x5e5d9f + "] 代理测试失败，重试 " + (_0x1d06ff + 1) + "/" + _0x40419b + ": " + (_0x5b13fa.message || _0x5b13fa));
        await _0x1c714e(1000);
        continue;
      }
      return {
        "ok": false,
        "msg": "❌ 代理测试失败: " + (_0x5b13fa.message || _0x5b13fa),
        "ip": ""
      };
    }
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败，3次重试均失败",
    "ip": ""
  };
}
function _0x3507c4(_0x4dceed) {
  if (_0x4dceed) try {
    const _0x129970 = new _0x307c7e(_0x4dceed);
    return _0x2b7866.create({
      "httpAgent": _0x129970,
      "httpsAgent": _0x129970
    });
  } catch (_0xecd10d) {
    console.log("[错误] 代理配置异常: " + (_0xecd10d.message || _0xecd10d));
  }
  return _0x2b7866.create();
}
function _0x4be1b6(_0x423d1d) {
  return {
    "isTaskResult": true,
    ..._0x423d1d
  };
}
async function _0x26a4e8(_0x40a645, _0x124108 = 100) {
  const _0x570c67 = new Set(),
    _0x404318 = _0x3507c4(_0x40a645.proxy_url);
  try {
    const _0x1357ef = await _0xfe5317("账户[" + _0x40a645.index + "]");
    !_0x1357ef && (console.log("❌ 账户[" + _0x40a645.index + "] 卡密验证失败，脚本已停止运行"), process.exit(1));
    if (_0x40a645.proxy_url) {
      console.log("账户[" + _0x40a645.index + "] 🔌 代理连接测试中...");
      const _0x33a16a = await _0x296fdf(_0x40a645.proxy_url, "账户[" + _0x40a645.index + "]");
      console.log("  - " + _0x33a16a.msg);
      if (_0x33a16a.ok && _0x33a16a.ip && _0x33a16a.ip !== "localhost") {
        if (_0x570c67.has(_0x33a16a.ip)) {
          console.log("\n⚠️ 检测到重复代理IP（" + _0x33a16a.ip + "），请检查配置！");
          return null;
        }
        _0x570c67.add(_0x33a16a.ip);
      }
    }
    const _0x315980 = new _0x23ab09(_0x40a645, _0x3281d4());
    let _0x2e9fbc = await _0x315980.getAccountBasicInfo(_0x404318);
    const _0x233246 = await _0x2c54a0(_0x315980);
    if (!_0x233246) {
      _0x315980.stopAllTasks = true;
      return _0x4be1b6({
        "index": _0x40a645.index,
        "nickname": _0x315980.nickname,
        "error": "卡密或绑定验证失败"
      });
    }
    let _0x2635ee = _0x40a645.nickname;
    if (_0x2e9fbc) {
      {
        _0x2635ee = _0x2e9fbc.nickname || _0x40a645.nickname;
        _0x315980.nickname = _0x2635ee;
        const _0x2d9eeb = _0x2e9fbc.total_coin || 0,
          _0x4936b4 = _0x2e9fbc.all_cash || 0;
        console.log("账户[" + _0x2635ee + "] ✅ 登录验证成功， 当前金币: " + _0x2d9eeb + "，💸 当前余额: " + _0x4936b4);
      }
    } else {
      _0x315980.nickname = _0x2635ee;
      console.log("账户[" + _0x2635ee + "] ❌ 登录验证失败，基础信息获取失败");
      if (_0x315980.ggcsEnabled) {
        console.log("🏁 账号[" + _0x2635ee + "] 登录验证失败，结束该账号运行");
        return null;
      }
      console.log("账户[" + _0x2635ee + "] 继续执行流程");
    }
    await _0x315980.checkCoinLimit(_0x404318);
    if (_0x315980.coinExceeded) {
      console.log("账户[" + _0x315980.nickname + "] 初始金币已达上限，跳过任务执行");
      const _0x41dfeb = await _0x315980.getAccountBasicInfo(_0x404318),
        _0xeab926 = _0x2e9fbc ? _0x2e9fbc.total_coin || 0 : 0,
        _0x60a5eb = _0x41dfeb ? _0x41dfeb.total_coin || 0 : 0,
        _0x56cb51 = _0x2e9fbc ? _0x2e9fbc.all_cash || 0 : 0,
        _0x192901 = _0x41dfeb ? _0x41dfeb.all_cash || 0 : 0;
      return _0x4be1b6({
        "index": _0x40a645.index,
        "nickname": _0x315980.nickname,
        "initial_coin": _0xeab926,
        "final_coin": _0x60a5eb,
        "coin_change": _0x60a5eb - _0xeab926,
        "initial_cash": _0x56cb51,
        "final_cash": _0x192901,
        "cash_change": _0x192901 - _0x56cb51,
        "stats": _0x315980.getTaskStats(),
        "coin_limit_exceeded": true
      });
    }
    const _0x5db253 = _0x288e56();
    for (let _0x469dc4 = 0; _0x469dc4 < _0x124108; _0x469dc4++) {
      {
        if ((process.env.KS_STOP_FLAG || "").trim() === "1") {
          console.log("账号[" + _0x315980.nickname + "] ⚠️ 收到停止信号，立即退出");
          return null;
        }
        console.log("账号[" + _0x315980.nickname + "] 🚀 开始第" + (_0x469dc4 + 1) + "轮任务");
        await _0x315980.executeAllTasksByPriority(_0x404318);
        if (_0x315980.stopAllTasks) {
          {
            console.log("账号[" + _0x315980.nickname + "] 🏁 达到停止条件，终止后续轮次");
            break;
          }
        }
        if ((process.env.STOP_FLAG || "").trim() === "1") {
          console.log("账号[" + _0x315980.nickname + "] ⚠️ 收到停止信号，立即退出");
          return null;
        }
        if (_0x5db253 > 0 && (_0x469dc4 + 1) % _0x5db253 === 0 && _0x469dc4 < _0x124108 - 1) {
          {
            const _0x5a14e3 = 600,
              _0x1cea79 = _0x13df70();
            _0x4a247b.info("\n" + _0x1cea79 + " - INFO - 账号[" + _0x315980.nickname + "] 休息10分钟\n");
            for (let _0x20dc81 = 0; _0x20dc81 < _0x5a14e3; _0x20dc81++) {
              {
                if ((process.env.KS_STOP_FLAG || "").trim() === "1") return console.log("账号[" + _0x315980.nickname + "] ⚠️ 收到停止信号，立即退出"), null;
                await _0x1c714e(1000);
              }
            }
          }
        } else {
          if (_0x469dc4 < _0x124108 - 1) {
            {
              const _0x5f51a2 = Math.floor(Math.random() * 5001 + 5000),
                _0x57768c = Math.floor(_0x5f51a2 / 1000);
              for (let _0x2f9a61 = 0; _0x2f9a61 < _0x57768c; _0x2f9a61++) {
                if ((process.env.KS_STOP_FLAG || "").trim() === "1") {
                  console.log("账号[" + _0x315980.nickname + "] ⚠️ 收到停止信号，立即退出");
                  return null;
                }
                await _0x1c714e(1000);
              }
            }
          }
        }
      }
    }
    const _0x32b340 = await _0x315980.getAccountBasicInfo(_0x404318),
      _0x289e74 = _0x2e9fbc ? _0x2e9fbc.total_coin || 0 : 0,
      _0x2a4755 = _0x32b340 ? _0x32b340.total_coin || 0 : 0,
      _0x1e3557 = _0x2e9fbc ? _0x2e9fbc.all_cash || 0 : 0,
      _0x457368 = _0x32b340 ? _0x32b340.all_cash || 0 : 0;
    _0x315980.printTaskStats();
    return _0x4be1b6({
      "index": _0x40a645.index,
      "nickname": _0x315980.nickname,
      "initial_coin": _0x289e74,
      "final_coin": _0x2a4755,
      "coin_change": _0x2a4755 - _0x289e74,
      "initial_cash": _0x1e3557,
      "final_cash": _0x457368,
      "cash_change": _0x457368 - _0x1e3557,
      "stats": _0x315980.getTaskStats(),
      "coin_limit_exceeded": _0x315980.coinExceeded
    });
  } finally {}
}
async function _0x3bc671(_0x4b30b6, _0x8a958, _0x50721e) {
  const _0x2b7007 = _0x4b30b6.map(_0x5d4f1a => _0x26a4e8(_0x5d4f1a, _0x50721e));
  return Promise.all(_0x2b7007);
}
function _0x4c2ff1(_0x1ef2c2) {
  if (!_0x1ef2c2 || _0x1ef2c2.length === 0) {
    console.log("\n无有效账户信息可显示。");
    return;
  }
  const _0x334703 = _0x1ef2c2.filter(_0x28590c => _0x28590c && _0x28590c.isTaskResult);
  if (_0x334703.length === 0) {
    {
      console.log("\n无有效任务执行结果。");
      return;
    }
  }
  let _0x2d3812 = 0,
    _0x453e1e = 0,
    _0x1270dd = 0,
    _0x3ea553 = 0,
    _0x20c18a = 0,
    _0x382408 = 0;
  try {
    for (const _0x169a49 of _0x334703) {
      {
        const _0x31d792 = _0x169a49.initial_coin || 0,
          _0x2dec14 = _0x169a49.final_coin || 0,
          _0x49ebba = _0x169a49.initial_cash || 0,
          _0x5ea158 = _0x169a49.final_cash || 0;
        _0x2d3812 += _0x31d792;
        _0x453e1e += _0x2dec14;
        _0x3ea553 += _0x49ebba;
        _0x20c18a += _0x5ea158;
      }
    }
    _0x1270dd = _0x453e1e - _0x2d3812;
    _0x382408 = _0x20c18a - _0x3ea553;
  } catch (_0x3227cd) {
    {
      console.log("汇总数据计算异常: " + (_0x3227cd.message || _0x3227cd));
      _0x2d3812 = 0;
      _0x453e1e = 0;
      _0x1270dd = 0;
      _0x3ea553 = 0;
      _0x20c18a = 0;
      _0x382408 = 0;
    }
  }
  let _0x9f7f0 = 0,
    _0x2c765e = 0,
    _0xfb63a4 = 0;
  for (const _0x48f01a of _0x334703) {
    if (!_0x48f01a.stats) continue;
    for (const _0x355484 of Object.values(_0x48f01a.stats)) {
      _0x9f7f0 += (_0x355484.success || 0) + (_0x355484.failed || 0);
      _0x2c765e += _0x355484.success || 0;
      _0xfb63a4 += _0x355484.total_reward || 0;
    }
  }
  const _0x58a294 = _0x9f7f0 > 0 ? _0x2c765e / _0x9f7f0 * 100 : 0,
    _0x212df4 = _0x334703.filter(_0x4516bb => _0x4516bb.coin_limit_exceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + "快手任务执行结果汇总".padStart(39).padEnd(79) + "|");
  console.log("=".repeat(80));
  console.log("|总账户数: " + _0x334703.length + "超过金币上限账户: " + _0x212df4 + "总任务数: " + _0x9f7f0 + "任务成功率: " + _0x58a294.toFixed(1) + "%|");
  console.log("|总金币变化: " + _0x1270dd + "总金币奖励: " + _0xfb63a4 + "总余额变化: " + _0x382408.toFixed(2) + "|");
  console.log("-".repeat(80));
  const _0x56504c = ["序号", "账户名称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x5a7b24 = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0xfe1905 = "|";
  _0x56504c.forEach((_0x1e14ba, _0x1497da) => {
    const _0x268073 = _0x5a7b24[_0x1497da];
    _0xfe1905 += _0x1e14ba.padStart(Math.floor((_0x268073 + _0x1e14ba.length) / 2)).padEnd(_0x268073) + "|";
  });
  console.log(_0xfe1905);
  let _0x15acb6 = "|";
  _0x5a7b24.forEach(_0xf9e7bd => {
    _0x15acb6 += "-".repeat(_0xf9e7bd) + "|";
  });
  console.log(_0x15acb6);
  for (const _0x340be0 of _0x334703) {
    let _0x3fb354 = "|";
    _0x3fb354 += String(_0x340be0.index).padStart(3).padEnd(_0x5a7b24[0]) + "|";
    const _0x435433 = _0x340be0.nickname + (_0x340be0.coin_limit_exceeded ? " ⚠️" : "");
    _0x3fb354 += _0x435433.slice(0, _0x5a7b24[1] - 2).padEnd(_0x5a7b24[1]) + "|";
    _0x3fb354 += String(_0x340be0.initial_coin || 0).padEnd(_0x5a7b24[2]) + "|";
    _0x3fb354 += String(_0x340be0.final_coin || 0).padEnd(_0x5a7b24[3]) + "|";
    const _0x191b5e = _0x340be0.coin_change || 0,
      _0x572887 = (_0x191b5e >= 0 ? "+" : "") + _0x191b5e;
    _0x3fb354 += _0x572887.padEnd(_0x5a7b24[4]) + "|";
    _0x3fb354 += String(_0x340be0.initial_cash || 0).padEnd(_0x5a7b24[5]) + "|";
    _0x3fb354 += String(_0x340be0.final_cash || 0).padEnd(_0x5a7b24[6]) + "|";
    const _0x3e09a4 = _0x340be0.cash_change || 0,
      _0x31ee0a = (_0x3e09a4 >= 0 ? "+" : "") + _0x3e09a4.toFixed(2);
    _0x3fb354 += _0x31ee0a.padEnd(_0x5a7b24[7]) + "|";
    console.log(_0x3fb354);
  }
  console.log("=".repeat(80));
  console.log("|" + "任务执行流程完毕，请查看详细结果".padStart(39).padEnd(79) + "|");
  console.log("=".repeat(80));
}
async function _0x4e40e1() {
  if (_0x24714a && _0x24714a.trim() && _0x106d7e && _0x5d41b1) await _0x3e0904();else {
    if (!_0x24714a) {
      console.log("⚠️ 未设置卡密，跳过版本检查");
    } else {
      if (!(_0x106d7e && _0x5d41b1)) {
        console.log("⚠️ 卡密服务未配置完整，跳过版本检查");
      }
    }
  }
  await _0x198418();
  const _0x3e7db6 = _0x14007c(),
    _0x5cb13c = _0x3e7db6.length,
    _0x5e953c = await _0xfe5317("脚本启动");
  !_0x5e953c && (console.log("❌ 卡密验证失败，脚本终止运行"), process.exit(1));
  console.log("╔".padEnd(70, "═") + "╗");
  console.log("║" + "📢 购卡地址提示".padStart(35 + "📢 购卡地址提示".length / 2).padEnd(69) + "║");
  console.log("╠".padEnd(70, "═") + "╣");
  console.log("║  购卡地址: https://t.me/+U1IwSeGh-CA1Yjk1".padEnd(69) + "║");
  console.log("╚".padEnd(70, "═") + "╝");
  const _0x31cae3 = _0x3281d4(),
    _0x580a79 = {
      "box": "宝箱广告",
      "look": "看广告得金币",
      "box_extra": "饭补广告",
      "ss": "搜索广告"
    },
    _0x4e2f52 = _0x31cae3.map(_0x2f55b0 => _0x580a79[_0x2f55b0] || _0x2f55b0),
    _0x1c9885 = _0x11e2c5(),
    _0x25e2b8 = _0x288e56(),
    _0x5acf81 = _0x1579e2(),
    _0x5577ba = (process.env.KS_TASKS || "").trim(),
    _0x5e3b2a = parseInt(process.env.KS_CONCURRENCY || "5", 10) || 5,
    _0x15a90b = (process.env.KS_ROUND_TOTAL || "50").trim();
  let _0x32b424 = parseInt(_0x15a90b, 10);
  if (Number.isNaN(_0x32b424)) _0x32b424 = 50;
  const _0x45aecd = _0x31cae3.includes("look"),
    _0x196d33 = _0x31cae3.includes("ss");
  let _0xa7bd52 = null,
    _0x21c6b = null;
  _0x196d33 && (_0xa7bd52 = _0x4febd7(), _0x21c6b = _0xf1f175());
  console.log("".padEnd(80, "═"));
  console.log("📋 当前配置信息：");
  console.log("  账号数量: " + _0x5cb13c);
  console.log("  金币上限 (KS_COIN_LIMIT): " + _0x1c9885 + ((process.env.KS_COIN_LIMIT || "").trim() ? "" : " (默认)"));
  console.log("  轮次休息间隔 (KS_ROUND_REST_INTERVAL): " + _0x25e2b8 + " 轮" + ((process.env.KS_ROUND_REST_INTERVAL || "").trim() ? "" : " (默认)"));
  console.log("  执行任务 (KS_TASKS): " + (_0x4e2f52.join(", ") || "look"));
  console.log(_0x45aecd ? "  广告追加 (KS_AD_APPEND / ggzj): " + (_0x5acf81 ? "开启" : "关闭") : "  广告追加 (KS_AD_APPEND / ggzj): 未使用");
  _0x196d33 && (console.log("  搜索追加 (KS_SEARCH_APPEND / sszj): " + (_0xa7bd52 ? "开启" : "关闭")), console.log("  搜索广告次数 (KS_SEARCH_PER_ROUND / sscs): " + _0x21c6b + " 次/轮"));
  console.log("  并发上限 (KS_CONCURRENCY): " + _0x5e3b2a);
  console.log("  轮次上限 (KS_ROUND_TOTAL): " + _0x32b424);
  console.log("".padEnd(80, "═"));
  if (_0x5cb13c > _0x5e3b2a) {
    {
      console.log("错误: 检测到 " + _0x5cb13c + " 个账户配置，最大并发限制" + _0x5e3b2a + "个");
      return;
    }
  }
  if (!_0x3e7db6.length) {
    {
      console.log("未发现有效账户配置");
      return;
    }
  }
  console.log("\n防黑并发：" + _0x5e3b2a + "    防黑轮数：" + _0x32b424 + "\n");
  const _0x545c92 = await _0x3bc671(_0x3e7db6, _0x5e3b2a, _0x32b424),
    _0x397ccd = [];
  for (const _0x2f7ffc of _0x545c92) {
    if (_0x2f7ffc && _0x2f7ffc.isTaskResult) _0x397ccd.push(_0x2f7ffc);else _0x2f7ffc instanceof Error && console.log("任务执行过程异常: " + (_0x2f7ffc.message || _0x2f7ffc));
  }
  console.log("\n所有任务执行完毕。 ✅");
  console.log("\n" + "-".repeat(90) + " 账户信息汇总 " + "-".repeat(90));
  _0x4c2ff1(_0x397ccd);
}
_0x4e40e1().catch(_0x3a2fe9 => {
  console.log("主流程异常: " + (_0x3a2fe9.message || _0x3a2fe9));
});