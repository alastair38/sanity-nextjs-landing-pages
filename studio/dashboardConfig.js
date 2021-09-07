export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '613736ce512f0f6e911788ce',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rpx9o1sq',
                  apiId: '5840601f-afb8-414b-8887-6575b8fef82e'
                },
                {
                  buildHookId: '613736ceddbf34550e7d0868',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bd2irq7h',
                  apiId: 'f1558f3f-942d-44c5-9f90-6b1b0d4f665e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alastair38/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bd2irq7h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
