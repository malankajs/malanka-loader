var TemplateCompiler = require('malanka/es5/Template/TemplateCompiler').TemplateCompiler;
var ComponentsScanner = require('malanka/es5/Build/ComponentsScanner').ComponentsScanner;

module.exports = function (content) {
    this.cacheable();

    if (!this.options.scanner) {
        console.warn('[malanka-loader] Scanner options missed. May be you missed ComponentsScanner?')
    }

    return new TemplateCompiler(this.options.scanner).compileString(content);
};

module.exports.ComponentsScanner = ComponentsScanner;