import {
  AiOutlineDoubleLeft,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
} from 'react-icons/ai'

import {
  PaginationContainer,
  PaginationControl,
  StaringNavigation,
  PreviousNavigation,
  NavigationButtons,
  ForwardNavigation,
  EndNavigation,
} from './styledComponents'

import './index.css'

const Pagination = props => {
  const {users, pagesCount, routeTo} = props
  const usersInPage = 10
  const totalUsers = users.length

  const totalPages = []
  for (let i = 1; i <= Math.round(totalUsers / usersInPage); i += 1) {
    totalPages.push(i)
  }

  const lastPage = totalPages.slice(-1)

  const onClickForward = () => {
    if (lastPage > pagesCount + 1) {
      routeTo(pagesCount + 2)
    }
  }

  const onClickEnd = () => {
    if (lastPage - 1 !== pagesCount) {
      routeTo(lastPage)
    }
  }

  const onClickPage = event => {
    routeTo(event.target.value)
  }

  const onClickPreviousNavigation = () => {
    if (pagesCount > 0) {
      routeTo(pagesCount)
    }
  }

  const onClickDeleteSelected = () => {
    const {deleteSelected} = props
    deleteSelected()
  }

  const onClickStartNavigation = () => {
    if (pagesCount > 0) {
      routeTo(1)
    }
  }

  return (
    <PaginationContainer>
      <button
        type="button"
        className="delete-selected-button"
        onClick={onClickDeleteSelected}
      >
        Delete Selected
      </button>
      <PaginationControl>
        <li key="doubleLeft">
          <StaringNavigation
            type="button"
            onClick={onClickStartNavigation}
            className="starting-navigation-button"
            isDisabled={pagesCount !== 0}
          >
            <AiOutlineDoubleLeft />
          </StaringNavigation>
        </li>
        <li key="Left">
          <PreviousNavigation
            type="button"
            onClick={onClickPreviousNavigation}
            className="previous-navigation-button"
            isDisabled={pagesCount !== 0}
          >
            <AiOutlineLeft />
          </PreviousNavigation>
        </li>
        {totalPages.map(eachPage => (
          <li key={eachPage}>
            <NavigationButtons
              type="button"
              className="navigation-button"
              value={eachPage}
              isActive={pagesCount === eachPage - 1}
              onClick={onClickPage}
            >
              {eachPage}
            </NavigationButtons>
          </li>
        ))}
        <li key="right">
          <ForwardNavigation
            type="button"
            onClick={onClickForward}
            className="Forward-navigation-button"
            isDisabled={pagesCount !== lastPage - 1}
          >
            <AiOutlineRight />
          </ForwardNavigation>
        </li>
        <li key="doubleRight">
          <EndNavigation
            type="button"
            onClick={onClickEnd}
            className="end-navigation-button"
            isDisabled={pagesCount !== lastPage - 1}
          >
            <AiOutlineDoubleRight />
          </EndNavigation>
        </li>
      </PaginationControl>
    </PaginationContainer>
  )
}

export default Pagination
