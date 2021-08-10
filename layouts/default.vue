<template>
  <simplebar class="h-screen" data-simplebar-auto-hide="true">
    <div
      class="antialiased font-sans text-sm text-gray-900 dark:text-white flex flex-col w-full h-full min-h-screen bg-body dark:bg-gray-700 z-0"
    >
      <div class="relative flex flex-row flex-auto">
        <div class="wrapper">
          <aside-menu id="aside" :menu="menu" />

          <div
            class="main w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-white"
          >
            <navbar />
            <div class="w-full p-4 bg-gray-100 min-h-screen pt-20">
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue'
export default {
  name: 'Home',
  components: { simplebar },
  computed: {
    menu() {
      return [
        'Overview',
        [
          {
            to: '/',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 23.5c6.351 0 11.5-5.149 11.5-11.5S18.351.5 12 .5.5 5.649.5 12 5.649 23.5 12 23.5z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.414 13.414a2 2 0 01-2.828-2.828c.781-.781 8.132-5.3 8.132-5.3s-4.518 7.347-5.304 8.128z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 12H5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.99 5.99l1.06 1.06"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 3.5V5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 12H19"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.633 19.6A14.707 14.707 0 0012 17a14.707 14.707 0 00-8.633 2.6"/></svg>',
            label: 'Dashboard',
          },
          {
            to: '/ecommerce',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 26 26">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.186 6.217h19.448a1.043 1.043 0 011.007 1.318l-2.142 7.854a3.13 3.13 0 01-3.02 2.307H6.602"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 1h.394c.987 0 1.84.691 2.043 1.657l3.475 16.512a2.087 2.087 0 002.042 1.657h11.872"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.304 25a1.565 1.565 0 100-3.13 1.565 1.565 0 000 3.13z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.74 25a1.565 1.565 0 100-3.13 1.565 1.565 0 000 3.13z"/> </svg> ',
            label: 'E-Commerce',
          },
        ],
        'Components',
        [
          {
            label: 'Apps',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.966 4.787a1.1 1.1 0 01.534.944v4.639L12 13.908 6.5 10.37V5.731a1.1 1.1 0 01.534-.944l4.4-2.64a1.1 1.1 0 011.132 0l4.4 2.64z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 8.408v5.5"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 17.208l-5.5-3.3 5.5-3.538 5 3.213a1.1 1.1 0 01.5.925v4.062a1.1 1.1 0 01-.5.925l-4.4 2.83a1.1 1.1 0 01-1.19 0L12 19.17v-5.262"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 17.208V22.5"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 13.908v5.262l-4.9 3.155a1.1 1.1 0 01-1.19 0l-4.4-2.83A1.1 1.1 0 011 18.57v-4.062a1.1 1.1 0 01.5-.925l5-3.213 5.5 3.538-5.5 3.3"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 17.208l-5.369-3.22"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 17.208V22.5"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 8.408L6.641 5.192"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.359 5.192L12 8.408"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.869 13.987L17.5 17.208"/> </svg> ',
            menu: [
              { to: '/kanban', label: 'Kanban' },
              { to: '/miro', label: 'Miro' },
            ],
          },
          {
            label: 'UI Elements',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.5v-7a4 4 0 014-4h2a4 4 0 014 4v15a3 3 0 106 0v-2"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 18.5a5 5 0 01-10 0v-10a2 2 0 012-2h6a2 2 0 012 2v10z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.5h10"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 4.5v10h-4v-10h4v0z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5l2-4 2 4"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 14.5h-4v1a2 2 0 104 0v-1z"/> </svg> ',
            menu: [
              { to: '/typography', label: 'Typography' },
              { to: '/buttons', label: 'Buttons' },
              {
                label: 'Icons',
                menu: [
                  { to: '/typography', label: 'SVG Icons' },
                  { to: '/buttons', label: 'Country Flags' },
                  { to: '/buttons', label: 'Font Awesome' },
                  { to: '/buttons', label: 'Line Icons' },
                  { to: '/buttons', label: 'Drip Icons' },
                  { to: '/buttons', label: 'Feather Icons' },
                  { to: '/buttons', label: 'Typicons' },
                  { to: '/buttons', label: 'Themify Icons' },
                  { to: '/buttons', label: 'MD Icons' },
                  { to: '/buttons', label: 'Remix Icons' },
                  { to: '/buttons', label: 'Boxicons' },
                  { to: '/buttons', label: 'IcoMoon Icons' },
                ],
              },
            ],
          },
          {
            label: 'Forms',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 2.499a2 2 0 012-2h19a2 2 0 012 2v19a2 2 0 01-2 2h-19a2 2 0 01-2-2v-19z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 7.499l1.5 1.5 4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 17.499l1.5 1.5 4-4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8.499h6"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 17.499h6"/></svg>',
            menu: [
              { to: '/typography', label: 'Typography' },
              { to: '/buttons', label: 'Buttons' },
            ],
          },
        ],
        'Pages',
        [
          {
            label: 'Authentication',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 11.5a1 1 0 011-1h7a1 1 0 011 1v5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-5z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 15.5V13"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15 10.5v-1a3 3 0 116 0v1"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 12.75v0a.25.25 0 01.25.25v0a.25.25 0 01-.25.25v0a.25.25 0 01-.25-.25v0a.25.25 0 01.25-.25"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 2.5H18a.5.5 0 01.5.5v1.5"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.5 19.521V21a.5.5 0 01-.5.5h-7.5"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 21.223a.5.5 0 00.392.488l8 1.777A.5.5 0 0010.5 23V1a.5.5 0 00-.608-.488l-8 1.778a.5.5 0 00-.392.488v18.445z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/> </svg> ',
            menu: [
              { to: '/signin', label: 'Signin' },
              { to: '/signup', label: 'Signup' },
              { to: '/email-confirmation', label: 'E-Mail Confirmation' },
              { to: '/forgot-password', label: 'Forgot Password' },
              { to: '/reset-password', label: 'Reset Password' },
              { to: '/lock-screen', label: 'Lock Screen' },
              { to: '/subscribe', label: 'Subscribe' },
              { to: '/logout', label: 'Logout' },
            ],
          },
          {
            label: 'User',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 25"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 16s-1.5-.5-1.5-3c-.826 0-.826-2 0-2 0-.335-1.5-4 1-3.5.5-2 6-2 6.5 0 .347 1.388-.5 3.254-.5 3.5.826 0 .826 2 0 2 0 2.5-1.5 3-1.5 3v2.5c2.477.929 4.93 1.7 6.185 2.575 4.448-4.508 4.414-11.765-.076-16.231C15.619.378 8.362.384 3.878 4.856-.607 9.329-.63 16.586 3.825 21.087c1.33-.92 3.952-1.746 6.175-2.587V16z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.825 21.087a11.495 11.495 0 0016.36-.012"/></svg>',
            menu: [
              { to: '/user-profile', label: 'User Profile' },
              { to: '/users', label: 'User List' },
            ],
          },
        ],
        'Other',
        [
          {
            to: '/docs',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 3.5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10H11a.5.5 0 01-.5-.5V3.5z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10a.5.5 0 00.5.5h9.5c0-5.523-4.477-10-10-10V10z"/> </svg> ',
            label: 'Charts',
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 25">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 23.77a11.5 11.5 0 117.456-9.773"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.673 10.985h6.084a3 3 0 012.122.878L10 12.984a3 3 0 01.121 4.115l-1.363 1.533A3 3 0 008 20.625v3.145"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.261 4.985h-5.8a2.25 2.25 0 000 4.5h.432a3 3 0 012.5 1.335l1.133 1.7"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.5 18.485c0 2.5-4 6-4 6s-4-3.5-4-6a4 4 0 118 0z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.235a.25.25 0 01.25.25"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.25 18.485a.25.25 0 01.25-.25"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.735a.25.25 0 01-.25-.25"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.75 18.485a.25.25 0 01-.25.25"/> </svg> ',
            label: 'Maps',
            menu: [
              { label: 'Vector Maps', to: '/vector-maps' },
              { label: 'Google Maps', to: '/google-maps' },
              { label: 'Leaflet Maps', to: '/leaflet-maps' },
              { label: 'Yandex Maps', to: '/yandex-maps' },
              { label: 'Map Box', to: '/map-box' },
            ],
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 23.5c6.351 0 11.5-5.149 11.5-11.5S18.351.5 12 .5.5 5.649.5 12 5.649 23.5 12 23.5z"/> </svg> ',
            label: 'Menu Levels',
            menu: [
              {
                label: 'Level 1-1',
                to: '/docs',
              },
              {
                label: 'Level 1-2',
                menu: [
                  { label: 'Level 2-1', to: '/buttons' },
                  {
                    label: 'Level 2-2',
                    menu: [
                      { label: 'Level 3-1', to: '/miro' },
                      { label: 'Level 3-2', to: '/kanban' },
                      {
                        label: 'Level 3-3',
                        menu: [
                          { label: 'Level 4-1', to: '/miro' },
                          { label: 'Level 4-2', to: '/kanban' },
                          { label: 'Level 4-3' },
                        ],
                      },
                    ],
                  },
                  { label: 'Level 2-3', to: '/' },
                ],
              },
              {
                label: 'Level 1-3',
                to: '/',
              },
            ],
          },
        ],
        'Docs',
        [
          {
            to: '/docs',
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.742a3.752 3.752 0 114.562 3.658 1.007 1.007 0 00-.812.975v1.113"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 17.992a.25.25 0 110 .5.25.25 0 010-.5"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 23.501c6.351 0 11.5-5.149 11.5-11.5S18.351.501 12 .501.5 5.65.5 12.001s5.149 11.5 11.5 11.5z"/> </svg> ',
            label: 'Documentation',
          },
          {
            icon:
              '<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" height="20px" viewBox="0 0 24 24">   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.115 20a8 8 0 11.987-7"/>   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.885 4a8 8 0 11-.985 7"/> </svg> ',
            label: 'Usefull Links',
            menu: [
              { label: 'Vue JS', href: 'https://vuejs.org' },
              { label: 'Nuxt JS', href: 'https://nuxtjs.org' },
              {
                label: 'Awesome Vue JS',
                href: 'https://github.com/vuejs/awesome-vue',
              },
              {
                label: 'Awesome Nuxt JS',
                href: 'https://github.com/nuxt-community/awesome-nuxt',
              },
            ],
          },
        ],
      ]
    },
  },
  // created() {
  //   this.$store.commit('user', {
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //     avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
  //   })
  // },
  mounted() {
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-aside-expanded')
  },
}
</script>
