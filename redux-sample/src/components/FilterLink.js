import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }) => {
  return (
    <Link
      to={filter === 'all' ? '' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {children}
    </Link>
  );
};

export default FilterLink;

// import React from 'react';
// import { connect } from 'react-redux';

// const Link = ({ active, children, onClick }) => {
//   if (active) {
//     return (
//       <span>
//         {children}
//       </span>
//     );
//   }

//   return (
//     <a
//       href="#"
//       onClick={e => {
//         e.preventDefault();
//         onClick();
//       }}
//     >
//       {children}
//     </a>
//   );
// };

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter,
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () =>
//     dispatch({
//       type: 'SET_VISIBILITY_FILTER',
//       filter: ownProps.filter,
//     }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Link);
