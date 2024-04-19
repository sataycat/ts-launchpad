import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppPage } from "./modules/common/components/App.page";
import { ContactUsPage } from "./modules/enquiries/ContactUs.page";
import { EnquiriesListPage } from "./modules/enquiries/EnquiriesList.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
    children: [
      {
        index: true,
        element: <ContactUsPage />,
      },
      {
        path: "/enquiries",
        element: <EnquiriesListPage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
