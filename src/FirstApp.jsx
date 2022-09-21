import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>I&apos;m a subtitle</p>
    </>
  );
};

FirstApp.propTypes = {
  subTitle: PropTypes.number,
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  subTitle: 'Dragon Ball Z',
  title: "Hello, I'm Nikola",
};
