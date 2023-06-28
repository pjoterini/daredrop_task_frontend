import * as Yup from 'yup';

export const streamerFormSchema = Yup.object({
  name: Yup.string().min(1, 'Name too short').max(50, 'Name too long').required('Name is a required field'),
  description: Yup.string()
    .min(1, 'Description too short')
    .max(50, 'Description too long')
    .required('Description is a required field'),
  platform: Yup.string().required('Platform is a required field'),
});
