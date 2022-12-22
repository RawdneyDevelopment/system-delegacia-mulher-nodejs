const express = require("express");
const Victim = require("../models/victim");
const Address = require("../models/address");

exports.createVictim = async (req, res) => {
  try {
    const {
      name,
      adicionaldName,
      CPF,
      RG,
      phone,
      address,
      responsibleName,
      responsibleSecondName,
      responsibleCPF,
      responsibleRG,
      role_id,
    } = req.body;
    const victim = await Victim.create({
      name,
      adicionaldName,
      CPF,
      RG,
      phone,
      address,
      responsibleName,
      responsibleSecondName,
      responsibleCPF,
      responsibleRG,
      role_id,
    });
    const { postal_code, city, district, street, ref_point, number } = address;
    const createAddres = await Address.create({
      postal_code,
      city,
      district,
      street,
      ref_point,
      number,
      user_id: user._id,
    });
    res.json({ victim, createAddres });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
exports.readVictim = async (req, res) => {
  try {
    const Victims = await Victim.find();
    res.status(201).json(Victims);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
exports.updateVictim = async (req, res) => {
  try {
    const updateVictim = await victim.save();
    res.json(updateVictim);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
exports.deleteVictim = async (req, res) => {
  try {
    const victim = await Victim.findById(req.params.id);
    await victim.delete();
  } catch (error) {}
};
exports.findVictimById = async (req, res) => {
  try {
    const victim = await Victim.findById(req.params.id);
    res.json(victim);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
