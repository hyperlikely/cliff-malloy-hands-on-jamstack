export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "635463874efea77150f44dcf",
                  title: "Sanity Studio",
                  name: "cliff-malloy-hands-on-jamstack-studio",
                  apiId: "c7b188c2-c3b0-4860-b901-6b70853e0feb",
                },
                {
                  buildHookId: "63546387a4e4cf6bcfaacbd7",
                  title: "Blog Website",
                  name: "cliff-malloy-hands-on-jamstack",
                  apiId: "9b4925a6-e144-4050-97f5-1fde4fde6a21",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hyperlikely/cliff-malloy-hands-on-jamstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://cliff-malloy-hands-on-jamstack.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
