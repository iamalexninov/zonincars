import styles from "./style.module.css";

import { RenderField } from "../global/fields/RenderField";
import { Wrapper } from "../global/wrapper/Wrapper";

export const SortBy = () => {
  return (
    <div className={styles.sort}>
      <Wrapper>
        <div className={styles.sort_wrapper}>
          <p className={styles.sort_available}>Available Vehicles: 24</p>
          <div className={styles.sort_field}>
            <p className={styles.sort_by}>Sort By:</p>
            <RenderField
              attributes={{
                type: "select",
                name: "sort",
                placeholder: "Default",
              }}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
