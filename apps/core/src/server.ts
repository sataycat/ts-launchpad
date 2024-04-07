import { createApp } from "~/app";
import { env } from "~/env";

const app = createApp();

app.listen(env.PORT, () => {
  console.log(`Listening on port ${env.PORT}`);
});
