export var key = function (e) {
  return e.key;
};

export var code = function (e) {
  return e.code;
};

export var locationIndex = function (e) {
  return e.location;
};

export var ctrlKey = function (e) {
  return e.ctrlKey;
};

export var shiftKey = function (e) {
  return e.shiftKey;
};

export var altKey = function (e) {
  return e.altKey;
};

export var metaKey = function (e) {
  return e.metaKey;
};

export var repeat = function (e) {
  return e.repeat;
};

export var isComposing = function (e) {
  return e.isComposing;
};

export var getModifierState = function (s) {
  return function (e) {
    return function () {
      return e.getModifierState(s);
    };
  };
};
