import { createAction } from "@reduxjs/toolkit";

interface ILogout {
  isLoggedIn: boolean;
}

export const logoutAction = createAction<ILogout>("logoutUserAction");
