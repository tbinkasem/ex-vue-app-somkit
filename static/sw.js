importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.a2cb48b19cc16d9ee508.js",
    "revision": "d38ed516af59c8ecedb8909e550d9162"
  },
  {
    "url": "/_nuxt/layouts_default.d88734c165c0e3a64d1a.js",
    "revision": "3e400b907c475798ef3bcd42e56732b6"
  },
  {
    "url": "/_nuxt/manifest.7319f2cc1af5f62fbe02.js",
    "revision": "4409c0f5bf346b65ad368a682417e868"
  },
  {
    "url": "/_nuxt/pages_chat.9371a974b9a49a5e633f.js",
    "revision": "b5ec0bebce018925449d6f79adeb93d4"
  },
  {
    "url": "/_nuxt/pages_index.b8e85551167f029f8cdf.js",
    "revision": "04feacddc6f8acbe87c8669d9677ee38"
  },
  {
    "url": "/_nuxt/pages_student_data-table.d5315bf775ba94844688.js",
    "revision": "203173e6e165a020444300811254cd2c"
  },
  {
    "url": "/_nuxt/pages_student_edit.010824f567f0568feef9.js",
    "revision": "e1119a7bdb153bc4221928c17c0a0793"
  },
  {
    "url": "/_nuxt/pages_student_form.537b0743b6aab573f1ee.js",
    "revision": "e05aef15b806d37cb8676006879252fc"
  },
  {
    "url": "/_nuxt/pages_student_index.6bb698f1ca1533a8bebd.js",
    "revision": "b0ab71e0a9d033c8f5d50c0571acc8a3"
  },
  {
    "url": "/_nuxt/pages_student_layout.941b7aeaf71402feecf4.js",
    "revision": "4846d62b80d00c91286fef813e97438c"
  },
  {
    "url": "/_nuxt/pages_student_std_list.55f373194b923d1614d1.js",
    "revision": "77ab951055d73be6a412311a1199be62"
  },
  {
    "url": "/_nuxt/pages_student_std_view2.de35edc9e2968bb1c156.js",
    "revision": "f5ab0104f39bc7c65fa63ab38aa964b6"
  },
  {
    "url": "/_nuxt/pages_student.e82b583acc7607fe28e0.js",
    "revision": "dc4536c824eaacdb73a060699961607d"
  },
  {
    "url": "/_nuxt/pages_student2.b394e4b19250eebbe177.js",
    "revision": "d2df85ab0907ecf4a60264a20dc47a08"
  },
  {
    "url": "/_nuxt/vendor.fa34b5de4be83678810b.js",
    "revision": "a48bcac6b59b2444190a1e97b5d38121"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

