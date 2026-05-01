import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "5k6y9rvm",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});