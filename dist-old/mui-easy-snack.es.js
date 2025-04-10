var Co = Object.defineProperty;
var wo = (e, t, r) => t in e ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var mt = (e, t, r) => wo(e, typeof t != "symbol" ? t + "" : t, r);
import * as L from "react";
import ze, { createContext as Oo, useContext as In, forwardRef as ko, useState as Fr } from "react";
import ht from "react-dom";
const Mn = Oo({
  show: () => {
  }
}), $c = () => {
  const e = In(Mn);
  if (!e)
    throw new Error("useSnack must be used within SnackProvider");
  return e;
};
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gt = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Ao() {
  if (Vr) return Xe;
  Vr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Xe.Fragment = t, Xe.jsx = r, Xe.jsxs = r, Xe;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function $o() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === s ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case m:
          return "Fragment";
        case T:
          return "Profiler";
        case h:
          return "StrictMode";
        case b:
          return "Suspense";
        case M:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case E:
            return "Portal";
          case C:
            return (u.displayName || "Context") + ".Provider";
          case R:
            return (u._context.displayName || "Context") + ".Consumer";
          case w:
            var S = u.render;
            return u = u.displayName, u || (u = S.displayName || S.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case $:
            return S = u.displayName || null, S !== null ? S : e(u.type) || "Memo";
          case ee:
            S = u._payload, u = u._init;
            try {
              return e(u(S));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var A = S.error, _ = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return A.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          _
        ), t(u);
      }
    }
    function n(u) {
      if (u === m) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === ee)
        return "<...>";
      try {
        var S = e(u);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var u = O.A;
      return u === null ? null : u.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(u) {
      if (D.call(u, "key")) {
        var S = Object.getOwnPropertyDescriptor(u, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, S) {
      function A() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: A,
        configurable: !0
      });
    }
    function l() {
      var u = e(this.type);
      return Y[u] || (Y[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, S, A, _, N, j, B, V) {
      return A = j.ref, u = {
        $$typeof: x,
        type: u,
        key: S,
        props: j,
        _owner: N
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function p(u, S, A, _, N, j, B, V) {
      var I = S.children;
      if (I !== void 0)
        if (_)
          if (W(I)) {
            for (_ = 0; _ < I.length; _++)
              d(I[_]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(I);
      if (D.call(S, "key")) {
        I = e(u);
        var U = Object.keys(S).filter(function(fe) {
          return fe !== "key";
        });
        _ = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", ce[I + _] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          _,
          I,
          U,
          I
        ), ce[I + _] = !0);
      }
      if (I = null, A !== void 0 && (r(A), I = "" + A), a(S) && (r(S.key), I = "" + S.key), "key" in S) {
        A = {};
        for (var z in S)
          z !== "key" && (A[z] = S[z]);
      } else A = S;
      return I && c(
        A,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        I,
        j,
        N,
        o(),
        A,
        B,
        V
      );
    }
    function d(u) {
      typeof u == "object" && u !== null && u.$$typeof === x && u._store && (u._store.validated = 1);
    }
    var y = ze, x = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), C = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), s = Symbol.for("react.client.reference"), O = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, W = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      "react-stack-bottom-frame": function(u) {
        return u();
      }
    };
    var F, Y = {}, ne = y["react-stack-bottom-frame"].bind(
      y,
      i
    )(), se = q(n(i)), ce = {};
    Je.Fragment = m, Je.jsx = function(u, S, A, _, N) {
      var j = 1e4 > O.recentlyCreatedOwnerStacks++;
      return p(
        u,
        S,
        A,
        !1,
        _,
        N,
        j ? Error("react-stack-top-frame") : ne,
        j ? q(n(u)) : se
      );
    }, Je.jsxs = function(u, S, A, _, N) {
      var j = 1e4 > O.recentlyCreatedOwnerStacks++;
      return p(
        u,
        S,
        A,
        !0,
        _,
        N,
        j ? Error("react-stack-top-frame") : ne,
        j ? q(n(u)) : se
      );
    };
  }()), Je;
}
var Ur;
function _o() {
  return Ur || (Ur = 1, process.env.NODE_ENV === "production" ? gt.exports = Ao() : gt.exports = $o()), gt.exports;
}
var Ee = _o(), yt = { exports: {} }, bt = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Po() {
  if (zr) return X;
  zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function C(b) {
    if (typeof b == "object" && b !== null) {
      var M = b.$$typeof;
      switch (M) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case p:
                case E:
                case x:
                case a:
                  return b;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function w(b) {
    return C(b) === f;
  }
  return X.AsyncMode = l, X.ConcurrentMode = f, X.ContextConsumer = c, X.ContextProvider = a, X.Element = t, X.ForwardRef = p, X.Fragment = n, X.Lazy = E, X.Memo = x, X.Portal = r, X.Profiler = i, X.StrictMode = o, X.Suspense = d, X.isAsyncMode = function(b) {
    return w(b) || C(b) === l;
  }, X.isConcurrentMode = w, X.isContextConsumer = function(b) {
    return C(b) === c;
  }, X.isContextProvider = function(b) {
    return C(b) === a;
  }, X.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, X.isForwardRef = function(b) {
    return C(b) === p;
  }, X.isFragment = function(b) {
    return C(b) === n;
  }, X.isLazy = function(b) {
    return C(b) === E;
  }, X.isMemo = function(b) {
    return C(b) === x;
  }, X.isPortal = function(b) {
    return C(b) === r;
  }, X.isProfiler = function(b) {
    return C(b) === i;
  }, X.isStrictMode = function(b) {
    return C(b) === o;
  }, X.isSuspense = function(b) {
    return C(b) === d;
  }, X.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === d || b === y || typeof b == "object" && b !== null && (b.$$typeof === E || b.$$typeof === x || b.$$typeof === a || b.$$typeof === c || b.$$typeof === p || b.$$typeof === h || b.$$typeof === T || b.$$typeof === R || b.$$typeof === m);
  }, X.typeOf = C, X;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function No() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function C(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === i || k === o || k === d || k === y || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === x || k.$$typeof === a || k.$$typeof === c || k.$$typeof === p || k.$$typeof === h || k.$$typeof === T || k.$$typeof === R || k.$$typeof === m);
    }
    function w(k) {
      if (typeof k == "object" && k !== null) {
        var be = k.$$typeof;
        switch (be) {
          case t:
            var P = k.type;
            switch (P) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case d:
                return P;
              default:
                var De = P && P.$$typeof;
                switch (De) {
                  case c:
                  case p:
                  case E:
                  case x:
                  case a:
                    return De;
                  default:
                    return be;
                }
            }
          case r:
            return be;
        }
      }
    }
    var b = l, M = f, $ = c, ee = a, K = t, s = p, O = n, D = E, W = x, q = r, F = i, Y = o, ne = d, se = !1;
    function ce(k) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), u(k) || w(k) === l;
    }
    function u(k) {
      return w(k) === f;
    }
    function S(k) {
      return w(k) === c;
    }
    function A(k) {
      return w(k) === a;
    }
    function _(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function N(k) {
      return w(k) === p;
    }
    function j(k) {
      return w(k) === n;
    }
    function B(k) {
      return w(k) === E;
    }
    function V(k) {
      return w(k) === x;
    }
    function I(k) {
      return w(k) === r;
    }
    function U(k) {
      return w(k) === i;
    }
    function z(k) {
      return w(k) === o;
    }
    function fe(k) {
      return w(k) === d;
    }
    J.AsyncMode = b, J.ConcurrentMode = M, J.ContextConsumer = $, J.ContextProvider = ee, J.Element = K, J.ForwardRef = s, J.Fragment = O, J.Lazy = D, J.Memo = W, J.Portal = q, J.Profiler = F, J.StrictMode = Y, J.Suspense = ne, J.isAsyncMode = ce, J.isConcurrentMode = u, J.isContextConsumer = S, J.isContextProvider = A, J.isElement = _, J.isForwardRef = N, J.isFragment = j, J.isLazy = B, J.isMemo = V, J.isPortal = I, J.isProfiler = U, J.isStrictMode = z, J.isSuspense = fe, J.isValidElementType = C, J.typeOf = w;
  }()), J;
}
var Yr;
function Dn() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? bt.exports = Po() : bt.exports = No()), bt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Yt, Hr;
function Io() {
  if (Hr) return Yt;
  Hr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        f[p] = p;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yt = o() ? Object.assign : function(i, a) {
    for (var c, l = n(i), f, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var d in c)
        t.call(c, d) && (l[d] = c[d]);
      if (e) {
        f = e(c);
        for (var y = 0; y < f.length; y++)
          r.call(c, f[y]) && (l[f[y]] = c[f[y]]);
      }
    }
    return l;
  }, Yt;
}
var Ht, Gr;
function vr() {
  if (Gr) return Ht;
  Gr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ht = e, Ht;
}
var Gt, Kr;
function jn() {
  return Kr || (Kr = 1, Gt = Function.call.bind(Object.prototype.hasOwnProperty)), Gt;
}
var Kt, Xr;
function Mo() {
  if (Xr) return Kt;
  Xr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ vr(), r = {}, n = /* @__PURE__ */ jn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var d;
          try {
            if (typeof i[p] != "function") {
              var y = Error(
                (l || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            d = i[p](a, p, l, c, null, t);
          } catch (E) {
            d = E;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + c + " type: " + d.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Kt = o, Kt;
}
var Xt, Jr;
function Do() {
  if (Jr) return Xt;
  Jr = 1;
  var e = Dn(), t = Io(), r = /* @__PURE__ */ vr(), n = /* @__PURE__ */ jn(), o = /* @__PURE__ */ Mo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Xt = function(c, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function d(u) {
      var S = u && (f && u[f] || u[p]);
      if (typeof S == "function")
        return S;
    }
    var y = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: R(),
      arrayOf: C,
      element: w(),
      elementType: b(),
      instanceOf: M,
      node: s(),
      objectOf: ee,
      oneOf: $,
      oneOfType: K,
      shape: D,
      exact: W
    };
    function E(u, S) {
      return u === S ? u !== 0 || 1 / u === 1 / S : u !== u && S !== S;
    }
    function m(u, S) {
      this.message = u, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function h(u) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, A = 0;
      function _(j, B, V, I, U, z, fe) {
        if (I = I || y, z = z || V, fe !== r) {
          if (l) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = I + ":" + V;
            !S[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[be] = !0, A++);
          }
        }
        return B[V] == null ? j ? B[V] === null ? new m("The " + U + " `" + z + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new m("The " + U + " `" + z + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : u(B, V, I, U, z);
      }
      var N = _.bind(null, !1);
      return N.isRequired = _.bind(null, !0), N;
    }
    function T(u) {
      function S(A, _, N, j, B, V) {
        var I = A[_], U = Y(I);
        if (U !== u) {
          var z = ne(I);
          return new m(
            "Invalid " + j + " `" + B + "` of type " + ("`" + z + "` supplied to `" + N + "`, expected ") + ("`" + u + "`."),
            { expectedType: u }
          );
        }
        return null;
      }
      return h(S);
    }
    function R() {
      return h(a);
    }
    function C(u) {
      function S(A, _, N, j, B) {
        if (typeof u != "function")
          return new m("Property `" + B + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var V = A[_];
        if (!Array.isArray(V)) {
          var I = Y(V);
          return new m("Invalid " + j + " `" + B + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected an array."));
        }
        for (var U = 0; U < V.length; U++) {
          var z = u(V, U, N, j, B + "[" + U + "]", r);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return h(S);
    }
    function w() {
      function u(S, A, _, N, j) {
        var B = S[A];
        if (!c(B)) {
          var V = Y(B);
          return new m("Invalid " + N + " `" + j + "` of type " + ("`" + V + "` supplied to `" + _ + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(u);
    }
    function b() {
      function u(S, A, _, N, j) {
        var B = S[A];
        if (!e.isValidElementType(B)) {
          var V = Y(B);
          return new m("Invalid " + N + " `" + j + "` of type " + ("`" + V + "` supplied to `" + _ + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(u);
    }
    function M(u) {
      function S(A, _, N, j, B) {
        if (!(A[_] instanceof u)) {
          var V = u.name || y, I = ce(A[_]);
          return new m("Invalid " + j + " `" + B + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return h(S);
    }
    function $(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function S(A, _, N, j, B) {
        for (var V = A[_], I = 0; I < u.length; I++)
          if (E(V, u[I]))
            return null;
        var U = JSON.stringify(u, function(fe, k) {
          var be = ne(k);
          return be === "symbol" ? String(k) : k;
        });
        return new m("Invalid " + j + " `" + B + "` of value `" + String(V) + "` " + ("supplied to `" + N + "`, expected one of " + U + "."));
      }
      return h(S);
    }
    function ee(u) {
      function S(A, _, N, j, B) {
        if (typeof u != "function")
          return new m("Property `" + B + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var V = A[_], I = Y(V);
        if (I !== "object")
          return new m("Invalid " + j + " `" + B + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected an object."));
        for (var U in V)
          if (n(V, U)) {
            var z = u(V, U, N, j, B + "." + U, r);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return h(S);
    }
    function K(u) {
      if (!Array.isArray(u))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var S = 0; S < u.length; S++) {
        var A = u[S];
        if (typeof A != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(A) + " at index " + S + "."
          ), a;
      }
      function _(N, j, B, V, I) {
        for (var U = [], z = 0; z < u.length; z++) {
          var fe = u[z], k = fe(N, j, B, V, I, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && U.push(k.data.expectedType);
        }
        var be = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new m("Invalid " + V + " `" + I + "` supplied to " + ("`" + B + "`" + be + "."));
      }
      return h(_);
    }
    function s() {
      function u(S, A, _, N, j) {
        return q(S[A]) ? null : new m("Invalid " + N + " `" + j + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
      }
      return h(u);
    }
    function O(u, S, A, _, N) {
      return new m(
        (u || "React class") + ": " + S + " type `" + A + "." + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function D(u) {
      function S(A, _, N, j, B) {
        var V = A[_], I = Y(V);
        if (I !== "object")
          return new m("Invalid " + j + " `" + B + "` of type `" + I + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var U in u) {
          var z = u[U];
          if (typeof z != "function")
            return O(N, j, B, U, ne(z));
          var fe = z(V, U, N, j, B + "." + U, r);
          if (fe)
            return fe;
        }
        return null;
      }
      return h(S);
    }
    function W(u) {
      function S(A, _, N, j, B) {
        var V = A[_], I = Y(V);
        if (I !== "object")
          return new m("Invalid " + j + " `" + B + "` of type `" + I + "` " + ("supplied to `" + N + "`, expected `object`."));
        var U = t({}, A[_], u);
        for (var z in U) {
          var fe = u[z];
          if (n(u, z) && typeof fe != "function")
            return O(N, j, B, z, ne(fe));
          if (!fe)
            return new m(
              "Invalid " + j + " `" + B + "` key `" + z + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(A[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(u), null, "  ")
            );
          var k = fe(V, z, N, j, B + "." + z, r);
          if (k)
            return k;
        }
        return null;
      }
      return h(S);
    }
    function q(u) {
      switch (typeof u) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !u;
        case "object":
          if (Array.isArray(u))
            return u.every(q);
          if (u === null || c(u))
            return !0;
          var S = d(u);
          if (S) {
            var A = S.call(u), _;
            if (S !== u.entries) {
              for (; !(_ = A.next()).done; )
                if (!q(_.value))
                  return !1;
            } else
              for (; !(_ = A.next()).done; ) {
                var N = _.value;
                if (N && !q(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function F(u, S) {
      return u === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function Y(u) {
      var S = typeof u;
      return Array.isArray(u) ? "array" : u instanceof RegExp ? "object" : F(S, u) ? "symbol" : S;
    }
    function ne(u) {
      if (typeof u > "u" || u === null)
        return "" + u;
      var S = Y(u);
      if (S === "object") {
        if (u instanceof Date)
          return "date";
        if (u instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function se(u) {
      var S = ne(u);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function ce(u) {
      return !u.constructor || !u.constructor.name ? y : u.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Xt;
}
var Jt, Qr;
function jo() {
  if (Qr) return Jt;
  Qr = 1;
  var e = /* @__PURE__ */ vr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jt = function() {
    function n(a, c, l, f, p, d) {
      if (d !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Jt;
}
var Zr;
function Lo() {
  if (Zr) return yt.exports;
  if (Zr = 1, process.env.NODE_ENV !== "production") {
    var e = Dn(), t = !0;
    yt.exports = /* @__PURE__ */ Do()(e.isElement, t);
  } else
    yt.exports = /* @__PURE__ */ jo()();
  return yt.exports;
}
var Bo = /* @__PURE__ */ Lo();
const g = /* @__PURE__ */ Ro(Bo);
function Er(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (a += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
function Fo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Sr(...e) {
  return L.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Fo(r, t);
    });
  }, e);
}
function Vo(e) {
  return typeof e == "string";
}
function Wo(e, t, r) {
  return e === void 0 || Vo(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function Ln(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ln(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function kt() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ln(e)) && (n && (n += " "), n += t);
  return n;
}
function or(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function en(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Uo(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const x = kt(r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), E = {
      ...r == null ? void 0 : r.style,
      ...o == null ? void 0 : o.style,
      ...n == null ? void 0 : n.style
    }, m = {
      ...r,
      ...o,
      ...n
    };
    return x.length > 0 && (m.className = x), Object.keys(E).length > 0 && (m.style = E), {
      props: m,
      internalRef: void 0
    };
  }
  const a = or({
    ...o,
    ...n
  }), c = en(n), l = en(o), f = t(a), p = kt(f == null ? void 0 : f.className, r == null ? void 0 : r.className, i, o == null ? void 0 : o.className, n == null ? void 0 : n.className), d = {
    ...f == null ? void 0 : f.style,
    ...r == null ? void 0 : r.style,
    ...o == null ? void 0 : o.style,
    ...n == null ? void 0 : n.style
  }, y = {
    ...f,
    ...r,
    ...l,
    ...c
  };
  return p.length > 0 && (y.className = p), Object.keys(d).length > 0 && (y.style = d), {
    props: y,
    internalRef: f.ref
  };
}
function zo(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function qo(e) {
  var d;
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, a = o ? {} : zo(r, n), {
    props: c,
    internalRef: l
  } = Uo({
    ...i,
    externalSlotProps: a
  }), f = Sr(l, a == null ? void 0 : a.ref, (d = e.additionalProps) == null ? void 0 : d.ref);
  return Wo(t, {
    ...c,
    ref: f
  }, n);
}
function Tr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function ke(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Bn(e) {
  if (/* @__PURE__ */ L.isValidElement(e) || !ke(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Bn(e[r]);
  }), t;
}
function ge(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return ke(e) && ke(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ L.isValidElement(t[o]) ? n[o] = t[o] : ke(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ke(e[o]) ? n[o] = ge(e[o], t[o], r) : r.clone ? n[o] = ke(t[o]) ? Bn(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Yo(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Fn(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = i.type;
  return typeof l == "function" && !Yo(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const xr = Tr(g.element, Fn);
xr.isRequired = Tr(g.element.isRequired, Fn);
const Ho = "exact-prop: ​";
function Go(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Ho]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function $e(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
var vt = { exports: {} }, Q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function Ko() {
  if (tn) return Q;
  tn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case f:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case l:
                case y:
                case d:
                case i:
                  return h;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return Q.ContextConsumer = a, Q.ContextProvider = i, Q.Element = e, Q.ForwardRef = l, Q.Fragment = r, Q.Lazy = y, Q.Memo = d, Q.Portal = t, Q.Profiler = o, Q.StrictMode = n, Q.Suspense = f, Q.SuspenseList = p, Q.isAsyncMode = function() {
    return !1;
  }, Q.isConcurrentMode = function() {
    return !1;
  }, Q.isContextConsumer = function(h) {
    return m(h) === a;
  }, Q.isContextProvider = function(h) {
    return m(h) === i;
  }, Q.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Q.isForwardRef = function(h) {
    return m(h) === l;
  }, Q.isFragment = function(h) {
    return m(h) === r;
  }, Q.isLazy = function(h) {
    return m(h) === y;
  }, Q.isMemo = function(h) {
    return m(h) === d;
  }, Q.isPortal = function(h) {
    return m(h) === t;
  }, Q.isProfiler = function(h) {
    return m(h) === o;
  }, Q.isStrictMode = function(h) {
    return m(h) === n;
  }, Q.isSuspense = function(h) {
    return m(h) === f;
  }, Q.isSuspenseList = function(h) {
    return m(h) === p;
  }, Q.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === f || h === p || h === x || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === d || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === E || h.getModuleId !== void 0);
  }, Q.typeOf = m, Q;
}
var Z = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function Xo() {
  return rn || (rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), E = !1, m = !1, h = !1, T = !1, R = !1, C;
    C = Symbol.for("react.module.reference");
    function w(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === r || P === o || R || P === n || P === f || P === p || T || P === x || E || m || h || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === d || P.$$typeof === i || P.$$typeof === a || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === C || P.getModuleId !== void 0));
    }
    function b(P) {
      if (typeof P == "object" && P !== null) {
        var De = P.$$typeof;
        switch (De) {
          case e:
            var pt = P.type;
            switch (pt) {
              case r:
              case o:
              case n:
              case f:
              case p:
                return pt;
              default:
                var Br = pt && pt.$$typeof;
                switch (Br) {
                  case c:
                  case a:
                  case l:
                  case y:
                  case d:
                  case i:
                    return Br;
                  default:
                    return De;
                }
            }
          case t:
            return De;
        }
      }
    }
    var M = a, $ = i, ee = e, K = l, s = r, O = y, D = d, W = t, q = o, F = n, Y = f, ne = p, se = !1, ce = !1;
    function u(P) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function S(P) {
      return ce || (ce = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function A(P) {
      return b(P) === a;
    }
    function _(P) {
      return b(P) === i;
    }
    function N(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function j(P) {
      return b(P) === l;
    }
    function B(P) {
      return b(P) === r;
    }
    function V(P) {
      return b(P) === y;
    }
    function I(P) {
      return b(P) === d;
    }
    function U(P) {
      return b(P) === t;
    }
    function z(P) {
      return b(P) === o;
    }
    function fe(P) {
      return b(P) === n;
    }
    function k(P) {
      return b(P) === f;
    }
    function be(P) {
      return b(P) === p;
    }
    Z.ContextConsumer = M, Z.ContextProvider = $, Z.Element = ee, Z.ForwardRef = K, Z.Fragment = s, Z.Lazy = O, Z.Memo = D, Z.Portal = W, Z.Profiler = q, Z.StrictMode = F, Z.Suspense = Y, Z.SuspenseList = ne, Z.isAsyncMode = u, Z.isConcurrentMode = S, Z.isContextConsumer = A, Z.isContextProvider = _, Z.isElement = N, Z.isForwardRef = j, Z.isFragment = B, Z.isLazy = V, Z.isMemo = I, Z.isPortal = U, Z.isProfiler = z, Z.isStrictMode = fe, Z.isSuspense = k, Z.isSuspenseList = be, Z.isValidElementType = w, Z.typeOf = b;
  }()), Z;
}
var nn;
function Jo() {
  return nn || (nn = 1, process.env.NODE_ENV === "production" ? vt.exports = Ko() : vt.exports = Xo()), vt.exports;
}
var on = Jo();
function Vn(e, t = "") {
  return e.displayName || e.name || t;
}
function an(e, t, r) {
  const n = Vn(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Qo(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Vn(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case on.ForwardRef:
          return an(e, e.render, "ForwardRef");
        case on.Memo:
          return an(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : $e(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Qt(e) {
  return e && e.ownerDocument || document;
}
const Zo = typeof window < "u" ? L.useLayoutEffect : L.useEffect;
function ir(e) {
  const t = L.useRef(e);
  return Zo(() => {
    t.current = e;
  }), L.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
const sn = {};
function ei(e, t) {
  const r = L.useRef(sn);
  return r.current === sn && (r.current = e(t)), r;
}
const ti = [];
function ri(e) {
  L.useEffect(e, ti);
}
class Cr {
  constructor() {
    mt(this, "currentId", null);
    mt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    mt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Cr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Wn() {
  const e = ei(Cr.create).current;
  return ri(e.disposeEffect), e;
}
function ni(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Un(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = ni(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function zn(e, t, ...r) {
  return e[t] === void 0 ? null : Un(e, t, ...r);
}
function ar() {
  return null;
}
zn.isRequired = Un;
ar.isRequired = ar;
const oi = process.env.NODE_ENV === "production" ? ar : zn;
function sr(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const l = c;
              r[o][l] = sr(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
const cn = (e) => e, ii = () => {
  let e = cn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = cn;
    }
  };
}, ai = ii(), si = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ct(e, t, r = "Mui") {
  const n = si[t];
  return n ? `${r}-${n}` : `${ai.generate(e)}-${t}`;
}
function wr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = ct(e, o, r);
  }), n;
}
function ci(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function qn(e) {
  var t;
  return parseInt(L.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function ui(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: r = !1,
    onClose: n,
    open: o,
    resumeHideDuration: i
  } = e, a = Wn();
  L.useEffect(() => {
    if (!o)
      return;
    function T(R) {
      R.defaultPrevented || R.key === "Escape" && (n == null || n(R, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", T), () => {
      document.removeEventListener("keydown", T);
    };
  }, [o, n]);
  const c = ir((T, R) => {
    n == null || n(T, R);
  }), l = ir((T) => {
    !n || T == null || a.start(T, () => {
      c(null, "timeout");
    });
  });
  L.useEffect(() => (o && l(t), a.clear), [o, t, l, a]);
  const f = (T) => {
    n == null || n(T, "clickaway");
  }, p = a.clear, d = L.useCallback(() => {
    t != null && l(i ?? t * 0.5);
  }, [t, i, l]), y = (T) => (R) => {
    const C = T.onBlur;
    C == null || C(R), d();
  }, x = (T) => (R) => {
    const C = T.onFocus;
    C == null || C(R), p();
  }, E = (T) => (R) => {
    const C = T.onMouseEnter;
    C == null || C(R), p();
  }, m = (T) => (R) => {
    const C = T.onMouseLeave;
    C == null || C(R), d();
  };
  return L.useEffect(() => {
    if (!r && o)
      return window.addEventListener("focus", d), window.addEventListener("blur", p), () => {
        window.removeEventListener("focus", d), window.removeEventListener("blur", p);
      };
  }, [r, o, d, p]), {
    getRootProps: (T = {}) => {
      const R = {
        ...or(e),
        ...or(T)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...T,
        ...R,
        onBlur: y(R),
        onFocus: x(R),
        onMouseEnter: E(R),
        onMouseLeave: m(R)
      };
    },
    onClickAway: f
  };
}
function un(e) {
  return e.substring(2).toLowerCase();
}
function li(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function Rt(e) {
  const {
    children: t,
    disableReactTree: r = !1,
    mouseEvent: n = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, a = L.useRef(!1), c = L.useRef(null), l = L.useRef(!1), f = L.useRef(!1);
  L.useEffect(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const p = Sr(qn(t), c), d = ir((E) => {
    const m = f.current;
    f.current = !1;
    const h = Qt(c.current);
    if (!l.current || !c.current || "clientX" in E && li(E, h))
      return;
    if (a.current) {
      a.current = !1;
      return;
    }
    let T;
    E.composedPath ? T = E.composedPath().includes(c.current) : T = !h.documentElement.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      E.target
    ) || c.current.contains(
      // @ts-expect-error returns `false` as intended when not dispatched from a Node
      E.target
    ), !T && (r || !m) && o(E);
  }), y = (E) => (m) => {
    f.current = !0;
    const h = t.props[E];
    h && h(m);
  }, x = {
    ref: p
  };
  return i !== !1 && (x[i] = y(i)), L.useEffect(() => {
    if (i !== !1) {
      const E = un(i), m = Qt(c.current), h = () => {
        a.current = !0;
      };
      return m.addEventListener(E, d), m.addEventListener("touchmove", h), () => {
        m.removeEventListener(E, d), m.removeEventListener("touchmove", h);
      };
    }
  }, [d, i]), n !== !1 && (x[n] = y(n)), L.useEffect(() => {
    if (n !== !1) {
      const E = un(n), m = Qt(c.current);
      return m.addEventListener(E, d), () => {
        m.removeEventListener(E, d);
      };
    }
  }, [d, n]), /* @__PURE__ */ Ee.jsx(L.Fragment, {
    children: /* @__PURE__ */ L.cloneElement(t, x)
  });
}
process.env.NODE_ENV !== "production" && (Rt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: xr.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: g.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: g.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", !1]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: g.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: g.oneOf(["onTouchEnd", "onTouchStart", !1])
});
process.env.NODE_ENV !== "production" && (Rt.propTypes = Go(Rt.propTypes));
function nt(e, t) {
  return t ? ge(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Pe = process.env.NODE_ENV !== "production" ? g.oneOfType([g.number, g.string, g.object, g.array]) : {};
function fi(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function di(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function pi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : $e(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function mi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Pt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ln = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Pt[e]}px)`
}, hi = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Pt[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Re(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || ln;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || ln;
    return Object.keys(t).reduce((a, c) => {
      if (di(i.keys, c)) {
        const l = pi(n.containerQueries ? n : hi, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(i.values || Pt).includes(c)) {
        const l = i.up(c);
        a[l] = r(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function gi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function yi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Nt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function At(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Nt(e, r) || n, t && (o = t(o, n, e)), o;
}
function ue(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, f = Nt(l, n) || {};
    return Re(a, c, (d) => {
      let y = At(f, o, d);
      return d === y && typeof d == "string" && (y = At(f, o, `${t}${d === "default" ? "" : Me(d)}`, d)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Pe
  } : {}, i.filterProps = [t], i;
}
function bi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const vi = {
  m: "margin",
  p: "padding"
}, Ei = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, fn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Si = bi((e) => {
  if (e.length > 2)
    if (fn[e])
      e = fn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = vi[t], o = Ei[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), It = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Mt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ti = [...It, ...Mt];
function ut(e, t, r, n) {
  const o = Nt(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Or(e) {
  return ut(e, "spacing", 8, "spacing");
}
function lt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function xi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = lt(t, r), n), {});
}
function Ci(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Si(r), i = xi(o, n), a = e[r];
  return Re(e, a, i);
}
function Yn(e, t) {
  const r = Or(e.theme);
  return Object.keys(e).map((n) => Ci(e, t, n, r)).reduce(nt, {});
}
function ie(e) {
  return Yn(e, It);
}
ie.propTypes = process.env.NODE_ENV !== "production" ? It.reduce((e, t) => (e[t] = Pe, e), {}) : {};
ie.filterProps = It;
function ae(e) {
  return Yn(e, Mt);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Mt.reduce((e, t) => (e[t] = Pe, e), {}) : {};
ae.filterProps = Mt;
process.env.NODE_ENV !== "production" && Ti.reduce((e, t) => (e[t] = Pe, e), {});
function Dt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? nt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ve(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Se(e, t) {
  return ue({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const wi = Se("border", ve), Oi = Se("borderTop", ve), ki = Se("borderRight", ve), Ri = Se("borderBottom", ve), Ai = Se("borderLeft", ve), $i = Se("borderColor"), _i = Se("borderTopColor"), Pi = Se("borderRightColor"), Ni = Se("borderBottomColor"), Ii = Se("borderLeftColor"), Mi = Se("outline", ve), Di = Se("outlineColor"), jt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ut(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: lt(t, n)
    });
    return Re(e, e.borderRadius, r);
  }
  return null;
};
jt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Pe
} : {};
jt.filterProps = ["borderRadius"];
Dt(wi, Oi, ki, Ri, Ai, $i, _i, Pi, Ni, Ii, jt, Mi, Di);
const Lt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ut(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: lt(t, n)
    });
    return Re(e, e.gap, r);
  }
  return null;
};
Lt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Pe
} : {};
Lt.filterProps = ["gap"];
const Bt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ut(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: lt(t, n)
    });
    return Re(e, e.columnGap, r);
  }
  return null;
};
Bt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Pe
} : {};
Bt.filterProps = ["columnGap"];
const Ft = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ut(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: lt(t, n)
    });
    return Re(e, e.rowGap, r);
  }
  return null;
};
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Pe
} : {};
Ft.filterProps = ["rowGap"];
const ji = ue({
  prop: "gridColumn"
}), Li = ue({
  prop: "gridRow"
}), Bi = ue({
  prop: "gridAutoFlow"
}), Fi = ue({
  prop: "gridAutoColumns"
}), Vi = ue({
  prop: "gridAutoRows"
}), Wi = ue({
  prop: "gridTemplateColumns"
}), Ui = ue({
  prop: "gridTemplateRows"
}), zi = ue({
  prop: "gridTemplateAreas"
}), qi = ue({
  prop: "gridArea"
});
Dt(Lt, Bt, Ft, ji, Li, Bi, Fi, Vi, Wi, Ui, zi, qi);
function qe(e, t) {
  return t === "grey" ? t : e;
}
const Yi = ue({
  prop: "color",
  themeKey: "palette",
  transform: qe
}), Hi = ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qe
}), Gi = ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qe
});
Dt(Yi, Hi, Gi);
function he(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ki = ue({
  prop: "width",
  transform: he
}), kr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Pt[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: he(r)
      };
    };
    return Re(e, e.maxWidth, t);
  }
  return null;
};
kr.filterProps = ["maxWidth"];
const Xi = ue({
  prop: "minWidth",
  transform: he
}), Ji = ue({
  prop: "height",
  transform: he
}), Qi = ue({
  prop: "maxHeight",
  transform: he
}), Zi = ue({
  prop: "minHeight",
  transform: he
});
ue({
  prop: "size",
  cssProperty: "width",
  transform: he
});
ue({
  prop: "size",
  cssProperty: "height",
  transform: he
});
const ea = ue({
  prop: "boxSizing"
});
Dt(Ki, kr, Xi, Ji, Qi, Zi, ea);
const Vt = {
  // borders
  border: {
    themeKey: "borders",
    transform: ve
  },
  borderTop: {
    themeKey: "borders",
    transform: ve
  },
  borderRight: {
    themeKey: "borders",
    transform: ve
  },
  borderBottom: {
    themeKey: "borders",
    transform: ve
  },
  borderLeft: {
    themeKey: "borders",
    transform: ve
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ve
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: jt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qe
  },
  // spacing
  p: {
    style: ae
  },
  pt: {
    style: ae
  },
  pr: {
    style: ae
  },
  pb: {
    style: ae
  },
  pl: {
    style: ae
  },
  px: {
    style: ae
  },
  py: {
    style: ae
  },
  padding: {
    style: ae
  },
  paddingTop: {
    style: ae
  },
  paddingRight: {
    style: ae
  },
  paddingBottom: {
    style: ae
  },
  paddingLeft: {
    style: ae
  },
  paddingX: {
    style: ae
  },
  paddingY: {
    style: ae
  },
  paddingInline: {
    style: ae
  },
  paddingInlineStart: {
    style: ae
  },
  paddingInlineEnd: {
    style: ae
  },
  paddingBlock: {
    style: ae
  },
  paddingBlockStart: {
    style: ae
  },
  paddingBlockEnd: {
    style: ae
  },
  m: {
    style: ie
  },
  mt: {
    style: ie
  },
  mr: {
    style: ie
  },
  mb: {
    style: ie
  },
  ml: {
    style: ie
  },
  mx: {
    style: ie
  },
  my: {
    style: ie
  },
  margin: {
    style: ie
  },
  marginTop: {
    style: ie
  },
  marginRight: {
    style: ie
  },
  marginBottom: {
    style: ie
  },
  marginLeft: {
    style: ie
  },
  marginX: {
    style: ie
  },
  marginY: {
    style: ie
  },
  marginInline: {
    style: ie
  },
  marginInlineStart: {
    style: ie
  },
  marginInlineEnd: {
    style: ie
  },
  marginBlock: {
    style: ie
  },
  marginBlockStart: {
    style: ie
  },
  marginBlockEnd: {
    style: ie
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Lt
  },
  rowGap: {
    style: Ft
  },
  columnGap: {
    style: Bt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: he
  },
  maxWidth: {
    style: kr
  },
  minWidth: {
    transform: he
  },
  height: {
    transform: he
  },
  maxHeight: {
    transform: he
  },
  minHeight: {
    transform: he
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ta(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ra(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function na() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: f,
      transform: p,
      style: d
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = Nt(o, f) || {};
    return d ? d(a) : Re(a, n, (E) => {
      let m = At(y, p, E);
      return E === m && typeof E == "string" && (m = At(y, p, `${r}${E === "default" ? "" : Me(E)}`, E)), l === !1 ? m : {
        [l]: m
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? Vt;
    function a(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const f = gi(o.breakpoints), p = Object.keys(f);
      let d = f;
      return Object.keys(l).forEach((y) => {
        const x = ra(l[y], o);
        if (x != null)
          if (typeof x == "object")
            if (i[y])
              d = nt(d, e(y, x, o, i));
            else {
              const E = Re({
                theme: o
              }, x, (m) => ({
                [y]: m
              }));
              ta(E, x) ? d[y] = t({
                sx: x,
                theme: o
              }) : d = nt(d, E);
            }
          else
            d = nt(d, e(y, x, o, i));
      }), fi(o, yi(p, d));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const He = na();
He.filterProps = ["sx"];
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cr.apply(null, arguments);
}
function Hn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var oa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ia = /* @__PURE__ */ Hn(
  function(e) {
    return oa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), aa = !1;
function sa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ca(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ua = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !aa : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ca(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = sa(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), pe = "-ms-", $t = "-moz-", H = "-webkit-", Gn = "comm", Rr = "rule", Ar = "decl", la = "@import", Kn = "@keyframes", fa = "@layer", da = Math.abs, Wt = String.fromCharCode, pa = Object.assign;
function ma(e, t) {
  return de(e, 0) ^ 45 ? (((t << 2 ^ de(e, 0)) << 2 ^ de(e, 1)) << 2 ^ de(e, 2)) << 2 ^ de(e, 3) : 0;
}
function Xn(e) {
  return e.trim();
}
function ha(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function G(e, t, r) {
  return e.replace(t, r);
}
function ur(e, t) {
  return e.indexOf(t);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function ot(e, t, r) {
  return e.slice(t, r);
}
function xe(e) {
  return e.length;
}
function $r(e) {
  return e.length;
}
function Et(e, t) {
  return t.push(e), e;
}
function ga(e, t) {
  return e.map(t).join("");
}
var Ut = 1, Ge = 1, Jn = 0, me = 0, le = 0, Ke = "";
function zt(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ut, column: Ge, length: a, return: "" };
}
function Qe(e, t) {
  return pa(zt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ya() {
  return le;
}
function ba() {
  return le = me > 0 ? de(Ke, --me) : 0, Ge--, le === 10 && (Ge = 1, Ut--), le;
}
function ye() {
  return le = me < Jn ? de(Ke, me++) : 0, Ge++, le === 10 && (Ge = 1, Ut++), le;
}
function we() {
  return de(Ke, me);
}
function xt() {
  return me;
}
function ft(e, t) {
  return ot(Ke, e, t);
}
function it(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qn(e) {
  return Ut = Ge = 1, Jn = xe(Ke = e), me = 0, [];
}
function Zn(e) {
  return Ke = "", e;
}
function Ct(e) {
  return Xn(ft(me - 1, lr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function va(e) {
  for (; (le = we()) && le < 33; )
    ye();
  return it(e) > 2 || it(le) > 3 ? "" : " ";
}
function Ea(e, t) {
  for (; --t && ye() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return ft(e, xt() + (t < 6 && we() == 32 && ye() == 32));
}
function lr(e) {
  for (; ye(); )
    switch (le) {
      // ] ) " '
      case e:
        return me;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && lr(le);
        break;
      // (
      case 40:
        e === 41 && lr(e);
        break;
      // \
      case 92:
        ye();
        break;
    }
  return me;
}
function Sa(e, t) {
  for (; ye() && e + le !== 57; )
    if (e + le === 84 && we() === 47)
      break;
  return "/*" + ft(t, me - 1) + "*" + Wt(e === 47 ? e : ye());
}
function Ta(e) {
  for (; !it(we()); )
    ye();
  return ft(e, me);
}
function xa(e) {
  return Zn(wt("", null, null, null, [""], e = Qn(e), 0, [0], e));
}
function wt(e, t, r, n, o, i, a, c, l) {
  for (var f = 0, p = 0, d = a, y = 0, x = 0, E = 0, m = 1, h = 1, T = 1, R = 0, C = "", w = o, b = i, M = n, $ = C; h; )
    switch (E = R, R = ye()) {
      // (
      case 40:
        if (E != 108 && de($, d - 1) == 58) {
          ur($ += G(Ct(R), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        $ += Ct(R);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        $ += va(E);
        break;
      // \
      case 92:
        $ += Ea(xt() - 1, 7);
        continue;
      // /
      case 47:
        switch (we()) {
          case 42:
          case 47:
            Et(Ca(Sa(ye(), xt()), t, r), l);
            break;
          default:
            $ += "/";
        }
        break;
      // {
      case 123 * m:
        c[f++] = xe($) * T;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (R) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + p:
            T == -1 && ($ = G($, /\f/g, "")), x > 0 && xe($) - d && Et(x > 32 ? pn($ + ";", n, r, d - 1) : pn(G($, " ", "") + ";", n, r, d - 2), l);
            break;
          // @ ;
          case 59:
            $ += ";";
          // { rule/at-rule
          default:
            if (Et(M = dn($, t, r, f, p, o, c, C, w = [], b = [], d), i), R === 123)
              if (p === 0)
                wt($, t, M, M, w, i, d, c, b);
              else
                switch (y === 99 && de($, 3) === 110 ? 100 : y) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    wt(e, M, M, n && Et(dn(e, M, M, 0, 0, o, c, C, o, w = [], d), b), o, b, d, c, n ? w : b);
                    break;
                  default:
                    wt($, M, M, M, [""], b, 0, c, b);
                }
        }
        f = p = x = 0, m = T = 1, C = $ = "", d = a;
        break;
      // :
      case 58:
        d = 1 + xe($), x = E;
      default:
        if (m < 1) {
          if (R == 123)
            --m;
          else if (R == 125 && m++ == 0 && ba() == 125)
            continue;
        }
        switch ($ += Wt(R), R * m) {
          // &
          case 38:
            T = p > 0 ? 1 : ($ += "\f", -1);
            break;
          // ,
          case 44:
            c[f++] = (xe($) - 1) * T, T = 1;
            break;
          // @
          case 64:
            we() === 45 && ($ += Ct(ye())), y = we(), p = d = xe(C = $ += Ta(xt())), R++;
            break;
          // -
          case 45:
            E === 45 && xe($) == 2 && (m = 0);
        }
    }
  return i;
}
function dn(e, t, r, n, o, i, a, c, l, f, p) {
  for (var d = o - 1, y = o === 0 ? i : [""], x = $r(y), E = 0, m = 0, h = 0; E < n; ++E)
    for (var T = 0, R = ot(e, d + 1, d = da(m = a[E])), C = e; T < x; ++T)
      (C = Xn(m > 0 ? y[T] + " " + R : G(R, /&\f/g, y[T]))) && (l[h++] = C);
  return zt(e, t, r, o === 0 ? Rr : c, l, f, p);
}
function Ca(e, t, r) {
  return zt(e, t, r, Gn, Wt(ya()), ot(e, 2, -2), 0);
}
function pn(e, t, r, n) {
  return zt(e, t, r, Ar, ot(e, 0, n), ot(e, n + 1, -1), n);
}
function Ye(e, t) {
  for (var r = "", n = $r(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function wa(e, t, r, n) {
  switch (e.type) {
    case fa:
      if (e.children.length) break;
    case la:
    case Ar:
      return e.return = e.return || e.value;
    case Gn:
      return "";
    case Kn:
      return e.return = e.value + "{" + Ye(e.children, n) + "}";
    case Rr:
      e.value = e.props.join(",");
  }
  return xe(r = Ye(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Oa(e) {
  var t = $r(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function ka(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ra = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = we(), o === 38 && i === 12 && (r[n] = 1), !it(i); )
    ye();
  return ft(t, me);
}, Aa = function(t, r) {
  var n = -1, o = 44;
  do
    switch (it(o)) {
      case 0:
        o === 38 && we() === 12 && (r[n] = 1), t[n] += Ra(me - 1, r, n);
        break;
      case 2:
        t[n] += Ct(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = we() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Wt(o);
    }
  while (o = ye());
  return t;
}, $a = function(t, r) {
  return Zn(Aa(Qn(t), r));
}, mn = /* @__PURE__ */ new WeakMap(), _a = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !mn.get(n)) && !o) {
      mn.set(t, !0);
      for (var i = [], a = $a(r, i), c = n.props, l = 0, f = 0; l < a.length; l++)
        for (var p = 0; p < c.length; p++, f++)
          t.props[f] = i[l] ? a[l].replace(/&\f/g, c[p]) : c[p] + " " + a[l];
    }
  }
}, Pa = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function eo(e, t) {
  switch (ma(e, t)) {
    // color-adjust
    case 5103:
      return H + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + $t + e + pe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return H + e + pe + e + e;
    // order
    case 6165:
      return H + e + pe + "flex-" + e + e;
    // align-items
    case 5187:
      return H + e + G(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + pe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return H + e + pe + "flex-item-" + G(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return H + e + pe + "flex-line-pack" + G(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return H + e + pe + G(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return H + e + pe + G(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return H + "box-" + G(e, "-grow", "") + H + e + pe + G(e, "grow", "positive") + e;
    // transition
    case 4554:
      return H + G(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    // cursor
    case 6187:
      return G(G(G(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return G(e, /(image-set\([^]*)/, H + "$1$`$1");
    // justify-content
    case 4968:
      return G(G(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return G(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xe(e) - 1 - t > 6) switch (de(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (de(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return G(e, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + $t + (de(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~ur(e, "stretch") ? eo(G(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (de(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (de(e, xe(e) - 3 - (~ur(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return G(e, ":", ":" + H) + e;
        // (inline-)?fl(e)x
        case 101:
          return G(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + H + (de(e, 14) === 45 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + pe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (de(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return H + e + pe + G(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return H + e + pe + G(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return H + e + pe + G(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return H + e + pe + e + e;
  }
  return e;
}
var Na = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ar:
      t.return = eo(t.value, t.length);
      break;
    case Kn:
      return Ye([Qe(t, {
        value: G(t.value, "@", "@" + H)
      })], o);
    case Rr:
      if (t.length) return ga(t.props, function(i) {
        switch (ha(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ye([Qe(t, {
              props: [G(i, /:(read-\w+)/, ":" + $t + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Ye([Qe(t, {
              props: [G(i, /:(plac\w+)/, ":" + H + "input-$1")]
            }), Qe(t, {
              props: [G(i, /:(plac\w+)/, ":" + $t + "$1")]
            }), Qe(t, {
              props: [G(i, /:(plac\w+)/, pe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ia = [Na], Ma = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var h = m.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ia, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var h = m.getAttribute("data-emotion").split(" "), T = 1; T < h.length; T++)
        i[h[T]] = !0;
      c.push(m);
    }
  );
  var l, f = [_a, Pa];
  {
    var p, d = [wa, ka(function(m) {
      p.insert(m);
    })], y = Oa(f.concat(o, d)), x = function(h) {
      return Ye(xa(h), y);
    };
    l = function(h, T, R, C) {
      p = R, x(h ? h + "{" + T.styles + "}" : T.styles), C && (E.inserted[T.name] = !0);
    };
  }
  var E = {
    key: r,
    sheet: new ua({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return E.sheet.hydrate(c), E;
}, Da = !0;
function ja(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var to = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Da === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, La = function(t, r, n) {
  to(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ba(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Fa = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Va = !1, Wa = /[A-Z]|^ms/g, Ua = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ro = function(t) {
  return t.charCodeAt(1) === 45;
}, hn = function(t) {
  return t != null && typeof t != "boolean";
}, Zt = /* @__PURE__ */ Hn(function(e) {
  return ro(e) ? e : e.replace(Wa, "-$&").toLowerCase();
}), gn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ua, function(n, o, i) {
          return Ce = {
            name: o,
            styles: i,
            next: Ce
          }, o;
        });
  }
  return Fa[t] !== 1 && !ro(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, za = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function at(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ce = {
          name: o.name,
          styles: o.styles,
          next: Ce
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ce = {
              name: a.name,
              styles: a.styles,
              next: Ce
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return qa(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ce, f = r(e);
        return Ce = l, at(e, t, f);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var d = t[p];
  return d !== void 0 ? d : p;
}
function qa(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += at(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : hn(c) && (n += Zt(i) + ":" + gn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Va)
          throw new Error(za);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            hn(a[l]) && (n += Zt(i) + ":" + gn(i, a[l]) + ";");
        else {
          var f = at(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Zt(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var yn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ce;
function no(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ce = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += at(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += at(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  yn.lastIndex = 0;
  for (var f = "", p; (p = yn.exec(o)) !== null; )
    f += "-" + p[1];
  var d = Ba(o) + f;
  return {
    name: d,
    styles: o,
    next: Ce
  };
}
var Ya = function(t) {
  return t();
}, Ha = L.useInsertionEffect ? L.useInsertionEffect : !1, Ga = Ha || Ya, oo = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ma({
    key: "css"
  }) : null
);
oo.Provider;
var Ka = function(t) {
  return /* @__PURE__ */ ko(function(r, n) {
    var o = In(oo);
    return t(r, o, n);
  });
}, io = /* @__PURE__ */ L.createContext({}), Xa = ia, Ja = function(t) {
  return t !== "theme";
}, bn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Xa : Ja;
}, vn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Qa = !1, Za = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return to(r, n, o), Ga(function() {
    return La(r, n, o);
  }), null;
}, es = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = vn(t, r, n), l = c || bn(o), f = !l("as");
  return function() {
    var p = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      d.push.apply(d, p);
    else {
      d.push(p[0][0]);
      for (var y = p.length, x = 1; x < y; x++)
        d.push(p[x], p[0][x]);
    }
    var E = Ka(function(m, h, T) {
      var R = f && m.as || o, C = "", w = [], b = m;
      if (m.theme == null) {
        b = {};
        for (var M in m)
          b[M] = m[M];
        b.theme = L.useContext(io);
      }
      typeof m.className == "string" ? C = ja(h.registered, w, m.className) : m.className != null && (C = m.className + " ");
      var $ = no(d.concat(w), h.registered, b);
      C += h.key + "-" + $.name, a !== void 0 && (C += " " + a);
      var ee = f && c === void 0 ? bn(R) : l, K = {};
      for (var s in m)
        f && s === "as" || ee(s) && (K[s] = m[s]);
      return K.className = C, T && (K.ref = T), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(Za, {
        cache: h,
        serialized: $,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ L.createElement(R, K));
    });
    return E.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", E.defaultProps = t.defaultProps, E.__emotion_real = E, E.__emotion_base = o, E.__emotion_styles = d, E.__emotion_forwardProp = c, Object.defineProperty(E, "toString", {
      value: function() {
        return a === void 0 && Qa ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), E.withComponent = function(m, h) {
      return e(m, cr({}, r, h, {
        shouldForwardProp: vn(E, h, !0)
      })).apply(void 0, d);
    }, E;
  };
}, ts = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], fr = es.bind();
ts.forEach(function(e) {
  fr[e] = fr(e);
});
/**
 * @mui/styled-engine v6.1.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function rs(e, t) {
  const r = fr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function ns(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const En = [];
function Sn(e) {
  return En[0] = e, no(En);
}
const os = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function is(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = os(t), a = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function l(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function f(y, x) {
    const E = a.indexOf(x);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(E !== -1 && typeof t[a[E]] == "number" ? t[a[E]] : x) - n / 100}${r})`;
  }
  function p(y) {
    return a.indexOf(y) + 1 < a.length ? f(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function d(y) {
    const x = a.indexOf(y);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? l(a[x]) : f(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: l,
    between: f,
    only: p,
    not: d,
    unit: r,
    ...o
  };
}
const as = {
  borderRadius: 4
};
function ao(e = 8, t = Or({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function ss(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function _r(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = is(r), l = ao(o);
  let f = ge({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...as,
      ...i
    }
  }, a);
  return f = mi(f), f.applyStyles = ss, f = t.reduce((p, d) => ge(p, d), f), f.unstable_sxConfig = {
    ...Vt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(d) {
    return He({
      sx: d,
      theme: this
    });
  }, f;
}
function cs(e) {
  return Object.keys(e).length === 0;
}
function us(e = null) {
  const t = L.useContext(io);
  return !t || cs(t) ? e : t;
}
const ls = _r();
function fs(e = ls) {
  return us(e);
}
function so(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Sn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Sn(o.style));
  }), n;
}
const ds = _r();
function er(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ps(e) {
  return e ? (t, r) => r[e] : null;
}
function ms(e, t, r) {
  e.theme = bs(e.theme) ? r : e.theme[t] || e.theme;
}
function Ot(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Ot(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return co(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function co(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function hs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ds,
    rootShouldForwardProp: n = er,
    slotShouldForwardProp: o = er
  } = e;
  function i(c) {
    ms(c, t, r);
  }
  return (c, l = {}) => {
    ns(c, (b) => b.filter((M) => M !== He));
    const {
      name: f,
      slot: p,
      skipVariantsResolver: d,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = ps(uo(p)),
      ...E
    } = l, m = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), h = y || !1;
    let T = er;
    p === "Root" || p === "root" ? T = n : p ? T = o : vs(c) && (T = void 0);
    const R = rs(c, {
      shouldForwardProp: T,
      label: ys(f, p),
      ...E
    }), C = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function($) {
          return Ot($, b);
        };
      if (ke(b)) {
        const M = so(b);
        return M.variants ? function(ee) {
          return Ot(ee, M);
        } : M.style;
      }
      return b;
    }, w = (...b) => {
      const M = [], $ = b.map(C), ee = [];
      if (M.push(i), f && x && ee.push(function(D) {
        var Y, ne;
        const q = (ne = (Y = D.theme.components) == null ? void 0 : Y[f]) == null ? void 0 : ne.styleOverrides;
        if (!q)
          return null;
        const F = {};
        for (const se in q)
          F[se] = Ot(D, q[se]);
        return x(D, F);
      }), f && !m && ee.push(function(D) {
        var F, Y;
        const W = D.theme, q = (Y = (F = W == null ? void 0 : W.components) == null ? void 0 : F[f]) == null ? void 0 : Y.variants;
        return q ? co(D, q) : null;
      }), h || ee.push(He), Array.isArray($[0])) {
        const O = $.shift(), D = new Array(M.length).fill(""), W = new Array(ee.length).fill("");
        let q;
        q = [...D, ...O, ...W], q.raw = [...D, ...O.raw, ...W], M.unshift(q);
      }
      const K = [...M, ...$, ...ee], s = R(...K);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = gs(f, p, c)), s;
    };
    return R.withConfig && (w.withConfig = R.withConfig), w;
  };
}
function gs(e, t, r) {
  return e ? `${e}${Me(t || "")}` : `Styled(${Qo(r)})`;
}
function ys(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${uo(t || "Root")}`), r;
}
function bs(e) {
  for (const t in e)
    return !1;
  return !0;
}
function vs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function uo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Pr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), ci(e, t, r);
}
function Es(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _e(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _e(Es(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : $e(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : $e(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ss = (e) => {
  const t = _e(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, et = (e, t) => {
  try {
    return Ss(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function qt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function lo(e) {
  e = _e(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, p = (f + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), qt({
    type: c,
    values: l
  });
}
function dr(e) {
  e = _e(e);
  let t = e.type === "hsl" || e.type === "hsla" ? _e(lo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Tn(e, t) {
  const r = dr(e), n = dr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function pr(e, t) {
  return e = _e(e), t = Pr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qt(e);
}
function St(e, t, r) {
  try {
    return pr(e, t);
  } catch {
    return e;
  }
}
function Nr(e, t) {
  if (e = _e(e), t = Pr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return qt(e);
}
function te(e, t, r) {
  try {
    return Nr(e, t);
  } catch {
    return e;
  }
}
function Ir(e, t) {
  if (e = _e(e), t = Pr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return qt(e);
}
function re(e, t, r) {
  try {
    return Ir(e, t);
  } catch {
    return e;
  }
}
function fo(e, t = 0.15) {
  return dr(e) > 0.5 ? Nr(e, t) : Ir(e, t);
}
function Tt(e, t, r) {
  try {
    return fo(e, t);
  } catch {
    return e;
  }
}
const Ts = /* @__PURE__ */ L.createContext(void 0);
process.env.NODE_ENV !== "production" && (g.node, g.object);
function xs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? sr(o.defaultProps, n) : !o.styleOverrides && !o.variants ? sr(o, n) : n;
}
function Cs({
  props: e,
  name: t
}) {
  const r = L.useContext(Ts);
  return xs({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const xn = {
  theme: void 0
};
function ws(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (xn.theme = o.theme, i = so(e(xn)), t = i, r = o.theme), i;
  };
}
function Os(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Cn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ks = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...a, c] : a) : t([...i, c], l, a));
    });
  }
  n(e);
}, Rs = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function tr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return ks(
    e,
    (c, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, d = Rs(c, l);
        Object.assign(o, {
          [p]: d
        }), Cn(i, c, `var(${p})`, f), Cn(a, c, `var(${p}, ${d})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function As(e, t = {}) {
  const {
    getSelector: r = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: f,
    css: p,
    varsWithDefaults: d
  } = tr(l, t);
  let y = d;
  const x = {}, {
    [c]: E,
    ...m
  } = i;
  if (Object.entries(m || {}).forEach(([C, w]) => {
    const {
      vars: b,
      css: M,
      varsWithDefaults: $
    } = tr(w, t);
    y = ge(y, $), x[C] = {
      css: M,
      vars: b
    };
  }), E) {
    const {
      css: C,
      vars: w,
      varsWithDefaults: b
    } = tr(E, t);
    y = ge(y, b), x[c] = {
      css: C,
      vars: w
    };
  }
  function h(C, w) {
    var M, $;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), C) {
      if (b === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${(($ = (M = i[C]) == null ? void 0 : M.palette) == null ? void 0 : $.mode) || C})`]: {
            ":root": w
          }
        };
      if (b)
        return e.defaultColorScheme === C ? `:root, ${b.replace("%s", String(C))}` : b.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let C = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: w
      }]) => {
        C = ge(C, w);
      }), C;
    },
    generateStyleSheets: () => {
      var ee, K;
      const C = [], w = e.defaultColorScheme || "light";
      function b(s, O) {
        Object.keys(O).length && C.push(typeof s == "string" ? {
          [s]: {
            ...O
          }
        } : s);
      }
      b(r(void 0, {
        ...p
      }), p);
      const {
        [w]: M,
        ...$
      } = x;
      if (M) {
        const {
          css: s
        } = M, O = (K = (ee = i[w]) == null ? void 0 : ee.palette) == null ? void 0 : K.mode, D = !n && O ? {
          colorScheme: O,
          ...s
        } : {
          ...s
        };
        b(r(w, {
          ...D
        }), D);
      }
      return Object.entries($).forEach(([s, {
        css: O
      }]) => {
        var q, F;
        const D = (F = (q = i[s]) == null ? void 0 : q.palette) == null ? void 0 : F.mode, W = !n && D ? {
          colorScheme: D,
          ...O
        } : {
          ...O
        };
        b(r(s, {
          ...W
        }), W);
      }), C;
    }
  };
}
function $s(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const st = {
  black: "#000",
  white: "#fff"
}, _s = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, je = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Le = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ze = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Be = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Fe = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Ve = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
function po() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: st.white,
      default: st.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Ps = po();
function mo() {
  return {
    text: {
      primary: st.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: st.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const wn = mo();
function On(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Ir(e.main, o) : t === "dark" && (e.dark = Nr(e.main, i)));
}
function Ns(e = "light") {
  return e === "dark" ? {
    main: Be[200],
    light: Be[50],
    dark: Be[400]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function Is(e = "light") {
  return e === "dark" ? {
    main: je[200],
    light: je[50],
    dark: je[400]
  } : {
    main: je[500],
    light: je[300],
    dark: je[700]
  };
}
function Ms(e = "light") {
  return e === "dark" ? {
    main: Le[500],
    light: Le[300],
    dark: Le[700]
  } : {
    main: Le[700],
    light: Le[400],
    dark: Le[800]
  };
}
function Ds(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[700],
    light: Fe[500],
    dark: Fe[900]
  };
}
function js(e = "light") {
  return e === "dark" ? {
    main: Ve[400],
    light: Ve[300],
    dark: Ve[700]
  } : {
    main: Ve[800],
    light: Ve[500],
    dark: Ve[900]
  };
}
function Ls(e = "light") {
  return e === "dark" ? {
    main: Ze[400],
    light: Ze[300],
    dark: Ze[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ze[500],
    dark: Ze[900]
  };
}
function Mr(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Ns(t), a = e.secondary || Is(t), c = e.error || Ms(t), l = e.info || Ds(t), f = e.success || js(t), p = e.warning || Ls(t);
  function d(m) {
    const h = Tn(m, wn.text.primary) >= r ? wn.text.primary : Ps.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Tn(m, h);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${h} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const y = ({
    color: m,
    name: h,
    mainShade: T = 500,
    lightShade: R = 300,
    darkShade: C = 700
  }) => {
    if (m = {
      ...m
    }, !m.main && m[T] && (m.main = m[T]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : $e(11, h ? ` (${h})` : "", T));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : $e(12, h ? ` (${h})` : "", JSON.stringify(m.main)));
    return On(m, "light", R, n), On(m, "dark", C, n), m.contrastText || (m.contrastText = d(m.main)), m;
  };
  let x;
  return t === "light" ? x = po() : t === "dark" && (x = mo()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ge({
    // A collection of common colors.
    common: {
      ...st
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: _s,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function Bs(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Fs(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Vs(e) {
  return Math.round(e * 1e5) / 1e5;
}
const kn = {
  textTransform: "uppercase"
}, Rn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ws(e, t) {
  const {
    fontFamily: r = Rn,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p,
    ...d
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, x = p || ((h) => `${h / l * y}rem`), E = (h, T, R, C, w) => ({
    fontFamily: r,
    fontWeight: h,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Rn ? {
      letterSpacing: `${Vs(C / T)}em`
    } : {},
    ...w,
    ...f
  }), m = {
    h1: E(o, 96, 1.167, -1.5),
    h2: E(o, 60, 1.2, -0.5),
    h3: E(i, 48, 1.167, 0),
    h4: E(i, 34, 1.235, 0.25),
    h5: E(i, 24, 1.334, 0),
    h6: E(a, 20, 1.6, 0.15),
    subtitle1: E(i, 16, 1.75, 0.15),
    subtitle2: E(a, 14, 1.57, 0.1),
    body1: E(i, 16, 1.5, 0.15),
    body2: E(i, 14, 1.43, 0.15),
    button: E(a, 14, 1.75, 0.4, kn),
    caption: E(i, 12, 1.66, 0.4),
    overline: E(i, 12, 2.66, 1, kn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ge({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...m
  }, d, {
    clone: !1
    // No need to clone deep
  });
}
const Us = 0.2, zs = 0.14, qs = 0.12;
function oe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Us})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qs})`].join(",");
}
const Ys = ["none", oe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), oe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), oe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), oe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), oe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), oe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), oe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), oe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), oe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), oe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), oe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), oe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), oe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), oe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), oe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), oe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), oe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), oe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), oe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), oe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), oe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), oe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), oe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), oe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hs = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gs = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function An(e) {
  return `${Math.round(e)}ms`;
}
function Ks(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Xs(e) {
  const t = {
    ...Hs,
    ...e.easing
  }, r = {
    ...Gs,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ks,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (y) => typeof y == "string", d = (y) => !Number.isNaN(parseFloat(y));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !d(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !d(l) && !p(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : An(a)} ${c} ${typeof l == "string" ? l : An(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Js = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Qs(e) {
  return ke(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ho(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Qs(c) || a.startsWith("unstable_") ? delete n[a] : ke(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function mr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: l,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : $e(20));
  const p = Mr(i), d = _r(e);
  let y = ge(d, {
    mixins: Fs(d.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ys.slice(),
    typography: Ws(p, c),
    transitions: Xs(a),
    zIndex: {
      ...Js
    }
  });
  if (y = ge(y, f), y = t.reduce((x, E) => ge(x, E), y), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], E = (m, h) => {
      let T;
      for (T in m) {
        const R = m[T];
        if (x.includes(T) && Object.keys(R).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = ct("", T);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: R
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[T] = {};
        }
      }
    };
    Object.keys(y.components).forEach((m) => {
      const h = y.components[m].styleOverrides;
      h && m.startsWith("Mui") && E(h, m);
    });
  }
  return y.unstable_sxConfig = {
    ...Vt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(E) {
    return He({
      sx: E,
      theme: this
    });
  }, y.toRuntimeSource = ho, y;
}
function hr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Zs = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = hr(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function go(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function yo(e) {
  return e === "dark" ? Zs : [];
}
function ec(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = Mr(t);
  return {
    palette: i,
    opacity: {
      ...go(i.mode),
      ...r
    },
    overlays: n || yo(i.mode),
    ...o
  };
}
function tc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const rc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], nc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return rc(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function oc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function tt(e) {
  return !e || !e.startsWith("hsl") ? e : lo(e);
}
function Oe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = et(tt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function ic(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Te = (e) => {
  try {
    return e();
  } catch {
  }
}, ac = (e = "mui") => Os(e);
function rr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = ec({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = mr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...go(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || yo(o)
  }, a;
}
function sc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = tc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...f
  } = e, p = Object.keys(r)[0], d = n || (r.light && p !== "light" ? "light" : p), y = ac(i), {
    [d]: x,
    light: E,
    dark: m,
    ...h
  } = r, T = {
    ...h
  };
  let R = x;
  if ((d === "dark" && !("dark" in r) || d === "light" && !("light" in r)) && (R = !0), !R)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${d}\` option is either missing or invalid.` : $e(21, d));
  const C = rr(T, R, f, d);
  E && !T.light && rr(T, E, void 0, "light"), m && !T.dark && rr(T, m, void 0, "dark");
  let w = {
    defaultColorScheme: d,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: y,
    colorSchemes: T,
    font: {
      ...Bs(C.typography),
      ...C.font
    },
    spacing: ic(f.spacing)
  };
  Object.keys(w.colorSchemes).forEach((K) => {
    const s = w.colorSchemes[K].palette, O = (D) => {
      const W = D.split("-"), q = W[1], F = W[2];
      return y(D, s[q][F]);
    };
    if (s.mode === "light" && (v(s.common, "background", "#fff"), v(s.common, "onBackground", "#000")), s.mode === "dark" && (v(s.common, "background", "#000"), v(s.common, "onBackground", "#fff")), oc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      v(s.Alert, "errorColor", te(s.error.light, 0.6)), v(s.Alert, "infoColor", te(s.info.light, 0.6)), v(s.Alert, "successColor", te(s.success.light, 0.6)), v(s.Alert, "warningColor", te(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", O("palette-error-main")), v(s.Alert, "infoFilledBg", O("palette-info-main")), v(s.Alert, "successFilledBg", O("palette-success-main")), v(s.Alert, "warningFilledBg", O("palette-warning-main")), v(s.Alert, "errorFilledColor", Te(() => s.getContrastText(s.error.main))), v(s.Alert, "infoFilledColor", Te(() => s.getContrastText(s.info.main))), v(s.Alert, "successFilledColor", Te(() => s.getContrastText(s.success.main))), v(s.Alert, "warningFilledColor", Te(() => s.getContrastText(s.warning.main))), v(s.Alert, "errorStandardBg", re(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", re(s.info.light, 0.9)), v(s.Alert, "successStandardBg", re(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", re(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", O("palette-error-main")), v(s.Alert, "infoIconColor", O("palette-info-main")), v(s.Alert, "successIconColor", O("palette-success-main")), v(s.Alert, "warningIconColor", O("palette-warning-main")), v(s.AppBar, "defaultBg", O("palette-grey-100")), v(s.Avatar, "defaultBg", O("palette-grey-400")), v(s.Button, "inheritContainedBg", O("palette-grey-300")), v(s.Button, "inheritContainedHoverBg", O("palette-grey-A100")), v(s.Chip, "defaultBorder", O("palette-grey-400")), v(s.Chip, "defaultAvatarColor", O("palette-grey-700")), v(s.Chip, "defaultIconColor", O("palette-grey-700")), v(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(s.LinearProgress, "primaryBg", re(s.primary.main, 0.62)), v(s.LinearProgress, "secondaryBg", re(s.secondary.main, 0.62)), v(s.LinearProgress, "errorBg", re(s.error.main, 0.62)), v(s.LinearProgress, "infoBg", re(s.info.main, 0.62)), v(s.LinearProgress, "successBg", re(s.success.main, 0.62)), v(s.LinearProgress, "warningBg", re(s.warning.main, 0.62)), v(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), v(s.Slider, "primaryTrack", re(s.primary.main, 0.62)), v(s.Slider, "secondaryTrack", re(s.secondary.main, 0.62)), v(s.Slider, "errorTrack", re(s.error.main, 0.62)), v(s.Slider, "infoTrack", re(s.info.main, 0.62)), v(s.Slider, "successTrack", re(s.success.main, 0.62)), v(s.Slider, "warningTrack", re(s.warning.main, 0.62));
      const D = Tt(s.background.default, 0.8);
      v(s.SnackbarContent, "bg", D), v(s.SnackbarContent, "color", Te(() => s.getContrastText(D))), v(s.SpeedDialAction, "fabHoverBg", Tt(s.background.paper, 0.15)), v(s.StepConnector, "border", O("palette-grey-400")), v(s.StepContent, "border", O("palette-grey-400")), v(s.Switch, "defaultColor", O("palette-common-white")), v(s.Switch, "defaultDisabledColor", O("palette-grey-100")), v(s.Switch, "primaryDisabledColor", re(s.primary.main, 0.62)), v(s.Switch, "secondaryDisabledColor", re(s.secondary.main, 0.62)), v(s.Switch, "errorDisabledColor", re(s.error.main, 0.62)), v(s.Switch, "infoDisabledColor", re(s.info.main, 0.62)), v(s.Switch, "successDisabledColor", re(s.success.main, 0.62)), v(s.Switch, "warningDisabledColor", re(s.warning.main, 0.62)), v(s.TableCell, "border", re(St(s.divider, 1), 0.88)), v(s.Tooltip, "bg", St(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      v(s.Alert, "errorColor", re(s.error.light, 0.6)), v(s.Alert, "infoColor", re(s.info.light, 0.6)), v(s.Alert, "successColor", re(s.success.light, 0.6)), v(s.Alert, "warningColor", re(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", O("palette-error-dark")), v(s.Alert, "infoFilledBg", O("palette-info-dark")), v(s.Alert, "successFilledBg", O("palette-success-dark")), v(s.Alert, "warningFilledBg", O("palette-warning-dark")), v(s.Alert, "errorFilledColor", Te(() => s.getContrastText(s.error.dark))), v(s.Alert, "infoFilledColor", Te(() => s.getContrastText(s.info.dark))), v(s.Alert, "successFilledColor", Te(() => s.getContrastText(s.success.dark))), v(s.Alert, "warningFilledColor", Te(() => s.getContrastText(s.warning.dark))), v(s.Alert, "errorStandardBg", te(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", te(s.info.light, 0.9)), v(s.Alert, "successStandardBg", te(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", te(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", O("palette-error-main")), v(s.Alert, "infoIconColor", O("palette-info-main")), v(s.Alert, "successIconColor", O("palette-success-main")), v(s.Alert, "warningIconColor", O("palette-warning-main")), v(s.AppBar, "defaultBg", O("palette-grey-900")), v(s.AppBar, "darkBg", O("palette-background-paper")), v(s.AppBar, "darkColor", O("palette-text-primary")), v(s.Avatar, "defaultBg", O("palette-grey-600")), v(s.Button, "inheritContainedBg", O("palette-grey-800")), v(s.Button, "inheritContainedHoverBg", O("palette-grey-700")), v(s.Chip, "defaultBorder", O("palette-grey-700")), v(s.Chip, "defaultAvatarColor", O("palette-grey-300")), v(s.Chip, "defaultIconColor", O("palette-grey-300")), v(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(s.LinearProgress, "primaryBg", te(s.primary.main, 0.5)), v(s.LinearProgress, "secondaryBg", te(s.secondary.main, 0.5)), v(s.LinearProgress, "errorBg", te(s.error.main, 0.5)), v(s.LinearProgress, "infoBg", te(s.info.main, 0.5)), v(s.LinearProgress, "successBg", te(s.success.main, 0.5)), v(s.LinearProgress, "warningBg", te(s.warning.main, 0.5)), v(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), v(s.Slider, "primaryTrack", te(s.primary.main, 0.5)), v(s.Slider, "secondaryTrack", te(s.secondary.main, 0.5)), v(s.Slider, "errorTrack", te(s.error.main, 0.5)), v(s.Slider, "infoTrack", te(s.info.main, 0.5)), v(s.Slider, "successTrack", te(s.success.main, 0.5)), v(s.Slider, "warningTrack", te(s.warning.main, 0.5));
      const D = Tt(s.background.default, 0.98);
      v(s.SnackbarContent, "bg", D), v(s.SnackbarContent, "color", Te(() => s.getContrastText(D))), v(s.SpeedDialAction, "fabHoverBg", Tt(s.background.paper, 0.15)), v(s.StepConnector, "border", O("palette-grey-600")), v(s.StepContent, "border", O("palette-grey-600")), v(s.Switch, "defaultColor", O("palette-grey-300")), v(s.Switch, "defaultDisabledColor", O("palette-grey-600")), v(s.Switch, "primaryDisabledColor", te(s.primary.main, 0.55)), v(s.Switch, "secondaryDisabledColor", te(s.secondary.main, 0.55)), v(s.Switch, "errorDisabledColor", te(s.error.main, 0.55)), v(s.Switch, "infoDisabledColor", te(s.info.main, 0.55)), v(s.Switch, "successDisabledColor", te(s.success.main, 0.55)), v(s.Switch, "warningDisabledColor", te(s.warning.main, 0.55)), v(s.TableCell, "border", te(St(s.divider, 1), 0.68)), v(s.Tooltip, "bg", St(s.grey[700], 0.92));
    }
    Oe(s.background, "default"), Oe(s.background, "paper"), Oe(s.common, "background"), Oe(s.common, "onBackground"), Oe(s, "divider"), Object.keys(s).forEach((D) => {
      const W = s[D];
      W && typeof W == "object" && (W.main && v(s[D], "mainChannel", et(tt(W.main))), W.light && v(s[D], "lightChannel", et(tt(W.light))), W.dark && v(s[D], "darkChannel", et(tt(W.dark))), W.contrastText && v(s[D], "contrastTextChannel", et(tt(W.contrastText))), D === "text" && (Oe(s[D], "primary"), Oe(s[D], "secondary")), D === "action" && (W.active && Oe(s[D], "active"), W.selected && Oe(s[D], "selected")));
    });
  }), w = t.reduce((K, s) => ge(K, s), w);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: nc(w)
  }, {
    vars: M,
    generateThemeVars: $,
    generateStyleSheets: ee
  } = As(w, b);
  return w.vars = M, Object.entries(w.colorSchemes[w.defaultColorScheme]).forEach(([K, s]) => {
    w[K] = s;
  }), w.generateThemeVars = $, w.generateStyleSheets = ee, w.generateSpacing = function() {
    return ao(f.spacing, Or(this));
  }, w.getColorSchemeSelector = $s(c), w.spacing = w.generateSpacing(), w.shouldSkipGeneratingVar = a, w.unstable_sxConfig = {
    ...Vt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, w.unstable_sx = function(s) {
    return He({
      sx: s,
      theme: this
    });
  }, w.toRuntimeSource = ho, w;
}
function $n(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Mr({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function cc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", l = o == null ? void 0 : o[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return mr(e, ...t);
    let p = r;
    "palette" in e || f[c] && (f[c] !== !0 ? p = f[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const d = mr({
      ...e,
      palette: p
    }, ...t);
    return d.defaultColorScheme = c, d.colorSchemes = f, d.palette.mode === "light" && (d.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: d.palette
    }, $n(d, "dark", f.dark)), d.palette.mode === "dark" && (d.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: d.palette
    }, $n(d, "light", f.light)), d;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), sc({
    ...a,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const bo = cc(), vo = "$$material";
function Dr() {
  const e = fs(bo);
  return process.env.NODE_ENV !== "production" && L.useDebugValue(e), e[vo] || e;
}
function uc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const lc = (e) => uc(e) && e !== "classes", dt = hs({
  themeId: vo,
  defaultTheme: bo,
  rootShouldForwardProp: lc
}), jr = ws;
process.env.NODE_ENV !== "production" && (g.node, g.object.isRequired);
function Lr(e) {
  return Cs(e);
}
function fc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function gr(e, t) {
  return gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, gr(e, t);
}
function dc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gr(e, t);
}
const _n = {
  disabled: !1
};
var pc = process.env.NODE_ENV !== "production" ? g.oneOfType([g.number, g.shape({
  enter: g.number,
  exit: g.number,
  appear: g.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && g.oneOfType([g.string, g.shape({
  enter: g.string,
  exit: g.string,
  active: g.string
}), g.shape({
  enter: g.string,
  enterDone: g.string,
  enterActive: g.string,
  exit: g.string,
  exitDone: g.string,
  exitActive: g.string
})]);
const Eo = ze.createContext(null);
var mc = function(t) {
  return t.scrollTop;
}, rt = "unmounted", Ne = "exited", Ie = "entering", Ue = "entered", yr = "exiting", Ae = /* @__PURE__ */ function(e) {
  dc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = o, c = a && !a.isMounting ? n.enter : n.appear, l;
    return i.appearStatus = null, n.in ? c ? (l = Ne, i.appearStatus = Ie) : l = Ue : n.unmountOnExit || n.mountOnEnter ? l = rt : l = Ne, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === rt ? {
      status: Ne
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ie && a !== Ue && (i = Ie) : (a === Ie || a === Ue) && (i = yr);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, a, c;
    return i = a = c = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, c = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: c
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ie) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : ht.findDOMNode(this);
          a && mc(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ne && this.setState({
      status: rt
    });
  }, r.performEnter = function(o) {
    var i = this, a = this.props.enter, c = this.context ? this.context.isMounting : o, l = this.props.nodeRef ? [c] : [ht.findDOMNode(this), c], f = l[0], p = l[1], d = this.getTimeouts(), y = c ? d.appear : d.enter;
    if (!o && !a || _n.disabled) {
      this.safeSetState({
        status: Ue
      }, function() {
        i.props.onEntered(f);
      });
      return;
    }
    this.props.onEnter(f, p), this.safeSetState({
      status: Ie
    }, function() {
      i.props.onEntering(f, p), i.onTransitionEnd(y, function() {
        i.safeSetState({
          status: Ue
        }, function() {
          i.props.onEntered(f, p);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : ht.findDOMNode(this);
    if (!i || _n.disabled) {
      this.safeSetState({
        status: Ne
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: yr
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Ne
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : ht.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], f = l[0], p = l[1];
      this.props.addEndListener(f, p);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === rt)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = fc(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ze.createElement(Eo.Provider, {
        value: null
      }, typeof a == "function" ? a(o, c) : ze.cloneElement(ze.Children.only(a), c))
    );
  }, t;
}(ze.Component);
Ae.contextType = Eo;
Ae.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: g.shape({
    current: typeof Element > "u" ? g.any : function(e, t, r, n, o, i) {
      var a = e[t];
      return g.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: g.oneOfType([g.func.isRequired, g.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: g.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: g.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: g.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: g.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: g.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: g.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = pc;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: g.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: g.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: g.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: g.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: g.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: g.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: g.func
} : {};
function We() {
}
Ae.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: We,
  onEntering: We,
  onEntered: We,
  onExit: We,
  onExiting: We,
  onExited: We
};
Ae.UNMOUNTED = rt;
Ae.EXITED = Ne;
Ae.ENTERING = Ie;
Ae.ENTERED = Ue;
Ae.EXITING = yr;
const hc = (e) => e.scrollTop;
function Pn(e, t) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[t.mode] : n),
    delay: o.transitionDelay
  };
}
function br(e) {
  return `scale(${e}, ${e ** 2})`;
}
const gc = {
  entering: {
    opacity: 1,
    transform: br(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, nr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), _t = /* @__PURE__ */ L.forwardRef(function(t, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: f,
    onEntering: p,
    onExit: d,
    onExited: y,
    onExiting: x,
    style: E,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = Ae,
    ...T
  } = t, R = Wn(), C = L.useRef(), w = Dr(), b = L.useRef(null), M = Sr(b, qn(i), r), $ = (F) => (Y) => {
    if (F) {
      const ne = b.current;
      Y === void 0 ? F(ne) : F(ne, Y);
    }
  }, ee = $(p), K = $((F, Y) => {
    hc(F);
    const {
      duration: ne,
      delay: se,
      easing: ce
    } = Pn({
      style: E,
      timeout: m,
      easing: a
    }, {
      mode: "enter"
    });
    let u;
    m === "auto" ? (u = w.transitions.getAutoHeightDuration(F.clientHeight), C.current = u) : u = ne, F.style.transition = [w.transitions.create("opacity", {
      duration: u,
      delay: se
    }), w.transitions.create("transform", {
      duration: nr ? u : u * 0.666,
      delay: se,
      easing: ce
    })].join(","), l && l(F, Y);
  }), s = $(f), O = $(x), D = $((F) => {
    const {
      duration: Y,
      delay: ne,
      easing: se
    } = Pn({
      style: E,
      timeout: m,
      easing: a
    }, {
      mode: "exit"
    });
    let ce;
    m === "auto" ? (ce = w.transitions.getAutoHeightDuration(F.clientHeight), C.current = ce) : ce = Y, F.style.transition = [w.transitions.create("opacity", {
      duration: ce,
      delay: ne
    }), w.transitions.create("transform", {
      duration: nr ? ce : ce * 0.666,
      delay: nr ? ne : ne || ce * 0.333,
      easing: se
    })].join(","), F.style.opacity = 0, F.style.transform = br(0.75), d && d(F);
  }), W = $(y), q = (F) => {
    m === "auto" && R.start(C.current || 0, F), n && n(b.current, F);
  };
  return /* @__PURE__ */ Ee.jsx(h, {
    appear: o,
    in: c,
    nodeRef: b,
    onEnter: K,
    onEntered: s,
    onEntering: ee,
    onExit: D,
    onExited: W,
    onExiting: O,
    addEndListener: q,
    timeout: m === "auto" ? null : m,
    ...T,
    children: (F, Y) => /* @__PURE__ */ L.cloneElement(i, {
      style: {
        opacity: 0,
        transform: br(0.75),
        visibility: F === "exited" && !c ? "hidden" : void 0,
        ...gc[F],
        ...E,
        ...i.props.style
      },
      ref: M,
      ...Y
    })
  });
});
process.env.NODE_ENV !== "production" && (_t.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: g.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: g.bool,
  /**
   * A single child content element.
   */
  children: xr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: g.oneOfType([g.shape({
    enter: g.string,
    exit: g.string
  }), g.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: g.bool,
  /**
   * @ignore
   */
  onEnter: g.func,
  /**
   * @ignore
   */
  onEntered: g.func,
  /**
   * @ignore
   */
  onEntering: g.func,
  /**
   * @ignore
   */
  onExit: g.func,
  /**
   * @ignore
   */
  onExited: g.func,
  /**
   * @ignore
   */
  onExiting: g.func,
  /**
   * @ignore
   */
  style: g.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: g.oneOfType([g.oneOf(["auto"]), g.number, g.shape({
    appear: g.number,
    enter: g.number,
    exit: g.number
  })])
});
_t && (_t.muiSupportAuto = !0);
function yc(e) {
  return ct("MuiPaper", e);
}
wr("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const bc = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Er(i, yc, o);
}, vc = dt("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(jr(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), So = /* @__PURE__ */ L.forwardRef(function(t, r) {
  var x;
  const n = Lr({
    props: t,
    name: "MuiPaper"
  }), o = Dr(), {
    className: i,
    component: a = "div",
    elevation: c = 1,
    square: l = !1,
    variant: f = "elevation",
    ...p
  } = n, d = {
    ...n,
    component: a,
    elevation: c,
    square: l,
    variant: f
  }, y = bc(d);
  return process.env.NODE_ENV !== "production" && o.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ Ee.jsx(vc, {
    as: a,
    ownerState: d,
    className: kt(y.root, i),
    ref: r,
    ...p,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[c],
        ...o.vars && {
          "--Paper-overlay": (x = o.vars.overlays) == null ? void 0 : x[c]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${pr("#fff", hr(c))}, ${pr("#fff", hr(c))})`
        }
      },
      ...p.style
    }
  });
});
process.env.NODE_ENV !== "production" && (So.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: g.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: g.object,
  /**
   * @ignore
   */
  className: g.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: g.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Tr(oi, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: g.bool,
  /**
   * @ignore
   */
  style: g.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: g.oneOfType([g.oneOf(["elevation", "outlined"]), g.string])
});
function Ec(e) {
  return ct("MuiSnackbarContent", e);
}
wr("MuiSnackbarContent", ["root", "message", "action"]);
const Sc = (e) => {
  const {
    classes: t
  } = e;
  return Er({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, Ec, t);
}, Tc = dt(So, {
  name: "MuiSnackbarContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(jr(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98, r = fo(e.palette.background.default, t);
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(r),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : r,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    flexGrow: 1,
    [e.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
})), xc = dt("div", {
  name: "MuiSnackbarContent",
  slot: "Message",
  overridesResolver: (e, t) => t.message
})({
  padding: "8px 0"
}), Cc = dt("div", {
  name: "MuiSnackbarContent",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), To = /* @__PURE__ */ L.forwardRef(function(t, r) {
  const n = Lr({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: a,
    role: c = "alert",
    ...l
  } = n, f = n, p = Sc(f);
  return /* @__PURE__ */ Ee.jsxs(Tc, {
    role: c,
    square: !0,
    elevation: 6,
    className: kt(p.root, i),
    ownerState: f,
    ref: r,
    ...l,
    children: [/* @__PURE__ */ Ee.jsx(xc, {
      className: p.message,
      ownerState: f,
      children: a
    }), o ? /* @__PURE__ */ Ee.jsx(Cc, {
      className: p.action,
      ownerState: f,
      children: o
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (To.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: g.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: g.object,
  /**
   * @ignore
   */
  className: g.string,
  /**
   * The message to display.
   */
  message: g.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: g.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object])
});
function wc(e) {
  return ct("MuiSnackbar", e);
}
wr("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const Oc = (e) => {
  const {
    classes: t,
    anchorOrigin: r
  } = e, n = {
    root: ["root", `anchorOrigin${Me(r.vertical)}${Me(r.horizontal)}`]
  };
  return Er(n, wc, t);
}, Nn = dt("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`anchorOrigin${Me(r.anchorOrigin.vertical)}${Me(r.anchorOrigin.horizontal)}`]];
  }
})(jr(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [e.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [e.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [e.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [e.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.anchorOrigin.horizontal === "center",
    style: {
      [e.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
}))), xo = /* @__PURE__ */ L.forwardRef(function(t, r) {
  const n = Lr({
    props: t,
    name: "MuiSnackbar"
  }), o = Dr(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    action: a,
    anchorOrigin: {
      vertical: c,
      horizontal: l
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: f = null,
    children: p,
    className: d,
    ClickAwayListenerProps: y,
    ContentProps: x,
    disableWindowBlurListener: E = !1,
    message: m,
    onBlur: h,
    onClose: T,
    onFocus: R,
    onMouseEnter: C,
    onMouseLeave: w,
    open: b,
    resumeHideDuration: M,
    TransitionComponent: $ = _t,
    transitionDuration: ee = i,
    TransitionProps: {
      onEnter: K,
      onExited: s,
      ...O
    } = {},
    ...D
  } = n, W = {
    ...n,
    anchorOrigin: {
      vertical: c,
      horizontal: l
    },
    autoHideDuration: f,
    disableWindowBlurListener: E,
    TransitionComponent: $,
    transitionDuration: ee
  }, q = Oc(W), {
    getRootProps: F,
    onClickAway: Y
  } = ui({
    ...W
  }), [ne, se] = L.useState(!0), ce = qo({
    elementType: Nn,
    getSlotProps: F,
    externalForwardedProps: D,
    ownerState: W,
    additionalProps: {
      ref: r
    },
    className: [q.root, d]
  }), u = (A) => {
    se(!0), s && s(A);
  }, S = (A, _) => {
    se(!1), K && K(A, _);
  };
  return !b && ne ? null : /* @__PURE__ */ Ee.jsx(Rt, {
    onClickAway: Y,
    ...y,
    children: /* @__PURE__ */ Ee.jsx(Nn, {
      ...ce,
      children: /* @__PURE__ */ Ee.jsx($, {
        appear: !0,
        in: b,
        timeout: ee,
        direction: c === "top" ? "down" : "up",
        onEnter: S,
        onExited: u,
        ...O,
        children: p || /* @__PURE__ */ Ee.jsx(To, {
          message: m,
          action: a,
          ...x
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: g.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: g.shape({
    horizontal: g.oneOf(["center", "left", "right"]).isRequired,
    vertical: g.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: g.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: g.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: g.object,
  /**
   * @ignore
   */
  className: g.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   */
  ClickAwayListenerProps: g.object,
  /**
   * Props applied to the [`SnackbarContent`](https://mui.com/material-ui/api/snackbar-content/) element.
   */
  ContentProps: g.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: g.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: g.node,
  /**
   * @ignore
   */
  onBlur: g.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: g.func,
  /**
   * @ignore
   */
  onFocus: g.func,
  /**
   * @ignore
   */
  onMouseEnter: g.func,
  /**
   * @ignore
   */
  onMouseLeave: g.func,
  /**
   * If `true`, the component is shown.
   */
  open: g.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: g.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: g.oneOfType([g.arrayOf(g.oneOfType([g.func, g.object, g.bool])), g.func, g.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: g.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: g.oneOfType([g.number, g.shape({
    appear: g.number,
    enter: g.number,
    exit: g.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: g.object
});
const _c = ({ children: e }) => {
  const [t, r] = Fr([]), [n, o] = Fr(0), i = {
    autoHideDuration: 4e3,
    variant: "info"
  }, a = (l, f = {}) => {
    const p = n;
    r([...t, { key: p, message: l, options: { ...i, ...f } }]), o(n + 1);
  }, c = (l) => {
    r(t.filter((f) => f.key !== l));
  };
  return /* @__PURE__ */ Ee.jsxs(Mn.Provider, { value: { show: a }, children: [
    e,
    t.map((l) => /* @__PURE__ */ Ee.jsx(
      xo,
      {
        open: !0,
        message: l.message,
        onClose: () => c(l.key),
        ...l.options
      },
      l.key
    ))
  ] });
};
export {
  _c as SnackProvider,
  $c as useSnack
};
//# sourceMappingURL=mui-easy-snack.es.js.map
