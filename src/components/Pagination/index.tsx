import React from 'react';
import { Wrapper } from './styles';

const Pagination: React.FC<PropsType> = ({
  rowsPerPage,
  totalRowsCount,
  paginate,
  arrowClickHandler,
  setRowsPerPage,
  currentPage,
}) => {
  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(totalRowsCount / rowsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Wrapper>
      <ul className="pagination">
        <li className="waves-effect">
          <a onClick={() => arrowClickHandler(-1)} href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`waves-effect ` + (currentPage === number && 'active')}
          >
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
        <li className="waves-effect">
          <a onClick={() => arrowClickHandler(1)} href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
      <a
        href="#!"
        onClick={() => {
          setRowsPerPage(10);
          paginate(1);
        }}
      >
        Show 10 rows per page
      </a>
      <a
        href="#!"
        onClick={() => {
          setRowsPerPage(20);
          paginate(1);
        }}
      >
        Show 20 rows per page
      </a>
      <a
        href="#!"
        onClick={() => {
          setRowsPerPage(50);
          paginate(1);
        }}
      >
        Show 50 rows per page
      </a>
    </Wrapper>
  );
};

export default Pagination;

type PropsType = {
  rowsPerPage: number;
  totalRowsCount: number;
  currentPage: number;
  paginate: (number: number) => void;
  arrowClickHandler: (arrow: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
};
