SystemJS.config({
    map: {
        "@angular/core": "node_modules/@angular/core/bundles/core.umd.js",
        "@angular/common": "node_modules/@angular/common/bundles/common.umd.js",
        "@angular/compiler": "node_modules/@angular/compiler/bundles/compiler.umd.js",
        "@angular/platform-browser": "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "@angular/router": "node_modules/@angular/router/bundles/router.umd.js",
        "@angular/forms": "node_modules/@angular/forms/bundles/forms.umd.js",
        "rxjs": "node_modules/rxjs",
        "@ngrx/store": "node_modules/@ngrx/store/bundles/store.umd.js",
        "@ngrx/core": "node_modules/@ngrx/core/bundles/core.umd.js",
        '@ngrx/effects': 'node_modules/@ngrx/effects/bundles/effects.umd.js'
    },
    packages: {
        "rxjs": {
            defaultExtension: "js",
        },
        "app": {
            defaultExtension: "js",
        }
    }
});