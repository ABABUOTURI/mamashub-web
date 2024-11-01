import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Box,
} from "@mui/material";
import React from "react";
import { Formik, Form, Field as FormikField } from "formik";
import * as Yup from "yup";
import earlyIdentificationFields from "../lib/forms/EarlyIdentification";

const earlyIdentificationValidation = Yup.object().shape({
  headSize: Yup.string().required("Head size is required"),
  mouthAndGums: Yup.string().required("Mouth and gums details are required"),
  ears: Yup.string().required("Ears details are required"),
  armsAndLegs: Yup.string().required("Arms and legs details are required"),
  muscleTone: Yup.string().required("Muscle tone is required"),
  jointsMovement: Yup.string().required("Joints movement is required"),
  fingersAndToes: Yup.string().required("Fingers and toes details are required"),
  armsAndShoulders: Yup.string().required("Arms and shoulders details are required"),
  bodyMovement: Yup.string().required("Body movement is required"),
  abdominalWall: Yup.string().required("Abdominal wall details are required"),
  genitalia: Yup.string().required("Genitalia details are required"),
  anus: Yup.string().required("Anus details are required"),
});

const EarlyIdentification = () => {
  const initialValues = {
    headSize: "",
    headSizeAbnormalType: "",
    mouthAndGums: "",
    mouthAndGumsAbnormalType: [],
    ears: "",
    armsAndLegs: "",
    armsAndLegsAbnormalType: "",
    muscleTone: "",
    jointsMovement: "",
    fingersAndToes: "",
    armsAndShoulders: "",
    bodyMovement: "",
    abdominalWall: "",
    genitalia: "",
    anus: "",
    remarks: "",
  };

  const renderFields = (fields, values, handleChange, touched, errors) => {
    return fields.map((field) => (
      <Grid item xs={12} key={field.name}>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          {field.label}
        </Typography>

        {field.type === "radio" && (
          <>
            <RadioGroup
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
              row
            >
              {field.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>

            {field.relevant && field.relevant(values) && (
              <FormikField
                as={TextField}
                name={`${field.name}AbnormalType`}
                label={`${field.label} Abnormal Type`}
                fullWidth
                error={touched[`${field.name}AbnormalType`] && !!errors[`${field.name}AbnormalType`]}
                helperText={touched[`${field.name}AbnormalType`] && errors[`${field.name}AbnormalType`]}
              />
            )}
          </>
        )}

        {field.type === "checkbox" && field.relevant && field.relevant(values) && (
          field.options.map((option) => (
            <FormControlLabel
              key={option.value}
              control={
                <Checkbox
                  checked={values[field.name]?.includes(option.value)}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...(values[field.name] || []), option.value]
                      : values[field.name].filter((v) => v !== option.value);
                    handleChange({ target: { name: field.name, value: newValue } });
                  }}
                />
              }
              label={option.label}
            />
          ))
        )}

        <FormikField
          as={TextField}
          name={`${field.name}Remarks`}
          label={`${field.label} Remarks`}
          fullWidth
          margin="normal"
          multiline
          rows={2}
          error={touched[`${field.name}Remarks`] && !!errors[`${field.name}Remarks`]}
          helperText={touched[`${field.name}Remarks`] && errors[`${field.name}Remarks`]}
        />
      </Grid>
    ));
  };

  return (
    <div>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Early Identification of Congenital Abnormalities
      </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Formik
        initialValues={initialValues}
        validationSchema={earlyIdentificationValidation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, values, errors, touched }) => (
          <Form>
            <Box p={3}>
              <Grid container spacing={2}>
                {renderFields(earlyIdentificationFields.headAndMouth, values, handleChange, touched, errors)}
                {renderFields(earlyIdentificationFields.earsAndArms, values, handleChange, touched, errors)}
                {renderFields(earlyIdentificationFields.movementAndGenitalia, values, handleChange, touched, errors)}
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EarlyIdentification;
