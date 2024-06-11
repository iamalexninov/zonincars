import styles from "./style.module.css";

import { LinkRecord } from "./LinkRecord";
import { useMenuContext } from "../../../hooks/useContexts";
import { Link } from "react-router-dom";

export const LinksRecords = ({ records }) => {
  const { navbarMenu } = useMenuContext();

  return (
    <ul
      className={
        navbarMenu.navbar
          ? [styles.nav_links, styles.active].join(" ")
          : styles.nav_links
      }
    >
      {records.map((record) => (
        <LinkRecord record={record} key={record.text} />
      ))}
      <Link to="/dashboard/submit-listing" className={styles.nav_btn}>
        Submit Listing
      </Link>
    </ul>
  );
};
