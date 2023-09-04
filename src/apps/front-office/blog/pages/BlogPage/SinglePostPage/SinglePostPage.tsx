import Catagories from "./Catagories/Catagories";
import InputSearch from "./InputSearch/InputSearch";
import SinglePost from "./SinglePost/SinglePost";
import Tags from "./Tags/Tags";
import styles from "./styles.module.scss";
export default function SinglePostPage() {
  return (
    <div>
      <div className="container">
        <div className={styles.flexPost}>
          <div className={styles.SinglePost}>
            <SinglePost />
          </div>
          <div>
            <InputSearch />
            <Catagories />
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
}
