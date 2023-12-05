const express = require("express")
const router = express.Router();

const {submitCustomerServiceRequest,getCustomerServiceCategory,getCutomerServicesBycategory} = require("../controllers/customerService");

router.get('/', (req, res) => {
    const user = req.user;
    if(!user){
        res.redirect('/auth/google');
    }else{
        const userId = req.user.id;
        // Use the user ID for further processing or rendering the page
        res.redirect(`/customer-service/${userId}`)
    }
  });

router.post('/:id', submitCustomerServiceRequest);
router.get('/:id', getCustomerServiceCategory);
router.get('/:id/:category',getCutomerServicesBycategory);
module.exports = router;