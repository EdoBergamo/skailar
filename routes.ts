/**
 * An array of routes that are accessible to the public
 * This routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
  '/login',
  '/register',
]

/**
 * The prefix for API Authentication Routes
 * Routes that starts with this prefix are used for API Authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'