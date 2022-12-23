const express = require("express");
const Role = require("../models/role");

exports.createRole = async (req, res) => {
    try {
        const { name } = req.body
        const role = new Role({
            name
        });
        const createRole = await role.save();
        res.status(201).json(createRole)
    } catch (error) {
        res.json({ error: true, message: 'Erro ao criar cargo.' });
    }
}

exports.readRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(201).json(roles);
    } catch (error) {
        res.json({ error: true, message: "Erro ao buscar cargo, por favor verifique novamente." });
    }
}

exports.updateRole = async (req, res) => {
    try {
        const updateRole = await role.save()
        res.json(updateRole)
    } catch (error) {
        res.json({ error: true, message: 'Erro erro ao atualizar o cargo, por favor verifique novamente.' });
    }
}

exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        res.json(role);
    } catch (error) {

        res.json({ error: true, message: 'Erro erro ao excluir o cargo, por favor verifique novamente.' });
    }
} 

exports.findRoleById = async (req, res) => {
    try {
      const role = await Role.findById(req.params.id);
      res.json(role);
    } catch (error) {
      res.json({ error: true, message: 'Erro erro ao pesquisar o cargo, por favor verifique novamente.'});
    }
  }