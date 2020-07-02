export default class LocalStorage {
  static write(key: string, val: any): void {
    if (typeof val === 'undefined') {
      throw new Error('value for write is undefined!');
    }

    localStorage.setItem(key, JSON.stringify(val));
  }

  static read(key: string): any | null {
    const localStorageData: any = localStorage.getItem(key);

    if (!localStorageData) {
      return null;
    }

    return JSON.parse(localStorageData);
  }

  static remove(key: string): void {
    localStorage.removeItem(key);
  }

  static removeAll(): void {
    Object.keys(localStorage).forEach((key) => {
      LocalStorage.remove(key);
    });
  }
}
