const express = require('express');
const User = require('../models/user');
const Address = require('../models/address');

exports.createUser = async (req, res) => {
    try {
        const { name, adicionaldName, CPF, RG, phone, address, responsibleName, responsibleSecondName, responsibleCPF, responsibleRG } = req.body;
        const user = await User.create({ name, adicionaldName, CPF, RG, phone, address, responsibleName, responsibleSecondName, responsibleCPF, responsibleRG, role_id });
        const { postal_code, city, district, street, ref_point, number } = address;
        const createAddres = await Address.create({ postal_code, city, district, street, ref_point, number, user_id: user._id });
        res.json({ user, createAddres })
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
}
exports.readUser = async (req, res) => {
    try {const Users = await User.find();
        res.status(201).json(Users);
    } catch (error) {
        res.json({ error: true, message: error.message });
    }
};
exports.updateUser = async (req, res) => {
    try {
        const updateUser = await user.save();
        res.json(updateUser);
    } catch (error) {
        res.json({error: true, message: error.message});
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        await user.delete();
    } catch (error) {
        
    }
}
exports.findUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.json({error: true, message: error.message});
    }
}