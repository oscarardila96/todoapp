const Tasks = require("../models/tasks.model");

class TaskServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = Tasks.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUser) {
    try {
      const result = await Tasks.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await Tasks.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await Tasks.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TaskServices;