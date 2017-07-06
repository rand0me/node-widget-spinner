module.exports = {
    autoWatch:                             true,
    frameworks:                     [ 'mocha' ],
    reporters:                      [ 'mocha' ],
    browsers:                    [ 'Electron' ],
    files:                   [ './browser.js' ],
    preprocessors: { '**/*.js': [ 'webpack' ] },
    webpackMiddleware: { stats: 'errors-only' },
    electronOpts:               { show: false },
}