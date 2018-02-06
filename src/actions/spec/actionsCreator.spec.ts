import * as actionType from '../actionTypes';
import * as formActions from '../formActions';

describe('Actions spec', () => {
  const mockData = {
    channelName: 'bublik',
    email: 'test@mail.com',
    name: 'Lyoha',
    password: 'bfhgfkjf2431!',
    token: 'dfdfhydgftgt32623t462t3rf23tvf263t62t3233'
  };
  it('shoul create signUp action with payload', () => {
    const payload = {
      channelName: mockData.channelName,
      email: mockData.email,
      name: mockData.name,
      password: mockData.password
    };
    const expectedAction = {
      payload,
      type: actionType.USER_SIGN_UP
    };
    expect(formActions.signUp(payload)).toEqual(expectedAction);
  });

  it('shoul create signIn action with payload', () => {
    const payload = {
      email: mockData.email,
      password: mockData.password
    };
    const expectedAction = {
      payload,
      type: actionType.USER_SIGN_IN
    };
    expect(formActions.signIn(payload)).toEqual(expectedAction);
  });

  it('shoul create confirm action with payload', () => {
    const payload = {
      token: mockData.token
    };
    const expectedAction = {
      payload,
      type: actionType.USER_CONFIRMATION
    };
    expect(formActions.emailConfirmation(payload)).toEqual(expectedAction);
  });
});
