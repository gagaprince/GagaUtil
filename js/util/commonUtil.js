(function() {
    var util = {
        bind: function (node, event, callback, target) {
            if (typeof node.length == "undefined" || node.length == 0) {
                node.addEventListener(event, function () {
                    callback.call(target);
                }, false)
            } else {
                var length = node.length;
                for (var i = 0; i < length; i++) {
                    var nodetmp = node[i];
                    util.bind(nodetmp, event, callback, target);
                }
            }
        },
        showPage: function (dom) {
            dom.style.display = "";
            return this;
        },
        hidePage: function (dom) {
            dom.style.display = "none";
            return this;
        },
        attr: function (dom, key, value) {
            dom.setAttribute(key, value);
            return this;
        },
        css: function (dom, key, value) {
            dom.style[key] = value;
            return this;
        }
    }
})();