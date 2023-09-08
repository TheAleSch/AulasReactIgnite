import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import "./Comment";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Post(props) {
  const [comments, setComments] = useState(["louco hein"]);
  const [newCommentText, setNewCommentText] = useState("");

  //Date with date FSN

  const publishedDateFomatted = format(
    props.publishedAt,
    "d, 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  //Date only with JS

  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(props.publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentText() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter(
      (item) => item != comment
    );
    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }
  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFomatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentText}
          name="comment"
          placeholder="Deixe seu comentário"
          required
          onInvalid={handleNewCommentInvalid}
        ></textarea>

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
