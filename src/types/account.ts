export interface LabelTag {
  text: string;
}

export interface Account {
  id: number;
  label: LabelTag[];
  type: "LDAP" | "Локальная";
  login: string;
  password: string | null;
}
