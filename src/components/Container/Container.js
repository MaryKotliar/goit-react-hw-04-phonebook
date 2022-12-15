import PropTypes from 'prop-types';
import { Box } from './Container.styled';
export const Container = ({ children }) => (
  <Box className="Container">{children}</Box>
);
Container.propTypes = {
  children: PropTypes.array.isRequired,
};
