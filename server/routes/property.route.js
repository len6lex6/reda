import express from 'express'

 import {
    getAllProperties,
    getPropertyDetails,
    createProperty,
    updateProperty,
    deleteProperty
} from '../controllers/property.controller.js'

const router = express.Router()

router.route('/').get(getAllProperties).post(createProperty)
router.route('/:id').get(getPropertyDetails).patch(updateProperty).delete(deleteProperty)

export default router