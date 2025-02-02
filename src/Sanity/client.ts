import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "r02w05ik", // this should be secret
  dataset: "products",
  apiVersion: "1",
  useCdn: false,
});
