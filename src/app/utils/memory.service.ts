import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  public key!: string;
  public value!: string;

  constructor() {
  }

  public async setMemory(): Promise<boolean> {
    try {
      localStorage.setItem(this.key, this.value);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async getMemory(): Promise<any> {
    try {
      let resp = localStorage.getItem(this.key);
      return resp;
    } catch (e) {
      return null;
    }
  }


}
