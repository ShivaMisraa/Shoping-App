import classes from './notification.module.css';

const Notification = (props) => {

  let speacialClasses = "";

  if (props.status === "Rrror") {
    speacialClasses = classes.error;
  }
  if (props.status === "success") {
    speacialClasses = classes.success;
  }
  const cssClasses = `${classes.notification} ${speacialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;