export interface userDataInterface {
  name: string;
  gender: string;
}

export interface infoModalInterface {
  handleSubmit: (values: userDataInterface) => void;
  open: boolean;
}
