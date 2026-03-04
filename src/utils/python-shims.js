/**
 * Python 相容性墊片 (Compatibility Shims)
 * 
 * 本檔案包含用於在 Pyodide 環境中模擬或填補缺失函式庫的 Python 代碼字串
 * (例如：QuantLib C++ 擴充套件、Pymoo 舊版支援)。
 */

export const QUANTLIB_SHIM = `
# QuantLib (ql) 強大模擬層
# 由於 QuantLib 是 C++ 擴充套件，目前無法在瀏覽器原生執行。
# 我們提供一個高度相容的模擬層，以支援書中 Chapter 12 的債券與利率分析範例。
import sys
import datetime
from types import ModuleType
ql = ModuleType('QuantLib')
sys.modules['QuantLib'] = ql

class QLDate:
    def __init__(self, *args):
        try:
            if len(args) == 3: # (d, m, y)
                self.dt = datetime.date(args[2], args[1], args[0])
            elif len(args) == 2: # (str_val, fmt)
                py_fmt = args[1].replace('%d', '%d').replace('%m', '%m').replace('%Y', '%Y')
                self.dt = datetime.datetime.strptime(args[0], py_fmt).date()
            elif len(args) == 1 and isinstance(args[0], QLDate):
                self.dt = args[0].dt
            elif len(args) == 1 and isinstance(args[0], datetime.date):
                self.dt = args[0]
            else:
                self.dt = datetime.date(2020, 1, 1)
        except Exception:
            self.dt = datetime.date(2020, 1, 1)

    def __add__(self, other):
        if isinstance(other, int):
            new_dt = self.dt + datetime.timedelta(days=other)
            return QLDate(new_dt.day, new_dt.month, new_dt.year)
        elif hasattr(other, 'units'): # QLPeriod
            val = other.value
            if other.units == "Months":
                new_dt = self.dt + datetime.timedelta(days=val * 30)
                return QLDate(new_dt)
            elif other.units == "Years":
                new_dt = self.dt + datetime.timedelta(days=val * 365)
                return QLDate(new_dt)
        return self

    def __sub__(self, other):
        if isinstance(other, QLDate):
            return (self.dt - other.dt).days
        return 0

    def __str__(self): return self.dt.strftime('%B %d, %Y')
    def __repr__(self): return self.__str__()
    def date(self): return self

ql.Date = QLDate

class QLPeriod:
    def __init__(self, value, units=None):
        self.value = value
        self.units = units
ql.Period = QLPeriod
ql.Months = "Months"
ql.Years = "Years"
ql.Days = "Days"
ql.Weeks = "Weeks"

# 月份常數
ql.January, ql.February, ql.March = 1, 2, 3
ql.April, ql.May, ql.June = 4, 5, 6
ql.July, ql.August, ql.September = 7, 8, 9
ql.October, ql.November, ql.December = 10, 11, 12

class Settings:
    _inst = None
    @classmethod
    def instance(cls):
        if cls._inst is None: cls._inst = cls()
        return cls._inst
    evaluationDate = None
ql.Settings = Settings

class QLDayCount:
    def __init__(self, *args): pass
    def yearFraction(self, start, end):
        s = start.dt if hasattr(start, 'dt') else start
        e = end.dt if hasattr(end, 'dt') else end
        return (e - s).days / 365.0

ql.Thirty360 = QLDayCount
ql.ActualActual = QLDayCount
ql.ActualActual.Bond = "Bond"

class QLCalendar:
    def __init__(self, *args): pass
    def advance(self, date, value, units):
        if hasattr(units, 'units'): # It's a period
            return date + units
        return date + QLPeriod(value, units)

ql.NullCalendar = QLCalendar
ql.UnitedStates = QLCalendar
ql.UnitedStates.GovernmentBond = "GovernmentBond"
ql.Linear = lambda: "Linear"
ql.Compounded = "Compounded"
ql.Annual = 1
ql.Semiannual = 2
ql.Quarterly = 4
ql.Daily = 365
ql.Unadjusted = "Unadjusted"
ql.Following = "Following"

class DateGeneration: Backward = "Backward"
ql.DateGeneration = DateGeneration
ql.Schedule = lambda *args: "MockSchedule"
ql.MakeSchedule = lambda *args: "MockSchedule"
ql.FixedRateBondHelper = lambda *args: "MockHelper"

class CashFlow:
    def __init__(self, date, amount):
        self._date = date
        self._amount = amount
    def date(self): return self._date
    def amount(self): return self._amount

class QLZeroRate:
    def __init__(self, rate): self._rate = rate
    def rate(self): return self._rate
    def equivalentRate(self, *args): return self

class QLYieldCurve:
    def dates(self):
        d = ql.Settings.instance().evaluationDate or QLDate(15,1,2020)
        return [d + 90, d + 180, d + 365, d + 730, d + 1095]
    def zeroRate(self, yrs, compounding, freq): return QLZeroRate(0.05 + 0.005 * yrs)

ql.ZeroCurve = lambda *args: QLYieldCurve()
ql.PiecewiseLogCubicDiscount = lambda *args: QLYieldCurve()
ql.FlatForward = lambda *args: QLYieldCurve()

class QLQuote:
    def __init__(self, value=0.0): self._value = value
    def value(self): return self._value
    def setValue(self, value): self._value = value

class QLHandle:
    def __init__(self, link=None): self._link = link
    def linkTo(self, link): self._link = link
    def currentLink(self): return self._link
    def __getattr__(self, name): return getattr(self._link, name)

ql.QuoteHandle = QLHandle
ql.SimpleQuote = QLQuote
ql.YieldTermStructureHandle = QLHandle
ql.RelinkableYieldTermStructureHandle = QLHandle

class QLDuration:
    Modified = "Modified"
    Macaulay = "Macaulay"
ql.Duration = QLDuration

ql.BondFunctions = ModuleType('BondFunctions')
ql.BondFunctions.duration = lambda *args: 2.5
ql.BondFunctions.convexity = lambda *args: 10.0

class DiscountingBondEngine:
    def __init__(self, handle=None): self.handle = handle
ql.DiscountingBondEngine = DiscountingBondEngine

class FixedRateBond:
    def __init__(self, *args):
        self.faceValue = 100
        self.coupons = [0.05]
        self.engine = None
        if len(args) >= 2: self.faceValue = args[1]
        if len(args) >= 4: self.coupons = args[3]
    def dayCounter(self): return QLDayCount()
    def cashflows(self):
        d = ql.Settings.instance().evaluationDate or QLDate(15,1,2020)
        return [
            CashFlow(d + 180, self.faceValue * self.coupons[0] / 2),
            CashFlow(d + 360, self.faceValue + self.faceValue * self.coupons[0] / 2)
        ]
    def setPricingEngine(self, engine): self.engine = engine
    def cleanPrice(self, *args):
        rate = 0.05
        if self.engine and hasattr(self.engine, 'handle'):
            h = self.engine.handle
            while hasattr(h, 'currentLink') and h.currentLink() is not None:
                h = h.currentLink()
            if hasattr(h, 'zeroRate'):
                rate = h.zeroRate(10, 1, 1).rate() # 用 10 年期利率作為定價代理
        elif args: rate = args[0]
        return 100 / (1 + rate/2)**2
    def dirtyPrice(self, *args): return self.cleanPrice(*args) * 1.0125
    def NPV(self): return self.cleanPrice()
ql.FixedRateBond = FixedRateBond

class QLSpreadedCurve:
    def __init__(self, base_handle, spread_handles, dates):
        self._base = base_handle
        self._spreads = spread_handles
        self._dates = dates
    def zeroRate(self, yrs, compounding, freq):
        base = self._base
        while hasattr(base, 'currentLink') and base.currentLink() is not None:
            base = base.currentLink()
        br = base.zeroRate(yrs, compounding, freq).rate()
        # 簡單模擬：加總所有利差的平均值來體現敏感度
        total_spread = sum(s.value() if hasattr(s, 'value') else s for s in self._spreads)
        return QLZeroRate(br + total_spread / len(self._spreads))
    def dates(self): return self._dates

ql.SpreadedLinearZeroInterpolatedTermStructure = QLSpreadedCurve
class QLHullWhite:
    def __init__(self, handle, a, s): self.handle = handle
ql.HullWhite = QLHullWhite

class QLTreeEngine:
    def __init__(self, model, grid): self.handle = model.handle
ql.TreeCallableFixedRateBondEngine = QLTreeEngine

ql.CallabilitySchedule = list
ql.CallabilityPrice = lambda *args: "MockPrice"
ql.CallabilityPrice.Clean = "Clean"
ql.Callability = lambda *args: "MockCallability"
ql.Callability.Call = "Call"
ql.Callability.Put = "Put"
ql.CallableFixedRateBond = FixedRateBond

print("✅ QuantLib (ql) 強大模擬層已啟動。")
`;

export const PYMOO_SHIM = `
# Pymoo 相容性與警告抑制
try:
    import pymoo
    # 0.4.x 原生包含 pymoo.model.problem 和 pymoo.factory
    # 只需抑制編譯提示
    try:
        from pymoo.configuration import Configuration
        Configuration.show_compile_hint = False
    except (ImportError, AttributeError):
        pass
    
    # 驗證關鍵模組可匯入
    import pymoo.model.problem
    import pymoo.algorithms.nsga2
    print("✅ Pymoo 0.4.1：舊版 API 原生可用，無需額外映射。")
except ImportError as e:
    # 如果是 0.6.x 或其他版本，嘗試建立向後相容映射
    try:
        import sys
        import pymoo.core.problem
        import pymoo.algorithms.moo.nsga2
        sys.modules['pymoo.model.problem'] = pymoo.core.problem
        sys.modules['pymoo.algorithms.nsga2'] = pymoo.algorithms.moo.nsga2
        
        from types import ModuleType
        if not hasattr(pymoo, 'factory'):
            factory = ModuleType('pymoo.factory')
            from pymoo.operators.sampling.rnd import FloatRandomSampling
            from pymoo.operators.crossover.sbx import SBX
            from pymoo.operators.mutation.pm import PM
            from pymoo.termination import get_termination as _get_termination
            def get_sampling(name, *args, **kwargs): return FloatRandomSampling()
            def get_crossover(name, *args, **kwargs): return SBX(prob=kwargs.get('prob', 0.9), eta=kwargs.get('eta', 15))
            def get_mutation(name, *args, **kwargs): return PM(eta=kwargs.get('eta', 20))
            factory.get_sampling = get_sampling
            factory.get_crossover = get_crossover
            factory.get_mutation = get_mutation
            factory.get_termination = _get_termination
            sys.modules['pymoo.factory'] = factory
        print("✅ Pymoo 相容性：舊版 API 映射已完成（0.6.x -> 0.4.x 路徑）。")
    except Exception as e2:
        if not isinstance(e2, ImportError):
            print(f"⚠️ Pymoo Shim Error: {e2}")
            print(f"Original Import Error (0.4.x): {e}")
except Exception as e:
    if not isinstance(e, ImportError):
        print(f"⚠️ Pymoo Shim Error: {e}")
    pass
`;

export const PANDAS_DATAREADER_SHIM = `
# 模擬數據引擎：處理 DataReader 因 CORS 導致的 RemoteDataError
def simulated_data_reader(name, data_source=None, start=None, end=None, **kwargs):
    import pandas as pd
    import numpy as np
    print(f"📡 模擬數據引擎：由於瀏覽器 CORS 限制，正在為 {name} 產生模擬股價數據...")
    
    start_date = pd.to_datetime(start or '2020-01-01')
    end_date = pd.to_datetime(end or '2020-12-31')
    dates = pd.date_range(start_date, end_date)
    
    tickers = [name] if isinstance(name, str) else name
    data = {}
    for ticker in tickers:
        stock_map = {
            'goog': 1500, 'amzn': 2000, 'fb': 200, 'nflx': 300, 
            'gld': 150, 'ge': 80, 'nke': 100, 'ford': 10, 'dis': 180, 'aapl': 150, 'tsla': 700
        }
        base_price = stock_map.get(ticker.lower(), 100)
        returns = np.random.normal(0.0005, 0.02, len(dates))
        price = base_price * np.exp(np.cumsum(returns))
        data[ticker] = price

    if len(tickers) > 1:
        df = pd.DataFrame(data, index=dates)
        df.columns = pd.MultiIndex.from_product([['Adj Close'], tickers])
        return df
    else:
        # 單一股票：返回一個以日期為索引、Adj Close 為欄位名的簡單 DataFrame
        df = pd.DataFrame({'Adj Close': data[name]}, index=dates)
        return df

try:
    import sys
    import pandas_datareader
    import pandas_datareader.data as pdr_data
    # 同時覆蓋多個入口點以確保成功
    methods = ['DataReader', 'get_data_yahoo', 'get_data_stooq', 'get_data_fred']
    for method in methods:
        setattr(pdr_data, method, simulated_data_reader)
        setattr(pandas_datareader, method, simulated_data_reader)
        
    # 注入到 sys.modules 確保直接匯入也生效
    sys.modules['pandas_datareader.data'].DataReader = simulated_data_reader
    sys.modules['pandas_datareader'].DataReader = simulated_data_reader
    # 針對像 import pandas_datareader as web; web.get_data_yahoo 這種寫法
    for method in methods:
        setattr(sys.modules['pandas_datareader.data'], method, simulated_data_reader)
        setattr(sys.modules['pandas_datareader'], method, simulated_data_reader)
    print("✅ 模擬數據引擎：攔截器已成功啟動。")
except ImportError:
    # Silent for lazy loading
    pass
except Exception as e:
    print(f"⚠️ 模擬數據引擎啟動失敗: {str(e)}")
`;

export const SCIPY_RVS_SHIM = `
# SciPy .rvs() 相容性墊片
# 在 Pyodide 環境中，scipy.stats 的 .rvs() 方法可能因 _fblas 模組無法載入而失敗。
# 此墊片攔截 ImportError，改用 numpy.random 提供等效的隨機取樣。
try:
    import scipy.stats as _scipy_stats
    import numpy as _np
    _orig_rvs = _scipy_stats.rv_generic.rvs

    def _patched_rvs(self, *args, **kwargs):
        try:
            return _orig_rvs(self, *args, **kwargs)
        except (ImportError, AttributeError) as _e:
            if 'fblas' not in str(_e) and 'flapack' not in str(_e):
                raise
            # 取得分佈名稱
            _name = getattr(self, 'name', getattr(getattr(self, 'dist', None), 'name', ''))
            _size = kwargs.get('size', None)
            _loc = kwargs.get('loc', 0)
            _scale = kwargs.get('scale', 1)
            _fallback_map = {
                'bernoulli': lambda: _np.random.binomial(1, args[0] if args else kwargs.get('p', 0.5), size=_size),
                'binom': lambda: _np.random.binomial(args[0] if args else kwargs.get('n', 1), args[1] if len(args) > 1 else kwargs.get('p', 0.5), size=_size),
                'uniform': lambda: _np.random.uniform(_loc, _loc + _scale, size=_size),
                'norm': lambda: _np.random.normal(_loc, _scale, size=_size),
                'expon': lambda: _np.random.exponential(_scale, size=_size) + _loc,
                'poisson': lambda: _np.random.poisson(args[0] if args else kwargs.get('mu', 1), size=_size),
                'geom': lambda: _np.random.geometric(args[0] if args else kwargs.get('p', 0.5), size=_size),
                'randint': lambda: _np.random.randint(args[0] if args else kwargs.get('low', 0), args[1] if len(args) > 1 else kwargs.get('high', 2), size=_size),
            }
            if _name in _fallback_map:
                return _fallback_map[_name]()
            raise

    _scipy_stats.rv_generic.rvs = _patched_rvs
    print("✅ SciPy 相容性：.rvs() 安全墊片已啟動。")
except Exception:
    pass
`;

export const SCIPY_STUB = `
# ══════════════════════════════════════════════════════════════
# Comprehensive Pure-Python SciPy Stub for Pyodide
# ALWAYS replaces scipy.stats (native _fblas is broken in WASM)
# Also provides scipy.linalg, scipy.optimize, scipy.interpolate
# ══════════════════════════════════════════════════════════════
import sys, types, math
import numpy as np

# ── Get or create scipy module ────────────────────────────
try:
    import scipy as _scipy_mod
except ImportError:
    _scipy_mod = types.ModuleType('scipy')
    sys.modules['scipy'] = _scipy_mod

# ── Special function helpers ──────────────────────────────
def _norm_cdf_scalar(x):
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2.0)))

def _norm_pdf_scalar(x):
    return math.exp(-0.5 * x * x) / math.sqrt(2.0 * math.pi)

def _ppf_bisect(cdf_fn, q, lo=-40.0, hi=40.0):
    q = float(q)
    if q <= 0: return lo
    if q >= 1: return hi
    for _ in range(80):
        mid = 0.5 * (lo + hi)
        if cdf_fn(mid) < q:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)

def _gammainc(a, x):
    if x <= 0: return 0.0
    if x < a + 1:
        ap, s, d = a, 1.0 / a, 1.0 / a
        for _ in range(300):
            ap += 1; d *= x / ap; s += d
            if abs(d) < abs(s) * 1e-14: break
        return s * math.exp(-x + a * math.log(max(x, 1e-300)) - math.lgamma(a))
    else:
        b = x + 1 - a; c = 1e30; d = 1.0 / b; h = d
        for i in range(1, 300):
            an = -i * (i - a); b += 2
            d = an * d + b
            if abs(d) < 1e-30: d = 1e-30
            c = b + an / c
            if abs(c) < 1e-30: c = 1e-30
            d = 1.0 / d; dl = d * c; h *= dl
            if abs(dl - 1) < 1e-14: break
        return 1.0 - h * math.exp(-x + a * math.log(max(x, 1e-300)) - math.lgamma(a))

def _betainc(a, b, x):
    if x <= 0: return 0.0
    if x >= 1: return 1.0
    if x > (a + 1) / (a + b + 2):
        return 1.0 - _betainc(b, a, 1.0 - x)
    lbeta = math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)
    front = math.exp(a * math.log(max(x, 1e-300)) + b * math.log(max(1 - x, 1e-300)) - lbeta) / a
    c = 1.0; d = 1.0 / max(abs(1.0 - (a + b) * x / (a + 1)), 1e-30)
    if 1.0 - (a + b) * x / (a + 1) < 0: d = -d
    h = d
    for m in range(1, 300):
        num = m * (b - m) * x / ((a + 2 * m - 1) * (a + 2 * m))
        d = 1.0 + num * d
        if abs(d) < 1e-30: d = 1e-30
        c = 1.0 + num / c
        if abs(c) < 1e-30: c = 1e-30
        d = 1.0 / d; h *= d * c
        num = -(a + m) * (a + b + m) * x / ((a + 2 * m) * (a + 2 * m + 1))
        d = 1.0 + num * d
        if abs(d) < 1e-30: d = 1e-30
        c = 1.0 + num / c
        if abs(c) < 1e-30: c = 1e-30
        d = 1.0 / d; dl = d * c; h *= dl
        if abs(dl - 1.0) < 1e-14: break
    return front * h

def _select_moments(m, v, s, k, moments):
    r = []
    if 'm' in moments: r.append(m)
    if 'v' in moments: r.append(v)
    if 's' in moments: r.append(s if s is not None else 0.0)
    if 'k' in moments: r.append(k if k is not None else 0.0)
    return tuple(r) if len(r) > 1 else r[0]

# ── Generator factory (unfrozen -> frozen delegation) ─────
def _make_gen(FrozenCls, name):
    class Gen:
        def __init__(self):
            self.name = name
        def __call__(self, *a, **kw):
            return FrozenCls(*a, **kw)
        def rvs(self, *a, **kw):
            sz = kw.pop('size', None); kw.pop('random_state', None)
            return FrozenCls(*a, **kw).rvs(size=sz)
        def stats(self, *a, **kw):
            mo = kw.pop('moments', 'mvsk')
            return FrozenCls(*a, **kw).stats(mo)
        def pmf(self, k, *a, **kw):
            return FrozenCls(*a, **kw).pmf(k)
        def pdf(self, x, *a, **kw):
            return FrozenCls(*a, **kw).pdf(x)
        def cdf(self, x, *a, **kw):
            return FrozenCls(*a, **kw).cdf(x)
        def ppf(self, q, *a, **kw):
            return FrozenCls(*a, **kw).ppf(q)
        def logpdf(self, x, *a, **kw):
            return FrozenCls(*a, **kw).logpdf(x)
        def sf(self, x, *a, **kw):
            return 1.0 - self.cdf(x, *a, **kw)
        def isf(self, q, *a, **kw):
            return self.ppf(1.0 - q, *a, **kw)
        def fit(self, data, **kw):
            if hasattr(FrozenCls, '_fit'):
                return FrozenCls._fit(data, **kw)
            return ()
        def interval(self, confidence, *a, **kw):
            alpha = 1.0 - confidence
            return self.ppf(alpha / 2, *a, **kw), self.ppf(1 - alpha / 2, *a, **kw)
        def __repr__(self):
            return '<scipy.stats.' + name + '_gen object>'
    return Gen()

# ── Frozen distribution classes ───────────────────────────

class _NormF:
    _name = 'norm'
    def __init__(self, loc=0.0, scale=1.0):
        self.loc, self.scale = float(loc), float(scale)
    def _z(self, x):
        return (np.asarray(x, dtype=float) - self.loc) / self.scale
    def pdf(self, x):
        z = self._z(x)
        r = np.exp(-0.5 * z ** 2) / (self.scale * math.sqrt(2 * math.pi))
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        z = self._z(x)
        r = 0.5 * (1.0 + _verf(z / math.sqrt(2.0)))
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q_arr = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _norm_cdf_scalar((v - self.loc) / self.scale), float(qi),
                      self.loc - 40 * self.scale, self.loc + 40 * self.scale) for qi in q_arr.flat])
        r = r.reshape(q_arr.shape)
        return float(r) if np.ndim(q) == 0 else r
    def rvs(self, size=None):
        return np.random.normal(self.loc, self.scale, size=size)
    def stats(self, moments='mvsk'):
        return _select_moments(self.loc, self.scale ** 2, 0.0, 0.0, moments)
    @staticmethod
    def _fit(data, **kw):
        d = np.asarray(data, dtype=float)
        return float(np.mean(d)), float(np.std(d, ddof=0))

def _verf(x):
    x = np.asarray(x, dtype=float)
    return np.vectorize(math.erf)(x)

class _BernoulliF:
    _name = 'bernoulli'
    def __init__(self, p=0.5):
        self.p = float(p)
    def pmf(self, k):
        k = np.asarray(k); p = self.p
        return np.where(k == 1, p, np.where(k == 0, 1 - p, 0.0))
    def cdf(self, k):
        k = np.asarray(k, dtype=float); p = self.p
        return np.where(k < 0, 0.0, np.where(k < 1, 1 - p, 1.0))
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return np.where(q <= 1 - self.p, 0, 1)
    def rvs(self, size=None):
        return np.random.binomial(1, self.p, size=size)
    def stats(self, moments='mvsk'):
        p = self.p; q = 1 - p
        sk = (1 - 2*p) / max(math.sqrt(p*q), 1e-30) if p*q > 0 else 0.0
        ku = (1 - 6*p*q) / max(p*q, 1e-30) if p*q > 0 else 0.0
        return _select_moments(p, p*q, sk, ku, moments)

class _BinomF:
    _name = 'binom'
    def __init__(self, n, p):
        self.n, self.p = int(n), float(p)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); n = self.n; p = self.p
        r = np.array([math.comb(n, int(ki)) * p**int(ki) * (1-p)**(n-int(ki))
                      if 0 <= ki <= n else 0.0 for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int))
        r = np.array([sum(self.pmf(j) for j in range(int(ki)+1)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            c = 0.0
            for j in range(self.n + 1):
                c += float(self.pmf(j))
                if c >= qi: return j
            return self.n
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return int(r) if r.size == 1 else r
    def rvs(self, size=None):
        return np.random.binomial(self.n, self.p, size=size)
    def stats(self, moments='mvsk'):
        n, p = self.n, self.p; q = 1 - p
        return _select_moments(n*p, n*p*q, (1-2*p)/max(math.sqrt(n*p*q),1e-30), (1-6*p*q)/(max(n*p*q,1e-30)), moments)

class _PoissonF:
    _name = 'poisson'
    def __init__(self, mu):
        self.mu = float(mu)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); mu = self.mu
        r = np.array([math.exp(-mu) * mu**int(ki) / math.factorial(int(ki))
                      if ki >= 0 else 0.0 for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int))
        r = np.array([sum(float(self.pmf(j)) for j in range(max(0, int(ki))+1)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            c = 0.0
            for j in range(int(self.mu * 20) + 100):
                c += float(self.pmf(j))
                if c >= qi: return j
            return j
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return int(r) if r.size == 1 else r
    def rvs(self, size=None):
        return np.random.poisson(self.mu, size=size)
    def stats(self, moments='mvsk'):
        mu = self.mu
        return _select_moments(mu, mu, 1.0/max(math.sqrt(mu),1e-30), 1.0/max(mu,1e-30), moments)

class _GeomF:
    _name = 'geom'
    def __init__(self, p=0.5):
        self.p = float(p)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); p = self.p
        r = np.array([(1 - p)**(ki - 1) * p if ki >= 1 else 0.0 for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.asarray(k, dtype=float); p = self.p
        return np.where(k < 1, 0.0, 1.0 - (1.0 - p) ** np.floor(k))
    def ppf(self, q):
        q = np.asarray(q, dtype=float); p = self.p
        r = np.ceil(np.log(1.0 - q) / np.log(max(1.0 - p, 1e-30)))
        return int(r) if np.ndim(q) == 0 else r.astype(int)
    def rvs(self, size=None):
        return np.random.geometric(self.p, size=size)
    def stats(self, moments='mvsk'):
        p = self.p; q = 1 - p
        return _select_moments(1.0/p, q/p**2, (2-p)/max(math.sqrt(q),1e-30), 6+p**2/max(q,1e-30), moments)

class _NbinomF:
    _name = 'nbinom'
    def __init__(self, n, p):
        self.n = float(n); self.p = float(p)
    def pmf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int)); n = self.n; p = self.p
        def _nb(ki):
            if ki < 0: return 0.0
            return math.exp(math.lgamma(ki + n) - math.lgamma(ki + 1) - math.lgamma(n)
                            + n * math.log(max(p, 1e-300)) + ki * math.log(max(1 - p, 1e-300)))
        r = np.array([_nb(int(ki)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def cdf(self, k):
        k = np.atleast_1d(np.asarray(k, dtype=int))
        r = np.array([sum(float(self.pmf(j)) for j in range(max(0, int(ki)) + 1)) for ki in k.flat]).reshape(k.shape)
        return float(r) if r.size == 1 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            c = 0.0
            for j in range(int(self.n / max(self.p, 1e-30) * 10) + 200):
                c += float(self.pmf(j))
                if c >= qi: return j
            return j
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return int(r) if r.size == 1 else r
    def rvs(self, size=None):
        return np.random.negative_binomial(self.n, self.p, size=size)
    def stats(self, moments='mvsk'):
        n, p = self.n, self.p; q = 1 - p
        m = n * q / max(p, 1e-30); v = n * q / max(p**2, 1e-30)
        s = (1 + q) / max(math.sqrt(n * q), 1e-30)
        kk = 6.0 / n + p**2 / max(n * q, 1e-30)
        return _select_moments(m, v, s, kk, moments)

class _UniformF:
    _name = 'uniform'
    def __init__(self, loc=0.0, scale=1.0):
        self.loc, self.scale = float(loc), float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); a, s = self.loc, self.scale
        return np.where((x >= a) & (x <= a + s), 1.0 / s, 0.0)
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); a, s = self.loc, self.scale
        return np.clip((x - a) / s, 0.0, 1.0)
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return self.loc + q * self.scale
    def rvs(self, size=None):
        return np.random.uniform(self.loc, self.loc + self.scale, size=size)
    def stats(self, moments='mvsk'):
        a, s = self.loc, self.scale
        return _select_moments(a + s/2, s**2/12, 0.0, -6.0/5.0, moments)

class _ExponF:
    _name = 'expon'
    def __init__(self, loc=0.0, scale=1.0):
        self.loc, self.scale = float(loc), float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); lo, sc = self.loc, self.scale
        z = (x - lo) / sc
        return np.where(z >= 0, np.exp(-z) / sc, 0.0)
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); lo, sc = self.loc, self.scale
        z = (x - lo) / sc
        return np.where(z >= 0, 1.0 - np.exp(-z), 0.0)
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return self.loc - self.scale * np.log(1.0 - q)
    def rvs(self, size=None):
        return np.random.exponential(self.scale, size=size) + self.loc
    def stats(self, moments='mvsk'):
        return _select_moments(self.loc + self.scale, self.scale**2, 2.0, 6.0, moments)

class _BetaF:
    _name = 'beta'
    def __init__(self, a, b, loc=0.0, scale=1.0):
        self.a, self.b = float(a), float(b)
        self.loc, self.scale = float(loc), float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float)
        z = (x - self.loc) / self.scale; a, b = self.a, self.b
        lB = math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b)
        def _p(zi):
            if zi <= 0 or zi >= 1: return 0.0
            return math.exp((a-1)*math.log(zi) + (b-1)*math.log(1-zi) - lB) / self.scale
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float)
        z = np.clip((x - self.loc) / self.scale, 0, 1)
        r = np.vectorize(lambda zi: _betainc(self.a, self.b, zi))(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _betainc(self.a, self.b, (v-self.loc)/self.scale),
                      float(qi), self.loc, self.loc+self.scale) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.beta(self.a, self.b, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        a, b = self.a, self.b; ab = a + b
        m = a / ab; v = a * b / (ab**2 * (ab + 1))
        s = 2*(b-a)*math.sqrt(ab+1) / ((ab+2)*math.sqrt(max(a*b,1e-30)))
        ku = 6*(a**3 - a**2*(2*b-1) + b**2*(b+1) - 2*a*b*(b+2)) / max(a*b*(ab+2)*(ab+3),1e-30)
        return _select_moments(m*self.scale+self.loc, v*self.scale**2, s, ku, moments)

class _GammaF:
    _name = 'gamma'
    def __init__(self, a, loc=0.0, scale=1.0):
        self.a = float(a); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); a, sc = self.a, self.scale
        z = (x - self.loc) / sc
        def _p(zi):
            if zi <= 0: return 0.0
            return math.exp((a-1)*math.log(max(zi,1e-300)) - zi - math.lgamma(a)) / sc
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float)
        z = (x - self.loc) / self.scale
        r = np.vectorize(lambda zi: _gammainc(self.a, max(zi, 0)))(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _gammainc(self.a, max((v-self.loc)/self.scale, 0)),
                      float(qi), self.loc, self.loc + self.a * self.scale * 40) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.gamma(self.a, self.scale, size=size) + self.loc
    def stats(self, moments='mvsk'):
        a, sc = self.a, self.scale
        return _select_moments(a*sc+self.loc, a*sc**2, 2.0/math.sqrt(max(a,1e-30)), 6.0/max(a,1e-30), moments)

class _Chi2F:
    _name = 'chi2'
    def __init__(self, df, loc=0.0, scale=1.0):
        self.df = float(df); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); k = self.df
        z = (x - self.loc) / self.scale
        def _p(zi):
            if zi <= 0: return 0.0
            hk = k / 2.0
            return math.exp((hk-1)*math.log(max(zi,1e-300)) - zi/2 - hk*math.log(2) - math.lgamma(hk)) / self.scale
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); k = self.df
        z = (x - self.loc) / self.scale
        r = np.vectorize(lambda zi: _gammainc(k / 2.0, max(zi, 0) / 2.0))(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: _gammainc(self.df/2, max((v-self.loc)/self.scale, 0)/2),
                      float(qi), self.loc, self.loc + self.df * self.scale * 20) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.chisquare(self.df, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        k = self.df
        return _select_moments(k, 2*k, math.sqrt(8.0/max(k,1e-30)), 12.0/max(k,1e-30), moments)

class _TF:
    _name = 't'
    def __init__(self, df, loc=0.0, scale=1.0):
        self.df = float(df); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); v = self.df
        z = (x - self.loc) / self.scale
        c = math.exp(math.lgamma((v+1)/2) - math.lgamma(v/2)) / math.sqrt(v * math.pi)
        r = c * (1 + z**2 / v)**(-(v+1)/2) / self.scale
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); v = self.df
        z = (x - self.loc) / self.scale
        def _c(zi):
            t2 = zi * zi
            ib = _betainc(v / 2, 0.5, v / (v + t2))
            return 0.5 * ib if zi < 0 else 1.0 - 0.5 * ib
        r = np.vectorize(_c)(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: self.cdf(v), float(qi),
                      self.loc - 200*self.scale, self.loc + 200*self.scale) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.standard_t(self.df, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        v = self.df
        m = self.loc
        va = v / (v - 2) * self.scale**2 if v > 2 else float('inf')
        s = 0.0
        ku = 6.0 / (v - 4) if v > 4 else float('inf')
        return _select_moments(m, va, s, ku, moments)

class _FF:
    _name = 'f'
    def __init__(self, dfn, dfd, loc=0.0, scale=1.0):
        self.d1 = float(dfn); self.d2 = float(dfd)
        self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); d1, d2 = self.d1, self.d2
        z = (x - self.loc) / self.scale
        def _p(zi):
            if zi <= 0: return 0.0
            # Use log-space to avoid overflow for large d1,d2
            log_num = (d1/2)*math.log(d1) + (d2/2)*math.log(d2) + (d1/2 - 1)*math.log(zi) \
                      - ((d1+d2)/2)*math.log(d1*zi + d2)
            log_beta = math.lgamma(d1/2) + math.lgamma(d2/2) - math.lgamma((d1+d2)/2)
            return math.exp(log_num - log_beta) / self.scale
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); d1, d2 = self.d1, self.d2
        z = (x - self.loc) / self.scale
        def _c(zi):
            if zi <= 0: return 0.0
            return _betainc(d1/2, d2/2, d1*zi / (d1*zi + d2))
        r = np.vectorize(_c)(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        r = np.array([_ppf_bisect(lambda v: self.cdf(v), float(qi),
                      self.loc, self.loc + self.d2*self.scale*20) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.f(self.d1, self.d2, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        d1, d2 = self.d1, self.d2
        m = d2 / (d2 - 2) if d2 > 2 else float('inf')
        v = 2*d2**2*(d1+d2-2) / (d1*(d2-2)**2*(d2-4)) if d2 > 4 else float('inf')
        return _select_moments(m, v, 0.0, 0.0, moments)

class _LognormF:
    _name = 'lognorm'
    def __init__(self, s, loc=0.0, scale=1.0):
        self.s = float(s); self.loc = float(loc); self.scale = float(scale)
    def pdf(self, x):
        x = np.asarray(x, dtype=float); s, sc = self.s, self.scale
        z = (x - self.loc) / sc
        def _p(zi):
            if zi <= 0: return 0.0
            return math.exp(-0.5*(math.log(zi)/s)**2) / (s * zi * math.sqrt(2*math.pi)) / sc
        r = np.vectorize(_p)(z)
        return float(r) if np.ndim(r) == 0 else r
    def logpdf(self, x):
        return np.log(np.maximum(self.pdf(x), 1e-300))
    def cdf(self, x):
        x = np.asarray(x, dtype=float); s = self.s
        z = (x - self.loc) / self.scale
        def _c(zi):
            if zi <= 0: return 0.0
            return _norm_cdf_scalar(math.log(zi) / s)
        r = np.vectorize(_c)(z)
        return float(r) if np.ndim(r) == 0 else r
    def ppf(self, q):
        q = np.atleast_1d(np.asarray(q, dtype=float))
        def _sc(qi):
            nppf = _ppf_bisect(_norm_cdf_scalar, float(qi))
            return math.exp(self.s * nppf) * self.scale + self.loc
        r = np.array([_sc(float(qi)) for qi in q.flat]).reshape(q.shape)
        return float(r) if q.size == 1 else r
    def rvs(self, size=None):
        return np.random.lognormal(0, self.s, size=size) * self.scale + self.loc
    def stats(self, moments='mvsk'):
        s = self.s; s2 = s * s
        m = math.exp(s2 / 2) * self.scale + self.loc
        v = (math.exp(s2) - 1) * math.exp(s2) * self.scale**2
        return _select_moments(m, v, 0.0, 0.0, moments)
    @staticmethod
    def _fit(data, **kw):
        d = np.asarray(data, dtype=float)
        d = d[d > 0]
        lndata = np.log(d)
        s = float(np.std(lndata, ddof=1))
        scale = float(np.exp(np.mean(lndata)))
        return s, 0.0, scale

class _RandintF:
    _name = 'randint'
    def __init__(self, low, high):
        self.low, self.high = int(low), int(high)
    def pmf(self, k):
        k = np.asarray(k, dtype=int); lo, hi = self.low, self.high
        n = hi - lo
        return np.where((k >= lo) & (k < hi), 1.0 / n, 0.0)
    def cdf(self, k):
        k = np.asarray(k, dtype=float); lo, hi = self.low, self.high
        return np.clip((np.floor(k) - lo + 1) / (hi - lo), 0.0, 1.0)
    def ppf(self, q):
        q = np.asarray(q, dtype=float)
        return np.floor(self.low + q * (self.high - self.low)).astype(int)
    def rvs(self, size=None):
        return np.random.randint(self.low, self.high, size=size)
    def stats(self, moments='mvsk'):
        lo, hi = self.low, self.high; n = hi - lo
        m = (lo + hi - 1) / 2.0; v = (n**2 - 1) / 12.0
        return _select_moments(m, v, 0.0, -6*(n**2+1)/(5*(n**2-1)) if n > 1 else 0, moments)

# ── Register scipy.stats (ALWAYS override native) ────────
_stats = types.ModuleType('scipy.stats')
_stats.norm = _make_gen(_NormF, 'norm')
_stats.bernoulli = _make_gen(_BernoulliF, 'bernoulli')
_stats.binom = _make_gen(_BinomF, 'binom')
_stats.poisson = _make_gen(_PoissonF, 'poisson')
_stats.geom = _make_gen(_GeomF, 'geom')
_stats.nbinom = _make_gen(_NbinomF, 'nbinom')
_stats.uniform = _make_gen(_UniformF, 'uniform')
_stats.expon = _make_gen(_ExponF, 'expon')
_stats.beta = _make_gen(_BetaF, 'beta')
_stats.gamma = _make_gen(_GammaF, 'gamma')
_stats.chi2 = _make_gen(_Chi2F, 'chi2')
_stats.t = _make_gen(_TF, 't')
_stats.f = _make_gen(_FF, 'f')
_stats.lognorm = _make_gen(_LognormF, 'lognorm')
_stats.randint = _make_gen(_RandintF, 'randint')

# add base classes so imports like 'from scipy.stats import rv_continuous' succeed
class _RVContinuous:
    def __init__(self, *args, **kw):
        pass
class _RVDiscrete:
    def __init__(self, *args, **kw):
        pass
_stats.rv_continuous = _RVContinuous
_stats.rv_discrete = _RVDiscrete

# ── scipy.stats standalone functions ──────────────────────
def _ttest_ind(a, b, equal_var=True, **kw):
    a = np.asarray(a, dtype=float); b = np.asarray(b, dtype=float)
    n1, n2 = len(a), len(b)
    m1, m2 = np.mean(a), np.mean(b)
    v1, v2 = np.var(a, ddof=1), np.var(b, ddof=1)
    if equal_var:
        sp2 = ((n1 - 1) * v1 + (n2 - 1) * v2) / (n1 + n2 - 2)
        t_stat = (m1 - m2) / math.sqrt(sp2 * (1.0/n1 + 1.0/n2))
        df = n1 + n2 - 2
    else:
        se = math.sqrt(v1/n1 + v2/n2)
        t_stat = (m1 - m2) / se if se > 0 else 0.0
        num = (v1/n1 + v2/n2)**2
        den = (v1/n1)**2/(n1-1) + (v2/n2)**2/(n2-1) if (n1>1 and n2>1) else 1.0
        df = num / den if den > 0 else 1.0
    # two-sided p-value via t distribution cdf
    t_dist = _TF(df)
    p = 2.0 * (1.0 - t_dist.cdf(abs(t_stat)))
    class _TtestResult:
        def __init__(self, stat, pval):
            self.statistic = stat; self.pvalue = pval
        def __repr__(self):
            return f'Ttest_indResult(statistic={self.statistic}, pvalue={self.pvalue})'
        def __iter__(self):
            return iter((self.statistic, self.pvalue))
    return _TtestResult(t_stat, p)

def _binom_test_fn(x, n=None, p=0.5, alternative='two-sided'):
    if n is None: n = x
    from math import comb as _comb
    pmf_obs = _comb(n, x) * p**x * (1-p)**(n-x)
    if alternative == 'two-sided':
        pval = 0.0
        for k in range(n + 1):
            pk = _comb(n, k) * p**k * (1-p)**(n-k)
            if pk <= pmf_obs + 1e-15: pval += pk
        return min(pval, 1.0)
    elif alternative == 'less':
        return sum(_comb(n, k) * p**k * (1-p)**(n-k) for k in range(x + 1))
    else:
        return sum(_comb(n, k) * p**k * (1-p)**(n-k) for k in range(x, n + 1))

_stats.ttest_ind = _ttest_ind
_stats.binom_test = _binom_test_fn

_scipy_mod.stats = _stats
sys.modules['scipy.stats'] = _stats
print('✅ SciPy.stats: 14 distributions + ttest_ind + binom_test installed.')

# ── scipy.linalg ─────────────────────────────────────────
try:
    from scipy import linalg as _native_linalg
    _native_linalg.inv
    _native_linalg.solve
except Exception:
    _linalg = types.ModuleType('scipy.linalg')
    def _pascal(n):
        M = np.zeros((n, n), dtype=int)
        for i in range(n):
            for j in range(n):
                M[i, j] = math.comb(j, i) if j >= i else math.comb(i, j)
        return M
    def _ldl(A):
        A = np.array(A, dtype=float); n = A.shape[0]
        try:
            L = np.linalg.cholesky(A); return L, np.eye(n), None
        except Exception:
            evals, evecs = np.linalg.eigh(A)
            return evecs, np.diag(evals), None
    _linalg.pascal = _pascal
    _linalg.ldl = _ldl
    _linalg.eig = lambda A: np.linalg.eig(np.asarray(A, dtype=float))
    _linalg.inv = lambda A: np.linalg.inv(np.asarray(A, dtype=float))
    _linalg.solve = lambda a, b: np.linalg.solve(np.asarray(a, dtype=float), np.asarray(b, dtype=float))
    _linalg.det = lambda A: float(np.linalg.det(np.asarray(A, dtype=float)))
    _linalg.norm = lambda x, **kw: np.linalg.norm(np.asarray(x, dtype=float))
    _scipy_mod.linalg = _linalg
    sys.modules['scipy.linalg'] = _linalg
    print('✅ SciPy.linalg: stub installed (numpy backend).')

# ── scipy.optimize ────────────────────────────────────────
try:
    from scipy import optimize as _native_opt
    _native_opt.minimize
    _native_opt.brentq
except Exception:
    _opt = types.ModuleType('scipy.optimize')
    class _OptResult:
        def __init__(self, **kw):
            self.__dict__.update(kw)
        def __repr__(self):
            return str(self.__dict__)

    def _minimize(fun, x0, args=(), method=None, bounds=None, constraints=(), options=None, jac=None, hess=None, **kw):
        x = np.array(x0, dtype=float).copy(); n = len(x)
        maxiter = (options or {}).get('maxiter', 2000 * n)
        tol = (options or {}).get('ftol', 1e-10)
        # Convert _Bounds object to list of (lo, hi) tuples
        _bnds = None
        if bounds is not None:
            if hasattr(bounds, 'lb'):
                _bnds = list(zip(bounds.lb, bounds.ub))
            else:
                _bnds = list(bounds)
        def _pen(xv):
            v = float(fun(xv, *args) if args else fun(xv))
            if _bnds:
                for i, (lo, hi) in enumerate(_bnds):
                    if lo is not None and xv[i] < lo: v += 1e8 * (lo - xv[i])**2
                    if hi is not None and xv[i] > hi: v += 1e8 * (xv[i] - hi)**2
            c_list = [constraints] if isinstance(constraints, dict) else list(constraints)
            for c in c_list:
                # Handle both dict constraints and LinearConstraint objects
                if hasattr(c, 'A'):
                    Ax = np.dot(np.atleast_2d(c.A), xv)
                    lb = np.atleast_1d(c.lb); ub = np.atleast_1d(c.ub)
                    for j in range(len(Ax)):
                        if Ax[j] < lb[j]: v += 1e8 * (lb[j] - Ax[j])**2
                        if Ax[j] > ub[j]: v += 1e8 * (Ax[j] - ub[j])**2
                else:
                    cv = float(c['fun'](xv))
                    if c.get('type') == 'eq': v += 1e8 * cv**2
                    elif c.get('type') == 'ineq' and cv < 0: v += 1e8 * cv**2
            return v
        simplex = [x.copy()]
        for i in range(n):
            xi = x.copy(); xi[i] += 0.05 * (abs(x[i]) + 0.01); simplex.append(xi)
        fvals = [_pen(s) for s in simplex]
        nit = 0
        for nit in range(maxiter):
            idx = np.argsort(fvals); simplex = [simplex[i] for i in idx]; fvals = [fvals[i] for i in idx]
            if abs(fvals[-1] - fvals[0]) < tol: break
            c = np.mean(simplex[:-1], axis=0)
            xr = c + (c - simplex[-1]); fr = _pen(xr)
            if fvals[0] <= fr < fvals[-2]:
                simplex[-1] = xr; fvals[-1] = fr
            elif fr < fvals[0]:
                xe = c + 2*(xr - c); fe = _pen(xe)
                if fe < fr: simplex[-1] = xe; fvals[-1] = fe
                else: simplex[-1] = xr; fvals[-1] = fr
            else:
                xc = c + 0.5*(simplex[-1] - c); fc = _pen(xc)
                if fc < fvals[-1]: simplex[-1] = xc; fvals[-1] = fc
                else:
                    for i in range(1, len(simplex)):
                        simplex[i] = simplex[0] + 0.5*(simplex[i] - simplex[0]); fvals[i] = _pen(simplex[i])
        best = simplex[np.argmin(fvals)]
        return _OptResult(x=best, fun=float(fun(best, *args) if args else fun(best)),
                          success=True, message='Optimization terminated.', nit=nit+1, nfev=(nit+1)*(n+1))

    def _brentq(f, a, b, args=(), xtol=1e-12, maxiter=100, **kw):
        fa = f(a, *args); fb = f(b, *args)
        for _ in range(maxiter):
            c = (a + b) / 2.0; fc = f(c, *args)
            if abs(fc) < xtol or (b - a) / 2 < xtol: return c
            if fa * fc < 0: b = c; fb = fc
            else: a = c; fa = fc
        return (a + b) / 2.0

    def _newton(func, x0, fprime=None, args=(), tol=1e-12, maxiter=50, **kw):
        x = float(x0)
        for _ in range(maxiter):
            fx = func(x, *args)
            if abs(fx) < tol: return x
            if fprime:
                dfx = fprime(x, *args)
            else:
                h = max(abs(x) * 1e-8, 1e-10)
                dfx = (func(x + h, *args) - func(x - h, *args)) / (2 * h)
            if abs(dfx) < 1e-30: break
            x -= fx / dfx
        return x

    class _LinearConstraint:
        def __init__(self, A, lb, ub):
            self.A, self.lb, self.ub = A, lb, ub
    class _Bounds:
        def __init__(self, lb, ub):
            self.lb, self.ub = lb, ub

    _opt.minimize = _minimize
    _opt.brentq = _brentq
    _opt.newton = _newton
    _opt.LinearConstraint = _LinearConstraint
    _opt.Bounds = _Bounds
    _opt.OptimizeResult = _OptResult
    _scipy_mod.optimize = _opt
    sys.modules['scipy.optimize'] = _opt
    print('✅ SciPy.optimize: stub installed (Nelder-Mead + Brent + Newton).')

# ── scipy.interpolate ────────────────────────────────────
try:
    from scipy import interpolate as _native_interp
    _native_interp.interp1d
except Exception:
    _interp = types.ModuleType('scipy.interpolate')
    class _Interp1d:
        def __init__(self, x, y, kind='linear', fill_value=None, bounds_error=True, **kw):
            order = np.argsort(x)
            self._x = np.asarray(x, dtype=float)[order]
            self._y = np.asarray(y, dtype=float)[order]
        def __call__(self, x_new):
            x_new = np.atleast_1d(np.asarray(x_new, dtype=float))
            r = np.interp(x_new, self._x, self._y)
            return float(r) if x_new.size == 1 else r
    class _Interp2d:
        def __init__(self, x, y, z, kind='linear', **kw):
            # very lightweight bilinear-like stub: just nearest neighbor
            self._x = np.asarray(x, dtype=float)
            self._y = np.asarray(y, dtype=float)
            self._z = np.asarray(z, dtype=float)
            # ensure z is 2D array with shape (len(y), len(x))
            if self._z.ndim == 1:
                self._z = self._z.reshape(len(y), -1)
        def __call__(self, xn, yn):
            xn = np.atleast_1d(np.asarray(xn, dtype=float))
            yn = np.atleast_1d(np.asarray(yn, dtype=float))
            # create output grid shape (len(yn), len(xn))
            Xq, Yq = np.meshgrid(xn, yn)
            # nearest-neighbor index along each axis
            xi = np.searchsorted(self._x, Xq, side='right') - 1
            yi = np.searchsorted(self._y, Yq, side='right') - 1
            xi = np.clip(xi, 0, len(self._x) - 1)
            yi = np.clip(yi, 0, len(self._y) - 1)
            return self._z[yi, xi]
    _interp.interp1d = _Interp1d
    _interp.interp2d = _Interp2d
    _scipy_mod.interpolate = _interp
    sys.modules['scipy.interpolate'] = _interp
    print('✅ SciPy.interpolate: stub installed (numpy interp backend).')

# ── scipy.integrate ──────────────────────────────────────
try:
    from scipy import integrate as _native_integrate
    _native_integrate.quad
except Exception:
    _integrate = types.ModuleType('scipy.integrate')
    def _quad(func, a, b, args=(), limit=50, **kw):
        # Adaptive Simpson's rule
        n = min(max(limit * 4, 200), 2000)
        if a == float('-inf') and b == float('inf'):
            # substitution t = x/(1-x^2)
            def _g(t):
                if abs(t) >= 1.0: return 0.0
                x = t / (1 - t*t); dx = (1 + t*t) / (1 - t*t)**2
                return func(x, *args) * dx
            return _quad(_g, -0.999, 0.999, args=(), limit=limit)
        elif a == float('-inf'):
            def _g(t):
                if t <= 0: return 0.0
                x = b - (1 - t) / t; dx = 1.0 / (t*t)
                return func(x, *args) * dx
            return _quad(_g, 1e-10, 1.0, args=(), limit=limit)
        elif b == float('inf'):
            def _g(t):
                if t <= 0: return 0.0
                x = a + (1 - t) / t; dx = 1.0 / (t*t)
                return func(x, *args) * dx
            return _quad(_g, 1e-10, 1.0, args=(), limit=limit)
        h = (b - a) / n
        xs = [a + i * h for i in range(n + 1)]
        ys = [func(xi, *args) for xi in xs]
        # Simpson's composite rule
        s = ys[0] + ys[-1]
        for i in range(1, n, 2): s += 4 * ys[i]
        for i in range(2, n, 2): s += 2 * ys[i]
        result = s * h / 3.0
        err = abs(result) * 1e-8
        return (result, err)
    _integrate.quad = _quad
    _scipy_mod.integrate = _integrate
    sys.modules['scipy.integrate'] = _integrate
    print('✅ SciPy.integrate: stub installed (Simpson rule).')

# ── scipy.special (minimal stub) ─────────────────────────
try:
    from scipy import special as _native_special
    _native_special.comb
except Exception:
    _special = types.ModuleType('scipy.special')
    _special.comb = lambda n, k, exact=False: float(math.comb(int(n), int(k)))
    _special.factorial = lambda n, exact=False: float(math.factorial(int(n)))
    _special.gamma = lambda x: math.gamma(float(x))
    _special.gammaln = lambda x: math.lgamma(float(x))
    _special.beta = lambda a, b: math.exp(math.lgamma(a) + math.lgamma(b) - math.lgamma(a + b))
    _special.erf = lambda x: math.erf(float(x))
    _special.erfc = lambda x: math.erfc(float(x))
    _special.ndtr = lambda x: 0.5 * (1.0 + math.erf(float(x) / math.sqrt(2.0)))
    _special.ndtri = lambda p: _ppf_bisect(_norm_cdf_scalar, float(p))
    _scipy_mod.special = _special
    sys.modules['scipy.special'] = _special
    print('✅ SciPy.special: stub installed (gamma, erf, comb, factorial).')

# ── scipy.spatial (minimal stub) ─────────────────────────
try:
    from scipy import spatial as _native_spatial
    _native_spatial.distance
except Exception:
    _spatial = types.ModuleType('scipy.spatial')
    _spatial_distance = types.ModuleType('scipy.spatial.distance')
    _spatial_distance.euclidean = lambda u, v: float(np.linalg.norm(np.asarray(u) - np.asarray(v)))
    _spatial_distance.cdist = lambda XA, XB, metric='euclidean': np.sqrt(np.sum((np.asarray(XA)[:, None, :] - np.asarray(XB)[None, :, :])**2, axis=-1))
    _spatial.distance = _spatial_distance
    sys.modules['scipy.spatial'] = _spatial
    sys.modules['scipy.spatial.distance'] = _spatial_distance
    _scipy_mod.spatial = _spatial
    print('✅ SciPy.spatial: stub installed (distance metrics).')

print('✅ SciPy comprehensive stub fully loaded.')
`;

export const BASE_ENV_SETUP = `
import warnings
import logging
# 忽略 DeprecationWarning 和 FutureWarning，保持 Console 乾淨
warnings.simplefilter("ignore", DeprecationWarning)
warnings.simplefilter("ignore", FutureWarning)
warnings.simplefilter("ignore", SyntaxWarning)
# 額外針對 pandas 的 pyarrow 警告進行過濾
warnings.filterwarnings("ignore", message=".*pyarrow.*")
warnings.filterwarnings("ignore", message=".*Matplotlib is currently using agg.*")

# Reduce noisy Matplotlib font fallback logs in browser runtime
logging.getLogger('matplotlib').setLevel(logging.ERROR)
logging.getLogger('matplotlib.font_manager').setLevel(logging.ERROR)

try:
    import matplotlib.pyplot as plt
except ImportError:
    pass

import numpy as np

# Ensure Matplotlib uses a non-GUI backend and set a reliable default font
try:
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib as mpl
    mpl.rcParams['font.family'] = ['DejaVu Sans', 'sans-serif']
    mpl.rcParams['mathtext.default'] = 'regular'
    mpl.rcParams['text.usetex'] = False
except Exception:
    pass

try:
    import pandas as pd
except ImportError:
    pass

import builtins
import js

def custom_input(prompt=""):
    result = js.window.prompt(prompt)
    return result if result is not None else ""

builtins.input = custom_input

import numpy as np
# 恢復舊版本 NumPy 的別名，以相容書中範例程式碼
if not hasattr(np, 'int'):
    np.int = int
if not hasattr(np, 'float'):
    np.float = float
if not hasattr(np, 'bool'):
    np.bool = bool

# NumPy Financial 相容性 (np.irr, np.npv 等在新版本 NumPy 移除)
try:
    import numpy_financial as npf
    fin_functions = ['irr', 'npv', 'pmt', 'pv', 'rate', 'nper', 'fv', 'ppmt', 'ipmt']
    for func in fin_functions:
        if not hasattr(np, func) and hasattr(npf, func):
            setattr(np, func, getattr(npf, func))
    print("✅ NumPy Financial：財務函數補丁已套用。")
except ImportError:
    pass

# distutils 相容性 (Python 3.12 移除 distutils)
import sys
from types import ModuleType as _MT
if 'distutils' not in sys.modules:
    _d = _MT('distutils')
    sys.modules['distutils'] = _d
if 'distutils.version' not in sys.modules:
    sys.modules['distutils.version'] = _MT('distutils.version')
if 'distutils.util' not in sys.modules:
    sys.modules['distutils.util'] = _MT('distutils.util')
if 'distutils.spawn' not in sys.modules:
    sys.modules['distutils.spawn'] = _MT('distutils.spawn')

import distutils.version as _dv
import re as _re
class _LooseVersion:
    component_re = _re.compile(r'(\\d+|[a-z]+|\\.)', _re.VERBOSE)
    def __init__(self, vstring=None):
        if vstring:
            self.vstring = str(vstring)
            self.version = [int(x) if x.isdigit() else x for x in self.component_re.findall(self.vstring) if x != '.']
        else:
            self.vstring = '0'
            self.version = [0]
    def __str__(self): return self.vstring
    def __repr__(self): return 'LooseVersion(' + repr(self.vstring) + ')'
    def _cmp(self, other):
        if isinstance(other, str): other = _LooseVersion(other)
        for a, b in zip(self.version, other.version):
            if a == b: continue
            try: return (int(a) > int(b)) - (int(a) < int(b))
            except (ValueError, TypeError): return (str(a) > str(b)) - (str(a) < str(b))
        return (len(self.version) > len(other.version)) - (len(self.version) < len(other.version))
    def __eq__(self, o): return self._cmp(o) == 0
    def __lt__(self, o): return self._cmp(o) < 0
    def __le__(self, o): return self._cmp(o) <= 0
    def __gt__(self, o): return self._cmp(o) > 0
    def __ge__(self, o): return self._cmp(o) >= 0
_dv.LooseVersion = _LooseVersion
_dv.StrictVersion = _LooseVersion
print('✅ distutils.version.LooseVersion: 相容層已安裝。')

# 網路支援
try:
    import pyodide_http
    pyodide_http.patch_all()
except ImportError:
    pass

# SciPy 相容性 (binom_test 在新版本移除)
try:
    import scipy.stats
    if not hasattr(scipy.stats, 'binom_test') and hasattr(scipy.stats, 'binomtest'):
        def binom_test_shim(k, n=None, p=0.5, alternative='two-sided'):
            return scipy.stats.binomtest(k, n, p, alternative).pvalue
        scipy.stats.binom_test = binom_test_shim
        print("✅ SciPy 相容性：binom_test 修正補丁已套用。")
except ImportError:
    pass
`;
