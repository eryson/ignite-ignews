import * as prismic from "@prismicio/client";
import sm from "./sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case "homepage":
      return "/";
    case "posts":
      return `/posts`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function getPrismicClient(req?: unknown, config = {}) {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
}
