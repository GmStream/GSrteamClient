function* rootSaga() {
  yield [];
}

export default rootSaga;

export interface IAction {
  type: string;
  payload?: any;
}
