const {get,post,patch,getid,deleteid} = require('../controllers/tasksController')
const router = require('express').Router();

router.route('/').get(get).post(post);
router.route('/:id').get(getid).patch(patch).delete(deleteid);

module.exports = router
