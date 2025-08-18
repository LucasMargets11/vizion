export function validateEmail(email: string) {
  return /.+@.+\..+/.test(email);
}
