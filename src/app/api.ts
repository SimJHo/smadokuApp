import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setShowAddPost, setShowProgress } from '../slices/uiSlice';
import { ResponseData } from './apiTypes';
import { showAlert } from '../slices/alertSlice';
import { resetUser, setAccessToken } from '../slices/userSlice';
import Language from './Language';

// @ts-ignore
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    timeout: 30000,
    prepareHeaders: async (headers) => {
      if (
        args.url === '/image/posts/file' ||
        args.url === '/image/reply/file'
      ) {
        headers.set('Accept', 'application/json');
        headers.set('Content-Type', 'multipart/form-data');
      } else {
        headers.set('Content-Type', 'application/json');
      }

      const accessToken = await sessionStorage.getItem('accessToken');
      const lastLoginTime = await sessionStorage.getItem('lastLoginTime');

      if (extraOptions && extraOptions.noToken) {
      } else {
        if (accessToken && lastLoginTime) {
          headers.set('accessToken', accessToken as string);
          headers.set('lastLoginTIme', lastLoginTime as string);
        } else {
        }
      }
      return headers;
    },
  });

  api.dispatch(setShowProgress(true));
  let response = await baseQuery(args, api, extraOptions);

  //오류일때
  if (response.error) {
    if (
      response.error.status === 'TIMEOUT_ERROR' ||
      response.error.status === 'FETCH_ERROR'
    ) {
      // extraOptions && extraOptions.hideProgress;
      api.dispatch(
        showAlert({
          title: Language.error,
          message: Language.network_timeout,
          confirmText: Language.enter,
        }),
      );
    } else {
      const errorData = response.error.data as ResponseData;
      if (response.error.status === 401 || response.error.status === 403) {
        sessionStorage.clear();
        api.dispatch(resetUser());
        api.dispatch(setShowAddPost(false));
      }
      if (extraOptions && extraOptions.hideProgress) {
      } else {
        api.dispatch(
          showAlert({
            title: Language.error,
            message: errorData.resultMessage,
            confirmText: Language.enter,
          }),
        );
      }
    }
  }

  //로그인 성공일떄 토큰 저장
  if (response.data) {
    if (args.url === '/member/web/code') {
      // @ts-ignore
      if (response.data.resultCode === '200') {
        // @ts-ignore
        const token = response.meta.response.headers.get('accesstoken');
        // @ts-ignore
        const loginTIme = response.meta.response.headers.get('lastLoginTime');
        if (token && loginTIme) {
          sessionStorage.setItem('accessToken', token);
          sessionStorage.setItem('lastLoginTime', loginTIme);
          api.dispatch(setAccessToken(token));
        }
      }
    }
  }
  api.dispatch(setShowProgress(false));
  return response;
};

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  // @ts-ignore
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
