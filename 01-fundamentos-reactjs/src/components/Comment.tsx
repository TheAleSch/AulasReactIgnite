import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";

export function Comment(props) {
  function handleDeleteComent() {
    props.deleteComment(props.content);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/TheAleSch.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ale</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComent} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
