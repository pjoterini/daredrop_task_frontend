import { Button, MenuItem, Typography, Card, Stack } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import type { FormikState } from 'formik/dist/types';
import { Select, TextField } from 'formik-mui';
import { Platform, StreamerFormProps } from './StreamerForm.container';
import { streamerFormSchema } from './StreamerForm.schema';

interface IProps {
  onSubmit: (
    values: StreamerFormProps,
    resetForm: (
      nextState?:
        | Partial<
            FormikState<{
              name: string;
              description: string;
              platform: Platform;
            }>
          >
        | undefined,
    ) => void,
  ) => void;
}

const StreamerForm = ({ onSubmit }: IProps) => {
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        platform: Platform.twitch,
      }}
      validationSchema={streamerFormSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values, resetForm);
      }}
    >
      {({ values }) => (
        <Form>
          <Card sx={{ maxWidth: 420, minWidth: 320, mx: 'auto', mt: 4, pb: 2 }}>
            <Stack mt={{ xs: 2 }} gap={3} mx="auto" width={{ xs: '90%' }} maxWidth={400}>
              <Typography variant="h5" component="h1">
                Streamer Form
              </Typography>
              <Field name="name" label="Name" component={TextField} />
              <Field name="description" label="Description" component={TextField} />
              <Field
                component={Select}
                name="platform"
                label="Platform"
                value={values.platform || ''}
                formHelperText={{
                  children: 'Choose streamer platform',
                }}
                MenuProps={{ disableScrollLock: true }}
              >
                {Object.entries(Platform).map(([key, name]) => (
                  <MenuItem key={key} value={key}>
                    {name.toUpperCase()}
                  </MenuItem>
                ))}
              </Field>
              <Button variant="contained" type="submit" size="large" sx={{ ml: 'auto' }}>
                submit
              </Button>
            </Stack>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default StreamerForm;
