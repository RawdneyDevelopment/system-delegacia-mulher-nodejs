const express = require("express");

const Address = require("../models/address");

exports.createAddress = async (req, res) => {
  try {
    const {
      postal_code,
      uf,
      city,
      districit,
      street,
      ref_point,
      number,
      user_id,
    } = req.body;

    const address = await Address.create({
      postal_code,
      uf,
      city,
      districit,
      street,
      ref_point,
      number,
      user_id,
    });

    res.json(address);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

exports.readAddress = async (req, res) => {
  try {
    const address = await Address.find();
    res.status(201).json(address);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const { postal_code, uf, city, district, street, ref_point, number } =
      req.body;

    const address = await Address.findById(req.params.id);

    if (address) {
      address.postal_code = postal_code;
      address.uf = uf;
      address.city = city;
      address.districit = district;
      address.street = street;
      address.ref_point = ref_point;
      address.number = number;
    }
    const updateAddress = await address.save();
    res.json(updateAddress);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    await address.delete();
    res.json({ error: false, message: "Deletado" });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

exports.findAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    res.josn(address);
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
