export default interface SignUpRequestDto {
  email: string;
  password: string;
  nickname: string;
  telNumberber: string;
  address: string;
  addressDetail: string | null;
  agreedPersonal: boolean;
}