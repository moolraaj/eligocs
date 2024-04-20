 
import PropTypes from 'prop-types';

const ParallaxContainer = ({ children, speed, backgroundColor, minHeight }) => {
  const parallaxStyle = {
    transform: `translateY(${window.scrollY * speed}px)`,
    backgroundColor: backgroundColor,
    minHeight: minHeight // Set minHeight dynamically
  };

  return <div className="parallax-container" style={parallaxStyle}>{children}</div>;
}

ParallaxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  minHeight: PropTypes.string // Add minHeight prop type
};

export default ParallaxContainer;
