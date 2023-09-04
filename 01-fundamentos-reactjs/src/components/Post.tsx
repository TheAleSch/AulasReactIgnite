import styles from "./Post.module.css";
import "./Comment";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/TheAleSch.png" />
          <div className={styles.authorInfo}>
            <strong>Alexandre Schrammel</strong>
            <span>Product Designer</span>
          </div>
        </div>
        <time title="02 de Setembro de 2023" dateTime="2023-09-02 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Texto 1</p>
        <p>Texto 1</p>
        <p>Texto 1</p>
        <p>Texto 1</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe seu comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
