export function generateFakePhoneNumber(): string {
    const random8Digits = Math.floor(10000000 + Math.random() * 90000000);
    return `086${random8Digits}`;
  }  