const {
    createRole,
    readRoles,
    updateRole,
    deleteRole,
    findVictimById
  } = require("../controllers/roleController");
  
  router.route("/role").post(createRole);
  router.route("/role").get(readRoles);
  router.route("/role/:id").delete(deleteRole);
  router.route("/role/:id").put(updateRole);
  router.route("/role/:id").get(findVictimById);
  
  module.exports = router;
  