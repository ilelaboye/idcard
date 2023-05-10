const CompanyRoutes = [
  {
    path: "/companies",
    name: "companies",
    component: () => import("@/views/dashboard/company/index.vue"),
  },
  {
    path: "/company/:id",
    name: "companyView",
    component: () => import("@/views/dashboard/company/view.vue"),
  },
];
export default CompanyRoutes;
