export const tabs = [
  {
    id: "discover",
    label: "Discover",
    routes: ["/", "/browse", "/news"],
    links: [
      { to: "/", label: "Discover" },
      { to: "/browse", label: "Browse" },
      { to: "/news", label: "News" }
    ]
  },

  {
    id: "library",
    label: "Library",
    routes: ["/library", "/cart", "/wishlist"],
    links: [
      { to: "/library", label: "Library" },
      { to: "/cart", label: "Cart" },
      { to: "/wishlist", label: "Wishlist" }
    ]
  },

  {
    id: "community",
    label: "Community Hub",
    routes: ["/community", "/community-posts", "/workshop"],
    links: [
      { to: "/community", label: "Community Hub" },
      { to: "/community-posts", label: "Community Posts" },
      { to: "/workshop", label: "Workshop" }
    ]
  }
];