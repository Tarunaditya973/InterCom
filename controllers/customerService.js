const User = require("../models/users");

const CustomerService = require('../models/customerServiceModel');

const submitCustomerServiceRequest = async (req, res) => {
    try {
        const userId = req.user ? req.user.id : null;
      const { category, comments } = req.body;
  
      if (!userId) {
        return res.redirect('/auth/google'); // Redirect to /auth/google if user does not exist
      }
  
      // Create a new instance of the CustomerService model
      const newRequest = await CustomerService.create({
        userId: userId,
        category: category,
        comments: comments,
      });
  
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  };
  


  const getCustomerServiceCategory = async (req, res) => {
    try {
      const userId = req.user ? req.user.id : null;
      if (!userId) {
        return res.redirect('/auth/google'); // Redirect to /auth/google if user does not exist
      }
  
      // Retrieve customer service requests by user ID
      const requests = await CustomerService.find({ userId: userId }).distinct('category');
  
      return res.json({
        success: true,
        categories: requests,
      });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  };
  

  const getCutomerServicesBycategory = async (req, res) => {
    try {
      const userId = req.user ? req.user.id : null; // Assuming user ID is available in req.user.id
      const { category } = req.params;
  
      if (!userId) {
        return res.redirect('/auth/google'); // Redirect to /auth/google if user does not exist
      }
  
      // Retrieve customer service requests by category and user ID
      const customerService = await CustomerRequest.find({ userId: userId, category: category }).select('comments');
  
      return res.json({ success: true, customerService: customerService });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
  };
  

  

module.exports = {
  submitCustomerServiceRequest,
  getCustomerServiceCategory,
  getCutomerServicesBycategory
};
