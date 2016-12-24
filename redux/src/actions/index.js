/**
  bundle.js:20602 Uncaught Error: Actions must be plain objects.
  Use custom middleware for async actions
*/
// export default function으로 할 경우 에러가 발생하는데
// export default와 export만 할 경우의 차이점이 무엇인가?
export function selectBook(book) {
  console.log('A book has been selected:', book.title);
  // selectBook is an ActionCreator, it needs tp return an action,
  // an object with a type propety
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
