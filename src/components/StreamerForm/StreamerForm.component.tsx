import { Box, Button, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { Select, TextField } from 'formik-mui';
import { Platform, StreamerFormProps } from './StreamerForm.container';
import { streamerFormSchema } from './StreamerForm.schema';

interface IProps {
  onSubmit: (values: StreamerFormProps) => void;
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
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <Stack mt={{ xs: 2, sm: 4 }} gap={3} mx="auto" width={{ xs: '100%' }} maxWidth={400}>
            <Typography variant="h5" component="h1">
              Streamer Form
            </Typography>
            <Field
              name="name"
              label="Name"
              component={TextField}
              // error={errors.firstName}
              // touched={touched.firstName}
            />

            <Field
              name="description"
              label="Description"
              component={TextField}
              // multiline={true}
              // error={errors.lastName}
              // touched={touched.lastName}
            />

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

            <Box ml="auto" mb={5}>
              <Button variant="contained" type="submit" size="large">
                {'Submit'}
              </Button>
              {JSON.stringify(values)}
            </Box>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default StreamerForm;
