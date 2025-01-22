import * as yr from "react";
import { useContext as B, useMemo as g, createContext as M, useState as D, Children as me, cloneElement as N, useRef as L, useEffect as Q, forwardRef as Rr, useImperativeHandle as Pr, useCallback as jr } from "react";
import { createPortal as xe } from "react-dom";
function Er(r) {
  if (r.__esModule) return r;
  var t = r.default;
  if (typeof t == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(r).forEach(function(o) {
    var c = Object.getOwnPropertyDescriptor(r, o);
    Object.defineProperty(n, o, c.get ? c : {
      enumerable: !0,
      get: function() {
        return r[o];
      }
    });
  }), n;
}
var Ce = { exports: {} }, X = {};
const jt = /* @__PURE__ */ Er(yr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function _r() {
  if (He) return X;
  He = 1;
  var r = jt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, u, p) {
    var b, P = {}, m = null, j = null;
    p !== void 0 && (m = "" + p), u.key !== void 0 && (m = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (b in u) o.call(u, b) && !l.hasOwnProperty(b) && (P[b] = u[b]);
    if (f && f.defaultProps) for (b in u = f.defaultProps, u) P[b] === void 0 && (P[b] = u[b]);
    return { $$typeof: t, type: f, key: m, ref: j, props: P, _owner: c.current };
  }
  return X.Fragment = n, X.jsx = d, X.jsxs = d, X;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function kr() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = jt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), I = Symbol.iterator, W = "@@iterator";
    function ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = I && e[I] || e[W];
      return typeof a == "function" ? a : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
          i[v - 1] = arguments[v];
        k("error", e, i);
      }
    }
    function k(e, a, i) {
      {
        var v = A.ReactDebugCurrentFrame, y = v.getStackAddendum();
        y !== "" && (a += "%s", i = i.concat([y]));
        var R = i.map(function(x) {
          return String(x);
        });
        R.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, R);
      }
    }
    var w = !1, Vt = !1, Nt = !1, Ut = !1, Gt = !1, _e;
    _e = Symbol.for("react.module.reference");
    function qt(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || Gt || e === c || e === p || e === b || Ut || e === j || w || Vt || Nt || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === P || e.$$typeof === d || e.$$typeof === f || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === _e || e.getModuleId !== void 0));
    }
    function Jt(e, a, i) {
      var v = e.displayName;
      if (v)
        return v;
      var y = a.displayName || a.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function ke(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case p:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var a = e;
            return ke(a) + ".Consumer";
          case d:
            var i = e;
            return ke(i._context) + ".Provider";
          case u:
            return Jt(e, e.render, "ForwardRef");
          case P:
            var v = e.displayName || null;
            return v !== null ? v : F(e.type) || "Memo";
          case m: {
            var y = e, R = y._payload, x = y._init;
            try {
              return F(x(R));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, K = 0, Te, $e, we, Oe, Be, Ie, Se;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function Kt() {
      {
        if (K === 0) {
          Te = console.log, $e = console.info, we = console.warn, Oe = console.error, Be = console.group, Ie = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        K++;
      }
    }
    function zt() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: Te
            }),
            info: Y({}, e, {
              value: $e
            }),
            warn: Y({}, e, {
              value: we
            }),
            error: Y({}, e, {
              value: Oe
            }),
            group: Y({}, e, {
              value: Be
            }),
            groupCollapsed: Y({}, e, {
              value: Ie
            }),
            groupEnd: Y({}, e, {
              value: Se
            })
          });
        }
        K < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = A.ReactCurrentDispatcher, le;
    function te(e, a, i) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (y) {
            var v = y.stack.trim().match(/\n( *(at )?)/);
            le = v && v[1] || "";
          }
        return `
` + le + e;
      }
    }
    var ue = !1, re;
    {
      var Ht = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Ht();
    }
    function Ae(e, a) {
      if (!e || ue)
        return "";
      {
        var i = re.get(e);
        if (i !== void 0)
          return i;
      }
      var v;
      ue = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var R;
      R = ce.current, ce.current = null, Kt();
      try {
        if (a) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (O) {
              v = O;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (O) {
              v = O;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            v = O;
          }
          e();
        }
      } catch (O) {
        if (O && v && typeof O.stack == "string") {
          for (var h = O.stack.split(`
`), $ = v.stack.split(`
`), E = h.length - 1, T = $.length - 1; E >= 1 && T >= 0 && h[E] !== $[T]; )
            T--;
          for (; E >= 1 && T >= 0; E--, T--)
            if (h[E] !== $[T]) {
              if (E !== 1 || T !== 1)
                do
                  if (E--, T--, T < 0 || h[E] !== $[T]) {
                    var S = `
` + h[E].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, S), S;
                  }
                while (E >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ce.current = R, zt(), Error.prepareStackTrace = y;
      }
      var G = e ? e.displayName || e.name : "", V = G ? te(G) : "";
      return typeof e == "function" && re.set(e, V), V;
    }
    function Xt(e, a, i) {
      return Ae(e, !1);
    }
    function Zt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ne(e, a, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, Zt(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case p:
          return te("Suspense");
        case b:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Xt(e.render);
          case P:
            return ne(e.type, a, i);
          case m: {
            var v = e, y = v._payload, R = v._init;
            try {
              return ne(R(y), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Fe = {}, Me = A.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var a = e._owner, i = ne(e.type, e._source, a ? a.type : null);
        Me.setExtraStackFrame(i);
      } else
        Me.setExtraStackFrame(null);
    }
    function Qt(e, a, i, v, y) {
      {
        var R = Function.call.bind(z);
        for (var x in e)
          if (R(e, x)) {
            var h = void 0;
            try {
              if (typeof e[x] != "function") {
                var $ = Error((v || "React class") + ": " + i + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $.name = "Invariant Violation", $;
              }
              h = e[x](a, x, v, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              h = E;
            }
            h && !(h instanceof Error) && (oe(y), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", i, x, typeof h), oe(null)), h instanceof Error && !(h.message in Fe) && (Fe[h.message] = !0, oe(y), _("Failed %s type: %s", i, h.message), oe(null));
          }
      }
    }
    var er = Array.isArray;
    function de(e) {
      return er(e);
    }
    function tr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function rr(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function We(e) {
      if (rr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), Le(e);
    }
    var H = A.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, Ve, fe;
    fe = {};
    function or(e) {
      if (z.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (z.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, a) {
      if (typeof e.ref == "string" && H.current && a && H.current.stateNode !== a) {
        var i = F(H.current.type);
        fe[i] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(H.current.type), e.ref), fe[i] = !0);
      }
    }
    function ir(e, a) {
      {
        var i = function() {
          Ye || (Ye = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function cr(e, a) {
      {
        var i = function() {
          Ve || (Ve = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var lr = function(e, a, i, v, y, R, x) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: i,
        props: x,
        // Record the component responsible for creating this element.
        _owner: R
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function ur(e, a, i, v, y) {
      {
        var R, x = {}, h = null, $ = null;
        i !== void 0 && (We(i), h = "" + i), ar(a) && (We(a.key), h = "" + a.key), or(a) && ($ = a.ref, sr(a, y));
        for (R in a)
          z.call(a, R) && !nr.hasOwnProperty(R) && (x[R] = a[R]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (R in E)
            x[R] === void 0 && (x[R] = E[R]);
        }
        if (h || $) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && ir(x, T), $ && cr(x, T);
        }
        return lr(e, h, $, y, v, H.current, x);
      }
    }
    var ve = A.ReactCurrentOwner, Ne = A.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var a = e._owner, i = ne(e.type, e._source, a ? a.type : null);
        Ne.setExtraStackFrame(i);
      } else
        Ne.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ue() {
      {
        if (ve.current) {
          var e = F(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      return "";
    }
    var Ge = {};
    function fr(e) {
      {
        var a = Ue();
        if (!a) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function qe(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = fr(a);
        if (Ge[i])
          return;
        Ge[i] = !0;
        var v = "";
        e && e._owner && e._owner !== ve.current && (v = " It was passed a child from " + F(e._owner.type) + "."), U(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, v), U(null);
      }
    }
    function Je(e, a) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var i = 0; i < e.length; i++) {
            var v = e[i];
            pe(v) && qe(v, a);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = ee(e);
          if (typeof y == "function" && y !== e.entries)
            for (var R = y.call(e), x; !(x = R.next()).done; )
              pe(x.value) && qe(x.value, a);
        }
      }
    }
    function vr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === P))
          i = a.propTypes;
        else
          return;
        if (i) {
          var v = F(a);
          Qt(i, e.props, "prop", v, e);
        } else if (a.PropTypes !== void 0 && !ge) {
          ge = !0;
          var y = F(a);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gr(e) {
      {
        for (var a = Object.keys(e.props), i = 0; i < a.length; i++) {
          var v = a[i];
          if (v !== "children" && v !== "key") {
            U(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var Ke = {};
    function ze(e, a, i, v, y, R) {
      {
        var x = qt(e);
        if (!x) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $ = dr();
          $ ? h += $ : h += Ue();
          var E;
          e === null ? E = "null" : de(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (F(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, h);
        }
        var T = ur(e, a, i, y, R);
        if (T == null)
          return T;
        if (x) {
          var S = a.children;
          if (S !== void 0)
            if (v)
              if (de(S)) {
                for (var G = 0; G < S.length; G++)
                  Je(S[G], e);
                Object.freeze && Object.freeze(S);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(S, e);
        }
        if (z.call(a, "key")) {
          var V = F(e), O = Object.keys(a).filter(function(xr) {
            return xr !== "key";
          }), he = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[V + he]) {
            var mr = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, V, mr, V), Ke[V + he] = !0;
          }
        }
        return e === o ? gr(T) : vr(T), T;
      }
    }
    function pr(e, a, i) {
      return ze(e, a, i, !0);
    }
    function hr(e, a, i) {
      return ze(e, a, i, !1);
    }
    var Cr = hr, br = pr;
    Z.Fragment = o, Z.jsx = Cr, Z.jsxs = br;
  }()), Z;
}
process.env.NODE_ENV === "production" ? Ce.exports = _r() : Ce.exports = kr();
var s = Ce.exports;
const Tr = "dg", C = (r) => `${Tr}-${r}`, Ze = C("tabs"), $r = C("tabs-menu-list"), wr = C("tabs-menu"), Or = C("tabs-pannel"), Qe = C("carousel"), Br = C("carousel-item-list"), Ir = C("carousel-item"), Sr = C("carousel-navigator"), Dr = C(
  "carousel-navigator-prev-button"
), Ar = C(
  "carousel-navigator-next-button"
), Fr = C("carousel-indicator"), Mr = C(
  "carousel-indicator-button"
), et = C("accordion"), tt = C("accordion-title"), rt = C("accordion-content"), nt = C("accordion-button"), ot = C("calendar"), at = C("calendarCurrent"), st = C("calendarBody"), it = C("pagination"), ct = C("pagination-navigator"), lt = C(
  "pagination-navigator"
), ut = C(
  "pagination-navigator"
), dt = C(
  "pagination-page-buttons"
), ft = C(
  "pagination-page-buttons"
), vt = C("breadcrumb"), gt = C("breadcrumb-ul-conatiner"), pt = C("breadcrumb-ellipsis"), ht = C("popover-trigger"), Ct = C("popover-Content"), bt = C("progress"), mt = C("progress-bar"), xt = C("modal-backdrop"), yt = C("modal-trigger"), Rt = C("modal-content"), Pt = C("modal-close"), Et = ({ children: r }) => /* @__PURE__ */ s.jsx("ul", { className: $r, children: r }), _t = ({ children: r, index: t }) => {
  const { selectedIndex: n } = B(ye);
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: t === n && /* @__PURE__ */ s.jsx("div", { className: Or, children: r }) });
}, Lr = ({ children: r, index: t }) => {
  const { selectedIndex: n, handleClickMenu: o } = B(ye), c = g(
    () => n === t,
    [t, n]
  );
  return /* @__PURE__ */ s.jsx(
    "li",
    {
      className: wr,
      "data-active": c,
      onClick: () => t && o(t),
      children: r
    }
  );
}, ye = M({
  selectedIndex: 0,
  handleClickMenu: () => {
  }
}), Re = ({
  children: r,
  onChangeTab: t,
  defaultTabIndex: n,
  className: o
}) => {
  const [c, l] = D(n), f = {
    selectedIndex: c,
    handleClickMenu: (m) => {
      l(m), t(m);
    }
  }, u = g(
    () => me.toArray(r),
    [r]
  ), p = g(
    () => {
      var m;
      return ((m = u.find((j) => j.type === Et)) == null ? void 0 : m.props.children).map(
        (j, I) => N(j, { key: I, index: I + 1 })
      );
    },
    [u]
  ), b = g(
    () => u.filter((m) => m.type === _t).map(
      (m, j) => N(m, { key: j, index: j + 1 })
    ),
    [u]
  ), P = g(
    () => o ? `${o} ${Ze}` : `${Ze}`,
    [o]
  );
  return /* @__PURE__ */ s.jsx(ye.Provider, { value: f, children: /* @__PURE__ */ s.jsxs("div", { className: P, children: [
    p,
    b
  ] }) });
};
Re.Menu = Lr;
Re.MenuList = Et;
Re.Pannel = _t;
const Wr = ({ totalItemCount: r }) => {
  const [t, n] = D(1);
  return {
    currentIndex: t,
    handleClickNavigator: (l) => {
      const d = t + l;
      if (d <= 0) {
        n(r);
        return;
      }
      if (d > r) {
        n(1);
        return;
      }
      n(d);
    },
    handleClickIndicator: (l) => n(l)
  };
}, kt = ({ children: r }) => /* @__PURE__ */ s.jsx("div", { className: Br, children: r }), Yr = ({ children: r, index: t }) => {
  const { currentIndex: n } = B(ae);
  return /* @__PURE__ */ s.jsx("div", { className: Ir, children: n === t && r });
}, Tt = ({ children: r }) => {
  const { handleClickNavigator: t } = B(ae);
  return r ? r(t) : /* @__PURE__ */ s.jsxs("div", { className: Sr, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: Dr,
        onClick: () => t(-1),
        children: "<"
      }
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: Ar,
        onClick: () => t(1),
        children: ">"
      }
    )
  ] });
}, $t = ({ children: r }) => {
  const { currentIndex: t, totalItemCount: n, handleClickIndicator: o } = B(ae), c = Array.from(
    { length: n },
    (l, d) => d + 1
  );
  return r ? r(c, o) : /* @__PURE__ */ s.jsx("ul", { className: Fr, children: Array.from({ length: n }, (l, d) => d + 1).map((l) => /* @__PURE__ */ s.jsx(
    "li",
    {
      className: Mr,
      "data-isActive": t === l,
      onClick: () => o(l)
    },
    `indicator-item-${l}`
  )) });
}, ae = M({
  currentIndex: 0,
  handleClickNavigator: () => {
  },
  handleClickIndicator: () => {
  },
  totalItemCount: 0
}), se = ({
  children: r,
  totalItemCount: t,
  className: n
}) => {
  const { currentIndex: o, handleClickNavigator: c, handleClickIndicator: l } = Wr({ totalItemCount: t }), d = {
    currentIndex: o,
    handleClickNavigator: c,
    handleClickIndicator: l,
    totalItemCount: t
  }, f = g(
    () => me.toArray(r),
    [r]
  ), u = g(
    () => {
      var m;
      return ((m = f.find((j) => j.type === kt)) == null ? void 0 : m.props.children).map(
        (j, I) => N(j, { key: I, index: I + 1 })
      );
    },
    [f]
  ), p = g(
    () => f.find((m) => m.type === Tt),
    [f]
  ), b = g(
    () => f.find((m) => m.type === $t),
    [f]
  ), P = g(
    () => n ? `${n} ${Qe}` : `${Qe}`,
    [n]
  );
  return /* @__PURE__ */ s.jsx(ae.Provider, { value: d, children: /* @__PURE__ */ s.jsxs("div", { className: P, children: [
    u,
    p,
    b
  ] }) });
};
se.ItemList = kt;
se.Item = Yr;
se.Navigator = Tt;
se.Indicator = $t;
const Vr = ({ children: r, className: t }) => {
  const { currentDate: n } = Pe(), o = g(() => t ? `${t} ${at}` : `${at}`, [t]);
  return r ? r(n) : /* @__PURE__ */ s.jsx("h1", { className: o, children: n.toLocaleDateString() });
}, Nr = ({ children: r }) => {
  const { handleClickNavigate: t } = Pe();
  return r ? r(t) : /* @__PURE__ */ s.jsxs("div", { children: [
    /* @__PURE__ */ s.jsx("button", { onClick: () => t(-1), children: "prev" }),
    /* @__PURE__ */ s.jsx("button", { onClick: () => t(1), children: "next" })
  ] });
}, Ur = ({ children: r, className: t }) => {
  const { currentDate: n, handleClickDate: o } = Pe(), [c, l] = g(() => {
    const u = new Date(
      n.getFullYear(),
      n.getMonth(),
      1
    ), p = new Date(
      n.getFullYear(),
      n.getMonth() + 1,
      0
    ), b = new Date(
      u.getFullYear(),
      u.getMonth(),
      u.getDate() - u.getDay()
    ), P = new Date(
      p.getFullYear(),
      p.getMonth(),
      p.getDate() + (6 - p.getDay())
    );
    return [b, P];
  }, [n]), d = g(() => {
    const u = [];
    let p = new Date(c);
    for (; p <= l; )
      u.push(new Date(p)), p.setDate(p.getDate() + 1);
    return u;
  }, [c, l]), f = g(() => t ? `${t} ${st}` : `${st}`, [t]);
  return r ? r(d, o) : /* @__PURE__ */ s.jsx(s.Fragment, { children: d.map((u, p) => /* @__PURE__ */ s.jsx(
    "p",
    {
      onClick: () => o(u),
      className: f,
      children: u.toLocaleDateString()
    },
    `calendar-item-${p}`
  )) });
}, wt = M({
  currentDate: /* @__PURE__ */ new Date(),
  handleClickNavigate: () => {
  },
  handleClickDate: () => {
  }
}), Pe = () => {
  const r = B(wt);
  if (!r)
    throw Error("check calendarcontext value");
  return r;
}, q = ({
  children: r,
  date: t = /* @__PURE__ */ new Date(),
  onChangeDate: n,
  className: o
}) => {
  const [c, l] = D(t), u = {
    currentDate: c,
    handleClickNavigate: (b) => {
      const P = new Date(
        c.getFullYear(),
        c.getMonth() + b,
        c.getDate()
      );
      l(P), n == null || n(P);
    },
    handleClickDate: (b) => {
      l(new Date(b.toLocaleDateString())), n == null || n(b);
    }
  }, p = g(
    () => o ? `${o} ${ot}` : `${ot}`,
    [o]
  );
  return /* @__PURE__ */ s.jsx(wt.Provider, { value: u, children: /* @__PURE__ */ s.jsx("div", { className: p, children: r }) });
};
q.Current = Vr;
q.Navigator = Nr;
q.Body = Ur;
const be = () => /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx("span", { children: " > " }) }), Gr = ({ children: r, index: t, href: n }) => {
  const o = L(null), {
    handleItemWidth: c,
    totalBreadcrumbCount: l,
    isBreadcrumbOverflow: d,
    width: f
  } = qr(), u = g(() => t !== void 0 && !d ? t < l - 1 : !1, [t, l, d, f]);
  return Q(() => {
    if (!o.current) return;
    const { width: p } = o.current.getBoundingClientRect();
    c(p);
  }, [f]), /* @__PURE__ */ s.jsx("li", { style: { display: "inline-block" }, children: /* @__PURE__ */ s.jsx("a", { href: n, children: /* @__PURE__ */ s.jsxs("span", { ref: o, children: [
    r,
    u && /* @__PURE__ */ s.jsx(be, {})
  ] }) }) });
}, Ot = 500, Bt = M({
  handleItemWidth: () => {
  },
  totalBreadcrumbCount: 0,
  isBreadcrumbOverflow: !1,
  width: Ot
}), qr = () => {
  const r = B(Bt);
  if (!r)
    throw new Error("context 확인 필요");
  return r;
}, Jr = ({
  children: r,
  className: t,
  ellipsisClassName: n,
  width: o = Ot
}) => {
  const c = L(null), [l, d] = D(0), [f, u] = D(), [p, b] = D(!1), P = (k) => {
    d((w) => w + k);
  }, m = g(
    () => me.toArray(r),
    [r]
  ), j = g(() => l > o, [l, o]), I = g(
    () => n ? `${n} ${pt}` : `${pt}`,
    [n]
  ), W = g(() => {
    if (!j) return m;
    const k = /* @__PURE__ */ s.jsxs("span", { onClick: () => b(!0), className: I, children: [
      /* @__PURE__ */ s.jsx(be, {}),
      " ... ",
      /* @__PURE__ */ s.jsx(be, {})
    ] });
    return u(m.slice(1, m.length - 1)), [m[0], k, m[m.length - 1]];
  }, [l, m, j, o]), ee = {
    handleItemWidth: P,
    totalBreadcrumbCount: W.length,
    isBreadcrumbOverflow: j,
    width: o
  }, A = g(
    () => t ? `${t} ${vt}` : `${vt}`,
    [t]
  ), _ = g(
    () => t ? `${t} ${gt}` : `${gt}`,
    [t]
  );
  return /* @__PURE__ */ s.jsxs(Bt.Provider, { value: ee, children: [
    /* @__PURE__ */ s.jsx("nav", { className: A, children: /* @__PURE__ */ s.jsx("ul", { ref: c, className: _, children: W.map(
      (k, w) => N(k, {
        ...k.props,
        key: `breadcrumb-item-${w}`,
        index: w
      })
    ) }) }),
    p && /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("button", { onClick: () => b(!1), children: "x" }),
      /* @__PURE__ */ s.jsx("ul", { children: f == null ? void 0 : f.map(
        (k, w) => N(k, {
          ...k.props,
          key: `dropdown-item-${w}`
        })
      ) })
    ] })
  ] });
};
Jr.Item = Gr;
const Kr = ({ className: r }) => {
  const { currentPage: t, totalPages: n, handleClickButton: o } = St(), c = t - 1, l = t + 1, d = g(
    () => r ? `${r} ${ct}` : `${ct}`,
    [r]
  ), f = g(
    () => r ? `${r} ${lt}` : `${lt}`,
    [r]
  ), u = g(
    () => r ? `${r} ${ut}` : `${ut}`,
    [r]
  );
  return /* @__PURE__ */ s.jsxs("div", { className: d, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: f,
        onClick: () => o(c === 0 ? t : c),
        disabled: t === 1,
        children: "prev"
      }
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: u,
        onClick: () => o(l > n ? t : l),
        disabled: t === n,
        children: "next"
      }
    )
  ] });
}, zr = ({ className: r }) => {
  const { currentPage: t, currentGroupPages: n, handleClickButton: o } = St(), c = g(
    () => r ? `${r} ${dt}` : `${dt}`,
    [r]
  ), l = g(
    () => r ? `${r} ${ft}` : `${ft}`,
    [r]
  );
  return /* @__PURE__ */ s.jsx(
    "ul",
    {
      style: { display: "flex", listStyle: "none" },
      className: c,
      children: n.map((d) => /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
        "button",
        {
          className: l,
          onClick: () => o(d),
          disabled: t === d,
          children: d
        }
      ) }, `pagination-index-button-${d}`))
    }
  );
}, Hr = ({
  currentPage: r,
  indexSize: t,
  totalPages: n,
  onPageChange: o
}) => {
  const [c, l] = g(() => {
    const u = (Math.ceil(r / t) - 1) * t + 1;
    return [u, Math.min(u + t - 1, n)];
  }, [r, t, n]);
  return { currentGroupPages: g(
    () => Array.from(
      { length: l - c + 1 },
      (u, p) => c + p
    ),
    [c, l]
  ), handleClickButton: (u) => o(u) };
}, It = M({
  currentGroupPages: [],
  currentPage: 0,
  totalPages: 0,
  handleClickButton: () => {
  }
}), St = () => {
  const r = B(It);
  if (!r)
    throw new Error("check pagination context");
  return r;
}, Dt = ({
  children: r,
  totalPages: t,
  currentPage: n,
  indexSize: o = 5,
  onPageChange: c,
  className: l
}) => {
  const { currentGroupPages: d, handleClickButton: f } = Hr({
    currentPage: n,
    indexSize: o,
    totalPages: t,
    onPageChange: c
  }), u = {
    currentGroupPages: d,
    currentPage: n,
    totalPages: t,
    handleClickButton: f
  }, p = g(
    () => l ? `${l} ${it}` : `${it}`,
    [l]
  );
  return /* @__PURE__ */ s.jsx(It.Provider, { value: u, children: /* @__PURE__ */ s.jsx("div", { className: p, children: r }) });
};
Dt.Navigator = Kr;
Dt.PageButtons = zr;
const Xr = ({ children: r, className: t }) => {
  const n = g(
    () => t ? `${t} ${tt}` : `${tt}`,
    [t]
  );
  return /* @__PURE__ */ s.jsx("div", { className: n, children: r });
}, Zr = ({
  children: r,
  className: t
}) => {
  const n = g(
    () => t ? `${t} ${rt}` : `${rt}`,
    [t]
  ), { isOpen: o } = B(je);
  return o && /* @__PURE__ */ s.jsx("div", { className: n, children: r });
}, Qr = ({ children: r, className: t }) => {
  const n = g(
    () => t ? `${nt} ${t}` : `${nt}`,
    [t]
  ), { handleClickButton: o } = B(je);
  return /* @__PURE__ */ s.jsx("button", { onClick: o, className: n, children: r });
}, je = M({
  isOpen: !1,
  handleClickButton: () => {
  }
}), Ee = ({
  children: r,
  className: t
}) => {
  const [n, o] = D(!1), l = {
    isOpen: n,
    handleClickButton: () => o(!n)
  }, d = g(
    () => t ? `${t} ${et}` : `${et}`,
    [t]
  );
  return /* @__PURE__ */ s.jsx(je.Provider, { value: l, children: /* @__PURE__ */ s.jsx("div", { className: d, children: r }) });
};
Ee.Title = Xr;
Ee.Content = Zr;
Ee.Button = Qr;
const At = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0
}, en = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0
}, tn = () => {
  const r = L(
    null
  ), [t, n] = D(!1), [o, c] = D(At);
  return {
    triggerRef: r,
    isPopoverOpen: t,
    triggerRect: o,
    handlePopoverVisible: () => n(!t),
    handleTriggerRect: (u) => c(u),
    handleClosePopover: () => n(!1)
  };
}, Ft = M({
  isPopoverOpen: !1,
  triggerRect: At,
  contentPosition: "bottom-center",
  handlePopoverVisible: () => {
  },
  handleTriggerRect: () => {
  },
  triggerRef: { current: null }
}), Mt = () => {
  const r = B(Ft);
  if (!r)
    throw new Error(
      "usePopoverContext should be used within PopoverConetext.Privoder"
    );
  return r;
}, rn = Rr(
  ({ children: r, position: t = "bottom-center" }, n) => {
    const {
      triggerRef: o,
      isPopoverOpen: c,
      triggerRect: l,
      handlePopoverVisible: d,
      handleTriggerRect: f,
      handleClosePopover: u
    } = tn();
    return Pr(n, () => ({
      close: u
    })), /* @__PURE__ */ s.jsx(
      Ft.Provider,
      {
        value: {
          triggerRef: o,
          isPopoverOpen: c,
          triggerRect: l,
          contentPosition: t,
          handlePopoverVisible: d,
          handleTriggerRect: f
        },
        children: r
      }
    );
  }
), nn = (r) => {
  const { contentPosition: t, triggerRect: n, contentRect: o } = r;
  return g(() => {
    switch (t) {
      case "bottom-left":
        return {
          top: n.top + n.height,
          left: n.left
        };
      case "bottom-center":
        return {
          top: n.top + n.height,
          left: n.left + n.width / 2 - o.width / 2
        };
      case "bottom-right":
        return {
          top: n.top + n.height,
          left: n.right
        };
      default:
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
    }
  }, [n, o, t]);
}, on = (r, t = 500) => {
  let n;
  return n && clearTimeout(n), jr(() => {
    n = setTimeout(() => r(), t);
  }, [r, t]);
}, an = ({ children: r, className: t }) => {
  const n = L(null), [o, c] = D(en), {
    triggerRef: l,
    triggerRect: d,
    isPopoverOpen: f,
    contentPosition: u,
    handlePopoverVisible: p,
    handleTriggerRect: b
  } = Mt(), { top: P, right: m, bottom: j, left: I } = nn({
    contentPosition: u,
    triggerRect: d,
    contentRect: o
  }), W = (k) => {
    k.target instanceof Node && n.current && !n.current.contains(k.target) && p();
  }, A = on(() => {
    var w;
    const k = (w = l.current) == null ? void 0 : w.getBoundingClientRect();
    k && b(k);
  });
  Q(() => {
    var w;
    const k = (w = n.current) == null ? void 0 : w.getBoundingClientRect();
    k && c(k);
  }, [f]), Q(() => (document.addEventListener("click", W), window.addEventListener("resize", A), () => {
    window.removeEventListener("resize", A), document.removeEventListener("click", W);
  }), []);
  const _ = g(
    () => t ? `${t} ${Ct}` : `${Ct}`,
    [t]
  );
  return f && xe(
    /* @__PURE__ */ s.jsx(
      "section",
      {
        className: _,
        ref: n,
        style: {
          position: "absolute",
          top: `${P}px`,
          right: `${m}px`,
          bottom: `${j}px`,
          left: `${I}px`,
          zIndex: 100
        },
        children: r
      }
    ),
    document.body
  );
}, sn = ({ children: r, className: t }) => {
  const { handlePopoverVisible: n, handleTriggerRect: o, triggerRef: c } = Mt(), l = (f) => {
    f.stopPropagation(), n();
  };
  Q(() => {
    var u;
    const f = (u = c.current) == null ? void 0 : u.getBoundingClientRect();
    f && o(f);
  }, []);
  const d = g(
    () => t ? `${t} ${ht}` : `${ht}`,
    [t]
  );
  return typeof r == "function" && c.current ? r(c, l) : /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx(
    "button",
    {
      className: d,
      onClick: l,
      ref: c,
      children: r || "trigger"
    }
  ) });
}, J = {
  Root: rn,
  Content: an,
  Trigger: sn
}, mn = ({
  stop: r,
  className: t,
  progressBarClassName: n
}) => {
  const o = L(), c = L(null), l = L(0), d = () => {
    c.current && (c.current.style.display = "none");
  }, f = (b) => {
    if (c.current) {
      if (o.current && (l.current >= 99 || b)) {
        cancelAnimationFrame(o.current);
        const P = c.current;
        P.style.width = "100%", P.style.transition = "0.3s", P.addEventListener("transitionend", d);
        return;
      }
      l.current += 0.25, c.current.style.width = `${l.current}%`, r === !1 && (o.current = requestAnimationFrame(() => f(b)));
    }
  };
  Q(() => {
    if (o.current = requestAnimationFrame(() => f(r)), !!c.current)
      return () => {
        var b;
        o.current && cancelAnimationFrame(o.current), (b = c.current) == null || b.removeEventListener(
          "transitionend",
          d
        );
      };
  }, [r]);
  const u = g(
    () => t ? `${t} ${bt}` : `${bt}`,
    [t]
  ), p = g(
    () => n ? `${n} ${mt}` : `${mt}`,
    [n]
  );
  return /* @__PURE__ */ s.jsx("div", { style: { width: "100%", height: "30px" }, className: u, children: /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: c,
      style: {
        backgroundColor: "#4caf50",
        height: "100%",
        transition: "0.1s"
      },
      className: p
    }
  ) });
}, Lt = M({
  handleClickItem: () => {
  },
  selectedItem: { value: "", label: "" }
}), Wt = () => {
  const r = B(Lt);
  if (!r)
    throw new Error(
      "useSelectContext should be used within SelectContext.Provider"
    );
  return r;
}, cn = ({ children: r, onChangeValue: t, value: n }) => {
  const o = L(null), [c, l] = D(null), d = (f, u) => {
    var p;
    t == null || t(f), l({ value: f, label: u }), (p = o.current) == null || p.close();
  };
  return /* @__PURE__ */ s.jsx(Lt.Provider, { value: { handleClickItem: d, selectedItem: c }, children: /* @__PURE__ */ s.jsx(J.Root, { ref: o, children: r }) });
}, ln = ({ children: r }) => /* @__PURE__ */ s.jsx(J.Content, { children: r }), un = ({ children: r, value: t }) => {
  const { handleClickItem: n } = Wt();
  return /* @__PURE__ */ s.jsx("div", { onClick: () => n(t, r), children: r });
}, dn = ({ children: r = "select" }) => {
  const { selectedItem: t } = Wt();
  return /* @__PURE__ */ s.jsx(J.Trigger, { children: t != null && t.label ? t.label : r });
}, xn = {
  Root: cn,
  Trigger: dn,
  Content: ln,
  Item: un
}, Yt = M({
  isOpen: !1,
  handleTriggerModal: () => {
  }
}), ie = () => {
  const r = B(Yt);
  if (!r)
    throw new Error("ModalContext should be used within ModalContext.Provider");
  return r;
}, fn = ({ children: r, onCloseModal: t, onOpenModal: n, open: o }) => {
  const [c, l] = D(o), d = (f) => {
    l(f);
  };
  return /* @__PURE__ */ s.jsx(
    Yt.Provider,
    {
      value: { isOpen: c, handleTriggerModal: d, onCloseModal: t, onOpenModal: n },
      children: r
    }
  );
}, vn = ({ children: r, className: t }) => {
  const { handleTriggerModal: n, onCloseModal: o, isOpen: c } = ie(), l = g(
    () => t ? `${xt} ${t}` : `${xt}`,
    [t]
  );
  return c && xe(
    /* @__PURE__ */ s.jsx(
      "section",
      {
        className: l,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        },
        onClick: () => {
          o == null || o(), n(!1);
        },
        children: r
      }
    ),
    document.body
  );
}, gn = ({ children: r, className: t }) => {
  const { handleTriggerModal: n, onCloseModal: o } = ie(), c = g(
    () => t ? `${Pt} ${t}` : `${Pt}`,
    [t]
  );
  return r ? N(r, {
    onClick: () => {
      o == null || o(), n(!1);
    }
  }) : /* @__PURE__ */ s.jsx("button", { onClick: () => n(!1), className: c, children: "X" });
}, pn = ({ children: r, className: t }) => {
  const { isOpen: n } = ie(), o = g(
    () => t ? `${Rt} ${t}` : `${Rt}`,
    [t]
  );
  return n && xe(
    /* @__PURE__ */ s.jsx(
      "section",
      {
        className: o,
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          zIndex: 1001
        },
        children: r
      }
    ),
    document.body
  );
}, hn = ({ children: r, className: t }) => {
  const { handleTriggerModal: n, onOpenModal: o } = ie(), c = g(
    () => t ? `${yt} ${t}` : `${yt}`,
    [t]
  );
  return r ? N(r, {
    onClick: () => {
      o == null || o(), n(!0);
    }
  }) : /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx("button", { onClick: () => n(!0), className: c, children: "trigger" }) });
}, yn = {
  Root: fn,
  Content: pn,
  Close: gn,
  Backdrop: vn,
  Trigger: hn
}, Rn = ({ date: r, onChangeDate: t }) => /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsxs(J.Root, { children: [
  /* @__PURE__ */ s.jsx(J.Trigger, { children: (n, o) => /* @__PURE__ */ s.jsx(
    "a",
    {
      style: { backgroundColor: "gray", padding: "8px" },
      ref: n,
      onClick: o,
      children: r.toLocaleString()
    }
  ) }),
  /* @__PURE__ */ s.jsx(J.Content, { children: /* @__PURE__ */ s.jsxs(q, { date: r, onChangeDate: t, children: [
    /* @__PURE__ */ s.jsx(q.Body, {}),
    /* @__PURE__ */ s.jsx(q.Navigator, {})
  ] }) })
] }) });
export {
  Ee as Accordion,
  Jr as Breadcrumb,
  q as Calendar,
  se as Carousel,
  Rn as DatePicker,
  yn as Modal,
  Dt as Pagination,
  J as Popover,
  mn as Progress,
  xn as Select,
  Re as Tabs
};
