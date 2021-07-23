export var screenX = function (e) {
  return e.screenX;
};

export var screenY = function (e) {
  return e.screenY;
};

export var clientX = function (e) {
  return e.clientX;
};

export var clientY = function (e) {
  return e.clientY;
};

export var pageX = function (e) {
  return e.pageX;
};

export var pageY = function (e) {
  return e.pageY;
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

export var button = function (e) {
  return e.button;
};

export var _relatedTarget = function (e) {
  return e.relatedTarget;
};

export var buttons = function (e) {
  return e.buttons;
};

export var getModifierState = function (s) {
  return function (e) {
    return function () {
      return e.getModifierState(s);
    };
  };
};
