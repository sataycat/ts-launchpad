import { useEnquiriesQuery } from "~/queries/useEnquiriesQuery";

import { Button, Stack, Table } from "@mantine/core";
import { TbArrowRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export const EnquiriesListPage = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useEnquiriesQuery();
  if (!isSuccess) return null;

  return (
    <Stack>
      <Button
        variant="default"
        rightSection={<TbArrowRight />}
        onClick={() => navigate("/")}
        w="fit-content"
      >
        View Enquiry form
      </Button>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Message</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Name</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row, idx) => (
            <Table.Tr key={`${row.email}-${idx}`}>
              <Table.Td>{row.message}</Table.Td>
              <Table.Td>{row.email}</Table.Td>
              <Table.Td>{row.name}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};
