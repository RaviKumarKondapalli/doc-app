import React from 'react'
 const sidebarData = [
  {
    title: "Getting Started",
    links: [
      { label: "Install", href: "/docs/introduction/install" },
      { label: "Quick Start", href: "/docs/introduction/quick-start" },
      { label: "License", href: "/docs/introduction/license" },
    ],
  },
  {
    title: "Tour",
    links: [
      { label: "Tour API", href: "/docs/tour/api" },
      { label: "Tour HTML Attributes", href: "/docs/tour/html-attributes" },
      { label: "Tour Options", href: "/docs/tour/options" },
    ],
  },
  {
    title: "Hints",
    links: [
      { label: "Hints API", href: "/docs/hints/api" },
      { label: "Hints HTML Attributes", href: "/docs/hints/html-attributes" },
      { label: "Hints Options", href: "/docs/hints/options" },
    ],
  },
  {
    title: "Themes",
    links: [
      { label: "Install Themes", href: "/docs/themes/install" },
      { label: "Themes", href: "/docs/themes/list" },
    ],
  },
  {
    title: "Wrappers",
    links: [
      { label: "Add your wrapper", href: "/docs/wrappers/add-wrapper" },
      { label: "Angular", href: "/docs/wrappers/angular" },
      { label: "Ember", href: "/docs/wrappers/ember" },
      { label: "GWT", href: "/docs/wrappers/gwt" },
      { label: "Magento", href: "/docs/wrappers/magento" },
      { label: "Rails", href: "/docs/wrappers/rails" },
      { label: "React", href: "/docs/wrappers/react" },
      { label: "WordPress", href: "/docs/wrappers/wordpress" },
      { label: "Yii", href: "/docs/wrappers/yii" },
      { label: "Yii2", href: "/docs/wrappers/yii2" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Build", href: "/docs/developers/build" },
      { label: "Changelog", href: "/docs/developers/changelog" },
    ],
  },
  {
    title: "Migration",
    links: [
      { label: "Migration Guide", href: "/docs/migration/guide" },
    ],
  },
];
const Sidebar = () => {
  return (
        <aside className="relative bg-white dark:bg-black col-start-1 row-span-full row-start-1 max-lg:hidden p-5 navigation-sidebar">
            <nav className="space-y-2">
              <div className="space-y-6">
                  {sidebarData.map((section) => (
                    <div key={section.title} className="flex flex-col gap-3" data-autoscroll="true">
                      <h3 className="font-mono text-sm font-medium tracking-widest text-gray-500 uppercase sm:text-xs dark:text-gray-400">
                        {section.title}
                      </h3>
                      <ul className="flex flex-col gap-2 border-l dark:border-[color-mix(in_oklab,_var(--color-gray-950),white_20%)] border-[color-mix(in_oklab,_var(--color-gray-950),white_90%)]">
                        {section.links.map((link) => (
                          <li key={link.href} className="-ml-px flex flex-col items-start gap-2">
                            <a
                              href={link.href}
                              className="inline-block border-l border-transparent text-base text-gray-600 hover:border-gray-950/25 hover:text-gray-950 sm:text-sm dark:text-gray-300 dark:hover:border-white/25 dark:hover:text-white aria-[current]:border-gray-950 aria-[current]:font-semibold aria-[current]:text-gray-950 dark:aria-[current]:border-white dark:aria-[current]:text-white pl-5 sm:pl-4"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </nav>
        </aside>
    
  )
}

export default Sidebar
