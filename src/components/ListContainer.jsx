import PropTypes from "prop-types";

export default function ListContainer({ children }) {
  return <ul className="container flex-wrap flex-sm-column flex-md-row d-flex gap-3 mt-5">{children}</ul>;
}

ListContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
