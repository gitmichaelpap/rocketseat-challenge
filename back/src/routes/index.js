const { Router } = require("express");

const usersRoutes = require("./user.routes");
const sessionsRoutes = require("./sessions.routes");
const dishesRouter = require("./dishes.routes");
const ordersRouter = require("./orders.routes");
const favoritesRouter = require("./favorites.routes");
const cartsRouter = require("./carts.routes");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);
routes.use("/dishes", dishesRouter);
routes.use("/orders", ordersRouter);
routes.use("/favorites", favoritesRouter);
routes.use("/carts", cartsRouter);

module.exports = routes;
