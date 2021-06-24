const validate = (values) => {
 const errors = {};

 if(!values['email']) {
  errors['email'] = 'required';
 }
 if(!values['gdpr']) {
  errors['gdpr'] = 'required';
 }
 return errors
}

export default validate