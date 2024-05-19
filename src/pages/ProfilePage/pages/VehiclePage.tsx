import { PageLayout, Paper } from "../../../shared/components";
import { VehicleTable } from "../../../widgets";

export const VehiclePage = () => {
  return (
    <PageLayout>
      <Paper>
        <VehicleTable />
      </Paper>
    </PageLayout>
  );
};
