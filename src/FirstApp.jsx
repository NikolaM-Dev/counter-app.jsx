import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>I&apos;m a subtitle</p>
    </>
  );
};

FirstApp.propTypes = {
  subtitle: PropTypes.number,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subtitle: 123,
  title: "Hello, I'm Nikola",
};
