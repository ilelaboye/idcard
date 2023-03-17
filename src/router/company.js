const CompanyRoutes = [
  {
    path: "/companies",
    name: "companies",
    component: () => import("@/views/dashboard/company/index.vue"),
  },
];
export default CompanyRoutes;
