const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './index.BHrEMoAl.js',
      './educational.C3JtQ9St.js',
      './educational.C1b2MjXg.css',
      './index.BJbYSw9h.css',
      './index.CVc33UtY.js',
      './index.h3fyQTBv.css',
    ]),
) => i.map((i) => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r)
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === 'childList')
        for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const i = {}
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : r.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function s(r) {
    if (r.ep) return
    r.ep = !0
    const i = n(r)
    fetch(r.href, i)
  }
})()
function is(e) {
  const t = Object.create(null)
  for (const n of e.split(',')) t[n] = 1
  return (n) => n in t
}
const X = {},
  Rt = [],
  je = () => {},
  Rr = () => !1,
  yn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  os = (e) => e.startsWith('onUpdate:'),
  ue = Object.assign,
  ls = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Bi = Object.prototype.hasOwnProperty,
  k = (e, t) => Bi.call(e, t),
  V = Array.isArray,
  Bt = (e) => bn(e) === '[object Map]',
  Vi = (e) => bn(e) === '[object Set]',
  B = (e) => typeof e == 'function',
  re = (e) => typeof e == 'string',
  It = (e) => typeof e == 'symbol',
  te = (e) => e !== null && typeof e == 'object',
  Ar = (e) => (te(e) || B(e)) && B(e.then) && B(e.catch),
  ji = Object.prototype.toString,
  bn = (e) => ji.call(e),
  Ui = (e) => bn(e).slice(8, -1),
  Gi = (e) => bn(e) === '[object Object]',
  cs = (e) => re(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Vt = is(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  En = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  Ki = /-\w/g,
  xe = En((e) => e.replace(Ki, (t) => t.slice(1).toUpperCase())),
  Wi = /\B([A-Z])/g,
  mt = En((e) => e.replace(Wi, '-$1').toLowerCase()),
  xn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  In = En((e) => (e ? `on${xn(e)}` : '')),
  ot = (e, t) => !Object.is(e, t),
  Nn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t)
  },
  Sr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  qi = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Is
const Rn = () =>
  Is ||
  (Is =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function us(e) {
  if (V(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = re(s) ? zi(s) : us(s)
      if (r) for (const i in r) t[i] = r[i]
    }
    return t
  } else if (re(e) || te(e)) return e
}
const ki = /;(?![^(]*\))/g,
  $i = /:([^]+)/,
  Ji = /\/\*[^]*?\*\//g
function zi(e) {
  const t = {}
  return (
    e
      .replace(Ji, '')
      .split(ki)
      .forEach((n) => {
        if (n) {
          const s = n.split($i)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function fs(e) {
  let t = ''
  if (re(e)) t = e
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = fs(e[n])
      s && (t += s + ' ')
    }
  else if (te(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const Qi = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Yi = is(Qi)
function Cr(e) {
  return !!e || e === ''
}
let _e
class Xi {
  constructor(t = !1) {
    ;((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = _e),
      !t && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let t, n
      if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume()
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
    }
  }
  run(t) {
    if (this._active) {
      const n = _e
      try {
        return ((_e = this), t())
      } finally {
        _e = n
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = _e), (_e = this))
  }
  off() {
    this._on > 0 && --this._on === 0 && ((_e = this.prevScope), (this.prevScope = void 0))
  }
  stop(t) {
    if (this._active) {
      this._active = !1
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop()
        r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function Zi() {
  return _e
}
let Y
const Mn = new WeakSet()
class wr {
  constructor(t) {
    ;((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      _e && _e.active && _e.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), Mn.has(this) && (Mn.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Pr(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), Ns(this), Tr(this))
    const t = Y,
      n = Se
    ;((Y = this), (Se = !0))
    try {
      return this.fn()
    } finally {
      ;(Ir(this), (Y = t), (Se = n), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) hs(t)
      ;((this.deps = this.depsTail = void 0),
        Ns(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? Mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Wn(this) && this.run()
  }
  get dirty() {
    return Wn(this)
  }
}
let Or = 0,
  jt,
  Ut
function Pr(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ;((e.next = Ut), (Ut = e))
    return
  }
  ;((e.next = jt), (jt = e))
}
function as() {
  Or++
}
function ds() {
  if (--Or > 0) return
  if (Ut) {
    let t = Ut
    for (Ut = void 0; t; ) {
      const n = t.next
      ;((t.next = void 0), (t.flags &= -9), (t = n))
    }
  }
  let e
  for (; jt; ) {
    let t = jt
    for (jt = void 0; t; ) {
      const n = t.next
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger()
        } catch (s) {
          e || (e = s)
        }
      t = n
    }
  }
  if (e) throw e
}
function Tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1), (t.prevActiveLink = t.dep.activeLink), (t.dep.activeLink = t))
}
function Ir(e) {
  let t,
    n = e.depsTail,
    s = n
  for (; s; ) {
    const r = s.prevDep
    ;(s.version === -1 ? (s === n && (n = r), hs(s), eo(s)) : (t = s),
      (s.dep.activeLink = s.prevActiveLink),
      (s.prevActiveLink = void 0),
      (s = r))
  }
  ;((e.deps = t), (e.depsTail = n))
}
function Wn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Nr(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0
  return !!e._dirty
}
function Nr(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === $t) ||
    ((e.globalVersion = $t), !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Wn(e)))
  )
    return
  e.flags |= 2
  const t = e.dep,
    n = Y,
    s = Se
  ;((Y = e), (Se = !0))
  try {
    Tr(e)
    const r = e.fn(e._value)
    ;(t.version === 0 || ot(r, e._value)) && ((e.flags |= 128), (e._value = r), t.version++)
  } catch (r) {
    throw (t.version++, r)
  } finally {
    ;((Y = n), (Se = s), Ir(e), (e.flags &= -3))
  }
}
function hs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e
  if (
    (s && ((s.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = s), (e.nextSub = void 0)),
    n.subs === e && ((n.subs = s), !s && n.computed))
  ) {
    n.computed.flags &= -5
    for (let i = n.computed.deps; i; i = i.nextDep) hs(i, !0)
  }
  !t && !--n.sc && n.map && n.map.delete(n.key)
}
function eo(e) {
  const { prevDep: t, nextDep: n } = e
  ;(t && ((t.nextDep = n), (e.prevDep = void 0)), n && ((n.prevDep = t), (e.nextDep = void 0)))
}
let Se = !0
const Mr = []
function $e() {
  ;(Mr.push(Se), (Se = !1))
}
function Je() {
  const e = Mr.pop()
  Se = e === void 0 ? !0 : e
}
function Ns(e) {
  const { cleanup: t } = e
  if (((e.cleanup = void 0), t)) {
    const n = Y
    Y = void 0
    try {
      t()
    } finally {
      Y = n
    }
  }
}
let $t = 0
class to {
  constructor(t, n) {
    ;((this.sub = t),
      (this.dep = n),
      (this.version = n.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0))
  }
}
class ps {
  constructor(t) {
    ;((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(t) {
    if (!Y || !Se || Y === this.computed) return
    let n = this.activeLink
    if (n === void 0 || n.sub !== Y)
      ((n = this.activeLink = new to(Y, this)),
        Y.deps
          ? ((n.prevDep = Y.depsTail), (Y.depsTail.nextDep = n), (Y.depsTail = n))
          : (Y.deps = Y.depsTail = n),
        Dr(n))
    else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
      const s = n.nextDep
      ;((s.prevDep = n.prevDep),
        n.prevDep && (n.prevDep.nextDep = s),
        (n.prevDep = Y.depsTail),
        (n.nextDep = void 0),
        (Y.depsTail.nextDep = n),
        (Y.depsTail = n),
        Y.deps === n && (Y.deps = s))
    }
    return n
  }
  trigger(t) {
    ;(this.version++, $t++, this.notify(t))
  }
  notify(t) {
    as()
    try {
      for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
    } finally {
      ds()
    }
  }
}
function Dr(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed
    if (t && !e.dep.subs) {
      t.flags |= 20
      for (let s = t.deps; s; s = s.nextDep) Dr(s)
    }
    const n = e.dep.subs
    ;(n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e))
  }
}
const qn = new WeakMap(),
  gt = Symbol(''),
  kn = Symbol(''),
  Jt = Symbol('')
function oe(e, t, n) {
  if (Se && Y) {
    let s = qn.get(e)
    s || qn.set(e, (s = new Map()))
    let r = s.get(n)
    ;(r || (s.set(n, (r = new ps())), (r.map = s), (r.key = n)), r.track())
  }
}
function ke(e, t, n, s, r, i) {
  const o = qn.get(e)
  if (!o) {
    $t++
    return
  }
  const l = (c) => {
    c && c.trigger()
  }
  if ((as(), t === 'clear')) o.forEach(l)
  else {
    const c = V(e),
      h = c && cs(n)
    if (c && n === 'length') {
      const f = Number(s)
      o.forEach((d, g) => {
        ;(g === 'length' || g === Jt || (!It(g) && g >= f)) && l(d)
      })
    } else
      switch (((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(Jt)), t)) {
        case 'add':
          c ? h && l(o.get('length')) : (l(o.get(gt)), Bt(e) && l(o.get(kn)))
          break
        case 'delete':
          c || (l(o.get(gt)), Bt(e) && l(o.get(kn)))
          break
        case 'set':
          Bt(e) && l(o.get(gt))
          break
      }
  }
  ds()
}
function bt(e) {
  const t = q(e)
  return t === e ? t : (oe(t, 'iterate', Jt), Ce(e) ? t : t.map(ze))
}
function gs(e) {
  return (oe((e = q(e)), 'iterate', Jt), e)
}
function tt(e, t) {
  return lt(e) ? (At(e) ? zt(ze(t)) : zt(t)) : ze(t)
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return Dn(this, Symbol.iterator, (e) => tt(this, e))
  },
  concat(...e) {
    return bt(this).concat(...e.map((t) => (V(t) ? bt(t) : t)))
  },
  entries() {
    return Dn(this, 'entries', (e) => ((e[1] = tt(this, e[1])), e))
  },
  every(e, t) {
    return Ke(this, 'every', e, t, void 0, arguments)
  },
  filter(e, t) {
    return Ke(this, 'filter', e, t, (n) => n.map((s) => tt(this, s)), arguments)
  },
  find(e, t) {
    return Ke(this, 'find', e, t, (n) => tt(this, n), arguments)
  },
  findIndex(e, t) {
    return Ke(this, 'findIndex', e, t, void 0, arguments)
  },
  findLast(e, t) {
    return Ke(this, 'findLast', e, t, (n) => tt(this, n), arguments)
  },
  findLastIndex(e, t) {
    return Ke(this, 'findLastIndex', e, t, void 0, arguments)
  },
  forEach(e, t) {
    return Ke(this, 'forEach', e, t, void 0, arguments)
  },
  includes(...e) {
    return Ln(this, 'includes', e)
  },
  indexOf(...e) {
    return Ln(this, 'indexOf', e)
  },
  join(e) {
    return bt(this).join(e)
  },
  lastIndexOf(...e) {
    return Ln(this, 'lastIndexOf', e)
  },
  map(e, t) {
    return Ke(this, 'map', e, t, void 0, arguments)
  },
  pop() {
    return Dt(this, 'pop')
  },
  push(...e) {
    return Dt(this, 'push', e)
  },
  reduce(e, ...t) {
    return Ms(this, 'reduce', e, t)
  },
  reduceRight(e, ...t) {
    return Ms(this, 'reduceRight', e, t)
  },
  shift() {
    return Dt(this, 'shift')
  },
  some(e, t) {
    return Ke(this, 'some', e, t, void 0, arguments)
  },
  splice(...e) {
    return Dt(this, 'splice', e)
  },
  toReversed() {
    return bt(this).toReversed()
  },
  toSorted(e) {
    return bt(this).toSorted(e)
  },
  toSpliced(...e) {
    return bt(this).toSpliced(...e)
  },
  unshift(...e) {
    return Dt(this, 'unshift', e)
  },
  values() {
    return Dn(this, 'values', (e) => tt(this, e))
  },
}
function Dn(e, t, n) {
  const s = gs(e),
    r = s[t]()
  return (
    s !== e &&
      !Ce(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const i = r._next()
        return (i.done || (i.value = n(i.value)), i)
      })),
    r
  )
}
const so = Array.prototype
function Ke(e, t, n, s, r, i) {
  const o = gs(e),
    l = o !== e && !Ce(e),
    c = o[t]
  if (c !== so[t]) {
    const d = c.apply(e, i)
    return l ? ze(d) : d
  }
  let h = n
  o !== e &&
    (l
      ? (h = function (d, g) {
          return n.call(this, tt(e, d), g, e)
        })
      : n.length > 2 &&
        (h = function (d, g) {
          return n.call(this, d, g, e)
        }))
  const f = c.call(o, h, s)
  return l && r ? r(f) : f
}
function Ms(e, t, n, s) {
  const r = gs(e)
  let i = n
  return (
    r !== e &&
      (Ce(e)
        ? n.length > 3 &&
          (i = function (o, l, c) {
            return n.call(this, o, l, c, e)
          })
        : (i = function (o, l, c) {
            return n.call(this, o, tt(e, l), c, e)
          })),
    r[t](i, ...s)
  )
}
function Ln(e, t, n) {
  const s = q(e)
  oe(s, 'iterate', Jt)
  const r = s[t](...n)
  return (r === -1 || r === !1) && vs(n[0]) ? ((n[0] = q(n[0])), s[t](...n)) : r
}
function Dt(e, t, n = []) {
  ;($e(), as())
  const s = q(e)[t].apply(e, n)
  return (ds(), Je(), s)
}
const ro = is('__proto__,__v_isRef,__isVue'),
  Lr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(It),
  )
function io(e) {
  It(e) || (e = String(e))
  const t = q(this)
  return (oe(t, 'has', e), t.hasOwnProperty(e))
}
class Fr {
  constructor(t = !1, n = !1) {
    ;((this._isReadonly = t), (this._isShallow = n))
  }
  get(t, n, s) {
    if (n === '__v_skip') return t.__v_skip
    const r = this._isReadonly,
      i = this._isShallow
    if (n === '__v_isReactive') return !r
    if (n === '__v_isReadonly') return r
    if (n === '__v_isShallow') return i
    if (n === '__v_raw')
      return s === (r ? (i ? mo : jr) : i ? Vr : Br).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const o = V(t)
    if (!r) {
      let c
      if (o && (c = no[n])) return c
      if (n === 'hasOwnProperty') return io
    }
    const l = Reflect.get(t, n, ce(t) ? t : s)
    if ((It(n) ? Lr.has(n) : ro(n)) || (r || oe(t, 'get', n), i)) return l
    if (ce(l)) {
      const c = o && cs(n) ? l : l.value
      return r && te(c) ? Jn(c) : c
    }
    return te(l) ? (r ? Jn(l) : An(l)) : l
  }
}
class Hr extends Fr {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, r) {
    let i = t[n]
    const o = V(t) && cs(n)
    if (!this._isShallow) {
      const h = lt(i)
      if ((!Ce(s) && !lt(s) && ((i = q(i)), (s = q(s))), !o && ce(i) && !ce(s)))
        return (h || (i.value = s), !0)
    }
    const l = o ? Number(n) < t.length : k(t, n),
      c = Reflect.set(t, n, s, ce(t) ? t : r)
    return (t === q(r) && (l ? ot(s, i) && ke(t, 'set', n, s) : ke(t, 'add', n, s)), c)
  }
  deleteProperty(t, n) {
    const s = k(t, n)
    t[n]
    const r = Reflect.deleteProperty(t, n)
    return (r && s && ke(t, 'delete', n, void 0), r)
  }
  has(t, n) {
    const s = Reflect.has(t, n)
    return ((!It(n) || !Lr.has(n)) && oe(t, 'has', n), s)
  }
  ownKeys(t) {
    return (oe(t, 'iterate', V(t) ? 'length' : gt), Reflect.ownKeys(t))
  }
}
class oo extends Fr {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const lo = new Hr(),
  co = new oo(),
  uo = new Hr(!0)
const $n = (e) => e,
  nn = (e) => Reflect.getPrototypeOf(e)
function fo(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = q(r),
      o = Bt(i),
      l = e === 'entries' || (e === Symbol.iterator && o),
      c = e === 'keys' && o,
      h = r[e](...s),
      f = n ? $n : t ? zt : ze
    return (
      !t && oe(i, 'iterate', c ? kn : gt),
      {
        next() {
          const { value: d, done: g } = h.next()
          return g ? { value: d, done: g } : { value: l ? [f(d[0]), f(d[1])] : f(d), done: g }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function sn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function ao(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw,
        o = q(i),
        l = q(r)
      e || (ot(r, l) && oe(o, 'get', r), oe(o, 'get', l))
      const { has: c } = nn(o),
        h = t ? $n : e ? zt : ze
      if (c.call(o, r)) return h(i.get(r))
      if (c.call(o, l)) return h(i.get(l))
      i !== o && i.get(r)
    },
    get size() {
      const r = this.__v_raw
      return (!e && oe(q(r), 'iterate', gt), r.size)
    },
    has(r) {
      const i = this.__v_raw,
        o = q(i),
        l = q(r)
      return (
        e || (ot(r, l) && oe(o, 'has', r), oe(o, 'has', l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      )
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        c = q(l),
        h = t ? $n : e ? zt : ze
      return (!e && oe(c, 'iterate', gt), l.forEach((f, d) => r.call(i, h(f), h(d), o)))
    },
  }
  return (
    ue(
      n,
      e
        ? { add: sn('add'), set: sn('set'), delete: sn('delete'), clear: sn('clear') }
        : {
            add(r) {
              !t && !Ce(r) && !lt(r) && (r = q(r))
              const i = q(this)
              return (nn(i).has.call(i, r) || (i.add(r), ke(i, 'add', r, r)), this)
            },
            set(r, i) {
              !t && !Ce(i) && !lt(i) && (i = q(i))
              const o = q(this),
                { has: l, get: c } = nn(o)
              let h = l.call(o, r)
              h || ((r = q(r)), (h = l.call(o, r)))
              const f = c.call(o, r)
              return (o.set(r, i), h ? ot(i, f) && ke(o, 'set', r, i) : ke(o, 'add', r, i), this)
            },
            delete(r) {
              const i = q(this),
                { has: o, get: l } = nn(i)
              let c = o.call(i, r)
              ;(c || ((r = q(r)), (c = o.call(i, r))), l && l.call(i, r))
              const h = i.delete(r)
              return (c && ke(i, 'delete', r, void 0), h)
            },
            clear() {
              const r = q(this),
                i = r.size !== 0,
                o = r.clear()
              return (i && ke(r, 'clear', void 0, void 0), o)
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      n[r] = fo(r, e, t)
    }),
    n
  )
}
function ms(e, t) {
  const n = ao(e, t)
  return (s, r, i) =>
    r === '__v_isReactive'
      ? !e
      : r === '__v_isReadonly'
        ? e
        : r === '__v_raw'
          ? s
          : Reflect.get(k(n, r) && r in s ? n : s, r, i)
}
const ho = { get: ms(!1, !1) },
  po = { get: ms(!1, !0) },
  go = { get: ms(!0, !1) }
const Br = new WeakMap(),
  Vr = new WeakMap(),
  jr = new WeakMap(),
  mo = new WeakMap()
function _o(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function vo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _o(Ui(e))
}
function An(e) {
  return lt(e) ? e : _s(e, !1, lo, ho, Br)
}
function Ur(e) {
  return _s(e, !1, uo, po, Vr)
}
function Jn(e) {
  return _s(e, !0, co, go, jr)
}
function _s(e, t, n, s, r) {
  if (!te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const i = vo(e)
  if (i === 0) return e
  const o = r.get(e)
  if (o) return o
  const l = new Proxy(e, i === 2 ? s : n)
  return (r.set(e, l), l)
}
function At(e) {
  return lt(e) ? At(e.__v_raw) : !!(e && e.__v_isReactive)
}
function lt(e) {
  return !!(e && e.__v_isReadonly)
}
function Ce(e) {
  return !!(e && e.__v_isShallow)
}
function vs(e) {
  return e ? !!e.__v_raw : !1
}
function q(e) {
  const t = e && e.__v_raw
  return t ? q(t) : e
}
function yo(e) {
  return (!k(e, '__v_skip') && Object.isExtensible(e) && Sr(e, '__v_skip', !0), e)
}
const ze = (e) => (te(e) ? An(e) : e),
  zt = (e) => (te(e) ? Jn(e) : e)
function ce(e) {
  return e ? e.__v_isRef === !0 : !1
}
function bo(e) {
  return Gr(e, !1)
}
function Eo(e) {
  return Gr(e, !0)
}
function Gr(e, t) {
  return ce(e) ? e : new xo(e, t)
}
class xo {
  constructor(t, n) {
    ;((this.dep = new ps()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = n ? t : q(t)),
      (this._value = n ? t : ze(t)),
      (this.__v_isShallow = n))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(t) {
    const n = this._rawValue,
      s = this.__v_isShallow || Ce(t) || lt(t)
    ;((t = s ? t : q(t)),
      ot(t, n) && ((this._rawValue = t), (this._value = s ? t : ze(t)), this.dep.trigger()))
  }
}
function St(e) {
  return ce(e) ? e.value : e
}
const Ro = {
  get: (e, t, n) => (t === '__v_raw' ? e : St(Reflect.get(e, t, n))),
  set: (e, t, n, s) => {
    const r = e[t]
    return ce(r) && !ce(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s)
  },
}
function Kr(e) {
  return At(e) ? e : new Proxy(e, Ro)
}
class Ao {
  constructor(t, n, s) {
    ;((this.fn = t),
      (this.setter = n),
      (this._value = void 0),
      (this.dep = new ps(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = $t - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !n),
      (this.isSSR = s))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Y !== this)) return (Pr(this, !0), !0)
  }
  get value() {
    const t = this.dep.track()
    return (Nr(this), t && (t.version = this.dep.version), this._value)
  }
  set value(t) {
    this.setter && this.setter(t)
  }
}
function So(e, t, n = !1) {
  let s, r
  return (B(e) ? (s = e) : ((s = e.get), (r = e.set)), new Ao(s, r, n))
}
const rn = {},
  an = new WeakMap()
let ht
function Co(e, t = !1, n = ht) {
  if (n) {
    let s = an.get(n)
    ;(s || an.set(n, (s = [])), s.push(e))
  }
}
function wo(e, t, n = X) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n,
    h = (I) => (r ? I : Ce(I) || r === !1 || r === 0 ? it(I, 1) : it(I))
  let f,
    d,
    g,
    m,
    S = !1,
    O = !1
  if (
    (ce(e)
      ? ((d = () => e.value), (S = Ce(e)))
      : At(e)
        ? ((d = () => h(e)), (S = !0))
        : V(e)
          ? ((O = !0),
            (S = e.some((I) => At(I) || Ce(I))),
            (d = () =>
              e.map((I) => {
                if (ce(I)) return I.value
                if (At(I)) return h(I)
                if (B(I)) return c ? c(I, 2) : I()
              })))
          : B(e)
            ? t
              ? (d = c ? () => c(e, 2) : e)
              : (d = () => {
                  if (g) {
                    $e()
                    try {
                      g()
                    } finally {
                      Je()
                    }
                  }
                  const I = ht
                  ht = f
                  try {
                    return c ? c(e, 3, [m]) : e(m)
                  } finally {
                    ht = I
                  }
                })
            : (d = je),
    t && r)
  ) {
    const I = d,
      z = r === !0 ? 1 / 0 : r
    d = () => it(I(), z)
  }
  const j = Zi(),
    N = () => {
      ;(f.stop(), j && j.active && ls(j.effects, f))
    }
  if (i && t) {
    const I = t
    t = (...z) => {
      ;(I(...z), N())
    }
  }
  let T = O ? new Array(e.length).fill(rn) : rn
  const L = (I) => {
    if (!(!(f.flags & 1) || (!f.dirty && !I)))
      if (t) {
        const z = f.run()
        if (r || S || (O ? z.some((ie, Z) => ot(ie, T[Z])) : ot(z, T))) {
          g && g()
          const ie = ht
          ht = f
          try {
            const Z = [z, T === rn ? void 0 : O && T[0] === rn ? [] : T, m]
            ;((T = z), c ? c(t, 3, Z) : t(...Z))
          } finally {
            ht = ie
          }
        }
      } else f.run()
  }
  return (
    l && l(L),
    (f = new wr(d)),
    (f.scheduler = o ? () => o(L, !1) : L),
    (m = (I) => Co(I, !1, f)),
    (g = f.onStop =
      () => {
        const I = an.get(f)
        if (I) {
          if (c) c(I, 4)
          else for (const z of I) z()
          an.delete(f)
        }
      }),
    t ? (s ? L(!0) : (T = f.run())) : o ? o(L.bind(null, !0), !0) : f.run(),
    (N.pause = f.pause.bind(f)),
    (N.resume = f.resume.bind(f)),
    (N.stop = N),
    N
  )
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || ((n = n || new Map()), (n.get(e) || 0) >= t)) return e
  if ((n.set(e, t), t--, ce(e))) it(e.value, t, n)
  else if (V(e)) for (let s = 0; s < e.length; s++) it(e[s], t, n)
  else if (Vi(e) || Bt(e))
    e.forEach((s) => {
      it(s, t, n)
    })
  else if (Gi(e)) {
    for (const s in e) it(e[s], t, n)
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && it(e[s], t, n)
  }
  return e
}
function en(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (r) {
    Sn(r, t, n)
  }
}
function Ue(e, t, n, s) {
  if (B(e)) {
    const r = en(e, t, n, s)
    return (
      r &&
        Ar(r) &&
        r.catch((i) => {
          Sn(i, t, n)
        }),
      r
    )
  }
  if (V(e)) {
    const r = []
    for (let i = 0; i < e.length; i++) r.push(Ue(e[i], t, n, s))
    return r
  }
}
function Sn(e, t, n, s = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } = (t && t.appContext.config) || X
  if (t) {
    let l = t.parent
    const c = t.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; l; ) {
      const f = l.ec
      if (f) {
        for (let d = 0; d < f.length; d++) if (f[d](e, c, h) === !1) return
      }
      l = l.parent
    }
    if (i) {
      ;($e(), en(i, null, 10, [e, c, h]), Je())
      return
    }
  }
  Oo(e, n, r, s, o)
}
function Oo(e, t, n, s = !0, r = !1) {
  if (r) throw e
  console.error(e)
}
const de = []
let He = -1
const Ct = []
let nt = null,
  Et = 0
const Wr = Promise.resolve()
let dn = null
function qr(e) {
  const t = dn || Wr
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Po(e) {
  let t = He + 1,
    n = de.length
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = de[s],
      i = Qt(r)
    i < e || (i === e && r.flags & 2) ? (t = s + 1) : (n = s)
  }
  return t
}
function ys(e) {
  if (!(e.flags & 1)) {
    const t = Qt(e),
      n = de[de.length - 1]
    ;(!n || (!(e.flags & 2) && t >= Qt(n)) ? de.push(e) : de.splice(Po(t), 0, e),
      (e.flags |= 1),
      kr())
  }
}
function kr() {
  dn || (dn = Wr.then(Jr))
}
function To(e) {
  ;(V(e)
    ? Ct.push(...e)
    : nt && e.id === -1
      ? nt.splice(Et + 1, 0, e)
      : e.flags & 1 || (Ct.push(e), (e.flags |= 1)),
    kr())
}
function Ds(e, t, n = He + 1) {
  for (; n < de.length; n++) {
    const s = de[n]
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid) continue
      ;(de.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2))
    }
  }
}
function $r(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort((n, s) => Qt(n) - Qt(s))
    if (((Ct.length = 0), nt)) {
      nt.push(...t)
      return
    }
    for (nt = t, Et = 0; Et < nt.length; Et++) {
      const n = nt[Et]
      ;(n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), (n.flags &= -2))
    }
    ;((nt = null), (Et = 0))
  }
}
const Qt = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id)
function Jr(e) {
  try {
    for (He = 0; He < de.length; He++) {
      const t = de[He]
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2), en(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
    }
  } finally {
    for (; He < de.length; He++) {
      const t = de[He]
      t && (t.flags &= -2)
    }
    ;((He = -1), (de.length = 0), $r(), (dn = null), (de.length || Ct.length) && Jr())
  }
}
let Ae = null,
  zr = null
function hn(e) {
  const t = Ae
  return ((Ae = e), (zr = (e && e.type.__scopeId) || null), t)
}
function Io(e, t = Ae, n) {
  if (!t || e._n) return e
  const s = (...r) => {
    s._d && mn(-1)
    const i = hn(t)
    let o
    try {
      o = e(...r)
    } finally {
      ;(hn(i), s._d && mn(1))
    }
    return o
  }
  return ((s._n = !0), (s._c = !0), (s._d = !0), s)
}
function at(e, t, n, s) {
  const r = e.dirs,
    i = t && t.dirs
  for (let o = 0; o < r.length; o++) {
    const l = r[o]
    i && (l.oldValue = i[o].value)
    let c = l.dir[s]
    c && ($e(), Ue(c, n, 8, [e.el, l, e, t]), Je())
  }
}
function on(e, t) {
  if (le) {
    let n = le.provides
    const s = le.parent && le.parent.provides
    ;(s === n && (n = le.provides = Object.create(s)), (n[e] = t))
  }
}
function we(e, t, n = !1) {
  const s = Fl()
  if (s || wt) {
    let r = wt
      ? wt._context.provides
      : s
        ? s.parent == null || s.ce
          ? s.vnode.appContext && s.vnode.appContext.provides
          : s.parent.provides
        : void 0
    if (r && e in r) return r[e]
    if (arguments.length > 1) return n && B(t) ? t.call(s && s.proxy) : t
  }
}
const No = Symbol.for('v-scx'),
  Mo = () => we(No)
function ln(e, t, n) {
  return Qr(e, t, n)
}
function Qr(e, t, n = X) {
  const { immediate: s, deep: r, flush: i, once: o } = n,
    l = ue({}, n),
    c = (t && s) || (!t && i !== 'post')
  let h
  if (Xt) {
    if (i === 'sync') {
      const m = Mo()
      h = m.__watcherHandles || (m.__watcherHandles = [])
    } else if (!c) {
      const m = () => {}
      return ((m.stop = je), (m.resume = je), (m.pause = je), m)
    }
  }
  const f = le
  l.call = (m, S, O) => Ue(m, f, S, O)
  let d = !1
  ;(i === 'post'
    ? (l.scheduler = (m) => {
        ye(m, f && f.suspense)
      })
    : i !== 'sync' &&
      ((d = !0),
      (l.scheduler = (m, S) => {
        S ? m() : ys(m)
      })),
    (l.augmentJob = (m) => {
      ;(t && (m.flags |= 4), d && ((m.flags |= 2), f && ((m.id = f.uid), (m.i = f))))
    }))
  const g = wo(e, t, l)
  return (Xt && (h ? h.push(g) : c && g()), g)
}
function Do(e, t, n) {
  const s = this.proxy,
    r = re(e) ? (e.includes('.') ? Yr(s, e) : () => s[e]) : e.bind(s, s)
  let i
  B(t) ? (i = t) : ((i = t.handler), (n = t))
  const o = tn(this),
    l = Qr(r, i.bind(s), n)
  return (o(), l)
}
function Yr(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let r = 0; r < n.length && s; r++) s = s[n[r]]
    return s
  }
}
const Lo = Symbol('_vte'),
  Fo = (e) => e.__isTeleport,
  Ho = Symbol('_leaveCb')
function bs(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), bs(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
function Es(e, t) {
  return B(e) ? ue({ name: e.name }, t, { setup: e }) : e
}
function Xr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0]
}
const pn = new WeakMap()
function Gt(e, t, n, s, r = !1) {
  if (V(e)) {
    e.forEach((S, O) => Gt(S, t && (V(t) ? t[O] : t), n, s, r))
    return
  }
  if (Kt(s) && !r) {
    s.shapeFlag & 512 &&
      s.type.__asyncResolved &&
      s.component.subTree.component &&
      Gt(e, t, n, s.component.subTree)
    return
  }
  const i = s.shapeFlag & 4 ? Ss(s.component) : s.el,
    o = r ? null : i,
    { i: l, r: c } = e,
    h = t && t.r,
    f = l.refs === X ? (l.refs = {}) : l.refs,
    d = l.setupState,
    g = q(d),
    m = d === X ? Rr : (S) => k(g, S)
  if (h != null && h !== c) {
    if ((Ls(t), re(h))) ((f[h] = null), m(h) && (d[h] = null))
    else if (ce(h)) {
      h.value = null
      const S = t
      S.k && (f[S.k] = null)
    }
  }
  if (B(c)) en(c, l, 12, [o, f])
  else {
    const S = re(c),
      O = ce(c)
    if (S || O) {
      const j = () => {
        if (e.f) {
          const N = S ? (m(c) ? d[c] : f[c]) : c.value
          if (r) V(N) && ls(N, i)
          else if (V(N)) N.includes(i) || N.push(i)
          else if (S) ((f[c] = [i]), m(c) && (d[c] = f[c]))
          else {
            const T = [i]
            ;((c.value = T), e.k && (f[e.k] = T))
          }
        } else S ? ((f[c] = o), m(c) && (d[c] = o)) : O && ((c.value = o), e.k && (f[e.k] = o))
      }
      if (o) {
        const N = () => {
          ;(j(), pn.delete(e))
        }
        ;((N.id = -1), pn.set(e, N), ye(N, n))
      } else (Ls(e), j())
    }
  }
}
function Ls(e) {
  const t = pn.get(e)
  t && ((t.flags |= 8), pn.delete(e))
}
Rn().requestIdleCallback
Rn().cancelIdleCallback
const Kt = (e) => !!e.type.__asyncLoader,
  Zr = (e) => e.type.__isKeepAlive
function Bo(e, t) {
  ei(e, 'a', t)
}
function Vo(e, t) {
  ei(e, 'da', t)
}
function ei(e, t, n = le) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n
      for (; r; ) {
        if (r.isDeactivated) return
        r = r.parent
      }
      return e()
    })
  if ((Cn(t, s, n), n)) {
    let r = n.parent
    for (; r && r.parent; ) (Zr(r.parent.vnode) && jo(s, t, n, r), (r = r.parent))
  }
}
function jo(e, t, n, s) {
  const r = Cn(t, e, s, !0)
  ti(() => {
    ls(s[t], r)
  }, n)
}
function Cn(e, t, n = le, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          $e()
          const l = tn(n),
            c = Ue(t, n, e, o)
          return (l(), Je(), c)
        })
    return (s ? r.unshift(i) : r.push(i), i)
  }
}
const Qe =
    (e) =>
    (t, n = le) => {
      ;(!Xt || e === 'sp') && Cn(e, (...s) => t(...s), n)
    },
  Uo = Qe('bm'),
  Go = Qe('m'),
  Ko = Qe('bu'),
  Wo = Qe('u'),
  qo = Qe('bum'),
  ti = Qe('um'),
  ko = Qe('sp'),
  $o = Qe('rtg'),
  Jo = Qe('rtc')
function zo(e, t = le) {
  Cn('ec', e, t)
}
const Qo = 'components'
function Yo(e, t) {
  return Zo(Qo, e, !0, t) || e
}
const Xo = Symbol.for('v-ndc')
function Zo(e, t, n = !0, s = !1) {
  const r = Ae || le
  if (r) {
    const i = r.type
    {
      const l = Ul(i, !1)
      if (l && (l === t || l === xe(t) || l === xn(xe(t)))) return i
    }
    const o = Fs(r[e] || i[e], t) || Fs(r.appContext[e], t)
    return !o && s ? i : o
  }
}
function Fs(e, t) {
  return e && (e[t] || e[xe(t)] || e[xn(xe(t))])
}
const zn = (e) => (e ? (xi(e) ? Ss(e) : zn(e.parent)) : null),
  Wt = ue(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zn(e.parent),
    $root: (e) => zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => si(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ys(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = qr.bind(e.proxy)),
    $watch: (e) => Do.bind(e),
  }),
  Fn = (e, t) => e !== X && !e.__isScriptSetup && k(e, t),
  el = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e
      if (t[0] !== '$') {
        const g = o[t]
        if (g !== void 0)
          switch (g) {
            case 1:
              return s[t]
            case 2:
              return r[t]
            case 4:
              return n[t]
            case 3:
              return i[t]
          }
        else {
          if (Fn(s, t)) return ((o[t] = 1), s[t])
          if (r !== X && k(r, t)) return ((o[t] = 2), r[t])
          if (k(i, t)) return ((o[t] = 3), i[t])
          if (n !== X && k(n, t)) return ((o[t] = 4), n[t])
          Qn && (o[t] = 0)
        }
      }
      const h = Wt[t]
      let f, d
      if (h) return (t === '$attrs' && oe(e.attrs, 'get', ''), h(e))
      if ((f = l.__cssModules) && (f = f[t])) return f
      if (n !== X && k(n, t)) return ((o[t] = 4), n[t])
      if (((d = c.config.globalProperties), k(d, t))) return d[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e
      return Fn(r, t)
        ? ((r[t] = n), !0)
        : s !== X && k(s, t)
          ? ((s[t] = n), !0)
          : k(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((i[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o } },
      l,
    ) {
      let c
      return !!(
        n[l] ||
        (e !== X && l[0] !== '$' && k(e, l)) ||
        Fn(t, l) ||
        k(i, l) ||
        k(s, l) ||
        k(Wt, l) ||
        k(r.config.globalProperties, l) ||
        ((c = o.__cssModules) && c[l])
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : k(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function Hs(e) {
  return V(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let Qn = !0
function tl(e) {
  const t = si(e),
    n = e.proxy,
    s = e.ctx
  ;((Qn = !1), t.beforeCreate && Bs(t.beforeCreate, e, 'bc'))
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: h,
    created: f,
    beforeMount: d,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: O,
    deactivated: j,
    beforeDestroy: N,
    beforeUnmount: T,
    destroyed: L,
    unmounted: I,
    render: z,
    renderTracked: ie,
    renderTriggered: Z,
    errorCaptured: Pe,
    serverPrefetch: Ye,
    expose: Te,
    inheritAttrs: Xe,
    components: ut,
    directives: Ie,
    filters: Nt,
  } = t
  if ((h && nl(h, s, null), o))
    for (const J in o) {
      const K = o[J]
      B(K) && (s[J] = K.bind(n))
    }
  if (r) {
    const J = r.call(n, n)
    te(J) && (e.data = An(J))
  }
  if (((Qn = !0), i))
    for (const J in i) {
      const K = i[J],
        Ge = B(K) ? K.bind(n, n) : B(K.get) ? K.get.bind(n, n) : je,
        Ze = !B(K) && B(K.set) ? K.set.bind(n) : je,
        Ne = Re({ get: Ge, set: Ze })
      Object.defineProperty(s, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (pe) => (Ne.value = pe),
      })
    }
  if (l) for (const J in l) ni(l[J], s, n, J)
  if (c) {
    const J = B(c) ? c.call(n) : c
    Reflect.ownKeys(J).forEach((K) => {
      on(K, J[K])
    })
  }
  f && Bs(f, e, 'c')
  function se(J, K) {
    V(K) ? K.forEach((Ge) => J(Ge.bind(n))) : K && J(K.bind(n))
  }
  if (
    (se(Uo, d),
    se(Go, g),
    se(Ko, m),
    se(Wo, S),
    se(Bo, O),
    se(Vo, j),
    se(zo, Pe),
    se(Jo, ie),
    se($o, Z),
    se(qo, T),
    se(ti, I),
    se(ko, Ye),
    V(Te))
  )
    if (Te.length) {
      const J = e.exposed || (e.exposed = {})
      Te.forEach((K) => {
        Object.defineProperty(J, K, { get: () => n[K], set: (Ge) => (n[K] = Ge), enumerable: !0 })
      })
    } else e.exposed || (e.exposed = {})
  ;(z && e.render === je && (e.render = z),
    Xe != null && (e.inheritAttrs = Xe),
    ut && (e.components = ut),
    Ie && (e.directives = Ie),
    Ye && Xr(e))
}
function nl(e, t, n = je) {
  V(e) && (e = Yn(e))
  for (const s in e) {
    const r = e[s]
    let i
    ;(te(r)
      ? 'default' in r
        ? (i = we(r.from || s, r.default, !0))
        : (i = we(r.from || s))
      : (i = we(r)),
      ce(i)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (t[s] = i))
  }
}
function Bs(e, t, n) {
  Ue(V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ni(e, t, n, s) {
  let r = s.includes('.') ? Yr(n, s) : () => n[s]
  if (re(e)) {
    const i = t[e]
    B(i) && ln(r, i)
  } else if (B(e)) ln(r, e.bind(n))
  else if (te(e))
    if (V(e)) e.forEach((i) => ni(i, t, n, s))
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler]
      B(i) && ln(r, i, e)
    }
}
function si(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t)
  let c
  return (
    l
      ? (c = l)
      : !r.length && !n && !s
        ? (c = t)
        : ((c = {}), r.length && r.forEach((h) => gn(c, h, o, !0)), gn(c, t, o)),
    te(t) && i.set(t, c),
    c
  )
}
function gn(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t
  ;(i && gn(e, i, n, !0), r && r.forEach((o) => gn(e, o, n, !0)))
  for (const o in t)
    if (!(s && o === 'expose')) {
      const l = sl[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const sl = {
  data: Vs,
  props: js,
  emits: js,
  methods: Ht,
  computed: Ht,
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  components: Ht,
  directives: Ht,
  watch: il,
  provide: Vs,
  inject: rl,
}
function Vs(e, t) {
  return t
    ? e
      ? function () {
          return ue(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function rl(e, t) {
  return Ht(Yn(e), Yn(t))
}
function Yn(e) {
  if (V(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Ht(e, t) {
  return e ? ue(Object.create(null), e, t) : t
}
function js(e, t) {
  return e
    ? V(e) && V(t)
      ? [...new Set([...e, ...t])]
      : ue(Object.create(null), Hs(e), Hs(t ?? {}))
    : t
}
function il(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ue(Object.create(null), e)
  for (const s in t) n[s] = fe(e[s], t[s])
  return n
}
function ri() {
  return {
    app: null,
    config: {
      isNativeTag: Rr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let ol = 0
function ll(e, t) {
  return function (s, r = null) {
    ;(B(s) || (s = ue({}, s)), r != null && !te(r) && (r = null))
    const i = ri(),
      o = new WeakSet(),
      l = []
    let c = !1
    const h = (i.app = {
      _uid: ol++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Kl,
      get config() {
        return i.config
      },
      set config(f) {},
      use(f, ...d) {
        return (
          o.has(f) ||
            (f && B(f.install) ? (o.add(f), f.install(h, ...d)) : B(f) && (o.add(f), f(h, ...d))),
          h
        )
      },
      mixin(f) {
        return (i.mixins.includes(f) || i.mixins.push(f), h)
      },
      component(f, d) {
        return d ? ((i.components[f] = d), h) : i.components[f]
      },
      directive(f, d) {
        return d ? ((i.directives[f] = d), h) : i.directives[f]
      },
      mount(f, d, g) {
        if (!c) {
          const m = h._ceVNode || he(s, r)
          return (
            (m.appContext = i),
            g === !0 ? (g = 'svg') : g === !1 && (g = void 0),
            e(m, f, g),
            (c = !0),
            (h._container = f),
            (f.__vue_app__ = h),
            Ss(m.component)
          )
        }
      },
      onUnmount(f) {
        l.push(f)
      },
      unmount() {
        c && (Ue(l, h._instance, 16), e(null, h._container), delete h._container.__vue_app__)
      },
      provide(f, d) {
        return ((i.provides[f] = d), h)
      },
      runWithContext(f) {
        const d = wt
        wt = h
        try {
          return f()
        } finally {
          wt = d
        }
      },
    })
    return h
  }
}
let wt = null
const cl = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${xe(t)}Modifiers`] || e[`${mt(t)}Modifiers`]
function ul(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || X
  let r = n
  const i = t.startsWith('update:'),
    o = i && cl(s, t.slice(7))
  o && (o.trim && (r = n.map((f) => (re(f) ? f.trim() : f))), o.number && (r = n.map(qi)))
  let l,
    c = s[(l = In(t))] || s[(l = In(xe(t)))]
  ;(!c && i && (c = s[(l = In(mt(t)))]), c && Ue(c, e, 6, r))
  const h = s[l + 'Once']
  if (h) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;((e.emitted[l] = !0), Ue(h, e, 6, r))
  }
}
const fl = new WeakMap()
function ii(e, t, n = !1) {
  const s = n ? fl : t.emitsCache,
    r = s.get(e)
  if (r !== void 0) return r
  const i = e.emits
  let o = {},
    l = !1
  if (!B(e)) {
    const c = (h) => {
      const f = ii(h, t, !0)
      f && ((l = !0), ue(o, f))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c))
  }
  return !i && !l
    ? (te(e) && s.set(e, null), null)
    : (V(i) ? i.forEach((c) => (o[c] = null)) : ue(o, i), te(e) && s.set(e, o), o)
}
function wn(e, t) {
  return !e || !yn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      k(e, t[0].toLowerCase() + t.slice(1)) || k(e, mt(t)) || k(e, t))
}
function Us(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: c,
      render: h,
      renderCache: f,
      props: d,
      data: g,
      setupState: m,
      ctx: S,
      inheritAttrs: O,
    } = e,
    j = hn(e)
  let N, T
  try {
    if (n.shapeFlag & 4) {
      const I = r || s,
        z = I
      ;((N = Ve(h.call(z, I, f, d, m, g, S))), (T = l))
    } else {
      const I = t
      ;((N = Ve(I.length > 1 ? I(d, { attrs: l, slots: o, emit: c }) : I(d, null))),
        (T = t.props ? l : al(l)))
    }
  } catch (I) {
    ;((qt.length = 0), Sn(I, e, 1), (N = he(ct)))
  }
  let L = N
  if (T && O !== !1) {
    const I = Object.keys(T),
      { shapeFlag: z } = L
    I.length && z & 7 && (i && I.some(os) && (T = dl(T, i)), (L = Ot(L, T, !1, !0)))
  }
  return (
    n.dirs && ((L = Ot(L, null, !1, !0)), (L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs)),
    n.transition && bs(L, n.transition),
    (N = L),
    hn(j),
    N
  )
}
const al = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || yn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  dl = (e, t) => {
    const n = {}
    for (const s in e) (!os(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function hl(e, t, n) {
  const { props: s, children: r, component: i } = e,
    { props: o, children: l, patchFlag: c } = t,
    h = i.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? Gs(s, o, h) : !!o
    if (c & 8) {
      const f = t.dynamicProps
      for (let d = 0; d < f.length; d++) {
        const g = f[d]
        if (o[g] !== s[g] && !wn(h, g)) return !0
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? (o ? Gs(s, o, h) : !0) : !!o
  return !1
}
function Gs(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let r = 0; r < s.length; r++) {
    const i = s[r]
    if (t[i] !== e[i] && !wn(n, i)) return !0
  }
  return !1
}
function pl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      (((e = t.vnode).el = n), (t = t.parent))
    else break
  }
}
const oi = {},
  li = () => Object.create(oi),
  ci = (e) => Object.getPrototypeOf(e) === oi
function gl(e, t, n, s = !1) {
  const r = {},
    i = li()
  ;((e.propsDefaults = Object.create(null)), ui(e, t, r, i))
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0)
  ;(n ? (e.props = s ? r : Ur(r)) : e.type.props ? (e.props = r) : (e.props = i), (e.attrs = i))
}
function ml(e, t, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = e,
    l = q(r),
    [c] = e.propsOptions
  let h = !1
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const f = e.vnode.dynamicProps
      for (let d = 0; d < f.length; d++) {
        let g = f[d]
        if (wn(e.emitsOptions, g)) continue
        const m = t[g]
        if (c)
          if (k(i, g)) m !== i[g] && ((i[g] = m), (h = !0))
          else {
            const S = xe(g)
            r[S] = Xn(c, l, S, m, e, !1)
          }
        else m !== i[g] && ((i[g] = m), (h = !0))
      }
    }
  } else {
    ui(e, t, r, i) && (h = !0)
    let f
    for (const d in l)
      (!t || (!k(t, d) && ((f = mt(d)) === d || !k(t, f)))) &&
        (c
          ? n && (n[d] !== void 0 || n[f] !== void 0) && (r[d] = Xn(c, l, d, void 0, e, !0))
          : delete r[d])
    if (i !== l) for (const d in i) (!t || !k(t, d)) && (delete i[d], (h = !0))
  }
  h && ke(e.attrs, 'set', '')
}
function ui(e, t, n, s) {
  const [r, i] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let c in t) {
      if (Vt(c)) continue
      const h = t[c]
      let f
      r && k(r, (f = xe(c)))
        ? !i || !i.includes(f)
          ? (n[f] = h)
          : ((l || (l = {}))[f] = h)
        : wn(e.emitsOptions, c) || ((!(c in s) || h !== s[c]) && ((s[c] = h), (o = !0)))
    }
  if (i) {
    const c = q(n),
      h = l || X
    for (let f = 0; f < i.length; f++) {
      const d = i[f]
      n[d] = Xn(r, c, d, h[d], e, !k(h, d))
    }
  }
  return o
}
function Xn(e, t, n, s, r, i) {
  const o = e[n]
  if (o != null) {
    const l = k(o, 'default')
    if (l && s === void 0) {
      const c = o.default
      if (o.type !== Function && !o.skipFactory && B(c)) {
        const { propsDefaults: h } = r
        if (n in h) s = h[n]
        else {
          const f = tn(r)
          ;((s = h[n] = c.call(null, t)), f())
        }
      } else s = c
      r.ce && r.ce._setProp(n, s)
    }
    o[0] && (i && !l ? (s = !1) : o[1] && (s === '' || s === mt(n)) && (s = !0))
  }
  return s
}
const _l = new WeakMap()
function fi(e, t, n = !1) {
  const s = n ? _l : t.propsCache,
    r = s.get(e)
  if (r) return r
  const i = e.props,
    o = {},
    l = []
  let c = !1
  if (!B(e)) {
    const f = (d) => {
      c = !0
      const [g, m] = fi(d, t, !0)
      ;(ue(o, g), m && l.push(...m))
    }
    ;(!n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f))
  }
  if (!i && !c) return (te(e) && s.set(e, Rt), Rt)
  if (V(i))
    for (let f = 0; f < i.length; f++) {
      const d = xe(i[f])
      Ks(d) && (o[d] = X)
    }
  else if (i)
    for (const f in i) {
      const d = xe(f)
      if (Ks(d)) {
        const g = i[f],
          m = (o[d] = V(g) || B(g) ? { type: g } : ue({}, g)),
          S = m.type
        let O = !1,
          j = !0
        if (V(S))
          for (let N = 0; N < S.length; ++N) {
            const T = S[N],
              L = B(T) && T.name
            if (L === 'Boolean') {
              O = !0
              break
            } else L === 'String' && (j = !1)
          }
        else O = B(S) && S.name === 'Boolean'
        ;((m[0] = O), (m[1] = j), (O || k(m, 'default')) && l.push(d))
      }
    }
  const h = [o, l]
  return (te(e) && s.set(e, h), h)
}
function Ks(e) {
  return e[0] !== '$' && !Vt(e)
}
const xs = (e) => e === '_' || e === '_ctx' || e === '$stable',
  Rs = (e) => (V(e) ? e.map(Ve) : [Ve(e)]),
  vl = (e, t, n) => {
    if (t._n) return t
    const s = Io((...r) => Rs(t(...r)), n)
    return ((s._c = !1), s)
  },
  ai = (e, t, n) => {
    const s = e._ctx
    for (const r in e) {
      if (xs(r)) continue
      const i = e[r]
      if (B(i)) t[r] = vl(r, i, s)
      else if (i != null) {
        const o = Rs(i)
        t[r] = () => o
      }
    }
  },
  di = (e, t) => {
    const n = Rs(t)
    e.slots.default = () => n
  },
  hi = (e, t, n) => {
    for (const s in t) (n || !xs(s)) && (e[s] = t[s])
  },
  yl = (e, t, n) => {
    const s = (e.slots = li())
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? (hi(s, t, n), n && Sr(s, '_', r, !0)) : ai(t, s)
    } else t && di(e, t)
  },
  bl = (e, t, n) => {
    const { vnode: s, slots: r } = e
    let i = !0,
      o = X
    if (s.shapeFlag & 32) {
      const l = t._
      ;(l ? (n && l === 1 ? (i = !1) : hi(r, t, n)) : ((i = !t.$stable), ai(t, r)), (o = t))
    } else t && (di(e, t), (o = { default: 1 }))
    if (i) for (const l in r) !xs(l) && o[l] == null && delete r[l]
  },
  ye = Sl
function El(e) {
  return xl(e)
}
function xl(e, t) {
  const n = Rn()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: c,
      setText: h,
      setElementText: f,
      parentNode: d,
      nextSibling: g,
      setScopeId: m = je,
      insertStaticContent: S,
    } = e,
    O = (u, a, p, _ = null, b = null, v = null, A = void 0, R = null, x = !!a.dynamicChildren) => {
      if (u === a) return
      ;(u && !Lt(u, a) && ((_ = y(u)), pe(u, b, v, !0), (u = null)),
        a.patchFlag === -2 && ((x = !1), (a.dynamicChildren = null)))
      const { type: E, ref: F, shapeFlag: w } = a
      switch (E) {
        case On:
          j(u, a, p, _)
          break
        case ct:
          N(u, a, p, _)
          break
        case cn:
          u == null && T(a, p, _, A)
          break
        case Be:
          ut(u, a, p, _, b, v, A, R, x)
          break
        default:
          w & 1
            ? z(u, a, p, _, b, v, A, R, x)
            : w & 6
              ? Ie(u, a, p, _, b, v, A, R, x)
              : (w & 64 || w & 128) && E.process(u, a, p, _, b, v, A, R, x, M)
      }
      F != null && b
        ? Gt(F, u && u.ref, v, a || u, !a)
        : F == null && u && u.ref != null && Gt(u.ref, null, v, u, !0)
    },
    j = (u, a, p, _) => {
      if (u == null) s((a.el = l(a.children)), p, _)
      else {
        const b = (a.el = u.el)
        a.children !== u.children && h(b, a.children)
      }
    },
    N = (u, a, p, _) => {
      u == null ? s((a.el = c(a.children || '')), p, _) : (a.el = u.el)
    },
    T = (u, a, p, _) => {
      ;[u.el, u.anchor] = S(u.children, a, p, _, u.el, u.anchor)
    },
    L = ({ el: u, anchor: a }, p, _) => {
      let b
      for (; u && u !== a; ) ((b = g(u)), s(u, p, _), (u = b))
      s(a, p, _)
    },
    I = ({ el: u, anchor: a }) => {
      let p
      for (; u && u !== a; ) ((p = g(u)), r(u), (u = p))
      r(a)
    },
    z = (u, a, p, _, b, v, A, R, x) => {
      if ((a.type === 'svg' ? (A = 'svg') : a.type === 'math' && (A = 'mathml'), u == null))
        ie(a, p, _, b, v, A, R, x)
      else {
        const E = u.el && u.el._isVueCE ? u.el : null
        try {
          ;(E && E._beginPatch(), Ye(u, a, b, v, A, R, x))
        } finally {
          E && E._endPatch()
        }
      }
    },
    ie = (u, a, p, _, b, v, A, R) => {
      let x, E
      const { props: F, shapeFlag: w, transition: D, dirs: H } = u
      if (
        ((x = u.el = o(u.type, v, F && F.is, F)),
        w & 8 ? f(x, u.children) : w & 16 && Pe(u.children, x, null, _, b, Hn(u, v), A, R),
        H && at(u, null, _, 'created'),
        Z(x, u, u.scopeId, A, _),
        F)
      ) {
        for (const Q in F) Q !== 'value' && !Vt(Q) && i(x, Q, null, F[Q], v, _)
        ;('value' in F && i(x, 'value', null, F.value, v),
          (E = F.onVnodeBeforeMount) && Fe(E, _, u))
      }
      H && at(u, null, _, 'beforeMount')
      const G = Rl(b, D)
      ;(G && D.beforeEnter(x),
        s(x, a, p),
        ((E = F && F.onVnodeMounted) || G || H) &&
          ye(() => {
            ;(E && Fe(E, _, u), G && D.enter(x), H && at(u, null, _, 'mounted'))
          }, b))
    },
    Z = (u, a, p, _, b) => {
      if ((p && m(u, p), _)) for (let v = 0; v < _.length; v++) m(u, _[v])
      if (b) {
        let v = b.subTree
        if (a === v || (_i(v.type) && (v.ssContent === a || v.ssFallback === a))) {
          const A = b.vnode
          Z(u, A, A.scopeId, A.slotScopeIds, b.parent)
        }
      }
    },
    Pe = (u, a, p, _, b, v, A, R, x = 0) => {
      for (let E = x; E < u.length; E++) {
        const F = (u[E] = R ? st(u[E]) : Ve(u[E]))
        O(null, F, a, p, _, b, v, A, R)
      }
    },
    Ye = (u, a, p, _, b, v, A) => {
      const R = (a.el = u.el)
      let { patchFlag: x, dynamicChildren: E, dirs: F } = a
      x |= u.patchFlag & 16
      const w = u.props || X,
        D = a.props || X
      let H
      if (
        (p && dt(p, !1),
        (H = D.onVnodeBeforeUpdate) && Fe(H, p, a, u),
        F && at(a, u, p, 'beforeUpdate'),
        p && dt(p, !0),
        ((w.innerHTML && D.innerHTML == null) || (w.textContent && D.textContent == null)) &&
          f(R, ''),
        E
          ? Te(u.dynamicChildren, E, R, p, _, Hn(a, b), v)
          : A || K(u, a, R, null, p, _, Hn(a, b), v, !1),
        x > 0)
      ) {
        if (x & 16) Xe(R, w, D, p, b)
        else if (
          (x & 2 && w.class !== D.class && i(R, 'class', null, D.class, b),
          x & 4 && i(R, 'style', w.style, D.style, b),
          x & 8)
        ) {
          const G = a.dynamicProps
          for (let Q = 0; Q < G.length; Q++) {
            const $ = G[Q],
              ge = w[$],
              me = D[$]
            ;(me !== ge || $ === 'value') && i(R, $, ge, me, b, p)
          }
        }
        x & 1 && u.children !== a.children && f(R, a.children)
      } else !A && E == null && Xe(R, w, D, p, b)
      ;((H = D.onVnodeUpdated) || F) &&
        ye(() => {
          ;(H && Fe(H, p, a, u), F && at(a, u, p, 'updated'))
        }, _)
    },
    Te = (u, a, p, _, b, v, A) => {
      for (let R = 0; R < a.length; R++) {
        const x = u[R],
          E = a[R],
          F = x.el && (x.type === Be || !Lt(x, E) || x.shapeFlag & 198) ? d(x.el) : p
        O(x, E, F, null, _, b, v, A, !0)
      }
    },
    Xe = (u, a, p, _, b) => {
      if (a !== p) {
        if (a !== X) for (const v in a) !Vt(v) && !(v in p) && i(u, v, a[v], null, b, _)
        for (const v in p) {
          if (Vt(v)) continue
          const A = p[v],
            R = a[v]
          A !== R && v !== 'value' && i(u, v, R, A, b, _)
        }
        'value' in p && i(u, 'value', a.value, p.value, b)
      }
    },
    ut = (u, a, p, _, b, v, A, R, x) => {
      const E = (a.el = u ? u.el : l('')),
        F = (a.anchor = u ? u.anchor : l(''))
      let { patchFlag: w, dynamicChildren: D, slotScopeIds: H } = a
      ;(H && (R = R ? R.concat(H) : H),
        u == null
          ? (s(E, p, _), s(F, p, _), Pe(a.children || [], p, F, b, v, A, R, x))
          : w > 0 && w & 64 && D && u.dynamicChildren && u.dynamicChildren.length === D.length
            ? (Te(u.dynamicChildren, D, p, b, v, A, R),
              (a.key != null || (b && a === b.subTree)) && pi(u, a, !0))
            : K(u, a, p, F, b, v, A, R, x))
    },
    Ie = (u, a, p, _, b, v, A, R, x) => {
      ;((a.slotScopeIds = R),
        u == null
          ? a.shapeFlag & 512
            ? b.ctx.activate(a, p, _, A, x)
            : Nt(a, p, _, b, v, A, x)
          : _t(u, a, x))
    },
    Nt = (u, a, p, _, b, v, A) => {
      const R = (u.component = Ll(u, _, b))
      if ((Zr(u) && (R.ctx.renderer = M), Hl(R, !1, A), R.asyncDep)) {
        if ((b && b.registerDep(R, se, A), !u.el)) {
          const x = (R.subTree = he(ct))
          ;(N(null, x, a, p), (u.placeholder = x.el))
        }
      } else se(R, u, a, p, b, v, A)
    },
    _t = (u, a, p) => {
      const _ = (a.component = u.component)
      if (hl(u, a, p))
        if (_.asyncDep && !_.asyncResolved) {
          J(_, a, p)
          return
        } else ((_.next = a), _.update())
      else ((a.el = u.el), (_.vnode = a))
    },
    se = (u, a, p, _, b, v, A) => {
      const R = () => {
        if (u.isMounted) {
          let { next: w, bu: D, u: H, parent: G, vnode: Q } = u
          {
            const De = gi(u)
            if (De) {
              ;(w && ((w.el = Q.el), J(u, w, A)),
                De.asyncDep.then(() => {
                  u.isUnmounted || R()
                }))
              return
            }
          }
          let $ = w,
            ge
          ;(dt(u, !1),
            w ? ((w.el = Q.el), J(u, w, A)) : (w = Q),
            D && Nn(D),
            (ge = w.props && w.props.onVnodeBeforeUpdate) && Fe(ge, G, w, Q),
            dt(u, !0))
          const me = Us(u),
            Me = u.subTree
          ;((u.subTree = me),
            O(Me, me, d(Me.el), y(Me), u, b, v),
            (w.el = me.el),
            $ === null && pl(u, me.el),
            H && ye(H, b),
            (ge = w.props && w.props.onVnodeUpdated) && ye(() => Fe(ge, G, w, Q), b))
        } else {
          let w
          const { el: D, props: H } = a,
            { bm: G, m: Q, parent: $, root: ge, type: me } = u,
            Me = Kt(a)
          ;(dt(u, !1), G && Nn(G), !Me && (w = H && H.onVnodeBeforeMount) && Fe(w, $, a), dt(u, !0))
          {
            ge.ce && ge.ce._def.shadowRoot !== !1 && ge.ce._injectChildStyle(me)
            const De = (u.subTree = Us(u))
            ;(O(null, De, p, _, u, b, v), (a.el = De.el))
          }
          if ((Q && ye(Q, b), !Me && (w = H && H.onVnodeMounted))) {
            const De = a
            ye(() => Fe(w, $, De), b)
          }
          ;((a.shapeFlag & 256 || ($ && Kt($.vnode) && $.vnode.shapeFlag & 256)) &&
            u.a &&
            ye(u.a, b),
            (u.isMounted = !0),
            (a = p = _ = null))
        }
      }
      u.scope.on()
      const x = (u.effect = new wr(R))
      u.scope.off()
      const E = (u.update = x.run.bind(x)),
        F = (u.job = x.runIfDirty.bind(x))
      ;((F.i = u), (F.id = u.uid), (x.scheduler = () => ys(F)), dt(u, !0), E())
    },
    J = (u, a, p) => {
      a.component = u
      const _ = u.vnode.props
      ;((u.vnode = a),
        (u.next = null),
        ml(u, a.props, _, p),
        bl(u, a.children, p),
        $e(),
        Ds(u),
        Je())
    },
    K = (u, a, p, _, b, v, A, R, x = !1) => {
      const E = u && u.children,
        F = u ? u.shapeFlag : 0,
        w = a.children,
        { patchFlag: D, shapeFlag: H } = a
      if (D > 0) {
        if (D & 128) {
          Ze(E, w, p, _, b, v, A, R, x)
          return
        } else if (D & 256) {
          Ge(E, w, p, _, b, v, A, R, x)
          return
        }
      }
      H & 8
        ? (F & 16 && Ee(E, b, v), w !== E && f(p, w))
        : F & 16
          ? H & 16
            ? Ze(E, w, p, _, b, v, A, R, x)
            : Ee(E, b, v, !0)
          : (F & 8 && f(p, ''), H & 16 && Pe(w, p, _, b, v, A, R, x))
    },
    Ge = (u, a, p, _, b, v, A, R, x) => {
      ;((u = u || Rt), (a = a || Rt))
      const E = u.length,
        F = a.length,
        w = Math.min(E, F)
      let D
      for (D = 0; D < w; D++) {
        const H = (a[D] = x ? st(a[D]) : Ve(a[D]))
        O(u[D], H, p, null, b, v, A, R, x)
      }
      E > F ? Ee(u, b, v, !0, !1, w) : Pe(a, p, _, b, v, A, R, x, w)
    },
    Ze = (u, a, p, _, b, v, A, R, x) => {
      let E = 0
      const F = a.length
      let w = u.length - 1,
        D = F - 1
      for (; E <= w && E <= D; ) {
        const H = u[E],
          G = (a[E] = x ? st(a[E]) : Ve(a[E]))
        if (Lt(H, G)) O(H, G, p, null, b, v, A, R, x)
        else break
        E++
      }
      for (; E <= w && E <= D; ) {
        const H = u[w],
          G = (a[D] = x ? st(a[D]) : Ve(a[D]))
        if (Lt(H, G)) O(H, G, p, null, b, v, A, R, x)
        else break
        ;(w--, D--)
      }
      if (E > w) {
        if (E <= D) {
          const H = D + 1,
            G = H < F ? a[H].el : _
          for (; E <= D; ) (O(null, (a[E] = x ? st(a[E]) : Ve(a[E])), p, G, b, v, A, R, x), E++)
        }
      } else if (E > D) for (; E <= w; ) (pe(u[E], b, v, !0), E++)
      else {
        const H = E,
          G = E,
          Q = new Map()
        for (E = G; E <= D; E++) {
          const ve = (a[E] = x ? st(a[E]) : Ve(a[E]))
          ve.key != null && Q.set(ve.key, E)
        }
        let $,
          ge = 0
        const me = D - G + 1
        let Me = !1,
          De = 0
        const Mt = new Array(me)
        for (E = 0; E < me; E++) Mt[E] = 0
        for (E = H; E <= w; E++) {
          const ve = u[E]
          if (ge >= me) {
            pe(ve, b, v, !0)
            continue
          }
          let Le
          if (ve.key != null) Le = Q.get(ve.key)
          else
            for ($ = G; $ <= D; $++)
              if (Mt[$ - G] === 0 && Lt(ve, a[$])) {
                Le = $
                break
              }
          Le === void 0
            ? pe(ve, b, v, !0)
            : ((Mt[Le - G] = E + 1),
              Le >= De ? (De = Le) : (Me = !0),
              O(ve, a[Le], p, null, b, v, A, R, x),
              ge++)
        }
        const Os = Me ? Al(Mt) : Rt
        for ($ = Os.length - 1, E = me - 1; E >= 0; E--) {
          const ve = G + E,
            Le = a[ve],
            Ps = a[ve + 1],
            Ts = ve + 1 < F ? Ps.el || mi(Ps) : _
          Mt[E] === 0
            ? O(null, Le, p, Ts, b, v, A, R, x)
            : Me && ($ < 0 || E !== Os[$] ? Ne(Le, p, Ts, 2) : $--)
        }
      }
    },
    Ne = (u, a, p, _, b = null) => {
      const { el: v, type: A, transition: R, children: x, shapeFlag: E } = u
      if (E & 6) {
        Ne(u.component.subTree, a, p, _)
        return
      }
      if (E & 128) {
        u.suspense.move(a, p, _)
        return
      }
      if (E & 64) {
        A.move(u, a, p, M)
        return
      }
      if (A === Be) {
        s(v, a, p)
        for (let w = 0; w < x.length; w++) Ne(x[w], a, p, _)
        s(u.anchor, a, p)
        return
      }
      if (A === cn) {
        L(u, a, p)
        return
      }
      if (_ !== 2 && E & 1 && R)
        if (_ === 0) (R.beforeEnter(v), s(v, a, p), ye(() => R.enter(v), b))
        else {
          const { leave: w, delayLeave: D, afterLeave: H } = R,
            G = () => {
              u.ctx.isUnmounted ? r(v) : s(v, a, p)
            },
            Q = () => {
              ;(v._isLeaving && v[Ho](!0),
                w(v, () => {
                  ;(G(), H && H())
                }))
            }
          D ? D(v, G, Q) : Q()
        }
      else s(v, a, p)
    },
    pe = (u, a, p, _ = !1, b = !1) => {
      const {
        type: v,
        props: A,
        ref: R,
        children: x,
        dynamicChildren: E,
        shapeFlag: F,
        patchFlag: w,
        dirs: D,
        cacheIndex: H,
      } = u
      if (
        (w === -2 && (b = !1),
        R != null && ($e(), Gt(R, null, p, u, !0), Je()),
        H != null && (a.renderCache[H] = void 0),
        F & 256)
      ) {
        a.ctx.deactivate(u)
        return
      }
      const G = F & 1 && D,
        Q = !Kt(u)
      let $
      if ((Q && ($ = A && A.onVnodeBeforeUnmount) && Fe($, a, u), F & 6)) ft(u.component, p, _)
      else {
        if (F & 128) {
          u.suspense.unmount(p, _)
          return
        }
        ;(G && at(u, null, a, 'beforeUnmount'),
          F & 64
            ? u.type.remove(u, a, p, M, _)
            : E && !E.hasOnce && (v !== Be || (w > 0 && w & 64))
              ? Ee(E, a, p, !1, !0)
              : ((v === Be && w & 384) || (!b && F & 16)) && Ee(x, a, p),
          _ && vt(u))
      }
      ;((Q && ($ = A && A.onVnodeUnmounted)) || G) &&
        ye(() => {
          ;($ && Fe($, a, u), G && at(u, null, a, 'unmounted'))
        }, p)
    },
    vt = (u) => {
      const { type: a, el: p, anchor: _, transition: b } = u
      if (a === Be) {
        yt(p, _)
        return
      }
      if (a === cn) {
        I(u)
        return
      }
      const v = () => {
        ;(r(p), b && !b.persisted && b.afterLeave && b.afterLeave())
      }
      if (u.shapeFlag & 1 && b && !b.persisted) {
        const { leave: A, delayLeave: R } = b,
          x = () => A(p, v)
        R ? R(u.el, v, x) : x()
      } else v()
    },
    yt = (u, a) => {
      let p
      for (; u !== a; ) ((p = g(u)), r(u), (u = p))
      r(a)
    },
    ft = (u, a, p) => {
      const { bum: _, scope: b, job: v, subTree: A, um: R, m: x, a: E } = u
      ;(Ws(x),
        Ws(E),
        _ && Nn(_),
        b.stop(),
        v && ((v.flags |= 8), pe(A, u, a, p)),
        R && ye(R, a),
        ye(() => {
          u.isUnmounted = !0
        }, a))
    },
    Ee = (u, a, p, _ = !1, b = !1, v = 0) => {
      for (let A = v; A < u.length; A++) pe(u[A], a, p, _, b)
    },
    y = (u) => {
      if (u.shapeFlag & 6) return y(u.component.subTree)
      if (u.shapeFlag & 128) return u.suspense.next()
      const a = g(u.anchor || u.el),
        p = a && a[Lo]
      return p ? g(p) : a
    }
  let P = !1
  const C = (u, a, p) => {
      let _
      ;(u == null
        ? a._vnode && (pe(a._vnode, null, null, !0), (_ = a._vnode.component))
        : O(a._vnode || null, u, a, null, null, null, p),
        (a._vnode = u),
        P || ((P = !0), Ds(_), $r(), (P = !1)))
    },
    M = { p: O, um: pe, m: Ne, r: vt, mt: Nt, mc: Pe, pc: K, pbc: Te, n: y, o: e }
  return { render: C, hydrate: void 0, createApp: ll(C) }
}
function Hn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function dt({ effect: e, job: t }, n) {
  n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5))
}
function Rl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function pi(e, t, n = !1) {
  const s = e.children,
    r = t.children
  if (V(s) && V(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i]
      let l = r[i]
      ;(l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = r[i] = st(r[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && pi(o, l)),
        l.type === On &&
          (l.patchFlag !== -1 ? (l.el = o.el) : (l.__elIndex = i + (e.type === Be ? 1 : 0))),
        l.type === ct && !l.el && (l.el = o.el))
    }
}
function Al(e) {
  const t = e.slice(),
    n = [0]
  let s, r, i, o, l
  const c = e.length
  for (s = 0; s < c; s++) {
    const h = e[s]
    if (h !== 0) {
      if (((r = n[n.length - 1]), e[r] < h)) {
        ;((t[s] = r), n.push(s))
        continue
      }
      for (i = 0, o = n.length - 1; i < o; )
        ((l = (i + o) >> 1), e[n[l]] < h ? (i = l + 1) : (o = l))
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), (n[i] = s))
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) ((n[i] = o), (o = t[o]))
  return n
}
function gi(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : gi(t)
}
function Ws(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
function mi(e) {
  if (e.placeholder) return e.placeholder
  const t = e.component
  return t ? mi(t.subTree) : null
}
const _i = (e) => e.__isSuspense
function Sl(e, t) {
  t && t.pendingBranch ? (V(e) ? t.effects.push(...e) : t.effects.push(e)) : To(e)
}
const Be = Symbol.for('v-fgt'),
  On = Symbol.for('v-txt'),
  ct = Symbol.for('v-cmt'),
  cn = Symbol.for('v-stc'),
  qt = []
let be = null
function vi(e = !1) {
  qt.push((be = e ? null : []))
}
function Cl() {
  ;(qt.pop(), (be = qt[qt.length - 1] || null))
}
let Yt = 1
function mn(e, t = !1) {
  ;((Yt += e), e < 0 && be && t && (be.hasOnce = !0))
}
function yi(e) {
  return ((e.dynamicChildren = Yt > 0 ? be || Rt : null), Cl(), Yt > 0 && be && be.push(e), e)
}
function wl(e, t, n, s, r, i) {
  return yi(Ei(e, t, n, s, r, i, !0))
}
function Ol(e, t, n, s, r) {
  return yi(he(e, t, n, s, r, !0))
}
function _n(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key
}
const bi = ({ key: e }) => e ?? null,
  un = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (re(e) || ce(e) || B(e) ? { i: Ae, r: e, k: t, f: !!n } : e) : null
  )
function Ei(e, t = null, n = null, s = 0, r = null, i = e === Be ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bi(t),
    ref: t && un(t),
    scopeId: zr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ae,
  }
  return (
    l ? (As(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16),
    Yt > 0 && !o && be && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && be.push(c),
    c
  )
}
const he = Pl
function Pl(e, t = null, n = null, s = 0, r = null, i = !1) {
  if (((!e || e === Xo) && (e = ct), _n(e))) {
    const l = Ot(e, t, !0)
    return (
      n && As(l, n),
      Yt > 0 && !i && be && (l.shapeFlag & 6 ? (be[be.indexOf(e)] = l) : be.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((Gl(e) && (e = e.__vccOpts), t)) {
    t = Tl(t)
    let { class: l, style: c } = t
    ;(l && !re(l) && (t.class = fs(l)),
      te(c) && (vs(c) && !V(c) && (c = ue({}, c)), (t.style = us(c))))
  }
  const o = re(e) ? 1 : _i(e) ? 128 : Fo(e) ? 64 : te(e) ? 4 : B(e) ? 2 : 0
  return Ei(e, t, n, s, r, o, i, !0)
}
function Tl(e) {
  return e ? (vs(e) || ci(e) ? ue({}, e) : e) : null
}
function Ot(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
    h = t ? Nl(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: h,
      key: h && bi(h),
      ref: t && t.ref ? (n && i ? (V(i) ? i.concat(un(t)) : [i, un(t)]) : un(t)) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Be ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: c,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ot(e.ssContent),
      ssFallback: e.ssFallback && Ot(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    }
  return (c && s && bs(f, c.clone(f)), f)
}
function Il(e = ' ', t = 0) {
  return he(On, null, e, t)
}
function Tu(e, t) {
  const n = he(cn, null, e)
  return ((n.staticCount = t), n)
}
function Iu(e = '', t = !1) {
  return t ? (vi(), Ol(ct, null, e)) : he(ct, null, e)
}
function Ve(e) {
  return e == null || typeof e == 'boolean'
    ? he(ct)
    : V(e)
      ? he(Be, null, e.slice())
      : _n(e)
        ? st(e)
        : he(On, null, String(e))
}
function st(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ot(e)
}
function As(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (V(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const r = t.default
      r && (r._c && (r._d = !1), As(e, r()), r._c && (r._d = !0))
      return
    } else {
      n = 32
      const r = t._
      !r && !ci(t)
        ? (t._ctx = Ae)
        : r === 3 && Ae && (Ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: Ae }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [Il(t)])) : (n = 8))
  ;((e.children = t), (e.shapeFlag |= n))
}
function Nl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const r in s)
      if (r === 'class') t.class !== s.class && (t.class = fs([t.class, s.class]))
      else if (r === 'style') t.style = us([t.style, s.style])
      else if (yn(r)) {
        const i = t[r],
          o = s[r]
        o && i !== o && !(V(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
      } else r !== '' && (t[r] = s[r])
  }
  return t
}
function Fe(e, t, n, s = null) {
  Ue(e, t, 7, [n, s])
}
const Ml = ri()
let Dl = 0
function Ll(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Ml,
    i = {
      uid: Dl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Xi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: fi(s, r),
      emitsOptions: ii(s, r),
      emit: null,
      emitted: null,
      propsDefaults: X,
      inheritAttrs: s.inheritAttrs,
      ctx: X,
      data: X,
      props: X,
      attrs: X,
      slots: X,
      refs: X,
      setupState: X,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = ul.bind(null, i)),
    e.ce && e.ce(i),
    i
  )
}
let le = null
const Fl = () => le || Ae
let vn, Zn
{
  const e = Rn(),
    t = (n, s) => {
      let r
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (i) => {
          r.length > 1 ? r.forEach((o) => o(i)) : r[0](i)
        }
      )
    }
  ;((vn = t('__VUE_INSTANCE_SETTERS__', (n) => (le = n))),
    (Zn = t('__VUE_SSR_SETTERS__', (n) => (Xt = n))))
}
const tn = (e) => {
    const t = le
    return (
      vn(e),
      e.scope.on(),
      () => {
        ;(e.scope.off(), vn(t))
      }
    )
  },
  qs = () => {
    ;(le && le.scope.off(), vn(null))
  }
function xi(e) {
  return e.vnode.shapeFlag & 4
}
let Xt = !1
function Hl(e, t = !1, n = !1) {
  t && Zn(t)
  const { props: s, children: r } = e.vnode,
    i = xi(e)
  ;(gl(e, s, i, t), yl(e, r, n || t))
  const o = i ? Bl(e, t) : void 0
  return (t && Zn(!1), o)
}
function Bl(e, t) {
  const n = e.type
  ;((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, el)))
  const { setup: s } = n
  if (s) {
    $e()
    const r = (e.setupContext = s.length > 1 ? jl(e) : null),
      i = tn(e),
      o = en(s, e, 0, [e.props, r]),
      l = Ar(o)
    if ((Je(), i(), (l || e.sp) && !Kt(e) && Xr(e), l)) {
      if ((o.then(qs, qs), t))
        return o
          .then((c) => {
            ks(e, c)
          })
          .catch((c) => {
            Sn(c, e, 0)
          })
      e.asyncDep = o
    } else ks(e, o)
  } else Ri(e)
}
function ks(e, t, n) {
  ;(B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : te(t) && (e.setupState = Kr(t)),
    Ri(e))
}
function Ri(e, t, n) {
  const s = e.type
  e.render || (e.render = s.render || je)
  {
    const r = tn(e)
    $e()
    try {
      tl(e)
    } finally {
      ;(Je(), r())
    }
  }
}
const Vl = {
  get(e, t) {
    return (oe(e, 'get', ''), e[t])
  },
}
function jl(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return { attrs: new Proxy(e.attrs, Vl), slots: e.slots, emit: e.emit, expose: t }
}
function Ss(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Kr(yo(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n]
            if (n in Wt) return Wt[n](e)
          },
          has(t, n) {
            return n in t || n in Wt
          },
        }))
    : e.proxy
}
function Ul(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Gl(e) {
  return B(e) && '__vccOpts' in e
}
const Re = (e, t) => So(e, t, Xt)
function Ai(e, t, n) {
  try {
    mn(-1)
    const s = arguments.length
    return s === 2
      ? te(t) && !V(t)
        ? _n(t)
          ? he(e, null, [t])
          : he(e, t)
        : he(e, null, t)
      : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && _n(n) && (n = [n]),
        he(e, t, n))
  } finally {
    mn(1)
  }
}
const Kl = '3.5.26'
let es
const $s = typeof window < 'u' && window.trustedTypes
if ($s)
  try {
    es = $s.createPolicy('vue', { createHTML: (e) => e })
  } catch {}
const Si = es ? (e) => es.createHTML(e) : (e) => e,
  Wl = 'http://www.w3.org/2000/svg',
  ql = 'http://www.w3.org/1998/Math/MathML',
  qe = typeof document < 'u' ? document : null,
  Js = qe && qe.createElement('template'),
  kl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const r =
        t === 'svg'
          ? qe.createElementNS(Wl, e)
          : t === 'mathml'
            ? qe.createElementNS(ql, e)
            : n
              ? qe.createElement(e, { is: n })
              : qe.createElement(e)
      return (
        e === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple),
        r
      )
    },
    createText: (e) => qe.createTextNode(e),
    createComment: (e) => qe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => qe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild
      if (r && (r === i || r.nextSibling))
        for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
      else {
        Js.innerHTML = Si(
          s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e,
        )
        const l = Js.content
        if (s === 'svg' || s === 'mathml') {
          const c = l.firstChild
          for (; c.firstChild; ) l.appendChild(c.firstChild)
          l.removeChild(c)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  },
  $l = Symbol('_vtc')
function Jl(e, t, n) {
  const s = e[$l]
  ;(s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t))
}
const zs = Symbol('_vod'),
  zl = Symbol('_vsh'),
  Ql = Symbol(''),
  Yl = /(?:^|;)\s*display\s*:/
function Xl(e, t, n) {
  const s = e.style,
    r = re(n)
  let i = !1
  if (n && !r) {
    if (t)
      if (re(t))
        for (const o of t.split(';')) {
          const l = o.slice(0, o.indexOf(':')).trim()
          n[l] == null && fn(s, l, '')
        }
      else for (const o in t) n[o] == null && fn(s, o, '')
    for (const o in n) (o === 'display' && (i = !0), fn(s, o, n[o]))
  } else if (r) {
    if (t !== n) {
      const o = s[Ql]
      ;(o && (n += ';' + o), (s.cssText = n), (i = Yl.test(n)))
    }
  } else t && e.removeAttribute('style')
  zs in e && ((e[zs] = i ? s.display : ''), e[zl] && (s.display = 'none'))
}
const Qs = /\s*!important$/
function fn(e, t, n) {
  if (V(n)) n.forEach((s) => fn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Zl(e, t)
    Qs.test(n) ? e.setProperty(mt(s), n.replace(Qs, ''), 'important') : (e[s] = n)
  }
}
const Ys = ['Webkit', 'Moz', 'ms'],
  Bn = {}
function Zl(e, t) {
  const n = Bn[t]
  if (n) return n
  let s = xe(t)
  if (s !== 'filter' && s in e) return (Bn[t] = s)
  s = xn(s)
  for (let r = 0; r < Ys.length; r++) {
    const i = Ys[r] + s
    if (i in e) return (Bn[t] = i)
  }
  return t
}
const Xs = 'http://www.w3.org/1999/xlink'
function Zs(e, t, n, s, r, i = Yi(t)) {
  s && t.startsWith('xlink:')
    ? n == null
      ? e.removeAttributeNS(Xs, t.slice(6, t.length))
      : e.setAttributeNS(Xs, t, n)
    : n == null || (i && !Cr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? '' : It(n) ? String(n) : n)
}
function er(e, t, n, s, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    n != null && (e[t] = t === 'innerHTML' ? Si(n) : n)
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      c = n == null ? (e.type === 'checkbox' ? 'on' : '') : String(n)
    ;((l !== c || !('_value' in e)) && (e.value = c),
      n == null && e.removeAttribute(t),
      (e._value = n))
    return
  }
  let o = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Cr(n))
      : n == null && l === 'string'
        ? ((n = ''), (o = !0))
        : l === 'number' && ((n = 0), (o = !0))
  }
  try {
    e[t] = n
  } catch {}
  o && e.removeAttribute(r || t)
}
function ec(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function tc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const tr = Symbol('_vei')
function nc(e, t, n, s, r = null) {
  const i = e[tr] || (e[tr] = {}),
    o = i[t]
  if (s && o) o.value = s
  else {
    const [l, c] = sc(t)
    if (s) {
      const h = (i[t] = oc(s, r))
      ec(e, l, h, c)
    } else o && (tc(e, l, o, c), (i[t] = void 0))
  }
}
const nr = /(?:Once|Passive|Capture)$/
function sc(e) {
  let t
  if (nr.test(e)) {
    t = {}
    let s
    for (; (s = e.match(nr)); )
      ((e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0))
  }
  return [e[2] === ':' ? e.slice(3) : mt(e.slice(2)), t]
}
let Vn = 0
const rc = Promise.resolve(),
  ic = () => Vn || (rc.then(() => (Vn = 0)), (Vn = Date.now()))
function oc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ue(lc(s, n.value), t, 5, [s])
  }
  return ((n.value = e), (n.attached = ic()), n)
}
function lc(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        ;(n.call(e), (e._stopped = !0))
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    )
  } else return t
}
const sr = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  cc = (e, t, n, s, r, i) => {
    const o = r === 'svg'
    t === 'class'
      ? Jl(e, s, o)
      : t === 'style'
        ? Xl(e, n, s)
        : yn(t)
          ? os(t) || nc(e, t, n, s, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : uc(e, t, s, o)
              )
            ? (er(e, t, s),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Zs(e, t, s, o, i, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !re(s))
              ? er(e, xe(t), s, i, t)
              : (t === 'true-value'
                  ? (e._trueValue = s)
                  : t === 'false-value' && (e._falseValue = s),
                Zs(e, t, s, o))
  }
function uc(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && sr(t) && B(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    (t === 'sandbox' && e.tagName === 'IFRAME') ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const r = e.tagName
    if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1
  }
  return sr(t) && re(n) ? !1 : t in e
}
const fc = ue({ patchProp: cc }, kl)
let rr
function ac() {
  return rr || (rr = El(fc))
}
const dc = (...e) => {
  const t = ac().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (s) => {
      const r = pc(s)
      if (!r) return
      const i = t._component
      ;(!B(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ''))
      const o = n(r, !1, hc(r))
      return (
        r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')),
        o
      )
    }),
    t
  )
}
function hc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function pc(e) {
  return re(e) ? document.querySelector(e) : e
}
const xt = typeof document < 'u'
function Ci(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function gc(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module' || (e.default && Ci(e.default))
}
const W = Object.assign
function jn(e, t) {
  const n = {}
  for (const s in t) {
    const r = t[s]
    n[s] = Oe(r) ? r.map(e) : e(r)
  }
  return n
}
const kt = () => {},
  Oe = Array.isArray
function ir(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
const wi = /#/g,
  mc = /&/g,
  _c = /\//g,
  vc = /=/g,
  yc = /\?/g,
  Oi = /\+/g,
  bc = /%5B/g,
  Ec = /%5D/g,
  Pi = /%5E/g,
  xc = /%60/g,
  Ti = /%7B/g,
  Rc = /%7C/g,
  Ii = /%7D/g,
  Ac = /%20/g
function Cs(e) {
  return e == null
    ? ''
    : encodeURI('' + e)
        .replace(Rc, '|')
        .replace(bc, '[')
        .replace(Ec, ']')
}
function Sc(e) {
  return Cs(e).replace(Ti, '{').replace(Ii, '}').replace(Pi, '^')
}
function ts(e) {
  return Cs(e)
    .replace(Oi, '%2B')
    .replace(Ac, '+')
    .replace(wi, '%23')
    .replace(mc, '%26')
    .replace(xc, '`')
    .replace(Ti, '{')
    .replace(Ii, '}')
    .replace(Pi, '^')
}
function Cc(e) {
  return ts(e).replace(vc, '%3D')
}
function wc(e) {
  return Cs(e).replace(wi, '%23').replace(yc, '%3F')
}
function Oc(e) {
  return wc(e).replace(_c, '%2F')
}
function Zt(e) {
  if (e == null) return null
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Pc = /\/$/,
  Tc = (e) => e.replace(Pc, '')
function Un(e, t, n = '/') {
  let s,
    r = {},
    i = '',
    o = ''
  const l = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    (c = l >= 0 && c > l ? -1 : c),
    c >= 0 && ((s = t.slice(0, c)), (i = t.slice(c, l > 0 ? l : t.length)), (r = e(i.slice(1)))),
    l >= 0 && ((s = s || t.slice(0, l)), (o = t.slice(l, t.length))),
    (s = Dc(s ?? t, n)),
    { fullPath: s + i + o, path: s, query: r, hash: Zt(o) }
  )
}
function Ic(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function or(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Nc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1
  return (
    s > -1 &&
    s === r &&
    Pt(t.matched[s], n.matched[r]) &&
    Ni(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Pt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ni(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (var n in e) if (!Mc(e[n], t[n])) return !1
  return !0
}
function Mc(e, t) {
  return Oe(e) ? lr(e, t) : Oe(t) ? lr(t, e) : e?.valueOf() === t?.valueOf()
}
function lr(e, t) {
  return Oe(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Dc(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    r = s[s.length - 1]
  ;(r === '..' || r === '.') && s.push('')
  let i = n.length - 1,
    o,
    l
  for (o = 0; o < s.length; o++)
    if (((l = s[o]), l !== '.'))
      if (l === '..') i > 1 && i--
      else break
  return n.slice(0, i).join('/') + '/' + s.slice(o).join('/')
}
const et = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
let ns = (function (e) {
    return ((e.pop = 'pop'), (e.push = 'push'), e)
  })({}),
  Gn = (function (e) {
    return ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''), e)
  })({})
function Lc(e) {
  if (!e)
    if (xt) {
      const t = document.querySelector('base')
      ;((e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, '')))
    } else e = '/'
  return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Tc(e))
}
const Fc = /^[^#]+#/
function Hc(e, t) {
  return e.replace(Fc, '#') + t
}
function Bc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  }
}
const Pn = () => ({ left: window.scrollX, top: window.scrollY })
function Vc(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      r =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!r) return
    t = Bc(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      )
}
function cr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ss = new Map()
function jc(e, t) {
  ss.set(e, t)
}
function Uc(e) {
  const t = ss.get(e)
  return (ss.delete(e), t)
}
function Gc(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Mi(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
let ee = (function (e) {
  return (
    (e[(e.MATCHER_NOT_FOUND = 1)] = 'MATCHER_NOT_FOUND'),
    (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = 'NAVIGATION_GUARD_REDIRECT'),
    (e[(e.NAVIGATION_ABORTED = 4)] = 'NAVIGATION_ABORTED'),
    (e[(e.NAVIGATION_CANCELLED = 8)] = 'NAVIGATION_CANCELLED'),
    (e[(e.NAVIGATION_DUPLICATED = 16)] = 'NAVIGATION_DUPLICATED'),
    e
  )
})({})
const Di = Symbol('')
;(ee.MATCHER_NOT_FOUND + '',
  ee.NAVIGATION_GUARD_REDIRECT + '',
  ee.NAVIGATION_ABORTED + '',
  ee.NAVIGATION_CANCELLED + '',
  ee.NAVIGATION_DUPLICATED + '')
function Tt(e, t) {
  return W(new Error(), { type: e, [Di]: !0 }, t)
}
function We(e, t) {
  return e instanceof Error && Di in e && (t == null || !!(e.type & t))
}
const Kc = ['params', 'query', 'hash']
function Wc(e) {
  if (typeof e == 'string') return e
  if (e.path != null) return e.path
  const t = {}
  for (const n of Kc) n in e && (t[n] = e[n])
  return JSON.stringify(t, null, 2)
}
function qc(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(Oi, ' '),
      i = r.indexOf('='),
      o = Zt(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : Zt(r.slice(i + 1))
    if (o in t) {
      let c = t[o]
      ;(Oe(c) || (c = t[o] = [c]), c.push(l))
    } else t[o] = l
  }
  return t
}
function ur(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Cc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Oe(s) ? s.map((r) => r && ts(r)) : [s && ts(s)]).forEach((r) => {
      r !== void 0 && ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r))
    })
  }
  return t
}
function kc(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Oe(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s)
  }
  return t
}
const $c = Symbol(''),
  fr = Symbol(''),
  Tn = Symbol(''),
  ws = Symbol(''),
  rs = Symbol('')
function Ft() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s)
        r > -1 && e.splice(r, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function rt(e, t, n, s, r, i = (o) => o()) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || [])
  return () =>
    new Promise((l, c) => {
      const h = (g) => {
          g === !1
            ? c(Tt(ee.NAVIGATION_ABORTED, { from: n, to: t }))
            : g instanceof Error
              ? c(g)
              : Gc(g)
                ? c(Tt(ee.NAVIGATION_GUARD_REDIRECT, { from: t, to: g }))
                : (o && s.enterCallbacks[r] === o && typeof g == 'function' && o.push(g), l())
        },
        f = i(() => e.call(s && s.instances[r], t, n, h))
      let d = Promise.resolve(f)
      ;(e.length < 3 && (d = d.then(h)), d.catch((g) => c(g)))
    })
}
function Kn(e, t, n, s, r = (i) => i()) {
  const i = []
  for (const o of e)
    for (const l in o.components) {
      let c = o.components[l]
      if (!(t !== 'beforeRouteEnter' && !o.instances[l]))
        if (Ci(c)) {
          const h = (c.__vccOpts || c)[t]
          h && i.push(rt(h, n, s, o, l, r))
        } else {
          let h = c()
          i.push(() =>
            h.then((f) => {
              if (!f) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`)
              const d = gc(f) ? f.default : f
              ;((o.mods[l] = f), (o.components[l] = d))
              const g = (d.__vccOpts || d)[t]
              return g && rt(g, n, s, o, l, r)()
            }),
          )
        }
    }
  return i
}
function Jc(e, t) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length)
  for (let o = 0; o < i; o++) {
    const l = t.matched[o]
    l && (e.matched.find((h) => Pt(h, l)) ? s.push(l) : n.push(l))
    const c = e.matched[o]
    c && (t.matched.find((h) => Pt(h, c)) || r.push(c))
  }
  return [n, s, r]
}
let zc = () => location.protocol + '//' + location.host
function Li(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    i = e.indexOf('#')
  if (i > -1) {
    let o = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      l = r.slice(o)
    return (l[0] !== '/' && (l = '/' + l), or(l, ''))
  }
  return or(n, e) + s + r
}
function Qc(e, t, n, s) {
  let r = [],
    i = [],
    o = null
  const l = ({ state: g }) => {
    const m = Li(e, location),
      S = n.value,
      O = t.value
    let j = 0
    if (g) {
      if (((n.value = m), (t.value = g), o && o === S)) {
        o = null
        return
      }
      j = O ? g.position - O.position : 0
    } else s(m)
    r.forEach((N) => {
      N(n.value, S, {
        delta: j,
        type: ns.pop,
        direction: j ? (j > 0 ? Gn.forward : Gn.back) : Gn.unknown,
      })
    })
  }
  function c() {
    o = n.value
  }
  function h(g) {
    r.push(g)
    const m = () => {
      const S = r.indexOf(g)
      S > -1 && r.splice(S, 1)
    }
    return (i.push(m), m)
  }
  function f() {
    if (document.visibilityState === 'hidden') {
      const { history: g } = window
      if (!g.state) return
      g.replaceState(W({}, g.state, { scroll: Pn() }), '')
    }
  }
  function d() {
    for (const g of i) g()
    ;((i = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('pagehide', f),
      document.removeEventListener('visibilitychange', f))
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('pagehide', f),
    document.addEventListener('visibilitychange', f),
    { pauseListeners: c, listen: h, destroy: d }
  )
}
function ar(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Pn() : null,
  }
}
function Yc(e) {
  const { history: t, location: n } = window,
    s = { value: Li(e, n) },
    r = { value: t.state }
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function i(c, h, f) {
    const d = e.indexOf('#'),
      g = d > -1 ? (n.host && document.querySelector('base') ? e : e.slice(d)) + c : zc() + e + c
    try {
      ;(t[f ? 'replaceState' : 'pushState'](h, '', g), (r.value = h))
    } catch (m) {
      ;(console.error(m), n[f ? 'replace' : 'assign'](g))
    }
  }
  function o(c, h) {
    ;(i(
      c,
      W({}, t.state, ar(r.value.back, c, r.value.forward, !0), h, { position: r.value.position }),
      !0,
    ),
      (s.value = c))
  }
  function l(c, h) {
    const f = W({}, r.value, t.state, { forward: c, scroll: Pn() })
    ;(i(f.current, f, !0),
      i(c, W({}, ar(s.value, c, null), { position: f.position + 1 }, h), !1),
      (s.value = c))
  }
  return { location: s, state: r, push: l, replace: o }
}
function Xc(e) {
  e = Lc(e)
  const t = Yc(e),
    n = Qc(e, t.state, t.location, t.replace)
  function s(i, o = !0) {
    ;(o || n.pauseListeners(), history.go(i))
  }
  const r = W({ location: '', base: e, go: s, createHref: Hc.bind(null, e) }, t, n)
  return (
    Object.defineProperty(r, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(r, 'state', { enumerable: !0, get: () => t.state.value }),
    r
  )
}
function Zc(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Xc(e)
  )
}
let pt = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.Group = 2)] = 'Group'),
    e
  )
})({})
var ne = (function (e) {
  return (
    (e[(e.Static = 0)] = 'Static'),
    (e[(e.Param = 1)] = 'Param'),
    (e[(e.ParamRegExp = 2)] = 'ParamRegExp'),
    (e[(e.ParamRegExpEnd = 3)] = 'ParamRegExpEnd'),
    (e[(e.EscapeNext = 4)] = 'EscapeNext'),
    e
  )
})(ne || {})
const eu = { type: pt.Static, value: '' },
  tu = /[a-zA-Z0-9_]/
function nu(e) {
  if (!e) return [[]]
  if (e === '/') return [[eu]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${h}": ${m}`)
  }
  let n = ne.Static,
    s = n
  const r = []
  let i
  function o() {
    ;(i && r.push(i), (i = []))
  }
  let l = 0,
    c,
    h = '',
    f = ''
  function d() {
    h &&
      (n === ne.Static
        ? i.push({ type: pt.Static, value: h })
        : n === ne.Param || n === ne.ParamRegExp || n === ne.ParamRegExpEnd
          ? (i.length > 1 &&
              (c === '*' || c === '+') &&
              t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
              type: pt.Param,
              value: h,
              regexp: f,
              repeatable: c === '*' || c === '+',
              optional: c === '*' || c === '?',
            }))
          : t('Invalid state to consume buffer'),
      (h = ''))
  }
  function g() {
    h += c
  }
  for (; l < e.length; ) {
    if (((c = e[l++]), c === '\\' && n !== ne.ParamRegExp)) {
      ;((s = n), (n = ne.EscapeNext))
      continue
    }
    switch (n) {
      case ne.Static:
        c === '/' ? (h && d(), o()) : c === ':' ? (d(), (n = ne.Param)) : g()
        break
      case ne.EscapeNext:
        ;(g(), (n = s))
        break
      case ne.Param:
        c === '('
          ? (n = ne.ParamRegExp)
          : tu.test(c)
            ? g()
            : (d(), (n = ne.Static), c !== '*' && c !== '?' && c !== '+' && l--)
        break
      case ne.ParamRegExp:
        c === ')'
          ? f[f.length - 1] == '\\'
            ? (f = f.slice(0, -1) + c)
            : (n = ne.ParamRegExpEnd)
          : (f += c)
        break
      case ne.ParamRegExpEnd:
        ;(d(), (n = ne.Static), c !== '*' && c !== '?' && c !== '+' && l--, (f = ''))
        break
      default:
        t('Unknown state')
        break
    }
  }
  return (n === ne.ParamRegExp && t(`Unfinished custom RegExp for param "${h}"`), d(), o(), r)
}
const dr = '[^/]+?',
  su = { sensitive: !1, strict: !1, start: !0, end: !0 }
var ae = (function (e) {
  return (
    (e[(e._multiplier = 10)] = '_multiplier'),
    (e[(e.Root = 90)] = 'Root'),
    (e[(e.Segment = 40)] = 'Segment'),
    (e[(e.SubSegment = 30)] = 'SubSegment'),
    (e[(e.Static = 40)] = 'Static'),
    (e[(e.Dynamic = 20)] = 'Dynamic'),
    (e[(e.BonusCustomRegExp = 10)] = 'BonusCustomRegExp'),
    (e[(e.BonusWildcard = -50)] = 'BonusWildcard'),
    (e[(e.BonusRepeatable = -20)] = 'BonusRepeatable'),
    (e[(e.BonusOptional = -8)] = 'BonusOptional'),
    (e[(e.BonusStrict = 0.7000000000000001)] = 'BonusStrict'),
    (e[(e.BonusCaseSensitive = 0.25)] = 'BonusCaseSensitive'),
    e
  )
})(ae || {})
const ru = /[.+*?^${}()[\]/\\]/g
function iu(e, t) {
  const n = W({}, su, t),
    s = []
  let r = n.start ? '^' : ''
  const i = []
  for (const h of e) {
    const f = h.length ? [] : [ae.Root]
    n.strict && !h.length && (r += '/')
    for (let d = 0; d < h.length; d++) {
      const g = h[d]
      let m = ae.Segment + (n.sensitive ? ae.BonusCaseSensitive : 0)
      if (g.type === pt.Static)
        (d || (r += '/'), (r += g.value.replace(ru, '\\$&')), (m += ae.Static))
      else if (g.type === pt.Param) {
        const { value: S, repeatable: O, optional: j, regexp: N } = g
        i.push({ name: S, repeatable: O, optional: j })
        const T = N || dr
        if (T !== dr) {
          m += ae.BonusCustomRegExp
          try {
            ;`${T}`
          } catch (I) {
            throw new Error(`Invalid custom RegExp for param "${S}" (${T}): ` + I.message)
          }
        }
        let L = O ? `((?:${T})(?:/(?:${T}))*)` : `(${T})`
        ;(d || (L = j && h.length < 2 ? `(?:/${L})` : '/' + L),
          j && (L += '?'),
          (r += L),
          (m += ae.Dynamic),
          j && (m += ae.BonusOptional),
          O && (m += ae.BonusRepeatable),
          T === '.*' && (m += ae.BonusWildcard))
      }
      f.push(m)
    }
    s.push(f)
  }
  if (n.strict && n.end) {
    const h = s.length - 1
    s[h][s[h].length - 1] += ae.BonusStrict
  }
  ;(n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && !r.endsWith('/') && (r += '(?:/|$)'))
  const o = new RegExp(r, n.sensitive ? '' : 'i')
  function l(h) {
    const f = h.match(o),
      d = {}
    if (!f) return null
    for (let g = 1; g < f.length; g++) {
      const m = f[g] || '',
        S = i[g - 1]
      d[S.name] = m && S.repeatable ? m.split('/') : m
    }
    return d
  }
  function c(h) {
    let f = '',
      d = !1
    for (const g of e) {
      ;((!d || !f.endsWith('/')) && (f += '/'), (d = !1))
      for (const m of g)
        if (m.type === pt.Static) f += m.value
        else if (m.type === pt.Param) {
          const { value: S, repeatable: O, optional: j } = m,
            N = S in h ? h[S] : ''
          if (Oe(N) && !O)
            throw new Error(
              `Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const T = Oe(N) ? N.join('/') : N
          if (!T)
            if (j) g.length < 2 && (f.endsWith('/') ? (f = f.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${S}"`)
          f += T
        }
    }
    return f || '/'
  }
  return { re: o, score: s, keys: i, parse: l, stringify: c }
}
function ou(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === ae.Static + ae.Segment
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === ae.Static + ae.Segment
        ? 1
        : -1
      : 0
}
function Fi(e, t) {
  let n = 0
  const s = e.score,
    r = t.score
  for (; n < s.length && n < r.length; ) {
    const i = ou(s[n], r[n])
    if (i) return i
    n++
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (hr(s)) return 1
    if (hr(r)) return -1
  }
  return r.length - s.length
}
function hr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const lu = { strict: !1, end: !0, sensitive: !1 }
function cu(e, t, n) {
  const s = iu(nu(e.path), n),
    r = W(s, { record: e, parent: t, children: [], alias: [] })
  return (t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r)
}
function uu(e, t) {
  const n = [],
    s = new Map()
  t = ir(lu, t)
  function r(d) {
    return s.get(d)
  }
  function i(d, g, m) {
    const S = !m,
      O = gr(d)
    O.aliasOf = m && m.record
    const j = ir(t, d),
      N = [O]
    if ('alias' in d) {
      const I = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const z of I)
        N.push(
          gr(
            W({}, O, {
              components: m ? m.record.components : O.components,
              path: z,
              aliasOf: m ? m.record : O,
            }),
          ),
        )
    }
    let T, L
    for (const I of N) {
      const { path: z } = I
      if (g && z[0] !== '/') {
        const ie = g.record.path,
          Z = ie[ie.length - 1] === '/' ? '' : '/'
        I.path = g.record.path + (z && Z + z)
      }
      if (
        ((T = cu(I, g, j)),
        m
          ? m.alias.push(T)
          : ((L = L || T), L !== T && L.alias.push(T), S && d.name && !mr(T) && o(d.name)),
        Hi(T) && c(T),
        O.children)
      ) {
        const ie = O.children
        for (let Z = 0; Z < ie.length; Z++) i(ie[Z], T, m && m.children[Z])
      }
      m = m || T
    }
    return L
      ? () => {
          o(L)
        }
      : kt
  }
  function o(d) {
    if (Mi(d)) {
      const g = s.get(d)
      g && (s.delete(d), n.splice(n.indexOf(g), 1), g.children.forEach(o), g.alias.forEach(o))
    } else {
      const g = n.indexOf(d)
      g > -1 &&
        (n.splice(g, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(o),
        d.alias.forEach(o))
    }
  }
  function l() {
    return n
  }
  function c(d) {
    const g = du(d, n)
    ;(n.splice(g, 0, d), d.record.name && !mr(d) && s.set(d.record.name, d))
  }
  function h(d, g) {
    let m,
      S = {},
      O,
      j
    if ('name' in d && d.name) {
      if (((m = s.get(d.name)), !m)) throw Tt(ee.MATCHER_NOT_FOUND, { location: d })
      ;((j = m.record.name),
        (S = W(
          pr(
            g.params,
            m.keys
              .filter((L) => !L.optional)
              .concat(m.parent ? m.parent.keys.filter((L) => L.optional) : [])
              .map((L) => L.name),
          ),
          d.params &&
            pr(
              d.params,
              m.keys.map((L) => L.name),
            ),
        )),
        (O = m.stringify(S)))
    } else if (d.path != null)
      ((O = d.path),
        (m = n.find((L) => L.re.test(O))),
        m && ((S = m.parse(O)), (j = m.record.name)))
    else {
      if (((m = g.name ? s.get(g.name) : n.find((L) => L.re.test(g.path))), !m))
        throw Tt(ee.MATCHER_NOT_FOUND, { location: d, currentLocation: g })
      ;((j = m.record.name), (S = W({}, g.params, d.params)), (O = m.stringify(S)))
    }
    const N = []
    let T = m
    for (; T; ) (N.unshift(T.record), (T = T.parent))
    return { name: j, path: O, params: S, matched: N, meta: au(N) }
  }
  e.forEach((d) => i(d))
  function f() {
    ;((n.length = 0), s.clear())
  }
  return {
    addRoute: i,
    resolve: h,
    removeRoute: o,
    clearRoutes: f,
    getRoutes: l,
    getRecordMatcher: r,
  }
}
function pr(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function gr(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: fu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component },
  }
  return (Object.defineProperty(t, 'mods', { value: {} }), t)
}
function fu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function mr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function au(e) {
  return e.reduce((t, n) => W(t, n.meta), {})
}
function du(e, t) {
  let n = 0,
    s = t.length
  for (; n !== s; ) {
    const i = (n + s) >> 1
    Fi(e, t[i]) < 0 ? (s = i) : (n = i + 1)
  }
  const r = hu(e)
  return (r && (s = t.lastIndexOf(r, s - 1)), s)
}
function hu(e) {
  let t = e
  for (; (t = t.parent); ) if (Hi(t) && Fi(e, t) === 0) return t
}
function Hi({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function _r(e) {
  const t = we(Tn),
    n = we(ws),
    s = Re(() => {
      const c = St(e.to)
      return t.resolve(c)
    }),
    r = Re(() => {
      const { matched: c } = s.value,
        { length: h } = c,
        f = c[h - 1],
        d = n.matched
      if (!f || !d.length) return -1
      const g = d.findIndex(Pt.bind(null, f))
      if (g > -1) return g
      const m = vr(c[h - 2])
      return h > 1 && vr(f) === m && d[d.length - 1].path !== m
        ? d.findIndex(Pt.bind(null, c[h - 2]))
        : g
    }),
    i = Re(() => r.value > -1 && vu(n.params, s.value.params)),
    o = Re(() => r.value > -1 && r.value === n.matched.length - 1 && Ni(n.params, s.value.params))
  function l(c = {}) {
    if (_u(c)) {
      const h = t[St(e.replace) ? 'replace' : 'push'](St(e.to)).catch(kt)
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => h),
        h
      )
    }
    return Promise.resolve()
  }
  return { route: s, href: Re(() => s.value.href), isActive: i, isExactActive: o, navigate: l }
}
function pu(e) {
  return e.length === 1 ? e[0] : e
}
const gu = Es({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: _r,
    setup(e, { slots: t }) {
      const n = An(_r(e)),
        { options: s } = we(Tn),
        r = Re(() => ({
          [yr(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
          [yr(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
            n.isExactActive,
        }))
      return () => {
        const i = t.default && pu(t.default(n))
        return e.custom
          ? i
          : Ai(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i,
            )
      }
    },
  }),
  mu = gu
function _u(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return (e.preventDefault && e.preventDefault(), !0)
  }
}
function vu(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n]
    if (typeof s == 'string') {
      if (s !== r) return !1
    } else if (!Oe(r) || r.length !== s.length || s.some((i, o) => i.valueOf() !== r[o].valueOf()))
      return !1
  }
  return !0
}
function vr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const yr = (e, t, n) => e ?? t ?? n,
  yu = Es({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = we(rs),
        r = Re(() => e.route || s.value),
        i = we(fr, 0),
        o = Re(() => {
          let h = St(i)
          const { matched: f } = r.value
          let d
          for (; (d = f[h]) && !d.components; ) h++
          return h
        }),
        l = Re(() => r.value.matched[o.value])
      ;(on(
        fr,
        Re(() => o.value + 1),
      ),
        on($c, l),
        on(rs, r))
      const c = bo()
      return (
        ln(
          () => [c.value, l.value, e.name],
          ([h, f, d], [g, m, S]) => {
            ;(f &&
              ((f.instances[d] = h),
              m &&
                m !== f &&
                h &&
                h === g &&
                (f.leaveGuards.size || (f.leaveGuards = m.leaveGuards),
                f.updateGuards.size || (f.updateGuards = m.updateGuards))),
              h && f && (!m || !Pt(f, m) || !g) && (f.enterCallbacks[d] || []).forEach((O) => O(h)))
          },
          { flush: 'post' },
        ),
        () => {
          const h = r.value,
            f = e.name,
            d = l.value,
            g = d && d.components[f]
          if (!g) return br(n.default, { Component: g, route: h })
          const m = d.props[f],
            S = m ? (m === !0 ? h.params : typeof m == 'function' ? m(h) : m) : null,
            j = Ai(
              g,
              W({}, S, t, {
                onVnodeUnmounted: (N) => {
                  N.component.isUnmounted && (d.instances[f] = null)
                },
                ref: c,
              }),
            )
          return br(n.default, { Component: j, route: h }) || j
        }
      )
    },
  })
function br(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const bu = yu
function Eu(e) {
  const t = uu(e.routes, e),
    n = e.parseQuery || qc,
    s = e.stringifyQuery || ur,
    r = e.history,
    i = Ft(),
    o = Ft(),
    l = Ft(),
    c = Eo(et)
  let h = et
  xt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const f = jn.bind(null, (y) => '' + y),
    d = jn.bind(null, Oc),
    g = jn.bind(null, Zt)
  function m(y, P) {
    let C, M
    return (Mi(y) ? ((C = t.getRecordMatcher(y)), (M = P)) : (M = y), t.addRoute(M, C))
  }
  function S(y) {
    const P = t.getRecordMatcher(y)
    P && t.removeRoute(P)
  }
  function O() {
    return t.getRoutes().map((y) => y.record)
  }
  function j(y) {
    return !!t.getRecordMatcher(y)
  }
  function N(y, P) {
    if (((P = W({}, P || c.value)), typeof y == 'string')) {
      const p = Un(n, y, P.path),
        _ = t.resolve({ path: p.path }, P),
        b = r.createHref(p.fullPath)
      return W(p, _, { params: g(_.params), hash: Zt(p.hash), redirectedFrom: void 0, href: b })
    }
    let C
    if (y.path != null) C = W({}, y, { path: Un(n, y.path, P.path).path })
    else {
      const p = W({}, y.params)
      for (const _ in p) p[_] == null && delete p[_]
      ;((C = W({}, y, { params: d(p) })), (P.params = d(P.params)))
    }
    const M = t.resolve(C, P),
      U = y.hash || ''
    M.params = f(g(M.params))
    const u = Ic(s, W({}, y, { hash: Sc(U), path: M.path })),
      a = r.createHref(u)
    return W({ fullPath: u, hash: U, query: s === ur ? kc(y.query) : y.query || {} }, M, {
      redirectedFrom: void 0,
      href: a,
    })
  }
  function T(y) {
    return typeof y == 'string' ? Un(n, y, c.value.path) : W({}, y)
  }
  function L(y, P) {
    if (h !== y) return Tt(ee.NAVIGATION_CANCELLED, { from: P, to: y })
  }
  function I(y) {
    return Z(y)
  }
  function z(y) {
    return I(W(T(y), { replace: !0 }))
  }
  function ie(y, P) {
    const C = y.matched[y.matched.length - 1]
    if (C && C.redirect) {
      const { redirect: M } = C
      let U = typeof M == 'function' ? M(y, P) : M
      return (
        typeof U == 'string' &&
          ((U = U.includes('?') || U.includes('#') ? (U = T(U)) : { path: U }), (U.params = {})),
        W({ query: y.query, hash: y.hash, params: U.path != null ? {} : y.params }, U)
      )
    }
  }
  function Z(y, P) {
    const C = (h = N(y)),
      M = c.value,
      U = y.state,
      u = y.force,
      a = y.replace === !0,
      p = ie(C, M)
    if (p)
      return Z(
        W(T(p), { state: typeof p == 'object' ? W({}, U, p.state) : U, force: u, replace: a }),
        P || C,
      )
    const _ = C
    _.redirectedFrom = P
    let b
    return (
      !u &&
        Nc(s, M, C) &&
        ((b = Tt(ee.NAVIGATION_DUPLICATED, { to: _, from: M })), Ne(M, M, !0, !1)),
      (b ? Promise.resolve(b) : Te(_, M))
        .catch((v) => (We(v) ? (We(v, ee.NAVIGATION_GUARD_REDIRECT) ? v : Ze(v)) : K(v, _, M)))
        .then((v) => {
          if (v) {
            if (We(v, ee.NAVIGATION_GUARD_REDIRECT))
              return Z(
                W({ replace: a }, T(v.to), {
                  state: typeof v.to == 'object' ? W({}, U, v.to.state) : U,
                  force: u,
                }),
                P || _,
              )
          } else v = ut(_, M, !0, a, U)
          return (Xe(_, M, v), v)
        })
    )
  }
  function Pe(y, P) {
    const C = L(y, P)
    return C ? Promise.reject(C) : Promise.resolve()
  }
  function Ye(y) {
    const P = yt.values().next().value
    return P && typeof P.runWithContext == 'function' ? P.runWithContext(y) : y()
  }
  function Te(y, P) {
    let C
    const [M, U, u] = Jc(y, P)
    C = Kn(M.reverse(), 'beforeRouteLeave', y, P)
    for (const p of M)
      p.leaveGuards.forEach((_) => {
        C.push(rt(_, y, P))
      })
    const a = Pe.bind(null, y, P)
    return (
      C.push(a),
      Ee(C)
        .then(() => {
          C = []
          for (const p of i.list()) C.push(rt(p, y, P))
          return (C.push(a), Ee(C))
        })
        .then(() => {
          C = Kn(U, 'beforeRouteUpdate', y, P)
          for (const p of U)
            p.updateGuards.forEach((_) => {
              C.push(rt(_, y, P))
            })
          return (C.push(a), Ee(C))
        })
        .then(() => {
          C = []
          for (const p of u)
            if (p.beforeEnter)
              if (Oe(p.beforeEnter)) for (const _ of p.beforeEnter) C.push(rt(_, y, P))
              else C.push(rt(p.beforeEnter, y, P))
          return (C.push(a), Ee(C))
        })
        .then(
          () => (
            y.matched.forEach((p) => (p.enterCallbacks = {})),
            (C = Kn(u, 'beforeRouteEnter', y, P, Ye)),
            C.push(a),
            Ee(C)
          ),
        )
        .then(() => {
          C = []
          for (const p of o.list()) C.push(rt(p, y, P))
          return (C.push(a), Ee(C))
        })
        .catch((p) => (We(p, ee.NAVIGATION_CANCELLED) ? p : Promise.reject(p)))
    )
  }
  function Xe(y, P, C) {
    l.list().forEach((M) => Ye(() => M(y, P, C)))
  }
  function ut(y, P, C, M, U) {
    const u = L(y, P)
    if (u) return u
    const a = P === et,
      p = xt ? history.state : {}
    ;(C &&
      (M || a
        ? r.replace(y.fullPath, W({ scroll: a && p && p.scroll }, U))
        : r.push(y.fullPath, U)),
      (c.value = y),
      Ne(y, P, C, a),
      Ze())
  }
  let Ie
  function Nt() {
    Ie ||
      (Ie = r.listen((y, P, C) => {
        if (!ft.listening) return
        const M = N(y),
          U = ie(M, ft.currentRoute.value)
        if (U) {
          Z(W(U, { replace: !0, force: !0 }), M).catch(kt)
          return
        }
        h = M
        const u = c.value
        ;(xt && jc(cr(u.fullPath, C.delta), Pn()),
          Te(M, u)
            .catch((a) =>
              We(a, ee.NAVIGATION_ABORTED | ee.NAVIGATION_CANCELLED)
                ? a
                : We(a, ee.NAVIGATION_GUARD_REDIRECT)
                  ? (Z(W(T(a.to), { force: !0 }), M)
                      .then((p) => {
                        We(p, ee.NAVIGATION_ABORTED | ee.NAVIGATION_DUPLICATED) &&
                          !C.delta &&
                          C.type === ns.pop &&
                          r.go(-1, !1)
                      })
                      .catch(kt),
                    Promise.reject())
                  : (C.delta && r.go(-C.delta, !1), K(a, M, u)),
            )
            .then((a) => {
              ;((a = a || ut(M, u, !1)),
                a &&
                  (C.delta && !We(a, ee.NAVIGATION_CANCELLED)
                    ? r.go(-C.delta, !1)
                    : C.type === ns.pop &&
                      We(a, ee.NAVIGATION_ABORTED | ee.NAVIGATION_DUPLICATED) &&
                      r.go(-1, !1)),
                Xe(M, u, a))
            })
            .catch(kt))
      }))
  }
  let _t = Ft(),
    se = Ft(),
    J
  function K(y, P, C) {
    Ze(y)
    const M = se.list()
    return (M.length ? M.forEach((U) => U(y, P, C)) : console.error(y), Promise.reject(y))
  }
  function Ge() {
    return J && c.value !== et
      ? Promise.resolve()
      : new Promise((y, P) => {
          _t.add([y, P])
        })
  }
  function Ze(y) {
    return (J || ((J = !y), Nt(), _t.list().forEach(([P, C]) => (y ? C(y) : P())), _t.reset()), y)
  }
  function Ne(y, P, C, M) {
    const { scrollBehavior: U } = e
    if (!xt || !U) return Promise.resolve()
    const u =
      (!C && Uc(cr(y.fullPath, 0))) || ((M || !C) && history.state && history.state.scroll) || null
    return qr()
      .then(() => U(y, P, u))
      .then((a) => a && Vc(a))
      .catch((a) => K(a, y, P))
  }
  const pe = (y) => r.go(y)
  let vt
  const yt = new Set(),
    ft = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: S,
      clearRoutes: t.clearRoutes,
      hasRoute: j,
      getRoutes: O,
      resolve: N,
      options: e,
      push: I,
      replace: z,
      go: pe,
      back: () => pe(-1),
      forward: () => pe(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: l.add,
      onError: se.add,
      isReady: Ge,
      install(y) {
        ;(y.component('RouterLink', mu),
          y.component('RouterView', bu),
          (y.config.globalProperties.$router = ft),
          Object.defineProperty(y.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => St(c),
          }),
          xt && !vt && c.value === et && ((vt = !0), I(r.location).catch((M) => {})))
        const P = {}
        for (const M in et) Object.defineProperty(P, M, { get: () => c.value[M], enumerable: !0 })
        ;(y.provide(Tn, ft), y.provide(ws, Ur(P)), y.provide(rs, c))
        const C = y.unmount
        ;(yt.add(y),
          (y.unmount = function () {
            ;(yt.delete(y),
              yt.size < 1 &&
                ((h = et), Ie && Ie(), (Ie = null), (c.value = et), (vt = !1), (J = !1)),
              C())
          }))
      },
    }
  function Ee(y) {
    return y.reduce((P, C) => P.then(() => Ye(C)), Promise.resolve())
  }
  return ft
}
function xu() {
  return we(Tn)
}
function Ru(e) {
  return we(ws)
}
const Au = { id: 'app-root' },
  Su = Es({
    __name: 'App',
    setup(e) {
      return (
        xu(),
        Ru(),
        (t, n) => {
          const s = Yo('router-view')
          return (vi(), wl('div', Au, [he(s)]))
        }
      )
    },
  }),
  Cu = 'modulepreload',
  wu = function (e, t) {
    return new URL(e, t).href
  },
  Er = {},
  xr = function (t, n, s) {
    let r = Promise.resolve()
    if (n && n.length > 0) {
      let h = function (f) {
        return Promise.all(
          f.map((d) =>
            Promise.resolve(d).then(
              (g) => ({ status: 'fulfilled', value: g }),
              (g) => ({ status: 'rejected', reason: g }),
            ),
          ),
        )
      }
      const o = document.getElementsByTagName('link'),
        l = document.querySelector('meta[property=csp-nonce]'),
        c = l?.nonce || l?.getAttribute('nonce')
      r = h(
        n.map((f) => {
          if (((f = wu(f, s)), f in Er)) return
          Er[f] = !0
          const d = f.endsWith('.css'),
            g = d ? '[rel="stylesheet"]' : ''
          if (s)
            for (let S = o.length - 1; S >= 0; S--) {
              const O = o[S]
              if (O.href === f && (!d || O.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${f}"]${g}`)) return
          const m = document.createElement('link')
          if (
            ((m.rel = d ? 'stylesheet' : Cu),
            d || (m.as = 'script'),
            (m.crossOrigin = ''),
            (m.href = f),
            c && m.setAttribute('nonce', c),
            document.head.appendChild(m),
            d)
          )
            return new Promise((S, O) => {
              ;(m.addEventListener('load', S),
                m.addEventListener('error', () => O(new Error(`Unable to preload CSS for ${f}`))))
            })
        }),
      )
    }
    function i(o) {
      const l = new Event('vite:preloadError', { cancelable: !0 })
      if (((l.payload = o), window.dispatchEvent(l), !l.defaultPrevented)) throw o
    }
    return r.then((o) => {
      for (const l of o || []) l.status === 'rejected' && i(l.reason)
      return t().catch(i)
    })
  },
  Ou = [
    { path: '/', redirect: '/template2' },
    {
      path: '/template1',
      name: 'Template1',
      component: () =>
        xr(() => import('./index.BHrEMoAl.js'), __vite__mapDeps([0, 1, 2, 3]), import.meta.url),
    },
    {
      path: '/template2',
      name: 'Template2',
      component: () =>
        xr(() => import('./index.CVc33UtY.js'), __vite__mapDeps([4, 1, 2, 5]), import.meta.url),
    },
  ],
  Pu = Eu({ history: Zc(), routes: Ou })
dc(Su).use(Pu).mount('#app')
export {
  Tu as a,
  Ei as b,
  wl as c,
  he as d,
  Il as e,
  Es as f,
  bo as g,
  Iu as h,
  vi as o,
  Yo as r,
  Io as w,
}
