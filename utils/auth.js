import cookie from "js-cookie";
import Router from "next/router";

export function handleLogin(token) {
  cookie.set("token", token);
  Router.push("/");
}

export function handleSetLocalStorage(key, data) {
  window.localStorage.setItem(key, data);
}

export function handleRemoveLocalStorage(key) {
  window.localStorage.removeItem(key);
}

export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

export function handleLogout() {
  cookie.remove("token");
  handleRemoveLocalStorage("user");
  window.localStorage.setItem("logout", Date.now());
  Router.push("/login");
}

export function setCookie(key, value) {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 7,
      path: "/"
    });
  }
}

export function removeCookie(key) {
  if (process.browser) {
    cookie.remove(key, {
      expires: 7
    });
  }
}

export function getCookie(key, req) {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
}

function getCookieFromBrowser(key) {
  return cookie.get(key);
}

function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  const getCookieValue = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith(`${key}=`));

  if (!getCookieValue) {
    return undefined;
  }

  return getCookieValue.split("=")[1];
}
