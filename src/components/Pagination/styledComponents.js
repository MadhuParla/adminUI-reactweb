import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
`
export const PaginationControl = styled.ul`
  list-style: none;
  padding-inline-start: 0px;
  display: flex;
  justify-content: space-around;
  width: 60vw;
  margin-top: 0px;
`
export const StaringNavigation = styled.button`
  padding: 12px;
  font-family: 'Roboto';
  height: 50px;
  width: 50px;
  font-weight: 600;
  border-radius: 50%;
  color: ${value => (value.isDisabled ? '#fff' : 'gray')};
  border: 2px solid ${value => (value.isDisabled ? '#0074d9' : 'gray')};
  background-color: ${value => (value.isDisabled ? '#0074d9' : 'inherit')};
`
export const PreviousNavigation = styled.button`
  padding: 12px;
  font-family: 'Roboto';
  height: 50px;
  width: 50px;
  font-weight: 600;
  border-radius: 50%;
  color: ${value => (value.isDisabled ? '#fff' : 'gray')};
  border: 2px solid ${value => (value.isDisabled ? '#0074d9' : 'gray')};
  background-color: ${value => (value.isDisabled ? '#0074d9' : 'inherit')};
`
export const NavigationButtons = styled.button`
  padding: 12px;
  font-family: 'Roboto';
  height: 50px;
  width: 50px;
  font-weight: 600;
  border-radius: 50%;
  color: ${value => (value.isDisabled ? '#fff' : 'gray')};
  border: 2px solid ${value => (value.isDisabled ? '#0074d9' : 'gray')};
  background-color: ${value => (value.isDisabled ? '#0074d9' : 'inherit')};
`

export const ForwardNavigation = styled.button`
  padding: 12px;
  font-family: 'Roboto';
  height: 50px;
  width: 50px;
  font-weight: 600;
  border-radius: 50%;
  color: ${value => (value.isDisabled ? '#fff' : 'gray')};
  border: 2px solid ${value => (value.isDisabled ? '#0074d9' : 'gray')};
  background-color: ${value => (value.isDisabled ? '#0074d9' : 'inherit')};
`

export const EndNavigation = styled.button`
  padding: 12px;
  font-family: 'Roboto';
  height: 50px;
  width: 50px;
  font-weight: 600;
  border-radius: 50%;
  color: ${value => (value.isDisabled ? '#fff' : 'gray')};
  border: 2px solid ${value => (value.isDisabled ? '#0074d9' : 'gray')};
  background-color: ${value => (value.isDisabled ? '#0074d9' : 'inherit')};
`
