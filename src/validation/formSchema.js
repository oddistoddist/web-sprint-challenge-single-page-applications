import * as yup from 'yup'

const formSchema = yup.object().shape({
    nameInput: yup
        .string()
        .trim()
        .required(" a Customer's name is required")
        .min(3, 'Name must be 3 characters long'),
    tofu: yup
        .boolean(), 
        
    sizeDropdown: yup
        .string()
        .required(),
    mozzarella: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    specialText: yup
        .string()
    
})

export default formSchema