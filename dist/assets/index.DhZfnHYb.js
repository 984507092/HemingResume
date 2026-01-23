;(function () {
  const s = document.createElement('link').relList
  if (s && s.supports && s.supports('modulepreload')) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) e(n)
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === 'childList')
        for (const c of i.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && e(c)
  }).observe(document, { childList: !0, subtree: !0 })
  function a(n) {
    const i = {}
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : n.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function e(n) {
    if (n.ep) return
    n.ep = !0
    const i = a(n)
    fetch(n.href, i)
  }
})()
function Va(t) {
  const s = Object.create(null)
  for (const a of t.split(',')) s[a] = 1
  return (a) => a in s
}
const U = {},
  cs = [],
  Et = () => {},
  Ne = () => !1,
  aa = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  Na = (t) => t.startsWith('onUpdate:'),
  at = Object.assign,
  $a = (t, s) => {
    const a = t.indexOf(s)
    a > -1 && t.splice(a, 1)
  },
  Zn = Object.prototype.hasOwnProperty,
  $ = (t, s) => Zn.call(t, s),
  O = Array.isArray,
  bs = (t) => Os(t) === '[object Map]',
  Qn = (t) => Os(t) === '[object Set]',
  ti = (t) => Os(t) === '[object RegExp]',
  I = (t) => typeof t == 'function',
  z = (t) => typeof t == 'string',
  os = (t) => typeof t == 'symbol',
  J = (t) => t !== null && typeof t == 'object',
  $e = (t) => (J(t) || I(t)) && I(t.then) && I(t.catch),
  si = Object.prototype.toString,
  Os = (t) => si.call(t),
  ai = (t) => Os(t).slice(8, -1),
  ei = (t) => Os(t) === '[object Object]',
  Ha = (t) => z(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  _s = Va(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  ea = (t) => {
    const s = Object.create(null)
    return (a) => s[a] || (s[a] = t(a))
  },
  ni = /-\w/g,
  mt = ea((t) => t.replace(ni, (s) => s.slice(1).toUpperCase())),
  ii = /\B([A-Z])/g,
  ss = ea((t) => t.replace(ii, '-$1').toLowerCase()),
  na = ea((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  ua = ea((t) => (t ? `on${na(t)}` : '')),
  Ut = (t, s) => !Object.is(t, s),
  xs = (t, ...s) => {
    for (let a = 0; a < t.length; a++) t[a](...s)
  },
  He = (t, s, a, e = !1) => {
    Object.defineProperty(t, s, { configurable: !0, enumerable: !1, writable: e, value: a })
  },
  ci = (t) => {
    const s = parseFloat(t)
    return isNaN(s) ? t : s
  }
let oe
const ia = () =>
  oe ||
  (oe =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function La(t) {
  if (O(t)) {
    const s = {}
    for (let a = 0; a < t.length; a++) {
      const e = t[a],
        n = z(e) ? oi(e) : La(e)
      if (n) for (const i in n) s[i] = n[i]
    }
    return s
  } else if (z(t) || J(t)) return t
}
const li = /;(?![^(]*\))/g,
  di = /:([^]+)/,
  ri = /\/\*[^]*?\*\//g
function oi(t) {
  const s = {}
  return (
    t
      .replace(ri, '')
      .split(li)
      .forEach((a) => {
        if (a) {
          const e = a.split(di)
          e.length > 1 && (s[e[0].trim()] = e[1].trim())
        }
      }),
    s
  )
}
function Ka(t) {
  let s = ''
  if (z(t)) s = t
  else if (O(t))
    for (let a = 0; a < t.length; a++) {
      const e = Ka(t[a])
      e && (s += e + ' ')
    }
  else if (J(t)) for (const a in t) t[a] && (s += a + ' ')
  return s.trim()
}
const fi = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  vi = Va(fi)
function Le(t) {
  return !!t || t === ''
}
let ot
class pi {
  constructor(s = !1) {
    ;((this.detached = s),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = ot),
      !s && ot && (this.index = (ot.scopes || (ot.scopes = [])).push(this) - 1))
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let s, a
      if (this.scopes) for (s = 0, a = this.scopes.length; s < a; s++) this.scopes[s].pause()
      for (s = 0, a = this.effects.length; s < a; s++) this.effects[s].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let s, a
      if (this.scopes) for (s = 0, a = this.scopes.length; s < a; s++) this.scopes[s].resume()
      for (s = 0, a = this.effects.length; s < a; s++) this.effects[s].resume()
    }
  }
  run(s) {
    if (this._active) {
      const a = ot
      try {
        return ((ot = this), s())
      } finally {
        ot = a
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = ot), (ot = this))
  }
  off() {
    this._on > 0 && --this._on === 0 && ((ot = this.prevScope), (this.prevScope = void 0))
  }
  stop(s) {
    if (this._active) {
      this._active = !1
      let a, e
      for (a = 0, e = this.effects.length; a < e; a++) this.effects[a].stop()
      for (this.effects.length = 0, a = 0, e = this.cleanups.length; a < e; a++) this.cleanups[a]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (a = 0, e = this.scopes.length; a < e; a++) this.scopes[a].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !s) {
        const n = this.parent.scopes.pop()
        n && n !== this && ((this.parent.scopes[this.index] = n), (n.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function ui() {
  return ot
}
let W
const ga = new WeakSet()
class Ke {
  constructor(s) {
    ;((this.fn = s),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      ot && ot.active && ot.effects.push(this))
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), ga.has(this) && (ga.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Ue(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;((this.flags |= 2), fe(this), Be(this))
    const s = W,
      a = _t
    ;((W = this), (_t = !0))
    try {
      return this.fn()
    } finally {
      ;(Ge(this), (W = s), (_t = a), (this.flags &= -3))
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep) Ba(s)
      ;((this.deps = this.depsTail = void 0),
        fe(this),
        this.onStop && this.onStop(),
        (this.flags &= -2))
    }
  }
  trigger() {
    this.flags & 64 ? ga.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Sa(this) && this.run()
  }
  get dirty() {
    return Sa(this)
  }
}
let We = 0,
  ys,
  Cs
function Ue(t, s = !1) {
  if (((t.flags |= 8), s)) {
    ;((t.next = Cs), (Cs = t))
    return
  }
  ;((t.next = ys), (ys = t))
}
function Wa() {
  We++
}
function Ua() {
  if (--We > 0) return
  if (Cs) {
    let s = Cs
    for (Cs = void 0; s; ) {
      const a = s.next
      ;((s.next = void 0), (s.flags &= -9), (s = a))
    }
  }
  let t
  for (; ys; ) {
    let s = ys
    for (ys = void 0; s; ) {
      const a = s.next
      if (((s.next = void 0), (s.flags &= -9), s.flags & 1))
        try {
          s.trigger()
        } catch (e) {
          t || (t = e)
        }
      s = a
    }
  }
  if (t) throw t
}
function Be(t) {
  for (let s = t.deps; s; s = s.nextDep)
    ((s.version = -1), (s.prevActiveLink = s.dep.activeLink), (s.dep.activeLink = s))
}
function Ge(t) {
  let s,
    a = t.depsTail,
    e = a
  for (; e; ) {
    const n = e.prevDep
    ;(e.version === -1 ? (e === a && (a = n), Ba(e), gi(e)) : (s = e),
      (e.dep.activeLink = e.prevActiveLink),
      (e.prevActiveLink = void 0),
      (e = n))
  }
  ;((t.deps = s), (t.depsTail = a))
}
function Sa(t) {
  for (let s = t.deps; s; s = s.nextDep)
    if (
      s.dep.version !== s.version ||
      (s.dep.computed && (qe(s.dep.computed) || s.dep.version !== s.version))
    )
      return !0
  return !!t._dirty
}
function qe(t) {
  if (
    (t.flags & 4 && !(t.flags & 16)) ||
    ((t.flags &= -17), t.globalVersion === Ts) ||
    ((t.globalVersion = Ts), !t.isSSR && t.flags & 128 && ((!t.deps && !t._dirty) || !Sa(t)))
  )
    return
  t.flags |= 2
  const s = t.dep,
    a = W,
    e = _t
  ;((W = t), (_t = !0))
  try {
    Be(t)
    const n = t.fn(t._value)
    ;(s.version === 0 || Ut(n, t._value)) && ((t.flags |= 128), (t._value = n), s.version++)
  } catch (n) {
    throw (s.version++, n)
  } finally {
    ;((W = a), (_t = e), Ge(t), (t.flags &= -3))
  }
}
function Ba(t, s = !1) {
  const { dep: a, prevSub: e, nextSub: n } = t
  if (
    (e && ((e.nextSub = n), (t.prevSub = void 0)),
    n && ((n.prevSub = e), (t.nextSub = void 0)),
    a.subs === t && ((a.subs = e), !e && a.computed))
  ) {
    a.computed.flags &= -5
    for (let i = a.computed.deps; i; i = i.nextDep) Ba(i, !0)
  }
  !s && !--a.sc && a.map && a.map.delete(a.key)
}
function gi(t) {
  const { prevDep: s, nextDep: a } = t
  ;(s && ((s.nextDep = a), (t.prevDep = void 0)), a && ((a.prevDep = s), (t.nextDep = void 0)))
}
let _t = !0
const Je = []
function Dt() {
  ;(Je.push(_t), (_t = !1))
}
function Ft() {
  const t = Je.pop()
  _t = t === void 0 ? !0 : t
}
function fe(t) {
  const { cleanup: s } = t
  if (((t.cleanup = void 0), s)) {
    const a = W
    W = void 0
    try {
      s()
    } finally {
      W = a
    }
  }
}
let Ts = 0
class hi {
  constructor(s, a) {
    ;((this.sub = s),
      (this.dep = a),
      (this.version = a.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0))
  }
}
class Ga {
  constructor(s) {
    ;((this.computed = s),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0))
  }
  track(s) {
    if (!W || !_t || W === this.computed) return
    let a = this.activeLink
    if (a === void 0 || a.sub !== W)
      ((a = this.activeLink = new hi(W, this)),
        W.deps
          ? ((a.prevDep = W.depsTail), (W.depsTail.nextDep = a), (W.depsTail = a))
          : (W.deps = W.depsTail = a),
        Xe(a))
    else if (a.version === -1 && ((a.version = this.version), a.nextDep)) {
      const e = a.nextDep
      ;((e.prevDep = a.prevDep),
        a.prevDep && (a.prevDep.nextDep = e),
        (a.prevDep = W.depsTail),
        (a.nextDep = void 0),
        (W.depsTail.nextDep = a),
        (W.depsTail = a),
        W.deps === a && (W.deps = e))
    }
    return a
  }
  trigger(s) {
    ;(this.version++, Ts++, this.notify(s))
  }
  notify(s) {
    Wa()
    try {
      for (let a = this.subs; a; a = a.prevSub) a.sub.notify() && a.sub.dep.notify()
    } finally {
      Ua()
    }
  }
}
function Xe(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const s = t.dep.computed
    if (s && !t.dep.subs) {
      s.flags |= 20
      for (let e = s.deps; e; e = e.nextDep) Xe(e)
    }
    const a = t.dep.subs
    ;(a !== t && ((t.prevSub = a), a && (a.nextSub = t)), (t.dep.subs = t))
  }
}
const ka = new WeakMap(),
  Zt = Symbol(''),
  ja = Symbol(''),
  ws = Symbol('')
function Q(t, s, a) {
  if (_t && W) {
    let e = ka.get(t)
    e || ka.set(t, (e = new Map()))
    let n = e.get(a)
    ;(n || (e.set(a, (n = new Ga())), (n.map = e), (n.key = a)), n.track())
  }
}
function Mt(t, s, a, e, n, i) {
  const c = ka.get(t)
  if (!c) {
    Ts++
    return
  }
  const l = (o) => {
    o && o.trigger()
  }
  if ((Wa(), s === 'clear')) c.forEach(l)
  else {
    const o = O(t),
      p = o && Ha(a)
    if (o && a === 'length') {
      const f = Number(e)
      c.forEach((u, k) => {
        ;(k === 'length' || k === ws || (!os(k) && k >= f)) && l(u)
      })
    } else
      switch (((a !== void 0 || c.has(void 0)) && l(c.get(a)), p && l(c.get(ws)), s)) {
        case 'add':
          o ? p && l(c.get('length')) : (l(c.get(Zt)), bs(t) && l(c.get(ja)))
          break
        case 'delete':
          o || (l(c.get(Zt)), bs(t) && l(c.get(ja)))
          break
        case 'set':
          bs(t) && l(c.get(Zt))
          break
      }
  }
  Ua()
}
function es(t) {
  const s = N(t)
  return s === t ? s : (Q(s, 'iterate', ws), xt(t) ? s : s.map(Vt))
}
function qa(t) {
  return (Q((t = N(t)), 'iterate', ws), t)
}
function Ht(t, s) {
  return Bt(t) ? (ls(t) ? Es(Vt(s)) : Es(s)) : Vt(s)
}
const mi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ha(this, Symbol.iterator, (t) => Ht(this, t))
  },
  concat(...t) {
    return es(this).concat(...t.map((s) => (O(s) ? es(s) : s)))
  },
  entries() {
    return ha(this, 'entries', (t) => ((t[1] = Ht(this, t[1])), t))
  },
  every(t, s) {
    return It(this, 'every', t, s, void 0, arguments)
  },
  filter(t, s) {
    return It(this, 'filter', t, s, (a) => a.map((e) => Ht(this, e)), arguments)
  },
  find(t, s) {
    return It(this, 'find', t, s, (a) => Ht(this, a), arguments)
  },
  findIndex(t, s) {
    return It(this, 'findIndex', t, s, void 0, arguments)
  },
  findLast(t, s) {
    return It(this, 'findLast', t, s, (a) => Ht(this, a), arguments)
  },
  findLastIndex(t, s) {
    return It(this, 'findLastIndex', t, s, void 0, arguments)
  },
  forEach(t, s) {
    return It(this, 'forEach', t, s, void 0, arguments)
  },
  includes(...t) {
    return ma(this, 'includes', t)
  },
  indexOf(...t) {
    return ma(this, 'indexOf', t)
  },
  join(t) {
    return es(this).join(t)
  },
  lastIndexOf(...t) {
    return ma(this, 'lastIndexOf', t)
  },
  map(t, s) {
    return It(this, 'map', t, s, void 0, arguments)
  },
  pop() {
    return us(this, 'pop')
  },
  push(...t) {
    return us(this, 'push', t)
  },
  reduce(t, ...s) {
    return ve(this, 'reduce', t, s)
  },
  reduceRight(t, ...s) {
    return ve(this, 'reduceRight', t, s)
  },
  shift() {
    return us(this, 'shift')
  },
  some(t, s) {
    return It(this, 'some', t, s, void 0, arguments)
  },
  splice(...t) {
    return us(this, 'splice', t)
  },
  toReversed() {
    return es(this).toReversed()
  },
  toSorted(t) {
    return es(this).toSorted(t)
  },
  toSpliced(...t) {
    return es(this).toSpliced(...t)
  },
  unshift(...t) {
    return us(this, 'unshift', t)
  },
  values() {
    return ha(this, 'values', (t) => Ht(this, t))
  },
}
function ha(t, s, a) {
  const e = qa(t),
    n = e[s]()
  return (
    e !== t &&
      !xt(t) &&
      ((n._next = n.next),
      (n.next = () => {
        const i = n._next()
        return (i.done || (i.value = a(i.value)), i)
      })),
    n
  )
}
const bi = Array.prototype
function It(t, s, a, e, n, i) {
  const c = qa(t),
    l = c !== t && !xt(t),
    o = c[s]
  if (o !== bi[s]) {
    const u = o.apply(t, i)
    return l ? Vt(u) : u
  }
  let p = a
  c !== t &&
    (l
      ? (p = function (u, k) {
          return a.call(this, Ht(t, u), k, t)
        })
      : a.length > 2 &&
        (p = function (u, k) {
          return a.call(this, u, k, t)
        }))
  const f = o.call(c, p, e)
  return l && n ? n(f) : f
}
function ve(t, s, a, e) {
  const n = qa(t)
  let i = a
  return (
    n !== t &&
      (xt(t)
        ? a.length > 3 &&
          (i = function (c, l, o) {
            return a.call(this, c, l, o, t)
          })
        : (i = function (c, l, o) {
            return a.call(this, c, Ht(t, l), o, t)
          })),
    n[s](i, ...e)
  )
}
function ma(t, s, a) {
  const e = N(t)
  Q(e, 'iterate', ws)
  const n = e[s](...a)
  return (n === -1 || n === !1) && Ya(a[0]) ? ((a[0] = N(a[0])), e[s](...a)) : n
}
function us(t, s, a = []) {
  ;(Dt(), Wa())
  const e = N(t)[s].apply(t, a)
  return (Ua(), Ft(), e)
}
const _i = Va('__proto__,__v_isRef,__isVue'),
  ze = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(os),
  )
function xi(t) {
  os(t) || (t = String(t))
  const s = N(this)
  return (Q(s, 'has', t), s.hasOwnProperty(t))
}
class Ye {
  constructor(s = !1, a = !1) {
    ;((this._isReadonly = s), (this._isShallow = a))
  }
  get(s, a, e) {
    if (a === '__v_skip') return s.__v_skip
    const n = this._isReadonly,
      i = this._isShallow
    if (a === '__v_isReactive') return !n
    if (a === '__v_isReadonly') return n
    if (a === '__v_isShallow') return i
    if (a === '__v_raw')
      return e === (n ? (i ? Pi : sn) : i ? tn : Qe).get(s) ||
        Object.getPrototypeOf(s) === Object.getPrototypeOf(e)
        ? s
        : void 0
    const c = O(s)
    if (!n) {
      let o
      if (c && (o = mi[a])) return o
      if (a === 'hasOwnProperty') return xi
    }
    const l = Reflect.get(s, a, st(s) ? s : e)
    if ((os(a) ? ze.has(a) : _i(a)) || (n || Q(s, 'get', a), i)) return l
    if (st(l)) {
      const o = c && Ha(a) ? l : l.value
      return n && J(o) ? wa(o) : o
    }
    return J(l) ? (n ? wa(l) : Xa(l)) : l
  }
}
class Ze extends Ye {
  constructor(s = !1) {
    super(!1, s)
  }
  set(s, a, e, n) {
    let i = s[a]
    const c = O(s) && Ha(a)
    if (!this._isShallow) {
      const p = Bt(i)
      if ((!xt(e) && !Bt(e) && ((i = N(i)), (e = N(e))), !c && st(i) && !st(e)))
        return (p || (i.value = e), !0)
    }
    const l = c ? Number(a) < s.length : $(s, a),
      o = Reflect.set(s, a, e, st(s) ? s : n)
    return (s === N(n) && (l ? Ut(e, i) && Mt(s, 'set', a, e) : Mt(s, 'add', a, e)), o)
  }
  deleteProperty(s, a) {
    const e = $(s, a)
    s[a]
    const n = Reflect.deleteProperty(s, a)
    return (n && e && Mt(s, 'delete', a, void 0), n)
  }
  has(s, a) {
    const e = Reflect.has(s, a)
    return ((!os(a) || !ze.has(a)) && Q(s, 'has', a), e)
  }
  ownKeys(s) {
    return (Q(s, 'iterate', O(s) ? 'length' : Zt), Reflect.ownKeys(s))
  }
}
class yi extends Ye {
  constructor(s = !1) {
    super(!0, s)
  }
  set(s, a) {
    return !0
  }
  deleteProperty(s, a) {
    return !0
  }
}
const Ci = new Ze(),
  Si = new yi(),
  ki = new Ze(!0)
const Ta = (t) => t,
  $s = (t) => Reflect.getPrototypeOf(t)
function ji(t, s, a) {
  return function (...e) {
    const n = this.__v_raw,
      i = N(n),
      c = bs(i),
      l = t === 'entries' || (t === Symbol.iterator && c),
      o = t === 'keys' && c,
      p = n[t](...e),
      f = a ? Ta : s ? Es : Vt
    return (
      !s && Q(i, 'iterate', o ? ja : Zt),
      {
        next() {
          const { value: u, done: k } = p.next()
          return k ? { value: u, done: k } : { value: l ? [f(u[0]), f(u[1])] : f(u), done: k }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Hs(t) {
  return function (...s) {
    return t === 'delete' ? !1 : t === 'clear' ? void 0 : this
  }
}
function Ti(t, s) {
  const a = {
    get(n) {
      const i = this.__v_raw,
        c = N(i),
        l = N(n)
      t || (Ut(n, l) && Q(c, 'get', n), Q(c, 'get', l))
      const { has: o } = $s(c),
        p = s ? Ta : t ? Es : Vt
      if (o.call(c, n)) return p(i.get(n))
      if (o.call(c, l)) return p(i.get(l))
      i !== c && i.get(n)
    },
    get size() {
      const n = this.__v_raw
      return (!t && Q(N(n), 'iterate', Zt), n.size)
    },
    has(n) {
      const i = this.__v_raw,
        c = N(i),
        l = N(n)
      return (
        t || (Ut(n, l) && Q(c, 'has', n), Q(c, 'has', l)),
        n === l ? i.has(n) : i.has(n) || i.has(l)
      )
    },
    forEach(n, i) {
      const c = this,
        l = c.__v_raw,
        o = N(l),
        p = s ? Ta : t ? Es : Vt
      return (!t && Q(o, 'iterate', Zt), l.forEach((f, u) => n.call(i, p(f), p(u), c)))
    },
  }
  return (
    at(
      a,
      t
        ? { add: Hs('add'), set: Hs('set'), delete: Hs('delete'), clear: Hs('clear') }
        : {
            add(n) {
              !s && !xt(n) && !Bt(n) && (n = N(n))
              const i = N(this)
              return ($s(i).has.call(i, n) || (i.add(n), Mt(i, 'add', n, n)), this)
            },
            set(n, i) {
              !s && !xt(i) && !Bt(i) && (i = N(i))
              const c = N(this),
                { has: l, get: o } = $s(c)
              let p = l.call(c, n)
              p || ((n = N(n)), (p = l.call(c, n)))
              const f = o.call(c, n)
              return (c.set(n, i), p ? Ut(i, f) && Mt(c, 'set', n, i) : Mt(c, 'add', n, i), this)
            },
            delete(n) {
              const i = N(this),
                { has: c, get: l } = $s(i)
              let o = c.call(i, n)
              ;(o || ((n = N(n)), (o = c.call(i, n))), l && l.call(i, n))
              const p = i.delete(n)
              return (o && Mt(i, 'delete', n, void 0), p)
            },
            clear() {
              const n = N(this),
                i = n.size !== 0,
                c = n.clear()
              return (i && Mt(n, 'clear', void 0, void 0), c)
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((n) => {
      a[n] = ji(n, t, s)
    }),
    a
  )
}
function Ja(t, s) {
  const a = Ti(t, s)
  return (e, n, i) =>
    n === '__v_isReactive'
      ? !t
      : n === '__v_isReadonly'
        ? t
        : n === '__v_raw'
          ? e
          : Reflect.get($(a, n) && n in e ? a : e, n, i)
}
const wi = { get: Ja(!1, !1) },
  Ei = { get: Ja(!1, !0) },
  Ai = { get: Ja(!0, !1) }
const Qe = new WeakMap(),
  tn = new WeakMap(),
  sn = new WeakMap(),
  Pi = new WeakMap()
function Ii(t) {
  switch (t) {
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
function Oi(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ii(ai(t))
}
function Xa(t) {
  return Bt(t) ? t : za(t, !1, Ci, wi, Qe)
}
function Ri(t) {
  return za(t, !1, ki, Ei, tn)
}
function wa(t) {
  return za(t, !0, Si, Ai, sn)
}
function za(t, s, a, e, n) {
  if (!J(t) || (t.__v_raw && !(s && t.__v_isReactive))) return t
  const i = Oi(t)
  if (i === 0) return t
  const c = n.get(t)
  if (c) return c
  const l = new Proxy(t, i === 2 ? e : a)
  return (n.set(t, l), l)
}
function ls(t) {
  return Bt(t) ? ls(t.__v_raw) : !!(t && t.__v_isReactive)
}
function Bt(t) {
  return !!(t && t.__v_isReadonly)
}
function xt(t) {
  return !!(t && t.__v_isShallow)
}
function Ya(t) {
  return t ? !!t.__v_raw : !1
}
function N(t) {
  const s = t && t.__v_raw
  return s ? N(s) : t
}
function Mi(t) {
  return (!$(t, '__v_skip') && Object.isExtensible(t) && He(t, '__v_skip', !0), t)
}
const Vt = (t) => (J(t) ? Xa(t) : t),
  Es = (t) => (J(t) ? wa(t) : t)
function st(t) {
  return t ? t.__v_isRef === !0 : !1
}
function an(t) {
  return Di(t, !1)
}
function Di(t, s) {
  return st(t) ? t : new Fi(t, s)
}
class Fi {
  constructor(s, a) {
    ;((this.dep = new Ga()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = a ? s : N(s)),
      (this._value = a ? s : Vt(s)),
      (this.__v_isShallow = a))
  }
  get value() {
    return (this.dep.track(), this._value)
  }
  set value(s) {
    const a = this._rawValue,
      e = this.__v_isShallow || xt(s) || Bt(s)
    ;((s = e ? s : N(s)),
      Ut(s, a) && ((this._rawValue = s), (this._value = e ? s : Vt(s)), this.dep.trigger()))
  }
}
function Vi(t) {
  return st(t) ? t.value : t
}
const Ni = {
  get: (t, s, a) => (s === '__v_raw' ? t : Vi(Reflect.get(t, s, a))),
  set: (t, s, a, e) => {
    const n = t[s]
    return st(n) && !st(a) ? ((n.value = a), !0) : Reflect.set(t, s, a, e)
  },
}
function en(t) {
  return ls(t) ? t : new Proxy(t, Ni)
}
class $i {
  constructor(s, a, e) {
    ;((this.fn = s),
      (this.setter = a),
      (this._value = void 0),
      (this.dep = new Ga(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Ts - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !a),
      (this.isSSR = e))
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && W !== this)) return (Ue(this, !0), !0)
  }
  get value() {
    const s = this.dep.track()
    return (qe(this), s && (s.version = this.dep.version), this._value)
  }
  set value(s) {
    this.setter && this.setter(s)
  }
}
function Hi(t, s, a = !1) {
  let e, n
  return (I(t) ? (e = t) : ((e = t.get), (n = t.set)), new $i(e, n, a))
}
const Ls = {},
  Js = new WeakMap()
let Yt
function Li(t, s = !1, a = Yt) {
  if (a) {
    let e = Js.get(a)
    ;(e || Js.set(a, (e = [])), e.push(t))
  }
}
function Ki(t, s, a = U) {
  const { immediate: e, deep: n, once: i, scheduler: c, augmentJob: l, call: o } = a,
    p = (_) => (n ? _ : xt(_) || n === !1 || n === 0 ? Wt(_, 1) : Wt(_))
  let f,
    u,
    k,
    T,
    R = !1,
    M = !1
  if (
    (st(t)
      ? ((u = () => t.value), (R = xt(t)))
      : ls(t)
        ? ((u = () => p(t)), (R = !0))
        : O(t)
          ? ((M = !0),
            (R = t.some((_) => ls(_) || xt(_))),
            (u = () =>
              t.map((_) => {
                if (st(_)) return _.value
                if (ls(_)) return p(_)
                if (I(_)) return o ? o(_, 2) : _()
              })))
          : I(t)
            ? s
              ? (u = o ? () => o(t, 2) : t)
              : (u = () => {
                  if (k) {
                    Dt()
                    try {
                      k()
                    } finally {
                      Ft()
                    }
                  }
                  const _ = Yt
                  Yt = f
                  try {
                    return o ? o(t, 3, [T]) : t(T)
                  } finally {
                    Yt = _
                  }
                })
            : (u = Et),
    s && n)
  ) {
    const _ = u,
      V = n === !0 ? 1 / 0 : n
    u = () => Wt(_(), V)
  }
  const q = ui(),
    D = () => {
      ;(f.stop(), q && q.active && $a(q.effects, f))
    }
  if (i && s) {
    const _ = s
    s = (...V) => {
      ;(_(...V), D())
    }
  }
  let j = M ? new Array(t.length).fill(Ls) : Ls
  const w = (_) => {
    if (!(!(f.flags & 1) || (!f.dirty && !_)))
      if (s) {
        const V = f.run()
        if (n || R || (M ? V.some((Y, X) => Ut(Y, j[X])) : Ut(V, j))) {
          k && k()
          const Y = Yt
          Yt = f
          try {
            const X = [V, j === Ls ? void 0 : M && j[0] === Ls ? [] : j, T]
            ;((j = V), o ? o(s, 3, X) : s(...X))
          } finally {
            Yt = Y
          }
        }
      } else f.run()
  }
  return (
    l && l(w),
    (f = new Ke(u)),
    (f.scheduler = c ? () => c(w, !1) : w),
    (T = (_) => Li(_, !1, f)),
    (k = f.onStop =
      () => {
        const _ = Js.get(f)
        if (_) {
          if (o) o(_, 4)
          else for (const V of _) V()
          Js.delete(f)
        }
      }),
    s ? (e ? w(!0) : (j = f.run())) : c ? c(w.bind(null, !0), !0) : f.run(),
    (D.pause = f.pause.bind(f)),
    (D.resume = f.resume.bind(f)),
    (D.stop = D),
    D
  )
}
function Wt(t, s = 1 / 0, a) {
  if (s <= 0 || !J(t) || t.__v_skip || ((a = a || new Map()), (a.get(t) || 0) >= s)) return t
  if ((a.set(t, s), s--, st(t))) Wt(t.value, s, a)
  else if (O(t)) for (let e = 0; e < t.length; e++) Wt(t[e], s, a)
  else if (Qn(t) || bs(t))
    t.forEach((e) => {
      Wt(e, s, a)
    })
  else if (ei(t)) {
    for (const e in t) Wt(t[e], s, a)
    for (const e of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, e) && Wt(t[e], s, a)
  }
  return t
}
function Rs(t, s, a, e) {
  try {
    return e ? t(...e) : t()
  } catch (n) {
    ca(n, s, a)
  }
}
function At(t, s, a, e) {
  if (I(t)) {
    const n = Rs(t, s, a, e)
    return (
      n &&
        $e(n) &&
        n.catch((i) => {
          ca(i, s, a)
        }),
      n
    )
  }
  if (O(t)) {
    const n = []
    for (let i = 0; i < t.length; i++) n.push(At(t[i], s, a, e))
    return n
  }
}
function ca(t, s, a, e = !0) {
  const n = s ? s.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: c } = (s && s.appContext.config) || U
  if (s) {
    let l = s.parent
    const o = s.proxy,
      p = `https://vuejs.org/error-reference/#runtime-${a}`
    for (; l; ) {
      const f = l.ec
      if (f) {
        for (let u = 0; u < f.length; u++) if (f[u](t, o, p) === !1) return
      }
      l = l.parent
    }
    if (i) {
      ;(Dt(), Rs(i, null, 10, [t, o, p]), Ft())
      return
    }
  }
  Wi(t, a, n, e, c)
}
function Wi(t, s, a, e = !0, n = !1) {
  if (n) throw t
  console.error(t)
}
const it = []
let jt = -1
const ds = []
let Lt = null,
  ns = 0
const nn = Promise.resolve()
let Xs = null
function Ui(t) {
  const s = Xs || nn
  return t ? s.then(this ? t.bind(this) : t) : s
}
function Bi(t) {
  let s = jt + 1,
    a = it.length
  for (; s < a; ) {
    const e = (s + a) >>> 1,
      n = it[e],
      i = As(n)
    i < t || (i === t && n.flags & 2) ? (s = e + 1) : (a = e)
  }
  return s
}
function Za(t) {
  if (!(t.flags & 1)) {
    const s = As(t),
      a = it[it.length - 1]
    ;(!a || (!(t.flags & 2) && s >= As(a)) ? it.push(t) : it.splice(Bi(s), 0, t),
      (t.flags |= 1),
      cn())
  }
}
function cn() {
  Xs || (Xs = nn.then(dn))
}
function Gi(t) {
  ;(O(t)
    ? ds.push(...t)
    : Lt && t.id === -1
      ? Lt.splice(ns + 1, 0, t)
      : t.flags & 1 || (ds.push(t), (t.flags |= 1)),
    cn())
}
function pe(t, s, a = jt + 1) {
  for (; a < it.length; a++) {
    const e = it[a]
    if (e && e.flags & 2) {
      if (t && e.id !== t.uid) continue
      ;(it.splice(a, 1), a--, e.flags & 4 && (e.flags &= -2), e(), e.flags & 4 || (e.flags &= -2))
    }
  }
}
function ln(t) {
  if (ds.length) {
    const s = [...new Set(ds)].sort((a, e) => As(a) - As(e))
    if (((ds.length = 0), Lt)) {
      Lt.push(...s)
      return
    }
    for (Lt = s, ns = 0; ns < Lt.length; ns++) {
      const a = Lt[ns]
      ;(a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), (a.flags &= -2))
    }
    ;((Lt = null), (ns = 0))
  }
}
const As = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id)
function dn(t) {
  try {
    for (jt = 0; jt < it.length; jt++) {
      const s = it[jt]
      s &&
        !(s.flags & 8) &&
        (s.flags & 4 && (s.flags &= -2), Rs(s, s.i, s.i ? 15 : 14), s.flags & 4 || (s.flags &= -2))
    }
  } finally {
    for (; jt < it.length; jt++) {
      const s = it[jt]
      s && (s.flags &= -2)
    }
    ;((jt = -1), (it.length = 0), ln(), (Xs = null), (it.length || ds.length) && dn())
  }
}
let bt = null,
  rn = null
function zs(t) {
  const s = bt
  return ((bt = t), (rn = (t && t.type.__scopeId) || null), s)
}
function on(t, s = bt, a) {
  if (!s || t._n) return t
  const e = (...n) => {
    e._d && Se(-1)
    const i = zs(s)
    let c
    try {
      c = t(...n)
    } finally {
      ;(zs(i), e._d && Se(1))
    }
    return c
  }
  return ((e._n = !0), (e._c = !0), (e._d = !0), e)
}
function Xt(t, s, a, e) {
  const n = t.dirs,
    i = s && s.dirs
  for (let c = 0; c < n.length; c++) {
    const l = n[c]
    i && (l.oldValue = i[c].value)
    let o = l.dir[e]
    o && (Dt(), At(o, a, 8, [t.el, l, t, s]), Ft())
  }
}
function qi(t, s) {
  if (tt) {
    let a = tt.provides
    const e = tt.parent && tt.parent.provides
    ;(e === a && (a = tt.provides = Object.create(e)), (a[t] = s))
  }
}
function Ws(t, s, a = !1) {
  const e = Ln()
  if (e || rs) {
    let n = rs
      ? rs._context.provides
      : e
        ? e.parent == null || e.ce
          ? e.vnode.appContext && e.vnode.appContext.provides
          : e.parent.provides
        : void 0
    if (n && t in n) return n[t]
    if (arguments.length > 1) return a && I(s) ? s.call(e && e.proxy) : s
  }
}
const Ji = Symbol.for('v-scx'),
  Xi = () => Ws(Ji)
function Us(t, s, a) {
  return fn(t, s, a)
}
function fn(t, s, a = U) {
  const { immediate: e, deep: n, flush: i, once: c } = a,
    l = at({}, a),
    o = (s && e) || (!s && i !== 'post')
  let p
  if (Is) {
    if (i === 'sync') {
      const T = Xi()
      p = T.__watcherHandles || (T.__watcherHandles = [])
    } else if (!o) {
      const T = () => {}
      return ((T.stop = Et), (T.resume = Et), (T.pause = Et), T)
    }
  }
  const f = tt
  l.call = (T, R, M) => At(T, f, R, M)
  let u = !1
  ;(i === 'post'
    ? (l.scheduler = (T) => {
        Z(T, f && f.suspense)
      })
    : i !== 'sync' &&
      ((u = !0),
      (l.scheduler = (T, R) => {
        R ? T() : Za(T)
      })),
    (l.augmentJob = (T) => {
      ;(s && (T.flags |= 4), u && ((T.flags |= 2), f && ((T.id = f.uid), (T.i = f))))
    }))
  const k = Ki(t, s, l)
  return (Is && (p ? p.push(k) : o && k()), k)
}
function zi(t, s, a) {
  const e = this.proxy,
    n = z(t) ? (t.includes('.') ? vn(e, t) : () => e[t]) : t.bind(e, e)
  let i
  I(s) ? (i = s) : ((i = s.handler), (a = s))
  const c = Ms(this),
    l = fn(n, i.bind(e), a)
  return (c(), l)
}
function vn(t, s) {
  const a = s.split('.')
  return () => {
    let e = t
    for (let n = 0; n < a.length && e; n++) e = e[a[n]]
    return e
  }
}
const Yi = Symbol('_vte'),
  Zi = (t) => t.__isTeleport,
  Qi = Symbol('_leaveCb')
function la(t, s) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = s), la(t.component.subTree, s))
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = s.clone(t.ssContent)),
        (t.ssFallback.transition = s.clone(t.ssFallback)))
      : (t.transition = s)
}
function da(t, s) {
  return I(t) ? at({ name: t.name }, s, { setup: t }) : t
}
function pn(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + '-', 0, 0]
}
const Ys = new WeakMap()
function Ss(t, s, a, e, n = !1) {
  if (O(t)) {
    t.forEach((R, M) => Ss(R, s && (O(s) ? s[M] : s), a, e, n))
    return
  }
  if (Qt(e) && !n) {
    e.shapeFlag & 512 &&
      e.type.__asyncResolved &&
      e.component.subTree.component &&
      Ss(t, s, a, e.component.subTree)
    return
  }
  const i = e.shapeFlag & 4 ? ee(e.component) : e.el,
    c = n ? null : i,
    { i: l, r: o } = t,
    p = s && s.r,
    f = l.refs === U ? (l.refs = {}) : l.refs,
    u = l.setupState,
    k = N(u),
    T = u === U ? Ne : (R) => $(k, R)
  if (p != null && p !== o) {
    if ((ue(s), z(p))) ((f[p] = null), T(p) && (u[p] = null))
    else if (st(p)) {
      p.value = null
      const R = s
      R.k && (f[R.k] = null)
    }
  }
  if (I(o)) Rs(o, l, 12, [c, f])
  else {
    const R = z(o),
      M = st(o)
    if (R || M) {
      const q = () => {
        if (t.f) {
          const D = R ? (T(o) ? u[o] : f[o]) : o.value
          if (n) O(D) && $a(D, i)
          else if (O(D)) D.includes(i) || D.push(i)
          else if (R) ((f[o] = [i]), T(o) && (u[o] = f[o]))
          else {
            const j = [i]
            ;((o.value = j), t.k && (f[t.k] = j))
          }
        } else R ? ((f[o] = c), T(o) && (u[o] = c)) : M && ((o.value = c), t.k && (f[t.k] = c))
      }
      if (c) {
        const D = () => {
          ;(q(), Ys.delete(t))
        }
        ;((D.id = -1), Ys.set(t, D), Z(D, a))
      } else (ue(t), q())
    }
  }
}
function ue(t) {
  const s = Ys.get(t)
  s && ((s.flags |= 8), Ys.delete(t))
}
ia().requestIdleCallback
ia().cancelIdleCallback
const Qt = (t) => !!t.type.__asyncLoader,
  un = (t) => t.type.__isKeepAlive,
  tc = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(t, { slots: s }) {
      const a = Ln(),
        e = a.ctx
      if (!e.renderer)
        return () => {
          const j = s.default && s.default()
          return j && j.length === 1 ? j[0] : j
        }
      const n = new Map(),
        i = new Set()
      let c = null
      const l = a.suspense,
        {
          renderer: {
            p: o,
            m: p,
            um: f,
            o: { createElement: u },
          },
        } = e,
        k = u('div')
      ;((e.activate = (j, w, _, V, Y) => {
        const X = j.component
        ;(p(j, w, _, 0, l),
          o(X.vnode, j, w, _, X, l, V, j.slotScopeIds, Y),
          Z(() => {
            ;((X.isDeactivated = !1), X.a && xs(X.a))
            const lt = j.props && j.props.onVnodeMounted
            lt && ut(lt, X.parent, j)
          }, l))
      }),
        (e.deactivate = (j) => {
          const w = j.component
          ;(Qs(w.m),
            Qs(w.a),
            p(j, k, null, 1, l),
            Z(() => {
              w.da && xs(w.da)
              const _ = j.props && j.props.onVnodeUnmounted
              ;(_ && ut(_, w.parent, j), (w.isDeactivated = !0))
            }, l))
        }))
      function T(j) {
        ;(ba(j), f(j, a, l, !0))
      }
      function R(j) {
        n.forEach((w, _) => {
          const V = Da(Qt(w) ? w.type.__asyncResolved || {} : w.type)
          V && !j(V) && M(_)
        })
      }
      function M(j) {
        const w = n.get(j)
        ;(w && (!c || !is(w, c)) ? T(w) : c && ba(c), n.delete(j), i.delete(j))
      }
      Us(
        () => [t.include, t.exclude],
        ([j, w]) => {
          ;(j && R((_) => hs(j, _)), w && R((_) => !hs(w, _)))
        },
        { flush: 'post', deep: !0 },
      )
      let q = null
      const D = () => {
        q != null &&
          (ta(a.subTree.type)
            ? Z(() => {
                n.set(q, Ks(a.subTree))
              }, a.subTree.suspense)
            : n.set(q, Ks(a.subTree)))
      }
      return (
        hn(D),
        mn(D),
        bn(() => {
          n.forEach((j) => {
            const { subTree: w, suspense: _ } = a,
              V = Ks(w)
            if (j.type === V.type && j.key === V.key) {
              ba(V)
              const Y = V.component.da
              Y && Z(Y, _)
              return
            }
            T(j)
          })
        }),
        () => {
          if (((q = null), !s.default)) return (c = null)
          const j = s.default(),
            w = j[0]
          if (j.length > 1) return ((c = null), j)
          if (!se(w) || (!(w.shapeFlag & 4) && !(w.shapeFlag & 128))) return ((c = null), w)
          let _ = Ks(w)
          if (_.type === Nt) return ((c = null), _)
          const V = _.type,
            Y = Da(Qt(_) ? _.type.__asyncResolved || {} : V),
            { include: X, exclude: lt, max: Gt } = t
          if ((X && (!Y || !hs(X, Y))) || (lt && Y && hs(lt, Y)))
            return ((_.shapeFlag &= -257), (c = _), w)
          const ft = _.key == null ? V : _.key,
            Pt = n.get(ft)
          return (
            _.el && ((_ = ts(_)), w.shapeFlag & 128 && (w.ssContent = _)),
            (q = ft),
            Pt
              ? ((_.el = Pt.el),
                (_.component = Pt.component),
                _.transition && la(_, _.transition),
                (_.shapeFlag |= 512),
                i.delete(ft),
                i.add(ft))
              : (i.add(ft), Gt && i.size > parseInt(Gt, 10) && M(i.values().next().value)),
            (_.shapeFlag |= 256),
            (c = _),
            ta(w.type) ? w : _
          )
        }
      )
    },
  },
  sc = tc
function hs(t, s) {
  return O(t)
    ? t.some((a) => hs(a, s))
    : z(t)
      ? t.split(',').includes(s)
      : ti(t)
        ? ((t.lastIndex = 0), t.test(s))
        : !1
}
function ac(t, s) {
  gn(t, 'a', s)
}
function ec(t, s) {
  gn(t, 'da', s)
}
function gn(t, s, a = tt) {
  const e =
    t.__wdc ||
    (t.__wdc = () => {
      let n = a
      for (; n; ) {
        if (n.isDeactivated) return
        n = n.parent
      }
      return t()
    })
  if ((ra(s, e, a), a)) {
    let n = a.parent
    for (; n && n.parent; ) (un(n.parent.vnode) && nc(e, s, a, n), (n = n.parent))
  }
}
function nc(t, s, a, e) {
  const n = ra(s, t, e, !0)
  _n(() => {
    $a(e[s], n)
  }, a)
}
function ba(t) {
  ;((t.shapeFlag &= -257), (t.shapeFlag &= -513))
}
function Ks(t) {
  return t.shapeFlag & 128 ? t.ssContent : t
}
function ra(t, s, a = tt, e = !1) {
  if (a) {
    const n = a[t] || (a[t] = []),
      i =
        s.__weh ||
        (s.__weh = (...c) => {
          Dt()
          const l = Ms(a),
            o = At(s, a, t, c)
          return (l(), Ft(), o)
        })
    return (e ? n.unshift(i) : n.push(i), i)
  }
}
const $t =
    (t) =>
    (s, a = tt) => {
      ;(!Is || t === 'sp') && ra(t, (...e) => s(...e), a)
    },
  ic = $t('bm'),
  hn = $t('m'),
  cc = $t('bu'),
  mn = $t('u'),
  bn = $t('bum'),
  _n = $t('um'),
  lc = $t('sp'),
  dc = $t('rtg'),
  rc = $t('rtc')
function oc(t, s = tt) {
  ra('ec', t, s)
}
const xn = 'components'
function fc(t, s) {
  return Cn(xn, t, !0, s) || t
}
const yn = Symbol.for('v-ndc')
function vc(t) {
  return z(t) ? Cn(xn, t, !1) || t : t || yn
}
function Cn(t, s, a = !0, e = !1) {
  const n = bt || tt
  if (n) {
    const i = n.type
    {
      const l = Da(i, !1)
      if (l && (l === s || l === mt(s) || l === na(mt(s)))) return i
    }
    const c = ge(n[t] || i[t], s) || ge(n.appContext[t], s)
    return !c && e ? i : c
  }
}
function ge(t, s) {
  return t && (t[s] || t[mt(s)] || t[na(mt(s))])
}
const Ea = (t) => (t ? (Kn(t) ? ee(t) : Ea(t.parent)) : null),
  ks = at(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Ea(t.parent),
    $root: (t) => Ea(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => kn(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        Za(t.update)
      }),
    $nextTick: (t) => t.n || (t.n = Ui.bind(t.proxy)),
    $watch: (t) => zi.bind(t),
  }),
  _a = (t, s) => t !== U && !t.__isScriptSetup && $(t, s),
  pc = {
    get({ _: t }, s) {
      if (s === '__v_skip') return !0
      const { ctx: a, setupState: e, data: n, props: i, accessCache: c, type: l, appContext: o } = t
      if (s[0] !== '$') {
        const k = c[s]
        if (k !== void 0)
          switch (k) {
            case 1:
              return e[s]
            case 2:
              return n[s]
            case 4:
              return a[s]
            case 3:
              return i[s]
          }
        else {
          if (_a(e, s)) return ((c[s] = 1), e[s])
          if (n !== U && $(n, s)) return ((c[s] = 2), n[s])
          if ($(i, s)) return ((c[s] = 3), i[s])
          if (a !== U && $(a, s)) return ((c[s] = 4), a[s])
          Aa && (c[s] = 0)
        }
      }
      const p = ks[s]
      let f, u
      if (p) return (s === '$attrs' && Q(t.attrs, 'get', ''), p(t))
      if ((f = l.__cssModules) && (f = f[s])) return f
      if (a !== U && $(a, s)) return ((c[s] = 4), a[s])
      if (((u = o.config.globalProperties), $(u, s))) return u[s]
    },
    set({ _: t }, s, a) {
      const { data: e, setupState: n, ctx: i } = t
      return _a(n, s)
        ? ((n[s] = a), !0)
        : e !== U && $(e, s)
          ? ((e[s] = a), !0)
          : $(t.props, s) || (s[0] === '$' && s.slice(1) in t)
            ? !1
            : ((i[s] = a), !0)
    },
    has(
      { _: { data: t, setupState: s, accessCache: a, ctx: e, appContext: n, props: i, type: c } },
      l,
    ) {
      let o
      return !!(
        a[l] ||
        (t !== U && l[0] !== '$' && $(t, l)) ||
        _a(s, l) ||
        $(i, l) ||
        $(e, l) ||
        $(ks, l) ||
        $(n.config.globalProperties, l) ||
        ((o = c.__cssModules) && o[l])
      )
    },
    defineProperty(t, s, a) {
      return (
        a.get != null ? (t._.accessCache[s] = 0) : $(a, 'value') && this.set(t, s, a.value, null),
        Reflect.defineProperty(t, s, a)
      )
    },
  }
function he(t) {
  return O(t) ? t.reduce((s, a) => ((s[a] = null), s), {}) : t
}
let Aa = !0
function uc(t) {
  const s = kn(t),
    a = t.proxy,
    e = t.ctx
  ;((Aa = !1), s.beforeCreate && me(s.beforeCreate, t, 'bc'))
  const {
    data: n,
    computed: i,
    methods: c,
    watch: l,
    provide: o,
    inject: p,
    created: f,
    beforeMount: u,
    mounted: k,
    beforeUpdate: T,
    updated: R,
    activated: M,
    deactivated: q,
    beforeDestroy: D,
    beforeUnmount: j,
    destroyed: w,
    unmounted: _,
    render: V,
    renderTracked: Y,
    renderTriggered: X,
    errorCaptured: lt,
    serverPrefetch: Gt,
    expose: ft,
    inheritAttrs: Pt,
    components: Ds,
    directives: Fs,
    filters: va,
  } = s
  if ((p && gc(p, e, null), c))
    for (const B in c) {
      const L = c[B]
      I(L) && (e[B] = L.bind(a))
    }
  if (n) {
    const B = n.call(a, a)
    J(B) && (t.data = Xa(B))
  }
  if (((Aa = !0), i))
    for (const B in i) {
      const L = i[B],
        qt = I(L) ? L.bind(a, a) : I(L.get) ? L.get.bind(a, a) : Et,
        Vs = !I(L) && I(L.set) ? L.set.bind(a) : Et,
        Jt = Un({ get: qt, set: Vs })
      Object.defineProperty(e, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Jt.value,
        set: (yt) => (Jt.value = yt),
      })
    }
  if (l) for (const B in l) Sn(l[B], e, a, B)
  if (o) {
    const B = I(o) ? o.call(a) : o
    Reflect.ownKeys(B).forEach((L) => {
      qi(L, B[L])
    })
  }
  f && me(f, t, 'c')
  function et(B, L) {
    O(L) ? L.forEach((qt) => B(qt.bind(a))) : L && B(L.bind(a))
  }
  if (
    (et(ic, u),
    et(hn, k),
    et(cc, T),
    et(mn, R),
    et(ac, M),
    et(ec, q),
    et(oc, lt),
    et(rc, Y),
    et(dc, X),
    et(bn, j),
    et(_n, _),
    et(lc, Gt),
    O(ft))
  )
    if (ft.length) {
      const B = t.exposed || (t.exposed = {})
      ft.forEach((L) => {
        Object.defineProperty(B, L, { get: () => a[L], set: (qt) => (a[L] = qt), enumerable: !0 })
      })
    } else t.exposed || (t.exposed = {})
  ;(V && t.render === Et && (t.render = V),
    Pt != null && (t.inheritAttrs = Pt),
    Ds && (t.components = Ds),
    Fs && (t.directives = Fs),
    Gt && pn(t))
}
function gc(t, s, a = Et) {
  O(t) && (t = Pa(t))
  for (const e in t) {
    const n = t[e]
    let i
    ;(J(n)
      ? 'default' in n
        ? (i = Ws(n.from || e, n.default, !0))
        : (i = Ws(n.from || e))
      : (i = Ws(n)),
      st(i)
        ? Object.defineProperty(s, e, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (c) => (i.value = c),
          })
        : (s[e] = i))
  }
}
function me(t, s, a) {
  At(O(t) ? t.map((e) => e.bind(s.proxy)) : t.bind(s.proxy), s, a)
}
function Sn(t, s, a, e) {
  let n = e.includes('.') ? vn(a, e) : () => a[e]
  if (z(t)) {
    const i = s[t]
    I(i) && Us(n, i)
  } else if (I(t)) Us(n, t.bind(a))
  else if (J(t))
    if (O(t)) t.forEach((i) => Sn(i, s, a, e))
    else {
      const i = I(t.handler) ? t.handler.bind(a) : s[t.handler]
      I(i) && Us(n, i, t)
    }
}
function kn(t) {
  const s = t.type,
    { mixins: a, extends: e } = s,
    {
      mixins: n,
      optionsCache: i,
      config: { optionMergeStrategies: c },
    } = t.appContext,
    l = i.get(s)
  let o
  return (
    l
      ? (o = l)
      : !n.length && !a && !e
        ? (o = s)
        : ((o = {}), n.length && n.forEach((p) => Zs(o, p, c, !0)), Zs(o, s, c)),
    J(s) && i.set(s, o),
    o
  )
}
function Zs(t, s, a, e = !1) {
  const { mixins: n, extends: i } = s
  ;(i && Zs(t, i, a, !0), n && n.forEach((c) => Zs(t, c, a, !0)))
  for (const c in s)
    if (!(e && c === 'expose')) {
      const l = hc[c] || (a && a[c])
      t[c] = l ? l(t[c], s[c]) : s[c]
    }
  return t
}
const hc = {
  data: be,
  props: _e,
  emits: _e,
  methods: ms,
  computed: ms,
  beforeCreate: nt,
  created: nt,
  beforeMount: nt,
  mounted: nt,
  beforeUpdate: nt,
  updated: nt,
  beforeDestroy: nt,
  beforeUnmount: nt,
  destroyed: nt,
  unmounted: nt,
  activated: nt,
  deactivated: nt,
  errorCaptured: nt,
  serverPrefetch: nt,
  components: ms,
  directives: ms,
  watch: bc,
  provide: be,
  inject: mc,
}
function be(t, s) {
  return s
    ? t
      ? function () {
          return at(I(t) ? t.call(this, this) : t, I(s) ? s.call(this, this) : s)
        }
      : s
    : t
}
function mc(t, s) {
  return ms(Pa(t), Pa(s))
}
function Pa(t) {
  if (O(t)) {
    const s = {}
    for (let a = 0; a < t.length; a++) s[t[a]] = t[a]
    return s
  }
  return t
}
function nt(t, s) {
  return t ? [...new Set([].concat(t, s))] : s
}
function ms(t, s) {
  return t ? at(Object.create(null), t, s) : s
}
function _e(t, s) {
  return t
    ? O(t) && O(s)
      ? [...new Set([...t, ...s])]
      : at(Object.create(null), he(t), he(s ?? {}))
    : s
}
function bc(t, s) {
  if (!t) return s
  if (!s) return t
  const a = at(Object.create(null), t)
  for (const e in s) a[e] = nt(t[e], s[e])
  return a
}
function jn() {
  return {
    app: null,
    config: {
      isNativeTag: Ne,
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
let _c = 0
function xc(t, s) {
  return function (e, n = null) {
    ;(I(e) || (e = at({}, e)), n != null && !J(n) && (n = null))
    const i = jn(),
      c = new WeakSet(),
      l = []
    let o = !1
    const p = (i.app = {
      _uid: _c++,
      _component: e,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: Yc,
      get config() {
        return i.config
      },
      set config(f) {},
      use(f, ...u) {
        return (
          c.has(f) ||
            (f && I(f.install) ? (c.add(f), f.install(p, ...u)) : I(f) && (c.add(f), f(p, ...u))),
          p
        )
      },
      mixin(f) {
        return (i.mixins.includes(f) || i.mixins.push(f), p)
      },
      component(f, u) {
        return u ? ((i.components[f] = u), p) : i.components[f]
      },
      directive(f, u) {
        return u ? ((i.directives[f] = u), p) : i.directives[f]
      },
      mount(f, u, k) {
        if (!o) {
          const T = p._ceVNode || G(e, n)
          return (
            (T.appContext = i),
            k === !0 ? (k = 'svg') : k === !1 && (k = void 0),
            t(T, f, k),
            (o = !0),
            (p._container = f),
            (f.__vue_app__ = p),
            ee(T.component)
          )
        }
      },
      onUnmount(f) {
        l.push(f)
      },
      unmount() {
        o && (At(l, p._instance, 16), t(null, p._container), delete p._container.__vue_app__)
      },
      provide(f, u) {
        return ((i.provides[f] = u), p)
      },
      runWithContext(f) {
        const u = rs
        rs = p
        try {
          return f()
        } finally {
          rs = u
        }
      },
    })
    return p
  }
}
let rs = null
const yc = (t, s) =>
  s === 'modelValue' || s === 'model-value'
    ? t.modelModifiers
    : t[`${s}Modifiers`] || t[`${mt(s)}Modifiers`] || t[`${ss(s)}Modifiers`]
function Cc(t, s, ...a) {
  if (t.isUnmounted) return
  const e = t.vnode.props || U
  let n = a
  const i = s.startsWith('update:'),
    c = i && yc(e, s.slice(7))
  c && (c.trim && (n = a.map((f) => (z(f) ? f.trim() : f))), c.number && (n = a.map(ci)))
  let l,
    o = e[(l = ua(s))] || e[(l = ua(mt(s)))]
  ;(!o && i && (o = e[(l = ua(ss(s)))]), o && At(o, t, 6, n))
  const p = e[l + 'Once']
  if (p) {
    if (!t.emitted) t.emitted = {}
    else if (t.emitted[l]) return
    ;((t.emitted[l] = !0), At(p, t, 6, n))
  }
}
const Sc = new WeakMap()
function Tn(t, s, a = !1) {
  const e = a ? Sc : s.emitsCache,
    n = e.get(t)
  if (n !== void 0) return n
  const i = t.emits
  let c = {},
    l = !1
  if (!I(t)) {
    const o = (p) => {
      const f = Tn(p, s, !0)
      f && ((l = !0), at(c, f))
    }
    ;(!a && s.mixins.length && s.mixins.forEach(o),
      t.extends && o(t.extends),
      t.mixins && t.mixins.forEach(o))
  }
  return !i && !l
    ? (J(t) && e.set(t, null), null)
    : (O(i) ? i.forEach((o) => (c[o] = null)) : at(c, i), J(t) && e.set(t, c), c)
}
function oa(t, s) {
  return !t || !aa(s)
    ? !1
    : ((s = s.slice(2).replace(/Once$/, '')),
      $(t, s[0].toLowerCase() + s.slice(1)) || $(t, ss(s)) || $(t, s))
}
function xe(t) {
  const {
      type: s,
      vnode: a,
      proxy: e,
      withProxy: n,
      propsOptions: [i],
      slots: c,
      attrs: l,
      emit: o,
      render: p,
      renderCache: f,
      props: u,
      data: k,
      setupState: T,
      ctx: R,
      inheritAttrs: M,
    } = t,
    q = zs(t)
  let D, j
  try {
    if (a.shapeFlag & 4) {
      const _ = n || e,
        V = _
      ;((D = wt(p.call(V, _, f, u, T, k, R))), (j = l))
    } else {
      const _ = s
      ;((D = wt(_.length > 1 ? _(u, { attrs: l, slots: c, emit: o }) : _(u, null))),
        (j = s.props ? l : kc(l)))
    }
  } catch (_) {
    ;((js.length = 0), ca(_, t, 1), (D = G(Nt)))
  }
  let w = D
  if (j && M !== !1) {
    const _ = Object.keys(j),
      { shapeFlag: V } = w
    _.length && V & 7 && (i && _.some(Na) && (j = jc(j, i)), (w = ts(w, j, !1, !0)))
  }
  return (
    a.dirs && ((w = ts(w, null, !1, !0)), (w.dirs = w.dirs ? w.dirs.concat(a.dirs) : a.dirs)),
    a.transition && la(w, a.transition),
    (D = w),
    zs(q),
    D
  )
}
const kc = (t) => {
    let s
    for (const a in t) (a === 'class' || a === 'style' || aa(a)) && ((s || (s = {}))[a] = t[a])
    return s
  },
  jc = (t, s) => {
    const a = {}
    for (const e in t) (!Na(e) || !(e.slice(9) in s)) && (a[e] = t[e])
    return a
  }
function Tc(t, s, a) {
  const { props: e, children: n, component: i } = t,
    { props: c, children: l, patchFlag: o } = s,
    p = i.emitsOptions
  if (s.dirs || s.transition) return !0
  if (a && o >= 0) {
    if (o & 1024) return !0
    if (o & 16) return e ? ye(e, c, p) : !!c
    if (o & 8) {
      const f = s.dynamicProps
      for (let u = 0; u < f.length; u++) {
        const k = f[u]
        if (c[k] !== e[k] && !oa(p, k)) return !0
      }
    }
  } else
    return (n || l) && (!l || !l.$stable) ? !0 : e === c ? !1 : e ? (c ? ye(e, c, p) : !0) : !!c
  return !1
}
function ye(t, s, a) {
  const e = Object.keys(s)
  if (e.length !== Object.keys(t).length) return !0
  for (let n = 0; n < e.length; n++) {
    const i = e[n]
    if (s[i] !== t[i] && !oa(a, i)) return !0
  }
  return !1
}
function wc({ vnode: t, parent: s }, a) {
  for (; s; ) {
    const e = s.subTree
    if ((e.suspense && e.suspense.activeBranch === t && (e.el = t.el), e === t))
      (((t = s.vnode).el = a), (s = s.parent))
    else break
  }
}
const wn = {},
  En = () => Object.create(wn),
  An = (t) => Object.getPrototypeOf(t) === wn
function Ec(t, s, a, e = !1) {
  const n = {},
    i = En()
  ;((t.propsDefaults = Object.create(null)), Pn(t, s, n, i))
  for (const c in t.propsOptions[0]) c in n || (n[c] = void 0)
  ;(a ? (t.props = e ? n : Ri(n)) : t.type.props ? (t.props = n) : (t.props = i), (t.attrs = i))
}
function Ac(t, s, a, e) {
  const {
      props: n,
      attrs: i,
      vnode: { patchFlag: c },
    } = t,
    l = N(n),
    [o] = t.propsOptions
  let p = !1
  if ((e || c > 0) && !(c & 16)) {
    if (c & 8) {
      const f = t.vnode.dynamicProps
      for (let u = 0; u < f.length; u++) {
        let k = f[u]
        if (oa(t.emitsOptions, k)) continue
        const T = s[k]
        if (o)
          if ($(i, k)) T !== i[k] && ((i[k] = T), (p = !0))
          else {
            const R = mt(k)
            n[R] = Ia(o, l, R, T, t, !1)
          }
        else T !== i[k] && ((i[k] = T), (p = !0))
      }
    }
  } else {
    Pn(t, s, n, i) && (p = !0)
    let f
    for (const u in l)
      (!s || (!$(s, u) && ((f = ss(u)) === u || !$(s, f)))) &&
        (o
          ? a && (a[u] !== void 0 || a[f] !== void 0) && (n[u] = Ia(o, l, u, void 0, t, !0))
          : delete n[u])
    if (i !== l) for (const u in i) (!s || !$(s, u)) && (delete i[u], (p = !0))
  }
  p && Mt(t.attrs, 'set', '')
}
function Pn(t, s, a, e) {
  const [n, i] = t.propsOptions
  let c = !1,
    l
  if (s)
    for (let o in s) {
      if (_s(o)) continue
      const p = s[o]
      let f
      n && $(n, (f = mt(o)))
        ? !i || !i.includes(f)
          ? (a[f] = p)
          : ((l || (l = {}))[f] = p)
        : oa(t.emitsOptions, o) || ((!(o in e) || p !== e[o]) && ((e[o] = p), (c = !0)))
    }
  if (i) {
    const o = N(a),
      p = l || U
    for (let f = 0; f < i.length; f++) {
      const u = i[f]
      a[u] = Ia(n, o, u, p[u], t, !$(p, u))
    }
  }
  return c
}
function Ia(t, s, a, e, n, i) {
  const c = t[a]
  if (c != null) {
    const l = $(c, 'default')
    if (l && e === void 0) {
      const o = c.default
      if (c.type !== Function && !c.skipFactory && I(o)) {
        const { propsDefaults: p } = n
        if (a in p) e = p[a]
        else {
          const f = Ms(n)
          ;((e = p[a] = o.call(null, s)), f())
        }
      } else e = o
      n.ce && n.ce._setProp(a, e)
    }
    c[0] && (i && !l ? (e = !1) : c[1] && (e === '' || e === ss(a)) && (e = !0))
  }
  return e
}
const Pc = new WeakMap()
function In(t, s, a = !1) {
  const e = a ? Pc : s.propsCache,
    n = e.get(t)
  if (n) return n
  const i = t.props,
    c = {},
    l = []
  let o = !1
  if (!I(t)) {
    const f = (u) => {
      o = !0
      const [k, T] = In(u, s, !0)
      ;(at(c, k), T && l.push(...T))
    }
    ;(!a && s.mixins.length && s.mixins.forEach(f),
      t.extends && f(t.extends),
      t.mixins && t.mixins.forEach(f))
  }
  if (!i && !o) return (J(t) && e.set(t, cs), cs)
  if (O(i))
    for (let f = 0; f < i.length; f++) {
      const u = mt(i[f])
      Ce(u) && (c[u] = U)
    }
  else if (i)
    for (const f in i) {
      const u = mt(f)
      if (Ce(u)) {
        const k = i[f],
          T = (c[u] = O(k) || I(k) ? { type: k } : at({}, k)),
          R = T.type
        let M = !1,
          q = !0
        if (O(R))
          for (let D = 0; D < R.length; ++D) {
            const j = R[D],
              w = I(j) && j.name
            if (w === 'Boolean') {
              M = !0
              break
            } else w === 'String' && (q = !1)
          }
        else M = I(R) && R.name === 'Boolean'
        ;((T[0] = M), (T[1] = q), (M || $(T, 'default')) && l.push(u))
      }
    }
  const p = [c, l]
  return (J(t) && e.set(t, p), p)
}
function Ce(t) {
  return t[0] !== '$' && !_s(t)
}
const Qa = (t) => t === '_' || t === '_ctx' || t === '$stable',
  te = (t) => (O(t) ? t.map(wt) : [wt(t)]),
  Ic = (t, s, a) => {
    if (s._n) return s
    const e = on((...n) => te(s(...n)), a)
    return ((e._c = !1), e)
  },
  On = (t, s, a) => {
    const e = t._ctx
    for (const n in t) {
      if (Qa(n)) continue
      const i = t[n]
      if (I(i)) s[n] = Ic(n, i, e)
      else if (i != null) {
        const c = te(i)
        s[n] = () => c
      }
    }
  },
  Rn = (t, s) => {
    const a = te(s)
    t.slots.default = () => a
  },
  Mn = (t, s, a) => {
    for (const e in s) (a || !Qa(e)) && (t[e] = s[e])
  },
  Oc = (t, s, a) => {
    const e = (t.slots = En())
    if (t.vnode.shapeFlag & 32) {
      const n = s._
      n ? (Mn(e, s, a), a && He(e, '_', n, !0)) : On(s, e)
    } else s && Rn(t, s)
  },
  Rc = (t, s, a) => {
    const { vnode: e, slots: n } = t
    let i = !0,
      c = U
    if (e.shapeFlag & 32) {
      const l = s._
      ;(l ? (a && l === 1 ? (i = !1) : Mn(n, s, a)) : ((i = !s.$stable), On(s, n)), (c = s))
    } else s && (Rn(t, s), (c = { default: 1 }))
    if (i) for (const l in n) !Qa(l) && c[l] == null && delete n[l]
  },
  Z = Nc
function Mc(t) {
  return Dc(t)
}
function Dc(t, s) {
  const a = ia()
  a.__VUE__ = !0
  const {
      insert: e,
      remove: n,
      patchProp: i,
      createElement: c,
      createText: l,
      createComment: o,
      setText: p,
      setElementText: f,
      parentNode: u,
      nextSibling: k,
      setScopeId: T = Et,
      insertStaticContent: R,
    } = t,
    M = (d, r, v, b = null, g = null, h = null, C = void 0, y = null, x = !!r.dynamicChildren) => {
      if (d === r) return
      ;(d && !is(d, r) && ((b = Ns(d)), yt(d, g, h, !0), (d = null)),
        r.patchFlag === -2 && ((x = !1), (r.dynamicChildren = null)))
      const { type: m, ref: A, shapeFlag: S } = r
      switch (m) {
        case fa:
          q(d, r, v, b)
          break
        case Nt:
          D(d, r, v, b)
          break
        case Bs:
          d == null && j(r, v, b, C)
          break
        case Tt:
          Ds(d, r, v, b, g, h, C, y, x)
          break
        default:
          S & 1
            ? V(d, r, v, b, g, h, C, y, x)
            : S & 6
              ? Fs(d, r, v, b, g, h, C, y, x)
              : (S & 64 || S & 128) && m.process(d, r, v, b, g, h, C, y, x, vs)
      }
      A != null && g
        ? Ss(A, d && d.ref, h, r || d, !r)
        : A == null && d && d.ref != null && Ss(d.ref, null, h, d, !0)
    },
    q = (d, r, v, b) => {
      if (d == null) e((r.el = l(r.children)), v, b)
      else {
        const g = (r.el = d.el)
        r.children !== d.children && p(g, r.children)
      }
    },
    D = (d, r, v, b) => {
      d == null ? e((r.el = o(r.children || '')), v, b) : (r.el = d.el)
    },
    j = (d, r, v, b) => {
      ;[d.el, d.anchor] = R(d.children, r, v, b, d.el, d.anchor)
    },
    w = ({ el: d, anchor: r }, v, b) => {
      let g
      for (; d && d !== r; ) ((g = k(d)), e(d, v, b), (d = g))
      e(r, v, b)
    },
    _ = ({ el: d, anchor: r }) => {
      let v
      for (; d && d !== r; ) ((v = k(d)), n(d), (d = v))
      n(r)
    },
    V = (d, r, v, b, g, h, C, y, x) => {
      if ((r.type === 'svg' ? (C = 'svg') : r.type === 'math' && (C = 'mathml'), d == null))
        Y(r, v, b, g, h, C, y, x)
      else {
        const m = d.el && d.el._isVueCE ? d.el : null
        try {
          ;(m && m._beginPatch(), Gt(d, r, g, h, C, y, x))
        } finally {
          m && m._endPatch()
        }
      }
    },
    Y = (d, r, v, b, g, h, C, y) => {
      let x, m
      const { props: A, shapeFlag: S, transition: E, dirs: P } = d
      if (
        ((x = d.el = c(d.type, h, A && A.is, A)),
        S & 8 ? f(x, d.children) : S & 16 && lt(d.children, x, null, b, g, xa(d, h), C, y),
        P && Xt(d, null, b, 'created'),
        X(x, d, d.scopeId, C, b),
        A)
      ) {
        for (const K in A) K !== 'value' && !_s(K) && i(x, K, null, A[K], h, b)
        ;('value' in A && i(x, 'value', null, A.value, h),
          (m = A.onVnodeBeforeMount) && ut(m, b, d))
      }
      P && Xt(d, null, b, 'beforeMount')
      const F = Fc(g, E)
      ;(F && E.beforeEnter(x),
        e(x, r, v),
        ((m = A && A.onVnodeMounted) || F || P) &&
          Z(() => {
            ;(m && ut(m, b, d), F && E.enter(x), P && Xt(d, null, b, 'mounted'))
          }, g))
    },
    X = (d, r, v, b, g) => {
      if ((v && T(d, v), b)) for (let h = 0; h < b.length; h++) T(d, b[h])
      if (g) {
        let h = g.subTree
        if (r === h || (ta(h.type) && (h.ssContent === r || h.ssFallback === r))) {
          const C = g.vnode
          X(d, C, C.scopeId, C.slotScopeIds, g.parent)
        }
      }
    },
    lt = (d, r, v, b, g, h, C, y, x = 0) => {
      for (let m = x; m < d.length; m++) {
        const A = (d[m] = y ? Kt(d[m]) : wt(d[m]))
        M(null, A, r, v, b, g, h, C, y)
      }
    },
    Gt = (d, r, v, b, g, h, C) => {
      const y = (r.el = d.el)
      let { patchFlag: x, dynamicChildren: m, dirs: A } = r
      x |= d.patchFlag & 16
      const S = d.props || U,
        E = r.props || U
      let P
      if (
        (v && zt(v, !1),
        (P = E.onVnodeBeforeUpdate) && ut(P, v, r, d),
        A && Xt(r, d, v, 'beforeUpdate'),
        v && zt(v, !0),
        ((S.innerHTML && E.innerHTML == null) || (S.textContent && E.textContent == null)) &&
          f(y, ''),
        m
          ? ft(d.dynamicChildren, m, y, v, b, xa(r, g), h)
          : C || L(d, r, y, null, v, b, xa(r, g), h, !1),
        x > 0)
      ) {
        if (x & 16) Pt(y, S, E, v, g)
        else if (
          (x & 2 && S.class !== E.class && i(y, 'class', null, E.class, g),
          x & 4 && i(y, 'style', S.style, E.style, g),
          x & 8)
        ) {
          const F = r.dynamicProps
          for (let K = 0; K < F.length; K++) {
            const H = F[K],
              dt = S[H],
              rt = E[H]
            ;(rt !== dt || H === 'value') && i(y, H, dt, rt, g, v)
          }
        }
        x & 1 && d.children !== r.children && f(y, r.children)
      } else !C && m == null && Pt(y, S, E, v, g)
      ;((P = E.onVnodeUpdated) || A) &&
        Z(() => {
          ;(P && ut(P, v, r, d), A && Xt(r, d, v, 'updated'))
        }, b)
    },
    ft = (d, r, v, b, g, h, C) => {
      for (let y = 0; y < r.length; y++) {
        const x = d[y],
          m = r[y],
          A = x.el && (x.type === Tt || !is(x, m) || x.shapeFlag & 198) ? u(x.el) : v
        M(x, m, A, null, b, g, h, C, !0)
      }
    },
    Pt = (d, r, v, b, g) => {
      if (r !== v) {
        if (r !== U) for (const h in r) !_s(h) && !(h in v) && i(d, h, r[h], null, g, b)
        for (const h in v) {
          if (_s(h)) continue
          const C = v[h],
            y = r[h]
          C !== y && h !== 'value' && i(d, h, y, C, g, b)
        }
        'value' in v && i(d, 'value', r.value, v.value, g)
      }
    },
    Ds = (d, r, v, b, g, h, C, y, x) => {
      const m = (r.el = d ? d.el : l('')),
        A = (r.anchor = d ? d.anchor : l(''))
      let { patchFlag: S, dynamicChildren: E, slotScopeIds: P } = r
      ;(P && (y = y ? y.concat(P) : P),
        d == null
          ? (e(m, v, b), e(A, v, b), lt(r.children || [], v, A, g, h, C, y, x))
          : S > 0 && S & 64 && E && d.dynamicChildren && d.dynamicChildren.length === E.length
            ? (ft(d.dynamicChildren, E, v, g, h, C, y),
              (r.key != null || (g && r === g.subTree)) && Dn(d, r, !0))
            : L(d, r, v, A, g, h, C, y, x))
    },
    Fs = (d, r, v, b, g, h, C, y, x) => {
      ;((r.slotScopeIds = y),
        d == null
          ? r.shapeFlag & 512
            ? g.ctx.activate(r, v, b, C, x)
            : va(r, v, b, g, h, C, x)
          : ne(d, r, x))
    },
    va = (d, r, v, b, g, h, C) => {
      const y = (d.component = Bc(d, b, g))
      if ((un(d) && (y.ctx.renderer = vs), Gc(y, !1, C), y.asyncDep)) {
        if ((g && g.registerDep(y, et, C), !d.el)) {
          const x = (y.subTree = G(Nt))
          ;(D(null, x, r, v), (d.placeholder = x.el))
        }
      } else et(y, d, r, v, g, h, C)
    },
    ne = (d, r, v) => {
      const b = (r.component = d.component)
      if (Tc(d, r, v))
        if (b.asyncDep && !b.asyncResolved) {
          B(b, r, v)
          return
        } else ((b.next = r), b.update())
      else ((r.el = d.el), (b.vnode = r))
    },
    et = (d, r, v, b, g, h, C) => {
      const y = () => {
        if (d.isMounted) {
          let { next: S, bu: E, u: P, parent: F, vnode: K } = d
          {
            const St = Fn(d)
            if (St) {
              ;(S && ((S.el = K.el), B(d, S, C)),
                St.asyncDep.then(() => {
                  d.isUnmounted || y()
                }))
              return
            }
          }
          let H = S,
            dt
          ;(zt(d, !1),
            S ? ((S.el = K.el), B(d, S, C)) : (S = K),
            E && xs(E),
            (dt = S.props && S.props.onVnodeBeforeUpdate) && ut(dt, F, S, K),
            zt(d, !0))
          const rt = xe(d),
            Ct = d.subTree
          ;((d.subTree = rt),
            M(Ct, rt, u(Ct.el), Ns(Ct), d, g, h),
            (S.el = rt.el),
            H === null && wc(d, rt.el),
            P && Z(P, g),
            (dt = S.props && S.props.onVnodeUpdated) && Z(() => ut(dt, F, S, K), g))
        } else {
          let S
          const { el: E, props: P } = r,
            { bm: F, m: K, parent: H, root: dt, type: rt } = d,
            Ct = Qt(r)
          ;(zt(d, !1), F && xs(F), !Ct && (S = P && P.onVnodeBeforeMount) && ut(S, H, r), zt(d, !0))
          {
            dt.ce && dt.ce._def.shadowRoot !== !1 && dt.ce._injectChildStyle(rt)
            const St = (d.subTree = xe(d))
            ;(M(null, St, v, b, d, g, h), (r.el = St.el))
          }
          if ((K && Z(K, g), !Ct && (S = P && P.onVnodeMounted))) {
            const St = r
            Z(() => ut(S, H, St), g)
          }
          ;((r.shapeFlag & 256 || (H && Qt(H.vnode) && H.vnode.shapeFlag & 256)) &&
            d.a &&
            Z(d.a, g),
            (d.isMounted = !0),
            (r = v = b = null))
        }
      }
      d.scope.on()
      const x = (d.effect = new Ke(y))
      d.scope.off()
      const m = (d.update = x.run.bind(x)),
        A = (d.job = x.runIfDirty.bind(x))
      ;((A.i = d), (A.id = d.uid), (x.scheduler = () => Za(A)), zt(d, !0), m())
    },
    B = (d, r, v) => {
      r.component = d
      const b = d.vnode.props
      ;((d.vnode = r),
        (d.next = null),
        Ac(d, r.props, b, v),
        Rc(d, r.children, v),
        Dt(),
        pe(d),
        Ft())
    },
    L = (d, r, v, b, g, h, C, y, x = !1) => {
      const m = d && d.children,
        A = d ? d.shapeFlag : 0,
        S = r.children,
        { patchFlag: E, shapeFlag: P } = r
      if (E > 0) {
        if (E & 128) {
          Vs(m, S, v, b, g, h, C, y, x)
          return
        } else if (E & 256) {
          qt(m, S, v, b, g, h, C, y, x)
          return
        }
      }
      P & 8
        ? (A & 16 && fs(m, g, h), S !== m && f(v, S))
        : A & 16
          ? P & 16
            ? Vs(m, S, v, b, g, h, C, y, x)
            : fs(m, g, h, !0)
          : (A & 8 && f(v, ''), P & 16 && lt(S, v, b, g, h, C, y, x))
    },
    qt = (d, r, v, b, g, h, C, y, x) => {
      ;((d = d || cs), (r = r || cs))
      const m = d.length,
        A = r.length,
        S = Math.min(m, A)
      let E
      for (E = 0; E < S; E++) {
        const P = (r[E] = x ? Kt(r[E]) : wt(r[E]))
        M(d[E], P, v, null, g, h, C, y, x)
      }
      m > A ? fs(d, g, h, !0, !1, S) : lt(r, v, b, g, h, C, y, x, S)
    },
    Vs = (d, r, v, b, g, h, C, y, x) => {
      let m = 0
      const A = r.length
      let S = d.length - 1,
        E = A - 1
      for (; m <= S && m <= E; ) {
        const P = d[m],
          F = (r[m] = x ? Kt(r[m]) : wt(r[m]))
        if (is(P, F)) M(P, F, v, null, g, h, C, y, x)
        else break
        m++
      }
      for (; m <= S && m <= E; ) {
        const P = d[S],
          F = (r[E] = x ? Kt(r[E]) : wt(r[E]))
        if (is(P, F)) M(P, F, v, null, g, h, C, y, x)
        else break
        ;(S--, E--)
      }
      if (m > S) {
        if (m <= E) {
          const P = E + 1,
            F = P < A ? r[P].el : b
          for (; m <= E; ) (M(null, (r[m] = x ? Kt(r[m]) : wt(r[m])), v, F, g, h, C, y, x), m++)
        }
      } else if (m > E) for (; m <= S; ) (yt(d[m], g, h, !0), m++)
      else {
        const P = m,
          F = m,
          K = new Map()
        for (m = F; m <= E; m++) {
          const vt = (r[m] = x ? Kt(r[m]) : wt(r[m]))
          vt.key != null && K.set(vt.key, m)
        }
        let H,
          dt = 0
        const rt = E - F + 1
        let Ct = !1,
          St = 0
        const ps = new Array(rt)
        for (m = 0; m < rt; m++) ps[m] = 0
        for (m = P; m <= S; m++) {
          const vt = d[m]
          if (dt >= rt) {
            yt(vt, g, h, !0)
            continue
          }
          let kt
          if (vt.key != null) kt = K.get(vt.key)
          else
            for (H = F; H <= E; H++)
              if (ps[H - F] === 0 && is(vt, r[H])) {
                kt = H
                break
              }
          kt === void 0
            ? yt(vt, g, h, !0)
            : ((ps[kt - F] = m + 1),
              kt >= St ? (St = kt) : (Ct = !0),
              M(vt, r[kt], v, null, g, h, C, y, x),
              dt++)
        }
        const le = Ct ? Vc(ps) : cs
        for (H = le.length - 1, m = rt - 1; m >= 0; m--) {
          const vt = F + m,
            kt = r[vt],
            de = r[vt + 1],
            re = vt + 1 < A ? de.el || Vn(de) : b
          ps[m] === 0
            ? M(null, kt, v, re, g, h, C, y, x)
            : Ct && (H < 0 || m !== le[H] ? Jt(kt, v, re, 2) : H--)
        }
      }
    },
    Jt = (d, r, v, b, g = null) => {
      const { el: h, type: C, transition: y, children: x, shapeFlag: m } = d
      if (m & 6) {
        Jt(d.component.subTree, r, v, b)
        return
      }
      if (m & 128) {
        d.suspense.move(r, v, b)
        return
      }
      if (m & 64) {
        C.move(d, r, v, vs)
        return
      }
      if (C === Tt) {
        e(h, r, v)
        for (let S = 0; S < x.length; S++) Jt(x[S], r, v, b)
        e(d.anchor, r, v)
        return
      }
      if (C === Bs) {
        w(d, r, v)
        return
      }
      if (b !== 2 && m & 1 && y)
        if (b === 0) (y.beforeEnter(h), e(h, r, v), Z(() => y.enter(h), g))
        else {
          const { leave: S, delayLeave: E, afterLeave: P } = y,
            F = () => {
              d.ctx.isUnmounted ? n(h) : e(h, r, v)
            },
            K = () => {
              ;(h._isLeaving && h[Qi](!0),
                S(h, () => {
                  ;(F(), P && P())
                }))
            }
          E ? E(h, F, K) : K()
        }
      else e(h, r, v)
    },
    yt = (d, r, v, b = !1, g = !1) => {
      const {
        type: h,
        props: C,
        ref: y,
        children: x,
        dynamicChildren: m,
        shapeFlag: A,
        patchFlag: S,
        dirs: E,
        cacheIndex: P,
      } = d
      if (
        (S === -2 && (g = !1),
        y != null && (Dt(), Ss(y, null, v, d, !0), Ft()),
        P != null && (r.renderCache[P] = void 0),
        A & 256)
      ) {
        r.ctx.deactivate(d)
        return
      }
      const F = A & 1 && E,
        K = !Qt(d)
      let H
      if ((K && (H = C && C.onVnodeBeforeUnmount) && ut(H, r, d), A & 6)) Yn(d.component, v, b)
      else {
        if (A & 128) {
          d.suspense.unmount(v, b)
          return
        }
        ;(F && Xt(d, null, r, 'beforeUnmount'),
          A & 64
            ? d.type.remove(d, r, v, vs, b)
            : m && !m.hasOnce && (h !== Tt || (S > 0 && S & 64))
              ? fs(m, r, v, !1, !0)
              : ((h === Tt && S & 384) || (!g && A & 16)) && fs(x, r, v),
          b && ie(d))
      }
      ;((K && (H = C && C.onVnodeUnmounted)) || F) &&
        Z(() => {
          ;(H && ut(H, r, d), F && Xt(d, null, r, 'unmounted'))
        }, v)
    },
    ie = (d) => {
      const { type: r, el: v, anchor: b, transition: g } = d
      if (r === Tt) {
        zn(v, b)
        return
      }
      if (r === Bs) {
        _(d)
        return
      }
      const h = () => {
        ;(n(v), g && !g.persisted && g.afterLeave && g.afterLeave())
      }
      if (d.shapeFlag & 1 && g && !g.persisted) {
        const { leave: C, delayLeave: y } = g,
          x = () => C(v, h)
        y ? y(d.el, h, x) : x()
      } else h()
    },
    zn = (d, r) => {
      let v
      for (; d !== r; ) ((v = k(d)), n(d), (d = v))
      n(r)
    },
    Yn = (d, r, v) => {
      const { bum: b, scope: g, job: h, subTree: C, um: y, m: x, a: m } = d
      ;(Qs(x),
        Qs(m),
        b && xs(b),
        g.stop(),
        h && ((h.flags |= 8), yt(C, d, r, v)),
        y && Z(y, r),
        Z(() => {
          d.isUnmounted = !0
        }, r))
    },
    fs = (d, r, v, b = !1, g = !1, h = 0) => {
      for (let C = h; C < d.length; C++) yt(d[C], r, v, b, g)
    },
    Ns = (d) => {
      if (d.shapeFlag & 6) return Ns(d.component.subTree)
      if (d.shapeFlag & 128) return d.suspense.next()
      const r = k(d.anchor || d.el),
        v = r && r[Yi]
      return v ? k(v) : r
    }
  let pa = !1
  const ce = (d, r, v) => {
      let b
      ;(d == null
        ? r._vnode && (yt(r._vnode, null, null, !0), (b = r._vnode.component))
        : M(r._vnode || null, d, r, null, null, null, v),
        (r._vnode = d),
        pa || ((pa = !0), pe(b), ln(), (pa = !1)))
    },
    vs = { p: M, um: yt, m: Jt, r: ie, mt: va, mc: lt, pc: L, pbc: ft, n: Ns, o: t }
  return { render: ce, hydrate: void 0, createApp: xc(ce) }
}
function xa({ type: t, props: s }, a) {
  return (a === 'svg' && t === 'foreignObject') ||
    (a === 'mathml' && t === 'annotation-xml' && s && s.encoding && s.encoding.includes('html'))
    ? void 0
    : a
}
function zt({ effect: t, job: s }, a) {
  a ? ((t.flags |= 32), (s.flags |= 4)) : ((t.flags &= -33), (s.flags &= -5))
}
function Fc(t, s) {
  return (!t || (t && !t.pendingBranch)) && s && !s.persisted
}
function Dn(t, s, a = !1) {
  const e = t.children,
    n = s.children
  if (O(e) && O(n))
    for (let i = 0; i < e.length; i++) {
      const c = e[i]
      let l = n[i]
      ;(l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = n[i] = Kt(n[i])), (l.el = c.el)),
        !a && l.patchFlag !== -2 && Dn(c, l)),
        l.type === fa &&
          (l.patchFlag !== -1 ? (l.el = c.el) : (l.__elIndex = i + (t.type === Tt ? 1 : 0))),
        l.type === Nt && !l.el && (l.el = c.el))
    }
}
function Vc(t) {
  const s = t.slice(),
    a = [0]
  let e, n, i, c, l
  const o = t.length
  for (e = 0; e < o; e++) {
    const p = t[e]
    if (p !== 0) {
      if (((n = a[a.length - 1]), t[n] < p)) {
        ;((s[e] = n), a.push(e))
        continue
      }
      for (i = 0, c = a.length - 1; i < c; )
        ((l = (i + c) >> 1), t[a[l]] < p ? (i = l + 1) : (c = l))
      p < t[a[i]] && (i > 0 && (s[e] = a[i - 1]), (a[i] = e))
    }
  }
  for (i = a.length, c = a[i - 1]; i-- > 0; ) ((a[i] = c), (c = s[c]))
  return a
}
function Fn(t) {
  const s = t.subTree.component
  if (s) return s.asyncDep && !s.asyncResolved ? s : Fn(s)
}
function Qs(t) {
  if (t) for (let s = 0; s < t.length; s++) t[s].flags |= 8
}
function Vn(t) {
  if (t.placeholder) return t.placeholder
  const s = t.component
  return s ? Vn(s.subTree) : null
}
const ta = (t) => t.__isSuspense
function Nc(t, s) {
  s && s.pendingBranch ? (O(t) ? s.effects.push(...t) : s.effects.push(t)) : Gi(t)
}
const Tt = Symbol.for('v-fgt'),
  fa = Symbol.for('v-txt'),
  Nt = Symbol.for('v-cmt'),
  Bs = Symbol.for('v-stc'),
  js = []
let pt = null
function ct(t = !1) {
  js.push((pt = t ? null : []))
}
function $c() {
  ;(js.pop(), (pt = js[js.length - 1] || null))
}
let Ps = 1
function Se(t, s = !1) {
  ;((Ps += t), t < 0 && pt && s && (pt.hasOnce = !0))
}
function Nn(t) {
  return ((t.dynamicChildren = Ps > 0 ? pt || cs : null), $c(), Ps > 0 && pt && pt.push(t), t)
}
function ht(t, s, a, e, n, i) {
  return Nn(Rt(t, s, a, e, n, i, !0))
}
function Oa(t, s, a, e, n) {
  return Nn(G(t, s, a, e, n, !0))
}
function se(t) {
  return t ? t.__v_isVNode === !0 : !1
}
function is(t, s) {
  return t.type === s.type && t.key === s.key
}
const $n = ({ key: t }) => t ?? null,
  Gs = ({ ref: t, ref_key: s, ref_for: a }) => (
    typeof t == 'number' && (t = '' + t),
    t != null ? (z(t) || st(t) || I(t) ? { i: bt, r: t, k: s, f: !!a } : t) : null
  )
function Rt(t, s = null, a = null, e = 0, n = null, i = t === Tt ? 0 : 1, c = !1, l = !1) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: s,
    key: s && $n(s),
    ref: s && Gs(s),
    scopeId: rn,
    slotScopeIds: null,
    children: a,
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
    patchFlag: e,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: bt,
  }
  return (
    l ? (ae(o, a), i & 128 && t.normalize(o)) : a && (o.shapeFlag |= z(a) ? 8 : 16),
    Ps > 0 && !c && pt && (o.patchFlag > 0 || i & 6) && o.patchFlag !== 32 && pt.push(o),
    o
  )
}
const G = Hc
function Hc(t, s = null, a = null, e = 0, n = null, i = !1) {
  if (((!t || t === yn) && (t = Nt), se(t))) {
    const l = ts(t, s, !0)
    return (
      a && ae(l, a),
      Ps > 0 && !i && pt && (l.shapeFlag & 6 ? (pt[pt.indexOf(t)] = l) : pt.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((zc(t) && (t = t.__vccOpts), s)) {
    s = Lc(s)
    let { class: l, style: o } = s
    ;(l && !z(l) && (s.class = Ka(l)),
      J(o) && (Ya(o) && !O(o) && (o = at({}, o)), (s.style = La(o))))
  }
  const c = z(t) ? 1 : ta(t) ? 128 : Zi(t) ? 64 : J(t) ? 4 : I(t) ? 2 : 0
  return Rt(t, s, a, e, n, c, i, !0)
}
function Lc(t) {
  return t ? (Ya(t) || An(t) ? at({}, t) : t) : null
}
function ts(t, s, a = !1, e = !1) {
  const { props: n, ref: i, patchFlag: c, children: l, transition: o } = t,
    p = s ? Kc(n || {}, s) : n,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: p,
      key: p && $n(p),
      ref: s && s.ref ? (a && i ? (O(i) ? i.concat(Gs(s)) : [i, Gs(s)]) : Gs(s)) : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: l,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: s && t.type !== Tt ? (c === -1 ? 16 : c | 16) : c,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: o,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && ts(t.ssContent),
      ssFallback: t.ssFallback && ts(t.ssFallback),
      placeholder: t.placeholder,
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    }
  return (o && e && la(f, o.clone(f)), f)
}
function Hn(t = ' ', s = 0) {
  return G(fa, null, t, s)
}
function gt(t, s) {
  const a = G(Bs, null, t)
  return ((a.staticCount = s), a)
}
function Ra(t = '', s = !1) {
  return s ? (ct(), Oa(Nt, null, t)) : G(Nt, null, t)
}
function wt(t) {
  return t == null || typeof t == 'boolean'
    ? G(Nt)
    : O(t)
      ? G(Tt, null, t.slice())
      : se(t)
        ? Kt(t)
        : G(fa, null, String(t))
}
function Kt(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : ts(t)
}
function ae(t, s) {
  let a = 0
  const { shapeFlag: e } = t
  if (s == null) s = null
  else if (O(s)) a = 16
  else if (typeof s == 'object')
    if (e & 65) {
      const n = s.default
      n && (n._c && (n._d = !1), ae(t, n()), n._c && (n._d = !0))
      return
    } else {
      a = 32
      const n = s._
      !n && !An(s)
        ? (s._ctx = bt)
        : n === 3 && bt && (bt.slots._ === 1 ? (s._ = 1) : ((s._ = 2), (t.patchFlag |= 1024)))
    }
  else
    I(s)
      ? ((s = { default: s, _ctx: bt }), (a = 32))
      : ((s = String(s)), e & 64 ? ((a = 16), (s = [Hn(s)])) : (a = 8))
  ;((t.children = s), (t.shapeFlag |= a))
}
function Kc(...t) {
  const s = {}
  for (let a = 0; a < t.length; a++) {
    const e = t[a]
    for (const n in e)
      if (n === 'class') s.class !== e.class && (s.class = Ka([s.class, e.class]))
      else if (n === 'style') s.style = La([s.style, e.style])
      else if (aa(n)) {
        const i = s[n],
          c = e[n]
        c && i !== c && !(O(i) && i.includes(c)) && (s[n] = i ? [].concat(i, c) : c)
      } else n !== '' && (s[n] = e[n])
  }
  return s
}
function ut(t, s, a, e = null) {
  At(t, s, 7, [a, e])
}
const Wc = jn()
let Uc = 0
function Bc(t, s, a) {
  const e = t.type,
    n = (s ? s.appContext : t.appContext) || Wc,
    i = {
      uid: Uc++,
      vnode: t,
      type: e,
      parent: s,
      appContext: n,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new pi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: s ? s.provides : Object.create(n.provides),
      ids: s ? s.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: In(e, n),
      emitsOptions: Tn(e, n),
      emit: null,
      emitted: null,
      propsDefaults: U,
      inheritAttrs: e.inheritAttrs,
      ctx: U,
      data: U,
      props: U,
      attrs: U,
      slots: U,
      refs: U,
      setupState: U,
      setupContext: null,
      suspense: a,
      suspenseId: a ? a.pendingId : 0,
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
    (i.root = s ? s.root : i),
    (i.emit = Cc.bind(null, i)),
    t.ce && t.ce(i),
    i
  )
}
let tt = null
const Ln = () => tt || bt
let sa, Ma
{
  const t = ia(),
    s = (a, e) => {
      let n
      return (
        (n = t[a]) || (n = t[a] = []),
        n.push(e),
        (i) => {
          n.length > 1 ? n.forEach((c) => c(i)) : n[0](i)
        }
      )
    }
  ;((sa = s('__VUE_INSTANCE_SETTERS__', (a) => (tt = a))),
    (Ma = s('__VUE_SSR_SETTERS__', (a) => (Is = a))))
}
const Ms = (t) => {
    const s = tt
    return (
      sa(t),
      t.scope.on(),
      () => {
        ;(t.scope.off(), sa(s))
      }
    )
  },
  ke = () => {
    ;(tt && tt.scope.off(), sa(null))
  }
function Kn(t) {
  return t.vnode.shapeFlag & 4
}
let Is = !1
function Gc(t, s = !1, a = !1) {
  s && Ma(s)
  const { props: e, children: n } = t.vnode,
    i = Kn(t)
  ;(Ec(t, e, i, s), Oc(t, n, a || s))
  const c = i ? qc(t, s) : void 0
  return (s && Ma(!1), c)
}
function qc(t, s) {
  const a = t.type
  ;((t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, pc)))
  const { setup: e } = a
  if (e) {
    Dt()
    const n = (t.setupContext = e.length > 1 ? Xc(t) : null),
      i = Ms(t),
      c = Rs(e, t, 0, [t.props, n]),
      l = $e(c)
    if ((Ft(), i(), (l || t.sp) && !Qt(t) && pn(t), l)) {
      if ((c.then(ke, ke), s))
        return c
          .then((o) => {
            je(t, o)
          })
          .catch((o) => {
            ca(o, t, 0)
          })
      t.asyncDep = c
    } else je(t, c)
  } else Wn(t)
}
function je(t, s, a) {
  ;(I(s)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = s)
      : (t.render = s)
    : J(s) && (t.setupState = en(s)),
    Wn(t))
}
function Wn(t, s, a) {
  const e = t.type
  t.render || (t.render = e.render || Et)
  {
    const n = Ms(t)
    Dt()
    try {
      uc(t)
    } finally {
      ;(Ft(), n())
    }
  }
}
const Jc = {
  get(t, s) {
    return (Q(t, 'get', ''), t[s])
  },
}
function Xc(t) {
  const s = (a) => {
    t.exposed = a || {}
  }
  return { attrs: new Proxy(t.attrs, Jc), slots: t.slots, emit: t.emit, expose: s }
}
function ee(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(en(Mi(t.exposed)), {
          get(s, a) {
            if (a in s) return s[a]
            if (a in ks) return ks[a](t)
          },
          has(s, a) {
            return a in s || a in ks
          },
        }))
    : t.proxy
}
function Da(t, s = !0) {
  return I(t) ? t.displayName || t.name : t.name || (s && t.__name)
}
function zc(t) {
  return I(t) && '__vccOpts' in t
}
const Un = (t, s) => Hi(t, s, Is),
  Yc = '3.5.26'
let Fa
const Te = typeof window < 'u' && window.trustedTypes
if (Te)
  try {
    Fa = Te.createPolicy('vue', { createHTML: (t) => t })
  } catch {}
const Bn = Fa ? (t) => Fa.createHTML(t) : (t) => t,
  Zc = 'http://www.w3.org/2000/svg',
  Qc = 'http://www.w3.org/1998/Math/MathML',
  Ot = typeof document < 'u' ? document : null,
  we = Ot && Ot.createElement('template'),
  tl = {
    insert: (t, s, a) => {
      s.insertBefore(t, a || null)
    },
    remove: (t) => {
      const s = t.parentNode
      s && s.removeChild(t)
    },
    createElement: (t, s, a, e) => {
      const n =
        s === 'svg'
          ? Ot.createElementNS(Zc, t)
          : s === 'mathml'
            ? Ot.createElementNS(Qc, t)
            : a
              ? Ot.createElement(t, { is: a })
              : Ot.createElement(t)
      return (
        t === 'select' && e && e.multiple != null && n.setAttribute('multiple', e.multiple),
        n
      )
    },
    createText: (t) => Ot.createTextNode(t),
    createComment: (t) => Ot.createComment(t),
    setText: (t, s) => {
      t.nodeValue = s
    },
    setElementText: (t, s) => {
      t.textContent = s
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Ot.querySelector(t),
    setScopeId(t, s) {
      t.setAttribute(s, '')
    },
    insertStaticContent(t, s, a, e, n, i) {
      const c = a ? a.previousSibling : s.lastChild
      if (n && (n === i || n.nextSibling))
        for (; s.insertBefore(n.cloneNode(!0), a), !(n === i || !(n = n.nextSibling)); );
      else {
        we.innerHTML = Bn(
          e === 'svg' ? `<svg>${t}</svg>` : e === 'mathml' ? `<math>${t}</math>` : t,
        )
        const l = we.content
        if (e === 'svg' || e === 'mathml') {
          const o = l.firstChild
          for (; o.firstChild; ) l.appendChild(o.firstChild)
          l.removeChild(o)
        }
        s.insertBefore(l, a)
      }
      return [c ? c.nextSibling : s.firstChild, a ? a.previousSibling : s.lastChild]
    },
  },
  sl = Symbol('_vtc')
function al(t, s, a) {
  const e = t[sl]
  ;(e && (s = (s ? [s, ...e] : [...e]).join(' ')),
    s == null ? t.removeAttribute('class') : a ? t.setAttribute('class', s) : (t.className = s))
}
const Ee = Symbol('_vod'),
  el = Symbol('_vsh'),
  nl = Symbol(''),
  il = /(?:^|;)\s*display\s*:/
function cl(t, s, a) {
  const e = t.style,
    n = z(a)
  let i = !1
  if (a && !n) {
    if (s)
      if (z(s))
        for (const c of s.split(';')) {
          const l = c.slice(0, c.indexOf(':')).trim()
          a[l] == null && qs(e, l, '')
        }
      else for (const c in s) a[c] == null && qs(e, c, '')
    for (const c in a) (c === 'display' && (i = !0), qs(e, c, a[c]))
  } else if (n) {
    if (s !== a) {
      const c = e[nl]
      ;(c && (a += ';' + c), (e.cssText = a), (i = il.test(a)))
    }
  } else s && t.removeAttribute('style')
  Ee in t && ((t[Ee] = i ? e.display : ''), t[el] && (e.display = 'none'))
}
const Ae = /\s*!important$/
function qs(t, s, a) {
  if (O(a)) a.forEach((e) => qs(t, s, e))
  else if ((a == null && (a = ''), s.startsWith('--'))) t.setProperty(s, a)
  else {
    const e = ll(t, s)
    Ae.test(a) ? t.setProperty(ss(e), a.replace(Ae, ''), 'important') : (t[e] = a)
  }
}
const Pe = ['Webkit', 'Moz', 'ms'],
  ya = {}
function ll(t, s) {
  const a = ya[s]
  if (a) return a
  let e = mt(s)
  if (e !== 'filter' && e in t) return (ya[s] = e)
  e = na(e)
  for (let n = 0; n < Pe.length; n++) {
    const i = Pe[n] + e
    if (i in t) return (ya[s] = i)
  }
  return s
}
const Ie = 'http://www.w3.org/1999/xlink'
function Oe(t, s, a, e, n, i = vi(s)) {
  e && s.startsWith('xlink:')
    ? a == null
      ? t.removeAttributeNS(Ie, s.slice(6, s.length))
      : t.setAttributeNS(Ie, s, a)
    : a == null || (i && !Le(a))
      ? t.removeAttribute(s)
      : t.setAttribute(s, i ? '' : os(a) ? String(a) : a)
}
function Re(t, s, a, e, n) {
  if (s === 'innerHTML' || s === 'textContent') {
    a != null && (t[s] = s === 'innerHTML' ? Bn(a) : a)
    return
  }
  const i = t.tagName
  if (s === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const l = i === 'OPTION' ? t.getAttribute('value') || '' : t.value,
      o = a == null ? (t.type === 'checkbox' ? 'on' : '') : String(a)
    ;((l !== o || !('_value' in t)) && (t.value = o),
      a == null && t.removeAttribute(s),
      (t._value = a))
    return
  }
  let c = !1
  if (a === '' || a == null) {
    const l = typeof t[s]
    l === 'boolean'
      ? (a = Le(a))
      : a == null && l === 'string'
        ? ((a = ''), (c = !0))
        : l === 'number' && ((a = 0), (c = !0))
  }
  try {
    t[s] = a
  } catch {}
  c && t.removeAttribute(n || s)
}
function dl(t, s, a, e) {
  t.addEventListener(s, a, e)
}
function rl(t, s, a, e) {
  t.removeEventListener(s, a, e)
}
const Me = Symbol('_vei')
function ol(t, s, a, e, n = null) {
  const i = t[Me] || (t[Me] = {}),
    c = i[s]
  if (e && c) c.value = e
  else {
    const [l, o] = fl(s)
    if (e) {
      const p = (i[s] = ul(e, n))
      dl(t, l, p, o)
    } else c && (rl(t, l, c, o), (i[s] = void 0))
  }
}
const De = /(?:Once|Passive|Capture)$/
function fl(t) {
  let s
  if (De.test(t)) {
    s = {}
    let e
    for (; (e = t.match(De)); )
      ((t = t.slice(0, t.length - e[0].length)), (s[e[0].toLowerCase()] = !0))
  }
  return [t[2] === ':' ? t.slice(3) : ss(t.slice(2)), s]
}
let Ca = 0
const vl = Promise.resolve(),
  pl = () => Ca || (vl.then(() => (Ca = 0)), (Ca = Date.now()))
function ul(t, s) {
  const a = (e) => {
    if (!e._vts) e._vts = Date.now()
    else if (e._vts <= a.attached) return
    At(gl(e, a.value), s, 5, [e])
  }
  return ((a.value = t), (a.attached = pl()), a)
}
function gl(t, s) {
  if (O(s)) {
    const a = t.stopImmediatePropagation
    return (
      (t.stopImmediatePropagation = () => {
        ;(a.call(t), (t._stopped = !0))
      }),
      s.map((e) => (n) => !n._stopped && e && e(n))
    )
  } else return s
}
const Fe = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  hl = (t, s, a, e, n, i) => {
    const c = n === 'svg'
    s === 'class'
      ? al(t, e, c)
      : s === 'style'
        ? cl(t, a, e)
        : aa(s)
          ? Na(s) || ol(t, s, a, e, i)
          : (
                s[0] === '.'
                  ? ((s = s.slice(1)), !0)
                  : s[0] === '^'
                    ? ((s = s.slice(1)), !1)
                    : ml(t, s, e, c)
              )
            ? (Re(t, s, e),
              !t.tagName.includes('-') &&
                (s === 'value' || s === 'checked' || s === 'selected') &&
                Oe(t, s, e, c, i, s !== 'value'))
            : t._isVueCE && (/[A-Z]/.test(s) || !z(e))
              ? Re(t, mt(s), e, i, s)
              : (s === 'true-value'
                  ? (t._trueValue = e)
                  : s === 'false-value' && (t._falseValue = e),
                Oe(t, s, e, c))
  }
function ml(t, s, a, e) {
  if (e) return !!(s === 'innerHTML' || s === 'textContent' || (s in t && Fe(s) && I(a)))
  if (
    s === 'spellcheck' ||
    s === 'draggable' ||
    s === 'translate' ||
    s === 'autocorrect' ||
    (s === 'sandbox' && t.tagName === 'IFRAME') ||
    s === 'form' ||
    (s === 'list' && t.tagName === 'INPUT') ||
    (s === 'type' && t.tagName === 'TEXTAREA')
  )
    return !1
  if (s === 'width' || s === 'height') {
    const n = t.tagName
    if (n === 'IMG' || n === 'VIDEO' || n === 'CANVAS' || n === 'SOURCE') return !1
  }
  return Fe(s) && z(a) ? !1 : s in t
}
const bl = at({ patchProp: hl }, tl)
let Ve
function _l() {
  return Ve || (Ve = Mc(bl))
}
const xl = (...t) => {
  const s = _l().createApp(...t),
    { mount: a } = s
  return (
    (s.mount = (e) => {
      const n = Cl(e)
      if (!n) return
      const i = s._component
      ;(!I(i) && !i.render && !i.template && (i.template = n.innerHTML),
        n.nodeType === 1 && (n.textContent = ''))
      const c = a(n, !1, yl(n))
      return (
        n instanceof Element && (n.removeAttribute('v-cloak'), n.setAttribute('data-v-app', '')),
        c
      )
    }),
    s
  )
}
function yl(t) {
  if (t instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && t instanceof MathMLElement) return 'mathml'
}
function Cl(t) {
  return z(t) ? document.querySelector(t) : t
}
const as = (t, s) => {
    const a = t.__vccOpts || t
    for (const [e, n] of s) a[e] = n
    return a
  },
  Sl = {},
  kl = { class: 'personal-information' }
function jl(t, s) {
  return (
    ct(),
    ht('div', kl, [
      ...(s[0] ||
        (s[0] = [
          gt(
            '<div class="header" data-v-1d1139d4><h1 class="name" data-v-1d1139d4>李生澳</h1><div class="job-title" data-v-1d1139d4>前端开发工程师</div></div><div class="contact-info" data-v-1d1139d4><span data-v-1d1139d4>男 · 25岁 · 杭州</span><span class="divider" data-v-1d1139d4>|</span><span data-v-1d1139d4>手机: 19958914314</span><span class="divider" data-v-1d1139d4>|</span><span data-v-1d1139d4>微信: lsa000226</span><span class="divider" data-v-1d1139d4>|</span><span data-v-1d1139d4>邮箱: 984507092@qq.com</span></div><div class="summary" data-v-1d1139d4> 拥有丰富的 <strong data-v-1d1139d4>Vue、React、TypeScript、Node、JavaScript、AI</strong> 实践经验，积极参与行业内优秀前端技术框架开源共建(<strong data-v-1d1139d4>Ant Design 贡献者</strong>)。对业界新技术保持高度敏感，乐于钻研前沿技术与框架源码，具备较强的技术沉淀能力与业务敏锐度。 </div>',
            3,
          ),
        ])),
    ])
  )
}
const Gn = as(Sl, [
    ['render', jl],
    ['__scopeId', 'data-v-1d1139d4'],
  ]),
  Tl = {},
  wl = { class: 'skills' }
function El(t, s) {
  return (
    ct(),
    ht('div', wl, [
      ...(s[0] ||
        (s[0] = [
          gt(
            '<h1 class="title" data-v-dc8671af>专业技能</h1><div class="skill-groups" data-v-dc8671af><div class="skill-group" data-v-dc8671af><h2 class="group-title" data-v-dc8671af>核心技术栈</h2><div class="skill-content" data-v-dc8671af><p data-v-dc8671af><span class="label" data-v-dc8671af>框架与库</span>：精通 <strong data-v-dc8671af>Vue 2/3</strong> 全家桶 (<strong data-v-dc8671af>Vue Router, Pinia, VitePress</strong>)；熟练使用 <strong data-v-dc8671af>React, Next.js</strong> 及其生态 (<strong data-v-dc8671af>Hooks, Router, ahooks, Zustand, MobX</strong>)。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>语言与基建</span>：深厚的 <strong data-v-dc8671af>ES6+、TypeScript</strong> 功底，熟悉项目接口数据返回的<strong data-v-dc8671af>类型定义</strong>与全链路类型安全；熟练使用 <strong data-v-dc8671af>Vite、Webpack、Rollup</strong> 进行构建配置与性能调优。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>跨端开发</span>：熟练使用 <strong data-v-dc8671af>uni-app、Taro</strong> 跨端方案；掌握 <strong data-v-dc8671af>微信/支付宝小程序原生</strong> 开发；具备 <strong data-v-dc8671af>Electron</strong> 桌面端落地经验。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>数据可视化</span>：精通 <strong data-v-dc8671af>ECharts、Canvas、AntV (G2/X6/G6)</strong>，拥有丰富的大屏交互与复杂拓扑图开发经验；掌握基于 <strong data-v-dc8671af>ResizeObserver</strong> 的大屏自适应适配方案；了解 <strong data-v-dc8671af>BPMN</strong> 和 <strong data-v-dc8671af>ReactFlow</strong> 流程图开发。 </p></div></div><div class="skill-group" data-v-dc8671af><h2 class="group-title" data-v-dc8671af>工程化与性能</h2><div class="skill-content" data-v-dc8671af><p data-v-dc8671af><span class="label" data-v-dc8671af>工程化建设</span>：熟悉 <strong data-v-dc8671af>Git</strong> 协作与 <strong data-v-dc8671af>CI/CD</strong> 流水线；具备 <strong data-v-dc8671af>Monorepo</strong> (pnpm Workspaces, Turborepo/Lerna) 管理经验；掌握 <strong data-v-dc8671af>Docker, K8s</strong> 部署与 <strong data-v-dc8671af>Nginx</strong> 动态配置。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>性能调优</span>：掌握 <strong data-v-dc8671af>代码/打包/资源全链路优化</strong>；具备 <strong data-v-dc8671af>LCP(4s-&gt;1.5s)</strong> 优化、<strong data-v-dc8671af>渲染重绘(减少50%)</strong> 等实际业务落地经验。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>样式与设计</span>：熟练使用 <strong data-v-dc8671af>SCSS, UnoCSS/Tailwind</strong>；精通 <strong data-v-dc8671af>Figma/Axure</strong> 对接，能深度理解并还原设计意图。 </p></div></div><div class="skill-group" data-v-dc8671af><h2 class="group-title" data-v-dc8671af>拓展领域</h2><div class="skill-content" data-v-dc8671af><p data-v-dc8671af><span class="label" data-v-dc8671af>鸿蒙生态</span>：具备 <strong data-v-dc8671af>ArkTS</strong> 与 <strong data-v-dc8671af>HarmonyOS NEXT</strong> 实际项目实践经验。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>AI 赋能</span>：深入应用主流 LLM (<strong data-v-dc8671af>ChatGPT, DeepSeek</strong>) API 与 <strong data-v-dc8671af>MCP</strong> 协议；熟练编写 <strong data-v-dc8671af>Agent Rules</strong> 辅助日常编码、自动化工具开发及复杂问题排查。 </p><p data-v-dc8671af><span class="label" data-v-dc8671af>后端技术</span>：熟悉 <strong data-v-dc8671af>Node.js</strong> 常用框架 (<strong data-v-dc8671af>Nest, Koa, Express</strong>)；掌握 <strong data-v-dc8671af>MySQL, Redis</strong> 的基本应用。 </p></div></div></div>',
            2,
          ),
        ])),
    ])
  )
}
const qn = as(Tl, [
    ['render', El],
    ['__scopeId', 'data-v-dc8671af'],
  ]),
  Al = {},
  Pl = { class: 'warbler-fe' }
function Il(t, s) {
  return (
    ct(),
    ht('div', Pl, [
      ...(s[0] ||
        (s[0] = [
          gt(
            '<h1 class="title" data-v-1b53cda5>开源贡献与作品</h1><div class="job" data-v-1b53cda5><div class="job-header" data-v-1b53cda5><div class="job-name" data-v-1b53cda5>Ant Design - 开源贡献者</div><div class="job-time" data-v-1b53cda5>Global React Ecosystem</div></div><div class="skill-list" data-v-1b53cda5><span class="skill" data-v-1b53cda5>TypeScript</span><span class="skill" data-v-1b53cda5>React</span><span class="skill" data-v-1b53cda5>UI Components</span></div><div class="project-info" data-v-1b53cda5><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>蚂蚁集团开源的全球知名 React UI 库（GitHub 90k+ Star）。</span></div><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>作为贡献者，深入参与了 <strong data-v-1b53cda5>Card、Watermark、Image</strong> 等核心组件的功能开发与 Bug 修复，提交并合并了多个高质量 PR。</span></div><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>Repo: <a href="https://github.com/ant-design/ant-design" target="_blank" data-v-1b53cda5>ant-design/ant-design</a></span></div></div></div><div class="job" data-v-1b53cda5><div class="job-header" data-v-1b53cda5><div class="job-name" data-v-1b53cda5>Ant Design Mobile - 开源贡献者</div></div><div class="project-info" data-v-1b53cda5><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>参与移动端组件库的功能改进建议与文档完善，协助社区解决组件在特定移动环境下的交互问题。</span></div><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>Repo: <a href="https://github.com/ant-design/ant-design-mobile" target="_blank" data-v-1b53cda5>ant-design/ant-design-mobile</a></span></div></div></div><div class="job" data-v-1b53cda5><div class="job-header" data-v-1b53cda5><div class="job-name" data-v-1b53cda5>DocFlow - 协同文档编辑器</div></div><div class="project-info" data-v-1b53cda5><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>基于 Tiptap 和 Next.js 的现代化协同编辑器。实现了实时数据同步与冲突解决机制，提供流畅的多人编辑体验。</span></div><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>Repo: <a href="https://github.com/xun082/DocFlow" target="_blank" data-v-1b53cda5>xun082/DocFlow</a></span></div></div></div><div class="job" data-v-1b53cda5><div class="job-header" data-v-1b53cda5><div class="job-name" data-v-1b53cda5>vue-seamless-autoscroll - 自动滚动组件</div></div><div class="skill-list" data-v-1b53cda5><span class="skill" data-v-1b53cda5>Vue</span><span class="skill" data-v-1b53cda5>NPM Library</span><span class="skill" data-v-1b53cda5>Rollup</span></div><div class="project-info" data-v-1b53cda5><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>个人独立开发的 Vue 自动滚动组件，支持无缝循环滚动、鼠标悬停暂停及自定义速度。</span></div><div class="desc-item" data-v-1b53cda5><span class="dot" data-v-1b53cda5>·</span><span class="text" data-v-1b53cda5>NPM: <a href="https://www.npmjs.com/package/vue-seamless-autoscroll" target="_blank" data-v-1b53cda5>vue-seamless-autoscroll</a></span></div></div></div><div class="social" data-v-1b53cda5><div class="social-item" data-v-1b53cda5><span class="label" data-v-1b53cda5>个人主页/博客</span><a href="https://984507092.github.io/vite_vue_blogs/" target="_blank" data-v-1b53cda5>984507092.github.io/vite_vue_blogs/</a></div><div class="social-item" data-v-1b53cda5><span class="label" data-v-1b53cda5>GitHub</span><a href="https://github.com/984507092" target="_blank" data-v-1b53cda5>github.com/984507092</a></div></div>',
            6,
          ),
        ])),
    ])
  )
}
const Jn = as(Al, [
    ['render', Il],
    ['__scopeId', 'data-v-1b53cda5'],
  ]),
  Ol = {},
  Rl = { class: 'company-project' },
  Ml = { class: 'company' },
  Dl = { class: 'company-duty' },
  Fl = { class: 'content' }
function Vl(t, s) {
  const a = fc('P')
  return (
    ct(),
    ht('div', Rl, [
      s[5] ||
        (s[5] = gt(
          '<h1 class="title" data-v-31f23c13>工作经历</h1><div class="company" data-v-31f23c13><div class="company-name" data-v-31f23c13>北京深睿医疗科技有限公司 ( 2024年12月 ~ 2025年10月 )</div><div class="company-duty" data-v-31f23c13><div class="label" data-v-31f23c13> 工作内容 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>从 0 到 1 搭建基础设施，完成 <strong data-v-31f23c13>Vue Router、CI/CD 流水线、Docker 容器化、Kubernetes 部署</strong> 等工程化建设，规范开发流程并提升交付效率。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>重构公司老项目的 <strong data-v-31f23c13>单点登录（SSO）</strong> 系统，解决跨系统兼容性问题，统一会话与权限校验，显著提升用户体验与系统稳定性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>AntV X6</strong> 实现 ER 图可视化，支持按数据模型动态生成页面布局与样式， 提供节点高亮、路径追踪等交互，辅助数据关系理解与溯源。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>对开源框架 <strong data-v-31f23c13>Dify</strong> 进行二次开发，落地 AI 智能问答与对话模块， 支持知识库检索、意图识别与多轮会话，提升业务协作效率。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>建设 <strong data-v-31f23c13>ECharts</strong> 可视化体系，沉淀可复用配置与组件，覆盖折线、饼图、桑基、柱状、雷达、仪表盘等图表， 支持联动与按需加载，保障复杂场景的性能与一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>主导工程性能优化：优化构建流程与打包策略，编译时间降低至原来的 <strong data-v-31f23c13>50%</strong>； 自研图片预加载 Vite 插件，基于文件大小与优先级的动态加载策略，使首屏加载时间降低约 <strong data-v-31f23c13>40%</strong>。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>组织技术分享与最佳实践沉淀，带领团队快速掌握与应用 <strong data-v-31f23c13>React、Vue3</strong> 等技术栈，推动前端工程能力体系化建设。 </p></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>医学科研数据库</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>React 18</div><div class="skill" data-v-31f23c13>TypeScript</div><div class="skill" data-v-31f23c13>Vite 6</div><div class="skill" data-v-31f23c13>Ant Design</div><div class="skill" data-v-31f23c13>Zustand</div><div class="skill" data-v-31f23c13>vite-plugin-svg-icons</div><div class="skill" data-v-31f23c13>Docker</div><div class="skill" data-v-31f23c13>Kubernetes</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 高性能医学科研数据管理系统，系统支持对省内政策支持申报的医学科研项目进行项目数据汇交，并对系统沉淀的项目汇交数据进行开放共享和进一步的科研数据分析应用； </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>实现<strong data-v-31f23c13>资产极致压缩</strong>：通过格式转换（<strong data-v-31f23c13>OTF 转 WOFF2</strong>）、<strong data-v-31f23c13>SVG</strong> 代码压缩与分包、<strong data-v-31f23c13>GIF</strong> 动态帧优化，累计降低静态资源体积超 <strong data-v-31f23c13>80%</strong>。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>Vite 6</strong> 实现<strong data-v-31f23c13>构建与交付优化</strong>：代码分割与 <strong data-v-31f23c13>Gzip</strong> 压缩；引入图片预加载策略（<strong data-v-31f23c13>Preload/Prefetch</strong>）；通过 <strong data-v-31f23c13>pnpm</strong> 优化依赖下载速度。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>编写 <strong data-v-31f23c13>Dockerfile</strong> 与 <strong data-v-31f23c13>Nginx</strong> 动态模板脚本，支撑 <strong data-v-31f23c13>Env + Docker + K8s</strong> 环境下的<strong data-v-31f23c13>动态环境变量注入</strong>与接口转发拦截，实现云原生部署。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>控制<strong data-v-31f23c13>页面、按钮、三方登录权限</strong>，实现<strong data-v-31f23c13>大屏可视化</strong>，优化 <strong data-v-31f23c13>chunk 拆分策略</strong>，避免单个 chunk 超过 <strong data-v-31f23c13>500KB</strong>。 </p></div></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>多模态数据资产管理平台</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>React</div><div class="skill" data-v-31f23c13>TypeScript</div><div class="skill" data-v-31f23c13>Ant Design</div><div class="skill" data-v-31f23c13>Mobx</div><div class="skill" data-v-31f23c13>Node.js</div><div class="skill" data-v-31f23c13>ECharts</div><div class="skill" data-v-31f23c13>AntV X6</div><div class="skill" data-v-31f23c13>SSO单点登录</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 面向医疗机构的数据资产管理与知识可视化平台，聚焦<strong data-v-31f23c13>医学/疾病知识图谱、表结构映射、字段标准化</strong>等场景。 支持多家医院异构数据表的<strong data-v-31f23c13>兼容与对齐</strong>，将底层数据统一抽象为标准字段模型，并通过图表与图谱联动 呈现数据关系与流向，为数据治理、资产盘点与分析决策提供可视化支撑。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>负责前端架构设计与工程治理，搭建业务组件与图表组件体系，推动页面开发、数据联动与接口对接的规范化落地。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>重构<strong data-v-31f23c13>SSO 单点登录</strong>体系，基于 <strong data-v-31f23c13>React Context API（createContext / useContext）</strong>与路由守卫实现会话管理与页面权限拦截，提升多系统间的登录一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>AntV X6</strong> 实现<strong data-v-31f23c13>数据血缘关系图</strong>与实体关系可视化， 动态渲染表/字段级依赖关系，支持节点高亮、路径追踪与交互式筛选，辅助数据流向溯源。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>建设平台安全能力：可配置<strong data-v-31f23c13>水印、防复制、数据预警、细粒度数据权限</strong>等功能， 结合操作审计策略，提升敏感数据的可控性与合规性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>集成第三方 <strong data-v-31f23c13>OA</strong> 系统，支持免登录单点接入与 <strong data-v-31f23c13>iframe</strong> 无缝嵌入， 完成跨系统菜单跳转与权限透传，优化一体化门户的使用体验。 </p></div></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>智能监测病种平台</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>Vue 3</div><div class="skill" data-v-31f23c13>Vue Router</div><div class="skill" data-v-31f23c13>TypeScript</div><div class="skill" data-v-31f23c13>Ant Design Vue</div><div class="skill" data-v-31f23c13>Pinia</div><div class="skill" data-v-31f23c13>ECharts</div><div class="skill" data-v-31f23c13>Docker</div><div class="skill" data-v-31f23c13>Kubernetes</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 面向医院与区域卫生监管的病种监测与分析平台，支持按<strong data-v-31f23c13>病种、地区、时间、机构</strong>等多维度进行数据汇总与钻取， 通过可视化看板呈现分布趋势、异常波动和结构占比，辅助管理者进行诊疗结构优化与资源调配决策。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>负责<strong data-v-31f23c13>登录鉴权、角色权限、用户信息</strong>等核心模块设计与实现， 基于路由守卫与权限指令实现页面与功能级访问控制，提升系统安全性与可维护性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>集成 <strong data-v-31f23c13>docxtemplater + docxtemplater-image-module-free</strong>， 实现结构化报表的模板化导出与图文混排，支持按筛选条件一键生成科室/病种分析报告。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>file / file-saver / jsPDF / pdfjs-dist</strong> 实现<strong data-v-31f23c13>PDF在线预览与下载</strong>闭环， 优化多页长文档的渲染体验，保证导出内容在不同终端的排版一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>构建 <strong data-v-31f23c13>ECharts</strong> 数据可视化模块，沉淀通用图表配置与渲染逻辑， 支持折线、柱状、饼图、雷达等图表的复用与联动，提升数据洞察效率与图表可维护性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>Docker + Kubernetes</strong> 实现<strong data-v-31f23c13>动态环境变量</strong>注入与配置热更新， 结合 CI/CD 流水线完成持续集成交付，缩短发布回归周期，提升环境一致性与稳定性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>集成<strong data-v-31f23c13>单点登录（SSO）</strong>，打通门户与多系统入口，实现基于用户权限的系统间跳转与会话共享。 </p></div></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>智能数据监管平台</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>Vue3</div><div class="skill" data-v-31f23c13>TypeScript</div><div class="skill" data-v-31f23c13>Vite</div><div class="skill" data-v-31f23c13>vxe-table</div><div class="skill" data-v-31f23c13>ECharts</div><div class="skill" data-v-31f23c13>Web Worker</div><div class="skill" data-v-31f23c13>Promise/并发控制</div><div class="skill" data-v-31f23c13>Hooks</div><div class="skill" data-v-31f23c13>Docker</div><div class="skill" data-v-31f23c13>Kubernetes</div><div class="skill" data-v-31f23c13>CI/CD</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 面向医疗监管场景的综合统计与分析平台，覆盖<strong data-v-31f23c13>地区、医院、科室、医生、药品</strong>等维度的数据采集、监测与可视化分析。 通过高并发请求调度与增量渲染技术，实现大规模数据的平滑加载和交互；结合图表与表格联动，为数据稽核与趋势研判提供决策支持。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>实现<strong data-v-31f23c13>并发请求调度</strong>，通过任务队列与限流策略将同时请求数限制为 <strong data-v-31f23c13>4</strong>， 在保障接口稳定性的同时提升数据拉取效率（平均列表加载时延降低约 <strong data-v-31f23c13>35%</strong>）。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>引入<strong data-v-31f23c13>Web Worker</strong> 将密集计算与数据预处理从主线程剥离， 明显降低主线程阻塞，提升页面滚动与交互流畅度（长列表掉帧问题显著缓解）。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>二次封装 <strong data-v-31f23c13>vxe-table</strong>，实现<strong data-v-31f23c13>滚动加载 + 虚拟滚动</strong>， 支持十万级数据在弱网与中端设备上的稳定渲染与交互。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>封装 <strong data-v-31f23c13>ECharts</strong> 图表 <strong data-v-31f23c13>hooks</strong>（如 useChartOptions / useAutoLoad）， 实现按需加载、滚动增量渲染及复用配置，减少重复代码并提升配置一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>Docker + Kubernetes + CI/CD</strong> 打造交付流水线， 支持<strong data-v-31f23c13>动态环境变量</strong>注入与灰度发布，无需重建镜像即可完成配置热更新。 </p></div></div></div></div><div class="company" data-v-31f23c13><div class="company-name" data-v-31f23c13>杭州宝贝派健康科技( 2023 年 2 月 ~ 2024 年 11 月 )</div><div class="company-duty" data-v-31f23c13><div class="label" data-v-31f23c13> 工作内容 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>主导多端项目的架构与交付，涵盖 Web 管理后台与微信/支付宝小程序；完善代码规范与组件复用策略，提升团队交付效率与一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>维护与扩展内部通用组件库（人员选择、文件上传、批量操作、定制下拉等），沉淀文档与示例，降低业务开发成本。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>推进跨端适配与兼容性治理，基于 uni-app / Taro 实践小程序工程化，成功交付多款高质量小程序产品。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>优化工程性能与体验：从 webpack3 升级到 4，启动时间由 <strong data-v-31f23c13>10s</strong> 缩短至 <strong data-v-31f23c13>4s</strong>，包体由 <strong data-v-31f23c13>20MB</strong> 降至 <strong data-v-31f23c13>15MB</strong>；引入 html2canvas 实现 HTML 转画布并统一兼容策略，提升渲染一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>落地 AI 赋能开发：熟练使用 ChatGPT 与国内大模型，显著提升研发效率与文档产出质量。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 Vue 2/3 技术栈搭建并优化后台管理系统与高性能 H5 应用，完善路由、状态与接口规范。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>封装并应用 TipTap 富文本编辑器，完善复杂编辑场景能力，优化内容生产体验。 </p></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>妈妈派管理系统</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>Vue3</div><div class="skill" data-v-31f23c13>Element Plus</div><div class="skill" data-v-31f23c13>QRcode</div><div class="skill" data-v-31f23c13>vxe-table</div><div class="skill" data-v-31f23c13>pnpm</div><div class="skill" data-v-31f23c13>Tinymce</div><div class="skill" data-v-31f23c13>tiptap</div><div class="skill" data-v-31f23c13>htmlcavas</div><div class="skill" data-v-31f23c13>vite</div><div class="skill" data-v-31f23c13>GitLab</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 部门级核心管理系统，负责统一的身份/页面/操作权限治理；前端以大量表格、表单与树形结构的数据展示为主，支撑高频配置与运营场景。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>从 0 到 1 搭建后台基础能力，完成动态路由 <strong data-v-31f23c13>addRoute</strong> 与配置化组件体系建设。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>独立负责 PC 端活动配置模块与 Mobile 活动页面的开发与维护，沉淀表单/表格复用方案。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>参与需求评审、原型与 UI 评审；输出技术方案并参与评审落地，保障交付质量与一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>维护内部组件库（人员选择、文件上传、批量操作、定制下拉等），并完善使用文档与示例。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于自定义指令 <strong data-v-31f23c13>directives</strong> 实现菜单/按钮级角色权限控制，统一权限校验逻辑。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>对接 <strong data-v-31f23c13>ChatGPT</strong> 与 <strong data-v-31f23c13>Midjourney</strong>，实现 AI 询问与 AI 绘图相关功能，提升内容配置效率。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>优化后台启动性能：基于 <strong data-v-31f23c13>webpack</strong> 调优启动流程，启动时间由 <strong data-v-31f23c13>12s</strong> 降至 <strong data-v-31f23c13>4s</strong>。 </p></div></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>云小派（微信小程序/支付宝小程序）</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>原生开发</div><div class="skill" data-v-31f23c13>qrcode</div><div class="skill" data-v-31f23c13>canvas</div><div class="skill" data-v-31f23c13>uniapp</div><div class="skill" data-v-31f23c13>uView</div><div class="skill" data-v-31f23c13>pnpm</div><div class="skill" data-v-31f23c13>oss</div><div class="skill" data-v-31f23c13>GitLab</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 面向孕妈与宝妈群体的小程序产品，负责项目从搭建到持续迭代与维护，并沉淀公共组件能力，保障高频营销与运营活动的快速上线。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>从 0 到 1 完成核心功能：注册登录、无感刷新、个人信息等模块搭建与联调。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>性能优化：页面平均响应由 <strong data-v-31f23c13>2s</strong> 降至 <strong data-v-31f23c13>500ms</strong>，明显提升流畅度与稳定性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>封装 <strong data-v-31f23c13>popup/模态框/手风琴/分享海报/倒计时/input 双向绑定</strong> 等通用组件，提升复用效率。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>负责小程序申请与备案；配置 <strong data-v-31f23c13>AppID/密钥</strong> 等环境变量并发布上线。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>难点攻关：实现 Token 过期无感静默登录与用户/平台/机构三方角色校验，保证会话安全与一致性。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>难点攻关：原生 <strong data-v-31f23c13>Canvas</strong> 封装分享海报与二维码功能，兼容微信/支付宝在 Android/iOS 的差异。 </p></div></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>育教云医疗后台管理</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>React</div><div class="skill" data-v-31f23c13>Ant Design</div><div class="skill" data-v-31f23c13>Typescript</div><div class="skill" data-v-31f23c13>webpack</div><div class="skill" data-v-31f23c13>pnpm</div><div class="skill" data-v-31f23c13>husky</div><div class="skill" data-v-31f23c13>dumi</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 面向医院场景的业务后台，支撑医生/护士对婴儿档案、测评与随访数据的登记与管理，要求高稳定性与清晰的操作流程。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用 <strong data-v-31f23c13>pnpm</strong> 管理多包与基础能力封装，提升依赖安装与构建效率。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>将发版流程接入 CI：自动化测试 + 线上站点发布 + npm 发包，形成标准化交付。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>基于 <strong data-v-31f23c13>husky</strong> 落地 git hooks，在提交前执行格式化、检查与单测，保障代码质量。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>利用 TypeScript 类型定义，提升 Hooks 的可靠性；配合 <strong data-v-31f23c13>gulp</strong> 构建完善的 d.ts。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用 <strong data-v-31f23c13>dumi</strong> 搭建组件/Hook 文档站，提供完整 demo 与入参/出参说明。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>难点：通过 <strong data-v-31f23c13>gulp</strong> 同构构建同时产出 CommonJS/ESM，配合 <strong data-v-31f23c13>webpack</strong> 提供 UMD 版本。 </p></div></div></div></div>',
          3,
        )),
      Rt('div', Ml, [
        s[3] ||
          (s[3] = Rt(
            'div',
            { class: 'company-name' },
            '杭州风尚科技( 2022 年 9 月 ~ 2023 年 2 月 )',
            -1,
          )),
        Rt('div', Dl, [
          s[2] || (s[2] = Rt('div', { class: 'label' }, ' 工作内容 ', -1)),
          Rt('div', Fl, [
            s[1] ||
              (s[1] = gt(
                '<p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>团队负责人（ 3人），主导公司全部前端工作，任务分配；</p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>负责旧项目的页面开发和维护，样式更正，BUG修复；</p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span> 负责新项目的搭建，基础设施建设，技术调研及选型，页面开发和维护，书写相关文档； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span> 负责制定团队开发规范，通过 <strong data-v-31f23c13>Pull Requests</strong> 进行代码审查 , 定期组织 <strong data-v-31f23c13>Code Review</strong> 会议； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>负责参与需求讨论，原型设计，与品控、设计人员交涉，进行原型评审。 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>采用 <strong data-v-31f23c13>crypto-js</strong> 库实现了 AES_CBC 加密算法，同时针对 unix时间戳 进行了灵活高效的格式转换，增强了系统数据的安全性和可 靠性 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>精通微信登录授权流程，成功解决了 <strong data-v-31f23c13>redirect uri</strong> 设置和集成微信 JSDK 过程中出现的问题，保障了项目的社交化登录及互动功 能稳定运行 </p>',
                7,
              )),
            G(a, null, {
              default: on(() => [
                ...(s[0] ||
                  (s[0] = [
                    Rt('span', { class: 'circle' }, '·', -1),
                    Hn(
                      '具备解决复杂浏览器兼容性问题的能力，配合 Electron 框架成功完成了从 Web 到桌面应用程序的迁移，为用户提供了一致、流 畅的跨平台体验 ',
                      -1,
                    ),
                  ])),
              ]),
              _: 1,
            }),
          ]),
        ]),
        s[4] ||
          (s[4] = gt(
            '<div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>研美管理</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>Vue2</div><div class="skill" data-v-31f23c13>Gitee</div><div class="skill" data-v-31f23c13>yarn</div><div class="skill" data-v-31f23c13>EChars</div><div class="skill" data-v-31f23c13>Vue-Draggable</div><div class="skill" data-v-31f23c13>VitePress</div><div class="skill" data-v-31f23c13>websocket</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 一个健身房的活动配置系统，对运营和门店的活动进行管理，配置不同门店，不同城市生成不同的活动，并进行数据统计。 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13>vue-cli</strong> ，结合<strong data-v-31f23c13>eslint + prettier + husky + lint-staged + commitlint </strong>搭建现代化前端工程，通过 css 变量配置一键换肤； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>二次封装<strong data-v-31f23c13>axios</strong>， 通过配置请求，响应拦截器，统一处理接口返回结果，添加全局的 loading，message； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> EChars </strong>实现数据可视化以及地图部分的需求； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> vite-press </strong>搭建运营帮助文档；</p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> websocket </strong>实时展示现场的告警信息； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> ElementUI </strong>实现可编辑表格，单元格合并； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用 <strong data-v-31f23c13>vue-seamless-scroll</strong> 插件解决自动滚动的问题 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> Vue-Draggable </strong>实现表单设计器的拖拽功能； </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> Axure </strong>完成原型设计，并参与原型评审。 </p></div></div></div><div class="job" data-v-31f23c13><div class="job-name" data-v-31f23c13>研美活动</div><div class="skill-list" data-v-31f23c13><div class="skill" data-v-31f23c13>Vue2</div><div class="skill" data-v-31f23c13>Gitee</div><div class="skill" data-v-31f23c13>yarn</div><div class="skill" data-v-31f23c13>vue-seamless-scroll</div><div class="skill" data-v-31f23c13>vue-baberrage</div><div class="skill" data-v-31f23c13>uni.createInnerAudioContext()</div><div class="skill" data-v-31f23c13>html2canvas</div></div><div class="project-info" data-v-31f23c13><div class="label" data-v-31f23c13> 项目简介 </div><div class="content" data-v-31f23c13><p data-v-31f23c13> 本项目是一个关于美容院活动的推广，此项目是和微信相关联的一个推广项目，在项目中使用背景音乐，自动滚 动，图片下载，弹幕等功能 </p></div></div><div class="project-my" data-v-31f23c13><div class="label" data-v-31f23c13> 我负责的 </div><div class="content" data-v-31f23c13><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13>vue-seamless-scroll</strong> 插件解决自动滚动的问题 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用<strong data-v-31f23c13>uni.createInnerAudioContext() </strong>，解决背景音乐问题，同时处理部分设备不能播放问题 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用<strong data-v-31f23c13>微信JSDK </strong>解决微信分享问题和微信支付问题，获取定位，登录回调的问题等 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>解决微信内置浏览器跨域问题，使用 <strong data-v-31f23c13> nginx </strong>代理接口解决跨域和微信分享带参数问题等 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用<strong data-v-31f23c13> vue-baberrage </strong>解决页面弹幕的问题，实现弹幕播放，视频在苹果中黑屏问题等网页设计 分析判断 JS 网页 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>使用 <strong data-v-31f23c13>vue-seamless-scroll</strong> 插件解决自动滚动的问题 </p><p data-v-31f23c13><span class="circle" data-v-31f23c13>·</span>通过 <strong data-v-31f23c13> Axure </strong>完成原型设计，并参与原型评审。 </p></div></div></div>',
            2,
          )),
      ]),
    ])
  )
}
const Nl = as(Ol, [
    ['render', Vl],
    ['__scopeId', 'data-v-31f23c13'],
  ]),
  $l = {},
  Hl = { class: 'educational' }
function Ll(t, s) {
  return (
    ct(),
    ht('div', Hl, [
      ...(s[0] ||
        (s[0] = [
          gt(
            '<h1 class="title" data-v-a1fdc3e9>教育经历</h1><div class="edu-list" data-v-a1fdc3e9><div class="edu-item" data-v-a1fdc3e9><div class="main-info" data-v-a1fdc3e9><span class="school" data-v-a1fdc3e9>中国计量大学</span><span class="degree" data-v-a1fdc3e9>本科</span></div><div class="sub-info" data-v-a1fdc3e9><span class="major" data-v-a1fdc3e9>计算机科学与技术</span><span class="time" data-v-a1fdc3e9>2025.09 ~ 2027.06</span></div></div><div class="edu-item" data-v-a1fdc3e9><div class="main-info" data-v-a1fdc3e9><span class="school" data-v-a1fdc3e9>南阳农业职业学院</span><span class="degree" data-v-a1fdc3e9>大专</span></div><div class="sub-info" data-v-a1fdc3e9><span class="major" data-v-a1fdc3e9>软件技术应用（前端开发）</span><span class="time" data-v-a1fdc3e9>2019.09 ~ 2022.06</span></div></div></div>',
            2,
          ),
        ])),
    ])
  )
}
const Xn = as($l, [
    ['render', Ll],
    ['__scopeId', 'data-v-a1fdc3e9'],
  ]),
  Kl = { class: 'resume' },
  Wl = da({
    name: 'template1',
    __name: 'index',
    setup(t) {
      return (s, a) => (ct(), ht('div', Kl, [G(Gn), G(qn), G(Nl), G(Jn), G(Xn)]))
    },
  }),
  Ul = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Wl }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  Bl = {},
  Gl = { class: 'work-experience' }
function ql(t, s) {
  return (
    ct(),
    ht('div', Gl, [
      ...(s[0] ||
        (s[0] = [
          gt(
            '<h1 class="title" data-v-3c2dd4d8>工作经历</h1><div class="job" data-v-3c2dd4d8><div class="job-header" data-v-3c2dd4d8><div class="job-name" data-v-3c2dd4d8>北京深睿医疗科技有限公司</div><div class="job-time" data-v-3c2dd4d8>2024.12 ~ 2025.10</div></div><div class="job-position" data-v-3c2dd4d8>前端开发工程师</div><div class="job-description" data-v-3c2dd4d8><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>从 0 到 1 搭建基础设施，完成 <strong data-v-3c2dd4d8>Vue Router、CI/CD 流水线、Docker 容器化、Kubernetes 部署</strong> 等工程化建设，规范开发流程并提升交付效率。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>重构公司老项目的 <strong data-v-3c2dd4d8>单点登录（SSO）</strong> 系统，解决跨系统兼容性问题，统一会话与权限校验，显著提升用户体验与系统稳定性。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>基于 <strong data-v-3c2dd4d8>AntV X6</strong> 实现 ER 图可视化，支持按数据模型动态生成页面布局与样式，提供节点高亮、路径追踪等交互，辅助数据关系理解与溯源。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>对开源框架 <strong data-v-3c2dd4d8>Dify</strong> 进行二次开发，落地 <strong data-v-3c2dd4d8>AI 智能问答</strong> 与对话模块，支持知识库检索、意图识别与多轮会话，提升业务协作效率。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>建设 <strong data-v-3c2dd4d8>ECharts</strong> 可视化体系，沉淀可复用配置与组件，覆盖多种复杂图表场景，支持联动与按需加载，保障系统性能与设计一致性。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>主导全链路性能优化：将包体积从 <strong data-v-3c2dd4d8>93MB</strong> 压缩至 <strong data-v-3c2dd4d8>23.4MB</strong>；通过 OTF 字体转 WOFF2、SVG 分包与 GIF 帧率优化，显著提升资源加载效率。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>重构成工程基建：引入 <strong data-v-3c2dd4d8>pnpm</strong> 优化依赖链；优化 CI/CD 打包策略，将流水线构建耗时从 <strong data-v-3c2dd4d8>22 分钟</strong> 降低至 <strong data-v-3c2dd4d8>3 分钟</strong> 内。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>落地云原生部署方案：编写 Dockerfile 与 Nginx 模版，实现 <strong data-v-3c2dd4d8>Env + Docker + K8s</strong> 架构下的动态环境变量注入与网关转发，增强环境迁移灵活性。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>主导多模态资产平台调优：通过代码审计与无效渲染治理，首屏加载由 4s 缩短至 <strong data-v-3c2dd4d8>1.5s</strong>，双倍提升核心页面响应速度。</span></div></div></div><div class="job" data-v-3c2dd4d8><div class="job-header" data-v-3c2dd4d8><div class="job-name" data-v-3c2dd4d8>杭州宝贝派健康科技</div><div class="job-time" data-v-3c2dd4d8>2023.02 ~ 2024.11</div></div><div class="job-position" data-v-3c2dd4d8>前端开发工程师</div><div class="job-description" data-v-3c2dd4d8><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>主导多端项目的架构与交付，涵盖 Web 管理后台与 <strong data-v-3c2dd4d8>微信/支付宝小程序</strong>；完善代码规范与复用策略，提升团队开发效率。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>维护与扩展内部通用组件库，沉淀详细文档与示例，显著降低业务开发成本。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>推进跨端适配与兼容性治理，基于 <strong data-v-3c2dd4d8>uni-app / Taro</strong> 实践小程序工程化，成功交付多款高质量小程序产品。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>优化工程性能：由 <strong data-v-3c2dd4d8>webpack3</strong> 升级至 <strong data-v-3c2dd4d8>4</strong>，显著提升构建速度并优化包体大小；引入 <strong data-v-3c2dd4d8>html2canvas</strong> 实现复杂的 HTML 转画布功能并统一兼容策略。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>落地 <strong data-v-3c2dd4d8>AI 赋能开发</strong>：深入应用 <strong data-v-3c2dd4d8>ChatGPT</strong> 等大模型辅助研发，提升代码产出效率与文档质量。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>封装并应用 <strong data-v-3c2dd4d8>TipTap</strong> 富文本编辑器，完善复杂编辑场景能力，优化内容生产体验。</span></div></div></div><div class="job" data-v-3c2dd4d8><div class="job-header" data-v-3c2dd4d8><div class="job-name" data-v-3c2dd4d8>杭州风尚科技</div><div class="job-time" data-v-3c2dd4d8>2022.09 ~ 2023.02</div></div><div class="job-position" data-v-3c2dd4d8>前端开发工程师 / 团队负责人</div><div class="job-description" data-v-3c2dd4d8><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>担任 3 人前端团队负责人，主导整体前端选型、任务分配及工程基建。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>负责旧项目迭代与新项目搭建，制定团队开发规范，通过 <strong data-v-3c2dd4d8>Code Review</strong> 确保代码质量。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>采用 <strong data-v-3c2dd4d8>crypto-js</strong> 实现 <strong data-v-3c2dd4d8>AES_CBC 加密算法</strong>，增强系统数据安全性；精通微信生态开发，解决复杂的授权与 <strong data-v-3c2dd4d8>JSDK</strong> 集成问题。</span></div><div class="desc-item" data-v-3c2dd4d8><span class="circle" data-v-3c2dd4d8>·</span><span class="text" data-v-3c2dd4d8>结合 <strong data-v-3c2dd4d8>Electron</strong> 框架实现 Web 应用桌面化，为用户提供跨平台的一致性流畅体验。</span></div></div></div>',
            4,
          ),
        ])),
    ])
  )
}
const Jl = as(Bl, [
    ['render', ql],
    ['__scopeId', 'data-v-3c2dd4d8'],
  ]),
  Xl = { class: 'project-experience' },
  zl = { key: 0, class: 'project' },
  Yl = { key: 1, class: 'project' },
  Zl = da({
    __name: 'project-experience',
    setup(t) {
      const s = an(!1)
      return (a, e) => (
        ct(),
        ht('div', Xl, [
          e[2] ||
            (e[2] = gt(
              '<h1 class="title" data-v-9a391417>项目经历</h1><div class="project" data-v-9a391417><div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>医学科研数据库</div><div class="project-time" data-v-9a391417>北京深睿医疗科技有限公司</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>React 18</span><span class="skill" data-v-9a391417>TypeScript</span><span class="skill" data-v-9a391417>Vite 6</span><span class="skill" data-v-9a391417>Ant Design</span><span class="skill" data-v-9a391417>Zustand</span><span class="skill" data-v-9a391417>vite-plugin-svg-icons</span><span class="skill" data-v-9a391417>Docker</span><span class="skill" data-v-9a391417>Kubernetes</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 高性能医学科研数据管理系统，系统支持对省内政策支持申报的医学科研项目进行项目数据汇交，并对系统沉淀的项目汇交数据进行开放共享和进一步的科研数据分析应用； </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>实现<strong data-v-9a391417>资产极致压缩</strong>：通过格式转换（<strong data-v-9a391417>OTF 转 WOFF2</strong>）、<strong data-v-9a391417>SVG</strong> 代码压缩与分包、<strong data-v-9a391417>GIF</strong> 动态帧优化，累计降低静态资源体积超 <strong data-v-9a391417>80%</strong>。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于 <strong data-v-9a391417>Vite 6</strong> 实现<strong data-v-9a391417>构建与交付优化</strong>：代码分割与 <strong data-v-9a391417>Gzip</strong> 压缩；引入图片预加载策略（<strong data-v-9a391417>Preload/Prefetch</strong>）；通过 <strong data-v-9a391417>pnpm</strong> 优化依赖下载速度。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>编写 <strong data-v-9a391417>Dockerfile</strong> 与 <strong data-v-9a391417>Nginx</strong> 动态模板脚本，支撑 <strong data-v-9a391417>Env + Docker + K8s</strong> 环境下的<strong data-v-9a391417>动态环境变量注入</strong>与接口转发拦截，实现云原生部署。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>控制<strong data-v-9a391417>页面、按钮、三方登录权限</strong>，实现<strong data-v-9a391417>大屏可视化</strong>，优化 <strong data-v-9a391417>chunk 拆分策略</strong>，避免单个 chunk 超过 <strong data-v-9a391417>500KB</strong>。</span></div></div></div></div></div><div class="project" data-v-9a391417><div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>多模态数据资产管理平台</div><div class="project-time" data-v-9a391417>北京深睿医疗科技有限公司</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>React</span><span class="skill" data-v-9a391417>TypeScript</span><span class="skill" data-v-9a391417>Ant Design</span><span class="skill" data-v-9a391417>Mobx</span><span class="skill" data-v-9a391417>Node.js</span><span class="skill" data-v-9a391417>ECharts</span><span class="skill" data-v-9a391417>AntV X6</span><span class="skill" data-v-9a391417>SSO单点登录</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 面向医疗机构的数据资产管理与知识可视化平台，聚焦<strong data-v-9a391417>医学/疾病知识图谱、表结构映射、字段标准化</strong>等场景。 支持多家医院异构数据表的<strong data-v-9a391417>兼容与对齐</strong>，将底层数据统一抽象为标准字段模型，并通过图表与图谱联动 呈现数据关系与流向，为数据治理、资产盘点与分析决策提供可视化支撑。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>负责前端架构设计与工程治理，搭建业务组件与图表组件体系，推动页面开发、数据联动与接口对接的规范化落地。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>重构<strong data-v-9a391417>SSO 单点登录</strong>体系，基于 <strong data-v-9a391417>React Context API（createContext / useContext）</strong>与路由守卫实现会话管理与页面权限拦截，提升多系统间的登录一致性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于 <strong data-v-9a391417>AntV X6</strong> 实现<strong data-v-9a391417>数据血缘关系图</strong>与实体关系可视化， 动态渲染表/字段级依赖关系，支持节点高亮、路径追踪与交互式筛选，辅助数据流向溯源。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>建设平台安全能力：可配置<strong data-v-9a391417>水印、防复制、数据预警、细粒度数据权限</strong>等功能， 结合操作审计策略，提升敏感数据的可控性与合规性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>集成第三方 <strong data-v-9a391417>OA</strong> 系统，支持免登录单点接入与 <strong data-v-9a391417>iframe</strong> 无缝嵌入， 完成跨系统菜单跳转与权限透传，优化一体化门户的使用体验。</span></div></div></div></div></div>',
              3,
            )),
          s.value
            ? (ct(),
              ht('div', zl, [
                ...(e[0] ||
                  (e[0] = [
                    gt(
                      '<div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>智能监测病种平台</div><div class="project-time" data-v-9a391417>北京深睿医疗科技有限公司</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>Vue 3</span><span class="skill" data-v-9a391417>Vue Router</span><span class="skill" data-v-9a391417>TypeScript</span><span class="skill" data-v-9a391417>Ant Design Vue</span><span class="skill" data-v-9a391417>Pinia</span><span class="skill" data-v-9a391417>ECharts</span><span class="skill" data-v-9a391417>Docker</span><span class="skill" data-v-9a391417>Kubernetes</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 面向医院与区域卫生监管的病种监测与分析平台，支持按<strong data-v-9a391417>病种、地区、时间、机构</strong>等多维度进行数据汇总与钻取， 通过可视化看板呈现分布趋势、异常波动和结构占比，辅助管理者进行诊疗结构优化与资源调配决策。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>负责<strong data-v-9a391417>登录鉴权、角色权限、用户信息</strong>等核心模块设计与实现， 基于路由守卫与权限指令实现页面与功能级访问控制，提升系统安全性与可维护性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>集成 <strong data-v-9a391417>docxtemplater + docxtemplater-image-module-free</strong>， 实现结构化报表的模板化导出与图文混排，支持按筛选条件一键生成科室/病种分析报告。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于 <strong data-v-9a391417>file / file-saver / jsPDF / pdfjs-dist</strong> 实现<strong data-v-9a391417>PDF在线预览与下载</strong>闭环， 优化多页长文档的渲染体验，保证导出内容在不同终端的排版一致性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>构建 <strong data-v-9a391417>ECharts</strong> 数据可视化模块，沉淀通用图表配置与渲染逻辑， 支持折线、柱状、饼图、雷达等图表的复用与联动，提升数据洞察效率与图表可维护性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于 <strong data-v-9a391417>Docker + Kubernetes</strong> 实现<strong data-v-9a391417>动态环境变量</strong>注入与配置热更新， 结合 CI/CD 流水线完成持续集成交付，缩短发布回归周期，提升环境一致性与稳定性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>集成<strong data-v-9a391417>单点登录（SSO）</strong>，打通门户与多系统入口，实现基于用户权限的系统间跳转与会话共享。</span></div></div></div></div>',
                      3,
                    ),
                  ])),
              ]))
            : Ra('', !0),
          s.value
            ? (ct(),
              ht('div', Yl, [
                ...(e[1] ||
                  (e[1] = [
                    gt(
                      '<div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>智能数据监管平台</div><div class="project-time" data-v-9a391417>北京深睿医疗科技有限公司</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>Vue3</span><span class="skill" data-v-9a391417>TypeScript</span><span class="skill" data-v-9a391417>Vite</span><span class="skill" data-v-9a391417>vxe-table</span><span class="skill" data-v-9a391417>ECharts</span><span class="skill" data-v-9a391417>Web Worker</span><span class="skill" data-v-9a391417>Promise/并发控制</span><span class="skill" data-v-9a391417>Hooks</span><span class="skill" data-v-9a391417>Docker</span><span class="skill" data-v-9a391417>Kubernetes</span><span class="skill" data-v-9a391417>CI/CD</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 面向医疗监管场景的综合统计与分析平台，覆盖<strong data-v-9a391417>地区、医院、科室、医生、药品</strong>等维度的数据采集、监测与可视化分析。 通过高并发请求调度与增量渲染技术，实现大规模数据的平滑加载和交互；结合图表与表格联动，为数据稽核与趋势研判提供决策支持。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>实现<strong data-v-9a391417>并发请求调度</strong>，通过任务队列与限流策略将同时请求数限制为 <strong data-v-9a391417>4</strong>， 在保障接口稳定性的同时提升数据拉取效率（平均列表加载时延降低约 <strong data-v-9a391417>35%</strong>）。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>引入<strong data-v-9a391417>Web Worker</strong> 将密集计算与数据预处理从主线程剥离， 明显降低主线程阻塞，提升页面滚动与交互流畅度（长列表掉帧问题显著缓解）。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>二次封装 <strong data-v-9a391417>vxe-table</strong>，实现<strong data-v-9a391417>滚动加载 + 虚拟滚动</strong>， 支持十万级数据在弱网与中端设备上的稳定渲染与交互。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>封装 <strong data-v-9a391417>ECharts</strong> 图表 <strong data-v-9a391417>hooks</strong>（如 useChartOptions / useAutoLoad）， 实现按需加载、滚动增量渲染及复用配置，减少重复代码并提升配置一致性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于 <strong data-v-9a391417>Docker + Kubernetes + CI/CD</strong> 打造交付流水线， 支持<strong data-v-9a391417>动态环境变量</strong>注入与灰度发布，无需重建镜像即可完成配置热更新。</span></div></div></div></div>',
                      3,
                    ),
                  ])),
              ]))
            : Ra('', !0),
          e[3] ||
            (e[3] = gt(
              '<div class="project" data-v-9a391417><div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>妈妈派管理系统</div><div class="project-time" data-v-9a391417>杭州宝贝派健康科技</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>Vue3</span><span class="skill" data-v-9a391417>Element Plus</span><span class="skill" data-v-9a391417>QRcode</span><span class="skill" data-v-9a391417>vxe-table</span><span class="skill" data-v-9a391417>pnpm</span><span class="skill" data-v-9a391417>Tinymce</span><span class="skill" data-v-9a391417>tiptap</span><span class="skill" data-v-9a391417>html2canvas</span><span class="skill" data-v-9a391417>vite</span><span class="skill" data-v-9a391417>GitLab</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 部门级核心管理系统，负责统一的身份/页面/操作权限治理；前端以大量表格、表单与树形结构的数据展示为主，支撑高频配置与运营场景。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>从 0 到 1 搭建后台基础能力，完成动态路由 <strong data-v-9a391417>addRoute</strong> 与配置化组件体系建设。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>独立负责 PC 端活动配置模块与 Mobile 活动页面的开发与维护，沉淀表单/表格复用方案。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>维护内部组件库（人员选择、文件上传、批量操作、定制下拉等），并完善使用文档与示例。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于自定义指令 <strong data-v-9a391417>directives</strong> 实现菜单/按钮级角色权限控制，统一权限校验逻辑。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>对接 <strong data-v-9a391417>ChatGPT</strong> 与 <strong data-v-9a391417>Midjourney</strong>，实现 AI 询问与 AI 绘图相关功能，提升内容配置效率。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>优化后台启动性能：基于 <strong data-v-9a391417>webpack</strong> 调优启动流程，启动时间由 <strong data-v-9a391417>12s</strong> 降至 <strong data-v-9a391417>4s</strong>。</span></div></div></div></div></div><div class="project" data-v-9a391417><div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>育教云医疗后台管理</div><div class="project-time" data-v-9a391417>杭州宝贝派健康科技</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>React</span><span class="skill" data-v-9a391417>Ant Design</span><span class="skill" data-v-9a391417>TypeScript</span><span class="skill" data-v-9a391417>webpack</span><span class="skill" data-v-9a391417>pnpm</span><span class="skill" data-v-9a391417>husky</span><span class="skill" data-v-9a391417>dumi</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 面向医院场景的业务后台，支撑医生/护士对婴儿档案、测评与随访数据的登记与管理，要求高稳定性与清晰的操作流程。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>使用 <strong data-v-9a391417>pnpm</strong> 管理多包与基础能力封装，提升依赖安装与构建效率。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>将发版流程接入 CI：自动化测试 + 线上站点发布 + npm 发包，形成标准化交付。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>基于 <strong data-v-9a391417>husky</strong> 落地 git hooks，在提交前执行格式化、检查与单测，保障代码质量。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>利用 TypeScript 类型定义，提升 Hooks 的可靠性；配合 <strong data-v-9a391417>gulp</strong> 构建完善的 d.ts。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>使用 <strong data-v-9a391417>dumi</strong> 搭建组件/Hook 文档站，提供完整 demo 与入参/出参说明。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>通过 <strong data-v-9a391417>gulp</strong> 同构构建同时产出 CommonJS/ESM，配合 <strong data-v-9a391417>webpack</strong> 提供 UMD 版本。</span></div></div></div></div></div><div class="project" data-v-9a391417><div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>云小派（微信小程序/支付宝小程序）</div><div class="project-time" data-v-9a391417>杭州宝贝派健康科技</div></div><div class="skill-list" data-v-9a391417><span class="skill" data-v-9a391417>原生开发</span><span class="skill" data-v-9a391417>qrcode</span><span class="skill" data-v-9a391417>canvas</span><span class="skill" data-v-9a391417>uniapp</span><span class="skill" data-v-9a391417>uView</span><span class="skill" data-v-9a391417>pnpm</span><span class="skill" data-v-9a391417>oss</span><span class="skill" data-v-9a391417>GitLab</span></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417> 面向孕妈与宝妈群体的小程序产品，负责项目从搭建到持续迭代与维护，并沉淀公共组件能力，保障高频营销与运营活动的快速上线。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>从 0 到 1 完成核心功能：注册登录、无感刷新、个人信息等模块搭建与联调。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>性能优化：页面平均响应由 <strong data-v-9a391417>2s</strong> 降至 <strong data-v-9a391417>500ms</strong>，明显提升流畅度与稳定性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>封装 <strong data-v-9a391417>popup/模态框/手风琴/分享海报/倒计时/input 双向绑定</strong> 等通用组件，提升复用效率。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>负责小程序申请与备案；配置 <strong data-v-9a391417>AppID/密钥</strong> 等环境变量并发布上线。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>实现 Token 过期无感静默登录与用户/平台/机构三方角色校验，保证会话安全与一致性。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>原生 <strong data-v-9a391417>Canvas</strong> 封装分享海报与二维码功能，兼容微信/支付宝在 Android/iOS 的差异。</span></div></div></div></div></div><div class="project more-projects" data-v-9a391417><div class="project-header" data-v-9a391417><div class="project-name" data-v-9a391417>研美管理、研美活动</div><div class="project-time" data-v-9a391417>2022 ~ 2023</div></div><div class="project-info" data-v-9a391417><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>项目简介</span><div class="content main-text" data-v-9a391417><strong data-v-9a391417>研美管理</strong>：健身房活动配置系统，对运营和门店的活动进行管理，配置不同门店、不同城市生成不同的活动，并进行数据统计。 <strong data-v-9a391417>研美活动</strong>：美容院活动推广项目，与微信相关联的推广项目，使用背景音乐、自动滚动、图片下载、弹幕等功能。 </div></div><div class="info-item" data-v-9a391417><span class="label" data-v-9a391417>技术亮点</span><div class="content list-text" data-v-9a391417><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>通过 <strong data-v-9a391417>vue-cli</strong>，结合<strong data-v-9a391417>eslint + prettier + husky + lint-staged + commitlint</strong> 搭建现代化前端工程，通过 css 变量配置一键换肤。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>通过 <strong data-v-9a391417>ECharts</strong> 实现数据可视化以及地图部分的需求；通过 <strong data-v-9a391417>WebSocket</strong> 实时展示现场的告警信息。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>通过 <strong data-v-9a391417>Vue-Draggable</strong> 实现表单设计器的拖拽功能；通过 <strong data-v-9a391417>VitePress</strong> 搭建运营帮助文档。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>使用 <strong data-v-9a391417>vue-seamless-scroll</strong> 插件解决自动滚动问题；使用 <strong data-v-9a391417>uni.createInnerAudioContext()</strong> 解决背景音乐问题。</span></div><div class="list-item" data-v-9a391417><span class="dot" data-v-9a391417>·</span><span class="text" data-v-9a391417>使用 <strong data-v-9a391417>微信JSDK</strong> 解决微信分享和微信支付问题；使用 <strong data-v-9a391417>vue-baberrage</strong> 解决页面弹幕问题。</span></div></div></div></div></div>',
              4,
            )),
        ])
      )
    },
  }),
  Ql = as(Zl, [['__scopeId', 'data-v-9a391417']]),
  td = { class: 'resume-container no-print-bg' },
  sd = { class: 'resume-body' },
  ad = da({
    name: 'template2',
    __name: 'index',
    setup(t) {
      return (s, a) => (
        ct(),
        ht('div', td, [Rt('div', sd, [G(Gn), G(qn), G(Jl), G(Ql), G(Jn), G(Xn)])])
      )
    },
  }),
  ed = Object.freeze(
    Object.defineProperty({ __proto__: null, default: ad }, Symbol.toStringTag, {
      value: 'Module',
    }),
  )
let gs = null
function nd() {
  if (gs) return gs
  const t = Object.assign({
    '/src/views/template1/index.vue': Ul,
    '/src/views/template2/index.vue': ed,
  })
  return (
    (gs = new Map()),
    Object.entries(t).forEach(([s, a]) => {
      const e = a.default,
        n = e.name || s.split('/').at(-2)
      n
        ? gs.set(n, { name: n, component: e })
        : console.warn(`Component at ${s} does not have a name defined`)
    }),
    gs
  )
}
function id(t) {
  const s = nd(),
    a = s.get(t)
  return a
    ? a.component
    : (console.error(`Template "${t}" not found. Available templates:`, Array.from(s.keys())), null)
}
const cd = { id: 'app-root' },
  ld = da({
    __name: 'App',
    setup(t) {
      const s = an('template1'),
        a = Un(() => id(s.value))
      return (e, n) => (
        ct(),
        ht('div', cd, [
          (ct(), Oa(sc, null, [a.value ? (ct(), Oa(vc(a.value), { key: 0 })) : Ra('', !0)], 1024)),
        ])
      )
    },
  })
xl(ld).mount('#app')
