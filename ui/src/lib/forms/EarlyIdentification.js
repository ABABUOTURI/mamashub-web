import * as yup from 'yup';

const earlyIdentificationFields = {

  'headAndMouth': [
    {
      name: 'headSize',
      label: 'Head Size',
      type: 'radio',
      width: {xs:12,sm:12, md: 12, lg:4},
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
      validate: yup.string().required('Head Size is required'),
    },
    {
      name: 'headSizeAbnormalType',
      label: 'Head Size Abnormal Type',
      type: 'radio',
      validate: yup.string(),
      options: [
        { label: 'Microcephalic', value: 'Microcephalic' },
        { label: 'Hydrocephalic', value: 'Hydrocephalic' },
      ],
      relevant: (values) => values.headSize === 'Abnormal',
    },
    {
      name: 'mouthAndGums',
      label: 'Mouth and Gums',
      type: 'radio',
      validate: yup.string().required('Mouth and Gums is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'mouthAndGumsAbnormalType',
      label: 'Mouth and Gums Abnormal Type',
      type: 'checkbox', // Can select both abnormal conditions
      validate: yup.array().min(1, 'At least one option should be selected'),
      options: [
        { label: 'Cleft Lip', value: 'Cleft Lip' },
        { label: 'Palate', value: 'Palate' },
      ],
      relevant: (values) => values.mouthAndGums === 'Abnormal',
    },
  ],
  'earsAndArms': [
    {
      name: 'ears',
      label: 'Ears',
      type: 'radio',
      validate: yup.string().required('Ears is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'armsAndLegs',
      label: 'Arms and Legs',
      type: 'radio',
      validate: yup.string().required('Arms and Legs is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'armsAndLegsAbnormalType',
      label: 'Arms and Legs Abnormal Type',
      type: 'radio',
      validate: yup.string(),
      options: [
        { label: 'Club Foot', value: 'Club Foot' },
        { label: 'Hip Dislocation', value: 'Hip Dislocation' },
      ],
      relevant: (values) => values.armsAndLegs === 'Abnormal',
    },
  ],
  'movementAndGenitalia': [
    {
      name: 'muscleTone',
      label: 'Muscle Tone',
      type: 'radio',
      validate: yup.string().required('Muscle Tone is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'jointsMovement',
      label: 'Joints Movement',
      type: 'radio',
      validate: yup.string().required('Joints Movement is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'fingersAndToes',
      label: 'Fingers and Toes',
      type: 'radio',
      validate: yup.string().required('Fingers and Toes is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'armsAndShoulders',
      label: 'Arms and Shoulders',
      type: 'radio',
      validate: yup.string().required('Arms and Shoulders is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'bodyMovement',
      label: 'Body Movement',
      type: 'radio',
      validate: yup.string().required('Body Movement is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'abdominalWall',
      label: 'Abdominal Wall',
      type: 'radio',
      validate: yup.string().required('Abdominal Wall is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'genitalia',
      label: 'Genitalia',
      type: 'radio',
      validate: yup.string().required('Genitalia is required'),
      options: [
        { label: 'Normal', value: 'Normal' },
        { label: 'Abnormal', value: 'Abnormal' },
      ],
    },
    {
      name: 'anus',
      label: 'Anus',
      type: 'radio',
      validate: yup.string().required('Anus is required'),
      options: [
        { label: 'Perforate', value: 'Perforate' },
        { label: 'Imperforate', value: 'Imperforate' },
      ],
    },
  ],
};

export default earlyIdentificationFields;
