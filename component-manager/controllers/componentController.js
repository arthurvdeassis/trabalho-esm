const Component = require('../models/Component');

exports.createComponent = async (req, res) => {
  try {
    const component = await Component.create(req.body);
    res.status(201).send(component);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getComponents = async (req, res) => {
  try {
    const components = await Component.findAll();
    res.status(200).send(components);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getComponentById = async (req, res) => {
  try {
    const component = await Component.findByPk(req.params.id);
    if (!component) {
      return res.status(404).send();
    }
    res.status(200).send(component);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateComponent = async (req, res) => {
  try {
    const component = await Component.findByPk(req.params.id);
    if (!component) {
      return res.status(404).send();
    }
    await component.update(req.body);
    res.status(200).send(component);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteComponent = async (req, res) => {
  try {
    const component = await Component.findByPk(req.params.id);
    if (!component) {
      return res.status(404).send();
    }
    await component.destroy();
    res.status(200).send(component);
  } catch (error) {
    res.status(500).send(error);
  }
};