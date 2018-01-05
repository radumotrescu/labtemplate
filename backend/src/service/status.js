"use strict";

const status = require('../models').status;

exports.list = function (req, res) {
  status.findAll().then(status => {
    res.jsonp(status);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(status.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  status.findById(id).then(status => {
    if (!status) {
      return res.status(400).send({
        message: 'status Not Found',
      });
    }
    res.jsonp(status);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  status.findById(req.params.id)
    .then(status => {
      if (!status) {
        return res.status(400).send({
          message: 'status Not Found',
        });
      }
      return status
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};