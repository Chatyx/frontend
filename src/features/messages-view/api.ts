import apiSlice from 'shared/api';
import { CHAT_MESSAGES_STEP } from 'shared/config';
import { ApiChatMessagesParams, ApiChatMessagesResponse } from './consts/chat-messages';
import { ApiChatMembersResponse } from './consts/chat-members';

const chatMessages = apiSlice.injectEndpoints({
    endpoints: build => ({
        getChatMessages: build.query<ApiChatMessagesResponse, ApiChatMessagesParams>({
            query: ({
                chatId,
                offset = 0,
                limit = CHAT_MESSAGES_STEP,
                offsetDate = new Date().toISOString(),
                direction = 'older'
            }) => ({
                url: `chats/${chatId}/messages?limit=${limit}&offset=${offset}&offset_date=${offsetDate}&direction=${direction}`
            })
        }),
        getChatMembers: build.query<ApiChatMembersResponse, string>({
            query: data => ({
                url: `chats/${data}/members`
            })
        })
    })
});

export const { useLazyGetChatMessagesQuery, useLazyGetChatMembersQuery } = chatMessages;
