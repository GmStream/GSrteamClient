import * as utils from '../';

describe('Utils test', () => {
  const correctMockData = {
    channelName: 'bu',
    email: 'gstream.thj.bublic@gmail.com',
    name: 'alex',
    password: 'hfgurgh2444!'
  };

  const wrongMockData = {
    channelName: '1233j!',
    email: 'sfdsgftydstfgsdf',
    name: '223df',
    password: 'dfdf'
  };

  it('should return true if email is valid', () => {
    expect(utils.checkEmail(correctMockData.email)).toEqual(true);
  });

  it('should return false if email is not valid', () => {
    expect(utils.checkEmail(wrongMockData.email)).toEqual(false);
  });

  it('should return true if name is valid', () => {
    expect(utils.checkUserName(correctMockData.name)).toEqual(true);
  });

  it('should return false if name is not valid', () => {
    expect(utils.checkUserName(wrongMockData.name)).toEqual(false);
  });

  it('should return true if channel name is valid', () => {
    expect(utils.checkChannelName(correctMockData.channelName)).toEqual(true);
  });

  it('should return false if channel name is not valid', () => {
    expect(utils.checkChannelName(wrongMockData.channelName)).toEqual(false);
  });

  it('should return true if password is valid', () => {
    expect(utils.checkPassword(correctMockData.password)).toEqual(true);
  });

  it('should return false if password is not valid', () => {
    expect(utils.checkPassword(wrongMockData.password)).toEqual(false);
  });
});
