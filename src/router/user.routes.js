const {
    createUser,
    readAddress,
    deleteuser,
    updateuser,
    findUsersById,
  } = require("../controllers/userController");
  
  const express = require("express");
  const router = express.Router();
  
  router.route("/user").post(createuser);
  router.route("/user").get(readAddress);
  
  router.route("/user/:id").delete(deleteuser);
  router.route("/user/:id").put(updateuser);
  router.route("/user/:id").get(findUsersById);
  
  module.exports = router;
  