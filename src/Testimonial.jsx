const Testimonial = ({
  name,
  title,
  avatar,
  quote,
  text,
  backgroundColor,
  id,
}) => {
  const className = `article article-${id}`;
  return (
    <article
      className={className}
      style={{
        backgroundColor: backgroundColor,
        color:
          backgroundColor === 'hsl(0, 0%, 100%)'
            ? 'hsl(217, 19%, 35%)'
            : 'hsl(0, 0%, 100%)',
      }}
    >
      <div className="article__bio">
        <picture>
          <img
            src={avatar}
            alt={name}
            className="article__img"
            style={{
              borderColor:
                backgroundColor === 'hsl(0, 0%, 100%)'
                  ? 'transparent'
                  : backgroundColor === 'hsl(219, 29%, 14%)'
                  ? 'hsl(263, 55%, 52%)'
                  : backgroundColor === 'hsl(263, 55%, 52%)'
                  ? 'hsl(263, 55%, 65%)'
                  : 'transparent',
            }}
          />
        </picture>
        <div className="article__person">
          <h2 className="article__person-name">{name}</h2>
          <p className="article__person-title">{title}</p>
        </div>
      </div>
      <div className="article__body">
        <h3 className="article__quote">{quote}</h3>
        <p className="article__text">{text}</p>
      </div>
    </article>
  );
};
export default Testimonial;
