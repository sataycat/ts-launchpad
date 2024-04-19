import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

export const AppPage = () => {
  return (
    <Container mt="3rem">
      <Outlet />
    </Container>
  );
};
