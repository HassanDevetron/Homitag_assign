interface IPatient {
  programIdentifier: string;
  dataSource: string;
  cardNumber: string;
  memberID: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  telephoneNumber: string;
  emailAddress: string;
  consent: string;
  mobileNumber: string;
}

export default IPatient;