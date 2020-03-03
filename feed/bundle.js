
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Header = function Header() {
  return window.React.createElement(window.MaterialUI.AppBar, {
    position: "static"
  }, window.React.createElement(window.MaterialUI.Toolbar, null, window.React.createElement(window.MaterialUI.Container, {
    fixed: true
  }, window.React.createElement(window.MaterialUI.Typography, {
    variant: "h6"
  }, "Social Feed in React"))));
};

var App = function App() {
  var _useState = window.React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      feed = _useState2[0],
      setFeed = _useState2[1];

  var _useState3 = window.React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      components = _useState4[0],
      setComponents = _useState4[1];

  window.React.useEffect(function () {
    fetch('/feed.json').then(function (resp) {
      return resp.json();
    }).then(function (data) {
      return setFeed(data);
    });
    var comps = {};
    import('http://localhost:2002/bundle.js').then(function (mod) {
      comps.Image = mod["default"];
      setComponents(_objectSpread2({}, comps));
    });
    import('http://localhost:2001/bundle.js').then(function (mod) {
      comps.Post = mod["default"];
      setComponents(_objectSpread2({}, comps));
    });
  }, []);
  return window.React.createElement("div", null, window.React.createElement(Header, null), window.React.createElement(window.MaterialUI.Container, {
    fixed: true
  }, feed.map(function (item) {
    var Comp = components[item.component];
    return Comp ? window.React.createElement(Comp, item) : null;
  })));
};

window.ReactDOM.render(window.React.createElement(App, null), document.getElementById('app'));
