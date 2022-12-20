const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
var parse_username = /^[a-zA-Z0-9]+$/;
var parse_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

exports.createUser = async (req, res) => {
}
exports.updateUser = async (req, res) => {
}
exports.deleteUser = async (req, res) => {
}
exports.findUserById = async (req, res) => {
}