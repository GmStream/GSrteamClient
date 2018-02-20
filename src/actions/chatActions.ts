import * as actionTypes from './actionTypes';

export interface IChatMessage {
  payload: any;
  type: actionTypes.CHAT_MESSAGE_EMMITION;
}

export type ChatAction = IChatMessage;

export const emitChatMessage = (payload: any) => ({
  payload,
  type: actionTypes.CHAT_MESSAGE_EMMITION
});
