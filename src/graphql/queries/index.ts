import { gql } from "graphql-request";

export const GET_ALL_SKILLS = gql`
  query {
    skills {
      image
      title
      link
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query {
    projects {
      title
      description
      demo
      github
      image
    }
  }
`;