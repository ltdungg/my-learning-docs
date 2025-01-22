(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break") break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn2) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn2);
      }
      return fn2.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn2) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn2);
          }
          return fn2.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn3) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn3.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn2.delegationSelector = isDelegated ? handler : null;
    fn2.callable = callable;
    fn2.oneOff = oneOff;
    fn2.uidEvent = uid;
    handlers[uid] = fn2;
    element.addEventListener(typeEvent, fn2, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn2) {
      return;
    }
    element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
    delete events[typeEvent][fn2.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), typeof jsonConfig === "object" ? jsonConfig : {}), isElement2(element) ? Manipulator.getDataAttributes(element) : {}), typeof config === "object" ? config : {});
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.3";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = __spreadValues(__spreadValues({}, this._config.content), content);
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory(__spreadProps(__spreadValues({}, this._config), {
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        }));
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return __spreadValues(__spreadValues({}, defaultBsPopperConfig), execute(this._config.popperConfig, [defaultBsPopperConfig]));
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = __spreadValues(__spreadValues({}, dataAttributes), typeof config === "object" && config ? config : {});
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = __spreadProps(__spreadValues({}, Tooltip.Default), {
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  });
  var DefaultType$2 = __spreadProps(__spreadValues({}, Tooltip.DefaultType), {
    content: "(null|string|element|function)"
  });
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);

  // <stdin>
  (() => {
    "use strict";
    const searchToggleMobile = document.getElementById("searchToggleMobile");
    const searchToggleDesktop = document.getElementById("searchToggleDesktop");
    const searchModal = document.getElementById("searchModal");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("query");
    const searchResults = document.getElementById("searchResults");
    const flexSearchModal = new Modal(searchModal, {
      focus: true
    });
    searchToggleMobile.addEventListener("click", showModalOnClick);
    searchToggleDesktop.addEventListener("click", showModalOnClick);
    function showModalOnClick() {
      flexSearchModal.toggle();
      document.querySelector(".search-no-recent").classList.remove("d-none");
    }
    document.addEventListener("keydown", onKeyDownHandler);
    function onKeyDownHandler(event) {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        flexSearchModal.show();
        searchForm.reset();
        searchResults.textContent = "";
        document.querySelector(".search-no-recent").classList.remove("d-none");
      }
      if (event.key === "Escape") {
        searchForm.reset();
        searchResults.textContent = "";
        if (searchResultSelected) {
          removeClass(searchResultSelected, "selected");
          index = -1;
        }
        document.querySelector(".search-no-results").classList.add("d-none");
      }
    }
    document.addEventListener("click", function(event) {
      var modalElement = searchModal.contains(event.target);
      if (!modalElement) {
        searchForm.reset();
        searchResults.textContent = "";
        document.querySelector(".search-no-results").classList.add("d-none");
      }
      if (searchResultSelected) {
        removeClass(searchResultSelected, "selected");
        index = -1;
      }
    });
    searchModal.addEventListener("shown.bs.modal", () => {
      searchInput.focus();
    });
    var searchResultSelected;
    var index = -1;
    document.addEventListener(
      "keydown",
      function(event) {
        var len = searchResults.getElementsByTagName("article").length - 1;
        if (event.key === "ArrowDown") {
          index++;
          if (searchResultSelected) {
            removeClass(searchResultSelected, "selected");
            const next = searchResults.getElementsByTagName("article")[index];
            if (typeof next !== "undefined" && index <= len) {
              searchResultSelected = next;
            } else {
              index = 0;
              searchResultSelected = searchResults.getElementsByTagName("article")[0];
            }
            addClass(searchResultSelected, "selected");
          } else {
            index = 0;
            searchResultSelected = searchResults.getElementsByTagName("article")[0];
            addClass(searchResultSelected, "selected");
          }
        } else if (event.key === "ArrowUp") {
          if (searchResultSelected) {
            removeClass(searchResultSelected, "selected");
            index--;
            const next = searchResults.getElementsByTagName("article")[index];
            if (typeof next !== "undefined" && index >= 0) {
              searchResultSelected = next;
            } else {
              index = len;
              searchResultSelected = searchResults.getElementsByTagName("article")[len];
            }
            addClass(searchResultSelected, "selected");
          } else {
            index = 0;
            searchResultSelected = searchResults.getElementsByTagName("article")[len];
            addClass(searchResultSelected, "selected");
          }
        }
      },
      false
    );
    function removeClass(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
      searchResultSelected.querySelector("a").blur();
    }
    function addClass(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += " " + className;
      }
      searchResultSelected.querySelector("a").focus();
    }
    searchResults.addEventListener(
      "mouseover",
      () => {
        if (searchResultSelected) {
          removeClass(searchResultSelected, "selected");
        }
      },
      false
    );
  })();
})();
/*!
 * Search modal for Bootstrap based Thulite sites
 * Copyright 2021-2024 Thulite
 * Licensed under the MIT License
 */
/*! Bundled license information:

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2VudW1zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21hdGguanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy91c2VyQWdlbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzVGFibGVFbGVtZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRQYXJlbnROb2RlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3dpdGhpbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9tZXJnZUJ5TmFtZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2NyZWF0ZVBvcHBlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci1saXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2RvbS9kYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvZG9tL21hbmlwdWxhdG9yLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2FsZXJ0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2J1dHRvbi5qcyIsICIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy91dGlsL3N3aXBlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Nhcm91c2VsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2NvbGxhcHNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL2Ryb3Bkb3duLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvYmFja2Ryb3AuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9mb2N1c3RyYXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvbW9kYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvb2ZmY2FudmFzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvc2FuaXRpemVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3V0aWwvdGVtcGxhdGUtZmFjdG9yeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy90b29sdGlwLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3BvcG92ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvanMvc3JjL3RhYi5qcyIsICIuLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2pzL3NyYy90b2FzdC5qcyIsICI8c3RkaW4+Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgKiBmcm9tIFwiLi9lbnVtcy5qc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdywgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckJhc2UgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiLCAiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcclxuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcclxuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XHJcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcclxuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xyXG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XHJcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xyXG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xyXG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xyXG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcclxuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcclxuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcclxuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcclxuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcclxufSwgW10pO1xyXG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcclxuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xyXG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXHJcblxyXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XHJcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcclxuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcclxuXHJcbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcclxuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xyXG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXHJcblxyXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcclxuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XHJcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcclxuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xyXG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XHJcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdztcclxuICB9XHJcblxyXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XHJcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcclxuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZTtcclxufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xyXG5cclxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcclxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xyXG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XHJcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XHJcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcclxuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxyXG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XHJcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xyXG59XHJcblxyXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xyXG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXHJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcclxuXHJcbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcclxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xyXG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XHJcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcclxuXHJcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XHJcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxyXG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXHJcblxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xyXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xyXG5cclxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcclxuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcclxuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcclxuICAgIHBvcHBlcjoge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcclxuICAgICAgbGVmdDogJzAnLFxyXG4gICAgICB0b3A6ICcwJyxcclxuICAgICAgbWFyZ2luOiAnMCdcclxuICAgIH0sXHJcbiAgICBhcnJvdzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xyXG4gICAgfSxcclxuICAgIHJlZmVyZW5jZToge31cclxuICB9O1xyXG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XHJcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcclxuXHJcbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xyXG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XHJcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cclxuXHJcbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcclxuXHJcbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xyXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgcGhhc2U6ICd3cml0ZScsXHJcbiAgZm46IGFwcGx5U3R5bGVzLFxyXG4gIGVmZmVjdDogZWZmZWN0LFxyXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxyXG59OyIsICJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XHJcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xyXG59IiwgImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XHJcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XHJcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcclxuICB2YXIgdWFEYXRhID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XHJcblxyXG4gIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzICYmIEFycmF5LmlzQXJyYXkodWFEYXRhLmJyYW5kcykpIHtcclxuICAgIHJldHVybiB1YURhdGEuYnJhbmRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICByZXR1cm4gaXRlbS5icmFuZCArIFwiL1wiICsgaXRlbS52ZXJzaW9uO1xyXG4gICAgfSkuam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbn0iLCAiaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gXCIuLi91dGlscy91c2VyQWdlbnQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcclxuICByZXR1cm4gIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XHJcbn0iLCAiaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xyXG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XHJcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XHJcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gXCIuL2lzTGF5b3V0Vmlld3BvcnQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGluY2x1ZGVTY2FsZSwgaXNGaXhlZFN0cmF0ZWd5KSB7XHJcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XHJcbiAgICBpbmNsdWRlU2NhbGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xyXG4gICAgaXNGaXhlZFN0cmF0ZWd5ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2YXIgY2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgdmFyIHNjYWxlWCA9IDE7XHJcbiAgdmFyIHNjYWxlWSA9IDE7XHJcblxyXG4gIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xyXG4gICAgc2NhbGVYID0gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgPyByb3VuZChjbGllbnRSZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMSA6IDE7XHJcbiAgICBzY2FsZVkgPSBlbGVtZW50Lm9mZnNldEhlaWdodCA+IDAgPyByb3VuZChjbGllbnRSZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxIDogMTtcclxuICB9XHJcblxyXG4gIHZhciBfcmVmID0gaXNFbGVtZW50KGVsZW1lbnQpID8gZ2V0V2luZG93KGVsZW1lbnQpIDogd2luZG93LFxyXG4gICAgICB2aXN1YWxWaWV3cG9ydCA9IF9yZWYudmlzdWFsVmlld3BvcnQ7XHJcblxyXG4gIHZhciBhZGRWaXN1YWxPZmZzZXRzID0gIWlzTGF5b3V0Vmlld3BvcnQoKSAmJiBpc0ZpeGVkU3RyYXRlZ3k7XHJcbiAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xyXG4gIHZhciB5ID0gKGNsaWVudFJlY3QudG9wICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgLyBzY2FsZVk7XHJcbiAgdmFyIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aCAvIHNjYWxlWDtcclxuICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgdG9wOiB5LFxyXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgIGJvdHRvbTogeSArIGhlaWdodCxcclxuICAgIGxlZnQ6IHgsXHJcbiAgICB4OiB4LFxyXG4gICAgeTogeVxyXG4gIH07XHJcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcclxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XHJcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxyXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xyXG5cclxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xyXG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xyXG4gIH1cclxuXHJcbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XHJcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXHJcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgfTtcclxufSIsICJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcclxuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXHJcblxyXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XHJcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xyXG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xyXG5cclxuICAgICAgZG8ge1xyXG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cclxuXHJcblxyXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xyXG4gICAgICB9IHdoaWxlIChuZXh0KTtcclxuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxyXG5cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xyXG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxufSIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xyXG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcclxufSIsICJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XHJcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxyXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxyXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xyXG59IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xyXG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xyXG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcclxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cclxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxyXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcclxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXHJcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXHJcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXHJcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcclxuXHJcbiAgKTtcclxufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xyXG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcclxuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xyXG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XHJcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XHJcbmltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcclxuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcclxuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcclxufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xyXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xyXG4gIHZhciBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XHJcbiAgdmFyIGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XHJcblxyXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcclxuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcclxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuXHJcbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XHJcblxyXG4gIGlmIChpc1NoYWRvd1Jvb3QoY3VycmVudE5vZGUpKSB7XHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmhvc3Q7XHJcbiAgfVxyXG5cclxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XHJcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxyXG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXHJcblxyXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xyXG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXHJcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcclxuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xyXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xyXG5cclxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xyXG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xyXG4gICAgcmV0dXJuIHdpbmRvdztcclxuICB9XHJcblxyXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XHJcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xyXG59IiwgImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcclxuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW4sIHZhbHVlLCBtYXgpIHtcclxuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xyXG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRvcDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgbGVmdDogMFxyXG4gIH07XHJcbn0iLCAiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xyXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xyXG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XHJcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcclxuICAgIHJldHVybiBoYXNoTWFwO1xyXG4gIH0sIHt9KTtcclxufSIsICJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcclxuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcclxuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xyXG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IHsgd2l0aGluIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xyXG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcclxuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XHJcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xyXG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcclxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XHJcbiAgfSkpIDogcGFkZGluZztcclxuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcclxuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xyXG5cclxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxyXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxyXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xyXG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcclxuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcclxuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcclxuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcclxuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xyXG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG5cclxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XHJcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcclxuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XHJcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcclxuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xyXG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xyXG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xyXG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xyXG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xyXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcclxuXHJcbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XHJcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XHJcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XHJcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxyXG5cclxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xyXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xyXG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxyXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcclxuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcclxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcclxuXHJcbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcclxuXHJcblxyXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcclxuXHJcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XHJcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnYXJyb3cnLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgcGhhc2U6ICdtYWluJyxcclxuICBmbjogYXJyb3csXHJcbiAgZWZmZWN0OiBlZmZlY3QsXHJcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxyXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cclxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xyXG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcclxufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xyXG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XHJcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcclxuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcclxuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XHJcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxudmFyIHVuc2V0U2lkZXMgPSB7XHJcbiAgdG9wOiAnYXV0bycsXHJcbiAgcmlnaHQ6ICdhdXRvJyxcclxuICBib3R0b206ICdhdXRvJyxcclxuICBsZWZ0OiAnYXV0bydcclxufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cclxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcclxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXHJcblxyXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmLCB3aW4pIHtcclxuICB2YXIgeCA9IF9yZWYueCxcclxuICAgICAgeSA9IF9yZWYueTtcclxuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcclxuICByZXR1cm4ge1xyXG4gICAgeDogcm91bmQoeCAqIGRwcikgLyBkcHIgfHwgMCxcclxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcclxuICB2YXIgX09iamVjdCRhc3NpZ24yO1xyXG5cclxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxyXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcclxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxyXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXHJcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxyXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxyXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXHJcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXHJcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cyxcclxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XHJcbiAgdmFyIF9vZmZzZXRzJHggPSBvZmZzZXRzLngsXHJcbiAgICAgIHggPSBfb2Zmc2V0cyR4ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeCxcclxuICAgICAgX29mZnNldHMkeSA9IG9mZnNldHMueSxcclxuICAgICAgeSA9IF9vZmZzZXRzJHkgPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR5O1xyXG5cclxuICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcclxuICAgIHg6IHgsXHJcbiAgICB5OiB5XHJcbiAgfSkgOiB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeVxyXG4gIH07XHJcblxyXG4gIHggPSBfcmVmMy54O1xyXG4gIHkgPSBfcmVmMy55O1xyXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xyXG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xyXG4gIHZhciBzaWRlWCA9IGxlZnQ7XHJcbiAgdmFyIHNpZGVZID0gdG9wO1xyXG4gIHZhciB3aW4gPSB3aW5kb3c7XHJcblxyXG4gIGlmIChhZGFwdGl2ZSkge1xyXG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xyXG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcclxuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xyXG5cclxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XHJcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xyXG5cclxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcclxuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XHJcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcclxuICAgICAgfVxyXG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcclxuXHJcblxyXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xyXG5cclxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XHJcbiAgICAgIHNpZGVZID0gYm90dG9tO1xyXG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxyXG4gICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XHJcbiAgICAgIHkgLT0gb2Zmc2V0WSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xyXG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcclxuICAgICAgc2lkZVggPSByaWdodDtcclxuICAgICAgdmFyIG9mZnNldFggPSBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydCA/IHdpbi52aXN1YWxWaWV3cG9ydC53aWR0aCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxyXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcclxuICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcclxuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cclxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcclxuXHJcbiAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xyXG4gICAgeDogeCxcclxuICAgIHk6IHlcclxuICB9LCBnZXRXaW5kb3cocG9wcGVyKSkgOiB7XHJcbiAgICB4OiB4LFxyXG4gICAgeTogeVxyXG4gIH07XHJcblxyXG4gIHggPSBfcmVmNC54O1xyXG4gIHkgPSBfcmVmNC55O1xyXG5cclxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XHJcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPD0gMSA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNSkge1xyXG4gIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxyXG4gICAgICBvcHRpb25zID0gX3JlZjUub3B0aW9ucztcclxuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXHJcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcclxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxyXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXHJcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxyXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XHJcbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcclxuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxyXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcclxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxyXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxyXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb24sXHJcbiAgICBpc0ZpeGVkOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnXHJcbiAgfTtcclxuXHJcbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XHJcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XHJcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcclxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXHJcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcclxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcclxuICAgIH0pKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XHJcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xyXG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxyXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xyXG4gICAgfSkpKTtcclxuICB9XHJcblxyXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcclxuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcclxuICB9KTtcclxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcclxuICBlbmFibGVkOiB0cnVlLFxyXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxyXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxyXG4gIGRhdGE6IHt9XHJcbn07IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxudmFyIHBhc3NpdmUgPSB7XHJcbiAgcGFzc2l2ZTogdHJ1ZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcclxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxyXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXHJcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XHJcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxyXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXHJcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxyXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XHJcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xyXG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XHJcblxyXG4gIGlmIChzY3JvbGwpIHtcclxuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XHJcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAocmVzaXplKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoc2Nyb2xsKSB7XHJcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XHJcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNpemUpIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXHJcbiAgZW5hYmxlZDogdHJ1ZSxcclxuICBwaGFzZTogJ3dyaXRlJyxcclxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcclxuICBlZmZlY3Q6IGVmZmVjdCxcclxuICBkYXRhOiB7fVxyXG59OyIsICJ2YXIgaGFzaCA9IHtcclxuICBsZWZ0OiAncmlnaHQnLFxyXG4gIHJpZ2h0OiAnbGVmdCcsXHJcbiAgYm90dG9tOiAndG9wJyxcclxuICB0b3A6ICdib3R0b20nXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xyXG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XHJcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcclxuICB9KTtcclxufSIsICJ2YXIgaGFzaCA9IHtcclxuICBzdGFydDogJ2VuZCcsXHJcbiAgZW5kOiAnc3RhcnQnXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xyXG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XHJcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcclxuICB9KTtcclxufSIsICJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xyXG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XHJcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XHJcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcclxuICByZXR1cm4ge1xyXG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcclxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXHJcbiAgfTtcclxufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xyXG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcclxuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXHJcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXHJcbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcclxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XHJcbiAgLy8gYW55d2F5LlxyXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXHJcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcclxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xyXG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XHJcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XHJcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcclxuaW1wb3J0IGlzTGF5b3V0Vmlld3BvcnQgZnJvbSBcIi4vaXNMYXlvdXRWaWV3cG9ydC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcclxuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xyXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xyXG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcclxuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xyXG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcclxuICB2YXIgeCA9IDA7XHJcbiAgdmFyIHkgPSAwO1xyXG5cclxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcclxuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XHJcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XHJcbiAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XHJcblxyXG4gICAgaWYgKGxheW91dFZpZXdwb3J0IHx8ICFsYXlvdXRWaWV3cG9ydCAmJiBzdHJhdGVneSA9PT0gJ2ZpeGVkJykge1xyXG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcclxuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogd2lkdGgsXHJcbiAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxyXG4gICAgeTogeVxyXG4gIH07XHJcbn0iLCAiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xyXG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XHJcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XHJcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcclxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcclxuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xyXG5cclxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcclxuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xyXG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xyXG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XHJcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xyXG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcclxuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xyXG5cclxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcclxuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogd2lkdGgsXHJcbiAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgIHg6IHgsXHJcbiAgICB5OiB5XHJcbiAgfTtcclxufSIsICJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcclxuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXHJcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcclxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcclxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxyXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XHJcblxyXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xyXG59IiwgImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcclxuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XHJcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xyXG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xyXG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XHJcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXHJcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xyXG59IiwgImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XHJcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcclxuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcclxuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XHJcbi8qXHJcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXHJcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXHJcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcclxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcclxuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xyXG5cclxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XHJcbiAgICBsaXN0ID0gW107XHJcbiAgfVxyXG5cclxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xyXG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xyXG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcclxuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcclxuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xyXG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxyXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xyXG4gICAgbGVmdDogcmVjdC54LFxyXG4gICAgdG9wOiByZWN0LnksXHJcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcclxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcclxuICB9KTtcclxufSIsICJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xyXG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xyXG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xyXG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcclxuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcclxuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xyXG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XHJcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XHJcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcclxuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XHJcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xyXG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xyXG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xyXG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGZhbHNlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XHJcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xyXG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcclxuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICByZWN0LnggPSByZWN0LmxlZnQ7XHJcbiAgcmVjdC55ID0gcmVjdC50b3A7XHJcbiAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xyXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50LCBzdHJhdGVneSkpIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcclxufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxyXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cclxuLy8gYGluaXRpYWxgXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcclxuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XHJcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcclxuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcclxuXHJcbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxyXG5cclxuXHJcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XHJcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xyXG4gIH0pO1xyXG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2ZcclxuLy8gY2xpcHBpbmcgcGFyZW50c1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xyXG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcclxuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcclxuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcclxuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcclxuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcclxuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XHJcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xyXG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcclxuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XHJcbiAgICByZXR1cm4gYWNjUmVjdDtcclxuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkpO1xyXG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xyXG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcclxuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xyXG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcclxuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xyXG59IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcclxuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcclxuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXHJcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXHJcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xyXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcclxuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xyXG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XHJcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xyXG4gIHZhciBvZmZzZXRzO1xyXG5cclxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcclxuICAgIGNhc2UgdG9wOlxyXG4gICAgICBvZmZzZXRzID0ge1xyXG4gICAgICAgIHg6IGNvbW1vblgsXHJcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIGJvdHRvbTpcclxuICAgICAgb2Zmc2V0cyA9IHtcclxuICAgICAgICB4OiBjb21tb25YLFxyXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIHJpZ2h0OlxyXG4gICAgICBvZmZzZXRzID0ge1xyXG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxyXG4gICAgICAgIHk6IGNvbW1vbllcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBsZWZ0OlxyXG4gICAgICBvZmZzZXRzID0ge1xyXG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcclxuICAgICAgICB5OiBjb21tb25ZXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIG9mZnNldHMgPSB7XHJcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXHJcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xyXG5cclxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xyXG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcblxyXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcclxuICAgICAgY2FzZSBzdGFydDpcclxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBlbmQ6XHJcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2Zmc2V0cztcclxufSIsICJpbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XHJcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xyXG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcclxuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xyXG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xyXG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcclxuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcclxuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcclxuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxyXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXHJcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxyXG4gICAgICBfb3B0aW9ucyRzdHJhdGVneSA9IF9vcHRpb25zLnN0cmF0ZWd5LFxyXG4gICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxyXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxyXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcclxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxyXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxyXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcclxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcclxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcclxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcclxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXHJcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcclxuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XHJcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xyXG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xyXG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xyXG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcclxuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2UpO1xyXG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xyXG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxyXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcclxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxyXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcclxuICB9KTtcclxuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xyXG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxyXG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcclxuXHJcbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcclxuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxyXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXHJcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXHJcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XHJcbiAgfTtcclxuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XHJcblxyXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcclxuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XHJcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XHJcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcclxuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XHJcbn0iLCAiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcclxuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xyXG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcclxuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xyXG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcclxuICAgIG9wdGlvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXHJcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcclxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcclxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxyXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcclxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcclxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxyXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XHJcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xyXG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xyXG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XHJcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcclxuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XHJcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XHJcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxyXG5cclxuXHJcbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcclxuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcclxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXHJcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcclxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXHJcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcclxuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XHJcbiAgICByZXR1cm4gYWNjO1xyXG4gIH0sIHt9KTtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xyXG4gIH0pO1xyXG59IiwgImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xyXG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XHJcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcclxuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xyXG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XHJcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcclxuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcclxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxyXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxyXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xyXG5cclxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcclxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXHJcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXHJcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxyXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcclxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcclxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxyXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcclxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxyXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxyXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcclxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XHJcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xyXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xyXG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XHJcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xyXG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xyXG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcclxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXHJcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcclxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXHJcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXHJcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcclxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcclxuICAgIH0pIDogcGxhY2VtZW50KTtcclxuICB9LCBbXSk7XHJcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XHJcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XHJcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcclxuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcclxuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcclxuXHJcbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XHJcblxyXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XHJcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcclxuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xyXG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcclxuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXHJcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcclxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXHJcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcclxuICAgICAgcGFkZGluZzogcGFkZGluZ1xyXG4gICAgfSk7XHJcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XHJcblxyXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xyXG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcclxuICAgIHZhciBjaGVja3MgPSBbXTtcclxuXHJcbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xyXG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xyXG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcclxuICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfSkpIHtcclxuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xyXG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XHJcbiAgfVxyXG5cclxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XHJcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyBcdTIwMTMgcmVzZWFyY2ggbGF0ZXJcclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XHJcblxyXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcclxuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xyXG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XHJcblxyXG4gICAgICAgIGlmIChjaGVja3MpIHtcclxuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcclxuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xyXG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XHJcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xyXG5cclxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcclxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xyXG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xyXG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xyXG4gIH1cclxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdmbGlwJyxcclxuICBlbmFibGVkOiB0cnVlLFxyXG4gIHBoYXNlOiAnbWFpbicsXHJcbiAgZm46IGZsaXAsXHJcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcclxuICBkYXRhOiB7XHJcbiAgICBfc2tpcDogZmFsc2VcclxuICB9XHJcbn07IiwgImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xyXG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xyXG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcclxuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcclxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXHJcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxyXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcclxuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xyXG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xyXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXHJcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XHJcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XHJcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XHJcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcclxuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xyXG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXHJcbiAgfSk7XHJcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcclxuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXHJcbiAgfSk7XHJcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcclxuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcclxuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcclxuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcclxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xyXG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXHJcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxyXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxyXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxyXG4gIH07XHJcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xyXG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcclxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxyXG4gIH0pO1xyXG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2hpZGUnLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgcGhhc2U6ICdtYWluJyxcclxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxyXG4gIGZuOiBoaWRlXHJcbn07IiwgImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XHJcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xyXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xyXG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcclxuXHJcbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XHJcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxyXG4gIH0pKSA6IG9mZnNldCxcclxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxyXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XHJcblxyXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcclxuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xyXG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcclxuICAgIHg6IGRpc3RhbmNlLFxyXG4gICAgeTogc2tpZGRpbmdcclxuICB9IDoge1xyXG4gICAgeDogc2tpZGRpbmcsXHJcbiAgICB5OiBkaXN0YW5jZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xyXG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxyXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcclxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XHJcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxyXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcclxuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xyXG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCB7fSk7XHJcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcclxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxyXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XHJcblxyXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xyXG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcclxuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XHJcbiAgfVxyXG5cclxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcclxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdvZmZzZXQnLFxyXG4gIGVuYWJsZWQ6IHRydWUsXHJcbiAgcGhhc2U6ICdtYWluJyxcclxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXHJcbiAgZm46IG9mZnNldFxyXG59OyIsICJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcclxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxyXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xyXG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXHJcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxyXG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxyXG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxyXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XHJcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcclxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcclxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxyXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcclxuICB9KTtcclxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcclxuICBlbmFibGVkOiB0cnVlLFxyXG4gIHBoYXNlOiAncmVhZCcsXHJcbiAgZm46IHBvcHBlck9mZnNldHMsXHJcbiAgZGF0YToge31cclxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XHJcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4JztcclxufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XHJcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XHJcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xyXG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xyXG5pbXBvcnQgeyB3aXRoaW4sIHdpdGhpbk1heENsYW1wIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcclxuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xyXG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XHJcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xyXG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcclxuaW1wb3J0IHsgbWluIGFzIG1hdGhNaW4sIG1heCBhcyBtYXRoTWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcclxuXHJcbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XHJcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcclxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcclxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcclxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxyXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcclxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcclxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxyXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXHJcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxyXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXHJcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXHJcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxyXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXHJcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxyXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XHJcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcclxuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcclxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxyXG4gICAgcGFkZGluZzogcGFkZGluZyxcclxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxyXG4gIH0pO1xyXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xyXG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcclxuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcclxuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XHJcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcclxuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcclxuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcclxuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcclxuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XHJcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxyXG4gIH0pKSA6IHRldGhlck9mZnNldDtcclxuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcclxuICAgIG1haW5BeGlzOiB0ZXRoZXJPZmZzZXRWYWx1ZSxcclxuICAgIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlXHJcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbWFpbkF4aXM6IDAsXHJcbiAgICBhbHRBeGlzOiAwXHJcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xyXG4gIHZhciBvZmZzZXRNb2RpZmllclN0YXRlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdIDogbnVsbDtcclxuICB2YXIgZGF0YSA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwXHJcbiAgfTtcclxuXHJcbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoY2hlY2tNYWluQXhpcykge1xyXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcclxuXHJcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcclxuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xyXG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XHJcbiAgICB2YXIgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xyXG4gICAgdmFyIG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xyXG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xyXG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XHJcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xyXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xyXG5cclxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcclxuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xyXG4gICAgICB3aWR0aDogMCxcclxuICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9O1xyXG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XHJcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcclxuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XHJcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXHJcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxyXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xyXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxyXG5cclxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcclxuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xyXG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xyXG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcclxuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XHJcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW21haW5BeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJCA6IDA7XHJcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcclxuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xyXG4gICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XHJcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcclxuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoZWNrQWx0QXhpcykge1xyXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDI7XHJcblxyXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xyXG5cclxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcclxuXHJcbiAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XHJcblxyXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcblxyXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcclxuXHJcbiAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XHJcblxyXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xyXG5cclxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xyXG5cclxuICAgIHZhciBfdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlID8gX21pbiA6IF9vZmZzZXQgLSByZWZlcmVuY2VSZWN0W19sZW5dIC0gcG9wcGVyUmVjdFtfbGVuXSAtIF9vZmZzZXRNb2RpZmllclZhbHVlICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XHJcblxyXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcclxuXHJcbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xyXG5cclxuICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xyXG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XHJcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcclxuICBlbmFibGVkOiB0cnVlLFxyXG4gIHBoYXNlOiAnbWFpbicsXHJcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcclxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXHJcbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxyXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxyXG4gIH07XHJcbn0iLCAiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcclxuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcclxuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcclxuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xyXG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcclxuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcclxuICB9XHJcbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcclxuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xyXG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcclxuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcclxuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xyXG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xyXG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcclxuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcclxuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgdmFyIHNjYWxlWCA9IHJvdW5kKHJlY3Qud2lkdGgpIC8gZWxlbWVudC5vZmZzZXRXaWR0aCB8fCAxO1xyXG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xyXG4gIHJldHVybiBzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxO1xyXG59IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cclxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xyXG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcclxuICAgIGlzRml4ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcclxuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XHJcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xyXG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnRJc1NjYWxlZCwgaXNGaXhlZCk7XHJcbiAgdmFyIHNjcm9sbCA9IHtcclxuICAgIHNjcm9sbExlZnQ6IDAsXHJcbiAgICBzY3JvbGxUb3A6IDBcclxuICB9O1xyXG4gIHZhciBvZmZzZXRzID0ge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDBcclxuICB9O1xyXG5cclxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XHJcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxyXG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xyXG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCwgdHJ1ZSk7XHJcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcclxuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXHJcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXHJcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcclxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcclxuICB9O1xyXG59IiwgImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcclxuXHJcbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xyXG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XHJcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XHJcbiAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xyXG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XHJcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcclxuXHJcbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xyXG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XHJcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xyXG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XHJcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xyXG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcclxuXHJcbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XHJcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XHJcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XHJcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxyXG4gICAgICBzb3J0KG1vZGlmaWVyKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcclxuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcclxuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXHJcblxyXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcclxuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xyXG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xyXG4gICAgfSkpO1xyXG4gIH0sIFtdKTtcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xyXG4gIHZhciBwZW5kaW5nO1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXBlbmRpbmcpIHtcclxuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBlbmRpbmc7XHJcbiAgfTtcclxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcclxuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XHJcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcclxuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xyXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxyXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXHJcbiAgICB9KSA6IGN1cnJlbnQ7XHJcbiAgICByZXR1cm4gbWVyZ2VkO1xyXG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIHJldHVybiBtZXJnZWRba2V5XTtcclxuICB9KTtcclxufSIsICJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xyXG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xyXG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XHJcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xyXG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XHJcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xyXG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcclxuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcclxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcclxuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxyXG4gIG1vZGlmaWVyczogW10sXHJcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XHJcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XHJcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xyXG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcclxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcclxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXHJcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcclxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xyXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcclxuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdGF0ZSA9IHtcclxuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcclxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXHJcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxyXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcclxuICAgICAgZWxlbWVudHM6IHtcclxuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcclxuICAgICAgICBwb3BwZXI6IHBvcHBlclxyXG4gICAgICB9LFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcclxuICAgICAgc3R5bGVzOiB7fVxyXG4gICAgfTtcclxuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XHJcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgIHZhciBpbnN0YW5jZSA9IHtcclxuICAgICAgc3RhdGU6IHN0YXRlLFxyXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nID8gc2V0T3B0aW9uc0FjdGlvbihzdGF0ZS5vcHRpb25zKSA6IHNldE9wdGlvbnNBY3Rpb247XHJcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xyXG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcclxuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxyXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXHJcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXHJcbiAgICAgICAgLy8gcHJvcGVydGllc1xyXG5cclxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xyXG5cclxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBTeW5jIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xyXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXHJcbiAgICAgIC8vIGxvZ2ljLlxyXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXHJcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcclxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xyXG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxyXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxyXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcclxuICAgICAgICAvLyBhbnltb3JlXHJcblxyXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xyXG5cclxuXHJcbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XHJcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXHJcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxyXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXHJcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcclxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxyXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXHJcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XHJcblxyXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXHJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXHJcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cclxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcclxuXHJcbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxyXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxyXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcclxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcclxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcclxuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXHJcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXHJcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcclxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcclxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXHJcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcclxuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XHJcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcclxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcclxuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcclxuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XHJcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcclxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XHJcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcclxuICAgIC8vIG9uZS5cclxuXHJcbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XHJcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xyXG4gICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxyXG4gICAgICAgICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRvcHRpb25zLFxyXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmLmVmZmVjdDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xyXG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcclxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xyXG5cclxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XHJcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgfTtcclxufVxyXG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCAiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xyXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XHJcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XHJcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XHJcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcclxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzXTtcclxudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xyXG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcclxufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyIsICJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XHJcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcclxuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcclxuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcclxuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xyXG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcclxuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcclxuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XHJcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcclxuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcclxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xyXG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XHJcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xyXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpXG4gIH0sXG5cbiAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KVxuXG4gICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpXG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMV8wMDBfMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8qKlxuICogUHJvcGVybHkgZXNjYXBlIElEcyBzZWxlY3RvcnMgdG8gaGFuZGxlIHdlaXJkIElEc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCBwYXJzZVNlbGVjdG9yID0gc2VsZWN0b3IgPT4ge1xuICBpZiAoc2VsZWN0b3IgJiYgd2luZG93LkNTUyAmJiB3aW5kb3cuQ1NTLmVzY2FwZSkge1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgbmVlZHMgZXNjYXBpbmcgdG8gaGFuZGxlIElEcyAoaHRtbDUrKSBjb250YWluaW5nIGZvciBpbnN0YW5jZSAvXG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKC8jKFteXFxzXCIjJ10rKS9nLCAobWF0Y2gsIGlkKSA9PiBgIyR7Q1NTLmVzY2FwZShpZCl9YClcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG4vLyBTaG91dC1vdXQgQW5ndXMgQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iamVjdCA9PiB7XG4gIGlmIChvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqZWN0fWBcbiAgfVxuXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIFB1YmxpYyBVdGlsIEFQSVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgaWYgKCFvYmplY3QgfHwgdHlwZW9mIG9iamVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbMF1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gb2JqZWN0ID0+IHtcbiAgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgaWYgKGlzRWxlbWVudChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG9iamVjdC5qcXVlcnkgPyBvYmplY3RbMF0gOiBvYmplY3RcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJyAmJiBvYmplY3QubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcnNlU2VsZWN0b3Iob2JqZWN0KSlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWlzRWxlbWVudChlbGVtZW50KSB8fCBlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50SXNWaXNpYmxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJ1xuICAvLyBIYW5kbGUgYGRldGFpbHNgIGVsZW1lbnQgYXMgaXRzIGNvbnRlbnQgbWF5IGZhbHNpZSBhcHBlYXIgdmlzaWJsZSB3aGVuIGl0IGlzIGNsb3NlZFxuICBjb25zdCBjbG9zZWREZXRhaWxzID0gZWxlbWVudC5jbG9zZXN0KCdkZXRhaWxzOm5vdChbb3Blbl0pJylcblxuICBpZiAoIWNsb3NlZERldGFpbHMpIHtcbiAgICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxuICB9XG5cbiAgaWYgKGNsb3NlZERldGFpbHMgIT09IGVsZW1lbnQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZWxlbWVudC5jbG9zZXN0KCdzdW1tYXJ5JylcbiAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnBhcmVudE5vZGUgIT09IGNsb3NlZERldGFpbHMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChzdW1tYXJ5ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudElzVmlzaWJsZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuLyoqXG4gKiBUcmljayB0byByZXN0YXJ0IGFuIGVsZW1lbnQncyBhbmltYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHZvaWRcbiAqXG4gKiBAc2VlIGh0dHBzOi8vd3d3LmNoYXJpc3RoZW8uaW8vYmxvZy8yMDIxLzAyL3Jlc3RhcnQtYS1jc3MtYW5pbWF0aW9uLXdpdGgtamF2YXNjcmlwdC8jcmVzdGFydGluZy1hLWNzcy1hbmltYXRpb25cbiAqL1xuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG59XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgaWYgKHdpbmRvdy5qUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5qUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MgPSBbXVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAvLyBhZGQgbGlzdGVuZXIgb24gdGhlIGZpcnN0IGNhbGwgd2hlbiB0aGUgZG9jdW1lbnQgaXMgaW4gbG9hZGluZyBzdGF0ZVxuICAgIGlmICghRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcykge1xuICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gKHBvc3NpYmxlQ2FsbGJhY2ssIGFyZ3MgPSBbXSwgZGVmYXVsdFZhbHVlID0gcG9zc2libGVDYWxsYmFjaykgPT4ge1xuICByZXR1cm4gdHlwZW9mIHBvc3NpYmxlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBwb3NzaWJsZUNhbGxiYWNrKC4uLmFyZ3MpIDogZGVmYXVsdFZhbHVlXG59XG5cbmNvbnN0IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24gPSAoY2FsbGJhY2ssIHRyYW5zaXRpb25FbGVtZW50LCB3YWl0Rm9yVHJhbnNpdGlvbiA9IHRydWUpID0+IHtcbiAgaWYgKCF3YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0cmFuc2l0aW9uRWxlbWVudCkgKyBkdXJhdGlvblBhZGRpbmdcblxuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICBjb25zdCBoYW5kbGVyID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBpZiAodGFyZ2V0ICE9PSB0cmFuc2l0aW9uRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHRyYW5zaXRpb25FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgfVxuXG4gIHRyYW5zaXRpb25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGhhbmRsZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBwcmV2aW91cy9uZXh0IGVsZW1lbnQgb2YgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxpc3QgICAgVGhlIGxpc3Qgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSBhY3RpdmVFbGVtZW50ICAgVGhlIGFjdGl2ZSBlbGVtZW50XG4gKiBAcGFyYW0gc2hvdWxkR2V0TmV4dCAgIENob29zZSB0byBnZXQgbmV4dCBvciBwcmV2aW91cyBlbGVtZW50XG4gKiBAcGFyYW0gaXNDeWNsZUFsbG93ZWRcbiAqIEByZXR1cm4ge0VsZW1lbnR8ZWxlbX0gVGhlIHByb3BlciBlbGVtZW50XG4gKi9cbmNvbnN0IGdldE5leHRBY3RpdmVFbGVtZW50ID0gKGxpc3QsIGFjdGl2ZUVsZW1lbnQsIHNob3VsZEdldE5leHQsIGlzQ3ljbGVBbGxvd2VkKSA9PiB7XG4gIGNvbnN0IGxpc3RMZW5ndGggPSBsaXN0Lmxlbmd0aFxuICBsZXQgaW5kZXggPSBsaXN0LmluZGV4T2YoYWN0aXZlRWxlbWVudClcblxuICAvLyBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgbGlzdCByZXR1cm4gYW4gZWxlbWVudFxuICAvLyBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbiBhbmQgaWYgY3ljbGUgaXMgYWxsb3dlZFxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuICFzaG91bGRHZXROZXh0ICYmIGlzQ3ljbGVBbGxvd2VkID8gbGlzdFtsaXN0TGVuZ3RoIC0gMV0gOiBsaXN0WzBdXG4gIH1cblxuICBpbmRleCArPSBzaG91bGRHZXROZXh0ID8gMSA6IC0xXG5cbiAgaWYgKGlzQ3ljbGVBbGxvd2VkKSB7XG4gICAgaW5kZXggPSAoaW5kZXggKyBsaXN0TGVuZ3RoKSAlIGxpc3RMZW5ndGhcbiAgfVxuXG4gIHJldHVybiBsaXN0W01hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBsaXN0TGVuZ3RoIC0gMSkpXVxufVxuXG5leHBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRFbGVtZW50LFxuICBnZXRqUXVlcnksXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3AsXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgcGFyc2VTZWxlY3RvcixcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdG9UeXBlXG59XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5cbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogUHJpdmF0ZSBtZXRob2RzXG4gKi9cblxuZnVuY3Rpb24gbWFrZUV2ZW50VWlkKGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IGVsZW1lbnQgfSlcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAoY29uc3QgZG9tRWxlbWVudCBvZiBkb21FbGVtZW50cykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGh5ZHJhdGVPYmooZXZlbnQsIHsgZGVsZWdhdGVUYXJnZXQ6IHRhcmdldCB9KVxuXG4gICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBjYWxsYWJsZSwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudHMpXG4gICAgLmZpbmQoZXZlbnQgPT4gZXZlbnQuY2FsbGFibGUgPT09IGNhbGxhYmxlICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgY29uc3QgaXNEZWxlZ2F0ZWQgPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZydcbiAgLy8gVE9ETzogdG9vbHRpcCBwYXNzZXMgYGZhbHNlYCBpbnN0ZWFkIG9mIHNlbGVjdG9yLCBzbyB3ZSBuZWVkIHRvIGNoZWNrXG4gIGNvbnN0IGNhbGxhYmxlID0gaXNEZWxlZ2F0ZWQgPyBkZWxlZ2F0aW9uRnVuY3Rpb24gOiAoaGFuZGxlciB8fCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpXG5cbiAgaWYgKCFuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudCkpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudFxuICB9XG5cbiAgcmV0dXJuIFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF1cbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBvbmVPZmYpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGxldCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuXG4gIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gIGlmIChvcmlnaW5hbFR5cGVFdmVudCBpbiBjdXN0b21FdmVudHMpIHtcbiAgICBjb25zdCB3cmFwRnVuY3Rpb24gPSBmbiA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FsbGFibGUgPSB3cmFwRnVuY3Rpb24oY2FsbGFibGUpXG4gIH1cblxuICBjb25zdCBldmVudHMgPSBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRnVuY3Rpb24gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRnVuY3Rpb24pIHtcbiAgICBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiA9IHByZXZpb3VzRnVuY3Rpb24ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBtYWtlRXZlbnRVaWQoY2FsbGFibGUsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBpc0RlbGVnYXRlZCA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY2FsbGFibGUpIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGNhbGxhYmxlKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGxcbiAgZm4uY2FsbGFibGUgPSBjYWxsYWJsZVxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGlzRGVsZWdhdGVkKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIGZvciAoY29uc3QgW2hhbmRsZXJLZXksIGV2ZW50XSBvZiBPYmplY3QuZW50cmllcyhzdG9yZUVsZW1lbnRFdmVudCkpIHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudFxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtpc0RlbGVnYXRlZCwgY2FsbGFibGUsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbWV0ZXJzKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRnVuY3Rpb24pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYWJsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBjYWxsYWJsZSwgaXNEZWxlZ2F0ZWQgPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50RXZlbnQgb2YgT2JqZWN0LmtleXMoZXZlbnRzKSkge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2tleUhhbmRsZXJzLCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5jYWxsYWJsZSwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuXG4gICAgbGV0IGpRdWVyeUV2ZW50ID0gbnVsbFxuICAgIGxldCBidWJibGVzID0gdHJ1ZVxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWVcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGNvbnN0IGV2dCA9IGh5ZHJhdGVPYmoobmV3IEV2ZW50KGV2ZW50LCB7IGJ1YmJsZXMsIGNhbmNlbGFibGU6IHRydWUgfSksIGFyZ3MpXG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIGpRdWVyeUV2ZW50KSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dFxuICB9XG59XG5cbmZ1bmN0aW9uIGh5ZHJhdGVPYmoob2JqLCBtZXRhID0ge30pIHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSkpIHtcbiAgICB0cnkge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZVxuICAgIH0gY2F0Y2gge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsdWUgPT09IE51bWJlcih2YWx1ZSkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG4gICAgY29uc3QgYnNLZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KS5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpICYmICFrZXkuc3RhcnRzV2l0aCgnYnNDb25maWcnKSlcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGJzS2V5cykge1xuICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9jb25maWcuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50LCB0b1R5cGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBDb25maWcge1xuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWVyZ2VDb25maWdPYmooY29uZmlnLCBlbGVtZW50KSB7XG4gICAgY29uc3QganNvbkNvbmZpZyA9IGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgJ2NvbmZpZycpIDoge30gLy8gdHJ5IHRvIHBhcnNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBqc29uQ29uZmlnID09PSAnb2JqZWN0JyA/IGpzb25Db25maWcgOiB7fSksXG4gICAgICAuLi4oaXNFbGVtZW50KGVsZW1lbnQpID8gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkgOiB7fSksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gIH1cblxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMgPSB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKSB7XG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIGV4cGVjdGVkVHlwZXNdIG9mIE9iamVjdC5lbnRyaWVzKGNvbmZpZ1R5cGVzKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YS5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi91dGlsL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGVBZnRlclRyYW5zaXRpb24sIGdldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjMuMydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQmFzZUNvbXBvbmVudCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKClcblxuICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eU5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcsIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZ2V0RWxlbWVudChlbGVtZW50KSwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIGNvbmZpZyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoZWxlbWVudCkgfHwgbmV3IHRoaXMoZWxlbWVudCwgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxuXG4gIHN0YXRpYyBldmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBgJHtuYW1lfSR7dGhpcy5FVkVOVF9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGlzRGlzYWJsZWQsIGlzVmlzaWJsZSwgcGFyc2VTZWxlY3RvciB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnXG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgbGV0IGhyZWZBdHRyaWJ1dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyaWJ1dGUgfHwgKCFocmVmQXR0cmlidXRlLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyaWJ1dGUuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaHJlZkF0dHJpYnV0ZSA9IGAjJHtocmVmQXR0cmlidXRlLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHJpYnV0ZSAmJiBocmVmQXR0cmlidXRlICE9PSAnIycgPyBocmVmQXR0cmlidXRlLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvciA/IHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKHNlbCA9PiBwYXJzZVNlbGVjdG9yKHNlbCkpLmpvaW4oJywnKSA6IG51bGxcbn1cblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlLmNsb3Nlc3Qoc2VsZWN0b3IpXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IpIHtcbiAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG4gIC8vIFRPRE86IHRoaXMgaXMgbm93IHVudXNlZDsgcmVtb3ZlIGxhdGVyIGFsb25nIHdpdGggcHJldigpXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBmb2N1c2FibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgZm9jdXNhYmxlcyA9IFtcbiAgICAgICdhJyxcbiAgICAgICdidXR0b24nLFxuICAgICAgJ2lucHV0JyxcbiAgICAgICd0ZXh0YXJlYScsXG4gICAgICAnc2VsZWN0JyxcbiAgICAgICdkZXRhaWxzJyxcbiAgICAgICdbdGFiaW5kZXhdJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXSdcbiAgICBdLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn06bm90KFt0YWJpbmRleF49XCItXCJdKWApLmpvaW4oJywnKVxuXG4gICAgcmV0dXJuIHRoaXMuZmluZChmb2N1c2FibGVzLCBlbGVtZW50KS5maWx0ZXIoZWwgPT4gIWlzRGlzYWJsZWQoZWwpICYmIGlzVmlzaWJsZShlbCkpXG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpIDogbnVsbFxuICB9LFxuXG4gIGdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIHJldHVybiBzZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpIDogW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0Rpc2FibGVkIH0gZnJvbSAnLi9pbmRleC5qcydcblxuY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWBcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgIGluc3RhbmNlW21ldGhvZF0oKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlclxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFKVxuXG4gICAgaWYgKGNsb3NlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGVzdHJveUVsZW1lbnQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMT1NFRClcbiAgICB0aGlzLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQWxlcnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKEFsZXJ0LCAnY2xvc2UnKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBCdXR0b24uZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcbiAgY29uc3QgZGF0YSA9IEJ1dHRvbi5nZXRPckNyZWF0ZUluc3RhbmNlKGJ1dHRvbilcblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3N3aXBlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3N3aXBlJ1xuY29uc3QgRVZFTlRfS0VZID0gJy5icy5zd2lwZSdcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBlbmRDYWxsYmFjazogbnVsbCxcbiAgbGVmdENhbGxiYWNrOiBudWxsLFxuICByaWdodENhbGxiYWNrOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBlbmRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIGxlZnRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKScsXG4gIHJpZ2h0Q2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFN3aXBlIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICBpZiAoIWVsZW1lbnQgfHwgIVN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGVsdGFYID0gMFxuICAgIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuICAgIHRoaXMuX2luaXRFdmVudHMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYXG4gICAgfVxuICB9XG5cbiAgX2VuZChldmVudCkge1xuICAgIGlmICh0aGlzLl9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSkge1xuICAgICAgdGhpcy5fZGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5lbmRDYWxsYmFjaylcbiAgfVxuXG4gIF9tb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5fZGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgMCA6XG4gICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLl9kZWx0YVhcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YVggPSBNYXRoLmFicyh0aGlzLl9kZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGFYIDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGFYIC8gdGhpcy5fZGVsdGFYXG5cbiAgICB0aGlzLl9kZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkaXJlY3Rpb24gPiAwID8gdGhpcy5fY29uZmlnLnJpZ2h0Q2FsbGJhY2sgOiB0aGlzLl9jb25maWcubGVmdENhbGxiYWNrKVxuICB9XG5cbiAgX2luaXRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IHRoaXMuX2VuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiB0aGlzLl9zdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiB0aGlzLl9tb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9zdXBwb3J0UG9pbnRlckV2ZW50cyAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpcGVcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmRcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFN3aXBlIGZyb20gJy4vdXRpbC9zd2lwZS5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSBTRUxFQ1RPUl9BQ1RJVkUgKyBTRUxFQ1RPUl9JVEVNXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IEtFWV9UT19ESVJFQ1RJT04gPSB7XG4gIFtBUlJPV19MRUZUX0tFWV06IERJUkVDVElPTl9SSUdIVCxcbiAgW0FSUk9XX1JJR0hUX0tFWV06IERJUkVDVElPTl9MRUZUXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHJpZGU6IGZhbHNlLFxuICB0b3VjaDogdHJ1ZSxcbiAgd3JhcDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJywgLy8gVE9ETzp2NiByZW1vdmUgYm9vbGVhbiBzdXBwb3J0XG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHJpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgdG91Y2g6ICdib29sZWFuJyxcbiAgd3JhcDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG51bGxcblxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIGlmICh0aGlzLl9jb25maWcucmlkZSA9PT0gQ0xBU1NfTkFNRV9DQVJPVVNFTCkge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBuZXh0KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRklYTUUgVE9ETyB1c2UgYGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZWBcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICB9XG5cbiAgY3ljbGUoKSB7XG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm5leHRXaGVuVmlzaWJsZSgpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gIH1cblxuICBfbWF5YmVFbmFibGVDeWNsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5yaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMuY3ljbGUoKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY3ljbGUoKVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2dldEl0ZW1zKClcbiAgICBpZiAoaW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2dldEFjdGl2ZSgpKVxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgaXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fc3dpcGVIZWxwZXIpIHtcbiAgICAgIHRoaXMuX3N3aXBlSGVscGVyLmRpc3Bvc2UoKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuZGVmYXVsdEludGVydmFsID0gY29uZmlnLmludGVydmFsXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgKCkgPT4gdGhpcy5wYXVzZSgpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsICgpID0+IHRoaXMuX21heWJlRW5hYmxlQ3ljbGUoKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIFN3aXBlLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGZvciAoY29uc3QgaW1nIG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaW1nLCBFVkVOVF9EUkFHX1NUQVJULCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZENhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSAhPT0gJ2hvdmVyJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgIH1cblxuICAgIGNvbnN0IHN3aXBlQ29uZmlnID0ge1xuICAgICAgbGVmdENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9MRUZUKSksXG4gICAgICByaWdodENhbGxiYWNrOiAoKSA9PiB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKERJUkVDVElPTl9SSUdIVCkpLFxuICAgICAgZW5kQ2FsbGJhY2s6IGVuZENhbGxCYWNrXG4gICAgfVxuXG4gICAgdGhpcy5fc3dpcGVIZWxwZXIgPSBuZXcgU3dpcGUodGhpcy5fZWxlbWVudCwgc3dpcGVDb25maWcpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gS0VZX1RPX0RJUkVDVElPTltldmVudC5rZXldXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUodGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRJdGVtcygpLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgIGNvbnN0IG5ld0FjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoYFtkYXRhLWJzLXNsaWRlLXRvPVwiJHtpbmRleH1cIl1gLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgIGlmIChuZXdBY3RpdmVJbmRpY2F0b3IpIHtcbiAgICAgIG5ld0FjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCB0aGlzLl9nZXRBY3RpdmUoKVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbFxuICB9XG5cbiAgX3NsaWRlKG9yZGVyLCBlbGVtZW50ID0gbnVsbCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9nZXRBY3RpdmUoKVxuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGdldE5leHRBY3RpdmVFbGVtZW50KHRoaXMuX2dldEl0ZW1zKCksIGFjdGl2ZUVsZW1lbnQsIGlzTmV4dCwgdGhpcy5fY29uZmlnLndyYXApXG5cbiAgICBpZiAobmV4dEVsZW1lbnQgPT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG5cbiAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudE5hbWUgPT4ge1xuICAgICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIGV2ZW50TmFtZSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSxcbiAgICAgICAgZnJvbTogdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdHJpZ2dlckV2ZW50KEVWRU5UX1NMSURFKVxuXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICAvLyBUT0RPOiBjaGFuZ2UgdGVzdHMgdGhhdCB1c2UgZW1wdHkgZGl2cyB0byBhdm9pZCB0aGlzIGNoZWNrXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMucGF1c2UoKVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudEluZGV4KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkRcbiAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuXG4gICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgIHJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgIHRyaWdnZXJFdmVudChFVkVOVF9TTElEKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdGhpcy5faXNBbmltYXRlZCgpKVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpXG4gIH1cblxuICBfZ2V0QWN0aXZlKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1zKCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVFxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcbiAgfVxuXG4gIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgY2Fyb3VzZWwgPSBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICBpZiAoc2xpZGVJbmRleCkge1xuICAgIGNhcm91c2VsLnRvKHNsaWRlSW5kZXgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUodGhpcywgJ3NsaWRlJykgPT09ICduZXh0Jykge1xuICAgIGNhcm91c2VsLm5leHQoKVxuICAgIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNhcm91c2VsLnByZXYoKVxuICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAoY29uc3QgY2Fyb3VzZWwgb2YgY2Fyb3VzZWxzKSB7XG4gICAgQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShjYXJvdXNlbClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldE5leHRBY3RpdmVFbGVtZW50LFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIG5vb3Bcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUF9DRU5URVIgPSAnZHJvcHVwLWNlbnRlcidcbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSID0gJ2Ryb3Bkb3duLWNlbnRlcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTiA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfS4ke0NMQVNTX05BTUVfU0hPV31gXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSID0gJy5uYXZiYXInXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BDRU5URVIgPSAndG9wJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUNFTlRFUiA9ICdib3R0b20nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9DbG9zZTogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIG9mZnNldDogWzAsIDJdLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZSdcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgLy8gZHJvcGRvd24gd3JhcHBlclxuICAgIC8vIFRPRE86IHY2IHJldmVydCAjMzcwMTEgJiBjaGFuZ2UgbWFya3VwIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzUuMy9mb3Jtcy9pbnB1dC1ncm91cC9cbiAgICB0aGlzLl9tZW51ID0gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXSB8fFxuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NRU5VLCB0aGlzLl9wYXJlbnQpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24oKSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVBvcHBlcigpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgIXRoaXMuX3BhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gc3VwZXIuX2dldENvbmZpZyhjb25maWcpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9wYXJlbnRcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuICB9XG5cbiAgX2lzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9wYXJlbnRcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfVE9QQ0VOVEVSXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUikpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfQk9UVE9NQ0VOVEVSXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUikgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXkgb3IgRHJvcGRvd24gaXMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyIHx8IHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpIC8vIFRPRE86IHY2IHJlbW92ZVxuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbSh7IGtleSwgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGVsZW1lbnQgPT4gaXNWaXNpYmxlKGVsZW1lbnQpKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGlmIHRhcmdldCBpc24ndCBpbmNsdWRlZCBpbiBpdGVtcyAoZS5nLiB3aGVuIGV4cGFuZGluZyB0aGUgZHJvcGRvd24pXG4gICAgLy8gYWxsb3cgY3ljbGluZyB0byBnZXQgdGhlIGxhc3QgaXRlbSBpbiBjYXNlIGtleSBlcXVhbHMgQVJST1dfVVBfS0VZXG4gICAgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoaXRlbXMsIHRhcmdldCwga2V5ID09PSBBUlJPV19ET1dOX0tFWSwgIWl0ZW1zLmluY2x1ZGVzKHRhcmdldCkpLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Ub2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9TSE9XTilcblxuICAgIGZvciAoY29uc3QgdG9nZ2xlIG9mIG9wZW5Ub2dnbGVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRHJvcGRvd24uZ2V0SW5zdGFuY2UodG9nZ2xlKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgIGlmIChcbiAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHsgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudCB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgYW4gVVAgfCBET1dOIHwgRVNDQVBFIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWEgJiYgaWYga2V5IGlzIG90aGVyIHRoYW4gRVNDQVBFID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcblxuICAgIGNvbnN0IGlzSW5wdXQgPSAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgIGNvbnN0IGlzRXNjYXBlRXZlbnQgPSBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVlcbiAgICBjb25zdCBpc1VwT3JEb3duRXZlbnQgPSBbQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KVxuXG4gICAgaWYgKCFpc1VwT3JEb3duRXZlbnQgJiYgIWlzRXNjYXBlRXZlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0lucHV0ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/XG4gICAgICB0aGlzIDpcbiAgICAgIChTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXSB8fFxuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudC5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlKSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0gRHJvcGRvd24uZ2V0T3JDcmVhdGVJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24pXG5cbiAgICBpZiAoaXNVcE9yRG93bkV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2Uuc2hvdygpXG4gICAgICBpbnN0YW5jZS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UuX2lzU2hvd24oKSkgeyAvLyBlbHNlIGlzIGVzY2FwZSBhbmQgd2UgY2hlY2sgaWYgaXQgaXMgc2hvd25cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpbnN0YW5jZS5oaWRlKClcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbi5mb2N1cygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQge1xuICBleGVjdXRlLCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50LCByZWZsb3dcbn0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgY2xhc3NOYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuICBjbGlja0NhbGxiYWNrOiBudWxsLFxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICByb290RWxlbWVudDogJ2JvZHknIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICByb290RWxlbWVudDogJyhlbGVtZW50fHN0cmluZyknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhY2tkcm9wIGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3coZWxlbWVudClcbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IHRoaXMuX2NvbmZpZy5jbGFzc05hbWVcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIC8vIHVzZSBnZXRFbGVtZW50KCkgd2l0aCB0aGUgZGVmYXVsdCBcImJvZHlcIiB0byBnZXQgYSBmcmVzaCBFbGVtZW50IG9uIGVhY2ggaW5zdGFudGlhdGlvblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGdldEVsZW1lbnQoY29uZmlnLnJvb3RFbGVtZW50KVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9nZXRFbGVtZW50KClcbiAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG5cbiAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uKGNhbGxiYWNrLCB0aGlzLl9nZXRFbGVtZW50KCksIHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvZm9jdXN0cmFwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2ZvY3VzdHJhcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmZvY3VzdHJhcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX1RBQiA9IGBrZXlkb3duLnRhYiR7RVZFTlRfS0VZfWBcblxuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBUQUJfTkFWX0ZPUldBUkQgPSAnZm9yd2FyZCdcbmNvbnN0IFRBQl9OQVZfQkFDS1dBUkQgPSAnYmFja3dhcmQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGF1dG9mb2N1czogdHJ1ZSxcbiAgdHJhcEVsZW1lbnQ6IG51bGwgLy8gVGhlIGVsZW1lbnQgdG8gdHJhcCBmb2N1cyBpbnNpZGUgb2Zcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGF1dG9mb2N1czogJ2Jvb2xlYW4nLFxuICB0cmFwRWxlbWVudDogJ2VsZW1lbnQnXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEZvY3VzVHJhcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuYXV0b2ZvY3VzKSB7XG4gICAgICB0aGlzLl9jb25maWcudHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSkgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9oYW5kbGVGb2N1c2luKGV2ZW50KSlcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fVEFCLCBldmVudCA9PiB0aGlzLl9oYW5kbGVLZXlkb3duKGV2ZW50KSlcblxuICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZVxuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfS0VZKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaGFuZGxlRm9jdXNpbihldmVudCkge1xuICAgIGNvbnN0IHsgdHJhcEVsZW1lbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQgfHwgZXZlbnQudGFyZ2V0ID09PSB0cmFwRWxlbWVudCB8fCB0cmFwRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZvY3VzYWJsZUNoaWxkcmVuKHRyYXBFbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJhcEVsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9PT0gVEFCX05BVl9CQUNLV0FSRCkge1xuICAgICAgZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0uZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50c1swXS5mb2N1cygpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ICE9PSBUQUJfS0VZKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9sYXN0VGFiTmF2RGlyZWN0aW9uID0gZXZlbnQuc2hpZnRLZXkgPyBUQUJfTkFWX0JBQ0tXQVJEIDogVEFCX05BVl9GT1JXQVJEXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9jdXNUcmFwXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc2Nyb2xsQmFyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcbmNvbnN0IFBST1BFUlRZX1BBRERJTkcgPSAncGFkZGluZy1yaWdodCdcbmNvbnN0IFBST1BFUlRZX01BUkdJTiA9ICdtYXJnaW4tcmlnaHQnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbEJhckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5ib2R5XG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0V2lkdGgoKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgdGhpcy5fZGlzYWJsZU92ZXJGbG93KClcbiAgICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzIHRvIGtlZXAgc2hvd2luZyBmdWxsd2lkdGhcbiAgICB0aGlzLl9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTiwgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgUFJPUEVSVFlfUEFERElORylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgUFJPUEVSVFlfTUFSR0lOKVxuICB9XG5cbiAgaXNPdmVyZmxvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aCgpID4gMFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfZGlzYWJsZU92ZXJGbG93KCkge1xuICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKHRoaXMuX2VsZW1lbnQsICdvdmVyZmxvdycpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIH1cblxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFdpZHRoKClcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NhdmVJbml0aWFsQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YClcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrKHNlbGVjdG9yLCBtYW5pcHVsYXRpb25DYWxsQmFjaylcbiAgfVxuXG4gIF9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wZXJ0eSlcbiAgICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSwgYWN0dWFsVmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoc2VsZWN0b3IsIHN0eWxlUHJvcGVydHkpIHtcbiAgICBjb25zdCBtYW5pcHVsYXRpb25DYWxsQmFjayA9IGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gcmVtb3ZlIHRoZSBwcm9wZXJ0eSBpZiB0aGUgdmFsdWUgaXMgYG51bGxgOyB0aGUgdmFsdWUgY2FuIGFsc28gYmUgemVyb1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSlcbiAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVQcm9wZXJ0eSwgdmFsdWUpXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgY2FsbEJhY2spIHtcbiAgICBpZiAoaXNFbGVtZW50KHNlbGVjdG9yKSkge1xuICAgICAgY2FsbEJhY2soc2VsZWN0b3IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlbCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgY2FsbEJhY2soc2VsKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXJIZWxwZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AuanMnXG5pbXBvcnQgeyBlbmFibGVEaXNtaXNzVHJpZ2dlciB9IGZyb20gJy4vdXRpbC9jb21wb25lbnQtZnVuY3Rpb25zLmpzJ1xuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICcuL3V0aWwvZm9jdXN0cmFwLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBpc1JUTCwgaXNWaXNpYmxlLCByZWZsb3dcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuaW1wb3J0IFNjcm9sbEJhckhlbHBlciBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcubW9kYWwuc2hvdydcbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAgZm9jdXM6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBmb2N1czogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9mb2N1c3RyYXAgPSB0aGlzLl9pbml0aWFsaXplRm9jdXNUcmFwKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Njcm9sbEJhciA9IG5ldyBTY3JvbGxCYXJIZWxwZXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2Nyb2xsQmFyLmhpZGUoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csIEVWRU5UX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2RpYWxvZywgRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLCAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWUsXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAvLyB0cnkgdG8gYXBwZW5kIGR5bmFtaWMgbW9kYWxcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgIH0pXG5cbiAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmICF0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAvLyBhIGJhZCB0cmljayB0byBzZWdyZWdhdGUgY2xpY2tzIHRoYXQgbWF5IHN0YXJ0IGluc2lkZSBkaWFsb2cgYnV0IGVuZCBvdXRzaWRlLCBhbmQgYXZvaWQgbGlzdGVuIHRvIHNjcm9sbGJhciBjbGlja3NcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQyID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCB8fCB0aGlzLl9lbGVtZW50ICE9PSBldmVudDIudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoaXMuX3Njcm9sbEJhci5yZXNldCgpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IGluaXRpYWxPdmVyZmxvd1kgPSB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WVxuICAgIC8vIHJldHVybiBpZiB0aGUgZm9sbG93aW5nIGJhY2tncm91bmQgdHJhbnNpdGlvbiBoYXNuJ3QgeWV0IGNvbXBsZXRlZFxuICAgIGlmIChpbml0aWFsT3ZlcmZsb3dZID09PSAnaGlkZGVuJyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NUQVRJQykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gaW5pdGlhbE92ZXJmbG93WVxuICAgICAgfSwgdGhpcy5fZGlhbG9nKVxuICAgIH0sIHRoaXMuX2RpYWxvZylcblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gICAqL1xuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9zY3JvbGxCYXIuZ2V0V2lkdGgoKVxuICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwXG5cbiAgICBpZiAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgY29uc3QgcHJvcGVydHkgPSBpc1JUTCgpID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGlzUlRMKCkgPyAncGFkZGluZ1JpZ2h0JyA6ICdwYWRkaW5nTGVmdCdcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgbW9kYWwgdG9nZ2xlciB3aGlsZSBhbm90aGVyIG9uZSBpcyBvcGVuXG4gIGNvbnN0IGFscmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxyZWFkeU9wZW4pIHtcbiAgICBNb2RhbC5nZXRJbnN0YW5jZShhbHJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbmVuYWJsZURpc21pc3NUcmlnZ2VyKE1vZGFsKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihNb2RhbClcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCBGb2N1c1RyYXAgZnJvbSAnLi91dGlsL2ZvY3VzdHJhcC5qcydcbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCBTY3JvbGxCYXJIZWxwZXIgZnJvbSAnLi91dGlsL3Njcm9sbGJhci5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5jb25zdCBDTEFTU19OQU1FX0hJRElORyA9ICdoaWRpbmcnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ29mZmNhbnZhcy1iYWNrZHJvcCdcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fZm9jdXN0cmFwID0gdGhpcy5faW5pdGlhbGl6ZUZvY3VzVHJhcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLmhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsIHx8IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB0aGlzLl9mb2N1c3RyYXAuYWN0aXZhdGUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElESU5HKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1csIENMQVNTX05BTUVfSElESU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgbmV3IFNjcm9sbEJhckhlbHBlcigpLnJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgdGhpcy5fZm9jdXN0cmFwLmRlYWN0aXZhdGUoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIGNvbnN0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuXG4gICAgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgY29uc3QgaXNWaXNpYmxlID0gQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApXG5cbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGNsYXNzTmFtZTogQ0xBU1NfTkFNRV9CQUNLRFJPUCxcbiAgICAgIGlzVmlzaWJsZSxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogaXNWaXNpYmxlID8gY2xpY2tDYWxsYmFjayA6IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX2luaXRpYWxpemVGb2N1c1RyYXAoKSB7XG4gICAgcmV0dXJuIG5ldyBGb2N1c1RyYXAoe1xuICAgICAgdHJhcEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9KVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgIHRoaXMuZm9jdXMoKVxuICAgIH1cbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIGEgdG9nZ2xlciBvZiBhbiBvZmZjYW52YXMsIHdoaWxlIGFub3RoZXIgaXMgb3BlblxuICBjb25zdCBhbHJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFscmVhZHlPcGVuICYmIGFscmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxyZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHRhcmdldClcbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpKSB7XG4gICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpLnNob3coKVxuICB9XG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIFNlbGVjdG9yRW5naW5lLmZpbmQoJ1thcmlhLW1vZGFsXVtjbGFzcyo9c2hvd11bY2xhc3MqPW9mZmNhbnZhcy1dJykpIHtcbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuaGlkZSgpXG4gICAgfVxuICB9XG59KVxuXG5lbmFibGVEaXNtaXNzVHJpZ2dlcihPZmZjYW52YXMpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcylcblxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLy8ganMtZG9jcy1zdGFydCBhbGxvdy1saXN0XG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGQ6IFtdLFxuICBkaXY6IFtdLFxuICBkbDogW10sXG4gIGR0OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cbi8vIGpzLWRvY3MtZW5kIGFsbG93LWxpc3RcblxuY29uc3QgdXJpQXR0cmlidXRlcyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIFVSTHMgdGhhdCBhcmUgc2FmZSB3cnQuIFhTUyBpbiBVUkwgbmF2aWdhdGlvblxuICogY29udGV4dHMuXG4gKlxuICogU2hvdXQtb3V0IHRvIEFuZ3VsYXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzE1LjIuOC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50cyNMMzhcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vYmV0dGVyLXJlZ2V4XG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPyFqYXZhc2NyaXB0OikoPzpbYS16MC05Ky4tXSs6fFteJjovPyNdKig/OlsvPyNdfCQpKS9pXG5cbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cmlidXRlcy5oYXMoYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyaWJ1dGUubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIHJldHVybiBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0cmlidXRlUmVnZXggPT4gYXR0cmlidXRlUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgLnNvbWUocmVnZXggPT4gcmVnZXgudGVzdChhdHRyaWJ1dGVOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRnVuY3Rpb24pIHtcbiAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGdW5jdGlvbiAmJiB0eXBlb2Ygc2FuaXRpemVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZ1bmN0aW9uKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50TmFtZSA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhhbGxvd0xpc3QpLmluY2x1ZGVzKGVsZW1lbnROYW1lKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsZW1lbnQuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsZW1lbnROYW1lXSB8fCBbXSlcblxuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZUxpc3QpIHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3RlbXBsYXRlLWZhY3RvcnkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0LCBzYW5pdGl6ZUh0bWwgfSBmcm9tICcuL3Nhbml0aXplci5qcydcbmltcG9ydCB7IGV4ZWN1dGUsIGdldEVsZW1lbnQsIGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdUZW1wbGF0ZUZhY3RvcnknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgY29udGVudDoge30sIC8vIHsgc2VsZWN0b3IgOiB0ZXh0ICwgIHNlbGVjdG9yMiA6IHRleHQyICwgfVxuICBleHRyYUNsYXNzOiAnJyxcbiAgaHRtbDogZmFsc2UsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICB0ZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgY29udGVudDogJ29iamVjdCcsXG4gIGV4dHJhQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJ1xufVxuXG5jb25zdCBEZWZhdWx0Q29udGVudFR5cGUgPSB7XG4gIGVudHJ5OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9ufG51bGwpJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUZW1wbGF0ZUZhY3RvcnkgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLl9jb25maWcuY29udGVudClcbiAgICAgIC5tYXAoY29uZmlnID0+IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbmZpZykpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gIH1cblxuICBoYXNDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRlbnQoKS5sZW5ndGggPiAwXG4gIH1cblxuICBjaGFuZ2VDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9jaGVja0NvbnRlbnQoY29udGVudClcbiAgICB0aGlzLl9jb25maWcuY29udGVudCA9IHsgLi4udGhpcy5fY29uZmlnLmNvbnRlbnQsIC4uLmNvbnRlbnQgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICB0b0h0bWwoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wbGF0ZVdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZSh0aGlzLl9jb25maWcudGVtcGxhdGUpXG5cbiAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgdGV4dF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnLmNvbnRlbnQpKSB7XG4gICAgICB0aGlzLl9zZXRDb250ZW50KHRlbXBsYXRlV3JhcHBlciwgdGV4dCwgc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0ZW1wbGF0ZVdyYXBwZXIuY2hpbGRyZW5bMF1cbiAgICBjb25zdCBleHRyYUNsYXNzID0gdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmV4dHJhQ2xhc3MpXG5cbiAgICBpZiAoZXh0cmFDbGFzcykge1xuICAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzLnNwbGl0KCcgJykpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF90eXBlQ2hlY2tDb25maWcoY29uZmlnKSB7XG4gICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbmZpZy5jb250ZW50KVxuICB9XG5cbiAgX2NoZWNrQ29udGVudChhcmcpIHtcbiAgICBmb3IgKGNvbnN0IFtzZWxlY3RvciwgY29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoYXJnKSkge1xuICAgICAgc3VwZXIuX3R5cGVDaGVja0NvbmZpZyh7IHNlbGVjdG9yLCBlbnRyeTogY29udGVudCB9LCBEZWZhdWx0Q29udGVudFR5cGUpXG4gICAgfVxuICB9XG5cbiAgX3NldENvbnRlbnQodGVtcGxhdGUsIGNvbnRlbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3RvciwgdGVtcGxhdGUpXG5cbiAgICBpZiAoIXRlbXBsYXRlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGVudCA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGNvbnRlbnQpXG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgdGhpcy5fcHV0RWxlbWVudEluVGVtcGxhdGUoZ2V0RWxlbWVudChjb250ZW50KSwgdGVtcGxhdGVFbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fbWF5YmVTYW5pdGl6ZShjb250ZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuICB9XG5cbiAgX21heWJlU2FuaXRpemUoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSA/IHNhbml0aXplSHRtbChhcmcsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKSA6IGFyZ1xuICB9XG5cbiAgX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBleGVjdXRlKGFyZywgW3RoaXNdKVxuICB9XG5cbiAgX3B1dEVsZW1lbnRJblRlbXBsYXRlKGVsZW1lbnQsIHRlbXBsYXRlRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0ZW1wbGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBleGVjdXRlLCBmaW5kU2hhZG93Um9vdCwgZ2V0RWxlbWVudCwgZ2V0VUlELCBpc1JUTCwgbm9vcFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgeyBEZWZhdWx0QWxsb3dsaXN0IH0gZnJvbSAnLi91dGlsL3Nhbml0aXplci5qcydcbmltcG9ydCBUZW1wbGF0ZUZhY3RvcnkgZnJvbSAnLi91dGlsL3RlbXBsYXRlLWZhY3RvcnkuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUwgPSBgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gXG5cbmNvbnN0IEVWRU5UX01PREFMX0hJREUgPSAnaGlkZS5icy5tb2RhbCdcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gJ2hpZGUnXG5jb25zdCBFVkVOVF9ISURERU4gPSAnaGlkZGVuJ1xuY29uc3QgRVZFTlRfU0hPVyA9ICdzaG93J1xuY29uc3QgRVZFTlRfU0hPV04gPSAnc2hvd24nXG5jb25zdCBFVkVOVF9JTlNFUlRFRCA9ICdpbnNlcnRlZCdcbmNvbnN0IEVWRU5UX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgRVZFTlRfRk9DVVNJTiA9ICdmb2N1c2luJ1xuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSAnZm9jdXNvdXQnXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gJ21vdXNlZW50ZXInXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gJ21vdXNlbGVhdmUnXG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIGRlbGF5OiAwLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGh0bWw6IGZhbHNlLFxuICBvZmZzZXQ6IFswLCA2XSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdGl0bGU6ICcnLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZydcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG51bGxcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICF0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrXG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZW50ZXIoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpKVxuICAgIH1cblxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2lzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9TSE9XKSlcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gKHNoYWRvd1Jvb3QgfHwgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogdjYgcmVtb3ZlIHRoaXMgb3IgbWFrZSBpdCBvcHRpb25hbFxuICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcC5nZXRBdHRyaWJ1dGUoJ2lkJykpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0lOU0VSVEVEKSlcbiAgICB9XG5cbiAgICB0aGlzLl9wb3BwZXIgPSB0aGlzLl9jcmVhdGVQb3BwZXIodGlwKVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1dOKSlcblxuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0hvdmVyZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCB0aGlzLl9pc0FuaW1hdGVkKCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9ISURFKSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRpcEVsZW1lbnQoKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gbnVsbCAvLyBpdCBpcyBhIHRyaWNrIHRvIHN1cHBvcnQgbWFudWFsIHRyaWdnZXJpbmdcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJRERFTikpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIF9nZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy50aXApIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy5fY3JlYXRlVGlwRWxlbWVudCh0aGlzLl9uZXdDb250ZW50IHx8IHRoaXMuX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgX2NyZWF0ZVRpcEVsZW1lbnQoY29udGVudCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuX2dldFRlbXBsYXRlRmFjdG9yeShjb250ZW50KS50b0h0bWwoKVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgY2hlY2sgaW4gdjZcbiAgICBpZiAoIXRpcCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgICAvLyBUT0RPOiB2NiB0aGUgZm9sbG93aW5nIGNhbiBiZSBhY2hpZXZlZCB3aXRoIENTUyBvbmx5XG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoYGJzLSR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hdXRvYClcblxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSkudG9TdHJpbmcoKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLl9uZXdDb250ZW50ID0gY29udGVudFxuICAgIGlmICh0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VQb3BwZXIoKVxuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVGYWN0b3J5KSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkuY2hhbmdlQ29udGVudChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUZhY3RvcnkgPSBuZXcgVGVtcGxhdGVGYWN0b3J5KHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICAvLyB0aGUgYGNvbnRlbnRgIHZhciBoYXMgdG8gYmUgYWZ0ZXIgYHRoaXMuX2NvbmZpZ2BcbiAgICAgICAgLy8gdG8gb3ZlcnJpZGUgY29uZmlnLmNvbnRlbnQgaW4gY2FzZSBvZiBwb3BvdmVyXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGV4dHJhQ2xhc3M6IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlRmFjdG9yeVxuICB9XG5cbiAgX2dldENvbnRlbnRGb3JUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1NFTEVDVE9SX1RPT0xUSVBfSU5ORVJdOiB0aGlzLl9nZXRUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2dldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcudGl0bGUpIHx8IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldE9yQ3JlYXRlSW5zdGFuY2UoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmFuaW1hdGlvbiB8fCAodGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfaXNTaG93bigpIHtcbiAgICByZXR1cm4gdGhpcy50aXAgJiYgdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIF9jcmVhdGVQb3BwZXIodGlwKSB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZXhlY3V0ZSh0aGlzLl9jb25maWcucGxhY2VtZW50LCBbdGhpcywgdGlwLCB0aGlzLl9lbGVtZW50XSlcbiAgICBjb25zdCBhdHRhY2htZW50ID0gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgICByZXR1cm4gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGUoYXJnLCBbdGhpcy5fZWxlbWVudF0pXG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZVNldFBsYWNlbWVudCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2JlZm9yZU1haW4nLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFByZS1zZXQgUG9wcGVyJ3MgcGxhY2VtZW50IGF0dHJpYnV0ZSBpbiBvcmRlciB0byByZWFkIHRoZSBhcnJvdyBzaXplcyBwcm9wZXJseS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgUG9wcGVyIG1peGVzIHVwIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGRpbWVuc2lvbnMgc2luY2UgdGhlIGluaXRpYWwgYXJyb3cgc3R5bGUgaXMgZm9yIHRvcCBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRoaXMuX2dldFRpcEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCcsIGRhdGEuc3RhdGUucGxhY2VtZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi5leGVjdXRlKHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcsIFtkZWZhdWx0QnNQb3BwZXJDb25maWddKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdHJpZ2dlcnMpIHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9DTElDSyksIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC50b2dnbGUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VFTlRFUikgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTSU4pXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfTU9VU0VMRUFWRSkgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0ZPQ1VTT1VUKVxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID0gdHJ1ZVxuICAgICAgICAgIGNvbnRleHQuX2VudGVyKClcbiAgICAgICAgfSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuICAgICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXSA9XG4gICAgICAgICAgICBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG5cbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9NT0RBTCksIEVWRU5UX01PREFMX0hJREUsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlKSAvLyBETyBOT1QgVVNFIElULiBJcyBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXG4gIH1cblxuICBfZW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSB8fCB0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IHRydWVcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLnNob3coKVxuICAgICAgfVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKCkge1xuICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoaGFuZGxlciwgdGltZW91dClcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuX2FjdGl2ZVRyaWdnZXIpLmluY2x1ZGVzKHRydWUpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIGZvciAoY29uc3QgZGF0YUF0dHJpYnV0ZSBvZiBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykpIHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyaWJ1dGUpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cmlidXRlXVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICBjb25maWcgPSB0aGlzLl9tZXJnZUNvbmZpZ09iaihjb25maWcpXG4gICAgY29uZmlnID0gdGhpcy5fY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpXG4gICAgdGhpcy5fdHlwZUNoZWNrQ29uZmlnKGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uZmlnW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZy5zZWxlY3RvciA9IGZhbHNlXG4gICAgY29uZmlnLnRyaWdnZXIgPSAnbWFudWFsJ1xuXG4gICAgLy8gSW4gdGhlIGZ1dHVyZSBjYW4gYmUgcmVwbGFjZWQgd2l0aDpcbiAgICAvLyBjb25zdCBrZXlzV2l0aERpZmZlcmVudFZhbHVlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZykuZmlsdGVyKGVudHJ5ID0+IHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtlbnRyeVswXV0gIT09IHRoaXMuX2NvbmZpZ1tlbnRyeVswXV0pXG4gICAgLy8gYE9iamVjdC5mcm9tRW50cmllcyhrZXlzV2l0aERpZmZlcmVudFZhbHVlcylgXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2Rpc3Bvc2VQb3BwZXIoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAucmVtb3ZlKClcbiAgICAgIHRoaXMudGlwID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvb2x0aXAuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcC5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBjb250ZW50OiAnJyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnY2xpY2snXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKG51bGx8c3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBPdmVycmlkZXNcbiAgX2lzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9nZXRDb250ZW50Rm9yVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTRUxFQ1RPUl9USVRMRV06IHRoaXMuX2dldFRpdGxlKCksXG4gICAgICBbU0VMRUNUT1JfQ09OVEVOVF06IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbih0aGlzLl9jb25maWcuY29udGVudClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFBvcG92ZXIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldEVsZW1lbnQsIGlzRGlzYWJsZWQsIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX1RBUkdFVF9MSU5LUyA9ICdbaHJlZl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElOS19JVEVNUyA9IGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTkFWX0lURU1TfSA+ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWBcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IG51bGwsIC8vIFRPRE86IHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICcwcHggMHB4IC0yNSUnLFxuICBzbW9vdGhTY3JvbGw6IGZhbHNlLFxuICB0YXJnZXQ6IG51bGwsXG4gIHRocmVzaG9sZDogWzAuMSwgMC41LCAxXVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKG51bWJlcnxudWxsKScsIC8vIFRPRE8gdjYgQGRlcHJlY2F0ZWQsIGtlZXAgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnNcbiAgcm9vdE1hcmdpbjogJ3N0cmluZycsXG4gIHNtb290aFNjcm9sbDogJ2Jvb2xlYW4nLFxuICB0YXJnZXQ6ICdlbGVtZW50JyxcbiAgdGhyZXNob2xkOiAnYXJyYXknXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICAvLyB0aGlzLl9lbGVtZW50IGlzIHRoZSBvYnNlcnZhYmxlc0NvbnRhaW5lciBhbmQgY29uZmlnLnRhcmdldCB0aGUgbWVudSBsaW5rcyB3cmFwcGVyXG4gICAgdGhpcy5fdGFyZ2V0TGlua3MgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMgPSBuZXcgTWFwKClcbiAgICB0aGlzLl9yb290RWxlbWVudCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudCkub3ZlcmZsb3dZID09PSAndmlzaWJsZScgPyBudWxsIDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9vYnNlcnZlciA9IG51bGxcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEgPSB7XG4gICAgICB2aXNpYmxlRW50cnlUb3A6IDAsXG4gICAgICBwYXJlbnRTY3JvbGxUb3A6IDBcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCkgLy8gaW5pdGlhbGl6ZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVUYXJnZXRzQW5kT2JzZXJ2YWJsZXMoKVxuICAgIHRoaXMuX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKClcblxuICAgIGlmICh0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVyID0gdGhpcy5fZ2V0TmV3T2JzZXJ2ZXIoKVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiB0aGlzLl9vYnNlcnZhYmxlU2VjdGlvbnMudmFsdWVzKCkpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUoc2VjdGlvbilcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyBUT0RPOiBvbiB2NiB0YXJnZXQgc2hvdWxkIGJlIGdpdmVuIGV4cGxpY2l0bHkgJiByZW1vdmUgdGhlIHt0YXJnZXQ6ICdzcy10YXJnZXQnfSBjYXNlXG4gICAgY29uZmlnLnRhcmdldCA9IGdldEVsZW1lbnQoY29uZmlnLnRhcmdldCkgfHwgZG9jdW1lbnQuYm9keVxuXG4gICAgLy8gVE9ETzogdjYgT25seSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29ucy4gVXNlIHJvb3RNYXJnaW4gb25seVxuICAgIGNvbmZpZy5yb290TWFyZ2luID0gY29uZmlnLm9mZnNldCA/IGAke2NvbmZpZy5vZmZzZXR9cHggMHB4IC0zMCVgIDogY29uZmlnLnJvb3RNYXJnaW5cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRocmVzaG9sZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZy50aHJlc2hvbGQgPSBjb25maWcudGhyZXNob2xkLnNwbGl0KCcsJykubWFwKHZhbHVlID0+IE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVFbmFibGVTbW9vdGhTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc21vb3RoU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bnJlZ2lzdGVyIGFueSBwcmV2aW91cyBsaXN0ZW5lcnNcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2NvbmZpZy50YXJnZXQsIEVWRU5UX0NMSUNLLCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MsIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLmdldChldmVudC50YXJnZXQuaGFzaClcbiAgICAgIGlmIChvYnNlcnZhYmxlU2VjdGlvbikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9yb290RWxlbWVudCB8fCB3aW5kb3dcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb2JzZXJ2YWJsZVNlY3Rpb24ub2Zmc2V0VG9wIC0gdGhpcy5fZWxlbWVudC5vZmZzZXRUb3BcbiAgICAgICAgaWYgKHJvb3Quc2Nyb2xsVG8pIHtcbiAgICAgICAgICByb290LnNjcm9sbFRvKHsgdG9wOiBoZWlnaHQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hyb21lIDYwIGRvZXNuJ3Qgc3VwcG9ydCBgc2Nyb2xsVG9gXG4gICAgICAgIHJvb3Quc2Nyb2xsVG9wID0gaGVpZ2h0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9nZXROZXdPYnNlcnZlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcm9vdDogdGhpcy5fcm9vdEVsZW1lbnQsXG4gICAgICB0aHJlc2hvbGQ6IHRoaXMuX2NvbmZpZy50aHJlc2hvbGQsXG4gICAgICByb290TWFyZ2luOiB0aGlzLl9jb25maWcucm9vdE1hcmdpblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB0aGlzLl9vYnNlcnZlckNhbGxiYWNrKGVudHJpZXMpLCBvcHRpb25zKVxuICB9XG5cbiAgLy8gVGhlIGxvZ2ljIG9mIHNlbGVjdGlvblxuICBfb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGVudHJ5ID0+IHRoaXMuX3RhcmdldExpbmtzLmdldChgIyR7ZW50cnkudGFyZ2V0LmlkfWApXG4gICAgY29uc3QgYWN0aXZhdGUgPSBlbnRyeSA9PiB7XG4gICAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcFxuICAgICAgdGhpcy5fcHJvY2Vzcyh0YXJnZXRFbGVtZW50KGVudHJ5KSlcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRTY3JvbGxUb3AgPSAodGhpcy5fcm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5zY3JvbGxUb3BcbiAgICBjb25zdCB1c2VyU2Nyb2xsc0Rvd24gPSBwYXJlbnRTY3JvbGxUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnBhcmVudFNjcm9sbFRvcFxuICAgIHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3AgPSBwYXJlbnRTY3JvbGxUb3BcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICAgIHRoaXMuX2NsZWFyQWN0aXZlQ2xhc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzID0gZW50cnkudGFyZ2V0Lm9mZnNldFRvcCA+PSB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEudmlzaWJsZUVudHJ5VG9wXG4gICAgICAvLyBpZiB3ZSBhcmUgc2Nyb2xsaW5nIGRvd24sIHBpY2sgdGhlIGJpZ2dlciBvZmZzZXRUb3BcbiAgICAgIGlmICh1c2VyU2Nyb2xsc0Rvd24gJiYgZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgICAvLyBpZiBwYXJlbnQgaXNuJ3Qgc2Nyb2xsZWQsIGxldCdzIGtlZXAgdGhlIGZpcnN0IHZpc2libGUgaXRlbSwgYnJlYWtpbmcgdGhlIGl0ZXJhdGlvblxuICAgICAgICBpZiAoIXBhcmVudFNjcm9sbFRvcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyB1cCwgcGljayB0aGUgc21hbGxlc3Qgb2Zmc2V0VG9wXG4gICAgICBpZiAoIXVzZXJTY3JvbGxzRG93biAmJiAhZW50cnlJc0xvd2VyVGhhblByZXZpb3VzKSB7XG4gICAgICAgIGFjdGl2YXRlKGVudHJ5KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKCkge1xuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG5cbiAgICBjb25zdCB0YXJnZXRMaW5rcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVEFSR0VUX0xJTktTLCB0aGlzLl9jb25maWcudGFyZ2V0KVxuXG4gICAgZm9yIChjb25zdCBhbmNob3Igb2YgdGFyZ2V0TGlua3MpIHtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbmNob3IgaGFzIGFuIGlkIGFuZCBpcyBub3QgZGlzYWJsZWRcbiAgICAgIGlmICghYW5jaG9yLmhhc2ggfHwgaXNEaXNhYmxlZChhbmNob3IpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9ic2VydmFibGVTZWN0aW9uID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgb2JzZXJ2YWJsZVNlY3Rpb24gZXhpc3RzICYgaXMgdmlzaWJsZVxuICAgICAgaWYgKGlzVmlzaWJsZShvYnNlcnZhYmxlU2VjdGlvbikpIHtcbiAgICAgICAgdGhpcy5fdGFyZ2V0TGlua3Muc2V0KGRlY29kZVVSSShhbmNob3IuaGFzaCksIGFuY2hvcilcbiAgICAgICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnNldChhbmNob3IuaGFzaCwgb2JzZXJ2YWJsZVNlY3Rpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3Byb2Nlc3ModGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRoaXMuX2NvbmZpZy50YXJnZXQpXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdGhpcy5fYWN0aXZhdGVQYXJlbnRzKHRhcmdldClcblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7IHJlbGF0ZWRUYXJnZXQ6IHRhcmdldCB9KVxuICB9XG5cbiAgX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpIHtcbiAgICAvLyBBY3RpdmF0ZSBkcm9wZG93biBwYXJlbnRzXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIHRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RHcm91cCBvZiBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKHRhcmdldCwgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApKSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTElOS19JVEVNUykpIHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jbGVhckFjdGl2ZUNsYXNzKHBhcmVudCkge1xuICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlTm9kZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGAke1NFTEVDVE9SX1RBUkdFVF9MSU5LU30uJHtDTEFTU19OQU1FX0FDVElWRX1gLCBwYXJlbnQpXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGFjdGl2ZU5vZGVzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IHNweSBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKSkge1xuICAgIFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHNweSlcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4sIGdldE5leHRBY3RpdmVFbGVtZW50LCBpc0Rpc2FibGVkIH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX1gXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBIT01FX0tFWSA9ICdIb21lJ1xuY29uc3QgRU5EX0tFWSA9ICdFbmQnXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19EUk9QRE9XTiA9ICdkcm9wZG93bidcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgTk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9IGA6bm90KCR7U0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSlgXG5cbmNvbnN0IFNFTEVDVE9SX1RBQl9QQU5FTCA9ICcubGlzdC1ncm91cCwgLm5hdiwgW3JvbGU9XCJ0YWJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfT1VURVIgPSAnLm5hdi1pdGVtLCAubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSU5ORVIgPSBgLm5hdi1saW5rJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfSwgLmxpc3QtZ3JvdXAtaXRlbSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIFtyb2xlPVwidGFiXCJdJHtOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFfWBcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXScgLy8gVE9ETzogY291bGQgb25seSBiZSBgdGFiYCBpbiB2NlxuY29uc3QgU0VMRUNUT1JfSU5ORVJfRUxFTSA9IGAke1NFTEVDVE9SX0lOTkVSfSwgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSA9IGAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIC4ke0NMQVNTX05BTUVfQUNUSVZFfVtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl1gXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfVEFCX1BBTkVMKVxuXG4gICAgaWYgKCF0aGlzLl9wYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgICAgLy8gVE9ETzogc2hvdWxkIHRocm93IGV4Y2VwdGlvbiBpbiB2NlxuICAgICAgLy8gdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtlbGVtZW50Lm91dGVySFRNTH0gaGFzIG5vdCBhIHZhbGlkIHBhcmVudCAke1NFTEVDVE9SX0lOTkVSX0VMRU19YClcbiAgICB9XG5cbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBhcmlhIGF0dHJpYnV0ZXNcbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlcyh0aGlzLl9wYXJlbnQsIHRoaXMuX2dldENoaWxkcmVuKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coKSB7IC8vIFNob3dzIHRoaXMgZWxlbSBhbmQgZGVhY3RpdmF0ZSB0aGUgYWN0aXZlIHNpYmxpbmcgaWYgZXhpc3RzXG4gICAgY29uc3QgaW5uZXJFbGVtID0gdGhpcy5fZWxlbWVudFxuICAgIGlmICh0aGlzLl9lbGVtSXNBY3RpdmUoaW5uZXJFbGVtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIGZvciBhY3RpdmUgdGFiIG9uIHNhbWUgcGFyZW50IHRvIGRlYWN0aXZhdGUgaXRcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLl9nZXRBY3RpdmVFbGVtKClcblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IGFjdGl2ZSA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihhY3RpdmUsIEVWRU5UX0hJREUsIHsgcmVsYXRlZFRhcmdldDogaW5uZXJFbGVtIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKGlubmVyRWxlbSwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0OiBhY3RpdmUgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShhY3RpdmUsIGlubmVyRWxlbSlcbiAgICB0aGlzLl9hY3RpdmF0ZShpbm5lckVsZW0sIGFjdGl2ZSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2FjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICB0aGlzLl9hY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGFjdGl2YXRlL3Nob3cgdGhlIHByb3BlciBzZWN0aW9uXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICAgIHRoaXMuX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIHRydWUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2RlYWN0aXZhdGUoZWxlbWVudCwgcmVsYXRlZEVsZW0pIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBlbGVtZW50LmJsdXIoKVxuXG4gICAgdGhpcy5fZGVhY3RpdmF0ZShTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpKSAvLyBTZWFyY2ggYW5kIGRlYWN0aXZhdGUgdGhlIHNob3duIHNlY3Rpb24gdG9vXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpICE9PSAndGFiJykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCBmYWxzZSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgeyByZWxhdGVkVGFyZ2V0OiByZWxhdGVkRWxlbSB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICghKFtBUlJPV19MRUZUX0tFWSwgQVJST1dfUklHSFRfS0VZLCBBUlJPV19VUF9LRVksIEFSUk9XX0RPV05fS0VZLCBIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLy8gc3RvcFByb3BhZ2F0aW9uL3ByZXZlbnREZWZhdWx0IGJvdGggYWRkZWQgdG8gc3VwcG9ydCB1cC9kb3duIGtleXMgd2l0aG91dCBzY3JvbGxpbmcgdGhlIHBhZ2VcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldENoaWxkcmVuKCkuZmlsdGVyKGVsZW1lbnQgPT4gIWlzRGlzYWJsZWQoZWxlbWVudCkpXG4gICAgbGV0IG5leHRBY3RpdmVFbGVtZW50XG5cbiAgICBpZiAoW0hPTUVfS0VZLCBFTkRfS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGNoaWxkcmVuW2V2ZW50LmtleSA9PT0gSE9NRV9LRVkgPyAwIDogY2hpbGRyZW4ubGVuZ3RoIC0gMV1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNOZXh0ID0gW0FSUk9XX1JJR0hUX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50ID0gZ2V0TmV4dEFjdGl2ZUVsZW1lbnQoY2hpbGRyZW4sIGV2ZW50LnRhcmdldCwgaXNOZXh0LCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChuZXh0QWN0aXZlRWxlbWVudCkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShuZXh0QWN0aXZlRWxlbWVudCkuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgX2dldENoaWxkcmVuKCkgeyAvLyBjb2xsZWN0aW9uIG9mIGlubmVyIGVsZW1lbnRzXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ORVJfRUxFTSwgdGhpcy5fcGFyZW50KVxuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldENoaWxkcmVuKCkuZmluZChjaGlsZCA9PiB0aGlzLl9lbGVtSXNBY3RpdmUoY2hpbGQpKSB8fCBudWxsXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXMocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHBhcmVudCwgJ3JvbGUnLCAndGFibGlzdCcpXG5cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25DaGlsZChjaGlsZCkge1xuICAgIGNoaWxkID0gdGhpcy5fZ2V0SW5uZXJFbGVtZW50KGNoaWxkKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKVxuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChjaGlsZClcbiAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBpc0FjdGl2ZSlcblxuICAgIGlmIChvdXRlckVsZW0gIT09IGNoaWxkKSB7XG4gICAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhvdXRlckVsZW0sICdyb2xlJywgJ3ByZXNlbnRhdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMoY2hpbGQsICdyb2xlJywgJ3RhYicpXG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyB0byB0aGUgcmVsYXRlZCBwYW5lbCB0b29cbiAgICB0aGlzLl9zZXRJbml0aWFsQXR0cmlidXRlc09uVGFyZ2V0UGFuZWwoY2hpbGQpXG4gIH1cblxuICBfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihjaGlsZClcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyh0YXJnZXQsICdyb2xlJywgJ3RhYnBhbmVsJylcblxuICAgIGlmIChjaGlsZC5pZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAnYXJpYS1sYWJlbGxlZGJ5JywgYCR7Y2hpbGQuaWR9YClcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgb3Blbikge1xuICAgIGNvbnN0IG91dGVyRWxlbSA9IHRoaXMuX2dldE91dGVyRWxlbWVudChlbGVtZW50KVxuICAgIGlmICghb3V0ZXJFbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19EUk9QRE9XTikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZSA9IChzZWxlY3RvciwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShzZWxlY3Rvciwgb3V0ZXJFbGVtKVxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSwgb3BlbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBDTEFTU19OQU1FX0FDVElWRSlcbiAgICB0b2dnbGUoU0VMRUNUT1JfRFJPUERPV05fTUVOVSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIG91dGVyRWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuKVxuICB9XG5cbiAgX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpXG4gICAgfVxuICB9XG5cbiAgX2VsZW1Jc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKVxuICB9XG5cbiAgLy8gVHJ5IHRvIGdldCB0aGUgaW5uZXIgZWxlbWVudCAodXN1YWxseSB0aGUgLm5hdi1saW5rKVxuICBfZ2V0SW5uZXJFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5tYXRjaGVzKFNFTEVDVE9SX0lOTkVSX0VMRU0pID8gZWxlbSA6IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ORVJfRUxFTSwgZWxlbSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIG91dGVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtaXRlbSlcbiAgX2dldE91dGVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xvc2VzdChTRUxFQ1RPUl9PVVRFUikgfHwgZWxlbVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzKS5zaG93KClcbn0pXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBvbiBmb2N1c1xuICovXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSkpIHtcbiAgICBUYWIuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50KVxuICB9XG59KVxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50LmpzJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IHsgZW5hYmxlRGlzbWlzc1RyaWdnZXIgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcydcbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiwgcmVmbG93IH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJyAvLyBAZGVwcmVjYXRlZCAtIGtlcHQgaGVyZSBvbmx5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpIC8vIEBkZXByZWNhdGVkXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVywgQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKSAvLyBAZGVwcmVjYXRlZFxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORywgQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLmlzU2hvd24oKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIGlzU2hvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICB9XG5cbiAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICBjYXNlICdtb3VzZW91dCc6IHtcbiAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICBjYXNlICdmb2N1c291dCc6IHtcbiAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgPT09IG5leHRFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQuY29udGFpbnMobmV4dEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgfVxuXG4gIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRvYXN0LmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoVG9hc3QpXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwgIi8qIVxyXG4gKiBTZWFyY2ggbW9kYWwgZm9yIEJvb3RzdHJhcCBiYXNlZCBUaHVsaXRlIHNpdGVzXHJcbiAqIENvcHlyaWdodCAyMDIxLTIwMjQgVGh1bGl0ZVxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2Jvb3RzdHJhcCc7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIERlY2xhcmUgc2VhcmNoIGVsZW1lbnRzXHJcbiAgICBjb25zdCBzZWFyY2hUb2dnbGVNb2JpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVG9nZ2xlTW9iaWxlJyk7XHJcbiAgICBjb25zdCBzZWFyY2hUb2dnbGVEZXNrdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRvZ2dsZURlc2t0b3AnKTtcclxuICAgIGNvbnN0IHNlYXJjaE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaE1vZGFsJyk7XHJcbiAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVyeScpO1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hSZXN1bHRzJyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHNlYXJjaCBtb2RhbFxyXG4gICAgY29uc3QgZmxleFNlYXJjaE1vZGFsID0gbmV3IE1vZGFsKHNlYXJjaE1vZGFsLCB7XHJcbiAgICAgICAgZm9jdXM6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNob3cgc2VhcmNoIG1vZGFsIHdoZW4gc2VhcmNoIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICBzZWFyY2hUb2dnbGVNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWxPbkNsaWNrKTtcclxuICAgIHNlYXJjaFRvZ2dsZURlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWxPbkNsaWNrKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TW9kYWxPbkNsaWNrKCkge1xyXG4gICAgICAgIGZsZXhTZWFyY2hNb2RhbC50b2dnbGUoKTtcclxuICAgICAgICAvLyBTaG93IG1lc3NhZ2UgXCJObyByZWNlbnQgc2VhcmNoZXNcIlxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVjZW50JykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIGtleWJvYXJkIHNob3J0Y3V0c1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bkhhbmRsZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uS2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICAvLyBTaG93IHNlYXJjaCBtb2RhbCB3aGVuIFwiQ3RybCArIGtcIiBpcyBwcmVzc2VkXHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQua2V5ID09PSAnaycpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZmxleFNlYXJjaE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgaW5wdXQgZmllbGQgYW5kIHNlYXJjaCByZXN1bHRzXHJcbiAgICAgICAgICAgIHNlYXJjaEZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAvLyBTaG93IG1lc3NhZ2UgXCJObyByZWNlbnQgc2VhcmNoZXNcIlxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGVhciBpbnB1dCBmaWVsZCBhbmQgc2VhcmNoIHJlc3VsdHMgd2hlbiBcIkVzY1wiIGlzIHByZXNzZWRcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICBzZWFyY2hGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGNsYXNzIFwic2VsZWN0ZWRcIiBvbiBzZWFyY2ggcmVzdWx0IGFuZCByZXNldCBpbmRleCBzZWFyY2ggcmVzdWx0c1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVzdWx0U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSGlkZSBtZXNzYWdlIFwiTm8gc2VhcmNoIHJlc3VsdHNcIlxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlc3VsdHMnKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIGNsaWNraW5nIG9uIG1vZGFsIGJhY2tkcm9wXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIENsZWFyIGlucHV0IGZpZWxkIGFuZCBzZWFyY2ggcmVzdWx0cyB3aGVuIGNsaWNraW5nIG9uIG1vZGFsIGJhY2tkcm9wXHJcbiAgICAgICAgdmFyIG1vZGFsRWxlbWVudCA9IHNlYXJjaE1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFtb2RhbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc2VhcmNoRm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIC8vIEhpZGUgbWVzc2FnZSBcIk5vIHNlYXJjaCByZXN1bHRzXCJcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZXN1bHRzJykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSBjbGFzcyBcInNlbGVjdGVkXCIgb24gc2VhcmNoIHJlc3VsdCBhbmQgcmVzZXQgaW5kZXggc2VhcmNoIHJlc3VsdHNcclxuICAgICAgICBpZiAoc2VhcmNoUmVzdWx0U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICBpbmRleCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZWxlbWVudCB3aGVuIHRoZSBzZWFyY2ggbW9kYWwgaXMgc2hvd25cclxuICAgIHNlYXJjaE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIYW5kbGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBzZWFyY2ggcmVzdWx0c1xyXG4gICAgLy8gQmFzZWQgb24gaHR0cHM6Ly9jb2RlcGVuLmlvL21laHVsZGVzaWduL3Blbi9lWXBiWE1nXHJcbiAgICB2YXIgc2VhcmNoUmVzdWx0U2VsZWN0ZWQ7XHJcbiAgICB2YXIgaW5kZXggPSAtMTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICdrZXlkb3duJyxcclxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IHNlYXJjaFJlc3VsdHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FydGljbGUnKS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hSZXN1bHRTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gc2VhcmNoUmVzdWx0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXJ0aWNsZScpW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5leHQgIT09ICd1bmRlZmluZWQnICYmIGluZGV4IDw9IGxlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZCA9IHNlYXJjaFJlc3VsdHMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FydGljbGUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkID0gc2VhcmNoUmVzdWx0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXJ0aWNsZScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFJlc3VsdFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBzZWFyY2hSZXN1bHRzLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhcnRpY2xlJylbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV4dCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBsZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkID0gc2VhcmNoUmVzdWx0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXJ0aWNsZScpW2xlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkID0gc2VhcmNoUmVzdWx0cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYXJ0aWNsZScpW2xlbl07XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2VhcmNoUmVzdWx0U2VsZWN0ZWQsICdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGZvY3VzIG9uIHNlbGVjdGVkIHNlYXJjaCByZXN1bHRcclxuICAgICAgICBzZWFyY2hSZXN1bHRTZWxlY3RlZC5xdWVyeVNlbGVjdG9yKCdhJykuYmx1cigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXQgZm9jdXMgb24gc2VsZWN0ZWQgc2VhcmNoIHJlc3VsdFxyXG4gICAgICAgIHNlYXJjaFJlc3VsdFNlbGVjdGVkLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBtb3VzZSBuYXZpZ2F0aW9uIHNlYXJjaCByZXN1bHRzXHJcbiAgICBzZWFyY2hSZXN1bHRzLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgJ21vdXNlb3ZlcicsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoUmVzdWx0U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNlYXJjaFJlc3VsdFNlbGVjdGVkLCAnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcbn0pKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQUFBO0FBQUEsSUFBQTtBQUFBLDRCQUFBQTtBQUFBLElBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQU8sTUFBSSxNQUFNO0FBQ1YsTUFBSSxTQUFTO0FBQ2IsTUFBSSxRQUFRO0FBQ1osTUFBSSxPQUFPO0FBQ1gsTUFBSSxPQUFPO0FBQ1gsTUFBSSxpQkFBaUIsQ0FBQyxLQUFLLFFBQVEsT0FBTyxJQUFJO0FBQzlDLE1BQUksUUFBUTtBQUNaLE1BQUksTUFBTTtBQUNWLE1BQUksa0JBQWtCO0FBQ3RCLE1BQUksV0FBVztBQUNmLE1BQUksU0FBUztBQUNiLE1BQUksWUFBWTtBQUNoQixNQUFJLHNCQUFtQywrQkFBZSxPQUFPLFNBQVUsS0FBSyxXQUFXO0FBQzVGLFdBQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLEdBQUcsQ0FBQztBQUFBLEVBQ3BFLEdBQUcsQ0FBQyxDQUFDO0FBQ0UsTUFBSSxhQUEwQixpQkFBQyxFQUFFLE9BQU8sZ0JB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O0FBQUEsTUFDckg7QUFFQSwyQkFBcUIsY0FBYyxHQUFHLEVBQUUsS0FBSztBQUFBLElBQ2pEO0FBRUEsYUFBUyxTQUFTLElBQUksV0FBVztBQUM3QixVQUFJLEdBQUcsV0FBVztBQUNkLFdBQUcsVUFBVSxJQUFJLFNBQVM7QUFBQSxNQUM5QixPQUFPO0FBQ0gsV0FBRyxhQUFhLE1BQU07QUFBQSxNQUMxQjtBQUVBLDJCQUFxQixjQUFjLEdBQUcsRUFBRSxNQUFNO0FBQUEsSUFDbEQ7QUFHQSxrQkFBYztBQUFBLE1BQ1Y7QUFBQSxNQUNBLE1BQU07QUFDRixZQUFJLHNCQUFzQjtBQUN0QixzQkFBWSxzQkFBc0IsVUFBVTtBQUFBLFFBQ2hEO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxJQUNKO0FBQUEsRUFDSixHQUFHOyIsCiAgIm5hbWVzIjogWyJjcmVhdGVQb3BwZXIiLCAibmFtZSIsICJzdHlsZSIsICJnZXRDb21wdXRlZFN0eWxlIiwgImdldENvbXB1dGVkU3R5bGUiLCAid2luZG93IiwgIm1pbiIsICJtYXgiLCAidG9QYWRkaW5nT2JqZWN0IiwgInBvcHBlck9mZnNldHMiLCAibWluIiwgIm1heCIsICJvZmZzZXQiLCAiZWZmZWN0IiwgInBvcHBlciIsICJnZXRDb21wdXRlZFN0eWxlIiwgImVmZmVjdCIsICJ3aW5kb3ciLCAiaGFzaCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImdldENvbXB1dGVkU3R5bGUiLCAiY2xpcHBpbmdQYXJlbnRzIiwgImdldENvbXB1dGVkU3R5bGUiLCAicmVmZXJlbmNlIiwgInBvcHBlck9mZnNldHMiLCAib2Zmc2V0IiwgInBsYWNlbWVudHMiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAicGxhY2VtZW50IiwgIl9sb29wIiwgIl9pIiwgImNoZWNrcyIsICJvZmZzZXQiLCAicG9wcGVyT2Zmc2V0cyIsICJvZmZzZXQiLCAibWluIiwgIm1heCIsICJmbiIsICJtZXJnZWQiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJjcmVhdGVQb3BwZXIiLCAicmVmZXJlbmNlIiwgInBvcHBlciIsICJvcHRpb25zIiwgImZuIiwgInN0YXRlIiwgImVmZmVjdCIsICJub29wRm4iLCAiY3JlYXRlUG9wcGVyIiwgImRlZmF1bHRNb2RpZmllcnMiLCAiY3JlYXRlUG9wcGVyIiwgImVsZW1lbnRNYXAiLCAiTWFwIiwgInNldCIsICJlbGVtZW50IiwgImtleSIsICJpbnN0YW5jZSIsICJoYXMiLCAiaW5zdGFuY2VNYXAiLCAiZ2V0IiwgInNpemUiLCAiY29uc29sZSIsICJlcnJvciIsICJBcnJheSIsICJmcm9tIiwgImtleXMiLCAicmVtb3ZlIiwgImRlbGV0ZSIsICJNQVhfVUlEIiwgIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwgIlRSQU5TSVRJT05fRU5EIiwgInBhcnNlU2VsZWN0b3IiLCAic2VsZWN0b3IiLCAid2luZG93IiwgIkNTUyIsICJlc2NhcGUiLCAicmVwbGFjZSIsICJtYXRjaCIsICJpZCIsICJ0b1R5cGUiLCAib2JqZWN0IiwgInVuZGVmaW5lZCIsICJPYmplY3QiLCAicHJvdG90eXBlIiwgInRvU3RyaW5nIiwgImNhbGwiLCAidG9Mb3dlckNhc2UiLCAiZ2V0VUlEIiwgInByZWZpeCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJkb2N1bWVudCIsICJnZXRFbGVtZW50QnlJZCIsICJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsICJ0cmFuc2l0aW9uRHVyYXRpb24iLCAidHJhbnNpdGlvbkRlbGF5IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCAic3BsaXQiLCAidHJpZ2dlclRyYW5zaXRpb25FbmQiLCAiZGlzcGF0Y2hFdmVudCIsICJFdmVudCIsICJpc0VsZW1lbnQiLCAianF1ZXJ5IiwgIm5vZGVUeXBlIiwgImdldEVsZW1lbnQiLCAibGVuZ3RoIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaXNWaXNpYmxlIiwgImdldENsaWVudFJlY3RzIiwgImVsZW1lbnRJc1Zpc2libGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJjbG9zZWREZXRhaWxzIiwgImNsb3Nlc3QiLCAic3VtbWFyeSIsICJwYXJlbnROb2RlIiwgImlzRGlzYWJsZWQiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgImRpc2FibGVkIiwgImhhc0F0dHJpYnV0ZSIsICJnZXRBdHRyaWJ1dGUiLCAiZmluZFNoYWRvd1Jvb3QiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dGFjaFNoYWRvdyIsICJnZXRSb290Tm9kZSIsICJyb290IiwgIlNoYWRvd1Jvb3QiLCAibm9vcCIsICJyZWZsb3ciLCAib2Zmc2V0SGVpZ2h0IiwgImdldGpRdWVyeSIsICJqUXVlcnkiLCAiYm9keSIsICJET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzIiwgIm9uRE9NQ29udGVudExvYWRlZCIsICJjYWxsYmFjayIsICJyZWFkeVN0YXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicHVzaCIsICJpc1JUTCIsICJkaXIiLCAiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwgInBsdWdpbiIsICIkIiwgIm5hbWUiLCAiTkFNRSIsICJKUVVFUllfTk9fQ09ORkxJQ1QiLCAiZm4iLCAialF1ZXJ5SW50ZXJmYWNlIiwgIkNvbnN0cnVjdG9yIiwgIm5vQ29uZmxpY3QiLCAiZXhlY3V0ZSIsICJwb3NzaWJsZUNhbGxiYWNrIiwgImFyZ3MiLCAiZGVmYXVsdFZhbHVlIiwgImV4ZWN1dGVBZnRlclRyYW5zaXRpb24iLCAidHJhbnNpdGlvbkVsZW1lbnQiLCAid2FpdEZvclRyYW5zaXRpb24iLCAiZHVyYXRpb25QYWRkaW5nIiwgImVtdWxhdGVkRHVyYXRpb24iLCAiY2FsbGVkIiwgImhhbmRsZXIiLCAidGFyZ2V0IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAic2V0VGltZW91dCIsICJnZXROZXh0QWN0aXZlRWxlbWVudCIsICJsaXN0IiwgImFjdGl2ZUVsZW1lbnQiLCAic2hvdWxkR2V0TmV4dCIsICJpc0N5Y2xlQWxsb3dlZCIsICJsaXN0TGVuZ3RoIiwgImluZGV4IiwgImluZGV4T2YiLCAibWF4IiwgIm1pbiIsICJuYW1lc3BhY2VSZWdleCIsICJzdHJpcE5hbWVSZWdleCIsICJzdHJpcFVpZFJlZ2V4IiwgImV2ZW50UmVnaXN0cnkiLCAidWlkRXZlbnQiLCAiY3VzdG9tRXZlbnRzIiwgIm1vdXNlZW50ZXIiLCAibW91c2VsZWF2ZSIsICJuYXRpdmVFdmVudHMiLCAiU2V0IiwgIm1ha2VFdmVudFVpZCIsICJ1aWQiLCAiZ2V0RWxlbWVudEV2ZW50cyIsICJib290c3RyYXBIYW5kbGVyIiwgImV2ZW50IiwgImh5ZHJhdGVPYmoiLCAiZGVsZWdhdGVUYXJnZXQiLCAib25lT2ZmIiwgIkV2ZW50SGFuZGxlciIsICJvZmYiLCAidHlwZSIsICJhcHBseSIsICJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsICJkb21FbGVtZW50cyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImRvbUVsZW1lbnQiLCAiZmluZEhhbmRsZXIiLCAiZXZlbnRzIiwgImNhbGxhYmxlIiwgImRlbGVnYXRpb25TZWxlY3RvciIsICJ2YWx1ZXMiLCAiZmluZCIsICJub3JtYWxpemVQYXJhbWV0ZXJzIiwgIm9yaWdpbmFsVHlwZUV2ZW50IiwgImRlbGVnYXRpb25GdW5jdGlvbiIsICJpc0RlbGVnYXRlZCIsICJ0eXBlRXZlbnQiLCAiZ2V0VHlwZUV2ZW50IiwgImFkZEhhbmRsZXIiLCAid3JhcEZ1bmN0aW9uIiwgInJlbGF0ZWRUYXJnZXQiLCAiaGFuZGxlcnMiLCAicHJldmlvdXNGdW5jdGlvbiIsICJyZW1vdmVIYW5kbGVyIiwgIkJvb2xlYW4iLCAicmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzIiwgIm5hbWVzcGFjZSIsICJzdG9yZUVsZW1lbnRFdmVudCIsICJoYW5kbGVyS2V5IiwgImVudHJpZXMiLCAiaW5jbHVkZXMiLCAib24iLCAib25lIiwgImluTmFtZXNwYWNlIiwgImlzTmFtZXNwYWNlIiwgInN0YXJ0c1dpdGgiLCAiZWxlbWVudEV2ZW50IiwgInNsaWNlIiwgImtleUhhbmRsZXJzIiwgInRyaWdnZXIiLCAialF1ZXJ5RXZlbnQiLCAiYnViYmxlcyIsICJuYXRpdmVEaXNwYXRjaCIsICJkZWZhdWx0UHJldmVudGVkIiwgImlzUHJvcGFnYXRpb25TdG9wcGVkIiwgImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwgImlzRGVmYXVsdFByZXZlbnRlZCIsICJldnQiLCAiY2FuY2VsYWJsZSIsICJwcmV2ZW50RGVmYXVsdCIsICJvYmoiLCAibWV0YSIsICJ2YWx1ZSIsICJfdW51c2VkIiwgImRlZmluZVByb3BlcnR5IiwgImNvbmZpZ3VyYWJsZSIsICJub3JtYWxpemVEYXRhIiwgIkpTT04iLCAicGFyc2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIm5vcm1hbGl6ZURhdGFLZXkiLCAiY2hyIiwgIk1hbmlwdWxhdG9yIiwgInNldERhdGFBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZURhdGFBdHRyaWJ1dGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgImdldERhdGFBdHRyaWJ1dGVzIiwgImF0dHJpYnV0ZXMiLCAiYnNLZXlzIiwgImRhdGFzZXQiLCAiZmlsdGVyIiwgInB1cmVLZXkiLCAiY2hhckF0IiwgImdldERhdGFBdHRyaWJ1dGUiLCAiQ29uZmlnIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiRXJyb3IiLCAiX2dldENvbmZpZyIsICJjb25maWciLCAiX21lcmdlQ29uZmlnT2JqIiwgIl9jb25maWdBZnRlck1lcmdlIiwgIl90eXBlQ2hlY2tDb25maWciLCAianNvbkNvbmZpZyIsICJjb25zdHJ1Y3RvciIsICJjb25maWdUeXBlcyIsICJwcm9wZXJ0eSIsICJleHBlY3RlZFR5cGVzIiwgInZhbHVlVHlwZSIsICJSZWdFeHAiLCAidGVzdCIsICJUeXBlRXJyb3IiLCAidG9VcHBlckNhc2UiLCAiVkVSU0lPTiIsICJCYXNlQ29tcG9uZW50IiwgIl9lbGVtZW50IiwgIl9jb25maWciLCAiRGF0YSIsICJEQVRBX0tFWSIsICJkaXNwb3NlIiwgIkVWRU5UX0tFWSIsICJwcm9wZXJ0eU5hbWUiLCAiZ2V0T3duUHJvcGVydHlOYW1lcyIsICJfcXVldWVDYWxsYmFjayIsICJpc0FuaW1hdGVkIiwgImdldEluc3RhbmNlIiwgImdldE9yQ3JlYXRlSW5zdGFuY2UiLCAiZXZlbnROYW1lIiwgImdldFNlbGVjdG9yIiwgImhyZWZBdHRyaWJ1dGUiLCAidHJpbSIsICJtYXAiLCAic2VsIiwgImpvaW4iLCAiU2VsZWN0b3JFbmdpbmUiLCAiY29uY2F0IiwgIkVsZW1lbnQiLCAiZmluZE9uZSIsICJjaGlsZHJlbiIsICJjaGlsZCIsICJtYXRjaGVzIiwgInBhcmVudHMiLCAiYW5jZXN0b3IiLCAicHJldiIsICJwcmV2aW91cyIsICJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwgIm5leHQiLCAibmV4dEVsZW1lbnRTaWJsaW5nIiwgImZvY3VzYWJsZUNoaWxkcmVuIiwgImZvY3VzYWJsZXMiLCAiZWwiLCAiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsICJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwgImdldE11bHRpcGxlRWxlbWVudHNGcm9tU2VsZWN0b3IiLCAiZW5hYmxlRGlzbWlzc1RyaWdnZXIiLCAiY29tcG9uZW50IiwgIm1ldGhvZCIsICJjbGlja0V2ZW50IiwgInRhZ05hbWUiLCAiRVZFTlRfQ0xPU0UiLCAiRVZFTlRfQ0xPU0VEIiwgIkNMQVNTX05BTUVfRkFERSIsICJDTEFTU19OQU1FX1NIT1ciLCAiQWxlcnQiLCAiY2xvc2UiLCAiY2xvc2VFdmVudCIsICJfZGVzdHJveUVsZW1lbnQiLCAiZWFjaCIsICJkYXRhIiwgIkRBVEFfQVBJX0tFWSIsICJDTEFTU19OQU1FX0FDVElWRSIsICJTRUxFQ1RPUl9EQVRBX1RPR0dMRSIsICJFVkVOVF9DTElDS19EQVRBX0FQSSIsICJCdXR0b24iLCAidG9nZ2xlIiwgImJ1dHRvbiIsICJFVkVOVF9UT1VDSFNUQVJUIiwgIkVWRU5UX1RPVUNITU9WRSIsICJFVkVOVF9UT1VDSEVORCIsICJFVkVOVF9QT0lOVEVSRE9XTiIsICJFVkVOVF9QT0lOVEVSVVAiLCAiUE9JTlRFUl9UWVBFX1RPVUNIIiwgIlBPSU5URVJfVFlQRV9QRU4iLCAiQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UIiwgIlNXSVBFX1RIUkVTSE9MRCIsICJlbmRDYWxsYmFjayIsICJsZWZ0Q2FsbGJhY2siLCAicmlnaHRDYWxsYmFjayIsICJTd2lwZSIsICJpc1N1cHBvcnRlZCIsICJfZGVsdGFYIiwgIl9zdXBwb3J0UG9pbnRlckV2ZW50cyIsICJQb2ludGVyRXZlbnQiLCAiX2luaXRFdmVudHMiLCAiX3N0YXJ0IiwgInRvdWNoZXMiLCAiY2xpZW50WCIsICJfZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaCIsICJfZW5kIiwgIl9oYW5kbGVTd2lwZSIsICJfbW92ZSIsICJhYnNEZWx0YVgiLCAiYWJzIiwgImRpcmVjdGlvbiIsICJhZGQiLCAicG9pbnRlclR5cGUiLCAibmF2aWdhdG9yIiwgIm1heFRvdWNoUG9pbnRzIiwgIkFSUk9XX0xFRlRfS0VZIiwgIkFSUk9XX1JJR0hUX0tFWSIsICJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwgIk9SREVSX05FWFQiLCAiT1JERVJfUFJFViIsICJESVJFQ1RJT05fTEVGVCIsICJESVJFQ1RJT05fUklHSFQiLCAiRVZFTlRfU0xJREUiLCAiRVZFTlRfU0xJRCIsICJFVkVOVF9LRVlET1dOIiwgIkVWRU5UX01PVVNFRU5URVIiLCAiRVZFTlRfTU9VU0VMRUFWRSIsICJFVkVOVF9EUkFHX1NUQVJUIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9DQVJPVVNFTCIsICJDTEFTU19OQU1FX1NMSURFIiwgIkNMQVNTX05BTUVfRU5EIiwgIkNMQVNTX05BTUVfU1RBUlQiLCAiQ0xBU1NfTkFNRV9ORVhUIiwgIkNMQVNTX05BTUVfUFJFViIsICJTRUxFQ1RPUl9BQ1RJVkUiLCAiU0VMRUNUT1JfSVRFTSIsICJTRUxFQ1RPUl9BQ1RJVkVfSVRFTSIsICJTRUxFQ1RPUl9JVEVNX0lNRyIsICJTRUxFQ1RPUl9JTkRJQ0FUT1JTIiwgIlNFTEVDVE9SX0RBVEFfU0xJREUiLCAiU0VMRUNUT1JfREFUQV9SSURFIiwgIktFWV9UT19ESVJFQ1RJT04iLCAiaW50ZXJ2YWwiLCAia2V5Ym9hcmQiLCAicGF1c2UiLCAicmlkZSIsICJ0b3VjaCIsICJ3cmFwIiwgIkNhcm91c2VsIiwgIl9pbnRlcnZhbCIsICJfYWN0aXZlRWxlbWVudCIsICJfaXNTbGlkaW5nIiwgInRvdWNoVGltZW91dCIsICJfc3dpcGVIZWxwZXIiLCAiX2luZGljYXRvcnNFbGVtZW50IiwgIl9hZGRFdmVudExpc3RlbmVycyIsICJjeWNsZSIsICJfc2xpZGUiLCAibmV4dFdoZW5WaXNpYmxlIiwgImhpZGRlbiIsICJfY2xlYXJJbnRlcnZhbCIsICJfdXBkYXRlSW50ZXJ2YWwiLCAic2V0SW50ZXJ2YWwiLCAiX21heWJlRW5hYmxlQ3ljbGUiLCAidG8iLCAiaXRlbXMiLCAiX2dldEl0ZW1zIiwgImFjdGl2ZUluZGV4IiwgIl9nZXRJdGVtSW5kZXgiLCAiX2dldEFjdGl2ZSIsICJvcmRlciIsICJkZWZhdWx0SW50ZXJ2YWwiLCAiX2tleWRvd24iLCAiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCAiaW1nIiwgImVuZENhbGxCYWNrIiwgImNsZWFyVGltZW91dCIsICJzd2lwZUNvbmZpZyIsICJfZGlyZWN0aW9uVG9PcmRlciIsICJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsICJhY3RpdmVJbmRpY2F0b3IiLCAibmV3QWN0aXZlSW5kaWNhdG9yIiwgImVsZW1lbnRJbnRlcnZhbCIsICJwYXJzZUludCIsICJpc05leHQiLCAibmV4dEVsZW1lbnQiLCAibmV4dEVsZW1lbnRJbmRleCIsICJ0cmlnZ2VyRXZlbnQiLCAiX29yZGVyVG9EaXJlY3Rpb24iLCAic2xpZGVFdmVudCIsICJpc0N5Y2xpbmciLCAiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCAib3JkZXJDbGFzc05hbWUiLCAiY29tcGxldGVDYWxsQmFjayIsICJfaXNBbmltYXRlZCIsICJjbGVhckludGVydmFsIiwgImNhcm91c2VsIiwgInNsaWRlSW5kZXgiLCAiY2Fyb3VzZWxzIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsICJDTEFTU19OQU1FX0NPTExBUFNJTkciLCAiQ0xBU1NfTkFNRV9DT0xMQVBTRUQiLCAiQ0xBU1NfTkFNRV9ERUVQRVJfQ0hJTERSRU4iLCAiQ0xBU1NfTkFNRV9IT1JJWk9OVEFMIiwgIldJRFRIIiwgIkhFSUdIVCIsICJTRUxFQ1RPUl9BQ1RJVkVTIiwgInBhcmVudCIsICJDb2xsYXBzZSIsICJfaXNUcmFuc2l0aW9uaW5nIiwgIl90cmlnZ2VyQXJyYXkiLCAidG9nZ2xlTGlzdCIsICJlbGVtIiwgImZpbHRlckVsZW1lbnQiLCAiZm91bmRFbGVtZW50IiwgIl9pbml0aWFsaXplQ2hpbGRyZW4iLCAiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsICJfaXNTaG93biIsICJoaWRlIiwgInNob3ciLCAiYWN0aXZlQ2hpbGRyZW4iLCAiX2dldEZpcnN0TGV2ZWxDaGlsZHJlbiIsICJzdGFydEV2ZW50IiwgImFjdGl2ZUluc3RhbmNlIiwgImRpbWVuc2lvbiIsICJfZ2V0RGltZW5zaW9uIiwgInN0eWxlIiwgImNvbXBsZXRlIiwgImNhcGl0YWxpemVkRGltZW5zaW9uIiwgInNjcm9sbFNpemUiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgInNlbGVjdGVkIiwgInRyaWdnZXJBcnJheSIsICJpc09wZW4iLCAiRVNDQVBFX0tFWSIsICJUQUJfS0VZIiwgIkFSUk9XX1VQX0tFWSIsICJBUlJPV19ET1dOX0tFWSIsICJSSUdIVF9NT1VTRV9CVVRUT04iLCAiRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSIsICJFVkVOVF9LRVlVUF9EQVRBX0FQSSIsICJDTEFTU19OQU1FX0RST1BVUCIsICJDTEFTU19OQU1FX0RST1BFTkQiLCAiQ0xBU1NfTkFNRV9EUk9QU1RBUlQiLCAiQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSIiwgIkNMQVNTX05BTUVfRFJPUERPV05fQ0VOVEVSIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFX1NIT1dOIiwgIlNFTEVDVE9SX01FTlUiLCAiU0VMRUNUT1JfTkFWQkFSIiwgIlNFTEVDVE9SX05BVkJBUl9OQVYiLCAiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsICJQTEFDRU1FTlRfVE9QIiwgIlBMQUNFTUVOVF9UT1BFTkQiLCAiUExBQ0VNRU5UX0JPVFRPTSIsICJQTEFDRU1FTlRfQk9UVE9NRU5EIiwgIlBMQUNFTUVOVF9SSUdIVCIsICJQTEFDRU1FTlRfTEVGVCIsICJQTEFDRU1FTlRfVE9QQ0VOVEVSIiwgIlBMQUNFTUVOVF9CT1RUT01DRU5URVIiLCAiYXV0b0Nsb3NlIiwgImJvdW5kYXJ5IiwgImRpc3BsYXkiLCAib2Zmc2V0IiwgInBvcHBlckNvbmZpZyIsICJyZWZlcmVuY2UiLCAiRHJvcGRvd24iLCAiX3BvcHBlciIsICJfcGFyZW50IiwgIl9tZW51IiwgIl9pbk5hdmJhciIsICJfZGV0ZWN0TmF2YmFyIiwgInNob3dFdmVudCIsICJfY3JlYXRlUG9wcGVyIiwgImZvY3VzIiwgIl9jb21wbGV0ZUhpZGUiLCAiZGVzdHJveSIsICJ1cGRhdGUiLCAiaGlkZUV2ZW50IiwgIlBvcHBlciIsICJyZWZlcmVuY2VFbGVtZW50IiwgIl9nZXRQb3BwZXJDb25maWciLCAiY3JlYXRlUG9wcGVyIiwgIl9nZXRQbGFjZW1lbnQiLCAicGFyZW50RHJvcGRvd24iLCAiaXNFbmQiLCAiX2dldE9mZnNldCIsICJwb3BwZXJEYXRhIiwgImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsICJwbGFjZW1lbnQiLCAibW9kaWZpZXJzIiwgIm9wdGlvbnMiLCAiZW5hYmxlZCIsICJfc2VsZWN0TWVudUl0ZW0iLCAiY2xlYXJNZW51cyIsICJvcGVuVG9nZ2xlcyIsICJjb250ZXh0IiwgImNvbXBvc2VkUGF0aCIsICJpc01lbnVUYXJnZXQiLCAiZGF0YUFwaUtleWRvd25IYW5kbGVyIiwgImlzSW5wdXQiLCAiaXNFc2NhcGVFdmVudCIsICJpc1VwT3JEb3duRXZlbnQiLCAiZ2V0VG9nZ2xlQnV0dG9uIiwgInN0b3BQcm9wYWdhdGlvbiIsICJFVkVOVF9NT1VTRURPV04iLCAiY2xhc3NOYW1lIiwgImNsaWNrQ2FsbGJhY2siLCAicm9vdEVsZW1lbnQiLCAiQmFja2Ryb3AiLCAiX2lzQXBwZW5kZWQiLCAiX2FwcGVuZCIsICJfZ2V0RWxlbWVudCIsICJfZW11bGF0ZUFuaW1hdGlvbiIsICJiYWNrZHJvcCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJFVkVOVF9GT0NVU0lOIiwgIkVWRU5UX0tFWURPV05fVEFCIiwgIlRBQl9OQVZfRk9SV0FSRCIsICJUQUJfTkFWX0JBQ0tXQVJEIiwgImF1dG9mb2N1cyIsICJ0cmFwRWxlbWVudCIsICJGb2N1c1RyYXAiLCAiX2lzQWN0aXZlIiwgIl9sYXN0VGFiTmF2RGlyZWN0aW9uIiwgImFjdGl2YXRlIiwgIl9oYW5kbGVGb2N1c2luIiwgIl9oYW5kbGVLZXlkb3duIiwgImRlYWN0aXZhdGUiLCAiZWxlbWVudHMiLCAic2hpZnRLZXkiLCAiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsICJTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCIsICJQUk9QRVJUWV9QQURESU5HIiwgIlBST1BFUlRZX01BUkdJTiIsICJTY3JvbGxCYXJIZWxwZXIiLCAiZ2V0V2lkdGgiLCAiZG9jdW1lbnRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgIndpZHRoIiwgIl9kaXNhYmxlT3ZlckZsb3ciLCAiX3NldEVsZW1lbnRBdHRyaWJ1dGVzIiwgImNhbGN1bGF0ZWRWYWx1ZSIsICJyZXNldCIsICJfcmVzZXRFbGVtZW50QXR0cmlidXRlcyIsICJpc092ZXJmbG93aW5nIiwgIl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSIsICJvdmVyZmxvdyIsICJzdHlsZVByb3BlcnR5IiwgInNjcm9sbGJhcldpZHRoIiwgIm1hbmlwdWxhdGlvbkNhbGxCYWNrIiwgInNldFByb3BlcnR5IiwgIl9hcHBseU1hbmlwdWxhdGlvbkNhbGxiYWNrIiwgImFjdHVhbFZhbHVlIiwgInJlbW92ZVByb3BlcnR5IiwgImNhbGxCYWNrIiwgIkVWRU5UX0hJREVfUFJFVkVOVEVEIiwgIkVWRU5UX1JFU0laRSIsICJFVkVOVF9DTElDS19ESVNNSVNTIiwgIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwgIkVWRU5UX0tFWURPV05fRElTTUlTUyIsICJDTEFTU19OQU1FX09QRU4iLCAiQ0xBU1NfTkFNRV9TVEFUSUMiLCAiT1BFTl9TRUxFQ1RPUiIsICJTRUxFQ1RPUl9ESUFMT0ciLCAiU0VMRUNUT1JfTU9EQUxfQk9EWSIsICJNb2RhbCIsICJfZGlhbG9nIiwgIl9iYWNrZHJvcCIsICJfaW5pdGlhbGl6ZUJhY2tEcm9wIiwgIl9mb2N1c3RyYXAiLCAiX2luaXRpYWxpemVGb2N1c1RyYXAiLCAiX3Njcm9sbEJhciIsICJfYWRqdXN0RGlhbG9nIiwgIl9zaG93RWxlbWVudCIsICJfaGlkZU1vZGFsIiwgImhhbmRsZVVwZGF0ZSIsICJzY3JvbGxUb3AiLCAibW9kYWxCb2R5IiwgInRyYW5zaXRpb25Db21wbGV0ZSIsICJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsICJldmVudDIiLCAiX3Jlc2V0QWRqdXN0bWVudHMiLCAiaXNNb2RhbE92ZXJmbG93aW5nIiwgInNjcm9sbEhlaWdodCIsICJjbGllbnRIZWlnaHQiLCAiaW5pdGlhbE92ZXJmbG93WSIsICJvdmVyZmxvd1kiLCAiaXNCb2R5T3ZlcmZsb3dpbmciLCAicGFkZGluZ0xlZnQiLCAicGFkZGluZ1JpZ2h0IiwgImFscmVhZHlPcGVuIiwgIkNMQVNTX05BTUVfU0hPV0lORyIsICJDTEFTU19OQU1FX0hJRElORyIsICJDTEFTU19OQU1FX0JBQ0tEUk9QIiwgInNjcm9sbCIsICJPZmZjYW52YXMiLCAiYmx1ciIsICJjb21wbGV0ZUNhbGxiYWNrIiwgInBvc2l0aW9uIiwgIkFSSUFfQVRUUklCVVRFX1BBVFRFUk4iLCAiRGVmYXVsdEFsbG93bGlzdCIsICJhIiwgImFyZWEiLCAiYiIsICJiciIsICJjb2wiLCAiY29kZSIsICJkZCIsICJkaXYiLCAiZGwiLCAiZHQiLCAiZW0iLCAiaHIiLCAiaDEiLCAiaDIiLCAiaDMiLCAiaDQiLCAiaDUiLCAiaDYiLCAiaSIsICJsaSIsICJvbCIsICJwIiwgInByZSIsICJzIiwgInNtYWxsIiwgInNwYW4iLCAic3ViIiwgInN1cCIsICJzdHJvbmciLCAidSIsICJ1bCIsICJ1cmlBdHRyaWJ1dGVzIiwgIlNBRkVfVVJMX1BBVFRFUk4iLCAiYWxsb3dlZEF0dHJpYnV0ZSIsICJhdHRyaWJ1dGUiLCAiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCAiYXR0cmlidXRlTmFtZSIsICJub2RlTmFtZSIsICJub2RlVmFsdWUiLCAiYXR0cmlidXRlUmVnZXgiLCAic29tZSIsICJyZWdleCIsICJzYW5pdGl6ZUh0bWwiLCAidW5zYWZlSHRtbCIsICJhbGxvd0xpc3QiLCAic2FuaXRpemVGdW5jdGlvbiIsICJkb21QYXJzZXIiLCAiRE9NUGFyc2VyIiwgImNyZWF0ZWREb2N1bWVudCIsICJwYXJzZUZyb21TdHJpbmciLCAiZWxlbWVudE5hbWUiLCAiYXR0cmlidXRlTGlzdCIsICJhbGxvd2VkQXR0cmlidXRlcyIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJleHRyYUNsYXNzIiwgImh0bWwiLCAic2FuaXRpemUiLCAic2FuaXRpemVGbiIsICJ0ZW1wbGF0ZSIsICJEZWZhdWx0Q29udGVudFR5cGUiLCAiZW50cnkiLCAiVGVtcGxhdGVGYWN0b3J5IiwgImdldENvbnRlbnQiLCAiX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uIiwgImhhc0NvbnRlbnQiLCAiY2hhbmdlQ29udGVudCIsICJfY2hlY2tDb250ZW50IiwgInRvSHRtbCIsICJ0ZW1wbGF0ZVdyYXBwZXIiLCAiX21heWJlU2FuaXRpemUiLCAidGV4dCIsICJfc2V0Q29udGVudCIsICJhcmciLCAidGVtcGxhdGVFbGVtZW50IiwgIl9wdXRFbGVtZW50SW5UZW1wbGF0ZSIsICJ0ZXh0Q29udGVudCIsICJESVNBTExPV0VEX0FUVFJJQlVURVMiLCAiQ0xBU1NfTkFNRV9NT0RBTCIsICJTRUxFQ1RPUl9UT09MVElQX0lOTkVSIiwgIlNFTEVDVE9SX01PREFMIiwgIkVWRU5UX01PREFMX0hJREUiLCAiVFJJR0dFUl9IT1ZFUiIsICJUUklHR0VSX0ZPQ1VTIiwgIlRSSUdHRVJfQ0xJQ0siLCAiVFJJR0dFUl9NQU5VQUwiLCAiRVZFTlRfSU5TRVJURUQiLCAiRVZFTlRfQ0xJQ0siLCAiRVZFTlRfRk9DVVNPVVQiLCAiQXR0YWNobWVudE1hcCIsICJBVVRPIiwgIlRPUCIsICJSSUdIVCIsICJCT1RUT00iLCAiTEVGVCIsICJhbmltYXRpb24iLCAiY29udGFpbmVyIiwgImN1c3RvbUNsYXNzIiwgImRlbGF5IiwgImZhbGxiYWNrUGxhY2VtZW50cyIsICJ0aXRsZSIsICJUb29sdGlwIiwgIl9pc0VuYWJsZWQiLCAiX3RpbWVvdXQiLCAiX2lzSG92ZXJlZCIsICJfYWN0aXZlVHJpZ2dlciIsICJfdGVtcGxhdGVGYWN0b3J5IiwgIl9uZXdDb250ZW50IiwgInRpcCIsICJfc2V0TGlzdGVuZXJzIiwgIl9maXhUaXRsZSIsICJlbmFibGUiLCAiZGlzYWJsZSIsICJ0b2dnbGVFbmFibGVkIiwgImNsaWNrIiwgIl9sZWF2ZSIsICJfZW50ZXIiLCAiX2hpZGVNb2RhbEhhbmRsZXIiLCAiX2Rpc3Bvc2VQb3BwZXIiLCAiX2lzV2l0aENvbnRlbnQiLCAic2hhZG93Um9vdCIsICJpc0luVGhlRG9tIiwgIm93bmVyRG9jdW1lbnQiLCAiX2dldFRpcEVsZW1lbnQiLCAiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCAiX2dldFRpdGxlIiwgIl9jcmVhdGVUaXBFbGVtZW50IiwgIl9nZXRDb250ZW50Rm9yVGVtcGxhdGUiLCAiX2dldFRlbXBsYXRlRmFjdG9yeSIsICJ0aXBJZCIsICJzZXRDb250ZW50IiwgIl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQiLCAiX2dldERlbGVnYXRlQ29uZmlnIiwgImF0dGFjaG1lbnQiLCAicGhhc2UiLCAic3RhdGUiLCAidHJpZ2dlcnMiLCAiZXZlbnRJbiIsICJldmVudE91dCIsICJfc2V0VGltZW91dCIsICJ0aW1lb3V0IiwgImRhdGFBdHRyaWJ1dGVzIiwgImRhdGFBdHRyaWJ1dGUiLCAiU0VMRUNUT1JfVElUTEUiLCAiU0VMRUNUT1JfQ09OVEVOVCIsICJQb3BvdmVyIiwgIl9nZXRDb250ZW50IiwgIkVWRU5UX0FDVElWQVRFIiwgIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsICJTRUxFQ1RPUl9EQVRBX1NQWSIsICJTRUxFQ1RPUl9UQVJHRVRfTElOS1MiLCAiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCAiU0VMRUNUT1JfTkFWX0xJTktTIiwgIlNFTEVDVE9SX05BVl9JVEVNUyIsICJTRUxFQ1RPUl9MSVNUX0lURU1TIiwgIlNFTEVDVE9SX0xJTktfSVRFTVMiLCAiU0VMRUNUT1JfRFJPUERPV04iLCAiU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgInJvb3RNYXJnaW4iLCAic21vb3RoU2Nyb2xsIiwgInRocmVzaG9sZCIsICJTY3JvbGxTcHkiLCAiX3RhcmdldExpbmtzIiwgIl9vYnNlcnZhYmxlU2VjdGlvbnMiLCAiX3Jvb3RFbGVtZW50IiwgIl9hY3RpdmVUYXJnZXQiLCAiX29ic2VydmVyIiwgIl9wcmV2aW91c1Njcm9sbERhdGEiLCAidmlzaWJsZUVudHJ5VG9wIiwgInBhcmVudFNjcm9sbFRvcCIsICJyZWZyZXNoIiwgIl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzIiwgIl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCIsICJkaXNjb25uZWN0IiwgIl9nZXROZXdPYnNlcnZlciIsICJzZWN0aW9uIiwgIm9ic2VydmUiLCAib2JzZXJ2YWJsZVNlY3Rpb24iLCAiaGFzaCIsICJoZWlnaHQiLCAib2Zmc2V0VG9wIiwgInNjcm9sbFRvIiwgInRvcCIsICJiZWhhdmlvciIsICJJbnRlcnNlY3Rpb25PYnNlcnZlciIsICJfb2JzZXJ2ZXJDYWxsYmFjayIsICJ0YXJnZXRFbGVtZW50IiwgIl9wcm9jZXNzIiwgInVzZXJTY3JvbGxzRG93biIsICJpc0ludGVyc2VjdGluZyIsICJfY2xlYXJBY3RpdmVDbGFzcyIsICJlbnRyeUlzTG93ZXJUaGFuUHJldmlvdXMiLCAidGFyZ2V0TGlua3MiLCAiYW5jaG9yIiwgImRlY29kZVVSSSIsICJfYWN0aXZhdGVQYXJlbnRzIiwgImxpc3RHcm91cCIsICJpdGVtIiwgImFjdGl2ZU5vZGVzIiwgIm5vZGUiLCAic3B5IiwgIkhPTUVfS0VZIiwgIkVORF9LRVkiLCAiQ0xBU1NfRFJPUERPV04iLCAiU0VMRUNUT1JfRFJPUERPV05fTUVOVSIsICJOT1RfU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFIiwgIlNFTEVDVE9SX1RBQl9QQU5FTCIsICJTRUxFQ1RPUl9PVVRFUiIsICJTRUxFQ1RPUl9JTk5FUiIsICJTRUxFQ1RPUl9JTk5FUl9FTEVNIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFX0FDVElWRSIsICJUYWIiLCAiX3NldEluaXRpYWxBdHRyaWJ1dGVzIiwgIl9nZXRDaGlsZHJlbiIsICJpbm5lckVsZW0iLCAiX2VsZW1Jc0FjdGl2ZSIsICJhY3RpdmUiLCAiX2dldEFjdGl2ZUVsZW0iLCAiX2RlYWN0aXZhdGUiLCAiX2FjdGl2YXRlIiwgInJlbGF0ZWRFbGVtIiwgIl90b2dnbGVEcm9wRG93biIsICJuZXh0QWN0aXZlRWxlbWVudCIsICJwcmV2ZW50U2Nyb2xsIiwgIl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyIsICJfc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkIiwgIl9nZXRJbm5lckVsZW1lbnQiLCAiaXNBY3RpdmUiLCAib3V0ZXJFbGVtIiwgIl9nZXRPdXRlckVsZW1lbnQiLCAiX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbCIsICJvcGVuIiwgIkVWRU5UX01PVVNFT1ZFUiIsICJFVkVOVF9NT1VTRU9VVCIsICJDTEFTU19OQU1FX0hJREUiLCAiYXV0b2hpZGUiLCAiVG9hc3QiLCAiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCAiX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24iLCAiX2NsZWFyVGltZW91dCIsICJfbWF5YmVTY2hlZHVsZUhpZGUiLCAiaXNTaG93biIsICJfb25JbnRlcmFjdGlvbiIsICJpc0ludGVyYWN0aW5nIl0KfQo=
