const expres = require("express");
const { celebrate, Joi, Segments } = require("celebrate");

const routes = expres.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.post("/sessions", SessionController.create);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email(),
      whatsapp: Joi.string().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().max(2).min(2)
    })
  }),
  OngController.create
);
routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get(
  "/profiles",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);
module.exports = routes;
