const router = require('express').Router();
const authCheck = require('../../middleware/firebaseAuthMiddleware')

const userRouter = require('./userRouter-OPEN')
const userRouter_AUTH = require('./userRouter-AUTH')

// add param handlers to the router... doesn't seem to work here
// require('./paramHelpers')(router)

// TODO: reorganize routes for more consistency, i.e. pick a convention.
//  As of now it's unclear which router should have a route like `/api/posts/:postId/comments`.
//  Should it be the first entity or last?


router.use(userRouter)
router.use(authCheck)
router.use(userRouter_AUTH)

module.exports = router;