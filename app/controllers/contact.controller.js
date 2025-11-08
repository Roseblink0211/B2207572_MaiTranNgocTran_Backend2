const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");

// Hàm tạo mới contact
exports.create = (req, res) => {
  res.send({ message: "create handler" });
};

// Hàm lấy tất cả contact
exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

// Hàm lấy contact theo id
exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

// Hàm cập nhật contact theo id
exports.update = (req, res) => {
  res.send({ message: "update handler" });
};

// Hàm xóa contact theo id
exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};

// Hàm xóa tất cả contact
exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

// Hàm lấy tất cả contact được đánh dấu yêu thích
exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};

// Hàm tạo mới contact
exports.create = async (req, res, next) => {
  if (!req.body?.name) {
    return next(new ApiError(400, "Name can not be empty"));
  }

  try {
    const contactService = new ContactService(MongoDB.client);
    const document = await contactService.create(req.body);
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
};
