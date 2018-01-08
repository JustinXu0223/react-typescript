/* config-overrides.js */
// const tsImportPluginFactory = require('ts-import-plugin');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
   /* const tsLoader = getLoader(
        config.module.rules,
        rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            }) ]
        })
    };*/
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);
    return config;
}