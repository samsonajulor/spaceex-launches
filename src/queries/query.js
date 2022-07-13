import { gql } from '@apollo/client';

const LAUNCHES_PAST = gql`
  query launchesPast($sort: String) {
    launchesPast(sort: $sort) {
      id
      mission_name
      launch_date_local
      launch_year
      launch_success
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`;

export { LAUNCHES_PAST };
