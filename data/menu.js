export const menu = [
  {
    label: "კომპანიის შესახებ",
    href: "/about",
    children: [
      { label: "სიახლეები", href: "/about/news" },
      { label: "სტრუქტურა", href: "/about/structure" },
      { label: "მენეჯმენტი", href: "/about/management" },
      { label: "მისია და ხედვა", href: "/about/mission" },
    ],
  },
  {
    label: "ობიექტები",
    href: "/landfill",
    children: [
      { label: "ახალი ობიექტები", href: "/landfill/new" },
      { label: "გადამტვირთავი სადგურები", href: "/landfill/stations" },
      
    ],
  },
  {
    label: "საჯარო ინფორმაცია",
    href: "/public-info",
    children: [
      { label: "ტენდერები", href: "/public-info/tenders" },
      { label: "ვაკანსიები", href: "/public-info/jobs" },
    ],
  },
  {
    label: "პარტნიორები",
    href: "/partners",
  },
  {
    label: "კონტაქტი",
    href: "/contacts",
    children: [
      { label: "რეგიონალური ობიექტები", href: "/contacts/regions" },
    ],
  },
];